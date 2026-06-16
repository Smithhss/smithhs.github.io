---
title: SpringBoot&Mybatis综合案例
date: 2026-04-25 14:49:02
tags:
  - Java
  - JavaWeb
  - 后端
categories: 编程开发
cover: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80'
---



# SpringBootWeb案例

前面我们已经讲解了Web前端开发的基础知识，也讲解了Web后端开发的基础(HTTP协议、请求响应)，并且也讲解了数据库MySQL，以及通过Mybatis框架如何来完成数据库的基本操作。 那接下来，我们就通过一个案例，来将前端开发、后端开发、数据库整合起来。 

而这个案例呢，就是我们前面提到的Tlias智能学习辅助系统。

![image-20220904103734643](assets/image-20220904103734643.png) 

在这个案例中，前端开发人员已经将前端工程开发完毕了。 我们需要做的，就是参考接口文档完成后端功能的开发，然后结合前端工程进行联调测试即可。



那今天我们的主要内容如下：

- 准备工作
- 部门管理
- 员工管理

## 1. 准备工作

### 1.1 需求

**1). 部门管理**

<img src="assets/image-20220904104826854.png" alt="image-20220904104826854" style="zoom:67%;" /> 

部门管理功能开发，包括：

- 查询部门列表
- 删除部门
- 新增部门
- 修改部门





**2). 员工管理**

<img src="assets/image-20220904105021551.png" alt="image-20220904105021551" style="zoom:67%;" /> 

员工管理功能开发，包括：

- 查询员工列表(分页、条件)
- 删除员工
- 新增员工
- 修改员工



### 1.2 环境搭建

**1). 创建一个SpringBoot工程，选择引入对应的起步依赖（web、mybatis、mysql驱动、lombok）**

![image-20220904105617722](assets/image-20220904105617722.png) 



并在创建好的项目中，准备好包结构：

![image-20220904111915042](assets/image-20220904111915042.png) 





**2). 准备数据库表，及对应的实体类**

- SQL（导入MySQL数据库中）

```sql
-- 部门管理
create table dept(
    id int unsigned primary key auto_increment comment '主键ID',
    name varchar(10) not null unique comment '部门名称',
    create_time datetime not null comment '创建时间',
    update_time datetime not null comment '修改时间'
) comment '部门表';

insert into dept (id, name, create_time, update_time) values(1,'学工部',now(),now()),(2,'教研部',now(),now()),(3,'咨询部',now(),now()), (4,'就业部',now(),now()),(5,'人事部',now(),now());



-- 员工管理(带约束)
create table emp (
  id int unsigned primary key auto_increment comment 'ID',
  username varchar(20) not null unique comment '用户名',
  password varchar(32) default '123456' comment '密码',
  name varchar(10) not null comment '姓名',
  gender tinyint unsigned not null comment '性别, 说明: 1 男, 2 女',
  image varchar(300) comment '图像',
  job tinyint unsigned comment '职位, 说明: 1 班主任,2 讲师, 3 学工主管, 4 教研主管, 5 咨询师',
  entrydate date comment '入职时间',
  dept_id int unsigned comment '部门ID',
  create_time datetime not null comment '创建时间',
  update_time datetime not null comment '修改时间'
) comment '员工表';

INSERT INTO emp
	(id, username, password, name, gender, image, job, entrydate,dept_id, create_time, update_time) VALUES
	(1,'jinyong','123456','金庸',1,'1.jpg',4,'2000-01-01',2,now(),now()),
	(2,'zhangwuji','123456','张无忌',1,'2.jpg',2,'2015-01-01',2,now(),now()),
	(3,'yangxiao','123456','杨逍',1,'3.jpg',2,'2008-05-01',2,now(),now()),
	(4,'weiyixiao','123456','韦一笑',1,'4.jpg',2,'2007-01-01',2,now(),now()),
	(5,'changyuchun','123456','常遇春',1,'5.jpg',2,'2012-12-05',2,now(),now()),
	(6,'xiaozhao','123456','小昭',2,'6.jpg',3,'2013-09-05',1,now(),now()),
	(7,'jixiaofu','123456','纪晓芙',2,'7.jpg',1,'2005-08-01',1,now(),now()),
	(8,'zhouzhiruo','123456','周芷若',2,'8.jpg',1,'2014-11-09',1,now(),now()),
	(9,'dingminjun','123456','丁敏君',2,'9.jpg',1,'2011-03-11',1,now(),now()),
	(10,'zhaomin','123456','赵敏',2,'10.jpg',1,'2013-09-05',1,now(),now()),
	(11,'luzhangke','123456','鹿杖客',1,'11.jpg',5,'2007-02-01',3,now(),now()),
	(12,'hebiweng','123456','鹤笔翁',1,'12.jpg',5,'2008-08-18',3,now(),now()),
	(13,'fangdongbai','123456','方东白',1,'13.jpg',5,'2012-11-01',3,now(),now()),
	(14,'zhangsanfeng','123456','张三丰',1,'14.jpg',2,'2002-08-01',2,now(),now()),
	(15,'yulianzhou','123456','俞莲舟',1,'15.jpg',2,'2011-05-01',2,now(),now()),
	(16,'songyuanqiao','123456','宋远桥',1,'16.jpg',2,'2007-01-01',2,now(),now()),
	(17,'chenyouliang','123456','陈友谅',1,'17.jpg',NULL,'2015-03-21',NULL,now(),now());
```



