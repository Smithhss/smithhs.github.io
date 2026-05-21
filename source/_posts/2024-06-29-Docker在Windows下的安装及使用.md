---
title: Docker在Windows下的安装及使用
date: 2024-06-23 15:56:00
tags: Docker
categories: 编程开发
cover: 'https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/docker.png'
---

 

#### Docker在Windows下的安装及使用

+   [一、前言](#_1)
+   [二、安装Docker](#Docker_34)
+   +   [2.1 安装 docker desktop](#21__docker_desktop_35)
    +   [2.2 修改 docker desktop 配置](#22__docker_desktop__42)
+   [三、使用Docker](#Docker_58)
+   +   [3.1 安装redis](#31_redis_60)
    +   [3.2 安装mysql](#32_mysql_109)
    +   [3.3 安装nacos](#33_nacos_154)
    +   [3.4 安装minio](#34_minio_258)
    +   [3.5 安装xxl-job](#35_xxljob_282)
+   [四、使用 docker-compose 管理容器](#_dockercompose__324)
+   +   [4.1 创建 docker-compose.yml 文件](#41__dockercomposeyml__325)
    +   [4.2 启动服务](#42__457)

## 一、前言

在Windows上安装Docker时，可以选择使用不同的后端。  
其中两个常见的选择是：WSL 2（Windows Subsystem for Linux 2）和 Hyper-V 后端。此外，还可以选择使用Windows容器。  
三者的区别了解即可，推荐用WSL 2，因为虚拟机太重了…懂的都懂。

**1\. WSL 2 后端：**

+   使用WSL 2后端时，Docker将与WSL 2集成，利用WSL 2提供的Linux内核。这使得Docker容器在Windows上运行时，实际上是在WSL 2中运行的，享受到了与Linux系统更为接近的环境。WSL 2能够提供更好的性能和与Linux相似的开发体验。
+   优点：更轻量，性能较好，支持在Windows和Linux之间无缝切换。
+   缺点：可能不支持所有Windows特性，对于某些特殊应用可能存在兼容性问题。

**2\. Hyper-V 后端：**

+   使用Hyper-V后端时，Docker容器将在Hyper-V虚拟机中运行，与主机Windows系统隔离。这种方式比较传统，类似于在虚拟机中运行Docker。
+   优点：更好的隔离性，适用于需要强大隔离的场景。
+   缺点：相对于WSL 2，可能稍显重量级，性能稍逊一些。

**3\. Windows容器：**

+   Windows容器是一种与Hyper-V相似的隔离技术，允许在Windows上运行基于Windows的Docker容器。与Linux容器相比，Windows容器更适用于运行基于Windows的应用程序。
+   优点：对于Windows应用程序的兼容性更好。
+   缺点：相较于WSL 2，可能性能较差，并且一些Linux特性可能不支持。

Docker提供了GUI前端 Docker Desktop，下面会介绍。  
本人电脑是Win10专业版，默认安装完是WSL 2（Windows Subsystem for Linux）。  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/b02158eae3bb7ffc72732ab0c560b637png.jpg)  

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/95975aab2793f1642ec2693b263d62bapng.jpg)


在 cmd 中查看 wsl 版本信息：

```bash
wsl -l

wsl -v

wsl -l -v
12345
```

## 二、安装Docker

### 2.1 安装 docker desktop

官方下载地址：[https://docs.docker.com/desktop/install/windows-install/](https://docs.docker.com/desktop/install/windows-install/)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0c86360fc0fe9d094707fe8b6bbcf1bepng.jpg)  
下载完成后进行安装，只能装在C盘，不支持更改安装目录。

可以在cmd中执行：docker version来验证是否安装成功。

### 2.2 修改 docker desktop 配置

1）开启WSL 2运行Docker，正常是默认开启的  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6c6b70fad576182b369473b534bfc253png.jpg)

2）修改资源存储目录：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/bd9ea67a008e2211088de06b140c5372png.jpg)

3）配置国内镜像源，可以添加多个，json格式

```json
"registry-mirrors": [
    "https://mirror.ccs.tencentyun.com",
    "http://hub-mirror.c.163.com",
    "https://registry.docker-cn.com"
  ]
12345
```

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/c7cc91629bbf092c3454bb6d77c1c7bepng.jpg)

## 三、使用Docker

Docker常用命令：[https://blog.csdn.net/mst\_sun/article/details/135133934](https://blog.csdn.net/mst_sun/article/details/135133934)

### 3.1 安装redis

先有镜像，后有容器。

**第一步：拉取镜像**

```bash
# 以redis:7.0.14版本为例，在cmd中运行以下命令
docker pull redis:7.0.14
12
```

**第二步：创建挂载目录**

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/055493812003ce76dc99858b3b20b749png.jpg)  
1）创建挂载目录data  
2）下载相应版本的redis.conf 文件：[https://github.com/redis/redis/tags](https://github.com/redis/redis/tags)  
3）修改 redis.conf 文件中的参数 bind 为 0.0.0.0

**第三步：创建并运行容器**

> Linux 中换行输入符是 \\  
> Windows cmd 中换行输入符是 ^

```bash
docker run --name redis-dev -d ^
--restart unless-stopped ^
-e TZ=Asia/Shanghai ^
-p 16379:6379 ^
-v D:\Develop\Docker\Data\redis\redis.conf:/etc/redis/redis.conf ^
-v D:\Develop\Docker\Data\redis\data:/data ^
redis:7.0.14 ^
redis-server /etc/redis/redis.conf ^
--requirepass 123456 ^
--appendonly yes
12345678910
```

参数解释：

```bash
--name redis-dev     #给容器命名为redis-dev
-d                   #后台运行容器
--restart unless-stopped	#设置重启策略为在容器手动停止时以外的任何原因退出时重启
-e TZ=Asia/Shanghai  #设置容器的时区
-p 16379:6379        #将容器的6379端口映射到主机的16379端口
-v D:\Develop\Docker\Data\redis\redis.conf:/etc/redis/redis.conf #将配置文件映射到容器
-v D:\Develop\Docker\Data\redis\data:/data                       #将数据目录映射到容器
redis:7.0.14         #使用版本为7.0.14的redis镜像
redis-server /etc/redis/redis.conf     #使用容器内的redis配置启动服务
--requirepass		 #连接密码
--appendonly yes     #开启持久化
1234567891011
```

**第四步：验证**  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0ccdb9d9c8d2b62c5a31eab50f797431png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/9035f217ec6bff40b7c816f7c5e5a42fpng.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/59be3d1652761b9c00efbbadf8bc808bpng.jpg)

### 3.2 安装mysql

**第一步、拉取镜像**

```bash
# 以mysql8.0.35版本为例
docker pull mysql:8.0.35
12
```

**第二步、创建docker网络**

```bash
# 创建docker网络，便于容器可以通过网络与宿主机和其他容器通信
docker network create docker-network
12
```

**第三步、创建挂载目录**  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/dd5d690057ba4a4e62cfbbe7f53421abpng.jpg)  
**第四步：创建并运行容器**

```bash
docker run --name mysql-dev -d ^
--restart unless-stopped ^
-e TZ=Asia/Shanghai ^
--network docker-network ^
-v D:\Develop\Docker\Data\mysql\log:/var/log/mysql ^
-v D:\Develop\Docker\Data\mysql\data:/var/lib/mysql ^
-v D:\Develop\Docker\Data\mysql\conf:/etc/mysql/conf.d ^
-p 13306:3306 ^
-e MYSQL_ROOT_PASSWORD=123456 ^
mysql:8.0.35
12345678910
```

参数解释：

```bash
--name mysql-dev		#指定容器名称
-d						#后台运行容器
--restart unless-stopped	#设置重启策略为在容器手动停止时以外的任何原因退出时重启
-e TZ=Asia/Shanghai		#设置容器时区
--network docker-network	#将容器连接到自定义的 Docker网络中
-v						#目录挂载
-p 13306:3306			#将容器的 3306端口映射到宿主机的 13306端口
-e MYSQL_ROOT_PASSWORD=123456	# mysql root用户的密码
mysql:8.0.35			#使用的mysql镜像版本
123456789
```

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0b74b7a7d5fbf13ab8b1c2f4d4afac6epng.jpg)

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d5a417d2f58362fa8b90c242e70b09f8png.jpg)

如果客户端连接时提示：Public Key Retrieval is not allowed，可以尝试将驱动参数allowPublicKeyRetrieval修改为true：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/a6154cc6aa81233b121012c95062c7a3png.jpg)

### 3.3 安装nacos

**第一步、拉取镜像**

```bash
# 以v2.2.3版本为例
docker pull nacos/nacos-server:v2.2.3
12
```

**第二步、拷贝nacos目录及文件到宿主机**

1）挂载目录前，先启动一次docker

```bash
# 只要启动后是running状态就可以
docker run --name nacos-dev -d ^
-e MODE=standalone ^
-p 18848:8848 ^
-p 19848:9848 ^
-p 19849:9849 ^
nacos/nacos-server:v2.2.3
1234567
```

2）拷贝nacos目录到宿主机

```bash
docker cp nacos-dev:/home/nacos/bin D:\Develop\Docker\Data\nacos
docker cp nacos-dev:/home/nacos/conf D:\Develop\Docker\Data\nacos
docker cp nacos-dev:/home/nacos/data D:\Develop\Docker\Data\nacos
docker cp nacos-dev:/home/nacos/logs D:\Develop\Docker\Data\nacos
1234
```

3）停止并删除容器

```bash
docker stop nacos-dev && docker rm nacos-dev
1
```

**第三步：在mysql中执行nacos sql脚本**

1）创建数据库：nacos（名称自定义）

2）执行sql脚本（mysql-schema.sql）：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/acae6655994d5a755e63779491fc2bf5png.jpg)  
执行后会创建如下10几张表：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/8e71a22b4d3762c2a78b13a5cc423c52png.jpg)

**第四步：创建并以挂载目录的方式启动容器**

```bash
docker run --name nacos-dev -d ^
--restart unless-stopped ^
--network docker-network ^
--privileged=true ^
-p 18848:8848 ^
-p 19848:9848 ^
-p 19849:9849 ^
-e PREFER_HOST_MODE=hostname ^
-e MODE=standalone ^
-e SPRING_DATASOURCE_PLATFORM=mysql ^
-e MYSQL_SERVICE_HOST=mysql-dev ^
-e MYSQL_SERVICE_PORT=3306 ^
-e MYSQL_SERVICE_DB_NAME=nacos ^
-e MYSQL_SERVICE_USER=root ^
-e MYSQL_SERVICE_PASSWORD=123456 ^
-e JVM_XMS=512m ^
-e JVM_XMX=512m ^
-e JVM_XMN=256m ^
-e MYSQL_SERVICE_DB_PARAM="characterEncoding=utf8&connectTimeout=10000&socketTimeout=30000&autoReconnect=true&useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true" ^
-v D:\Develop\Docker\Data\nacos\bin:/home/nacos/bin ^
-v D:\Develop\Docker\Data\nacos\conf:/home/nacos/conf ^
-v D:\Develop\Docker\Data\nacos\data:/home/nacos/data ^
-v D:\Develop\Docker\Data\nacos\logs:/home/nacos/logs ^
nacos/nacos-server:v2.2.3
123456789101112131415161718192021222324
```

参数解释

```bash
--name nacos-dev		# 容器名称
-d						# 后台运行容器
--restart unless-stopped	#设置重启策略为在容器手动停止时以外的任何原因退出时重启
--network docker-network	# 将容器连接到自定义的 Docker网络中
--privileged=true		# 提供一些额外的权限给容器
-p 18848:8848			# 将容器的 8848端口映射到宿主机的 18848端口
-p 19848:9848			# 将容器的 9848端口映射到宿主机的 19848端口
-p 19849:9849			# 将容器的 9849端口映射到宿主机的 19849端口
-e PREFER_HOST_MODE=hostname		# 设置 Nacos使用主机名模式
-e MODE=standalone		# 设置 Nacos运行模式为单机模式
-e SPRING_DATASOURCE_PLATFORM=mysql		# 设置数据源平台为 MySQL
-e MYSQL_SERVICE_HOST=mysql-dev			# Mysql容器名
-e MYSQL_SERVICE_PORT=3306				# Mysql容器端口
-e MYSQL_SERVICE_DB_NAME=nacos			# nacos数据库
-e MYSQL_SERVICE_USER=root				# 连接Mysql用户
-e MYSQL_SERVICE_PASSWORD=123456		# 连接Mysql密码
-e JVM_XMS=512m			# 设置 Java 虚拟机的初始堆大小为 512MB
-e JVM_XMX=512m			# 设置 Java 虚拟机的最大堆大小为 512MB
-e JVM_XMN=256m			# 设置 Java 虚拟机的新生代堆大小为 256MB
-e MYSQL_SERVICE_DB_PARAM="characterEncoding=utf8&connectTimeout=10000&socketTimeout=30000&autoReconnect=true&useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true" # 设置MySQL连接的参数
-v D:\Develop\Docker\Data\nacos\bin:/home/nacos/bin	# 挂载宿主机的 Nacos bin 目录到容器
-v D:\Develop\Docker\Data\nacos\conf:/home/nacos/conf	# 挂载宿主机的 Nacos 配置目录到容器
-v D:\Develop\Docker\Data\nacos\data:/home/nacos/data	# 挂载宿主机的 Nacos 数据目录到容器
-v D:\Develop\Docker\Data\nacos\logs:/home/nacos/logs	# 挂载宿主机的 Nacos 日志目录到容器
nacos/nacos-server:v2.2.3  # 使用的 Nacos镜像版本
12345678910111213141516171819202122232425
```

**第五步：验证**

1）在浏览器中访问：http://localhost:18848/nacos  
默认用户：nacos，密码：nacos  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/770f87f3ae65c2ae61b87636701b137fpng.jpg)

2）创建命名空间：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2a526d8844a08704b20210df995719d5png.jpg)

命名空间保存到了mysql，说明本次安装成功了。  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0a3f1d4d4243e450a99ee57f0c91b8a3png.jpg)

