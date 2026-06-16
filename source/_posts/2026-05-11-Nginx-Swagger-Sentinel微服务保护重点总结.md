---
title: Nginx-Swagger-Sentinel微服务保护重点总结
date: 2026-05-11 22:08:11
tags:
  - 微服务
  - SpringCloud
  - 后端
categories: 编程开发
cover: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80'
---



# Nginx · Swagger · Sentinel 微服务保护 · 重点总结

> 整理自：`nginx.md` + `swagger.md` + `sentinel.md` + `nginx-swagger-sentinel.xmind`

---

# 第一部分：Nginx

## 一、Nginx 概述

### 1.1 核心概念

| 项目 | 说明 |
|------|------|
| **定义** | C 语言开发的**高性能 HTTP 服务器 + 反向代理服务器** |
| **作者** | 俄罗斯程序设计师 Igor Sysoev |
| **性能** | 官方测试可支撑 **5 万并发连接**，CPU/内存消耗低，运行稳定 |

### 1.2 三大应用场景

| 场景 | 说明 |
|------|------|
| **HTTP 服务器** | 部署**前端静态项目**（网页、CSS、JS、图片） |
| **反向代理** | 隐藏真实服务端，客户端不知道实际谁提供服务 |
| **负载均衡** | 多服务器集群，平均分担压力 |

---

## 二、Nginx 安装与命令

### 2.1 Windows 安装

> 解压即安装，**目录不能有中文**。

### 2.2 常用命令

| 命令 | 作用 |
|------|------|
| `start nginx` | **启动** |
| `nginx -t` | 检查配置文件**语法错误** |
| `nginx -s reload` | **刷新配置**（有时不生效，建议重启） |
| `nginx -s stop` | **停止** Nginx |

---

## 三、正向代理 vs 反向代理（⭐ 常考）

### 3.1 概念对比表

| 对比项 | **正向代理** | **反向代理** |
|--------|------------|------------|
| **代理对象** | 代理**客户端** | 代理**服务端** |
| **隐藏方** | 隐藏**真实客户端** | 隐藏**真实服务端** |
| **服务端是否知道客户端** | ❌ 不知道 | ✅ 知道（代理转发后） |
| **客户端是否知道服务端** | ✅ 知道 | ❌ 不知道 |
| **典型例子** | 翻墙、VPN | Nginx 后挂多台 Tomcat |

### 3.2 通俗理解（借钱故事）

| 场景 | 解释 |
|------|------|
| **正向代理** | A 想找 C 借钱，C 不认识 A → A 通过 B 向 C 借钱（B 隐藏了 A） |
| **反向代理** | A 找 C 借钱，C 借给了 A，但钱实际是 C 从 B 那里借的（A 不知道真实出资方） |

---

## 四、Nginx 配置文件 nginx.conf

### 4.1 主要结构

```nginx
worker_processes 1;   # 工作进程数

events {
    worker_connections 1024;  # 每个进程最大连接数
}

http {
    # 反向代理 + 负载均衡配置
    upstream myserver {
        server 192.168.1.10:8080;
        server 192.168.1.11:8080;
    }

    server {
        listen 80;
        server_name localhost;

        # 静态资源
        location / {
            root html;
            index index.html;
        }

        # 反向代理
        location /api/ {
            proxy_pass http://myserver;
        }
    }
}
```

### 4.2 三种核心场景配置

#### 场景①：作为 Web 服务器部署静态项目

```nginx
server {
    listen 80;
    server_name localhost;

    location / {
        root html;           # 静态资源目录
        index index.html;
    }
}
```

#### 场景②：反向代理

```nginx
server {
    listen 80;
    location / {
        proxy_pass http://www.baidu.com;   # 反向代理到后端
    }
}
```

#### 场景③：负载均衡

```nginx
upstream myserver {
    server 192.168.1.10:8080;
    server 192.168.1.11:8080;
}

server {
    listen 80;
    location / {
        proxy_pass http://myserver;        # 转到 upstream 集群
    }
}
```

### 4.3 三种负载均衡策略（⭐ 常考）

| 策略 | 配置 | 说明 |
|------|------|------|
| **轮询**（默认） | 不需额外配置 | 请求按顺序分配到各服务器 |
| **权重** | `server x.x.x.x weight=5;` | 配置高的服务器分配更多请求 |
| **ip_hash** | `ip_hash;` | 同一 IP 固定访问同一服务器，**解决 session 问题** |

