---
title: mongodb 图形界面工具 -- Studio 3T
date: 2024-09-05 08:37:54
tags: Studio3T
categories: 编程开发
cover: 'https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/Studio%203T.webp'
---


#### 目录

+   [mongodb 图形界面工具 -- Studio 3T](#mongodb___Studio_3T_4)
+   +   [下载](#_11)
    +   [安装](#_23)
    +   [第一次使用：注册](#_40)
    +   [添加一个连接（连接 mongodb 数据库）](#_mongodb__93)
    +   +   [1、点击【添加新连接】，选择【手动配置我的连接设置】](#1_98)
        +   [2、对 Server 设置连接数据](#2_Server__111)
        +   [3、连接的用户认证设置（创建数据库和用户）](#3_126)
        +   [4、选择默认加密](#4_154)
        +   [5、完成连接，打开初始界面](#5_172)
    +   [再添加一个连接来对比](#_186)
    +   +   [新建一个连接](#_193)
        +   [连接【admin】这个mongodb数据库，连接的用户的【admin】这个管理员。](#adminmongodbadmin_200)

## [mongodb](https://so.csdn.net/so/search?q=mongodb&spm=1001.2101.3001.7020) 图形界面工具 – Studio 3T

  

### 下载

推荐一个 MongoDB 的 [GUI](https://so.csdn.net/so/search?q=GUI&spm=1001.2101.3001.7020) 图形界面工具： [Robo 3T](https://robomongo.org/)

直接点击下载。

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5a18c84b8c80e58c4f788c777b2d2d9dpng.jpg)  

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/dd535353c58b905485c45ea26de917a4png.jpg)


### 安装

解压压缩包，只有这么一个启动的应用程序。

双击安装

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/ac7068d515cf4c4358fb87c585e75e03png.jpg)

  

选择安装路径，后面就安装成功了。  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7c16c6abfd8577ce2dcf91c11e1a155cpng.jpg)

  

### 第一次使用：注册

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/c0a658fce8cc38732cce2da3f3a596c4png.jpg)

  

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/f8aeb4fc4f4505818a84969ef4f00954png.jpg)

  

下一步到这里，浏览器弹出页面让我们注册

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5cb0dda3150c14cb32d90c572ad11c35png.jpg)

  

点击注册

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/a59faeff70e5a5183ece67367f1fa653png.jpg)

  

填了邮箱，密码，但是手机号码就随便填了。  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/56f4647c03dc5eed589d8976387c3130png.jpg)

  

注册成功。  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1719d2e268c5b1b0a62603a3513ebe47png.jpg)

  

有 30 天的使用期，后面没买的话，就会自动切换为免费版。

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/b4e71d9f8475975cc5835ecccb97fa36png.jpg)

  

### 添加一个连接（连接 mongodb 数据库）

  

#### 1、点击【添加新连接】，选择【手动配置我的连接设置】

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/cb7c326d0800428e9aed95df986e0ab1png.jpg)

  

#### 2、对 Server 设置连接数据

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/573f205161c4b1e910c469f9b250d357png.jpg)

  

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/334c67b348ab143bf23f0b65cf70124apng.jpg)

  

#### 3、连接的用户认证设置（创建数据库和用户）

认证这里，需要添加数据库和用户，直接创建一个【test】数据库，在该数据库添加一个【LJHAAA】的用户。

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/f0369b06128b6d597fd9a91aafdeb770png.jpg)

创建【test】数据库之后，在该数据库中创建自己的用户【LJHAAA】 ，且为该用户分配访问本数据库的权限【readWrite、userAdmin】

添加用户的命令

```auto
db.createUser({ user: "LJHAAA",pwd: "123456",roles: [
    { role: "readWrite", db: "test" },
    { role: "userAdmin", db: "test" }]
 });
1234
```

readWrite：对 test 这个数据库有读写的权限  
userAdmin：对test这个数据库可以进行用户管理的权限

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/245cad1a05083e664e06b1ca87529e53png.jpg)

  

#### 4、选择默认加密

直接点 next

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5b799e34c93d7bf82ca93a09fc242ce7png.jpg)

我也是第一次使用，直接点 finish

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/8617e1fe54f4b050a5d4c84c572de04epng.jpg)

  

#### 5、完成连接，打开初始界面

可以看到，新建的这个连接，只能看到【test】这个数据库。

因为连接的这个【test】数据库里面的用户【LJHAAA】，它的权限只能操作【test】这个数据库。  
所以只能看到这个【test】数据库。

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/e49a6ab06100f8b953171f9554c88bb7png.jpg)

  

### 再添加一个连接来对比

这里再添加一个连接，连接的数据库是【admin】，用户是【admin】，这个用户是一个管理员

  

#### 新建一个连接

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/c973b06cc4aa099cbc8e18a49947f80dpng.jpg)

  

#### 连接【admin】这个mongodb数据库，连接的用户的【admin】这个管理员。

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/a801e2488e632a8b4b6f478eb0e166b5png.jpg)

  

可以看到，admin这个管理员也能看到这个【test】数据库

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7040b2b4ae009e8e14fac654806d4da2png.jpg)