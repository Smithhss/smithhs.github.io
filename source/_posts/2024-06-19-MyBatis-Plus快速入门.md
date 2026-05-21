---
title: MyBatis-Plus快速入门
date: 2024-06-19 21:48:00
tags: MyBatis-Plus
categories: 编程开发
cover: 'https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/cover-mybatis-plus.png'
---


 

#### 文章目录

+   +   [一、MyBatis VS JPA](#MyBatis_VS_JPA_2)
    +   [二、MyBatis-Plus简介](#MyBatisPlus_21)
    +   [三、MyBatis-Plus快速入门](#MyBatisPlus_62)
    +   +   [1、lombok简介及安装](#1lombok_63)
        +   [2、入门小案例](#2_96)
    +   [四、基本使用](#_258)
    +   +   [1、通用传统模式简介及通用mapper新增方法](#1mapper_259)
        +   [2、常用注解](#2_291)
        +   [3、排除非表字段的三种方式](#3_313)
    +   [五、MyBatis-Plus查询方法](#MyBatisPlus_329)
    +   +   [1、普通查询](#1_330)
        +   [2、条件构造器查询](#2_360)
        +   [3、select不列出全部字段](#3select_423)
        +   [4、condition作用](#4condition_436)
        +   [5、实体作为条件构造器构造方法的参数](#5_464)
        +   [6、AllEq用法](#6AllEq_497)
        +   [7、其他使用条件构造器的方法](#7_510)
        +   [8、lambda条件构造器](#8lambda_551)
    +   [六、自定义SQL及分页查询](#SQL_571)
    +   +   [1、使用条件构造器的自定义sql](#1sql_572)
        +   [2、分页查询](#2_597)
    +   [七、更新与删除](#_642)
    +   +   [1、mybatis-plus更新](#1mybatisplus_643)
        +   [2、mybatis-plus删除方法](#2mybatisplus_671)
    +   [八、AR模式、主键策略和基本配置](#AR_687)
    +   +   [1、ActiveRecord模式](#1ActiveRecord_688)
        +   [2、主键策略](#2_707)
        +   [3、基本配置](#3_717)
    +   [九、通用的Service](#Service_720)
    +   +   [1、基本方法](#1_725)
        +   [2、批量操作操作](#2_729)
        +   [3、链式调用方法](#3_735)

### 一、[MyBatis](https://so.csdn.net/so/search?q=MyBatis&spm=1001.2101.3001.7020) VS JPA

**JPA：**  
java持久层API，可以理解为一种规范，[Hibernate](https://so.csdn.net/so/search?q=Hibernate&spm=1001.2101.3001.7020)就是其具体一个实现。（目前比较常用的是SpringDataJpa，它是Spring提供的一套简化开发的框架，按照约定好的方法命名规则，编写dao层接口，就可以在不编写实现情况下执行数据库操作，还提供了除CRUD以外的功能，例如分页、排序、复杂查询等等，SpringDataJpa可以理解为对JPA的再次封装，底层仍旧是Hibernate）

**Mybatis优势：**  
1、SQL语句可以自由控制，更灵活、性能较高。  
2、SQL与代码分离，易于阅读和维护。  
3、提供XML标签，支持编写动态SQL语句。

**JPA优势：**  
JPA移植性比较好（Hibernate方言）  
提供了很多CRUD方法、开发效率高（不用编写sql语句）  
对象化程度更高（面向对象开发思想）

**Mybatis劣势：**  
简单CRUD操作需要编写SQL语句（单表仍需要编写Mapper接口方法和xml的sql）  
XML中有大量sql需维护  
mybatis自身功能有限

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/04c0a615e3544645c119a58392b9aa0bpng.jpg)

### 二、MyBatis-Plus简介

Mybatis-plus简介：Mybatis增强工具，只做增强，不作改变，简化开发，提高效率。  

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/b9c0fcdb4a089733ef2724774617c724png.jpg)

MP在mybatis启动的时候，它在mybatis的xml和注解注入之后，紧接着反射分析实体，然后注入到底层容器中。就是注入crud之类的。注入之前MP会进行判断，是否已经注入同样的方法，如果已经注入，就不在注入。它的注入时机在容器启动时，所以MP使用crud、本身是无性能损耗的。

**官网地址：**[https://mybatis.plus/](https://mybatis.plus/)

1、Crab：Mybatisplus3.0教学版。（MP核心程序员作品）

2、Crab：WEB极速开发框架。（MP项目负责人作品）

**github项目地址：**[https://github.com/baomidou/mybatis-plus](https://github.com/baomidou/mybatis-plus)

**码云项目地址：**[https://gitee.com/baomidou/mybatis-plus](https://gitee.com/baomidou/mybatis-plus)

**Mybatis-plus特点：**

> 1、无侵入：Mybatis-Plus 在 Mybatis 的基础上进行扩展，只做增强不做改变，引入 Mybatis-Plus 不会对您现有的 Mybatis 构架产生任何影响，而且 MP 支持所有 Mybatis 原生的特性

> 2、依赖少：仅仅依赖 Mybatis 以及 Mybatis-Spring

> 3、损耗小：启动即会自动注入基本CRUD，性能基本无损耗，直接面向对象操作

> 4、通用CRUD操作：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求

> 5、多种主键策略：支持多达4种主键策略（内含分布式唯一ID生成器），可自由配置，完美解决主键问题

> 6、支持ActiveRecord：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可实现基本 CRUD 操作

> 7、支持代码生成：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置等您来使用（P.S. 比 Mybatis 官方的 Generator 更加强大！）  
> 支持自定义全局通用操作：支持全局通用方法注入( Write once, use anywhere )

> 8、内置分页插件：基于Mybatis物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于写基本List查询

> 9、内置性能分析插件：可输出Sql语句以及其执行时间，建议开发测试时启用该功能，能有效解决慢查询

> 10、内置全局拦截插件：提供全表 delete 、 update 操作智能分析阻断，预防误操作

### 三、MyBatis-Plus快速入门

#### 1、[lombok](https://so.csdn.net/so/search?q=lombok&spm=1001.2101.3001.7020)简介及安装

> lombok作用：提高开发效率，通过注解形式使javabean生成get、set、有参数、无参数、toString等方法，无需手动实现。

**倘若不使用lombok可以使用的注解有：  
注解介绍：**  
**下面只是介绍了几个常用的注解，更多的请参见：** [https://projectlombok.org/features/index.html](https://projectlombok.org/features/index.html)

**@Getter / @Setter**

> 可以作用在类上和属性上，放在类上，会对所有的非静态(non-static)属性生成Getter/Setter方法，放在属性上，会对该属性生成Getter/Setter方法。并可以指定Getter/Setter方法的访问级别。

**@EqualsAndHashCode**

> 默认情况下，会使用所有非瞬态(non-transient)和非静态(non-static)字段来生成equals和hascode方法，也可以指定具体使用哪些属性。

**@ToString**

> 生成toString方法，默认情况下，会输出类名、所有属性，属性会按照顺序输出，以逗号分割。

**@NoArgsConstructor, @RequiredArgsConstructor and @AllArgsConstructor**

> 无参构造器、部分参数构造器、全参构造器，当我们需要重载多个构造器的时候，Lombok就无能为力了。

**@Data**

> @ToString, @EqualsAndHashCode, 所有属性的@Getter, 所有non-final属性的@Setter和@RequiredArgsConstructor的组合，通常情况下，我们使用这个注解就足够了。

**IDEA安装lombok插件：**  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/547bd43818faefdaadccfa57c66c2cefpng.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7ba64e4e58591558f5eb580cfd254f4fpng.jpg)  
**然后在maven的pom.xml引入依赖:**

```auto
  <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.16.10</version>
  </dependency>
12345
```

#### 2、入门小案例

**步骤：**  
**建库建表===>引入依赖===>配置===>编码===>测试**

**建一个mp名的数据库，在建一个user表：**

```auto
#创建数据库
#使用查看全文
create table user (  id BIGINT(20) PRIMARY key not null comment '主键', 
name varchar(30) default null comment '姓名',
age int(11) default null comment '年龄', 
email varchar(50) default null comment '邮箱',   
manager_id BIGINT(20) default null comment '直属上级id',   
create_time DATETIME default null comment '创建时间',  
CONSTRAINT manager_fk foreign key (manager_id)          
REFERENCES user (id)) ENGINE=INNODB CHARSET=UTF8;
 
#数据初始化
INSERT INTO user (id,name,age,email,manager_id,create_time)
VALUES (1087982257332887553, '猪头', 20, 'boss@baomidou.com', NULL, 
'2019-01-11 14:20:20'),            
(1088248166370832385,'小懒猪',20,'wtf@baomidou.com', 1087982257332887553,
'2019-02-05 11:12:22'),            
(1088250446457389058,'小白',18,'lyw@baomidou.com', 1088248166370832385,
'2019-02-14 08:31:16'),            
(1094590409767661570,'小黑',21,'zyq@baomidou.com', 1088248166370832385,
'2019-01-14 09:15:15'),            
(1094592041087729666,'小可耐',22,'lhm@baomidou.com', 1088248166370832385,
'2019-01-14 09:48:16');
1234567891011121314151617181920212223
```

**然后建一个Spring Initializr工程：**

pom.xml依赖：

```auto
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.mybatis.spring.boot</groupId>
        <artifactId>mybatis-spring-boot-starter</artifactId>
        <version>2.1.4</version>
    </dependency>

    <!-- Lombok -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>

    <!-- Mybatis-Plus启动器 -->
    <dependency>
        <groupId>com.baomidou</groupId>
        <artifactId>mybatis-plus-boot-starter</artifactId>
        <version>3.1.0</version>
    </dependency>

    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <scope>runtime</scope>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
1234567891011121314151617181920212223242526272829303132333435363738394041
```

**创一个application.yaml,进行配置:**

```auto
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/mp?useSSL=false&serverTimezone=GMT%2B8
    username: root
    password: 1214
123456
```

**编写实体类：  
entity/User.java:**

```auto
@Data
@EqualsAndHashCode(callSuper = false)
@TableName("user")
public class User {

    /**
     * 主键
     */
    private Long id;

    /**
     * 姓名
     */
    @TableField(value = "name", condition = SqlCondition.LIKE)
    private String name;

    /**
     * 年龄
     */
    @TableField(condition = "%s&lt;#{%s}")
    private Integer age;

    /**
     * 邮箱
     */
    private String email;

    /**
     * 直属上级id
     */
    private Long managerId;

    /**
     * 创建时间
     */
    private Date createTime;

    /*
     * 备注（不与数据库字段对应） # transient 不参与序列化
     */
    @TableField(exist = false)
    private String remark;

}
1234567891011121314151617181920212223242526272829303132333435363738394041424344
```

**编写dao接口：  
UserMapper.java：**

```auto
public interface UserMapper extends BaseMapper<User> {
}
12
```

**在启动类中添加注解：****@MapperScan(“com.mp.first\_mp.dao”)**，**进行扫描**

最后就是编写测试类：

```auto
@RunWith(SpringRunner.class)
@SpringBootTest
public class SimpleTest {

    @Autowired
    private UserMapper userMapper;

    @Test
    public void select() {
        List<User> list = userMapper.selectList(null);
        Assert.assertEquals(5, list.size());
        list.forEach(System.out::println);
    }
}
1234567891011121314
```

**查看效果：**  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/9ac23857fafde5a29176e16a21558bcapng.jpg)  
**运行是成功的，我们可以发现相对于使用MyBatis来说，MyBatis-plus不用编写xml文件编写那些繁琐的SQL语句，简单快速的MyBatis-plus的就到这里，若还有兴趣就继续看下去吧ヾ(◍°∇°◍)ﾉﾞ**

### 四、基本使用

#### 1、通用传统模式简介及通用mapper新增方法

**相信对SSM比较熟系的小伙伴应该对SSM传统编程模式都比较熟系：**

> **接口中写抽象方法===>XML或注解写SQL===>Service中调用接口===>Controller中调用**

**为了方便大家观察，在application.yaml多增加应该日志的输出：**

```auto
logging:
  level:
    root: warn
    com.mp.first_mp.dao: trace
  pattern:
    console: '%p%m%n'
123456
```

**进行测试：**

```auto
@Test
    public void insertTest() {
        User user = new User();
        user.setName("小灰");
        user.setAge(20);
        user.setEmail("1980757771@qq.com");
        user.setManagerId(1088248166370832385L);
        user.setCreateTime(new Date());
        int rows = userMapper.insert(user);
        System.out.println("影响记录数：" + rows);
    }
1234567891011
```

**运行结果：**  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/655f9404a1ddc5e81c8837c241a596d7png.jpg)  
**倘若大家观察得仔细可以发现主键id并没有设定自增，那为什么没有出现报错呢？？？**

> 原来MP的默认主键策略是基于雪花算法的自增主键，在MP的源码中有雪花算法的实现代码。

**额~~~可能有小伙伴不知道什么是雪花算法，大家可以看看这位博主写的文章：**[雪花算法的原理和实现Java](https://blog.csdn.net/lq18050010830/article/details/89845790)

#### 2、常用注解

**mybatis-plus：**

> 主键采用雪花算法生成值的前提是实体类的主键属性名称必须为id。

**mybatis-plus：**

> 数据表字段带有\_的可以自动映射到驼峰式命名的属性上（t\_user——》tUser）。

**注解：**

> 1.数据库名不同，在类上增加@TableName(“mp\_user”)  
> 2.主键ID的驼峰一般无法识别，在主键属性上增加@TableId  
> 3.属性与字段名不相同,在属性上增加@TableField(“name”)

**@TableName（“数据库表名”）：**

> 使用场景实体类名称和数据表名不一致时，通过它指定表名，此时就可以使用mp的单表操作。

**@TableId（“主键名”）：**

> 使用场景实体类属性名称和数据表主键不是id时，通过它声明该属性为主键，就可以采用雪花算法生成主键值操作。

**@TableField（“字段名”）：**

> 使用场景实体类属性名称和数据表字段名不一致时，通过它指定数据表字段名称，就可以和实体类属性对应。

#### 3、排除非表字段的三种方式

**使用场景：** 实体类中的某个属性不对应表中的任何字段，只是用于保存临时数据，或者临时组装的数据。

**使用方式**

**1、** transient修饰实体类属性（修饰的属性不会被序列化）。

缺陷：有些需求需要序列化该字段。

**2、** static修饰属性（前提手动实现get、set方法，Lombok对静态属性不会提供get、set方法）。

缺陷：每个对象的属性值一致。

**3、** @TableField(exist=false)，这个注解用来表示数据表中不存在该字段，默认是true。

### 五、MyBatis-Plus查询方法

#### 1、普通查询

普通查询：使用方式为实现BaseMapper接口对象调用该方法。

**1、T selectById(Serializable id)：使用场景为通过主键查询，只要该主键类型实现了Serialzable接口即可。**

```auto
@Test
public void selectById() {
    User user = userMapper.selectById(6);
    System.out.println(user);
}
12345
```

**2、List selectBatchIds(@Param(Constants.COLLECTION) Collection<? extends Serializable> idList)：使用场景为通过主键的集合去批量查询，前提主键的类型实现了Serializable接口。**

```auto
@Test
public void selectBatchById() {
    List<Long> userListId = Arrays.asList(1L, 2L, 3L);
    List<User> userList = userMapper.selectBatchIds(userListId);
    userList.forEach(System.out::println);
}
123456
```

**3、List selectByMap(@Param(Constants.COLUMN\_MAP) Map<String,Object> columnMap)：使用场景为传入一个Map集合，key为表字段，value为表字段值。**

注意：Map的key为数据表的字段名，不是实体类属性名。

```auto
@Test
public void selectByMap() {
    Map<String, Object> userMap = new HashMap<>();
    userMap.put("age", 20);
    List<User> userList = userMapper.selectByMap(userMap);
    userList.forEach(System.out::println);
}
1234567
```

#### 2、条件构造器查询

BaseMapper以条件构造器（Wrapper）为参数的查询方法

AbstractWrapper抽象类：提供了很多条件构造器。

![http://img2.sycdn.imooc.com/5f8db8a700015a9507830434.jpghttp://img1.sycdn.imooc.com/5f8db8c00001cddf08570416.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d773b528e68d53aef4a09e1e56be6dfapng.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/9dcd367d30d43f1cebaff66a35bc6018png.jpg)

List selectList(@Param(Constans.WRAPPER) Wrapper queryWrapper)：  
使用场景：对于一些有特殊条件的查询，比如模糊查询、条件查询等。  
使用方法：QueryWrapper为查询条件构造器，它是AbstractWrapper的一个子类。  
生成条件构造器  
方式一：QueryWrapper queryWrapper=new QueryWrapper();  
方式二：QueryWrapper query=Wrappers.query();

**注意：** 条件构造器AbstractWrapper的条件构造器方法key都为数据表字段，value为实际值。例如：like（Column，value）、gt（Column，value）等。

模糊条件构造器：like，小于条件构造器：lt。  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/f6897078d3432055ba0bc102aa244263png.jpg)

范围条件构造器：between，非空条件构造器：isNotNull。  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/3503d602c973eb0be59696a2a130d5dfpng.jpg)  
模糊右通配符条件构造器：likeRight，或条件构造器：or。  
大于等于条件构造器：ge，升序条件构造器：orderAsc。  
降序条件构造器：orderDesc。

![http://img1.sycdn.imooc.com/5f8dc3100001837607420320.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/4fdadd0dab33039c9786e40940374055png.jpg)  
**Mysql函数**  
date\_format(日期，‘格式’)：将日期按照格式进行插入或者返回。  
**例如：** date\_format(now(),’%Y-%m-%d’)。

![http://img4.sycdn.imooc.com/5f8ef2a20001f50504130219.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5287a78ef6b438c6ee99a4c3a37c73c5png.jpg)

动态条件构造器：apply，范围条件构造器：insql。  
**注意：** 如果{0}替换为实际值，可能会造成sql注入。  
![http://img2.sycdn.imooc.com/5f8eff88000122cf12320275.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/14e5a45447609e1d4f564173bcb33c4bpng.jpg)  
and括号条件构造器：and（）

![http://img1.sycdn.imooc.com/5f90504f00011ec413440280.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/144b0604b7d56314352a70389a596497png.jpg)  
注意： **怕有些小伙伴不了解这个是什么：wq -> wq.xxx这种类型的表达式，这个是java8引入的lambda表达式的语法，箭头左边是变量名，箭头右边是自己编写的代码逻辑，如果感兴趣你可以了解一下java的lambda表达式，当然打印方式也是lambda表达式**

or括号条件构造器：or()

![http://img1.sycdn.imooc.com/5f9051760001f86908160381.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6b77d57ebffcad428923bf970aaf2ab0png.jpg)

非and开头的条件构造器：nested（）

![http://img2.sycdn.imooc.com/5f9052d3000138e107640356.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/abb51550c9f453b508d3b5121aee9e47png.jpg)

In条件构造器：In（column,Collection)

![http://img1.sycdn.imooc.com/5f90548e0001a0e807960357.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6376dd88e29f5f91ebd3bc791787bfe9png.jpg)

last条件构造器：last(sql）。注意：有sql注入风险。确保参数没有风险再使用。

![http://img1.sycdn.imooc.com/5f9055330001271e08440374.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/bda48492fc8e53016ba726a9dca36575png.jpg)

#### 3、select不列出全部字段

select不列出全部字段

> select（String …columns)

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7f6f0a969da5db1f75c920d6020571b0png.jpg)  
如果返回的字段数量很多，此时采用如下的select，也可以放置在后面

> select（Class entityClass,Predicate predicate)

第一个参数为实体类对象;  
第二个参数相当于排除返回的字段.

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d9c0b8b3e791ead034b9de0d91412d61png.jpg)

#### 4、condition作用

**如果使用的是IDEA需要添加依赖pom.xml:**

```auto
<dependency>
        <groupId>commons-lang</groupId>
        <artifactId>commons-lang</artifactId>
        <version>2.6</version>
    </dependency>
12345
```

条件构造器（abstractWrapper）中 condition（构造的方法的boolean类型参数） 作用。

如下：like方法调用重载的方法，重载方法中第一个参数。

![http://img1.sycdn.imooc.com/5f941dbd0001f72a05250160.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/4a6fb3d0d300f09d3738e913ce3b46abpng.jpg)

作用：该条件是否加入最后生成的sql中。  
使用方法：如果为true就加入，如果false就不加入。  
使用场景：类似于动态的sql拼接。

传统使用：

![http://img4.sycdn.imooc.com/5f9420460001fc9108520519.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/bcfe46305b48becde8dc6c0c4fd52aadpng.jpg)

mp方式：

![http://img4.sycdn.imooc.com/5f9420e300011afe09010293.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/98f25369e3c1a9b64419decd88229f64png.jpg)

#### 5、实体作为条件构造器构造方法的参数

创建条件构造器时传入实体对象

```auto
private SharedString sqlSelect = new SharedString();

public QueryWrapper() {
    this(null);
}

public QueryWrapper(T entity) {
    super.setEntity(entity);
    super.initNeed();
}
12345678910
```

QueryWrapper一个参数的构造方法，如果传入一个部不为null的对象，默认会进行进行等值比较，也就是where后拼接条件。

注意：通过entity参数生成的等值和QueryWrapper的条件构造方法生成的没有任何关系。  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/231a60401891e106607e9d06b5984b79png.jpg)

举例验证：  
![http://img3.sycdn.imooc.com/5f94262a000121c409290352.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/40baea88f9416b9d95a192748c5d7d1epng.jpg)  
![http://img2.sycdn.imooc.com/5f94262100010ab111120201.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/9d121d14a2c353547eaa2123fb35848dpng.jpg)  
注意：使用时要慎重，因为他们都会在sql中进行拼接。

使用场景：如果允许使用实体类去接受参数，那么就可以不用调用条件构造器，而是直接使用构造方法传入参数即可。

特殊操作：可以通过在实体类上添加注解，指定该属性使用那种操作，默认使用等值。

SqlCondition类：定义了一些常量，包括等值、不等于、like、左边like、右边like。  
![http://img4.sycdn.imooc.com/5f94279b00015dc407230558.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/3510fdcdfe99235784367f63b609d18cpng.jpg)  
如果提供的常量无法满足需求，就可以自己在注解中编写常量表达式，例如小于。  
![http://img4.sycdn.imooc.com/5f942a420001d19007800551.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d74c4d9bf424a44bd6ec99d2308f937epng.jpg)

#### 6、AllEq用法

Alleq（Map<R,V> params）

使用方法：传入一个map集合对象，就会按照等值进行操作。key为字段名称，value为字段值。如果字段的值为null，那么sql就会拼接为is null这种形式。  
![http://img4.sycdn.imooc.com/5f942bb700016fac05630085.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/16799d5be916639d79942f8d81f3da03png.jpg)  
如果传入的null，想要忽略掉，也就是不进行拼接，那么就传入第二个参数为false。  
![http://img2.sycdn.imooc.com/5f942ce30001b2e109700525.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/aebdea327bbd4c4f06d7433f614e1beepng.jpg)

allEq的第二种方法，参数1为过滤函数，它是一个函数式接口。  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/9d2d0ce7850bd6d3061905b4f2e2093apng.jpg)

上图就是判断name是不等于name，如果不等于就返回true，就会过滤掉，所以没有拼接name。也可以判断值。注意需要考虑类型的问题  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/b3bf3f8019dd91bdaa038a5cc101d705png.jpg)

#### 7、其他使用条件构造器的方法

其他以条件构造器的方法

1、selectMap：List集合的泛型不再是实体，而是map集合。其中key表示字段名，value表示字段值。  
![http://img1.sycdn.imooc.com/5f9572000001a16c10270198.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2886752005733474dcdace0cb0ed70dcpng.jpg)  
![http://img3.sycdn.imooc.com/5f9573d50001705711540205.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/4cd776582ab8aefe5ac9b4c17e29cefdpng.jpg)

使用场景1：当实体类属性非常多时，不易查看。如果返回的是一个实体类，那么即使我们设定了返回字段，那么它的值为null，但是属性仍然存在。如果返回的是Map类型，当指定了返回字段时，那么没返回的就不会存在。  
![http://img3.sycdn.imooc.com/5f9576290001d58e10510123.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/89e4480dae36429b6995a659af33296bpng.jpg)  
![http://img4.sycdn.imooc.com/5f9576c20001f8b314280045.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/f008b6c63ffb170404e76bed9bd4bf90png.jpg)

使用场景2：当返回的不是一条一条记录时，也就是返回的字段不在实体类属性中，比如一些统计，像平均值，最大值，最小值这样的。  
![http://img3.sycdn.imooc.com/5f957b8100017a1411010282.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/a78ab583f23484e2edd7754b0572a943png.jpg)  
![http://img2.sycdn.imooc.com/5f957b8d0001f6b406370069.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5fce760d163e8f744d82f0c14010d016png.jpg)

2、selectObject：List集合的泛型不再是实体，而是Object，只返回第一个字段的值。其他的会被舍弃。  
![http://img1.sycdn.imooc.com/5f957d31000199d208730228.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/e6e8307906f5d1043e4d2d1f72499801png.jpg)  
![http://img3.sycdn.imooc.com/5f957e25000131e010490264.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/34fcdd361ede198aabfa4d2831eae260png.jpg)  
![http://img4.sycdn.imooc.com/5f957e1b0001a2b413400360.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/3b1e5453b6622fa2dbd734455f357b58png.jpg)  
使用场景：只返回一列时可以使用它。

3、selectCount：查询符合条件的总记录数的。

注意：使用它时，就不能指定返回的列了，因为它会在后面拼接COUNT(1)。  
![http://img3.sycdn.imooc.com/5f958c2100015fd108430254.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/747069887d134cee2469f66e23b483d0png.jpg)  
![http://img2.sycdn.imooc.com/5f958da70001f85907960205.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d55840a2c6393f0834384e01890bebb8png.jpg)  
![http://img4.sycdn.imooc.com/5f958db30001b98607000185.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/86d480673420848320faaf0c4ca346b4png.jpg)

4、selectOne：查询符合条件的数据，只会返回一条数据。

注意： 查询的结果必须是一条或者查不到（**多于1条就会报错**）。  
![http://img1.sycdn.imooc.com/5f958eae0001b76709360214.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/61a1143a85d2c1b64dbc4f9e83eddf3epng.jpg)  
![http://img4.sycdn.imooc.com/5f958fda0001a26708530321.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/12d6597c5f025675dfb38a3fa607f314png.jpg)  
![http://img4.sycdn.imooc.com/5f958fe50001df8913700300.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/8302792684a35c438f4a42206b5086depng.jpg)

#### 8、lambda条件构造器

lambda条件构造器（类似mp条件构造器，防误写）

lambda条件构造器使用场景：

不需要我们手动在构造条件时去书写字段名称。  
![http://img3.sycdn.imooc.com/5fc23604000191c909560053.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2777932e48a988f3d2ab09d42d07ebf9png.jpg)  
lambda条件构造器使用方法：  
![http://img1.sycdn.imooc.com/5fc236e80001837013630842.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/35599edccc92b183803abc6b7a4680ccpng.jpg)  
lambda条件构造器的创建有3种方式

1、通过查询构造器QueryWrapper创建

2、通过new直接创建lambda条件构造器

3、通过构造器工具类Wrappers创建（此时需要泛型）  
![http://img4.sycdn.imooc.com/5fc2323e000189b110150217.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/b75f8c309a4ed7a9e853c221d6411458png.jpg)  
4、3.0.7新增的创建lambda条件构造器，通过LambdaQueryChainWrapper，并且需要一个Mapper接口作为参数（通过源码可以，它是对普通查询构造器的再次封装，源码中仍然是通过Mapper接口去调用）。  
![http://img1.sycdn.imooc.com/5fc23ace0001394f15670359.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2de28077430d88a7bbf47d0a98344567png.jpg)  
![http://img4.sycdn.imooc.com/5fc23ae10001ed3614840336.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/86eed52dd7d978d9bfff2cf4ace18b09png.jpg)

### 六、自定义SQL及分页查询

#### 1、使用条件构造器的自定义sql

使用场景：当使用条件构造器去构造sql的方法不能满足需求时（前提：mybatisplus版本大于3.0.7）。

使用方法：

注意:${ew.customSqlsegment}可以使条件构造器构造的sql被执行。  
![http://img1.sycdn.imooc.com/5fc302cb00019d7a09610327.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/eb7704e9541cbde4aba679b82d2870cbpng.jpg)  
![http://img1.sycdn.imooc.com/5fc303c3000141f112020398.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d481c0e4a86806b0a2f16dc7010cc054png.jpg)  
mybatis-plus配置xml文件路径（springboot项目）：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/ade80e2ffa264e55c869c1a64edb756apng.jpg)

不过由于IDEA系列编辑器，XML文件是不能放在 java 文件夹中的，IDEA默认不会编译源码文件夹中的 XML文件，所以可以通过在pom.xml中加入：

```auto
<build>
	<resources>
       <resource>
       <directory>src/main/java</directory>
          <includes>
              <include>**/*.xml</include>
          </includes>
       </resource>
    </resources>
</build>
12345678910
```

即可在xml中进行编写SQL语句。

#### 2、分页查询

分页查询

1、mybatis分页查询（mybatis的rowBounds实现的分页不是物理分页，可以理解为逻辑或者内存分页）

拓展：内存分页弊端，数据量大时占用过多内存，第一次查询速度慢。

2、mybatis-plus插件实现物理分页

a、配置mybatis-plus插件

![http://img1.sycdn.imooc.com/5fc315ef00013b9807540354.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2429b494922c8ac2cdc8b2a69bce4ab9png.jpg)  
BaseMapper提供了两个分页方法：  
![http://img1.sycdn.imooc.com/5fc309db0001932011160457.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/dfa2b9b7fcea219ded416c25b844e015png.jpg)  
这两个方法主要区别如下图，返回的数据是实体类型，还是map类型。  
**IPage.java:**  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/04c0a615e3544645c119a58392b9aa0bpng.jpg)

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/8152ec4a31cc3552561d85aae8a31c54png.jpg)

b、分页使用  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/55a1f6e245be5d58c84e812d1bb3c001png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0736222815b2dcb39cc92039d0592fc4png.jpg)  
分页map形式

![http://img4.sycdn.imooc.com/5fc312200001f80c13310319.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/f0a0d353734fa8f417f88215821a69eepng.jpg)  
![http://img2.sycdn.imooc.com/5fc312300001da3c14050474.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/968caf4627085c7cecec29e620e5913apng.jpg)

使用分页时，不查询总记录数：第三个参数为true表示查询总记录数，否则就不查询。  
**Page.class:**  
![http://img4.sycdn.imooc.com/5fc312990001183507360114.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/b8c1326d3e2ae831e024b2a367365a25png.jpg)  
![http://img4.sycdn.imooc.com/5fc312e2000187b513530335.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/ffd887c7f81a57b0734c2cce4478f18dpng.jpg)  
![http://img1.sycdn.imooc.com/5fc312ff0001e0d413860403.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5d6d9ee412ec863cca01631bb5f60db4png.jpg)

当分页查询查询的是多表时使用分页：  
![http://img1.sycdn.imooc.com/5fc31572000183c912680363.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0537658ce41823abd81e42c8980e7978png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/a966f23660293d1009a0e80c332fb912png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/fb482805d1b128634b8e5511a89cd489png.jpg)  
倘若需要多表联查，可以在xml文件里编写多表联查的SQL，一样可以实现其功能ヾ(◍°∇°◍)ﾉﾞ  
如：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/e8415938596af8f4bea345c71f3e3e64png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/821922c3b0988d5763040682565b4d04png.jpg)  
在xml里编写需要的多表查询语句即可。

### 七、更新与删除

#### 1、mybatis-plus更新

1、根据id更新

使用场景：根据实体类主键属性进行更新，其他属性有值就更新。

使用方法：如下  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/861295362194151019a455e0bcc945e0png.jpg)  
![http://img1.sycdn.imooc.com/5fc3825e0001e99a06450311.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/96e8133ed5599665e5db8a737fd05f58png.jpg)  
2、以条件构造器作为参数进行更新

使用场景：更新条件为其他时。

使用方法：如下  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0479daecef4a8040308bd331d0acb7bdpng.jpg)  
![http://img2.sycdn.imooc.com/5fc3827e00015b2c09570334.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/23df49526e9c1ea1a9731c734aa71798png.jpg)  
条件构造器传入实体时的使用（和QueryWrapper类似），它会将实体属性作为更新的条件。  
![http://img3.sycdn.imooc.com/5fc3829f0001b3e609050392.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/270321bcb43936a4da4b57b7fba07ebdpng.jpg)  
3、条件构造器中set方法使用

如果更新少量字段可使用如下方式：  
![http://img1.sycdn.imooc.com/5fc382e80001310913940247.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/38040b09375cb704c003371010013a8epng.jpg)

lambda方式更新：  
![http://img1.sycdn.imooc.com/5fc383140001864612030260.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/e4d8b4a92dca23a7054e3ef21dbf46bepng.jpg)  
通过构造器链进行直接更新：  
![http://img1.sycdn.imooc.com/5fc3833500017b1716720290.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/551eb1ce94adcb640f82bbfdb378ac6apng.jpg)

#### 2、mybatis-plus删除方法

1、根据id删除方法——deleteById(前提：实体类主键属性上有@TableId注解)  
![http://img4.sycdn.imooc.com/5fc64ceb0001da1c05620157.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/60465d1bcd01add33cd22c355707107bpng.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6e2ab9d18e79b771da68fdf0d5661784png.jpg)

2、普通删除方法  
![http://img1.sycdn.imooc.com/5fc64d920001ac6d05760260.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/024b9c662c75bd395a392cb441b0e03bpng.jpg)  
![http://img2.sycdn.imooc.com/5fc64d9a00013db708460172.jpg](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d7519310cff6a99b9e604f35c4d62ad7png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/ba701afc0d5932c3ebb4b679d33d5011png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/4a80144d68ce2fd93922d414c27e485cpng.jpg)

3、以条件构造器为参数删除方法  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/c610737e34ab082a8645d75d8808fc0epng.jpg)

### 八、AR模式、主键策略和基本配置

#### 1、ActiveRecord模式

**简介：活动记录，领域模型模式，直接通过实体操作数据库（java的一个实体类对应数据库的一张表，而一个实例对应表中一行记录）**

MP中AR模式的实现（两个前提：实体类需要继承Model；mapper接口实现BaseMapper）  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/42792accb03ed81f466ddcd3edb8b2ecpng.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/08447eae25c23cac5ae7e10cd638b4f4png.jpg)  
直接用实体即可操作数据库：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/e2c1fa2c99d8677871462f9c794f87e9png.jpg)  
insertOrUpdate():  
**如果实体的主键不是null，那么就会先查询，如果有记录就更新，没有就插入。是null直接进行插入。**  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/aa456643279066a79e67d4a5151e3b25png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1df47da089ff8b3e5863458921c86ca8png.jpg)

注意：如下图方法删除不存在的也返回true.  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/158eb11a3807271afe65ea0d7cfbb7efpng.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2ab853a85b5f5e76f81660404c880e8epng.jpg)  
**至于其他方法的使用介绍，可以查看Model.java源码٩(๑❛ᴗ❛๑)۶**

#### 2、主键策略

**mp的主键策略定义在了IdTyoe的枚举类中：（下面是源码）**  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0194487671f878daa05203705e9ff864png.jpg)![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5b0c5d2a13bcf9517e72a5639ce48973png.jpg)  
**局部策略：**  
在主键字段配置@TableId(type=IdType.AUTO)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/330a37293261a5e7915a84f2e523e057png.jpg)  
**全局策略：**  
在application.yaml配置中添加：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/472d0097f8da559d6ce0ecfe7a3d8301png.jpg)  
**注意：** 局部策略优于全局策略

#### 3、基本配置

可在查看**官网地址：**[https://mybatis.plus/](https://mybatis.plus/)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/797eaadb2dfdbc7572359d7a3be787dfpng.jpg)

### 九、通用的Service

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/315eb6180a46122ba44f34d57f7bf5a9png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7f51631460cb4a4bcbb7c4c981c46f4apng.jpg)  
**详情可查看IService.java的源码。**  
下面是部分方法的使用：

#### 1、基本方法

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/69e7317c2cbb96d1525699ce3a3afe4cpng.jpg)  
因为数据数大于1，所以默认返回第一条  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/227e41023a4750d709f8bd8db10db316png.jpg)

#### 2、批量操作操作

**不指定**  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/72f77508071ad33e547ead467165ecb3png.jpg)  
**指定**  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0c062934dd0afc83780554ee0d6b61acpng.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d3b36679636bdfef666919de76607d44png.jpg)

#### 3、链式调用方法

**查询：**  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/167dfafec5fe8d4a4d1e7ab6a60c9b52png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/bafaceb7488d0bc0021f4de17af3870fpng.jpg)  
**更新：**  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/db2f1a9fc5db736e357ea39bb2babb5cpng.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0e4461e41c35b5462a6513b901b61416png.jpg)  
**删除：**  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/819f96e1dafe90f6445b94a3279af654png.jpg)  
**关于MyBatis-Plus的详细快速入门的学习就到这里，Thanks♪(･ω･)ﾉ**