```nginx
# 轮询（默认）
upstream myserver {
    server 192.168.1.10;
    server 192.168.1.11;
}

# 权重
upstream myserver {
    server 192.168.1.10 weight=5;   # 5/8 流量
    server 192.168.1.11 weight=3;   # 3/8 流量
}

# IP Hash（保持会话）
upstream myserver {
    ip_hash;
    server 192.168.1.10;
    server 192.168.1.11;
}
```

---

# 第二部分：Swagger

## 一、Swagger 概述

### 1.1 核心概念

| 项目 | 说明 |
|------|------|
| **作用** | 自动生成**在线接口文档**，方便前后端联调 |
| **优势** | 接口文档与代码同步更新，不会过时 |
| **本质** | 通过扫描注解，自动生成可视化 API 文档界面 |

---

## 二、Swagger 集成步骤（SpringDoc OpenAPI）

### 2.1 四步集成

| 步骤 | 操作 |
|------|------|
| ① 引入依赖 | `springdoc-openapi-starter-webmvc-ui` |
| ② 编写配置类 | 创建 `OpenAPI Bean` 配置文档信息 |
| ③ 配置 yml | 启用 swagger-ui + 指定扫描包 |
| ④ 加注解 | 类/方法/参数上加 swagger 注解 |

### 2.2 引入依赖

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.5.0</version>
</dependency>
```

### 2.3 配置类

```java
@Configuration
public class OpenApiConfig {
    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("xx服务接口文档")
                        .description("shop-goods-service 接口文档")
                        .version("v1.0.0")
                );
    }
}
```

### 2.4 yml 配置

```yaml
springdoc:
  api-docs:
    enabled: true
    path: /v3/api-docs
  swagger-ui:
    enabled: true
    path: /swagger-ui.html
  packages-to-scan: com.cjc.controller   # 改成自己的 Controller 包名
```

### 2.5 常用注解

| 注解 | 位置 | 作用 |
|------|------|------|
| **`@Tag(name="...")`** | **类上** | 给 Controller 分组（如"品牌管理"） |
| **`@Operation(summary="..", description="..")`** | **方法上** | 描述接口 |
| `@Parameter` | 方法参数 | 描述参数 |
| `@Schema` | 实体类属性 | 描述字段 |

```java
@Tag(name = "品牌管理")
@RestController
@RequestMapping("/brand")
public class BrandController {

    @Operation(summary = "保存操作", description = "保存品牌信息")
    @PostMapping
    public Result save(@RequestBody Brand brand) {
        return Result.success();
    }
}
```

### 2.6 访问地址

```
http://localhost:8081/swagger-ui.html
```

---

# 第三部分：Sentinel 微服务保护

## 一、雪崩问题

### 1.1 雪崩定义

> 微服务相互调用，**调用链中某个服务故障**，引起**整个链路都无法访问**的级联失败。

### 1.2 雪崩形成过程

```
服务 I 故障 → 依赖 I 的业务被阻塞 → 用户线程不释放
   ↓
越来越多的请求阻塞 → 服务器线程耗尽 → 当前服务也不可用
   ↓
依赖当前服务的其他服务也变得不可用 → 级联失败 → 雪崩
```

### 1.3 四大解决方案（⭐ 必记）

| 方案 | 思路 | 性质 |
|------|------|------|
| **超时处理** | 设定超时时间，超时返回错误信息 | 补救 |
| **仓壁模式**（线程隔离） | 每个业务限定线程数，避免耗尽 tomcat 资源 | 补救 |
| **熔断降级**（断路器） | 统计异常比例，超阈值则熔断，拦截所有请求 | 补救 |
| **限流** | 限制业务的 QPS，**削峰填谷** | **预防** |

> **总结**：限流是**预防**措施；超时/隔离/熔断是**补救**措施。

---

## 二、Sentinel 介绍

### 2.1 概念

| 项目 | 说明 |
|------|------|
| **来源** | 阿里巴巴开源的微服务流量控制组件 |
| **官网** | https://sentinelguard.io/zh-cn/index.html |
| **特性** | 丰富应用场景、完备实时监控、广泛开源生态 |
| **对比** | 早期 Netfix Hystrix；目前国内主流是 **Sentinel** |

### 2.2 安装与启动

```bash
# 启动 Dashboard 控制台
java -jar sentinel-dashboard-1.8.8.jar

# 修改端口
java -Dserver.port=8888 -jar sentinel-dashboard-1.8.8.jar
```

| 配置项 | 默认值 |
|--------|--------|
| `server.port` | 8080 |
| `sentinel.dashboard.auth.username` | sentinel |
| `sentinel.dashboard.auth.password` | sentinel |

### 2.3 微服务整合 Sentinel

```xml
<!-- 引入依赖 -->
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
</dependency>
```

```yaml
# 配置控制台地址
server:
  port: 8088