- 实体类 （放在项目的com.itxg.pojo包下）

```java
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Dept {
    private Integer id;
    private String name;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}
```

```java
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Emp {
    private Integer id;
    private String username;
    private String password;
    private String name;
    private Short gender;
    private String image;
    private Short job;
    private LocalDate entrydate;
    private Integer deptId;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
}
```



**3). 在application.properties中引入数据库连接信息(复制过来即可)**

```properties
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/tlias
spring.datasource.username=root
spring.datasource.password=1234

#开启mybatis的日志输出
mybatis.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl
#开启数据库表字段 到 实体类属性的驼峰映射
mybatis.configuration.map-underscore-to-camel-case=true
```



**4). 准备对应的Mapper接口、Service、Controller的基础代码**

①. DeptMapper

```java
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DeptMapper {
	
}
```



②. EmpMapper

```java
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface EmpMapper {

}
```



③. DeptService / DeptServiceImpl

```java
public interface DeptService {
	
}
```

```java
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class DeptServiceImpl implements DeptService {
	
}
```

④. EmpService / EmpServiceImpl

```java
public interface EmpService {
	
}
```

```java
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class EmpServiceImpl implements EmpService {
	
}
```



⑤. DeptController

```java
import org.springframework.web.bind.annotation.*;

@RestController
public class DeptController {
}
```



⑥. EmpController

```java
import org.springframework.web.bind.annotation.*;

@RestController
public class EmpController {
}
```



最终的结构如下:

<img src="assets/image-20220904112741014.png" alt="image-20220904112741014" style="zoom:80%;" /> 



### 1.3 开发规范

#### 1.3.1 REST风格

当前案例，我们基于当前最为主流的前后端分离模式进行开发。 

![image-20220904113014050](assets/image-20220904113014050.png) 

在前后端分离的开发模式中，前后端开发人员都需要根据提前定义好的接口文档，来进行前后端功能的开发，而在前后端进行交互的时候，我们需要基于当前主流的REST风格的API接口进行交互。



那么什么是REST风格呢?

- REST（Representational State Transfer），表现形式状态转换，它是一种软件架构风格。

原来我们定义URL风格如下：

![image-20220904121037476](assets/image-20220904121037476.png) 

原始的传统URL呢，定义比较复杂，而且将资源的访问行为对外暴露出来了。





如果是基于REST风格：

![image-20220904121101103](assets/image-20220904121101103.png) 

在REST风格的URL中，我们通过四种请求方式，来操作数据的增删改查。

- GET ： 查询
- POST ：新增
- PUT ：修改
- DELETE ：删除

我们看到如果是基于REST风格，定义URL，URL将会更加简洁、更加规范、更加优雅。

> 注意事项：
>
> 	-	上述行为是风格，是约定方式，约定不是规范，可以打破，所以称为 REST风格，而不是REST规范。
> 	-	描述模块的功能通常使用复数，也就是加s的格式来描述，表示此类资源，而非单个资源。如：users、emps、books…

添加和新增不需要

#### 1.3.2 统一响应结果

