---
title: SpringCloud02
date: 2026-05-06 19:59:58
tags:
  - 微服务
  - SpringCloud
  - 后端
categories: 编程开发
cover: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80'
---



### SpringCloud02



## 1 Nacos简介 

 注册中心，  配置中心

官网：[ https://nacos.io/zh-cn/](https://nacos.io/)

![](SpringCloud02.assets\1682475545059.png)

[Nacos](https://nacos.io/)是阿里巴巴的产品，现在是[SpringCloud](https://spring.io/projects/spring-cloud)中的一个组件。相比[Eureka](https://github.com/Netflix/eureka)功能更加丰富，在国内受欢迎程度较高。上图为首页截图，已经明确的说明了 Nacos的2个核心作用：

- 注册中心  --   服务注册与发现
- 配置管理 --  每一个项目的配置文件抽取，统一管理

阿里为 SpringCloud 贡献了一个子项目，叫做 SpringCloud Alibaba，其中包括了微服务开发中的几个基础组件，Nacos 就是此项目中的一项技术。

![1682476152580](SpringCloud02.assets/1682476152580.png)

SpringCloud Alibaba 可以对标 SpringCloud 中老牌的主流项目 SpringCloud Netflix（包括 Eureka、Hystrix、Zuul 等等），也是一个技术集，包括：

![1682475864374](SpringCloud02.assets/1682475864374.png)

总结：它是阿里开源的 SpringCloud Alibaba 项目下的一项技术，可以实现服务注册中心、分布式配置中心。



## 2 Nacos安装指南

开发阶段采用单机安装即可。

### 2.1.下载安装包

在Nacos的GitHub页面，提供有下载链接，可以下载编译好的Nacos服务端或者源代码：

GitHub的Release下载页：https://github.com/alibaba/nacos/releases

如图：

![1682495357714](SpringCloud02.assets/1682495357714.png)

课前资料已经准备了安装包

### 2.2解压

目录说明：

- bin：启动脚本
- conf：配置文件

### 2.3.端口配置

Nacos的默认端口是8848，如果你电脑上的其它进程占用了8848端口，请先尝试关闭该进程。

**如果无法关闭占用8848端口的进程**，也可以进入nacos的conf目录，修改配置文件中的端口：

![1682477325027](SpringCloud02.assets/1682477325027.png)

修改其中的内容：

![1682477380016](SpringCloud02.assets/1682477380016.png)

### 2.4.启动

启动非常简单，进入bin目录，结构如下：

![1682477405387](SpringCloud02.assets/1682477405387.png) 

然后执行命令即可：

- windows命令：

  ```
  startup.cmd -m standalone
  ```

执行后的效果如图：

![1682495247083](SpringCloud02.assets/1682495247083.png)

### 2.5.访问

在浏览器输入地址：http://127.0.0.1:8848/nacos即可：

![1683255943967](SpringCloud02.assets/1683255943967.png) 

默认的账号和密码都是nacos，进入后：

![1683256018192](SpringCloud02.assets/1683256018192.png)



## 3 nacos注册中心

Nacos是SpringCloudAlibaba的组件，而SpringCloudAlibaba也遵循SpringCloud中定义的服务注册、服务发现规范。因此使用Nacos和使用Eureka对于微服务来说，并没有太大区别。

主要差异在于：

- 依赖不同
- 服务地址不同



### 3.1引入依赖

在cloud-demo父工程的pom文件中的`<dependencyManagement>`中引入SpringCloudAlibaba的依赖：

```xml
 <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <spring-cloud.version>2023.0.3</spring-cloud.version>
        <spring-cloud-alibaba.version>2023.0.3.2</spring-cloud-alibaba.version>
    </properties>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>${spring-cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <dependency>
                <groupId>com.alibaba.cloud</groupId>
                <artifactId>spring-cloud-alibaba-dependencies</artifactId>
                <version>${spring-cloud-alibaba.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
```

然后在user-service和order-service中的pom文件中引入nacos-discovery依赖：

```xml
<!-- nacos客户端依赖包 -->
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
<!--负载均衡-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>
```



### 3.2 配置nacos地址

在user-service和order-service的application.yml中添加nacos地址：

```yaml
spring:  
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848
```



### 3.3重启

重启微服务后，登录nacos管理页面，可以看到微服务信息：

![1682495679666](SpringCloud02.assets/1682495679666.png)

### 3.4请求查询测试

### 3.5注册中心对照表（全）         面试题：CAP定理， base理论

|              | Nacos                      | Eureka      | Consul           | Zookeeper   |
| ------------ | -------------------------- | ----------- | ---------------- | ----------- |
| CAP          | cp+ap默认AP                | AP          | CP               | CP          |
| 健康检查     | TCP/HTTP/MYSQL/Client Beat | Client Beat | TCP/HTTP/RPC/CMD | Client Beat |
| 负载均衡     | 权重/DSL/CMDB              | Ribbon+Lb   | Fabio            | /           |
| 雪崩保护     | 支持                       | 支持        | 不支持           | 不支持      |
| 自动注销实例 | 支持                       | 支持        | 不支持           | 支持        |
| 访问协议     | HTTP/DNS/UDP               | HTTP        | HTTP/DNS         | TCP         |
| 监听支持     | 支持                       | 支持        | 支持             | 支持        |
| 多数据中心   | 支持                       | 支持        | 支持             | 不支持      |
| 跨注册中心   | 支持                       | 不支持      | 支持             | 不支持      |
| cloud集成    | 支持                       | 支持        | 支持             | 支持        |
| dubbo集成    | 支持                       | 不支持      | 不支持           | 支持        |
| K8S集成      | 支持                       | 不支持      | 支持             | 不支持      |



注意：Nacos支持CP/AP

既然nacos既支持CP又支持AP，那么我们改如何选择呢？

> 如果不需要存储服务级别的信息并且服务实例是通过nacos-client注册的，并能够保持心跳，那么就可以选择AP模式，AP模式是为了服务的可用性而降低了一致性，因此AP模式下只支持注册临时实例
>
> 如果需要在服务级别编辑或者存储信息，那么我们可以使用CP模式，CP模式下支持数据的持久化，此时集群以raft模式来运行，该模式下注册实例之前必须先注册服务，如果服务不存在就会返回错误信息。



## 4.Nacos配置管理

Nacos除了可以做注册中心，同样可以做配置管理来使用。

### 4.1.统一配置管理

当微服务部署的实例越来越多，达到数十、数百时，逐个修改微服务配置就会让人抓狂，而且很容易出错。我们需要一种统一配置管理方案，可以集中管理所有实例的配置。

![1682497070023](SpringCloud02.assets/1682497070023.png)



Nacos一方面可以将配置集中管理，另一方可以在配置变更时，及时通知微服务，实现配置的热更新。



#### 4.1.1.在nacos中添加配置文件

如何在nacos中管理配置呢？

![1682499005946](SpringCloud02.assets/1682499005946.png)

然后在弹出的表单中，填写配置信息：

![1682499062350](SpringCloud02.assets/1682499062350.png)



> 注意：项目的核心配置，需要热更新的配置才有放到nacos管理的必要。基本不会变更的一些配置还是保存在微服务本地比较好。



#### 4.1.2.从微服务拉取配置

微服务要拉取nacos中管理的配置，并且与本地的application.yml配置合并，才能完成项目启动。

但如果尚未读取application.yml，又如何得知nacos地址呢？

因此spring引入了一种新的配置文件：bootstrap.yaml文件，会在application.yml之前被读取，流程如下：

![1682499376938](SpringCloud02.assets/1682499376938.png)

1）引入nacos-config依赖

首先，在user-service服务中，引入nacos-config的客户端依赖：

```xml
<!--nacos配置管理依赖-->
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
</dependency>
<!--优先加载bootstrap文件
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-bootstrap</artifactId>
    <version>3.1.5</version>
</dependency> 
-->
```

2）添加bootstrap.yaml

然后，在order-service中添加一个bootstrap.yaml文件，内容如下：

```yaml
spring:
  config:
    import:
      - optional:nacos:order-service-${spring.profiles.active}.${spring.cloud.nacos.config.file-extension}
  application:
    name: order-service   #  DATA-ID:  order-service-dev.yaml
  profiles:
    active: dev
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
      config:  #  配置管理地址
        server-addr: 127.0.0.1:8848
        file-extension: yaml  # 后缀
```

这里会根据spring.cloud.nacos.server-addr获取nacos地址，再根据

`${spring.application.name}-${spring.profiles.active}.${spring.cloud.nacos.config.file-extension}`作为文件id，来读取配置。

本例中，就是去读取`userservice-dev.yaml`：

![1682499509436](SpringCloud02.assets/1682499509436.png)

3）启动order-service验证

#### 4.1.3.配置热更新

在order-service服务中添加普通变量并发布

![1682499736475](SpringCloud02.assets/1682499736475.png)

在order-service中读取upload配置

![1682500096856](SpringCloud02.assets/1682500096856.png) 

如果再次修改变量的值发布之后不会进行热更新

![1682500151371](SpringCloud02.assets/1682500151371.png) 

我们最终的目的，是修改nacos中的配置后，微服务中无需重启即可让配置生效，也就是**配置热更新**。

要实现配置热更新,只需要在@Value注入的变量所在类上添加注解@RefreshScope：

![1682500402840](SpringCloud02.assets/1682500402840.png) 

### 4.2Nacos多环境配置

可以通过nameSpace和group配置隔离环境，不同nameSpace和不同group的服务不能相互调用

![1682501255548](SpringCloud02.assets/1682501255548.png)





#### 4.2.1group的设定

配置中心和服务中都有group的配置，可以为不同服务进行分组，做到环境隔离

##### 4.2.1.1配置中心

![1682501429311](SpringCloud02.assets/1682501429311.png)

- 创建分组

![1682502592286](SpringCloud02.assets/1682502592286.png)

- 信息展示

![1682502607936](SpringCloud02.assets/1682502607936.png)

- 通过配置文件的group切换不同的组

![1682503290663](SpringCloud02.assets/1682503290663.png) 

##### 4.2.1.2服务中心

![1682502809036](SpringCloud02.assets/1682502809036.png) 

- 创建分组

  在服务启动的时候设置组名

  ![1682503349393](SpringCloud02.assets/1682503349393.png) 

  ![1682503331841](SpringCloud02.assets/1682503331841.png) 

  注意不同组之间的服务不能相互调用


#### 4.2.2 nameSpace的设定

同样可以为配置中心和服务中心设置命名空间，做到环境隔离的效果

注意：跟group一样不同的namespace不能相互访问

- 创建namespace

  ![1682503874265](SpringCloud02.assets/1682503874265.png)

- 创建成功

  ![1682503952289](SpringCloud02.assets/1682503952289.png)

- 在order-service启动的时候更改命名空间

  ![1682504112725](SpringCloud02.assets/1682504112725.png)



- 展示

  ![1682504142188](SpringCloud02.assets/1682504142188.png)



## 5.持久化配置

### 5.1问题引入

**我们发现当我们把nacos停机之后再重启，之前的配置依然保留，那么说明了一点，nacos是默认自带持久化功能的，那么nacos是如何实现持久化的呢？**

> Nacos默认有自带嵌入式数据库,derby,但是如果做集群模式的话,就不能使用自己的数据库，
>
> 不然每个节点一个数据库,那么数据就不统一了,因此我们需要使用外部的数据库来统一配置节点的存储，目前只支持mysql，并且mysql版本要在5.6+，目前不支持8.0以上

![1682505419483](SpringCloud02.assets/1682505419483.png)

### 5.2单机版切换mysql数据库

切换数据库之前对于配置文件进行备份

**nacos默认自带了一个sql文件,在nacos安装目录下**

![1682505600887](SpringCloud02.assets/1682505600887.png)

①.创建nacos数据库，执行sql语句

![1682505777714](SpringCloud02.assets/1682505777714.png) 

②.修改Nacos安装目录下的安排application.properties,修改配置文件

![1682506143307](SpringCloud02.assets/1682506143307.png)

③.先关闭微服务，然后重启nacos,那么就会改为使用我们自己的mysql

![1682506520317](SpringCloud02.assets/1682506520317.png)

④.重新编写配置文件并测试(注意分组)

![1682508333656](SpringCloud02.assets/1682508333656.png) 



## 6.Gateway服务网关

Spring Cloud Gateway 是 Spring Cloud 的一个全新项目，该项目是基于 Spring 5.0，Spring Boot 2.0 和 Project Reactor 等响应式编程和事件流技术开发的网关，它旨在为微服务架构提供一种简单有效的统一的 API 路由管理方式。

![1682837642632](SpringCloud02.assets/1682837642632.png)



### 6.1.为什么需要网关

Gateway网关是我们服务的守门神，所有微服务的统一入口。

网关的**核心功能特性**：

- 请求路由
- 权限控制
- 限流

架构图：

![1682837652941](SpringCloud02.assets/1682837652941.png)



**权限控制**：网关作为微服务入口，需要校验用户是是否有请求资格，如果没有则进行拦截。

**路由和负载均衡**：一切请求都必须先经过gateway，但网关不处理业务，而是根据某种规则，把请求转发到某个微服务，这个过程叫做路由。当然路由的目标服务有多个时，还需要做负载均衡。

**限流** ：当请求流量过高时，在网关中按照下流的微服务能够接受的速度来放行请求，避免服务压力过大。



在SpringCloud中网关的实现包括两种：

- gateway
- zuul

Zuul是基于Servlet的实现，属于阻塞式编程。而SpringCloudGateway则是基于Spring5中提供的WebFlux，属于响应式编程的实现，具备更好的性能。



### 6.2.gateway快速入门

下面，我们就演示下网关的基本路由功能。基本步骤如下：

1. 创建SpringBoot工程gateway，引入网关依赖
2. 编写启动类
3. 编写基础配置和路由规则
4. 启动网关服务进行测试

#### 1）创建gateway服务，引入依赖

创建服务

引入依赖：

```xml
<!--网关-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
<!--nacos使用2.0.4版本需要手动引入负载均衡依赖-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-loadbalancer</artifactId>
</dependency>

<!--nacos服务发现依赖-->
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```

#### 2）编写启动类

![1682837677301](SpringCloud02.assets/1682837677301.png)



#### 3）编写基础配置

创建application.yml文件，内容如下：

```yaml
server:
  port: 10010
spring:
  application:
    name: springcloud-gateway-service
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
    gateway:
      # 是否和服务注册与发现组件结合，设置为 true 后可以直接使用应用名称调用服务
      discovery:
        locator:
          enabled: true
          lower-case-service-id: true # 服务名称转成小写
    
```



#### 4)      通过服务名称访问   

注意：一定要保证网关和服务在同一个命名空间和组下

http://localhost:10010/cloud-order/order/selectById?oid=1

#### 5）编写路由设置

目前访问地址暴露在访问地址中，为了安全和方便访问需要隐藏

```yml
server:
  port: 10010
spring:
  application:
    name: cloud-gateway
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
        group: ONE
    gateway:
      routes:
        - id: cloud-order
          uri: lb://cloud-order # 路由的目标地址 lb就是负载均衡，后面跟服务名称
          predicates:
            - Path=/order/**
```

我们将符合`Path` 规则的一切请求，都代理到 `uri`参数指定的地址。

本例中，我们将 `/order/**`开头的请求，代理到`lb://cloud-order`，lb是负载均衡，根据服务名拉取服务列表，实现负载均衡。

#### 6）重启测试

重启网关，访问http://localhost:10010/order/selectById?oid=1时，符合`/order/**`规则,得到了结果：

#### 7）网关路由的流程图

整个访问的流程如下：

![1682837712982](SpringCloud02.assets/1682837712982.png)



总结：

网关搭建步骤：

1. 创建项目，引入nacos服务发现和gateway依赖
2. 配置application.yml，包括服务基本信息、nacos地址、路由

路由配置包括：

1. 路由id：路由的唯一标示
2. 路由目标（uri）：路由的目标地址，http代表固定地址，lb代表根据服务名负载均衡
3. 路由断言（predicates）：判断路由的规则，
4. 路由过滤器（filters）：对请求或响应做处理

### 6.3.断言工厂

我们在配置文件中写的断言规则只是字符串，这些字符串会被Predicate Factory读取并处理，转变为路由判断的条件

例如Path=/user/**是按照路径匹配，这个规则是由

`org.springframework.cloud.gateway.handler.predicate.PathRoutePredicateFactory`类来

处理的，像这样的断言工厂在SpringCloudGateway还有十几个:

| **名称** | **说明**                 | **示例**                                                     |
| -------- | ------------------------ | ------------------------------------------------------------ |
| After    | 是某个时间点后的请求     | -  After=2037-01-20T17:42:47.789-07:00[America/Denver]       |
| Before   | 是某个时间点之前的请求   | -  Before=2031-04-13T15:14:47.433+08:00[Asia/Shanghai]       |
| Between  | 是某两个时间点之前的请求 | -  Between=2037-01-20T17:42:47.789-07:00[America/Denver],  2037-01-21T17:42:47.789-07:00[America/Denver] |
| Header   | 请求必须包含某些header   | - Header=abc                                                 |
| Method   | 请求方式必须是指定方式   | - Method=GET,POST                                            |
| Path     | 请求路径必须符合指定规则 | - Path=/red/{segment},/blue/**                               |
| Query    | 请求参数必须包含指定参数 | - Query=name, Jack或者-  Query=name                          |

我们只需要掌握常用的路由工程就可以了。



### 6.4.过滤器工厂

GatewayFilter是网关中提供的一种过滤器，可以对进入网关的请求和微服务返回的响应做处理：

![1682837722390](SpringCloud02.assets/1682837722390.png)



#### 6.4.1.路由过滤器的种类  不重要

Spring提供了31种不同的路由过滤器工厂。例如：

| **名称**             | **说明**                     |
| -------------------- | ---------------------------- |
| AddRequestHeader     | 给当前请求添加一个请求头     |
| RemoveRequestHeader  | 移除请求中的一个请求头       |
| AddResponseHeader    | 给响应结果中添加一个响应头   |
| RemoveResponseHeader | 从响应结果中移除有一个响应头 |
| RequestRateLimiter   | 限制请求的流量               |

#### 6.4.2.请求头过滤器

下面我们以AddRequestHeader 为例来讲解。

> **需求**：给所有进入userservice的请求添加一个请求头

只需要修改gateway服务的application.yml文件，添加路由过滤即可：

```yaml
spring:
  cloud:
    gateway:
      routes:
      - id: user-service 
        uri: lb://userservice 
        predicates: 
        - Path=/user/** 
        filters: # 过滤器
            - AddRequestHeader=status,cjc2209 # 添加请求头
```

当前过滤器写在userservice路由下，因此仅仅对访问userservice的请求有效。

测试：

![1682837734234](SpringCloud02.assets/1682837734234.png)

运行：

#### 6.4.3.默认过滤器

如果要对所有的路由都生效，则可以将过滤器工厂写到default下。格式如下：

```yaml
server:
  port: 10010
spring:
  application:
    name: cloud-gateway
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
        group: ONE
    gateway:
      routes:
        - id: cloud-order
          uri: lb://cloud-order # 路由的目标地址 lb就是负载均衡，后面跟服务名称
          predicates:
            - Path=/order/**
        - id: cloud-user
          uri: lb://cloud-user # 路由的目标地址 lb就是负载均衡，后面跟服务名称
          predicates:
            - Path=/user/**
      default-filters:
        - AddRequestHeader=stuts,cjc2209 # 添加请求头
```



#### 6.4.4.总结

过滤器的作用是什么？

① 对路由的请求或响应做加工处理，比如添加请求头

② 配置在路由下的过滤器只对当前路由的请求生效

defaultFilters的作用是什么？

① 对所有路由都生效的过滤器



### 6.5.全局过滤器

上一节学习的过滤器，网关提供了31种，但每一种过滤器的作用都是固定的。如果我们希望拦截请求，做自己的业务逻辑则没办法实现。

#### 6.5.1.全局过滤器作用

全局过滤器的作用也是处理一切进入网关的请求和微服务响应，与GatewayFilter的作用一样。区别在于GatewayFilter通过配置定义，处理逻辑是固定的；而GlobalFilter的逻辑需要自己写代码实现。

定义方式是实现GlobalFilter接口。

```java
public interface GlobalFilter {
    /**
     *  处理当前请求，有必要的话通过{@link GatewayFilterChain}将请求交给下一个过滤器处理
     *
     * @param exchange 请求上下文，里面可以获取Request、Response等信息
     * @param chain 用来把请求委托给下一个过滤器 
     * @return {@code Mono<Void>} 返回标示当前过滤器业务结束
     */
    Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain);
}
```



在filter中编写自定义逻辑，可以实现下列功能：

- 登录状态判断
- 权限校验
- 请求限流等

#### 6.5.2.自定义全局过滤器

需求：定义全局过滤器，拦截请求，判断请求的参数是否满足下面条件：

- 参数中是否有username，
- username参数值是否为admin

如果同时满足则放行，否则拦截

实现：

在gateway中定义一个过滤器：

![1682837756433](SpringCloud02.assets/1682837756433.png)

测试：没有携带username=zhangsan

![1682837764444](SpringCloud02.assets/1682837764444.png) 

测试：已经携带username=zhangsan

#### .过滤器执行顺序

请求进入网关会碰到三类过滤器：当前路由的过滤器、DefaultFilter、GlobalFilter

请求路由后，会将当前路由过滤器和DefaultFilter、GlobalFilter，合并到一个过滤器链（集合）中，排序后依次执行每个过滤器：

![1682837781537](SpringCloud02.assets/1682837781537.png)



排序的规则是什么呢？

- 每一个过滤器都必须指定一个int类型的order值，**order值越小，优先级越高，执行顺序越靠前**。
- GlobalFilter通过实现Ordered接口，或者添加@Order注解来指定order值，由我们自己指定
- 路由过滤器和defaultFilter的order由Spring指定，默认是按照声明顺序从1递增。
- 当过滤器的order值一样时，会按照 defaultFilter > 路由过滤器 > GlobalFilter的顺序执行。



### 6.6.跨域问题



#### 6.6.1.什么是跨域问题

跨域：域名不一致就是跨域，主要包括：

- 域名不同： www.taobao.com 和 www.taobao.org 和 www.jd.com 和 miaosha.jd.com
- 域名相同，端口不同：localhost:8080和localhost8081

跨域问题：浏览器禁止请求的发起者与服务端发生跨域ajax请求，请求被浏览器拦截的问题



如果在浏览器中发现如下错误

![1682837794107](SpringCloud02.assets/1682837794107.png)



从localhost:8090访问localhost:10010，端口不同，显然是跨域的请求。



#### 6.6.2.解决跨域问题

在gateway服务的application.yml文件中，添加下面的配置：

```yaml
spring:
  cloud:
    gateway:
      # 。。。
      globalcors: # 全局的跨域处理
        add-to-simple-url-handler-mapping: true # 解决options请求被拦截问题
        corsConfigurations:
          '[/**]':
            allowedOriginPatterns: # 允许哪些网站的跨域请求   
               - "*"
            allowedMethods: # 允许的跨域ajax的请求方式
              - "GET"
              - "POST"
              - "DELETE"
              - "PUT"
              - "OPTIONS"
            allowedHeaders: "*" # 允许在请求中携带的头信息
            allowCredentials: true # 是否允许携带cookie
            maxAge: 360000 # 这次跨域检测的有效期
```



#### 6.6.3.配置文件上传至nacos配置中心

①.导入nacos配置依赖以及bootstrap依赖

```yaml
<!--nacos配置管理依赖-->
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
</dependency>

<!--优先加载bootstrap文件-->
<dependency>
	<groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-bootstrap</artifactId>
    <version>3.1.5</version>
</dependency>
```



②.编写bootstrap配置文件

![1682837806066](SpringCloud02.assets/1682837806066.png) 



③.上传application.yml文件

![1682837814901](SpringCloud02.assets/1682837814901.png)