### 3.4 安装minio

**第一步、拉取镜像**

```bash
docker pull minio/minio
1
```

**第二步、创建挂载目录**  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/cdd5f3ecc6f9a84fee2e355ed6daf666png.jpg)  
**第三步：创建并运行容器**

```bash
docker run --name minio -d ^
-e TZ=Asia/Shanghai ^
-e "MINIO_ACCESS_KEY=minioadmin" ^
-e "MINIO_SECRET_KEY=minioadmin" ^
-p 9000:9000 ^
-p 9001:9001 ^
-v D:\Develop\Docker\Data\minio\data:/data ^
-v D:\Develop\Docker\Data\minio\config:/root/.minio ^
minio/minio:latest server /data --console-address ":9001"
123456789
```

**第四步：验证**  
访问 [http://127.0.0.1:9000](http://127.0.0.1:9000) 或 [http://127.0.0.1:9001](http://127.0.0.1:9001)  
用户名、密码：minioadmin  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7267109cc1d5b14f80934b36539996b0png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2521f309270d52bcd86d67a5f87a8048png.jpg)

### 3.5 安装xxl-job

官方文档：[快速入门](https://www.xuxueli.com/xxl-job/#%E4%BA%8C%E3%80%81%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8)

**第一步、拉取镜像**

```bash
docker pull xuxueli/xxl-job-admin:2.4.0
1
```

**第二步、执行初始化脚本**  
下载地址：[tables\_xxl\_job.sql](https://github.com/xuxueli/xxl-job/blob/master/doc/db/tables_xxl_job.sql)

**第三步、创建挂载目录**  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5fa97d96abb6b599f5b08ab3ba7fb391png.jpg)![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7bfe617957ab581e9efff09b95c3fec1png.jpg)  
配置文件下载：[application.properties](https://github.com/xuxueli/xxl-job/blob/master/xxl-job-admin/src/main/resources/application.properties)

修改 mysql 连接信息：

```bash
spring.datasource.url=jdbc:mysql://[IP 或 容器名]:3306/xxl_job?useUnicode=true&characterEncoding=UTF-8&autoReconnect=true&serverTimezone=Asia/Shanghai
spring.datasource.username=root
spring.datasource.password=123456
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
1234
```

**第四步：创建并运行容器**

```bash
docker run --name xxl-job -d ^
--network docker-network ^
-e TZ=Asia/Shanghai ^
-e PARAMS="--spring.config.location=/application.properties" ^
-p 8081:8080 ^
-v D:\Develop\Docker\Data\xxl-job\logs:/data/applogs ^
-v D:\Develop\Docker\Data\xxl-job\conf\application.properties:/application.properties ^
xuxueli/xxl-job-admin:2.4.0
12345678
```

**第五步：验证**  
http://localhost:8081/xxl-job-admin/  
用户名：admin  
密码：123456  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/54ffb820eb7d4b3aafd5b74ad3839a4epng.jpg)

新增一个任务：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/cf6ae7b29b2982a45dfab9e7447dbf72png.jpg)  
查看数据库：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/bf31e1999b8595676df8ef336bc9303cpng.jpg)

