---
title: SpringCloud01
date: 2026-05-06 19:39:35
tags:
  - 微服务
  - SpringCloud
  - 后端
categories: 编程开发
cover: 'https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1682044144301.png'
---



# SpringCloud01



# 一、微服务

随着互联网行业的发展，对服务的要求也越来越高，服务架构也从单体架构逐渐演变为现在流行的微服务架构。这些架构之间有怎样的差别呢？

## 1.1单体架构

**单体架构**：将业务的所有功能集中在一个项目中开发，打成一个包部署。

![1682044144301](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1682044144301.png)

单体架构的优缺点如下：

**优点：**

- 架构简单
- 部署成本低

**缺点：**

- 耦合度高（维护困难、升级困难）



## 1.2 微服务

**分布式架构**：根据业务功能对系统做拆分，每个业务功能模块作为**独立项目开发**，称为一个服务。

![1682044165308](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1682044165308.png)

并且各个服务之间可以相互**调用**：

![1682044181588](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1682044181588.png)

**优点**：

​	拆分粒度更小、服务更独立、耦合度更低

**缺点**：

​	服务调用关系错综复杂，提升部署难度

微服务这种方案需要技术框架来落地，全球的互联网公司都在积极尝试自己的微服务落地技术。在国内最知名的就是Dubbo和SpringCloud。

## 1.3微服务的重要性

![未命名白板](assets/未命名白板.png)





# 二、SpringCloud

## 2.1认识SpringCloud 

SpringCloud是目前国内使用最广泛的微服务框架。官网地址：https://spring.io/projects/spring-cloud。

SpringCloud集成了各种微服务功能组件，并基于SpringBoot实现了这些组件的自动装配，从而提供了良好的开箱即用体验。

- 其中常见的组件包括：

|       功能       |           组件            |
| :--------------: | :-----------------------: |
|  服务注册和发现  | Eureka，**Nacos**，Consul |
|   服务远程调用   |     Openfeign，Dubbo      |
|   统一配置管理   | SpringCloudConfig，Nacos  |
|   服务链路监控   |       Zipkin,Sleuth       |
|   统一网关路由   |  SpringCloutGateway,Zuul  |
| 流控，降级，保护 |     Hystix，Sentinel      |

- 微服务技术对比

![1682048900274](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1682048900274.png)

- 兼容版本

  SpringCloud底层是依赖于SpringBoot的，并且有版本的兼容关系，如下：

