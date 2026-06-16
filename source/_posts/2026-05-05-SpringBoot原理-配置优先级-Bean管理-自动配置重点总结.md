---
title: SpringBoot原理-配置优先级-Bean管理-自动配置重点总结
date: 2026-05-05 14:07:22
tags:
  - Java
  - JavaWeb
  - 后端
categories: 编程开发
cover: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80'
---



# SpringBoot 原理 · 配置优先级 · Bean 管理 · 自动配置 · 重点总结

## 一、配置文件优先级

### 1.1 SpringBoot 三种配置文件

| 配置文件 | 格式 | 推荐度 |
|----------|------|-------|
| `application.properties` | `key=value` | 优先级最高 |
| **`application.yml`** | yaml 缩进格式（**主流推荐**） | 优先级中 |
| `application.yaml` | 同 yml | 优先级最低（与 yml 等价但更少用） |

> ⚠️ 三种配置文件如果配置同一属性，优先级：**`properties` > `yml` > `yaml`**；项目开发中**统一使用 yml** 即可。

### 1.2 五种配置方式优先级（⭐ 常考）

| 优先级 | 配置方式 | 示例 |
|--------|---------|------|
| **最高** | **命令行参数** | `--server.port=10010` |
| 高 | Java 系统属性 | `-Dserver.port=9000` |
| 中 | `application.properties` | `server.port=8081` |
| 低 | `application.yml` | `server:\n  port: 8082` |
| 最低 | `application.yaml` | 同 yml |

> **优先级公式**：命令行参数 > 系统属性参数 > properties > yml > yaml

### 1.3 打包后运行时指定参数

```bash
# 1. Maven 打包
mvn package

# 2. 运行 jar，同时指定 Java 系统属性 + 命令行参数
java -Dserver.port=9000 -jar app.jar --server.port=10010
# 最终生效：10010（命令行参数优先）
```

> 打包必须引入 `spring-boot-maven-plugin` 插件（基于官方骨架创建项目自动包含）。

## 二、Bean 管理

### 2.1 从 IOC 容器获取 Bean 三种方式

> **前提**：先注入 `ApplicationContext`（IOC 容器对象）

| 方式 | 方法签名 | 示例 |
|------|---------|------|
| 按名称获取 | `Object getBean(String name)` | `ctx.getBean("deptController")` |
| 按类型获取 | `<T> T getBean(Class<T> type)` | `ctx.getBean(DeptController.class)` |
| 按名称+类型 | `<T> T getBean(String name, Class<T> type)` | `ctx.getBean("deptController", DeptController.class)` |

```java
@SpringBootTest
class ApplicationTests {

    @Autowired
    private ApplicationContext applicationContext;  // 注入 IOC 容器对象

    @Test
    public void testGetBean() {
        // 三种方式获取 bean
        DeptController b1 = (DeptController) applicationContext.getBean("deptController");
        DeptController b2 = applicationContext.getBean(DeptController.class);
        DeptController b3 = applicationContext.getBean("deptController", DeptController.class);

        // 三个对象地址一致 → IOC 容器中默认 bean 是【单例】
        System.out.println(b1 == b2);  // true
    }
}
```

### 2.2 Bean 作用域（@Scope）

| 作用域 | 说明 |
|--------|------|
| **`singleton`** | **容器中同名 bean 只有一个实例（默认）** |
| `prototype` | 每次获取该 bean 都创建新实例（非单例） |
| `request` | 每个 HTTP 请求范围创建新实例（仅 web） |
| `session` | 每个会话范围创建新实例（仅 web） |
| `application` | 每个应用范围创建新实例（仅 web） |

| 注解 | 作用 |
|------|------|
| `@Scope("prototype")` | 设置 bean 为多例 |
| `@Lazy` | **延迟加载**（第一次使用 bean 时才创建，否则启动时创建） |

```java
@Scope("prototype")  // 多例
@Lazy                // 延迟加载
@RestController
public class DeptController {
    public DeptController() {
        System.out.println("DeptController 创建...");
    }
}
```

> ⚠️ **实际开发中绝大部分 Bean 都是单例的，无需配置 `@Scope`**。