前后端工程在进行交互时，使用统一响应结果 Result。

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Result {
    private Integer code;//响应码，1 代表成功; 0 代表失败
    private String msg;  //响应码 描述字符串
    private Object data; //返回的数据

    //增删改 成功响应
    public static Result success(){
        return new Result(1,"success",null);
    }
    //查询 成功响应
    public static Result success(Object data){
        return new Result(1,"success",data);
    }
    //失败响应
    public static Result error(String msg){
        return new Result(0,msg,null);
    }
}
```

#### 1.3.3 开发流程

我们在进行功能开发时，都是根据如下流程进行：

![image-20220904125004138](assets/image-20220904125004138.png) 



- 查询页面原型明确需求
- 阅读接口文档（已提供）
- 思路分析
- 接口开发：就是开发后台的业务功能，一个业务功能，我们称为一个接口。
- 接口测试：功能开发完毕后，先通过Postman进行接口测试，测试通过后，和前端进行联调测试。

- 前后端联调测试：和前端开发人员开发好的前端工程一起测试。



## 2. 部门管理

### 2.1 查询部门

#### 2.1.1 需求

<img src="assets/image-20220904125539751.png" alt="image-20220904125539751" style="zoom:67%;" /> 

通过页面原型以及需求描述，我们可以看到，部门查询，是不需要考虑分页操作的。



#### 2.1.2 开发

然后我们就可以查看资料中提供的，查询部门列表的接口文档。

> 请求路径：/depts
>
> 请求方式：GET
>
> 接口描述：该接口用于部门列表数据查询

然后来开发对应的功能：

![image-20220904125901117](assets/image-20220904125901117.png) 





1). DeptMapper

```java
@Mapper
public interface DeptMapper {
    //查询全部部门数据
    @Select("select * from dept")
    List<Dept> list();
}    
```



2). DeptService / DeptServiceImpl

```java
public interface DeptService {
    /**
     * 查询所有的部门数据
     * @return
     */
    List<Dept> list();
	
}
```



```java
@Slf4j
@Service
public class DeptServiceImpl implements DeptService {
    @Autowired
    private DeptMapper deptMapper;
    
    @Override
    public List<Dept> list() {
        List<Dept> deptList = deptMapper.list();
        return deptList;
    }
}    
```



3). DeptController

```java
@RestController
public class DeptController {
    @Autowired
    private DeptService deptService;

