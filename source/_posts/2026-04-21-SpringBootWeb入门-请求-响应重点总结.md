---
title: SpringBootWeb入门-请求-响应重点总结
date: 2026-04-21 21:48:27
tags:
  - Java
  - JavaWeb
  - 后端
categories: 编程开发
cover: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80'
---



# SpringBootWeb 入门 · 请求 · 响应 · 重点总结

## 一、Spring & SpringBoot 概述

### 1.1 核心概念

| 项目 | 说明 |
|------|------|
| **Spring** | 管理和整合第三方框架的框架，提供依赖注入、事务管理、Web 开发支持等核心功能 |
| **SpringBoot** | 对 Spring 进行二次封装，**简化配置、快速开发**，最大特点：简化配置 + 起步依赖 |
| **SpringBootWeb** | SpringBoot 封装后专门用于前后端数据交互的 Web 框架，内置 Tomcat 服务器 |

### 1.2 起步依赖

| 项目 | 说明 |
|------|------|
| **定义** | 完成某个功能所需最少依赖的集合，SpringBoot 将其整合为一个新依赖 |
| **命名特征** | 坐标名称中一定包含 **`starter`** 单词，如 `spring-boot-starter-web` |
| **好处** | 引入一个起步依赖，自动传递所有相关依赖，且**版本由父工程统一管理**，无需指定 version |

| 常用起步依赖 | 说明 |
|------------|------|
| `spring-boot-starter-web` | Web 开发（含内嵌 Tomcat + SpringMVC） |
| `spring-boot-starter-test` | 单元测试（含 JUnit） |
| `mybatis-spring-boot-starter` | MyBatis 持久层开发 |

## 二、SpringBootWeb 快速入门

### 2.1 入门三步骤

| 步骤 | 操作 |
|------|------|
| ① 创建 SpringBoot 工程 | IDEA → 利用骨架模板创建，勾选 `Spring Web` 依赖 |
| ② 编写 Controller | 在 `controller` 包下创建类，添加注解和方法 |
| ③ 启动运行 | 运行引导类的 `main` 方法，访问 `http://localhost:8080/路径` |

### 2.2 最简单的 HelloWorld

```java
@RestController
public class HelloController {

    @RequestMapping("/hello")
    public String hello() {
        System.out.println("Hello World ~");
        return "Hello World ~";
    }
}
```

### 2.3 访问流程原理

```
浏览器 → http://localhost:8080/hello
      ↓ (HTTP 请求)
  内嵌 Tomcat（端口 8080）
      ↓ 解析请求，转交给 DispatcherServlet（核心控制器）
  DispatcherServlet
      ↓ 根据路径规则转发
  @RequestMapping("/hello") 的 Controller 方法
      ↓ 处理后返回结果
  DispatcherServlet → 响应给浏览器
```

> Tomcat 本身不识别自定义 Controller，通过内置的 **`DispatcherServlet`**（核心 Servlet）来识别和转发请求。

## 三、核心注解速查（⭐ 重点）

### 3.1 类级别注解

| 注解 | 说明 |
|------|------|
| **`@RestController`** | 组合注解 = `@Controller` + `@ResponseBody`，标识 REST 风格 Controller，所有方法返回值自动转 JSON |
| `@Controller` | 标识这是处理前端请求的控制器类 |
| `@SpringBootApplication` | 引导类核心注解，启动 SpringBoot 应用 |

> **`@RestController` = `@Controller` + `@ResponseBody`**，加了 `@RestController` 就不需要再加 `@ResponseBody`。

### 3.2 方法/参数级别注解

| 注解 | 位置 | 作用 |
|------|------|------|
| `@RequestMapping("路径")` | 方法/类 | 映射请求路径，默认支持所有 HTTP 方法（GET/POST/PUT/DELETE） |
| `@GetMapping("路径")` | 方法 | 等价于 `@RequestMapping(method=GET, path="路径")` |
| `@PostMapping("路径")` | 方法 | 等价于 `@RequestMapping(method=POST, path="路径")` |
| `@PutMapping("路径")` | 方法 | 等价于 `@RequestMapping(method=PUT, path="路径")` |
| `@DeleteMapping("路径")` | 方法 | 等价于 `@RequestMapping(method=DELETE, path="路径")` |
| `@ResponseBody` | 方法/类 | 将返回值直接响应给浏览器（非字符串自动转 JSON） |
| **`@RequestParam`** | 参数 | ① 指定前端参数名（`name/value`）；② 设置是否必传（`required`）；③ 设置默认值（`defaultValue`） |
| **`@RequestBody`** | 参数 | 接收前端传递的 **JSON 格式**参数，映射到实体类 |
| **`@PathVariable`** | 参数 | 获取 URL 路径中的**路径参数**（配合路径中的 `{变量名}` 使用） |
| **`@DateTimeFormat`** | 参数/属性 | 指定日期参数格式，`pattern = "yyyy-MM-dd HH:mm:ss"` |

## 四、接收请求参数（六种方式）

