---
title: Springboot项目实战Easypan仿百度网盘后端
date: 2024-05-18 15:08:00
tags: Easypan
categories: Programming
cover: 'https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/R-C.jpg'
---

# 项目简介
项目名称：Easy云盘
项目描述: 一个仿百度云盘面向C端用户的网盘项目，包括用户注册，QQ快捷登录，文件上传，分片上传，断点续传，秒传，文件在线预览，包括文本，图片，视频，音频，excel，word ，pdf 等文件在线预览，文件分享等功能。
技术选型：Springboot + mybatis + mysql+redis+ffmpeg
负责内容：
- 用户注册，登录，QQ快捷登录，发送邮箱验证码，找回密码。
- 文件分片上传，秒传，新建目录，预览，文件重命名，文件移动，文件分享，删除，下载 等功能。
- 文件分享列表，取消分享。
- 回收站功能，还原文件，彻底删除。
- 设置模块  （1）超级管理员角色查询所有用户上传的文件，可以对文件下载，删除。 （2）超级管理员可以对用户进行管理，给用户分配空间，禁用、启用用户（3）超级管理员可以对系统进行设置，设置邮箱模板，设置用户注册初始化空间大小。
- 用户通过分享链接和分享码预览下载其他人分享的文件，同时也可以将文件保存到自己的网盘。
- 项目难点：
- 文件分片上传，通过文件MD5实现文件秒传，文件分片上传后，异步对文件进行合并处理，视频文件，调用ffmpeg生成视频缩略图，将文件分片成ts文件。
- 通过redis缓存实时计算用户上传过程中空间占用情况。
- 多级目录线性展示，通过递归查询，查询目录的所有父级目录。
- 用户上传文件，同一级目录重名文件自动重命名，文件移动，同名文件重命名。

项目收获：
熟悉了第三方登录接入流程，比如QQ登录。让我熟练使用Springboot，采用spring的aop 的注解方式 实现了不同的接口权限不一样，比如普通用户和超级管理员权限的区别，同时使用aop和java反射实现了后端参数校验。使用redis缓存了一些系统设置，用户上传过程中空间使用实时计算，避免反复查询数据库。项目中解决了如何实现异步调用事务的问题，解决循环依赖的问题，如何调用第三方插件比如ffmpeg来实现对文件的分片处理，合并处理。 云盘项目让我学习到如何从功能点去设计数据库，在数据库设计的时候考虑到后续的扩展，比如文件数据的分表处理，可以根据用户id hash 取模的方式对文件数据进行分表处理，在开发过程中，通过spring的核心 aop来实现与业务的解耦。 该项目让我对java，数据库 所学知识进行了综合运用，让我能够使用java从0开发一个完整的项目。

# 项目架构
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/w1.png)

# 环境配置
> 移步到本网站开发环境安装一章教程
# 项目构建
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/fiaiwbuyabfuab.png)
## Java项目创建
创建工作空间
创建目录  myworkspace-java

### 设置idea
### 设置jdk
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/r1.png)

### 设置maven
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/r2.png)

### 设置编码
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/r3.png)

## 创建工程
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/r4.png)
如果没有以上选项，可以降低idea的版本，或者安装插件  Maven Archetype Catalogs
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/r5.png)

安装插件后就会有 模板选项