### 2.3 第三方 Bean 管理（@Bean）

> **场景**：第三方依赖类无法修改源码加 `@Component`，需要使用 `@Bean` 注解将其交给 IOC 容器。

| 方案 | 推荐度 |
|------|-------|
| 在启动类上 `@Bean` 方法 | ❌ 不推荐（破坏启动类纯粹性） |
| **单独定义 `@Configuration` 配置类，使用 `@Bean`** | ✅ **推荐** |

```java
@Configuration  // 配置类（集中管理第三方 bean）
public class CommonConfig {

    @Bean   // 方法返回值交给 IOC 容器，bean 名称默认 = 方法名
    public SAXReader saxReader() {
        return new SAXReader();
    }

    // 第三方 bean 依赖其他 bean，直接形参注入
    @Bean
    public SomeBean someBean(DeptService deptService) {
        // Spring 自动从 IOC 容器查找 DeptService 注入
        return new SomeBean(deptService);
    }
}
```

### 2.4 Bean 来源四类

| 来源 | 注册方式 | 示例 |
|------|---------|------|
| SpringBoot 自动管理 | 自动配置 | `ApplicationContext`、`HttpServletRequest` |
| 第三方起步依赖自动配置 | starter 自动装配 | MyBatis 的 Mapper、Druid 连接池 |
| 自定义类 | `@Component`/`@Controller`/`@Service`/`@Repository` | 业务类 |
| 第三方普通类 | **`@Configuration` + `@Bean`** | `SAXReader`、`Gson` |

## 三、SpringBoot 原理总览

### 3.1 SpringBoot 简化开发的两大核心

| 核心 | 解决问题 | 原理 |
|------|---------|------|
| **起步依赖** | 解决依赖配置繁琐、版本冲突问题 | **Maven 依赖传递机制** |
| **自动配置** | 解决 bean 声明和配置繁琐问题 | **`@EnableAutoConfiguration` + ImportSelector + 配置文件** |

## 四、起步依赖原理

### 4.1 概念

> SpringBoot 提供的起步依赖（命名以 `spring-boot-starter-` 开头）已包含开发所需的所有依赖。引入一个起步依赖，所有传递依赖会自动引入。

### 4.2 命名规范

| 类型 | 命名规则 |
|------|---------|
| SpringBoot 官方 | `spring-boot-starter-xxx`（如 `spring-boot-starter-web`） |
| 第三方组织 | `xxx-spring-boot-starter`（如 `mybatis-spring-boot-starter`） |

> **结论**：起步依赖原理就是 **Maven 依赖传递**。

## 五、自动配置原理（⭐ 核心）

### 5.1 自动配置的概念

> SpringBoot 启动后，一些配置类、bean 对象**自动**存入 IOC 容器，无需手动声明。

### 5.2 实现自动配置的四种导入方案对比

| 方案 | 写法 | 评价 |
|------|------|------|
| ① `@ComponentScan` 扫描第三方包 | `@ComponentScan({"com.itheima","com.example"})` | ❌ 繁琐、性能低 |
| ② `@Import` 导入普通类 | `@Import(TokenParser.class)` | ⚠️ 需知道第三方有哪些类 |
| ③ `@Import` 导入配置类 | `@Import(HeaderConfig.class)` | ⚠️ 同上 |
| ④ `@Import` 导入 `ImportSelector` 实现类 | `@Import(MyImportSelector.class)` | ⚠️ 同上 |
| **⑤ 第三方提供 `@EnableXxx` 注解（封装 @Import）** | `@EnableHeaderConfig` | ✅ **SpringBoot 采用方式** |

### 5.3 @SpringBootApplication 注解结构（⭐ 最重要）

```
@SpringBootApplication
├── @SpringBootConfiguration  → 启动类即配置类
├── @ComponentScan            → 扫描启动类所在包及子包的组件
└── @EnableAutoConfiguration  ⭐ 自动配置核心
        └── @Import(AutoConfigurationImportSelector.class)
                └── selectImports() 方法
                        └── 读取两个配置文件：
                            1. META-INF/spring.factories（旧）
                            2. META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports（新）
```

### 5.4 自动配置完整流程

