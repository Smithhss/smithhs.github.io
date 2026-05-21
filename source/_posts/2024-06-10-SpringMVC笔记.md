---
title: SpringMVC笔记
date: 2024-06-10 20:58:00
tags: SpringMVC
categories: Programming
cover: 'https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/springmvc.webp'
---

# 1.初识SpringMvc
## 1.1.Mvc
### 1.1.1.概述
* M(Model)：负责数据的处理操作
* V(View)：提供程序和用户之间交互的接口
* C(Controller)：控制请求的处理和跳转
### 1.1.2.Mvc框架可以做什么
* 将url映射成Java类或方法
* 封装请求数据
* 处理请求—调用相关处理方法—封装响应数据
* 对相应数据进行渲染。如：jsp、Html、fremarker
### 1.1.3.常见的Mvc框架
* 请求响应式：Struts1、Struts2、SpringMvc、Nutz
* 事件驱动：Jsf
## 1.2.Spring Mvc
### 1.2.1.概述
SpringMvc是一个轻量级的请求响应式的Mvc框架。SpringMvc严格遵守OCP(开闭)原则。Spring Mvc是Spring框架的一部分。
### 1.2.2.为什么要学SpringMvc
* 比早期的Struts框架具有更高的效率
* 简单、快捷
* 可以更好的和Spring进行无缝对接
* 支持restful风格的URL
* 支持国际化和本地化
* 更强大的异常处理功能
* 使用的人比较多(早期)，后期的基础
### 1.2.3.请求流程
1)请求流程
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/p5.png)
2)过程描述
* 客户端浏览器的请求将会发送给前端控制器(DispatcherServ let)
* 前端控制器通过请求映射器(Handler Mapping)解析URL
* 前端控制器通过请求处理适配器(Handler Adapter)执行Handl er
* 请求处理方法被调用并处理请求，处理结果以ModelAndView对象进行返回
* 前端控制器通过视图解析器处理ModelAndView响应结果，最终视图解析器将返回一个View给前端控制器
* 前端控制器对View进行渲染
* 响应请求
### 1.2.4.Spring Mvc的组件
1前端控制器(DispatcherServlet，SpringMvc提供的)
作用：接收请求，响应结果。在Spring Mvc体系结构中，他是一个中央处理器
2映射处理器(Hanlder Mapping，Spring Mvc提供的)
作用：根据URL请求解析对应的执行链
3处理适配器(Hanlder Adapter，SpringMvc提供的)
作用：按照规则执行Handler
4控制器(Controller，程序员编写的)
作用：处理用户的请求
5视图解析器(ViewResolver，Spring Mvc提供的)
作用：解析视图
6视图
作用：用户和代码之间交互的接口，主要实现数据的收集与展示
## 1.3.Hello Mvc
### 1.3.1.项目搭建
1创建项目
略
2依赖
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/p6.png)

### 1.3.2.配置Spring Mvc
```
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd">
    <!-- 配置Mapping-->
    <bean class="org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping" />

    <!--配置Adapter -->
    <bean class="org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter" />

    <!-- 配置视图解析器 -->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <!-- prefix：前缀，配置需要视图解析器进行解析的前缀(视图的目录) -->
        <property name="prefix" value="/WEB-INF/" />
        <!--suffix：后缀，配置视图的后缀名 -->
        <property name="suffix" value=".jsp" />
    </bean>
</beans>
```
### 1.3.3.配置前端控制器
```
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
         http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd" version="4.0">

    <!--
        配置前端控制器
            DispatcherServlet其实就是一个Servlet
    -->
    <servlet>
        <servlet-name>dispatcherServlet</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>

        <!--
            通过init-param指定Springmvc配置文件的位置
                配置文件一般默认存放在WEB-INF目录下，且文件命名要求为：【servlet-name】-servlet
                Spring Mvc允许通过Servlet的init-param重新指定配置文件的位置
        -->
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:springmvc-config.xml</param-value>
        </init-param>
    </servlet>

    <!--
        *.do表示过滤所有以.do结尾的请求
        .do的写法其实是Struts中的写法，实际应用一般配置为/
    -->
    <servlet-mapping>
        <servlet-name>dispatcherServlet</servlet-name>
        <url-pattern>*.do</url-pattern>
    </servlet-mapping>
</web-app>
```
### 1.3.4.创建Controller
```
/**
 * 创建一个Controller类(相当于之前的Servlet)
 */
public class HelloController implements Controller {
    /**
     * 请求处理方法
     *  相当于Servlet的service方法
     */
    @Override
    public ModelAndView handleRequest(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws Exception {
        System.out.println("hello spring mvc..............");

        //实例化ModelAndView对象
        ModelAndView mv = new ModelAndView("hello");
        //返回ModelAndView对象
        return mv;
    }
}
```
### 1.3.5.测试
1)实例化Controller
```
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd">
    <!-- 配置Mapping-->
    <bean class="org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping" />

    <!--配置Adapter -->
    <bean class="org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter" />

    <!-- 配置视图解析器 -->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <!-- prefix：前缀，配置需要视图解析器进行解析的前缀(视图的目录) -->
        <property name="prefix" value="/WEB-INF/" />
        <!--suffix：后缀，配置视图的后缀名 -->
        <property name="suffix" value=".jsp" />
    </bean>

    <!-- 实例化Controller对象-->
    <bean id="/hello.do" class="edu.shifan.controller.HelloController" />
</beans>
```
2)访问
http://localhost:8080/10_springmvc_hello_war_exploded/hello.do
## 1.4.说明
* SpringMvc的依赖相对较少
* 在配置文件中需要配置映射器和适配器
* Controller需要实现接口的handleRequest()方法
# 2.Spring Mvc与注解
## 2.1.项目搭建
### 2.1.1.创建项目
略
### 2.1.2.依赖
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/p6.png)


### 2.1.3.配置SpringMvc
```
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context.xsd">
    <!-- 配置前端控制器 -->
    <bean id="viewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/" />
        <property name="suffix" value=".jsp" />
    </bean>

    <!-- 开启注解扫描 -->
    <context:component-scan base-package="edu.shifan.controller" />
</beans>
2.1.4.配置前端控制器
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
         http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd" version="4.0">
    <!-- 配置前端控制器 -->
    <servlet>
        <servlet-name>dispatcherServlet</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>

        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:springmvc-config.xml</param-value>
        </init-param>
    </servlet>
    
    <servlet-mapping>
        <servlet-name>dispatcherServlet</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>

</web-app>
```
### 2.1.5.实现Controller
```
/**
 * 注解方式实现Controller
 */
@Controller
@RequestMapping("/user/")
public class UserController {
    /**
     * 请求处理方法
     */
    @RequestMapping("add")
    public ModelAndView add(){
        System.out.println("add() 方法被执行了.............");

        //创建ModelAndView对象
        //通过ModelAndView对象可以传递进行访问的视图名称
        //视图名称可以通过构造器进行传递，也可以通过set访问器进行传递
        //ModelAndView mv = new ModelAndView("add");
        ModelAndView mv = new ModelAndView();
        mv.setViewName("add");
        return mv;
    }

    /**
     * 请求处理方法
     * @return
     */
    @RequestMapping("update")
    public ModelAndView update(){
        System.out.println("update() 方法被执行了............");

        ModelAndView mv = new ModelAndView();
        return mv;
    }
}
```
## 2.2.测试
http://localhost:8080/02_springmvc_annotation_war_exploded/user/add

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/p7.png)

## 2.3.注解
* @Controller：表示被标注的类是一个控制器，实例加载到容器中
* @RequestMapping：可以在方法和类上进行使用。完成方法和URL之间的映射
## 2.4.说明
在SpringMvc中可以不配置任何的适配器和映射器，因为在依赖中存在一个DispatcherServlet.Properties文件。在该文件中配配置了所有的适配器和映射器。而且，DispatcherServlet会自动匹配所有合适的适配。
一般情况下需要配置<mvc:annotation-driver />来替代映射器和适配器。
## 2.5.特点
简单、方便、灵活




# SpringMVC
## SpringMVC概述
模型 视图 控制器

Java EE三层架构
在Java EE开发中，系统经典的三层架构包括**表现层**、**业务层**和**持久层**。三层架构中每一层各司其职，表现层 (Web层)负责接收客户端请求，并向客户端响应结果;业务层(Service层)负责业务逻辑处理，和项目需求息息相关;持久层(Dao层)负责和数据库交互，对数据库表进行增删改查。
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/p33.png)

> Spring MVC在表现层的作用
Spring MVC作用丰层架构中的表现层用于接收客户端的请求并进行响应。Spring MVC中包含了控制器和视图，控制器接收到客户端的请求后对请求数据进行解析和封装，接着将请求交给业务层处理。业务层会对请求进行处理，最后将处理结果返回给表现层。表现层接收到业务层的处理结果后，再由视图对处理结果进行渲染，渲染完成后响应给客户端。

## SpringMVC特点

> Spring MVC的特点
(1) Spring MVC是Spring框架的后续产品，可以方便地使用Spring框架所提供的其他功能。
(2) Spring MVC使用简单，很容易设计出干净简洁的Web层。
(3) Spring MVC支持各种请求资源的映射策略。
(4) Spring MVC具有非常灵活的数据验证、格式化和数据绑定机制，能使用任何对象进行数据绑定，不必实现特定框架的APl。