## pom.xml
```
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.6.1</version>
        <relativePath/>
    </parent>

    <modelVersion>4.0.0</modelVersion>

    <groupId>com.easypan</groupId>
    <artifactId>easypan</artifactId>
    <version>1.0</version>
    <packaging>jar</packaging>
    <name>easypan</name>
    <description>easypan</description>

    <properties>
        <java.version>1.8</java.version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
        <skipTests>true</skipTests>

        <springboot.version>2.6.1</springboot.version>
        <mybatis.version>1.3.2</mybatis.version>
        <logback.version>1.2.10</logback.version>
        <mysql.version>8.0.23</mysql.version>
        <aspectjweaver.version>1.9.4</aspectjweaver.version>
        <fastjson.version>1.2.66</fastjson.version>
        <commons.lang3.version>3.4</commons.lang3.version>
        <commons.codec.version>1.9</commons.codec.version>
        <commons.io.version>2.5</commons.io.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>ch.qos.logback</groupId>
                    <artifactId>logback-classic</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>ch.qos.logback</groupId>
                    <artifactId>logback-core</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <!--邮件发送-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-mail</artifactId>
            <version>${springboot.version}</version>
        </dependency>
        <!--redis -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
            <version>${springboot.version}</version>
        </dependency>

        <!--mybatis-->
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>${mybatis.version}</version>
        </dependency>


        <!-- 数据库-->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>${mysql.version}</version>
        </dependency>


        <!-- 日志版本 -->
        <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-classic</artifactId>
            <version>${logback.version}</version>
        </dependency>
        <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-core</artifactId>
            <version>${logback.version}</version>
        </dependency>

        <!--切面-->
        <dependency>
            <groupId>org.aspectj</groupId>
            <artifactId>aspectjweaver</artifactId>
            <version>${aspectjweaver.version}</version>
        </dependency>
        <!--fastjson-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>${fastjson.version}</version>
        </dependency>

        <!--apache common-->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
            <version>${commons.lang3.version}</version>
        </dependency>

        <dependency>
            <groupId>commons-codec</groupId>
            <artifactId>commons-codec</artifactId>
            <version>${commons.codec.version}</version>
        </dependency>

        <dependency>
            <groupId>commons-io</groupId>
            <artifactId>commons-io</artifactId>
            <version>${commons.io.version}</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <version>2.2.6.RELEASE</version>
                <executions>
                    <execution>
                        <goals>
                            <goal>
                                repackage
                            </goal>
                        </goals>
                    </execution>
                </executions>
                <configuration>
                    <mainClass>com.easypan.EasyPanApplication</mainClass>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```
## logback-spring.xml
```
<?xml version="1.0" encoding="UTF-8" ?>
<configuration scan="true" scanPeriod="10 minutes">
    <appender name="stdot" class="ch.qos.logback.core.ConsoleAppender">
        <layout class="ch.qos.logback.classic.PatternLayout">
            <pattern>%d{yyyy-MM-dd HH:mm:ss,GMT+8} [%p][%c][%M][%L]-> %m%n</pattern>
        </layout>
    </appender>

    <springProperty scope="context" name="log.path" source="project.folder"/>
    <springProperty scope="context" name="log.root.level" source="log.root.level"/>

    <property name="LOG_FOLDER" value="logs"/>
    <property name="LOG_FILE_NAME" value="easypan.log"/>

    <appender name="file" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${log.path}/${LOG_FOLDER}/${LOG_FILE_NAME}</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <FileNamePattern>${log.path}/${LOG_FOLDER}/${LOG_FILE_NAME}.%d{yyyyMMdd}.%i</FileNamePattern>
            <cleanHistoryOnStart>true</cleanHistoryOnStart>
            <TimeBasedFileNamingAndTriggeringPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
                <MaxFileSize>20MB</MaxFileSize>
            </TimeBasedFileNamingAndTriggeringPolicy>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
        <encoder>
            <charset>utf-8</charset>
            <pattern>%d{yyyy-MM-dd HH:mm:ss,GMT+8} [%p][%c][%M][%L]-> %m%n</pattern>
        </encoder>
        <append>false</append>
        <prudent>false</prudent>
    </appender>

    <root level="${log.root.level}">
        <appender-ref ref="stdot"/>
        <appender-ref ref="file"/>
    </root>

</configuration>
```

## application.properties