    @Log
    @GetMapping("/depts")
    public Result list(){
        List<Dept> deptList = deptService.list();
        return Result.success(deptList);
    }
}
```



#### 2.1.3 测试

功能开发完成后，我们就可以启动项目，然后打开postman。发起GET请求，访问 ：http://localhost:8080/depts

<img src="assets/image-20220904130315247.png" alt="image-20220904130315247" style="zoom: 67%;" /> 

### 2.2 删除部门

#### 2.2.1 需求

<img src="assets/image-20220904132440220.png" alt="image-20220904132440220" style="zoom:67%;" /> 

点击部门列表后面操作栏的 "删除" 按钮，就可以删除该部门信息。 此时，前端只需要给服务端传递一个ID参数就可以了。 我们从接口文档中也可以看得出来。



#### 2.2.2 开发

然后我们就可以查看资料中提供的，删除部门的接口文档。

> 请求路径：/depts/{id}
>
> 请求方式：DELETE
>
> 接口描述：该接口用于根据ID删除部门数据

然后来开发对应的功能：

![image-20220904145456652](assets/image-20220904145456652.png) 



1). DeptMapper

```java
//删除部门
@Delete("delete from dept where id = #{id}")
void delete(Integer id);
```



2). DeptService / DeptServiceImpl

DeptService

```java
/**
* 删除部门
* @param id
*/
void delete(Integer id);
```

DeptServiceImpl

```java
@Override
public void delete(Integer id) {
    //1. 删除部门
    deptMapper.delete(id);
}
```



3). DeptController

```java
@DeleteMapping("/{id}")
public Result delete(@PathVariable Integer id)  {
    deptService.delete(id);
    return Result.success();
}
```





#### 2.2.3 测试

功能开发完成后，我们就可以启动项目，然后打开postman。发起DELETE请求，访问 ：http://localhost:8080/depts/5

<img src="assets/image-20220904150239112.png" alt="image-20220904150239112" style="zoom: 67%;" /> 

### 2.3 新增部门

#### 2.3.1 需求

<img src="assets/image-20220904150427982.png" alt="image-20220904150427982" style="zoom: 67%;" /> 

点击 "新增部门" 按钮，弹出新增部门对话框，输入部门名称，点击 "保存" ，将部门信息保存到数据库。



#### 2.3.2 开发

然后我们就可以查看资料中提供的，新增部门的接口文档。

> 请求路径：/depts
>
> 请求方式：POST
>
> 接口描述：该接口用于添加部门数据

然后来开发对应的功能：

![image-20220904150727559](assets/image-20220904150727559.png) 



1). DeptMapper

```java
//新增部门
@Insert("insert into dept(name, create_time, update_time) values (#{name},#{createTime},#{updateTime})")
void save(Dept dept);
```



2). DeptService / DeptServiceImpl

DeptService：

```java
/**
* 新增部门
* @param dept
*/
void save(Dept dept);
```

DeptServiceImpl：

```java
@Override
public void save(Dept dept) {
    dept.setCreateTime(LocalDateTime.now());
    dept.setUpdateTime(LocalDateTime.now());
    deptMapper.save(dept);
}
```

`BeanUtils.copyProperties(deptDto, dept);` 是 Spring 框架提供的一个工具方法，作用是把 **源对象** 的属性值复制到 **目标对象** 的对应属性上。

```java
Dept dept = new Dept();                        // 1. 新建空的实体对象
BeanUtils.copyProperties(deptDto, dept);       // 2. 把 DTO 的值拷到实体
dept.setCreateTime(new Date());                // 3. 补充 DTO 没有的字段
dept.setUpdateTime(new Date());
int i = deptMapper.insertDept(dept);           // 4. 插入数据库
```

```
BeanUtils.copyProperties(source, target);
```

- **`source`**：数据来源对象，这里是 `deptDto`（前端的参数 DTO）
- **`target`**：目标对象，这里是 `dept`（即将插入数据库的实体）

**需要注意的细节**

1. **属性名必须一致**（区分大小写），否则不会拷贝。
2. **类型要兼容**（比如 `String` 到 `String`，`Integer` 到 `int` 等），不匹配的属性会被跳过且不报错。
3. **它是浅拷贝**：如果属性是引用类型（如 `List`），只拷贝引用，两个对象会指向同一个集合，修改一个会相互影响。
4. **BeanUtils 来源**：这里用的是 `org.springframework.beans.BeanUtils`（Spring 的），它比 Apache 的 `BeanUtils` 性能稍好（参数顺序也不同，Spring 是 `(source, target)`）。

3). DeptController

```java
@PostMapping
public Result save(@RequestBody Dept dept){
    deptService.save(dept);
    return Result.success();
}
```



#### 2.3.3 测试

功能开发完成后，我们就可以启动项目，然后打开postman。发起POST请求，访问 ：http://localhost:8080/depts，然后在请求体中传递json格式的参数。

![image-20220904151349369](assets/image-20220904151349369.png) 



### 2.4 请求路径

<img src="assets/image-20220904151659403.png" alt="image-20220904151659403" style="zoom:67%;" /> 

前端我们开发的部门信息的列表查询、删除、新增功能接口，我们会看到，在方法上面加的注解中指定的请求路径中 ，都包含了 /depts ，重复了。我们可以考虑将其抽取到类上，可以在类上加一个注解@RequestMapping，然后声明属性 value，来指定请求路径 /depts。像下面这样：

<img src="assets/image-20220904152000563.png" alt="image-20220904152000563" style="zoom: 67%;" /> 



那如果类上添加了@RequestMapping注解，在方法上也添加了@RequestMapping注解(或者其衍生注解 @GetMapping、@PostMapping、@DeleteMapping、@PutMapping)，此时在进行请求访问时，完整的请求路径应该是 ==类上的@RequestMapping的value属性 + 方法上的@RequestMapping的value属性。==



## 3. 员工管理

### 3.1 分页查询

#### 3.1.1 需求

我们之前做的 `查询所有` 功能中将数据库中所有的数据查询出来并展示到页面上，试想如果数据库中的数据有很多（假设有十几万条）的时候，将数据全部展示出来肯定不现实，那如何解决这个问题呢？**几乎所有的网站都会使用分页解决这个问题。每次只展示一页的数据**，比如一页展示10条数据，如果还想看其他的数据，可以通过点击页码进行查询。

意思是每次打开网页只显示第一页,其他的页面需要查询

<img src="assets/image-20220904152702147.png" alt="image-20220904152702147" style="zoom:67%;" /> 

通过提供的页面原型及需求可以看出，由于员工数据比较多，在展示的时候，需要进行分页展示。

<img src="assets/image-20220904152808452.png" alt="image-20220904152808452" style="zoom:80%;" /> 





#### 3.1.2 分析

##### 3.1.2.1 介绍

分页查询也是从数据库进行查询的，所以我们要分页对应的SQL语句应该怎么写。分页查询使用 `LIMIT` 关键字，格式为：==`LIMIT 开始索引 每页显示的条数`==。

以后前端页面在发送请求携带参数时，它并不明确开始索引是什么，但是它知道查询第几页。

所以 `开始索引` 需要在后端进行计算，计算的公式是 ：==开始索引 = （当前页码 -  1）*  每页显示条数==



比如查询第1页的数据的 SQL 语句是：

```
select * from emp  limit 0,10;
```

查询第2页的数据的 SQL 语句是：

```
select * from emp  limit 10,10;
```

查询第3页的数据的 SQL 语句是：

```
select * from emp  limit 20,10;
```



##### 3.1.2.2 参数传递

分页查询功能时候比较复杂的，所以我们要先分析清楚以下两个问题：

**前端在请求服务端时，传递的参数：**

- 当前页码 page

- 每页展示记录数 pageSize

  

**后端需要响应什么数据给前端: **

上面的页面原型是分页查询页面展示的效果，从上面我们可以看出需要响应以下两份数据

* 当前页需要展示的数据。**我们在后端一般会存储到 List 集合中**
* 总共记录数。在上图页面中需要展示总的记录数，所以这部分数据也需要。总的页码 elementUI 的分页组件会自动计算，我们不需要关心。

而这两部分需要封装到 PageBean 对象中，并将该对象转换为 json 格式的数据响应回给浏览器



![image-20220904153814876](assets/image-20220904153814876.png) 



##### 3.1.2.3 PageBean定义

```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PageBean {
    private Long total; //总记录数
    private List rows; //当前页数据列表
}
```

#### 3.1.3 开发

后端需要响应`总记录数` 和 `当前页的数据` 两部分数据给前端，所以在 `EmpMapper`  接口中需要定义两个方法：

* page() ：查询当前页的数据的方法
* count() ：查询总记录的方法

整体流程如下：

![image-20220904153940924](assets/image-20220904153940924.png) 



1). EmpMapper

```java
@RestController
@RequestMapping("/emps")
public class EmpController {