(5) Spring MVC支持国际化，可以根据用户区域显示多国语言。
(6) Spring Mvq支持多种视图技术扌它支持JSP、Velocity和FreeMarker等视图技术。
(7) Spring MVC灵活性强，易扩展。

## SpringMVC入门程序

接下来本节将通过一个简单的入门程序演示Spring MVC的使用。该程序要求在浏览器发起请求由Spring MVC接收请求并响应，具体实现步骤如下。
* STEP 01
  创建项目:在IDEA中，创建一个名称为chapter10的Maven Web项目。

在下面的步骤6中，“Web resource directory path:”输入框中可以设置项目webapp文件夹的路径。将路径中项目名称后的路径修改为“src\main\webapp”，然后单击“OK”按钮完成项目webapp文件夹路径的设置。单击“OK”按钮系统会回到步骤4所示的设置界面，在步骤4中单击右下角“OK”按钮。

需要注意的是，如果默认创建的Maven项目中没有自动生成webapp文件夹，可以在IDEA中进行设置。

引入Maven依赖:项目创建完成后，为保障项目的正常运行，需要导入项目所需
* STEP 02
  的依赖到项目的pom.xml文件中。
  <!-这里只展示了其中一个JAR包-->
<!--Spring核心类-->
<dependency>
<groupld>org.springframework</groupld><artifactld>spring-context</artifactld><version>5.2.8.RELEASE</version></dependency>
需要注意的是，要在IDEA中使用插件运行Maven项目，除了需要在pom.xml文件中配置对应的插件外，还需要在IDEA中进行项目运行的相关配置。

配置前端控制器: Spring MVC通过前端控制器拦截客户端的请求并进行转发
因
* STEP 03
  此在使用Spring MVC时，配置前端控制器是必不可少的一步。Spring MVC的前端控制器也是一个Servlet，可以在项目的web.xml文件中进行配置。

<servlet> <servlet-name>DispatcherServlet</servlet-name>
<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
<!--配置初始化参数，读取Spring MVC的配置文件--> <init-param><param-name>contextConfigLocation</param-name>
<param-value>classpath:spring-mvc.xml</param-value></init-param>
<load-on-startup>1</load-on-startup></servlet><servlet-mapping>
<servlet-name>DispatcherServlet</servlet-name><url-pattern>/</url-pattern>
</servlet-mapping>

配置处理器映射信息和视图解析器:在项目的resources文件夹下创建Spring MVC的配置文件spring-mvc.xml，用于配置处理器映射信息和视图解析器。

* STEP 04
<!--配置Spring MVC要扫描的包-->
<context:component-scan basepackage="com.itheima.controller" />
<!--配置视图解析器-->
<bean class=
"org.springframework.web.servlet.view.InternalResourceViewResolver">
<property name="prefix" value="/WEB-INF/pages/" />
<property name= "suffix" value=".jsp" />
</bean>

创建处理器:在项目的src/main/java目录下创建一个路径为com.itheima.controller的包。在包中创建处理器FirstController类，用于处理客户端的请求并指定响应时转跳的页面。
* STEP 05
  //设置当前类为处理器类
  @Controller
  public class FirstController {/设定当前方法的访问映射地址
  @RequestMapping(" /firstController")
  /设置当前方法返回值类型为String，用于指定请求完成后跳转的页面public String sayHello() {
  System.out.println("访问到FirstController!");//设定具体跳转的页面
  return "success";
  }

创建视图（View）页面:在项目的Web-INF文件夹下创建名称为page的文件夹并在page文件夹下创建名称为sucdess的jsp文件，用于对客户端请求进行处理后的视图展示。
* STEP 06
<html><body>
<h2>Spring MVC FirstController!</h2></body>
</html>

## SpringMVC工作原理
> Spring MVC三大组件—处理器映射器
处理器映射器可以理解为一个Map<URL,Hanlder>，HandlerMapping负责根据用户请求的URL找到Handler (处理器)，Spring MVC提供了不同的映射器来实现不同的映射方式。

## DispatcherServlet类
> DispatcherServlet作用
DispatcherServlet是Spring MVC的核心类，也是Spring MVC的流程控制中心，也称为Spring MVC的前端控制器，它可以拦截客户端的请求。拦截客户端请求之后，DispatcherServlet会根据具体规则将请求交给其他组件处理。所有请求都要经过DispatcherServlet进行转发处理，这样就降低了Spring MVC组件之间的耦合性。

> DispatcherServlet案例编写说明
DispatcherServlet的本质是一个Servlet，可以在web.xml文件中完成它的配置和映射。参考第10章Spring MVC入门程序，在IDEA中创建一个名称为chapter11的
Maven Web项目。需要注意的是，如无特殊说明，本章的所有案例都将在chapter11项目中开发和运行。项目创建完成之后，在项目web.xml文件中配置DispatcherServlet。

web.xml中对DispatcherServlet的配置分为两个方面。一是配置Spring MVC的前端控制器，二是配置映射的URL路径。
1.配置Spring MVC的前端控制器:
<servlet>
<servlet-name> DispatcherServlet</servlet-name><servlet-class>
org.springframework.web.servlet.DispatcherServlets -l、
</servlet-class>
<!--配置初始化参数，用于读取Spring MVC的配置文件-->
<init-param>
<param-name>contextConfigLocation</param-name><param-value>classpath:spring-mvc.xml</param-value></init-param>
<!--应用加载时创建--> <load-on-startup>1</load-on-startup></servlet>

2．配置映射的URL路径:
<servlet-mapping>
<servlet-name>DispatcherServlet</servlet-name><url-pattern>/</url-pattern>
</servlet-mapping>

> WEB-INF文件夹下默认配置文件命名规则
如果web.xml没有通过<init-param>元素指定DispatcherServlet初始化时要加载的文件，则应用程序会去WEB-INF文件夹下寻找并加载默认配置文件，默认配置文件的名称规则如下所示。
[servlet-name]-servlet.xml
其中，[servlet-name]指的是web.xml文件中<servlet-name>元素的值;“-servlet.xml”是配置文件名的固定拼接。

<load-on-startup>元素取值
<load-on-startup>元素取值分为三种情况:
1）如果<load-on-startup>元素的值为正整数或者0，表示在项目启动时就加载并初始化这个Servlet，值越小，Servlet的优先级越高，就越先被加载;
2）如果<load-on-startup>元素的值为负数或者没有设置，则Servlet会在被请求时加载和初始化;
3）如果<load-on-startup>元素的值为1，表明DispatcherServlet会在项目启动时加载并初始化。

## @Controller
> @Controller注解作用
在Spring MVC框架中，传统的处理器类需要直接或间接地实现Controller接口，这种方式需要在Spring MVC配置文件中定义请求和Controller的映射关系。当后台需要处理的请求较多时，使用传统的处理器类会比较繁琐，且灵活性低，对此，Spring MVC框架提供了@Controller注解。使用@Controller注解，只需要将@Controller注解标注在普通Java类上，然后通过Spring的扫描机制找到标注了该注解的Java类，该Java类就成为了SpringMVC的处理器类。

> Spring MVC配置文件的类包扫描配置信息
<beans xmIns="http://www.springframework.org/schema/beans"
xmIns:context="http://www.springframework.org/schema/context"xmIns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http:// www.springframework.org/schema/beanshttp://www.springframework.org/schema/beans/spring-beans.xsdhttp://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context.xsd">
<!--配置要扫描的类包-->
<context:component-scan base-package="com.itheima.controller" />
</beans>

> Spring扫描配置文件范围
Spring MVC的配置文件被加载时，Spring会自动扫描com.itheima.controller类包及其子包下的Java类。如果被扫描的Java类中带有@Controller、@Service等注解，则把这些类注册为Bean并存放在Spring中。
与传统的处理器类实现方式相比，使用@Controller注解的方式显然更加简单和灵活。因此，在实际开发中通常使用@Controller注解来定义处理器类。

## @RequestMapping注解的使用
> @RequestMapping注解作用
@RequestMapping注解用于建立请求URL和Handler(处理器）之间的映射关系，该注解可以标注在方法上和类上。下面分别对@RequestMapping注解的这两种使用方式进行介绍。

> 方式一 — 标注在方法上
当@RequestMapping注解标注在方法上时，该方法就成了一个可以处理客户端请求的Handler(处理器)，它会在Spring MVC接收到对应的URL请求时被执行。Handler在浏览器中对应的访问地址，由项目访问路径+处理方法的映射路径共同组成。

接下来通过一个案例演示@RequestMapping注解标注在方法上的使用。
* STEP 01
  在chapter11项目的src/main/java目录下创建类包com.itheima.controller，并在类包下创建FirstController类。在类中创建sayHello()方法，用来处理客户端请求.package cpm.itheima.controller;
  import org.springframework.stereotype.Controller;
  import org.springframework.web.bind.annotation.RequestMapping;@Controller
  public class FirstController {
  @RequestMapping(value=" /firstController")public void sayHello{
  System.out.printIn("hello Spring MVC");
  }
  }

启动项目，在浏览器中访问http://localhost:8080/chapter11/firstController，控制台打印输出信息。
* STEP 02
  由运行结果可知，sayHello()方法被成功执行，说明
  @RequestMapping注解标注在方法上时，成功建立了请求URL和处理请求方法之间的对应关系。

方式二—标注在类上
当@RequestMapping注解标注在类上时，@RequestMapping的value属性值相当于本处理器类的命名空间，即访问该处理器类下的任意处理器都需要带上这个命名空间。@RequestMapping标注在类上时，其value属性值作为请求URL的第一级访问目录。当处理器类和处理器都使用@RequestMapping注解指定了对应的映射路径，处理器在浏览器中的访问地址，由项目访问路径+处理器类的映射路径+处理器的映射路径共同组成。

* STEP 01
  接下来通过一个案例演示@RequestMapping注解标注在类上的使用。
  import org.springframework.stereotype.Controller;
  import org.springframework.web.bind.annotation.RequestMapping;@Controller
  @RequestMapping(value=" /springMVC")public class FirstController {
  RequestMapping(value=" /firstController")public void sayHello(){
  System.out.println("hello Spring MVC");}
  }

启动项目，在浏览器中访问http://localhost:8080/chapter11/springMVC/firstController，控制台打印输出信息。
* STEP 02
  由运行结果可知， sayHello()方法被成功执行，说明
  @RequestMapping注解标注在类上时，成功建立了请求URL和处理请求类之间的对应关系。
## @RequestMapping注解的属性
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/p34.png)

> value属性的两种映射路径标注
value属性是@RequestMapping注解的默认属性。当value属性是@RequestMapping注解显式使用的唯一属性时，可以省略value的属性名。例如，下面两种映射路径标注的含义相同。

@RequestMapping(value=" /firstController")
RequestMapping(" /firstController")

使用value属性时，可以指定映射单个的请求URL，也可以将多个请求映射到一个方法上。在value属性中添加一个带有请求路径的列表，就可以将这个请求列表中的路径都映射到对应的方法上。
@Controller
public class AuthController {
//设定当前方法的访问映射地址列表
RequestMapping(value = " /addUser" ," /deleteUser")
public void checkAuth(){
System.out.println("增删操作校验");}
}


启动项目，在浏览器中访问地址http://localhost:8080/chapter11/addUser，控制台打印输出信息。

在浏览器中访问地址http://localhost:8080/chapter11/deleteUser，控制台打印输出信息。

> method属性限定处理器映射
method属性可以对处理器映射的URL请求方式进行限定。当请求的URL和处理器映射成功，但请求方式和method属性指定的属性值不匹配，处理器也不能正常处理请求。

* STEP 01
  接下来通过一个案例演示method属性中HTTP请求类型的声明。
  @Controller
  @RequestMapping(" /method")
  public class MethodController
  /只展示了处理请求方式为GET的请求，get()方法RequestMapping(method = RequestMethod.GET)public void get() {
  System.out.printIn("RequestMethod.GET");
  }
  //处理请求方式为DELETE的请求，delete()方法
  //处理请求方式为POST的请求,post()方法//处理请求方式为PUT的请求，put()方法

启动项目后，在客户端依次以GET方式、DELETE方式、POST方式和PUT方式请求
* STEP 02
  访问http://localhost:8080/chapter11/method时，程序会分别执行文件中的get()方法、delete()方法、post()方法和put()方法，控制台打印输出信息。

method属性中有多个HTTP请求类型
如果需要同时支持多个请求方式，则需要将请求方式列表存放在英文大括号中，以数组的形式给method属性赋值，并且多个请求方式之间用英文逗号分隔，示例代码如下所示。
@RequestMapping(value = "/method",
method = {RequestMethod.GET,RequestMethod.POST})
public void getAndPost() {
System.out.println("RequestMethod.GET+RequestMethod.POST");
}

params属性值的定义方式
params属性中定义的值可以将请求映射的定位范围缩小。当客户端进行请求时，如果请求参数的值等于params属性定义的值，可以正常执行所映射到的方法，否则映射到的方法不执行。
@Controller
public class ParamsController
@RequestMapping(value = " /params",params = "id=1")public void findByld(String id) {
System.out.printIn("id="+id);}

## 请求映射方式
> 请求映射方式的分类
基于注解风格的Spring MVC，通过@RequestMapping主解指定请求映射的URl路径。URL路径映射常用的方式有基于请求方式的URL路径映射、基于Ant风格的URL路径映射和基于REST风格的URL路径映射。接下来分别对这三种请求映射方式进行详细讲解。

> a.基于请求方式的URL路径映射
上一节中学习到可以使用@RequestMapping注解的method属性，来限定当前方法匹配哪种类型的请求方式。除了可以使用@RequestMapping注解来限定客户端的请求方式之外，从Spring 4.3版本开始，还可以使用组合注解完成客户端请求方式的限定。组合注解简化了常用的HTTP请求方式的映射，并且更好的表达了被注解方法的语义。

* Spring MVC组合注解
  @GetMapping:匹配GET方式的请求。
  @PostMapping:匹配POST方式的请求。
  @PutMapping:匹配PUT方式的请求。
  @DeleteMapping:匹配DELETE方式的请求。
  @PatchMapping:匹配PATCH方式的请求。

@GetMapping用法示例
接下来以@GetMapping为例讲解组合注解的用法，@GetMapping是
@RequestMapping(method = RequestMethod.GET)的缩写，使用组合注解替代@RequestMapping注解，可以省略method属性，从而简化代码。@GetMapping用法示例代码如下所示。
@GetMapping(value=" /firstController")
public void sayHelloo{
}

> b.基于Ant风格的URL路径映射
Spring MVC支持Ant风格的URL路径映射，所谓Ant风格其实就是一种通配符风格，可以在处理器映射路径中使用通配符对访问的URL路径进行关联。Ant风格的通配符有以下3种，分别是:?匹配任何单字符;*匹配0或者任意数量的字符;**匹配0或者多级目录。
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/p35.png)