### 4.1 简单参数

> **规则**：请求参数名与方法形参名**保持一致**，SpringBoot 自动绑定并完成类型转换。

```java
// GET: /simpleParam?name=Tom&age=18
@RequestMapping("/simpleParam")
public String simpleParam(String name, Integer age) {
    System.out.println(name + " : " + age);
    return "OK";
}
```

**参数名不一致时**，用 `@RequestParam` 指定前端参数名：

```java
// 请求参数名是 name，形参名是 username
@RequestMapping("/simpleParam")
public String simpleParam(@RequestParam("name") String username,
                          @RequestParam(value = "age", required = false, defaultValue = "18") Integer age) {
    System.out.println(username + " : " + age);
    return "OK";
}
```

> `@RequestParam` 的 `required` 默认为 `true`（必传），不传会报 400 错误。

### 4.2 实体（对象）参数

> **规则**：请求参数名与实体类的**属性名相同**，SpringBoot 自动封装到对象中。

```java
// 简单实体：GET /simplePojo?name=Tom&age=18
@RequestMapping("/simplePojo")
public String simplePojo(User user) {
    System.out.println(user);
    return "OK";
}

// 嵌套实体：GET /complexPojo?name=Tom&age=18&address.province=广东&address.city=深圳
@RequestMapping("/complexPojo")
public String complexPojo(User user) {
    System.out.println(user);  // User{name='Tom', age=18, address=Address{province='广东', city='深圳'}}
    return "OK";
}
```

### 4.3 数组 & 集合参数

> 适用场景：表单复选框（多选），前端多次传同一参数名。

| 接收方式 | 代码 | 说明 |
|----------|------|------|
| 数组 | `String[] hobby` | 直接定义数组形参，参数名一致即可 |
| 集合 | `@RequestParam List<String> hobby` | 必须加 `@RequestParam`，否则无法封装 |
| Map | `@RequestParam Map<String,String> map` | 接收所有键值对 |

```java
// GET /arrayParam?hobby=game&hobby=java
@RequestMapping("/arrayParam")
public String arrayParam(String[] hobby) {
    System.out.println(Arrays.toString(hobby));  // [game, java]
    return "OK";
}

// GET /listParam?hobby=game&hobby=java
@RequestMapping("/listParam")
public String listParam(@RequestParam List<String> hobby) {
    System.out.println(hobby);  // [game, java]
    return "OK";
}
```

### 4.4 日期参数

> 使用 `@DateTimeFormat(pattern = "格式字符串")` 指定日期格式。

```java
// GET /dateParam?updateTime=2023-01-01 12:30:00
@RequestMapping("/dateParam")
public String dateParam(@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") LocalDateTime updateTime) {
    System.out.println(updateTime);
    return "OK";
}
```

### 4.5 JSON 参数

> **规则**：JSON 的 key 与实体类属性名对应；必须加 `@RequestBody`；请求方式必须是 **POST/PUT**。

```java
// POST /jsonParam，请求体：{"name":"Tom","age":18,"address":{"province":"广东","city":"深圳"}}
@RequestMapping("/jsonParam")
public String jsonParam(@RequestBody User user) {
    System.out.println(user);
    return "OK";
}
```

### 4.6 路径参数

> URL 中直接传参，后端用 `{变量名}` 占位，用 `@PathVariable` 接收。

```java
// GET /path/1
@RequestMapping("/path/{id}")
public String pathParam(@PathVariable Integer id) {
    System.out.println(id);
    return "OK";
}

// GET /path/1/Tom（多个路径参数）
@RequestMapping("/path/{id}/{name}")
public String pathParam2(@PathVariable Integer id, @PathVariable String name) {
    System.out.println(id + " : " + name);
    return "OK";
}
```

### 4.7 六种参数接收方式汇总

| 参数类型 | 前端传参方式 | 后端接收方式 | 关键注解 |
|----------|------------|------------|---------|
| **简单参数** | `?name=Tom&age=18` | 同名形参直接接收 | `@RequestParam`（名不一致时） |
| **实体参数** | `?name=Tom&age=18` | 实体类形参（属性名一致） | — |
| **嵌套实体** | `?address.city=深圳` | 实体类形参（属性名.属性名） | — |
| **数组参数** | `?hobby=game&hobby=java` | `String[] hobby` | — |
| **集合参数** | `?hobby=game&hobby=java` | `List<String> hobby` | **`@RequestParam`** |
| **日期参数** | `?date=2023-01-01 12:00:00` | `LocalDateTime date` | **`@DateTimeFormat`** |
| **JSON 参数** | 请求体 `{...}` (POST) | 实体类形参 | **`@RequestBody`** |
| **路径参数** | `/user/1` | `@PathVariable Integer id` | **`@PathVariable`** |

---

## 五、响应

### 5.1 @ResponseBody 作用