    @Autowired
    private EmpService empService;

    @GetMapping
    public Result empList(EmpPageQueryDto dto){
        PageBean<Emp> pageBean = empService.selectPageByQueryDto(dto);
        return Result.success(pageBean);
    }
}
```



2). EmpService / EmpServiceImpl

EmpService

```java
public interface EmpService {
    /**
     * 条件分页查询
     * @param page 页码
     * @param pageSize 每页展示记录数
     * @return
     */
    PageBean page(Integer page, Integer pageSize);
}
```



EmpServiceImpl

```java
@Service
public class EmpServiceImpl implements EmpService {
    @Autowired
    private EmpMapper empMapper;

    @Override
    public PageBean page(Integer page, Integer pageSize, String name, Short gender, LocalDate begin, LocalDate end) {
        Long count = empMapper.count(); //获取总记录数
        Integer start = (page - 1) * pageSize; //计算起始索引 , 公式: (页码-1)*页大小
        List<Emp> empList = empMapper.page(start, pageSize);

        PageBean pageBean = new PageBean(count , empList); //封装PageBean
        return pageBean;
    }
}    
```



3). EmpController

```java
@RestController
@RequestMapping("/emps")
public class EmpController {

    @Autowired
    private EmpService empService;

    //条件分页查询
    @GetMapping
    public Result page(@RequestParam(defaultValue = "1") Integer page ,
                       @RequestParam(defaultValue = "10") Integer pageSize){
        PageBean pageBean = empService.page(page, pageSize, name, gender, begin, end);
        return Result.success(pageBean);
    }
}    
```



> @RequestParam ：
>
> ​		可以通过该注解的defaultValue 属性来设置参数的默认值。





#### 3.1.4 测试

功能开发完成后，我们就可以启动项目，然后打开postman。发起GET请求，访问 ：http://localhost:8080/emps?page=1&pageSize=5

![image-20220904154751275](assets/image-20220904154751275.png) 





#### 3.1.5 思考

我们通过上述方式已经实现了分页查询的需求，在数据库访问层 Mapper 接口中，我们编写两个方法：

- 获取总记录数
- 获取当前页的结果列表

<img src="assets/image-20220904155256800.png" alt="image-20220904155256800" style="zoom:67%;" /> 

如果我们通过这种方式来实现，也就意味着，我们所有的业务模块，只要涉及到分页，都需要指定上述的操作，步骤是固定的，而且代码比较繁琐。



由于步骤是固定的，所以在Mybatis框架中，已经有组织将其封装为了一个简单易用的插件。从而来大大简化分页的操作。





### 3.2 分页插件

#### 3.2.1 介绍

- 官网：https://pagehelper.github.io/

- PageHelper 是Mybatis的一款功能强大、方便易用的分页插件，支持任何形式的单标、多表的分页查询。

![image-20220904155552055](assets/image-20220904155552055.png) 



如果使用了PageHelper分页插件进行分页，那我们是无需再Mapper这层来手动分页的。 Mapper这一层，我们进行正常的列表查询即可。我们需要在Service层中，调用Mapper的方法之前设置分页参数，在调用Mapper方法执行查询之后，解析分页结果，并将结果封装到PageBean对象中，返回。

流程如下：

![image-20220904160130305](assets/image-20220904160130305.png) 





接下来呢，我们就可以将上面手动实现的分页代码注释掉。 通过PageHelper分页插件，来实现分页操作。

#### 3.2.2 分页实现

1). pom.xml 引入依赖

```xml
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper-spring-boot-starter</artifactId>
    <version>1.4.2</version>