映射路径使用多个通配符情况
当映射路径中同时使用多个通配符时，会有通配符冲突的情况。当多个通配符冲突时，路径会遵守最长匹配原则（has more characters）去匹配通配符，如果一个请求路径同时满足两个或多个Ant风格的映射路径匹配规则，那么请求路径最终会匹配满足规则.字符最多的路径。例如，y/ant/a/path同时满足/**/path和/ant/*/path匹配规则，但/ant/a/path最终会匹配“/ant/*/path”路径。

> c.基于RESTful风格的URL路径映射
RESTful是按照REST风格访问网络资源，简单说RESTful就是把请求参数变成请求路径的一种风格。而REST (Representational State Transfer)是一种网络资源的访问风格，规范对了网络资源的访问方式。REST所访问的网络资源可以是一段文本、一首歌曲、一种服务，总之是一个具体的存在。每个网络资源都有一个URI指向它，要获取这个资源，访问它的URI就可以，因此URI即为每一个资源的独一无二的标识符。

> 传统风格与RESTful风格访问URL格式的不同

传统风格访问的URL格式如下所示。
http:// .../findUserByld?id=1
而采用RESTful风格后，其访问的URL格式如下所示。
http:// ../user/id/1
需要注意的是，RESTful风格中的URL不使用动词形式的路径，例如，findUserByld表示查询用户，是一个动词，而user表示用户，为名词。

> RESTful风格的基本请求操作
RESTful风格在HTTP请求中，通过GET 、POST、PUT和DELETE 4个动词对应四种基本请求操作，具体如下所示。
.GET用于获取资源. POST用于新建资源. PUT用于更新资源. DELETE用于删除资源

## 数据绑定
> 数据绑定的概念
在程序运行时，Spring MVC接收到客户端的请求后，会根据客户端请求的参数和请求头等数据信息，将参数以特定的方式转换并绑定到处理器的形参中。Spring MVC中将请求消息数据与处理器的形参建立连接的过程就是Spring MVC的数据绑定。