| [2022.0.x](https://github.com/spring-cloud/spring-cloud-release/wiki/Spring-Cloud-2022.0-Release-Notes) aka Kilburn | 3.0.x                                 |
| ------------------------------------------------------------ | ------------------------------------- |
| Release Train                                                | Release Train                         |
| [2021.0.x](https://github.com/spring-cloud/spring-cloud-release/wiki/Spring-Cloud-2021.0-Release-Notes) aka Jubilee | 2.6.x, 2.7.x (Starting with 2021.0.3) |
| [2020.0.x](https://github.com/spring-cloud/spring-cloud-release/wiki/Spring-Cloud-2020.0-Release-Notes) aka Ilford | 2.4.x, 2.5.x (Starting with 2020.0.3) |
| [Hoxton](https://github.com/spring-cloud/spring-cloud-release/wiki/Spring-Cloud-Hoxton-Release-Notes) | 2.2.x, 2.3.x (Starting with SR5)      |
| [Greenwich](https://github.com/spring-projects/spring-cloud/wiki/Spring-Cloud-Greenwich-Release-Notes) | 2.1.x                                 |
| [Finchley](https://github.com/spring-projects/spring-cloud/wiki/Spring-Cloud-Finchley-Release-Notes) | 2.0.x                                 |
| [Edgware](https://github.com/spring-projects/spring-cloud/wiki/Spring-Cloud-Edgware-Release-Notes) | 1.5.x                                 |
| [Dalston](https://github.com/spring-projects/spring-cloud/wiki/Spring-Cloud-Dalston-Release-Notes) | 1.5.x                                 |



## 2.2 环境准备

### 2.2.1搭建SpringCloud环境

- 创建t_order订单表

- 参考之前整合代码，整合mybatis环境

- 完成订单表的增删改查功能

- 创建用户表，完成用户表的增删改查。 - 略

- 搭建用户服务和订单服务（略）

**springboot版本**

```xml
 <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.3.4</version>
        <relativePath/>
    </parent>
```

```xml
 <dependencies>
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>3.0.5</version>
        </dependency>

        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-starter</artifactId>
            <version>1.2.23</version>
        </dependency>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.33</version>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>1.2.76</version>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
    </dependencies>

```



# 三、实现远程调用

## 3.1 服务准备

目前程序中我们可以通过订单ID查询到订单服务，订单对象TOrder中只存在用户ID，并没有用户的具体信息。

```json
{
    "code": "1",
    "msg": "成功",
    "data": {
        "id": 1,
        "orderName": "铲车",
        "orderDate": "2025-09-22T07:06:40.000+00:00",
        "orderAddr": "莆田",
        "orderPrice": 99999.00,
        "userId": 2
    }
}
```

接下来我们需要做的是搭建用户服务，并且通过订单服务调用用户服务得到用户完整信息。

## 3.2 调用流程

我们需要在order-service中 向user-service发起一个http的请求，调用http://localhost:8081/user?userId=?这个接口。

大概的步骤是这样的：

- 修改order-service服务中的OrderController方法，根据Order对象中的userId查询User
- 将查询的User填充到Order对象，一起返回

![1682306207472](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1682306207472.png)

## 3.3 RestTemplete的使用

RestTemplate是Spring提供的用于访问Rest服务的客户端，它提供了很多可以方便访问远程http服务的方法，这些方法可以帮助开发人员减少编写客户端代码的工作量。1

- 导入依赖

  ![1682306645031](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1682306645031.png) 

- 编写配置类

  ![1682306678292](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1682306678292.png)	

- 注入RestTemplate

  ![1682307399036](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1682307399036.png) 

- 完成Order服务代码补充

  注意：在调用过程中需要使用到fastjson进行对象转换

  ![1682306752805](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1682306752805.png)



## 3.4.提供者与消费者

在服务调用关系中，会有两个不同的角色：

**服务提供者**：一次业务中，被其它微服务调用的服务。（提供接口给其它微服务）

**服务消费者**：一次业务中，调用其它微服务的服务。（调用其它微服务提供的接口）

![image-20210713214404481](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/image-20210713214404481.png)

但是，服务提供者与服务消费者的角色并不是绝对的，而是相对于业务而言。

如果服务A调用了服务B，而服务B又调用了服务C，服务B的角色是什么？

- 对于A调用B的业务而言：A是服务消费者，B是服务提供者
- 对于B调用C的业务而言：B是服务消费者，C是服务提供者

因此，服务B既可以是服务提供者，也可以是服务消费者。



# 四、Feign远程调用

## 5.1Feign 是什么

`Feign`是一个`http`**请求调用的轻量级框架**，可以以`Java`接口**注解的方式**调用`Http`请求。当实际调用的时候，传入参数，根据参数再应用到请求上，进而转化成真正的请求，封装了`http`调用流程。

## 5.2为什么选择 Feign

如果不使用`rpc`框架，那么调用服务需要走`http`的话，无论是使用 Jcjc 自带的 `URLConnection`，还是使用Http工具包 Apache 的`httpclient`， 亦或是 `OkHttp`， 都需要自行配置请求`head`、`body`，然后才能发起请求。获得响应体后，还需解析等操作，十分繁琐。

**而`Feign` 只需要定义一个接口，并且通过注解的形式定义好请求模板，就可以项使用本地接口一样，使用`Http`请求**。

看我们以前利用RestTemplate发起远程调用的代码：

![1682339701714](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1682339701714.png)

存在下面的问题：

•代码可读性差，编程体验不统一

•参数复杂URL难以维护

## 5.3Feign替代RestTemplate

Fegin的使用步骤如下：

### 引入依赖

我们在order-service服务的pom文件中引入feign的依赖：

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
    <!-- <version>3.1.5</version> -->
</dependency>

<!--负载均衡-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-loadbalancer</artifactId>
    <!-- <version>3.1.5</version> -->
</dependency>
```



### 添加注解

在order-service的启动类添加注解开启Feign的功能：

![1692270074988](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1692270074988.png)



### 编写Feign的客户端

在order-service中新建一个接口，内容如下：

![1682389728189](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1682389728189.png)



这个客户端主要是基于SpringMVC的注解来声明远程调用的信息，比如：

- 服务名称：服务提供者的名称
- 请求方式：GET
- 请求路径：/selectByUserId
- 请求参数：Integer userId
- 返回值类型：Result<TUser>

**注意：如果是get请求一定要在参数前面加上@RequestParam注解，否则会转为post请求去标签体中寻找参数**

先启动提供者(user-server),再启动消费者(order-server)

### 测试

使用Feign客户端代替RestTemplate

![1682390051352](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1682390051352.png)

这样，Feign就可以帮助我们发送http请求，无需自己使用RestTemplate来发送了。

### 总结

使用Feign的步骤：

① 引入依赖

② 添加@EnableFeignClients注解

③ 编写FeignClient接口

④ 使用FeignClient中定义的方法代替RestTemplate

-------------

### 抽取api

对于公共部分的实体类以及api接口，统一抽取到cloud-api模块中

------------

### OpenFeign的超时控制

通过yml配置可以控制与远程服务器建立连接和读取响应的超时时间。

`connectTimeout`：参数指定了连接超时时间，默认时间为10秒，也就是在尝试建立连接时，如果在指定时间内无法建立连接，就会抛出`ConnectTimeoutException`异常。

`readTimeout`：参数指定了读取响应超时时间，默认时间为60秒，也就是在发送请求后，如果在指定时间内没有接收到响应，就会抛出`SocketTimeoutException`异常。

在User服务中加入断点后，Order服务两秒内没有收到响应则会报错

### Openfeign日志打印功能

Feign 提供了日志打印功能，我们可以通过配置来调整日志级别，从而了解feign中http请求的细节。也就是说，对feign接口的调用情况进行日志输出。

而日志的级别分为四种：

- NONE：不记录任何日志信息，这是默认值。
- BASIC：仅记录请求的方法，URL以及响应状态码和执行时间
- HEADERS：在BASIC的基础上，额外记录了请求和响应的头信息
- FULL：记录所有请求和响应的明细，包括头信息、请求体、元数据。

### 配置文件方式  -- springboot3.3.4 对应的openFeign版本

```yaml

logging:
  level:
    cn.cjc.api: debug # 自己的接口包路径
spring:
  cloud:
    openfeign:
      client:
        config:
          # default 表示全局配置，对所有 Feign 客户端生效
          default:
            # 连接超时时间（单位：毫秒），默认 10 秒，建议根据业务调整
            connectTimeout: 5000
            # 读取（响应）超时时间（单位：毫秒），默认 60 秒，建议根据业务调整
            readTimeout: 3000
            # 可选：配置日志级别（方便调试）
            loggerLevel: FULL  # 级别：NONE/BASIC/HEADERS/FULL
```
