---
title: 基于SpringBoot音乐系统项目
date: 2024-06-16 20:56:00
tags: project
categories: 编程开发
cover: 'https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/musicxiangmu.jpg'
---


<h1 align="center">music-website</h1>

<br/>

<h1 align="center"><font color="red">声明</font></h1>

<br/>

## 项目说明

本音乐网站的客户端和管理端使用 **Vue** 框架来实现，服务端使用 **Spring Boot + MyBatis** 来实现，数据库使用了 **MySQL**。<br/>

## 项目预览

> 前台截图预览

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/ww1.png)<br/>

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/ww2.png)<br/>

> 后台截图预览

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/ww3.png)<br/>


## 项目功能

- 音乐播放
- 用户登录注册
- 用户信息编辑、头像修改
- 歌曲、歌单搜索
- 歌单打分
- 歌单、歌曲评论
- 歌单列表、歌手列表分页显示
- 歌词同步显示
- 音乐收藏、下载、拖动控制、音量控制
- 后台对用户、歌曲、歌手、歌单信息的管理

<br/>

## 技术栈

### 后端

**SpringBoot + MyBatis + Redis** **+ minio**

### 部署

**docker**

### 前端

**Vue3.0 + TypeScript + Vue-Router + Vuex + Axios + ElementPlus + Echarts**

<br/>

## 开发环境

JDK： jdk-1.80_351

mysql：mysql-8.0.34

redis：5.0.8 

node：14.17.3

IDE：IntelliJ IDEA 2023、VSCode

maven：3.5.3

minio: 下载本地最新
<br/>

## 下载运行

### 1、下载项目到本地

> 用idea打开music-website-master，配置maven，修改默认设置

> **如果你想使用 vue2.0 的版本，在下载代码后，可以切到 vue@2.0 的分支，默认是使用的vue3.0。**

### 2、下载数据库中记录的资源

去【链接: https://pan.baidu.com/s/1Qv0ohAIPeTthPK_CDwpfWg 提取码: gwa4 】下载网站依赖的歌曲及图片，将 data 夹里的文件放到 music-server 文件夹下。

### 3、修改配置文件

1）创建数据库
将 `music-website/music-server/sql` 文件夹中的 `tp_music.sql` 文件导入数据库。

2）修改用户名密码
修改 `music-website/music-server/src/main/resources/application.properties` 文件里的 `spring.datasource.username` 和 `spring.datasource.password`；

### 4、启动项目

- **启动管理端**：进入 music-server 文件夹，运行下面命令启动服务器

```js
// 方法一
./mvnw spring-boot:run

// 方法二
mvn spring-boot:run // 前提装了 maven
```

- **启动 redis**：直接在终端输入下面命令

```
redis-server
```

> 下载地址：https://redis.io/
>


- **启动客户端**：进入 music-client 目录，运行下面命令

```js
npm install // 安装依赖

npm run serve // 启动前台项目
```

- **启动管理端**：进入 music-manage 目录，运行下面命令

```js
npm install // 安装依赖

npm run serve // 启动后台管理项目
```

### 5、常见问题

1、图片、音乐加载失败
把 music-website/music-server 目录下的 img、song 目录移动到 music-website 目录。

2、音乐播放不了
可能是音乐损毁了，重新更换一下音乐资源。

<br/>