## 四、使用 docker-compose 管理容器

### 4.1 创建 docker-compose.yml 文件

```bash
# 定义compose语义版本
version: '3.8'
# 定义服务
services:
  redis:
    image: redis:7.0.14
    container_name: redis
    # 重启策略：在容器手动停止时以外的任何原因退出时重启
    restart: unless-stopped
    # 启动redis服务；设置密码为123456；开启redis持久化
    command: redis-server /etc/redis/redis.conf --requirepass 123456 --appendonly yes
    # 设置容器时区、语言环境
    environment:
      TZ: Asia/Shanghai
      LANG: en_US.UTF-8
    volumes:
      # 需要下载相应版本的redis.conf文件，下载地址：https://github.com/redis/redis/tags
      - "D:\\Develop\\Docker\\Data\\redis\\redis.conf:/etc/redis/redis.conf"
      # 挂载持久化数据目录
      - "D:\\Develop\\Docker\\Data\\redis\\data:/data"
    ports:
      # 端口映射
      - "6379:6379"
    networks:
      - docker-network
      
  mysql:
    image: mysql:8.0.35
    container_name: mysql
    restart: unless-stopped
    environment:
      TZ: Asia/Shanghai
      MYSQL_ROOT_PASSWORD: 123456
      MYSQL_ROOT_AUTH_PLUGIN: caching_sha2_password
      LANG: en_US.UTF-8
    ports:
      - "3306:3306"
    # 设置MySQL服务器的最大连接数、指定MySQL服务器的默认字符集、指定MySQL服务器的默认排序规则
    command:
      --max_connections=1000
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
    volumes:
      - "D:\\Develop\\Docker\\Data\\mysql\\log:/var/log/mysql"
      - "D:\\Develop\\Docker\\Data\\mysql\\data:/var/lib/mysql"
      - "D:\\Develop\\Docker\\Data\\mysql\\conf:/etc/mysql/conf.d"
    networks:
      - docker-network
    healthcheck:
      test: [ "CMD", "mysqladmin" ,"ping", "-h", "localhost" ]
      retries: 10
      
  nacos:
    image: nacos/nacos-server:v2.2.3
    container_name: nacos
    restart: unless-stopped
    volumes:
      - "D:\\Develop\\Docker\\Data\\nacos\\bin:/home/nacos/bin"
      - "D:\\Develop\\Docker\\Data\\nacos\\conf:/home/nacos/conf"
      - "D:\\Develop\\Docker\\Data\\nacos\\data:/home/nacos/data"
      - "D:\\Develop\\Docker\\Data\\nacos\\logs:/home/nacos/logs"
    environment:
      - PREFER_HOST_MODE=hostname
      - MODE=standalone
      - SPRING_DATASOURCE_PLATFORM=mysql
      # 修改mysql连接信息
      - MYSQL_SERVICE_HOST=mysql    # 注意：因为是容器间通信，这里要设置mysql容器名，`127.0.0.1`或`localhost`不好使
      - MYSQL_SERVICE_DB_NAME=nacos
      - MYSQL_SERVICE_PORT=3306
      - MYSQL_SERVICE_USER=root
      - MYSQL_SERVICE_PASSWORD=123456
      # 修改JVM参数
      - JVM_XMS=256m   #-Xms  default: 1g
      - JVM_XMX=256m   #-Xmx  default: 1g
      - JVM_XMN=128m   #-Xmn  default: 512m
      - JVM_MS=32m     #-XX:MetaspaceSize  default: 128m
      - JVM_MMS=64m    #-XX:MaxMetaspaceSize  default: 320m
      - MYSQL_SERVICE_DB_PARAM=characterEncoding=utf8&connectTimeout=10000&socketTimeout=30000&autoReconnect=true&useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
    ports:
      - "8848:8848"
      - "9848:9848"
      - "9849:9849"
    networks:
      - docker-network
    healthcheck:
      test: ["CMD-SHELL", "echo 'ruok' | curl -s telnet://localhost:8848 || exit 1"]
      retries: 10
    depends_on:
      mysql:
        condition: service_healthy

  minio:
    image: minio/minio:latest
    container_name: minio
    restart: no
    command: server /data --console-address ":9001"
    environment:
      TZ: Asia/Shanghai
      LANG: en_US.UTF-8
    volumes:
      - "D:\\Develop\\Docker\\Data\\minio\\data:/data"
      - "D:\\Develop\\Docker\\Data\\minio\\config:/root/.minio"
    ports:
      - "9000:9000"
      - "9001:9001"
    networks:
      - docker-network

  xxl-job:
    image: xuxueli/xxl-job-admin:2.4.0
    container_name: xxl-job
    restart: no
    environment:
      TZ: Asia/Shanghai
      LANG: en_US.UTF-8
      PARAMS: '--spring.config.location=/application.properties'
    volumes:
      - "D:\\Develop\\Docker\\Data\\xxl-job\\logs:/data/applogs"
      - "D:\\Develop\\Docker\\Data\\xxl-job\\conf\\application.properties:/application.properties"
    ports:
      - "8081:8080"
    depends_on:
      - mysql
    networks:
      - docker-network

networks:
  docker-network:
    external: true
123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102103104105106107108109110111112113114115116117118119120121122123124125126127128129
```

### 4.2 启动服务

```bash
# 进入 docker-compose.yml 所在目录，执行以下命令
docker-compose up -d
12
```

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/82730e42181df195d1b2d49ae48a8d3dpng.jpg)