spring:
  cloud:
    sentinel:
      transport:
        dashboard: localhost:8888
```

### 2.4 簇点链路

> **簇点链路**：请求进入微服务，依次访问 DispatcherServlet → Controller → Service → Mapper 的调用链。

> Sentinel 默认监控 **SpringMVC 的每一个 Controller 方法**（端点）作为一个**资源**。

### 2.5 四种规则按钮

| 按钮 | 作用 |
|------|------|
| **流控** | 流量控制（限流） |
| **降级** | 降级熔断 |
| **热点** | 热点参数限流 |
| **授权** | 请求权限控制 |

---

## 三、流量控制（限流）

### 3.1 三种流控模式（⭐）

| 模式 | 说明 | 应用场景 |
|------|------|---------|
| **直接** | 统计当前资源，超阈值直接限流（默认） | 普通限流 |
| **关联** | 统计**另一相关资源**，超阈值时限流**当前资源** | 优先保护高优先级业务（如优先支付，限流查询） |
| **链路** | 只统计**从指定链路**进入本资源的请求 | 区分不同来源的请求做差异限流 |

### 3.2 关联模式示例

> 当 `/update` 触发阈值时，对 `/query` 限流。

```
配置：
    资源名 = /query
    阈值类型 = QPS，阈值 = 5
    流控模式 = 关联
    关联资源 = /update

效果：当 /update 的 QPS > 5 时，/query 请求被限流
```

### 3.3 链路模式示例

> 区分 `/test1 → /common` 和 `/test2 → /common`，只统计从 `/test2` 进入的。

```java
// 给 OrderService 的方法加 @SentinelResource 标记
@SentinelResource("goods")
public void queryGoods() {
    System.err.println("查询商品");
}
```

```yaml
# 链路模式必须配置（关闭 context 整合）
spring:
  cloud:
    sentinel:
      web-context-unify: false
```

### 3.4 三种流控效果（⭐）

| 效果 | 说明 | 适用 |
|------|------|------|
| **快速失败**（默认） | 达到阈值直接拒绝并抛 `FlowException` | 一般场景 |
| **warm up**（预热） | 阈值从 `maxThreshold/coldFactor` 逐渐增到 maxThreshold | **服务冷启动**保护 |
| **排队等待** | 请求进入队列按间隔执行，超过 timeout 拒绝 | **削峰填谷**，平滑流量 |

### 3.5 warm up 计算

```
maxThreshold = 10
coldFactor   = 3（默认）
预热时长     = 5 秒

初始阈值 = 10 / 3 = 3
然后 5 秒内逐渐增长到 10
```

### 3.6 排队等待计算

```
QPS     = 5  → 每 200ms 处理一个请求
timeout = 2000ms

第 6 个请求的预期等待 = 200 × (6-1) = 1000ms  → 允许执行
第 12 个请求的预期等待 = 200 × (12-1) = 2200ms → 超时拒绝
```

---

## 四、线程隔离（舱壁模式）

### 4.1 概念

> 调用者给每个被调用服务**分配独立线程池**，故障时最多消耗该线程池资源，**避免耗尽调用方所有资源**。

### 4.2 两种实现方式

| 方式 | 说明 | Sentinel |
|------|------|---------|
| **线程池隔离** | 每个服务一个线程池 | Hystrix 默认 |
| **信号量隔离**（默认） | 计数器模式，记录线程数，达上限禁止新请求 | **Sentinel 默认** |

### 4.3 两者对比

| 对比项 | 信号量隔离 | 线程池隔离 |
|--------|----------|----------|
| 实现 | 计数器 | 线程池 |
| 开销 | **小** | 大（额外线程开销） |
| 隔离强度 | 弱 | **强** |
| 适用 | **简单业务** | 复杂业务 |

### 4.4 阈值类型

| 阈值类型 | 说明 |
|----------|------|
| **QPS** | 每秒请求数 |
| **线程数** | 该资源能使用的最大 tomcat 线程数（**线程隔离**） |

---

## 五、熔断降级

### 5.1 概念

> 由**断路器**统计服务调用的异常比例/慢请求比例，超阈值则**熔断**该服务（拒绝所有访问），服务恢复后再放行。

### 5.2 断路器状态机（⭐ 必记）

| 状态 | 说明 |
|------|------|
| **closed**（关闭） | **放行所有请求**，统计异常比例。超阈值切换到 open |
| **open**（打开） | **熔断**，所有请求快速失败走降级。**5 秒后**进入 half-open |
| **half-open**（半开） | **放行一次请求**测试，成功→closed，失败→open |

```
[closed]  → 异常超阈值 →  [open]  →  5秒后  →  [half-open]
   ↑                                                ↓
   └──────────── 测试请求成功 ←─────────────────────┘
   ↓
   └────────────  测试请求失败 → 回到 open