</dependency>
```



2). EmpMapper

```java
@Mapper
public interface EmpMapper {


    long selectCountByQueryDto(EmpPageQueryDto dto);

    List<Emp> selectPageByQueryDto(EmpPageQueryDto dto);

    List<Emp> selectPageByQueryDtoNoLimit(EmpPageQueryDto dto);

    int deleteByIds(@Param("ids") Integer[] ids);
}
```



3). EmpServiceImpl

```java

@Service
@Primary
public class EmpServiceImpl2 implements EmpService {

    @Autowired
    private EmpMapper empMapper;

    @Override
    public PageBean<Emp> selectPageByQueryDto(EmpPageQueryDto dto) {
        /*
            1. 直接给 分页插件设置分页信息
            2: 直接调用 mapper 层的多条件查询的方法(sql不要带分页,也不需要我们自己查询数量)
            3: 把返回的结果,封装成一个 PageInfo ,再获取具体信息(或直接强制转成  Page 类型,获取信息)
            4: 封装成 PageBean并返回
         */
        PageHelper.startPage(dto.getPage(), dto.getPageSize());
        //2: 直接调用 mapper 层的多条件查询的方法(sql不要带分页,也不需要我们自己查询数量)
        List<Emp> list = empMapper.selectPageByQueryDtoNoLimit(dto);
        //3: 把返回的结果,封装成一个 PageInfo ,再获取具体信息(或直接强制转成  Page 类型,获取信息)
        PageInfo<Emp> pageInfo = new PageInfo<>(list);
        //Page<Emp> pageInfo = (Page<Emp>) list; // 了解
        long total = pageInfo.getTotal();
        List<Emp> list1 = pageInfo.getList();
        return new PageBean<>(total, list1);
    }

    @Override
    public int deleteByIds(Integer[] ids) {
        return empMapper.deleteByIds(ids);
    }
}
```



#### 3.2.3 测试

功能开发完成后，我们就可以启动项目，然后打开postman。发起GET请求，访问 ：http://localhost:8080/emps?page=1&pageSize=5

![image-20220904154751275](assets/image-20220904154751275.png) 





### 3.3 分页查询(条件)

#### 3.3.1 需求

<img src="assets/image-20220904160711148.png" alt="image-20220904160711148" style="zoom:67%;" /> 

通过员工管理的页面原型我们可以看到，员工列表页面的查询，不仅仅需要考虑分页，还需要考虑查询条件。 分页查询我们已经实现了，接下来，我们需要考虑在分页查询的基础上，再加上查询条件。

我们看到页面原型及需求中描述，搜索栏的搜索条件有三个，分别是：

- 姓名：模糊匹配
- 性别：精确匹配
- 入职日期：范围匹配

而且上述的三个条件，都是可以传递，也可以不传递的，也就是动态的。 想到这儿，大家马上就想起来了，我们前面在Mybatis中讲解的动态SQL 。





#### 3.3.2 开发

然后我们就可以查看资料中提供的，条件分页查询员工的接口文档。

> 请求路径：/emps
>
> 请求方式：GET
>
> 接口描述：该接口用于员工列表数据的条件分页查询
>
> 请求参数：
>
> | 参数名称 | 是否必须 | 示例       | 备注                                       |
> | -------- | -------- | ---------- | ------------------------------------------ |
> | name     | 否       | 张         | 姓名                                       |
> | gender   | 否       | 1          | 性别 , 1 男 , 2 女                         |
> | begin    | 否       | 2010-01-01 | 范围匹配的开始时间(入职日期)               |
> | end      | 否       | 2020-01-01 | 范围匹配的结束时间(入职日期)               |
> | page     | 是       | 1          | 分页查询的页码，如果未指定，默认为1        |
> | pageSize | 是       | 10         | 分页查询的每页记录数，如果未指定，默认为10 |

然后来开发对应的功能：

![image-20220904161312992](assets/image-20220904161312992.png) 



需要在原来分页查询的代码基础上进行改造。



1). EmpMapper

EmpMapper接口

```java
@Mapper
public interface EmpMapper {
	public List<Emp> list(String name, Short gender, LocalDate begin, LocalDate end);
}
```



EmpMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.itxg.mapper.EmpMapper">

    <select id="list" resultType="com.itxg.pojo.Emp">
        select * from emp
        <where>
            <if test="name != null and name != ''">
                name like concat('%',#{name},'%')
            </if>
            <if test="gender != null">
               and gender = #{gender}
            </if>
            <if test="begin != null and end != null">
               and entrydate between #{begin} and #{end}
            </if>
        </where>
        order by update_time desc
    </select>
    
</mapper>    
```