| 步骤 | 操作 |
|------|------|
| ① 启动类有 `@SpringBootApplication` | 内部包含 `@EnableAutoConfiguration` |
| ② `@EnableAutoConfiguration` 含 `@Import(AutoConfigurationImportSelector.class)` | — |
| ③ `AutoConfigurationImportSelector` 实现 `ImportSelector` 接口，重写 `selectImports()` | — |
| ④ `selectImports()` 读取所有 jar 包中的两个文件 | `spring.factories` + `AutoConfiguration.imports` |
| ⑤ 文件中列出的所有自动配置类被 `@Import` 加载到 IOC 容器 | — |
| ⑥ 配置类中 `@Bean` 方法的返回值被注册为 bean | — |
| ⑦ `@Conditional` 系列注解决定是否真正注册（按条件装配） | — |

### 5.5 @Conditional 系列注解（⭐ 条件装配）

> **作用**：满足条件时才注册 bean 到 IOC 容器，使 SpringBoot 智能装配。

| 注解 | 触发条件 |
|------|---------|
| `@Conditional` | 父注解，自定义条件 |
| **`@ConditionalOnClass`** | 环境中**存在指定类的字节码文件**才注册 |
| **`@ConditionalOnMissingBean`** | IOC 容器中**没有指定 bean** 才注册 |
| **`@ConditionalOnProperty`** | 配置文件中**存在指定属性和值**才注册 |
| `@ConditionalOnBean` | 容器中**存在指定 bean** 才注册 |

```java
@Configuration
public class HeaderConfig {

    // 类路径下有 io.jsonwebtoken.Jwts 类才注册 bean
    @Bean
    @ConditionalOnClass(name = "io.jsonwebtoken.Jwts")
    public HeaderParser headerParser() {
        return new HeaderParser();
    }

    // 容器中没有 HeaderConfig 类型的 bean 才注册（一般不会满足）
    @Bean
    @ConditionalOnMissingBean(HeaderConfig.class)
    public HeaderParser headerParser2() {
        return new HeaderParser();
    }

    // 配置文件中有 name=itheima 才注册
    @Bean
    @ConditionalOnProperty(name = "name", havingValue = "itheima")
    public HeaderParser headerParser3() {
        return new HeaderParser();
    }
}
```

## 六、自定义 starter

### 6.1 自定义 starter 标准结构

| 模块 | 职责 |
|------|------|
| **xxx-spring-boot-starter** 模块 | 仅依赖管理（pom.xml 引入 autoconfigure 模块 + 必需依赖），无代码 |
| **xxx-spring-boot-autoconfigure** 模块 | **自动配置核心**：写配置类 + Properties 类 + 工具类 + 自动配置文件 |

> **使用方**只需引入 starter 即可（autoconfigure 通过依赖传递自动引入）。

### 6.2 实现步骤（以阿里云 OSS 为例）

```
1. 创建 starter 模块
   └── pom.xml 引入 autoconfigure 模块依赖

2. 创建 autoconfigure 模块
   └── 创建 AliOSSProperties 类（@ConfigurationProperties 读配置）
   └── 创建 AliOSSUtils 类（业务功能）
   └── 创建 AliOSSAutoConfiguration 类（@Configuration 配置类，@Bean 方法注册 bean）

3. 在 autoconfigure 模块的 resources 下创建：
   META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports
   内容：com.aliyun.oss.AliOSSAutoConfiguration

4. mvn install 到本地仓库

5. 使用方引入 starter，application.yml 配置参数即可使用
```

### 6.3 关键代码

**Properties 类：**
```java
@Data
@ConfigurationProperties(prefix = "aliyun.oss")
public class AliOSSProperties {
    private String endpoint;
    private String accessKeyId;
    private String accessKeySecret;
    private String bucketName;
}
```

**自动配置类：**

```java
@Configuration
@EnableConfigurationProperties(AliOSSProperties.class) // 启用并注入到 IOC
public class AliOSSAutoConfiguration {

    @Bean
    public AliOSSUtils aliOSSUtils(AliOSSProperties props) {
        AliOSSUtils utils = new AliOSSUtils();
        utils.setAliOSSProperties(props);
        return utils;
    }
}
```