```

### 5.3 三种熔断策略（⭐）

| 策略 | 说明 | 适用 |
|------|------|------|
| **慢调用比例** | RT > 阈值时长的调用占比超过比例则熔断 | 超时严重的服务 |
| **异常比例** | 异常请求占比超过比例则熔断 | 错误率高的服务 |
| **异常数** | 异常请求**数量**超过阈值则熔断 | 错误次数敏感的服务 |

### 5.4 熔断配置示例

**慢调用：**
```
RT 阈值       = 500ms
统计时长      = 10000ms
最小请求数    = 10
慢调用比例    = 0.5
熔断时长      = 5s
→ 10秒内请求超10次，慢调用占比 > 0.5 时熔断
```

**异常比例：**
```
统计时长   = 1000ms
最小请求数 = 10
异常比例   = 0.4
熔断时长   = 5s
→ 1秒内请求超10次，异常占比 > 0.4 时熔断
```

---

## 六、Feign 整合 Sentinel（实现客户端保护）

### 6.1 整合三步

| 步骤 | 操作 |
|------|------|
| ① 开启支持 | `application.yml` 加 `feign.sentinel.enabled: true` |
| ② 编写降级类 | 实现 `FallbackFactory<API>` |
| ③ 配置到 FeignClient | `@FeignClient(fallbackFactory = Xxx.class)` |

### 6.2 完整代码示例

```yaml
# 开启 feign 对 sentinel 的支持
feign:
  sentinel:
    enabled: true
```

```java
// 1. 编写降级工厂类（推荐 FallbackFactory，可处理异常）
@Slf4j
public class SellerFallback implements FallbackFactory<SellerAPI> {
    @Override
    public SellerAPI create(Throwable cause) {
        return new SellerAPI() {
            @Override
            public TbSeller selectAdminByName(String userName) {
                log.error("查询商户异常", cause);
                return new TbSeller();  // 返回友好降级值
            }
        };
    }
}

// 2. 注册为 Bean
@Configuration
public class FallbackConfig {
    @Bean
    public SellerFallback sellerFallback() {
        return new SellerFallback();
    }
}

// 3. FeignClient 接口指定 fallbackFactory
@FeignClient(value = "dd-seller-service", fallbackFactory = SellerFallback.class)
public interface SellerAPI {
    @GetMapping("/seller/selectSellerByName")
    TbSeller selectAdminByName(@RequestParam String userName);
}
```

### 6.3 两种降级方式对比

| 方式 | 说明 | 推荐 |
|------|------|------|
| `FallbackClass` | 直接实现 FeignClient 接口 | ❌ 无法获取异常信息 |
| **`FallbackFactory`** | 工厂模式，可在 `create()` 中拿到 Throwable | ✅ **推荐** |

---

## 七、综合速查

### 雪崩四大解决方案口诀

```
预防  → 限流（QPS 控制，削峰填谷）
补救  → 超时 + 仓壁 + 熔断
```

### Sentinel 核心功能

```
流控（流量控制）   → 直接 / 关联 / 链路
流控效果           → 快速失败 / warm up / 排队等待
线程隔离           → 信号量（默认）/ 线程池
熔断降级           → 慢调用比例 / 异常比例 / 异常数
```

### 断路器状态切换图

```
closed ───异常超阈值───→ open ──5秒──→ half-open
  ↑                                       │
  │←─────测试成功──────────────────────────┤
  └─────测试失败─────────────→ open       │
```

### Nginx 三大场景速记

```
静态托管  → location / { root html; }
反向代理  → proxy_pass http://后端;
负载均衡  → upstream + proxy_pass http://upstream名;
```

### 负载均衡策略选型

```
轮询       → 默认，无差别分发
权重       → 服务器性能不一致时
ip_hash    → 需要保持 session（同一 IP 固定后端）
```

### Swagger 集成四步

```
① 引依赖 → springdoc-openapi-starter-webmvc-ui
② 写配置类 → OpenAPI Bean
③ yml 配置 → 启用 + 扫描包
④ 加注解  → @Tag / @Operation
```

### Feign + Sentinel 三步集成

```
① feign.sentinel.enabled: true
② 实现 FallbackFactory + 注册为 Bean
③ FeignClient 指定 fallbackFactory
```