2). EmpService / EmpServiceImpl

EmpService

```java
public interface EmpService {
    /**
     * 条件分页查询
     * @param page 页码
     * @param pageSize 每页展示记录数
     * @param gender 性别
     * @param begin 范围 - 开始时间
     * @param end 范围 - 结束时间
     * @return
     */
    PageBean page(Integer page, Integer pageSize, String name, Short gender, LocalDate begin, LocalDate end);
}
```



EmpServiceImpl

```java
@Service
public class EmpServiceImpl implements EmpService {
    @Autowired
    private EmpMapper empMapper;

    @Override
    public PageBean page(Integer page, Integer pageSize, String name, Short gender, LocalDate begin, LocalDate end) {
        PageHelper.startPage(page, pageSize); // 设置分页参数
        List<Emp> empList = empMapper.list(name,gender,begin,end); // 执行分页查询
        Page<Emp> p = (Page<Emp>) empList;    // 获取分页结果

        PageBean pageBean = new PageBean(p.getTotal(), p.getResult()); //封装PageBean
        return pageBean;
    }
}    
```



3). EmpController

```java
@RestController
@RequestMapping("/emps")
public class EmpController {

    @Autowired
    private EmpService empService;

    //条件分页查询
    @GetMapping
    public Result page(@RequestParam(defaultValue = "1") Integer page ,
                       @RequestParam(defaultValue = "10") Integer pageSize,
                       String name, Short gender,
                       @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate begin,
                       @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate end){
        PageBean pageBean = empService.page(page, pageSize, name, gender, begin, end);
        return Result.success(pageBean);
    }
}    
```





#### 3.3.3 测试

功能开发完成后，我们就可以启动项目，然后打开postman。发起GET请求，访问 ：http://localhost:8080/emps?page=1&pageSize=5

![image-20220904154751275](assets/image-20220904154751275.png) 





### 3.4 删除员工

#### 3.4.1 需求

![image-20220904162520759](assets/image-20220904162520759.png) 

当我们勾选列表前面的复选框，然后点击 "批量删除" 按钮，就可以将这一批次的员工信息删除掉了。 





#### 3.4.2 开发

然后我们就可以查看资料中提供的，删除员工的接口文档。

> 请求路径：/emps/{ids}
>
> 请求方式：DELETE
>
> 接口描述：该接口用于批量删除员工的数据信息
>
> 请求样例：/depts/1,2,3

从接口文档中，我们可以看出在路径参数中，传递过来了多个id，在springboot中，我们可以将这组id值封装到一个集合中，然后在Mybatis中，通过动态SQL来完成批量删除操作。

对应的流程为：

![image-20220904163231521](assets/image-20220904163231521.png) 



**1). EmpMapper**

EmpMapper接口

```java
//批量删除
void delete(List<Integer> ids);
```



EmpMapper.xml

```java
<select id="delete">
    delete from emp where id in
    <foreach collection="ids" item="id" open="(" close=")" separator=",">
    	#{id}
    </foreach>
</select>
```



**2). EmpService / EmpServiceImpl**

EmpService

```java
/**
* 批量删除操作
* @param ids id集合
*/
void delete(List<Integer> ids);
```



EmpServiceImpl

```java
@Override
public void delete(List<Integer> ids) {
	empMapper.delete(ids);
}
```



**3). EmpController**

通过接口文档我们可以看出，这一组id是通过路径参数传递过来的，接收路径参数，需要在集合前面加上 @PathVariable

```java
//批量删除
@DeleteMapping("/{ids}")
public Result delete(@PathVariable List<Integer> ids){
    empService.delete(ids);
    return Result.success();
}
```





#### 3.4.3 测试

功能开发完成后，我们就可以启动项目，然后打开postman。发起DELETE请求，访问 ：http://localhost:8080/emps/15,16,17

![image-20220904163654234](assets/image-20220904163654234.png) 







### 3.4 新增员工

#### 3.4.1 需求

<img src="/assets/image-20220904183633532.png" alt="image-20220904183633532" style="zoom:67%;" /> 

在新增用户时，我们需要保存用户的基本信息，并且还需要上传的员工的图片，目前我们先完成第一步操作，保存用户的基本信息。 



我们可以看一下接口文档，参照接口文档，进行功能的开发。



#### 3.4.2 开发

新增员工，最终呢，我们就是需要往数据库表结构中插入数据。具体的流程为：