```
# 应用服务 WEB 访问端口
server.port=7090
server.servlet.context-path=/api
#session过期时间 60M 一个小时
server.servlet.session.timeout=PT60M
#处理favicon
spring.mvc.favicon.enable=false
#异常处理
spring.mvc.throw-exception-if-no-handler-found=true
spring.web.resources.add-mappings=false
#数据库配置
spring.datasource.url=jdbc:mysql://127.0.0.1:3306/easypan?serverTimezone=GMT%2B8&useUnicode=true&characterEncoding=utf8&autoReconnect=true&allowMultiQueries=true
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.hikari.pool-name=HikariCPDatasource
spring.datasource.hikari.minimum-idle=5
spring.datasource.hikari.idle-timeout=180000
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.auto-commit=true
spring.datasource.hikari.max-lifetime=1800000
spring.datasource.hikari.connection-timeout=30000
spring.datasource.hikari.connection-test-query=SELECT 1
#发送邮件配置相关
# 配置邮件服务器的地址 smtp.qq.com
spring.mail.host=smtp.qq.com
# 配置邮件服务器的端口（465或587）
spring.mail.port=465
# 配置用户的账号
spring.mail.username=test@qq.com
# 配置用户的密码
spring.mail.password=123456
# 配置默认编码
spring.mail.default-encoding=UTF-8
# SSL 连接配置
spring.mail.properties.mail.smtp.socketFactory.class=javax.net.ssl.SSLSocketFactory
# 开启 debug，这样方便开发者查看邮件发送日志
spring.mail.properties.mail.debug=true
#邮件配置结束
#Spring redis配置
# Redis数据库索引（默认为0）
spring.redis.database=0
spring.redis.host=127.0.0.1
spring.redis.port=6379
# 连接池最大连接数（使用负值表示没有限制）
spring.redis.jedis.pool.max-active=20
# 连接池最大阻塞等待时间（使用负值表示没有限制）
spring.redis.jedis.pool.max-wait=-1
# 连接池中的最大空闲连接
spring.redis.jedis.pool.max-idle=10
# 连接池中的最小空闲连接
spring.redis.jedis.pool.min-idle=0
# 连接超时时间（毫秒）
spring.redis.timeout=2000
#项目目录
project.folder=f:/webser/web_app/easypan/
#日志级别配置
log.root.level=debug
#超级管理员id
admin.emails=test@qq.com
#是否是开发环境
dev=false
##qq登陆相关##
qq.app.id=12333
qq.app.key=2222222
qq.url.authorization=https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=%s&redirect_uri=%s&state=%s
qq.url.access.token=https://graph.qq.com/oauth2.0/token?grant_type=authorization_code&client_id=%s&client_secret=%s&code=%s&redirect_uri=%s
qq.url.openid=https://graph.qq.com/oauth2.0/me?access_token=%S
qq.url.user.info=https://graph.qq.com/user/get_user_info?access_token=%s&oauth_consumer_key=%s&openid=%s
qq.url.redirect=http://easypan.wuhancoder.com/qqlogincalback
```

## 邮箱配置
1、邮箱配置
#发送邮件的邮箱，建议就试用qq邮箱
spring.mail.username=test@qq.com
#发送邮箱的密码
spring.mail.password=123
qq登录：
设置->账户->POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/r6.png)
微信登录QQ邮箱:
个人头像->设置->第三方服务
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/r7.png)

## jrebel插件
下载地址：https://wwur.lanzout.com/iGLTA0tpv6if   密码:g9jo
> 跳转置本文Jrebel破解安装也可

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/r8.png)
# 登录注册
## 数据库设计、代码生成
>数据库设计
* 字段
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/r9.png)
* 索引
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/r9.png)

> 用代码生成工具生成复制过来
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/r11.png)
## 部署前端
> 部署前端程序
下载nginx
下载地址  点击打开  密码:i8yu

下载前端编译程序
点击下载

配置nginx
nginx.conf
	server {
                listen 80;
                server_name easypan.wuhancoder.com;
                charset utf-8;
				
								
				 location / { 
                       alias E:/webser/web_app/easypan-front/dist/;
                       try_files $uri $uri/ /index.html;
                       index  index.html index.htm;
                 }

                  location /api { 
                              proxy_pass http://localhost:7090/api;
                              proxy_set_header x-forwarded-for  $remote_addr;
                 }
				
	}


配置host
下载 switchHosts
下载地址  点击打开    密码:c1oe
解压安装
然后配置

接口文档
点击打开


## 邮件发送1

## 邮件发送2

# AOP实现参数拦截

## 登录注册

# 账号相关找回密码，退出，上传头像，获取登录信息等

# 登录校验拦截

# QQ登录


# 报错
1. IDEA中用Maven创建web项目部署运行时,报错运行 ‘ [org.apache.maven.plugins:maven-archetype-plugin:RELEASE:generate]‘： https://blog.csdn.net/m0_56263000/article/details/139470291?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522171783593316800185838926%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=171783593316800185838926&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-1-139470291-null-null.142^v100^pc_search_result_base8&utm_term=Error%20running%20%20%5Borg.apache.maven.plugins%3Amaven-archetype-plugin%3ARELEASE%3Agenerate%5D%3A%20Cannot%20find%20JRE%2020&spm=1018.2226.3001.4187








参考文献：https://www.bilibili.com/video/BV1qV4y1d7zY/