**自动配置文件：**

```
# resources/META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports
com.aliyun.oss.AliOSSAutoConfiguration
```

**install 不报错的配置（无 main 方法时）：**

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <configuration>
                <skip>true</skip>  <!-- 跳过 main 方法检测 -->
            </configuration>
        </plugin>
    </plugins>
</build>
```

## 七、配置文件相关注解

### 7.1 注解速查

| 注解 | 作用 | 示例 |
|------|------|------|
| **`@Value("${key}")`** | 读取配置文件单个属性 | `@Value("${server.port}") private Integer port;` |
| **`@ConfigurationProperties(prefix="前缀")`** | 批量读取配置文件属性，按属性名自动匹配 | 详见下方代码 |
| `@PropertySource("classpath:xxx.properties")` | 读取自定义配置文件 | 配合 `@Value` 使用 |
| **`@EnableConfigurationProperties(类.class)`** | 启用 `@ConfigurationProperties` 类，注入 IOC | 在 `@Configuration` 类上使用 |

### 7.2 @ConfigurationProperties 完整示例

```yaml
# application.yml
jdbc:
  url: jdbc:mysql://localhost:3306/db
  username: root
  password: 1234
  driver-class-name: com.mysql.cj.jdbc.Driver
  initial-size: 5
  max-active: 10
```

```java
@Data
@ConfigurationProperties(prefix = "jdbc")
@Component   // 或在配置类上 @EnableConfigurationProperties(MyDruidData.class)
public class MyDruidData {
    private String url;
    private String username;
    private String password;
    private String driverClassName;  // jdbc.driver-class-name 自动驼峰映射
    private int initialSize;
    private int maxActive;
}
```

### 7.3 依赖注入注解

| 注解 | 注入方式 |
|------|---------|
| **`@Autowired`** | 按**类型**注入；类型有多个 bean 时配合 `@Qualifier("名称")` 使用 |
| **`@Resource`** | 默认按**名称**注入；未指定名称时按类型注入 |

## 八、Web 后端开发技术总结

### 8.1 三层架构

| 层 | 包 | 职责 |
|----|-----|------|
| **表示层** | controller | 接收请求、响应数据 |
| **业务层** | service | 业务逻辑处理 |
| **持久层** | dao / mapper | 数据库访问 |

### 8.2 核心技术分类

| 类别 | 技术 |
|------|------|
| **传统 JavaWeb** | Filter 过滤器、Cookie、Session |
| **企业方案** | JWT 令牌、阿里云 OSS |
| **Spring Framework 核心** | IOC、DI、AOP、事务管理、全局异常处理、拦截器 |
| **Spring Web 模块（SpringMVC）** | `@Controller`、`@RequestMapping`、参数接收、响应处理 |
| **持久层** | MyBatis |

### 8.3 SSM 与 SpringBoot

| 项目 | 说明 |
|------|------|
| **SSM** | SpringMVC + Spring Framework + MyBatis |
| **SpringBoot 整合 SSM** | 主流企业开发方式（基于 SpringBoot 简化整合） |

## 九、综合速查

### 自动配置原理一句话

```
@SpringBootApplication
  → @EnableAutoConfiguration
    → @Import(AutoConfigurationImportSelector)
      → selectImports() 读取 META-INF/spring/...AutoConfiguration.imports
        → 加载所有自动配置类
          → 配置类的 @Bean 方法 + @Conditional 条件装配
            → 满足条件的 bean 注册到 IOC 容器
```

### 配置优先级速记

```
命令行 > 系统属性 > properties > yml > yaml
```

### Bean 管理三个层次

```
自定义类     → @Component/@Service/@Controller/@Repository
第三方类     → @Configuration + @Bean
依赖注入     → @Autowired（按类型）/ @Resource（按名称）
```

### 自定义 starter 三步法

```
① 写 autoconfigure 模块（配置类 + Properties + 工具类）
② 写 starter 模块（仅依赖 autoconfigure 模块）
③ 创建 META-INF/spring/...AutoConfiguration.imports 文件，列出配置类全限定名
```