> Spring MVC数据绑定中的信息处理过程
Spring MVC数据绑定中的信息处理过程的步骤描述如下。
(1) Spring MVC将ServletRequest对象传递给DataBinder。
(2）将处理方法的入参对象传递给DrtaBinder。
(3)DataBinder调用ConversionService组件进行数据类型转换、数据格式化等工作，并将ServletRequest对象中的消息填充到参数对象中。
(4）调用Validator组件对已经绑定了请求消息数据的参数对象进行数据合法性校验。
(5）校验完成后会生成数据绑定结果BindingResult对象，Spring MVC会将BindingResult对象中的内容赋给处理方法的相应参数。

## 默认类型数据绑定
Spring MVC常见的默认类型
当使用Spring MVC默认支持的数据类型作为处理器的形参类型时，Spring MVC的参数处理适配器会默认识别这些类型并进行赋值。Spring MVC常见的默认类型如下所示。

HttpServletRequest:通过request对象获取请求信息。
HttpServletResponse:通过response处理响应信息。
HttpSession:通过session对象得到session中存放的对象。
Model/ModelMap: Model是一个接口，ModelMap是一个类，Model的实现类对象和ModelMap对象都可以设置model数据，model数据会填充到request域。

下面通过案例演示默认类型的数据绑定，该案例要求实现一个HttpServletRequest类型的数据绑定，案例具体实现步骤如下所示。
* STEP 01
  在IDEA中，创建一个名称为chapter12的Maven Web项目，并参照第10章Spring MVC入门程序的项目搭建，在项目的pom.xml中引入Spring MVC的相关依赖，并在Spring MVC的配置文件spring-mvc.xml中完成相关配置。需要注意的是，如无特殊说明，本章节的所有案例都将在chapter12项目中开发和运行。chapter12项目的初始目录结构和文件组成如图所示。

chapter12项目的Src\mainyava目录卜创建路径名称为com.ithelma.controller的类包，在类包中创建处理器类UserController，在UserController类中定义方法getUserld( )，用于获取客户端请求中userid参数的值。
* STEP 02
  @Controller
  public class UserController
  @RequestMapping("/getUserld")
  public void getUserld(HttpServletRequest request){
  String userid= request.getParameter("userid");
  System.out.printIn("userid="+userid);
  }


* STEP 03
  启动chapter12项目，在浏览器中携带参数访问地址http://localhost:8080/chapter12/getUserld?userid=1。访问后，控制台打印信息如图所示。

## 简单数据类型绑定
> 简单数据类型绑定的概念
简单数据类型的绑定，就是指Java中基本类型(如int、double、String等)的数据绑定。在Spring MVC中进行简单类型的数据绑定，只需客户端请求参数的名称和处理器的形参名称一致即可，请求参数会自动映射并匹配到处理器的形参完成数据绑定。

下面通过案例演示简单数据类型的数据绑定，该案例要求实现Integer类型和String类型的数据绑定案例具体实现步骤如下所示。
* STEP 01
  修改l4serController.java文件，在UserController类中新增getUserNameAndld( )方法，用来接收客户端请求中的参数。

@RequestMapping("/getUserNameAndld")
public void getUserNameAndld(String username,Integer id){
System.out.printIn(" username="+username+",
id="+id);
}

* STEP 02
  启动chapter12项目，在浏览器中访问地址http://localhost:8080/chapter12/getUserNameAndld?username=Spring&id=1，访问后，控制台打印信息如图所示。

> 参数别名的设置
需要注意的是，有时候客户端请求中参数名称和处理器的形参名称不一致，这就会导致处理器无法正确绑定并接收到客户端请求中的参数。为此，Spring MVC提供了@RequestParam注解来定义参数的别名，完成请求参数名称和处理器的形参名称不一致时的数据绑定。
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/p36.png)

> @RequestParam注解的使用
假设浏览器中的请求地址为http://localhost:8080/chapter12/getUserName?name=Spring，可以在getUserName()方法中使用@RequestParam注解标注参数。

@RequestMapping("/getUserName")
public void getUserName(@RequestParam(value="name",required = false,defaultValue = "itheima") String username)
System.out.println("username="+username);

上述代码中，@RequestParam注解的value属性，给getUserName()方法中的username形参定义了别名name。此时，客户端请求中名称为name的参数，就会绑定到getUserName()方法中的
username形参上。@RequestParam注解的required属性设定了请求的name参数不是必须的，如果访问时没有携带name参数，会将defaultValue属性设定的值赋给形参username。

@PathVariable注解的两个常用属性
当请求的映射方式是REST风格时，上述对简单类型数据绑定的方式就不适用了。为此，Spring MVC提供了@PathVariable注解，通过@PathVariable注解可以将URL中占位符参数绑定到处理器的形参中。@PathVariable注解有以下两个常用属性。
value:用于指定URL中占位符名称。
required:是否必须提供占位符，默认值为true。

@PathVariable注解的使用
在UserController.java类中新增一个处理方法getPathVariable( )，在该方法中使用@PathVariable注解进行数据绑定，具体代码如下所示。
@RequestMapping("/user/{name}")
public void getPathVariable(@PathVariable(value = "name")String username){
System.out.println("username="+username);
上述代码中，通过@PathVariable注解的value属性将占位符参数“name”和处理方法的参数username进行绑定。}

@RequestParam注解value属性可省略的情况
启动chapter12项目，在浏览器中访问地址http://localhost:8080/chapter12/user/Spring，访问后，控制台打印信息如图所示。

从运行结果的打印信息可以看出，控制台打印出了username的值为Spring。这表明访问地址后执行了getPathVariable()方法，@PathVariable注解成功将请求URL中的变量user映射到了方法的形参username上。如果请求路径中占位符的参数名称和方法形参名称一致，那么@PathVariable注解的value属性可以省略。

## POJO绑定
POJO数据绑定的使用场景
在使用简单数据类型绑定时，可以很容易的根据具体需求来定义方法中的形参类型和个数，然而在实际应用中，客户端请求可能会传递多个不同类型的参数数据，如果还使用简单数据类型进行绑定，那么就需要手动编写多个不同类型的参数，这种操作显然比较繁琐。为解决这个问题，可以使用POJO类型进行数据绑定。

POJO数据绑定的概念
POJO类型的数据绑定就是将所有关联的请求参数封装在一个POJO中，然后在方法中直接使用该POJO作为形参来完成数据绑定。

下面通过用户注册案例演示POJO的数据绑定，该案例要求表单提交的数据绑定在处理器User类型的形参中，案例具体实现步骤如下所示。
* STEP 01
  在项目的src\main\java目录下，创建一个com.itheima.pojo包，在该包下创建一个User类用于封装用户信息。
  public class User {
  private String username;
  //用户名
  private String password;
  //用户密码
  省略getter/setter方法}

* STEP 02
  在UserController.java类中，定义registerUser()方法用于接收用户注册信息。
  /接收表单用户信息
  @RequestMapping(" /registerUser")public void registerUser(User user) {
  String username = user.getUsername();String password = user.getPassword();
  System.out.printIn("username="+username+ ",password="
  +password);}

在src\main\webapp目录下，创建register.jsp文件，在register.jsp中编写用户注册表单。
* STEP 03

[//]: # (<html><head>)

[//]: # (<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"><title>注册</title></head>)

[//]: # (<body> <formaction = "${pageContext.request.contextPath}/registerUser"method="post">)

[//]: # (用户名: <input type="text" name="username" /><br />密&nbsp;&nbsp;&nbsp;码: <input type="password")

[//]: # (name="password" /><br /><input type="submit" value="注册"/></form>)

[//]: # (</body>)

[//]: # (</html>)

* STEP 04
  启动chapter12项目，在浏览器中访问register.jsp页面，访问地址为http://localhost:8080/chapter12/register.jsp。register.jsp页面显示效果如图所示。

在register.jsp所示页面的表单中，分别填写注册的用户名为“heima”，密码为“123”，然后单击“注册”按钮即可完成注册数据的提交。当单击“注册”按钮后，控制台打印信息如图所示。
* STEP 05
  从图中可以看出，程序成功打印出了用户名和密码。这表明registerUser()方法获取到了客户端请求中的参数username和参数password的值，并将username和password的值分别赋给了
  getUserNameAndld()方法中user形参的username属性和password属性，实现了POJO数据绑定。

> 解决请求参数中的中文乱码问题
为了防止客户端传入的中文数据出现乱码，可以使用Spring提供的编码过滤器来统一编码。要使用编码过滤器，只需要在web.xml中添加如下代码。
<filter> <filter-name>CharacterEncodingFilter</filter-name>
<filter-class> org.springframework.web.filter.CharacterEncodingFilter</filter-class>
<init-param><param-name>encoding</param-name>
<param-value>UTF-8</param-value></init-param></filter><filter-mapping>
<filter-name>CharacterEncodingFilter</filter-name><url-pattern>/*</url-pattern>
</filter-mapping>

## 自定义类型转换器
> 自定义类型转换器使用场景
Spring MVC默认提供了一些常用的类型转换器，这些类型转换器，可以将客户端提交的参数自动转换为处理器形参类型的数据。然而默认类型转换器并不能将提交的参数转换为所有的类型。此时，就需要开发者自定义类型转换器，来将参数转换为程序所需要的类型。

> Converter接口的使用
Spring框架提供了org.springframework.core.convert.converter.Converter接口作为类型转换器，开发者可以通过实现Converter接口来自定义类型转换器。Converter接口的代码如下所示。
public interface Converter<S,T>
T convert(S source);
在上述代码中，泛型参数中的S表示源类型，T表示目标类型，而convert()方法将源类型转换为目标类型返回，方法内的具体转换规则可由开发者自行定义。

下面通过案例演示自定义类型转换器转换特殊数据类型并完成数据绑定，该案例要求实现Date类型的数据绑定，案例具体实现步骤如下所示。
在项目chapter12的src/main/java目录下，创建com.itheima.convert包，在该包下创建DateConverter类，并在类中定义convert()方法，实现String类型转到Date类型的转换。
* STEP 01

public class DateConverter implements Converter<String, Date> {
private String datePattern = “yyyy-MM-dd";//定义日期格式Override
public Date convert(String source){
SimpleDateFormat sdf = new SimpleDateFormat(datePattern);try {
return sdf.parse(source);
} catch (Exception e) {
throw new lllegalArgumentException(
“无效的日期格式，请使用这种格式:"+datePattern); }
}


为了让Spring MVC知道并使用DateConverter转换器类，还需要在配置文件spring-mvc.xml中配置类型转换器。
* STEP 02
<!--配置创建spring容器要扫描的包-->
<context:component-scan basepackage="com.itheima.controller" /><!--配置视图解析器--><bean class=
"org.springframework.web.servlet.view.InternalResourceViewResolver">
<property name="prefix" value="/WEB-INF/pages/" />
<property name="suffix"value=".jsp"/>
</bean><!--配置类型转换器工厂--><bean id="converterService" class="org.springframework.context.support.ConversionServiceFactoryBean">
<!--给工厂注入一个新的类型转换器，配置自定义类型转换器-->



> 配置类型转换器工厂或配置格式化工厂
要将自定义类型转换器注册到程序中，除了可以将自定义转换器配置在类型转换器工厂ConversionServiceFactoryBean中，也可以将自定义转换器配置在格式化工厂org.springframework.format.support.FormattingConversionServiceFactoryBean中，通过格式化工厂对数据格式化。

在UserController.java类中定义方法getBirthday()，用于绑定客户端请求中的日期数据，getBirthday()方法代码如下所示。
* STEP 03
  /**
  *使用自定义类型数据绑定日期数据*/
  @RequestMapping(" /getBirthday")
  public void getBirthday(Date birthday){
  System.out.printIn(" birthday=" + birthday);
  }

## 数组绑定
> 数组绑定的使用场景
在实际开发中，可能会遇到客户端请求需要传递多个同名参数到服务器端的情况，这种情况采用前面讲解的简单数据绑定的方式显然是不合适的。此时，可以使用数组来接收客户端的请求参数，完成数据绑定。

接下来通过一个批量提交商品的案例来演示数组的数据绑定，具体实现步骤如下所示。
在chapter12项目的com.itheima.pojo包下创建一个商品类Product,用于封装商品信息。Product类的具体代码如下所示。
* STEP 01
  package com.itheima.pojo;
  public class Product {
  private String prold;
  //商品id
  private String proName;
  //商品名称
  省略getter/setter方法
  }

在项目的src\main\webapp目录下，创建一个提交商品页面products.jsp，在products.jsp中创建一个展示商品列表的表单，表单提交时向服务器端发送商品列表的所有id。products.jsp的具体代码如下所示。

* STEP 02
  <%@page language=""java" contentType="text/html; charset=UTF-8""
  pageEncoding="UTF-8"%>
<html> <head> <title>提交商品</title></head><body>
<form action="${pageContext.request.contextPath }/getProducts"method="post">
<input name="prolds" value="3" type="checkbox"></td><td>SSM框架实战</td></tr></table>
<input type="submit" value="提交商品"/></form></body></html>

在com.itheima.controller包中创建一个商品处理器类ProductController，在ProductController类中定义getProducts()方法，用于接收表单提交的商品id。ProductController类的具体代码如下所示。
* STEP 03
  @Controller
  public class ProductController
  /获取商品列表
  @RequestMapping(" /getProducts")
  public void getProducts(String[]prolds){
  for (String prold : prolds){
  System.out.println("获取到了ld为"+prold+"的商品");}
  }

## 集合绑定
> 集合绑定的使用
集合中存储简单类型数据时，数据的绑定规则和数组的绑定规则相似，需要请求参数名称与处理器的形参名称保持一致。不同的是，使用集合绑定时，处理器的形参名称需要使用@RequestParam注解标注。

接下来使用集合数据绑定来批量提交商品案例，具体实现步骤如下所示。
* STEP 01
  修改ProductControllerjava类的getProducts()方法，让getProducts()方法使用
  List类型来接受客户端的请求参数，修改后getProducts( )方法的具体代码如下所示。

获取商品列表(使用List绑定数据)RequestMapping(" /getProducts")
,public void getProducts(@RequestParam(" prolds")
List<String>prolds{
for (String prold : prolds){
System.out.println("获取到了ld为"+prold+"的商品");}
}

## 复杂POJO绑定一属性为对象类型的数据绑定
> 复杂POJO数组绑定的使用场景
使用简单POJO类型已经可以完成多数的数据绑定，但有时客户端请求中传递的参数比较复杂。例如，在用户查询订单时，页面传递的参数可能包括订单编号、用户名称等信息，这就包含了订单和用户两个对象的信息。如果将订单和用户的所有查询条件都封装在一个简单POJO中，显然会比较混乱，这时可以考虑使用复杂POJO类型的数据绑定。

> 复杂POJO的3种属性的类型
所谓的复杂POJO，就是POJO属性的类型不止包含简单数据类型扌还包含对象类型、List类型和Map类型等其他引用类型。接下来分别对复杂POJO中属性为对象类型的数据绑定、属性为List类型的数据绑定和属性为Map类型的数据绑定进行讲解。

属性为对象类型的数据绑定
* STEP 01
  下面通过一个获取用户订单信息的案例，演示复杂POJO中对象类型的数据绑定，案例具体实现步骤如下。在com.itheima.pojo包中创建一个订单类Order，用于封装订单信息，Order类的具体代码如下所示。
  public class Order {
  private String orderld;
  //订单id
  //省略getter/setter方法}

修改User.java类，在User类中新增Order类型的属性order，并定义相应的getter和setter方法。修改后User类的具体代码如下所示。
* STEP 02
  public class User {
  private String username;
  //用户名
  private String password;
  //用户密码
  private Order order;
  //订单
  省略getter/setter方法
  }

在UserController.java类中定义方法findOrderWithUser( )，用于获取客户端请求中的User信息，findOrderWithUser()方法的具体代码如下所示。
* STEP 03
  @RequestMapping(" /findOrderWithUser")
  public void findOrderWithUser(User user){
  String username = user.getUsername();
  String orderld = user.getOrder(.getOrderld);System.out.println("username="+username+",orderld="+orderld);
  }

在项目的src\main\webapp目录下，创建一个订单信息文件order.jsp，在orderjsp文件中创建一个表单，表单中包含用户名和订单编号。表单提交时将用户名和订单编号信息发送到处理器。order.jsp的具体代码如下所示。
* STEP 04
  <%@page language="java” contentType="text/html;
  charset=UTF-8" pageEncoding="UTF-8"%>


> 复杂POJO数组绑定的格式
在复杂POJO数据绑定时，如果数据需要绑定到POJO属性对象的属性中，客户端请求的参数名（本例中指form表单内各元素name的属性值）的格式必须为“属性对象名称.属性”，其中“属性对象名称”要和POJO的属性对象名称一致，“属性”要和属性对象所属类的属性一致。

## 复杂POJO绑定一属性为List类型的数据绑定
属性为List类型的数据绑定
一般订单业务中，用户和订单基本都是一对多的映射关系，即用户的订单属性使用集合类型。接下来通过一个获取用户订单信息的例子，演示复杂POJO中属性为List类型的数据绑定，案例具体实现步骤如下。修改User.java类，将User类中订单属性修改为List类型。由于用户一般拥有多个收货地址，在User类中新增List类型的
STEP 01
public class User {
private String username;
//用户名
private String password;
//用户密码
private List<Order> orders;
//用户订单
private List<String> address;
//订单地址
/省略getter/setter方法
}

在com.itheima.controller包中创建一个订单处理器类OrderController，在OrderController类中定义showOrders()方法，用于展示用户的订单信息。OrderController类的具体代码如下所示。
* STEP 02
  Controller
  public class OrderController
  // 获取用户中的订单信息@RequestMapping(" /showOrders")
  public void showOrders(User user)
  List<Order> orders = user.getOrders();List<String> addressList = user.getAddress);System.out.println("订单:");for (int i = 0; i <orders.size() ; i++){
  Order order = orders.get(i);
  String address = addressList.get(i);
  System.out.println("订单ld:" +order.getOrderldO);System.out.printIn("订单配送地址: "+address);}
  }

在项目的src\main\webapp目录下，创建一个订单信息文件orders.jsp，在orders.jsp中创建一个表单用于提交用户的订单信息。表单提交时，表单数据分别封装到User的订单属性orders和地址属性address中。orders.jsp的具体代码如下所示。
* STEP 03
  <%@page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8" %><html><head><title>订单信息</title></head><body><form action="${pageContext.request.contextPath }/showOrders"method="post"><table width="220px" borde="1"><!--下面只展示一条数据-->
<tr><td>订单号</td><td>订单名称</td><td>配送地址</td></tr>
<tr><td><input name="orders[0].orderld" value="1" type="text"></td>
<td><input name="orders[0].orderName" value="Java基础教程"type="text"></td><td><input name="address" value="北京海淀" type="text"></td></tr></table><input type="submit" value="订单信息"/></form> </body> </html>

* STEP 05
  在orders.jsp显示效果图所示的页面中，单击左下角“订单信息”按钮，orders.jsp表单中的订单信息发送到服务器端的showOrders()方法进行处理，控制台打印信息如图所示。

> 复杂POJO数组绑定的编写要求
在复杂POJO数据绑定时，如果数据绑定到List类型的属性，客户端请求的参数名称（本例中指form表单内各元素name的属性值）编写必须符合以下要求。
①如果List的泛型为简单类型，则客户端参数名称必须和POJO类中List属性所属类中的属性名称保持一致。
②如果List的泛型参数为对象类型，则客户端参数名称必须与POJO类的层次结构名称保持一致，并使用数组格式描述对象在List中的位置，即客户端参数名称必须和最终绑定在List中的某个对象的某个属性的名称保持一致。

## 复杂POJO绑定一属性为Map类型的数据绑定
属性为Map类型的数据绑定
* STEP 01
  接下来，通过一个获取订单信息的案例，演示复杂POJO中属性为Map类型的数据绑定，具体实现如下。修改Order.java类，在Order类中新增HashMap类型的属性productInfo，用于封装订单中的商品信息，其中productInfo的键用来存放商品的类别，productInfo的值用来存放商品类别对应的商品。
  public class Order {
  private String orderld;
  //订单id
  private HashMap<String,Product> productlnfo;//商品信息
  }

修改OrderController.java类，在OrderController类中新增getOrderlr用于获取客户端提交的订单信息，并将获取到的订单信息打印在控制台。getOrderlnfo()方法的具体代码如下所示。
* STEP 02
  RequestMapping(" /orderInfo")
  public void getOrderlnfo(Order order){String orderld = order.getOrderld();
  //获取订单id
  //获取商品信息
  HashMap<String,Product> orderInfo = order.getProductInfo0;Set<String> keys = orderlnfo.keySet();
  System.out.printIn("订单id:"+orderld);
  System.out.println("订单商品信息:");
  for (String key : keys){ Product product = orderlnfo.get(key);
  String prold = product.getProld();String proName = product.getProName();System.out.printIn( key+"类~"+"商品id:" + prold+",商品名称: "+ proName);}
  }

在项目的src\main\webapp目录下，创建一个订单信息页面order_infcorder_info.jsp中创建一个表单用于提交订单信息。表单提交时，表单数据分别封装到Order的orderld属性和商品信息属性productlnfo中。
* STEP 03

<!--只展示了form表单的内容，和一条标签内容-->
<form action="${pageContext.request.contextPath}/orderlnfo" method="post"><table borde="1"><tr> <td colspan="2">
订单id:<input type="text" name="orderld" value="1"></td></tr><tr> <td>商品ld</td> <td>商品名称</td></tr>
<tr><td><input name="productInfo['生鲜'].prold" value="1"type="text"></td>
<td><input name="productInfo['生鲜'].proName" value="三文鱼" type="text"></td></tr><tr></tr></table>
<input type="submit"value="提交" /></form>

## JSON数据绑定
> 消息转换器—HttpMessageConverter接口
客户端不同的请求，HttpServletRequest中数据的MediaType可能会不同，如果想将HttpServletRequest中的数据转换成指定对象，或者将对象转换成指定格式的数据，就需要使用对应的消息转换器来实现。Spring中提供了一个
HttpMessageConverter接口作为消息转换器。因为数据的类型有多种，所以Spring中提供了多个HttpMessageConverter接口的实现类，其中
MappingJackson2HttpMessageConverter是HttpMessageConverter接口的实现类之一，在处理请求时，可以将请求的JSON报文绑定到处理器的形参对象，在响应请求时，将处理器的返回值转换成JSON报文。

> HttpMessageConverter与Converter类型转换器的区别
需要注意的是，HttpMessageConverter消息转换器和之前所学习的Converter类型转换器是有区别的。HttpMessageConverter消息转换器用于将请求消息中的报文数据转换成指定对象，或者将对象转换成指定格式的报文进行响应;Converter类型转换器用于对象之间的类型转换。

接下来通过一个异步提交商品信息案例，演示Spring MVC中的JSON数据绑定，案例具体实现步骤如下。在项目的pom.xml文件中导入Jackson的依赖。使用MappingJackson2HttpMessageConverter对JSON数据进行转换和绑定，需要导入Jackson JSON转换核心包、JSON转换的数据绑定包和JSON转换注解包的相关依赖。
* STEP 01
<!--Jackson转换核心包依赖-->
<dependency>
<groupld>com.fasterxml.jackson.core</groupld><artifactld>jackson-core</artifactld>
<version>2.9.2</version>
</dependency>
<!--Jackson转换的数据绑定包依赖，省略--><!--Jackson JSON转换注解包，省略-->

* STEP 02
  在项目中导入jQuery文件。
  由于本次演示的是异步数据提交，需要使用jQuery，所以需要将jQuery文件导入到项目中，以便发送ajax请求。在项目的/webapp文件夹下创建名称为js的文件夹，在js文件夹中导入jQuery文件。

在项目的src\main\webapp目录下，创建一个商品信息页面product.jsp，在product.jsp中创建一个表单用于填写商品信息，表单提交时，表单发送异步请求将表单的商品信息发送到处理器。product.jsp的部分代码如下所示。
* STEP 03
<script type="text/javascript">
function sumbmitProduct() {
}

</script>

修改ProductController.java类，在ProductController类电新增getProduct()方法和getProductList()方法，分别用于获取客户端提交的单个商品信息和多个商品信息。由于客户端发送的是JSON格式的数据，此时，在处理器中无法直接使用方法形参接收数据，完成数据的自动绑定。对此，可以使用Spring MVC提供的@RequestBody注解。
* STEP 04
  /**
  只展示了个体Product()方法，获取单个商品信息*/
  RequestMapping("/getProduct")
  public void getProduct(@RequestBody Product product) {String prold = product.getProld();
  String proName = product.getProName();
  System.out.println("获取到了ld为"+prold+"名称为"+ proName+"的商品");

在项目的web.xml文件中配置的DispatcherServlet会拦截所有URL，导致项目中的静态资源如css、jsp、js等）也被DispatcherServlet拦截。如果想放行静态资源,可以在Spring MVC的配置文件中进行静态资源配置。Spring MVC配置文件的部分配置代码如下所示。
* STEP 05
<!-- 配置要扫描的包-->
<context:component-scan base-package="com.itheima.controller" /><!--配置视图解析器--><bean class=
"org.springframework.web.servlet.view.InternalResourceViewResolver">
<property name="prefix"value="/WEB-INF/pages/" />
<property name="suffix" value=".jsp" /></bean>
<!--配置注解驱动--> 
<mvc:annotation-driven/>
<!--配置静态资源的访问映射，此配置中的文件，将不被前端控制器拦截-->
<mvc:resources mapping="/js/**" location="/js/"/>

<mvcresources ../>的两个重要属性
属性                    说明
location                用于定位需要访问的本地静态资源文件路径，具体到某个文件夹
mapping                 匹配静态资源全路径，其中“/**”表示文件夹及其子文件夹下的某个具体文件

在product.jsp的显示效果图所示的页面中，单击右侧“提交单个商品”按钮，product.jsp表单中的单个商品信息以JSON格式异步发送到服务器端getProduct()方法中。提交单个商品时控制台打印信息如图所示。
* STEP 07
  从图中所示的打印信息可以得出，客户端异步提交的JSON数据，按照形参product属性的格式进行关联映射，并赋值给product对应的属性，完成了JSON数据的绑定。

> 多学一招:JSON转换器配置和静态资源访问配置
JSON转换器配置和静态资源访问配置，除了之前讲解的配置方案之外，还可以通过其他方式完成，下面讲解两种配置方式，使用<bean>元素配置JSON转换器和静态资源访问的配置方式。

> 使用<bean>元素配置JSON转换器
在配置JSON转换器时，除了常用的<mvc:annotation-driven />元素，还可以使用<bean>元素进行显示的配置，<bean>元素配置JSON转换器方式具体如下所示。
<!--使用<bean>元素配置注解方式的处理器映射器-->
<bean class="org.springframework.web.servlet.mvc.method
.annotation.RequestMappingHandlerMapping" />
<!--使用<bean>元素配置注解方式的处理器适配器-->
<bean class="org.springframework.web.servlet.mvc.method
.annotation.RequestMappingHandlerAdapter">
<property name="messageConverters"><list><!--配置JSON转换器-->
<bean class="org.springframework.http.converter.json
.MappingJackson2HttpMessageConverter"/></list></property>
</bean>

## 返回值为void类型的页面跳转
> 返回值为void类型的页面跳转到默认页面
当Spring MVC方法的返回值为void类型，方法执行后会跳转到默认的页面。默认页面的路径由方法映射路径和视图解析器中的前缀、后缀拼接成，拼接格式为“前缀+方法映射路径+后缀”。如果Spring MVC的配置文件中没有配置视图解析器，则会报HTTP Status 500错误。

由上面两个图的内容可以得出，访问地址后，执行了showPageByVoid()方法，并且在方式执行后成功跳转到WEB-INF文件夹下的register.jsp页面。页面虽然跳转了，但是浏览器地址栏没有变化，原因是Spring MVC对请求默认按转发的方式进行响应。

## 返回值为String类型的页面跳转一不携带数据
> 返回值为String类型的页面跳转的转发方式
当方法的返回值为普通的字符串时，Spring MVC在方法执行后会默认以转发的方式响应给客户端。除了这种默认的转发方式，还可以返回指定前缀的字符串，来设定处理器执行后对请求进行转发还是重定向，设定转发和重定向的字符串格式如下所示。

@Controller
public class PageController {
@RequestMapping(" /showPageByString")publicStringfshowPageByString0 {
System.out.printIn("showPageByString running");}return register;
}

forward:需要转发到的资源路径
redirect:需要重定向到的资源路径

## 返回值为String类型的页面跳转一携带数据

## 返回值为ModelAndView类型的页面跳转
> ModelAndView对象组成部分
使用方法的返回值可以设定跳转的逻辑视图名称，使用Model等对象实现页面跳转时传输数据。除此之外，Spring MVC还提供了兼顾视图和数据的对象
ModelAndView，ModelAndView对象包含视图相关内容和模型数据两部分，其中视图相关的内容可以设置逻辑视图的名称，也可以设置具体的View实例;模型数据则会在视图渲染过程中被合并到最终的视图输出。
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/p37.png)
接下来通过一个案例演示返回值为ModelAndView类型的页面跳转，案例具体实现步骤如下。修改文件PageController.java，新增showModelAndView()方法，在showModelAndView()方法中使用ModelAndView封装数据和视图，完成页面跳转时传递数据。
* STEP 01
  @RequestMapping("/showModelAndView")public ModelAndViewshowModelAndView(
  ModelAndView modelAndView = new ModelAndView();modelAndView.addObject("username" ," heima");
  User user = new User(); user.setPassword(" password");modelAndView.addObject("user",user);
  modelAndView.setViewName("register");return modelAndView;

* STEP 02
  启动chapter12项目，在浏览器中访问地址
  http://localhost:8080/chapter12/showModelAndView。访问后，浏览器页面进行跳转，跳转的页面如图所示。

## 普通字符串的回写
接下来通过ittpServletResponse输出数据的案例，演示普通字符串的回写，案例具体实现步骤如下。在项目的com.itheima.controller包下创建一个数据回写类DataController，在DataController类中定义showDataByResponse()方法，用于测试在Spring MVC中普通字符串的回写。
* STEP 01
  Controller
  public class DataController
  @RequestMapping("showDataByResponse")
  public void showDataByResponse(HttpServletResponse response){try {
  response.getWriter().print("response");} catch (IOException e) {
  e.printStackTrace();}
  }

启动chapter12项目，在浏览器中访问地址


## JSON数据的回写一对象数据转换成JSON数据后的回写
项目中已经导入Jackson的依赖
可以先调用Jackson的JSON转换的相关方法，将对象或集合转换成JSON数据，然后通过HttpServletResponse将JSON数据写入到输出流中完成回写，具体实现步骤如下。
* STEP 01
  修改文件DataController.java，在DataController类中新增showDataByJSON()方法，用于将对象转换成JSON数据并写入输出流中完成回写。
  @RequestMapping("showDataByJSON")
  public void showDataByJsoNHttpServletResponse responsetry ObjectMapper om = new ObjectMapper);
  User user = new User();user.setUsername("heima"); user.setPassword("666")String ujson = om.writeValueAsString(user);
  response.getWriter.print(ujson);
  } catch (IOException e){e.printStackTrace();}


> ResponseBody注解的使用范围
如果每次回写对象或者集合等数据都需要手动转换成JSON数据，操作就比较繁琐。为此，Spring MVC提供了@ResponseBody注解，@ResponseBody注解的作用是将处理器返回的对象通过适当的转换器转换为指定的格式之后，写入到
HttpServletResponse对象的body区，@ResponseBody注解通常用来返回JSON数据。@ResponseBody注解可以标注在方法和类上，当标注在类上时，表示该类中的所有方法均应用@ResponseBody注解。如果需要当前类中的所有方法均应用
@ResponseBody注解，也可以使用@RestController注解，@RestController注解相当于@Controller+@ResponseBody两个注解的结合。

## JSON数据的回写一集合数据转换成JSON数据后的回写
接下来通过一个案例演示使用@ResponseBody注解回写JSON格式的对象数据和集合数据，案例具体实现步骤如下。修改文件DataControllerjava，在DataController类中新增getUser()方法，用于返回JSON类型的User信息;新增addProducts()方法用于返回JSON类型的Product列表信息。
* STEP 01
  /只展示getUser()方法
  @RequestMapping("getUser")@ResponseBody
  public User getUser) {User user = new User();user.setUsername("heima2");return user; }

在项目的src\main\webapp目录下，创建一个商品添加页面product_add.jsp，在product_add.jsp中创建一个表格，用于显示用户信息和添加商品信息。product_add.jsp的部分代码如下所示。
* STEP 02



## 简单异常处理器
> HandlerExceptionResolver接口
如果希望对Spring MVC中所有异常进行统一处理，可以使用Spring MVC提供的异常处理器HandlerExceptionResolver接口。Spring MVC内部提供了HandlerExceptionResolver的实现类SimpleMappingExceptionResolver。它实现了简单的异常处理，通过该实现类可以将不同类型的异常映射到不同的页面，当发生异常的时候，实现类根据发生的异常类型跳转到指定的页面处理异常信息。实现类也可以为所有的异常指定一个默认的异常处理页面，当应用程序抛出的异常没有对应的映射页面，则使用默认页面处理异常信息。


* STEP 01
下面通过一个案例演示SimpleMappingExceptionResolver对异常的统一处理，案例具体实现步骤如下所示。

* STEP 02
src\mainyjava目录下，创建一个名称为com.itheima.controller的包。在包中创建ExceptionController类，ExceptionController类的具体代码如下所示。
@Controller
public class ExceptionController {/抛出空指针异常
@RequestMapping("showNullPointer")public void showNullPointer() {
ArrayList<Object> list = new ArrayList<>();System.out.printIn(list.get(2));}
/抛出IO异常省略，抛出算术异常省略}

程序执行文件ExceptionController.java中的任意一个方法时，都会抛出异常。在异常发生时，如果要跳转到指定的处理页面，则需要在Spring MVC的配置文件spring-mvc.xml中使用SimpleMappingExceptionResolver指定异常和异常处理页面的映射关系。Spring MVC配置文件的部分配置如下所示。
* STEP 03
<!--配置静态资源的访问映射，此配置中的文件，将不被前端控制器拦截--><mvc:resources mapping=" /js/**" location="/js//>
<!--注入 SimpleMappingExceptionResolver--> <bean class=
"org.springframework.web.servlet.handler.SimpleMappingExceptionResolver"><!--定义特殊处理的异常，类名或完全路径名作为key，对应的异常页面名作为值-->
<property name="exceptionMappings">
<props> <prop key="java.lang.NullPointerException">
nullPointerExp.jsp</prop><prop key="IOException">IOExp.jsp</prop></props></property> </bean>

在文件spring-mvc.xml中，已经指定了异常类别对应的异常处理页面，接下来创建这些异常处理页面。在此不对异常处理页面做太多处理，只在页面中展示对应的异常信息。
* STEP 04
<!--这里只展示nullPointerExp.jsp页面-->
<%@page contentType="text/html;charset=UTF-8" language="java"%><html>
<head><title>空指针异常处理页面</title></head><body>
空指针异常处理页面-----${exp}</body>
</html>

启动chapter13项目，在浏览器中访问地址
* STEP 05
http://localhost:8080/chapter13/showNullPointer，程序将执行showNullPointer()方法。方法执行后页面显示效果如图所示。

## 自定义异常处理器
>  resolveException()方法
除了使用SimpleMappingExceptionResolver进行异常处理，还可以自定义异常处理器统一处理异常。通过实玫HandlerExceptionResolver接口，重写异常处理方法
resolveException()来定义自定义异常处理器。当Handler执行并且抛出异常时，自定义异常处理器会拦截异常并执行重写的resolveException)方法，该方法返回值是
ModelAndView类型的对象，可以在ModelAndView对象中存储异常信息，并跳转到异常处理页面。

接下来通过一个案例演示自定义异常处理器分类别处理自定义异常和系统自带的异
STEP 01
常，案例具体实现步骤如下所示。在src\main\java目录，创建一个路径为com.itheima.exception的包，并在包中创建自定义异常类MyException。
public class MyException extends Exception {
private String message;//异常信息
public MyException(String message) {super(message);
this.message = message;
}
@Override
public String getMessage() {return message;}
public void setMessage(String message){this.message = message;}

修改文件ExceptionController.java，在ExceptionController类中，新增方法addData()用于抛出自定义异常，addData()方法的具体代码如下所示。
* STEP 02
@RequestMapping("addData")
public void addData() throws MyException {
throw new MyException("新增数据异常!");

在com.itheima.controller包下，创建名称为MyExceptionHandler的自定义异常处理器。在MyExceptionHandler类中重写resolveException()方法，用于判断当前异常是自定义异常还是系统自带的异常，根据异常的种类不同,resolveException)方法返回不同的异常信息。使用自定义异常处理器，需要先将自定义异常处理器注册到Spring MVC中。MyExceptionHandler类的部分代码如下所示。
* STEP 03
只列举了if...else的内容
if (ex instanceof MyException){//自定义异常，将异常信息直接返回
msg=ex.getMessage(;
}else //如果是系统的异常，从堆栈中获取异常信息
Writer out = new StringWriter(); PrintWriter s = new PrintWriter(out);ex.printStackTrace(s);
String sysMsg = out.toString();//系统真实异常信息
msg="网络异常! ";//向客户隐藏真实的异常信息，仅发送提示信息

在src\main\webapp目录下，创建一个名称为error.jsp的文件，用作异常处理页面。本案例不对异常处理页面进行过多处理，只将异常信息打印在页面上。
* STEP 04
<%@page contentType="text/html;charset=UTF-8" language="java"%><html>
<head><title>异常处理页面</title></head><body>
${msg}</body></html>

## 异常处理注解
> @ControllerAdvice注解的作用
从Spring 3.2开始，Spring提供了一个新注解@ControllerAdvice,ControllerAdvice有以下两个作用。
。注解作用在类上时可以增强Controller，对Controller中被@RequestMapping注解标注的方法加一些逻辑处理。
@ControllerAdvice注解结合方法型注解@ExceptionHandler，可以捕获Controller中抛出的指定类型的异常，从而实现不同类型的异常统一处理。

接下来通过一个案例演示使用注解实现异常的分类处理，具体实现步骤如下所示。在com.itheima.controller包下，创建名称为ExceptionAdvice的异常处理器。ExceptionAdvice类中定义2个处理不同异常的方法，其中doMyException()方法用来处理Handler执行时抛出的自定义异常， doOtherException()方法用来处理Handler执行时抛出的系统异常。
* STEP 01
@ControllerAdvice
public class ExceptionAdvice { //处理MyException类型的异常@ExceptionHandler(MyException.class)
public ModelAndView doMyException(MyException ex) throws IOException {ModelAndView modelAndView = new ModelAndView();
modelAndView.addObject("msg" , ex.getMessage());
modelAndView.setViewName("error.jsp"); return modelAndView;}//处理Exception类型的异常doOtherException()省略


## 拦截器概述
> 什么是拦截器
拦截器（Interceptor）是一种动态拦截Controller方法调用的对象，它可以在指定的方法调用前或者调用后，执行预先设定的代码。拦截器作用类似于Filter (过滤器)，但是它们的技术归属和拦截内容不同。Filter采用Servlet技术，拦截器采用Spring MVC技术;Filter会对所有的请求进行拦截，拦截器只针对Spring MVC的请求进行拦截。

> 拦截器的定义方式
在Spring MVC中定义一个拦截器非常简单，常用的拦截器定义方式有以下两种。第一种方式是通过实现Handlerlnterceptor接口定义拦截器。
第二种方式是通过继承Handlerlnterceptor接口的实现类F HandlerlnterceptorAdapter 定义拦截器。
上述两种方式的区别在于，直接实现HandlerInterceptor接口需要重写HandlerInterceptor接口的所有方法;而继承HandlerInterceptorAdapter类的话，允许只重写想要回调的方法。

> 自定义拦截器示例
下面通过实现Handlerlnterceptor接口自定义拦截器，自定义拦截器的代码如下所示。public class Customlnterceptorimplements HandlerInterceptor {
@Override
}

> afterCompletion()方法
afterCompletion()方法可以完成一些资源清理、日志信息记录等工作，它会在整个请求完成后执行，即视图渲染结束之后执行。
postHandle()方法的前2个参数和preHandler()方法的前2个参数一样，分别是请求对象和响应对象。第3个参数ex是异常对象，如果处理器执行过程中出现异常，会将异常信息封装在该异赏对象中，可以在afterCompletion()方法中针对异常情况进行单独处理。需要注意的是，只有在preHandler()方法的返回值为true时
postHandle()方法和
afterCompletion()方法才会按上述执行规则执行。



## 拦截器的配置
> 配置自定义拦截器
要使自定义的拦截器生效，还需要在Spring MVC的配置文件中进行配置。配置代码如下所示。
mvc:interceptors <!--配置拦截器-->
<!--拦截所有请求-->
<bean class="com.itheima.interceptor.Mylnterceptor1" />mvc:interceptor>
<mvc:mapping path=" /" /> <!--配置拦截器作用的路径-->
<mvc:exclude-mapping path=""/>!--配置不需要拦截器作用的路径--><!--对匹配路径的请求才进行拦截-->
<bean class="com.itheima.interceptor.Mylnterceptor2" /></mvcinterceptor></mvcinterceptors>

> 配置自定义拦截器代码分析
在上述代码中，<mvc:interceptors>元素使用2种方式配置了拦截器，其中，使用子元素<bean>声明的拦截器，将会对所有的请求进行拦截;而使用<mvcinterceptor>元素声明的拦截器，会对指定路径下的请求进行拦截。
<mvc:interceptor>元素的子元素<mvc:mapping>通过path属性配置拦截器作用的路径。如上述代码中path的属性值为“]**”，表示拦截所有路径。如果有不需要拦截的请求，可以通过<mvcexclude-mapping>元素进行配置。需要注意的是，<mvcinterceptor>中的子元素必须按照上述代码的配置顺序进行编写，即<mvc:mapping ... >→<mvcexclude-mapping ... />→<bean .../>的顺序，否则文件会报错。

## 拦截器的执行流程一单个拦截器
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/p38.png)
下面通过一个案例演示单个拦截器的执行流程，案例具体实现步骤如下所示。在
* STEP 01
chapter13项目的com.itheima.controller包下，创建名称为HelloController的控制器类，在HelloControlle类中定义2个方法，其中hello()方法用于正常处理客户端的请求，exp()方法被调用时产生异常。
@Controller
public classHelloController@RequestMapping("hello")public String hellook
System.out.printIn("HelloController...Hello");
return "success.jsp";}
@RequestMapping("exp")
public Stringfexp0
System.out.println(1/0);return "success.jsp";}

Spring MVC的配置文件spring-mvc.xml中添加MyInterceptor拦截器的配置，具
* STEP 03
体配置如下所示。
<!--配置拦截器--><mvc:interceptors>
<!--使用bean直接定义在<mvcinterceptors>下面的拦截器将拦截所有请求-->
<bean class="com.itheima.interceptor.MyInterceptor" />
</mvcinterceptors>
福~r0 6 出To||×中巴
在spring-mvc.xml中使用<mvc:interceptors>元素的子元素<bean>来配置拦截器，配置的拦截器会拦截所有映射到Handler的请求。

## 拦截器的执行流程一多个拦截器
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/p39.png)

下面在单个拦截器案例的基础上新增一个拦截器，来演示多个拦截器的执行，具体
STEP 01
步骤如下。在com.itheima.interceptor包中，新增拦截器MyInterceptor2,MyInterceptor2和MyInterceptor一样，也是Handlerlnterceptor接口的实现类,在MyInterceptor2中也要重写Handlerlnterceptor接口的3个方法。
public class MyInterceptor2 implements HandlerInterceptor {
@Override
public boolean preHandle(HttpServletRequest request,
HttpServletResponse response, Object handler){
System.out.println("Mylnterceptor2...preHandle");
1/对拦截的请求进行放行处理
return true;
}
ll postHandle()和afterCompletion()方法省略

在Spring MVC配置文件springmvc-config.xml中的<mvc:interceptors>元素内,新增拦截器MyInterceptor2，<mvc:interceptors>元素内的配置代码具体如下所示。
<!--配置拦截器--><mvcinterceptors>
<!--拦截器1-->
<bean class="com.itheima.interceptor.Mylnterceptor" /><!--拦截器2-->
<bean class="com.itheima.interceptor.Mylnterceptor2"/></mvc:interceptors>

## 案例：后台系统登录验证
> 案例要求
本案例主要是对用户登录状态的验证，只有登录成功的用户才可以访问系统中的资源为了保证后台系统的页面不能被客户直接请求访问，本案例中所有的页面都存放在项目的WEB-INF文件夹下，客户需要访问相关页面时，需要在服务器端转发到相关页面。如果没有登录系统而直接访问系统首贡，拦截器会将请求拦截，并转发到登录页面，同时在登录页面中给出提示信息。如果用户登录时提交的用户名或密码错误，也会在登录页面给出相应的提示信息。当已登录的用户在系统页面中单击“退出”链接时，系统同样会回到登录页面。
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/p40.png)

了解了案例的验证规则，接下来就在项目中实现后台系统登录验证，如下所示。
* STEP 01
在src/main/java目录下，创建一个路径为com.itheima.pojo的包，并在包中创建User类。在User类中，声明username和password属性，分别表示用户名和密码,并定义了每个属性的getter/setter方法。
public class User {
private String username;
1/用户名
private String password;
//用户密码
/省略getter/setter方法
}

在com.itheima.controller包中，创建控制器类UserController，并在该类中定义跳转到系统首页、跳转到登录页面、跳转到订单信息页面、用户登录和用户退出五个方法。UserController类的部分代码如下所示。
* STEP 02
@Controller
public class UserController {
/跳转到系统首页，跳转到登录页面，跳转到订单信息页面，用户登录省略@RequestMapping("/logout")
public String logout(HttpSession session){/用户退出session.invalidate();//清除Session
return "redirect:tologin";//退出登录后重定向到登录页面

## 文件上传

## 文件下载

## 案例：文件上传和下载

## 常用方式整合思路

## 项目基础结构搭建

## Spring和Mybatis整合

## Spring和Spring MVC整合

## 纯注解方式整合思路

## 纯注解SSM框架整合

## 系统概述

## 数据库设计

## 系统环境搭建

## 用户登录

## 实现登录验证

## 注销登录

## 新书推荐

## 图书借阅

## 当前借阅

## 借阅记录

## 访问权限控制

## 扩展01 -云图书管理系统环境搭建

## 登录的业务流程分析

## 






