| 项目 | 说明 |
|------|------|
| **作用** | 将 Controller 方法的返回值**直接响应**给浏览器 |
| **自动转 JSON** | 返回值是实体类或集合时，**自动转换为 JSON** 格式响应 |
| **位置** | 方法上或类上均可 |
| **@RestController** | = `@Controller` + `@ResponseBody`，类上加了就无需每个方法单独加 |

### 5.2 统一响应结果（⭐ 企业规范）

> **目的**：前端只需按一种格式解析响应，开发更规范、维护更方便。

**统一结果类 Result：**

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Result {
    private Integer code; // 响应状态码：1=成功，0=失败
    private String msg;   // 提示信息
    private Object data;  // 响应数据

    // 增删改成功（无返回数据）
    public static Result success() {
        return new Result(1, "success", null);
    }

    // 查询成功（有返回数据）
    public static Result success(Object data) {
        return new Result(1, "success", data);
    }

    // 失败响应
    public static Result error(String msg) {
        return new Result(0, msg, null);
    }
}
```

**Controller 使用统一响应：**

```java
@RestController
public class EmpController {

    @GetMapping("/emps")
    public Result list() {
        List<Emp> empList = empService.list();
        return Result.success(empList);  // {"code":1,"msg":"success","data":[...]}
    }

    @DeleteMapping("/emps/{id}")
    public Result delete(@PathVariable Integer id) {
        empService.delete(id);
        return Result.success();          // {"code":1,"msg":"success","data":null}
    }

    @PostMapping("/emps")
    public Result save(@RequestBody Emp emp) {
        empService.save(emp);
        return Result.success();
    }
}
```

## 六、REST 风格（RESTful）

### 6.1 概念

> REST（Representational State Transfer）：一种软件架构**风格**，用于设计网络应用的 API，通过 HTTP 方法来表达操作语义。

### 6.2 HTTP 方法与操作映射（⭐ 规范）

| HTTP 方法 | 建议操作 | 示例路径 | SpringBoot 注解 |
|-----------|---------|---------|----------------|
| `GET` | **查询**数据 | `GET /emps` | `@GetMapping` |
| `POST` | **新增**数据 | `POST /emps` | `@PostMapping` |
| `PUT` | **修改**数据 | `PUT /emps` | `@PutMapping` |
| `DELETE` | **删除**数据 | `DELETE /emps/{id}` | `@DeleteMapping` |

### 6.3 注解等价写法

```java
// 传统写法
@RequestMapping(method = RequestMethod.GET, path = "/emps")

// REST 简写（推荐）
@GetMapping("/emps")
```

---

## 七、响应状态码速查

| 状态码 | 含义 | 常见原因 |
|--------|------|---------|
| `200` | ✅ 请求成功 | 一切正常 |
| `302` | 重定向 | 需要跳转到新地址 |
| `304` | 使用缓存 | 资源未变化，命中缓存 |
| **`400`** | ❌ 请求参数错误 | 参数格式不对、封装失败 |
| **`404`** | ❌ 路径不存在 | 请求路径写错了 |
| `405` | ❌ 请求方式不对 | 路径对但 GET/POST 方法不匹配 |
| `406` | ❌ 参数封装失败 | 实体类缺少 getter/setter 方法 |
| **`500`** | ❌ 服务器内部错误 | 后端代码抛出异常 |

## 八、综合速查

### 请求参数接收选型

```
普通参数名一致？   → 直接定义同名形参
参数名不一致？     → @RequestParam("前端参数名")
参数很多？         → 封装成实体类（属性名与参数名对应）
多选框（多值）？   → String[] 数组 或 @RequestParam List<String>
日期格式？         → @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
JSON 请求体？      → @RequestBody 实体类（POST/PUT 方式）
URL 路径传参？     → /path/{id} + @PathVariable
```

### Controller 标准写法模板

```java
@RestController            // 标识 REST 风格 Controller
@RequestMapping("/emps")   // 类上统一前缀（可选）
public class EmpController {

    @Autowired
    private EmpService empService;

    @GetMapping            // GET /emps → 查询所有
    public Result list() {
        return Result.success(empService.list());
    }

    @GetMapping("/{id}")   // GET /emps/{id} → 根据 ID 查询
    public Result getById(@PathVariable Integer id) {
        return Result.success(empService.getById(id));
    }

    @PostMapping           // POST /emps → 新增（JSON 请求体）
    public Result save(@RequestBody Emp emp) {
        empService.save(emp);
        return Result.success();
    }

    @PutMapping            // PUT /emps → 修改（JSON 请求体）
    public Result update(@RequestBody Emp emp) {
        empService.update(emp);
        return Result.success();
    }

    @DeleteMapping("/{id}") // DELETE /emps/{id} → 删除
    public Result delete(@PathVariable Integer id) {
        empService.delete(id);
        return Result.success();
    }
}
```

### 统一结果 Result 字段含义

| 字段 | 类型 | 说明 |
|------|------|------|
| `code` | Integer | `1` = 成功；`0` = 失败 |
| `msg` | String | 提示信息（如 `"success"` 或错误原因） |
| `data` | Object | 实际响应数据（增删改为 null，查询为具体数据） |