![image-20220904185601229](assets/image-20220904185601229.png) 



**1). EmpMapper**

```java
//保存员工信息
@Insert("insert into emp (username, name, gender, image, job, entrydate, dept_id, create_time, update_time) " +
"values (#{username}, #{name}, #{gender}, #{image}, #{job}, #{entrydate}, #{deptId}, #{createTime}, #{updateTime});")
void save(Emp emp);
```



**2). EmpService / EmpServiceImpl**

EmpService

```java
/**
* 保存员工信息
* @param emp
*/
void save(Emp emp);
```



EmpServiceImpl

```java
@Override
public void save(Emp emp) {
    emp.setCreateTime(LocalDateTime.now());
    emp.setUpdateTime(LocalDateTime.now());
    empMapper.save(emp);
}
```



**3). EmpController**

```java
//新增
@PostMapping
public Result save(@RequestBody Emp emp){
    empService.save(emp);
    return Result.success();
}
```





#### 3.4.3 测试

代码编写完毕后，启动服务器，打开Postman发送 POST 请求，请求连接：http://localhost:8080/emps

![image-20220904190309786](assets/image-20220904190309786.png) 





新增员工基本信息，我们已经保存到数据库了。那接下来，我们要来完成的是员工图像的上传。

![image-20220904190309786](img/image-20220904190851736.png)

### 3.5 修改员工

#### 3.5.1 需求

![image-20220904220001994](assets/image-20220904220001994.png) 



在进行修改员工信息的时候，我们首先先要根据员工的ID查询员工的信息用于页面回显展示，然后用户修改员工数据之后，点击保存按钮，就可以将修改的数据提交到服务端，保存到数据库。 所以呢，分为两部操作：

- 根据ID查询员工信息
- 保存修改



#### 3.5.2 查询回显

查询回显，就是根据ID查询员工的信息，用于页面回显展示。接下来，我们就需要参考接口文档进行开发：

![image-20220904220653031](assets/image-20220904220653031.png) 





1). EmpMapper

```java
//根据ID查询员工信息
@Select("select * from emp where id = #{id}")
Emp getById(Integer id);

```



2). EmpService / EmpServiceImpl

EmpService

```java
/**
* 根据ID查询员工
* @param id
* @return
*/
Emp getById(Integer id);

```



EmpServiceImpl

```java
@Override
public Emp getById(Integer id) {
	return empMapper.getById(id);
}

```



3). EmpController

```java
//根据id查询
@GetMapping("/{id}")
public Result getById(@PathVariable Integer id){
    Emp emp = empService.getById(id);
    return Result.success(emp);
}

```



4). 测试

代码编写完毕后，启动服务器，打开Postman发送 GET 请求，请求连接：http://localhost:8080/emps/1

![image-20220904221209368](assets/image-20220904221209368.png) 





#### 3.5.3 保存修改

assets/image-20220904221256025.png



当用户修改完数据之后，点击保存按钮，就需要将数据提交到服务端，然后服务端需要将数据保存到数据库中。 具体的执行流程为：



![image-20220904221401157](assets/image-20220904221401157.png) 



接下来，我们就可以根据接口文档进行功能开发了。



**1). EmpMapper**

EmpMapper接口

```java
//修改员工信息
void update(Emp emp);

```



EmpMapper.xml

```xml
<update id="update">
    update emp
    <set>
        <if test="username != null and username != ''">
        	username = #{username},
        </if>
        <if test="password != null and password != ''">
       	 	password = #{password},
        </if>
        <if test="name != null and name != ''">
        	name = #{name},
        </if>
        <if test="gender != null">
        	gender = #{gender},
        </if>
        <if test="image != null and image != ''">
        	image = #{image},
        </if>
        <if test="job != null">
        	job = #{job},
        </if>
        <if test="entrydate != null">
        	entrydate = #{entrydate},
        </if>
        <if test="deptId != null">
        	dept_id = #{deptId},
        </if>
        <if test="updateTime != null">
        	update_time = #{updateTime}
        </if>
    </set>
    where id = #{id}
</update>

```



**2). EmpService / EmpServiceImpl**

EmpService 

```java
/**
* 更新员工
* @param emp
*/
void update(Emp emp);

```



EmpServiceImpl

```java
@Override
public void update(Emp emp) {
    emp.setUpdateTime(LocalDateTime.now()); //更新修改时间为当前时间
    empMapper.update(emp);
}

```



**3). EmpController**

```java
//修改
@PutMapping
public Result update(@RequestBody Emp emp){
    empService.update(emp);
    return Result.success();
}

```





**4). 测试**

![image-20220904221941144](assets/image-20220904221941144.png) 

















