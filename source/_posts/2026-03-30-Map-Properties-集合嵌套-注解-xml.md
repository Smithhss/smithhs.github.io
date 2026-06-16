---
title: Map-Properties-集合嵌套-注解-xml
date: 2026-03-30 09:10:38
tags:
  - Java
  - JavaSE
categories: 编程开发
cover: 'https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/hh172.png'
---



# day08 【Map集合】

## 第一章 xml

### 1.1 xml概述

```java
什么是XML?
    1.XML：可扩展标记语言（EXtensible Markup Language）
    2.XML 它是一种标记语言，很类似 HTML，HTML文件也是XML文档，标签都是自定义的。 如：<user>
    所以1.1没有人用。同时，在2004年2月W3C又发布了1.0版本的第三版。我们要学习的还是1.0版本。
```

```java
XML与HTML的主要差异?
    1.xml标签都是自定义的，html标签是预定义。
    2.xml的语法严格，html语法松散。
    3.xml是存储数据的，html是展示数据。
```

```xml
XML是可扩展的标记语言，意思是它是由一些标签组成的，而这些标签是自己定义的。本质上一种数据格式，可以用来表示复杂的数据关系。
XML文件有如下的特点：
● XML中的<标签名> 称为一个标签或者一个元素，一般是成对出现的。
● XML中的标签名可以自己定义（可扩展），但是必须要正确的嵌套
● XML中只能有一个根标签。
● XML标准中可以有属性
● XML必须第一行有一个文档声明，格式是固定的<?xml version="1.0" encoding="UTF-8"?>
● XML文件必须是以.xml为后缀结尾
```

### 1.2 xml的作用

- 存放数据

```xml
<?xml version="1.0" encoding="UTF-8"?>
<persons>
	<person id="p001">
		<name>张三</name>
	</person>
	<person id="p002">
		<name>李四</name>
	</person>
</persons>
```

类似于Java代码：

```java
class Person{
	String id;
	String name;
}

public void test(){
	HashSet<Person> persons = new HashSet<Person>();
	persons.add( new Person("p001","张三") );
	persons.add( new Person("p002","李四") );
}
```

- 配置文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans>
	<bean className="com.zhisheng.bean.User">
		<property name="username" value="jack"></property>
	</bean>
</beans>
```

类似于java代码:

```java
class Bean{
	private String username;
	//补全set\get方法
}
```

```java
public static void main(String[] args){
    Class clzzz = Class.forName("com.zhisheng.bean.User");
    Object obj = clazz.newInstance();
    Method method = clazz.getMethod("setUsername",String.class);
    method.invoke(obj,"jack");
}
```

------------以上代码不用写-----------

### 1.3 xml的组成

**文档声明**

```java
文档声明
    1.XML文档声明格式：<?xml version="1.0" encoding="UTF-8"?>
    2.格式说明:
		(1)文档声明必须为<?xml开头，以?>结束；
		(2)文档声明必须从文档的0行0列位置开始；
	3.文档声明只有2个属性：
        (1)versioin：指定XML文档版本。必须属性，因为我们不会选择1.1，只会选择1.0；
		(2)encoding：指定当前文档的编码。可选属性，默认值是utf-8；
```

**标签**

```java
元素(标签) element
    1.举例: <bean></bean>
    2.普通元素的结构开始标签、元素体、结束标签组成。例如：<hello>大家好</hello>
	2.元素体：元素体可以是元素，也可以是文本，例如：<b><a>你好</a></b>
	3.空元素：空元素只有开始标签，而没有结束标签，但元素必须自己闭合，例如：<c/>
	4.元素命名：
        (1)区分大小写
		(2)不能使用空格，不能使用冒号:
		(3)不建议以XML、xml、Xml开头
    5.格式化良好的XML文档，必须只有一个根元素
```

xml文件标签元素练习(文件名: zhisheng01xml/Demo01Element.xml):

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!--
    xml的注释
    xml文档声明:
        <?xml version="1.0" encoding="UTF-8" ?>: 必须写在第一行第一列
            version="1.0": 版本号
            encoding="UTF-8": 编码表
-->
<!--
    xml的组成: 标签
        标签: 元素 Element
        语法: <标签名> </标签名>    开始结束标签
        语法: <标签名/>  自闭和标签

    注意:
        1.标签名: 符合命名规范  尽量不要写 xml,Xml,xmL
        2.xml文件中: 必须写一个根标签,其它标签都写在根标签内部
        3.标签内部:
            (1)子标签
            (2)文本
        4.标签命名:
            (1) 区分大小写
            (2) 不能使用空格，不能使用冒号:
            (3) 不建议以XML、xml、Xml开头
-->
<a>
    文本
    <b>子标签文本</b>
    <c/>
    <d></d>
    <name></name>
</a>
```

**属性**

```java
属性 attribute
    1.举例: <bean id="" className="">
    2.属性是元素的一部分，它必须出现在元素的开始标签中
	3. 属性的定义格式：属性名=属性值，其中属性值必须使用单引或双引
	4.一个元素可以有0~N个属性，但一个元素中不能出现同名属性
	5.属性名不能使用空格、冒号等特殊字符，且必须以字母开头
```

xml文件标签属性练习(文件名: zhisheng01xml/Demo01Attribute.xml):

```
<?xml version="1.0" encoding="UTF-8" ?>
<!--
    xml的组成: 属性 Attribute
       1.属性属于标签的一部分
       2.属性只能写在开始标签中
       3.格式:
            属性名="属性值"
            属性值,可以使用""或者'' 建议使用""

        4.属性可以写多个,之间用空格隔开,没有顺序上的要求
        5.同一个标签中,属性名不能重复
        6.属性名不能使用空格、冒号等特殊字符，且必须以字母开头
-->
<person name="张三" id="p001" age="18">
</person >
```

**注释**

```java
XML的注释，以“<!--”开始，以“-->”结束。注释内容会被XML解析器忽略！
```

**转义字符**

```java
因为很多符号已经被XML文档结构所使用，所以在元素体或属性值中想使用这些符号就必须使用转义字符。
例如：“<”、“>”、“’”、“””、“&”。
```

![image-20210226232931732](img/image-20210226232931732.png)

### 1.4 xml解析概述

```java
当将数据存储在XML后，我们就希望通过程序获得XML的内容。人们为不同问题提供不同的解析方式，并提交对应的解析器，方便开发人员操作XML。
```

### 1.5 常见的解析方式和解析器

**开发中比较常见的解析方式有三种，如下：**

```java
1.DOM：要求解析器把整个XML文档装载到内存，并解析成一个Document对象。
    (1)优点：元素与元素之间保留结构关系，故可以进行增删改查操作。
	(2)缺点：XML文档过大，可能出现内存溢出显现。
2.SAX：
    是一种速度更快，更有效的方法。它逐行扫描文档，一边扫描一边解析。
    并以事件驱动的方式进行具体解析，每执行一行，都将触发对应的事件。（了解）
    (1)优点：处理速度快，可以处理大文件
	(2)缺点：只能读，逐行后将释放资源。
3.PULL：Android内置的XML解析方式，类似SAX。（了解）
```

**解析器**

```java
就是根据不同的解析方式提供的具体实现。有的解析器操作过于繁琐，为了方便开发人员，有提供易于操作的解析开发包。
```

![](img/05.png)

### 1.6 dom解析原理和结构模型

![](img/06.png)

**XML DOM 将整个XML文档加载到内存，生成一个DOM树**，并获得一个Document对象，通过Document对象就可以对DOM进行操作。

![image-20210226235613328](img/image-20210226235613328.png)

DOM中的核心概念就是节点，在XML文档中的元素、属性、文本等，在DOM中都是节点

### 1.7 API使用

**DOM4J介绍**

```java
DOM4J是一个Java的XML API，具有性能优异、功能强大和极其易使用的特点，它的性能超过sun公司官方的dom技术，如今可以看到越来越多的Java软件都在使用DOM4J来读写XML。
如果想要使用DOM4J，需要引入支持xpath的jar包dom4j-1.6.1.jar
DOM4J必须使用核心类SaxReader加载xml文档获得Document，通过Document对象获得文档的根元素，然后就可以操作了。
```

**常用API如下：**

```java
1.SaxReader对象
    read(…) 加载执行xml文档
2.Document对象
    getRootElement() 获得根元素
3.Element对象
    elements(…) 获得指定名称的所有子元素。可以不指定名称
	element(…) 获得指定名称第一个子元素。可以不指定名称
	getName() 获得当前元素的元素名
	attributeValue(…) 获得指定属性名的属性值
	elementText(…) 获得指定名称子元素的文本值
	getText() 获得当前元素的文本内容
```

**API案例实现**

编写xml文件：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans>
    <bean id="001" className="cn.zhisheng.demo.User">
        <property name="user" value="jack">杰克</property>
        <property name="user" value="rose">露丝</property>
    </bean>

    <bean id="002" className="cn.zhisheng.demo.Admin">
        <property name="user" value="admin">管理员</property>
        <property name="user" value="write">普通用户</property>
    </bean>
</beans>
```

编写解析xml代码：

```java
/*
    解析 自定义的 xml文件夹下的 a.xml

    1: 引入 dom4j.jar到模块
    2: 创建一个SaxReader对象
    3: 利用 SaxReader 读取一个 xml文件,就可以得到一个  Document 对象
    4: 面向 Document 对象获取 根标签
    5: 面向根标签对象,获取一级子标签对象,剩下的类似递归的思想,逐层次向下解析即可...直到获取所有的属性和元素体

 */
public class MyTest07 {
    public static void main(String[] args) throws Exception {
        //2: 创建一个SaxReader对象
        SAXReader reader = new SAXReader();
        // 3: 利用 SaxReader 读取一个 xml文件,就可以得到一个  Document 对象 传递的字符串路径默认是在"项目下查找"
        Document document = reader.read("xml/a.xml");
        //System.out.println(document);
        //4: 面向 Document 对象获取 根标签
        Element root = document.getRootElement();
        //5: 面向根标签对象,获取一级子标签对象,剩下的类似递归的思想,逐层次向下解析即可...直到获取所有的属性和元素体
        List<Element> elements = root.elements();
        // 6: 遍历集合,获取每个标签的具体内容
        for (Element book : elements) {
            // 面向对象,获取标签名
            String name = book.getName();
            // 面向对象,根据属性名获取属性
            Attribute id = book.attribute("id");
            // 面向属性对象,获取值
            String value = id.getValue();
            // 面向book对象,获取里面的子标签
            List<Element> list = book.elements();
            System.out.println(name + "标签的属性id的值是:" + value + ",包含的子标签有:");
            System.out.print("\t");
            for (Element nOrp : list) {
                String name1 = nOrp.getName();
                String text = nOrp.getText();
                System.out.print(name1+"标签的元素体是:"+text+"\t");
            }
            System.out.println();
        }
    }
}

```

## 第二章 注解

### 2.1 介绍

```java
1.概念:
	注解（Annotation）: 也叫元数据。一种代码级别的说明。
	它是JDK1.5及以后版本引入的一个特性，与类、接口、枚举是在同一个层次。
	它可以声明在包、类、字段、方法、局部变量、方法参数等的前面，用来对这些元素进行说明，注释。
	
2.作用分类:
	(1)编写文档：通过代码里标识的注解生成文档【例如，生成文档doc文档】
	(2)代码分析：通过代码里标识的注解对代码进行分析【例如，注解的反射】
	(3)编译检查：通过代码里标识的注解让编译器能够实现基本的编译检查【例如，Override】

3.常见注解
	(1)@Override：
		用来修饰方法声明，告诉编译器该方法是重写父类中的方法，如果父类不存在该方法，则编译失败。
    (2)@FunctionalInterface: 检测是否是函数式接口的
    (3)@SuppressWarnings: 抑制IDEA中的警告信息
```

先来认识一下什么是注解？

Java注解是代码中的特殊标记，比如@Override、@Test等，作用是：让其他程序根据注解信息决定怎么执行该程序。
![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/hh172.png)

- 注解不光可以用在方法上，还可以用在类上、变量上、构造器上等位置。

### 2.2 自定义注解

```java
/*
    自定义注解
        格式:
            public @interface 注解名 {
                属性集
            }

        1.空注解: 没有任何属性 	看MyAnno01
        2.有属性集的注解:       看MyAnno02
            属性的定义格式一:
                数据类型 属性名(); 没有默认值的属性
            属性的定义格式二:
                 数据类型 属性名() default 默认值; 有默认值的属性

        3.注解属性可以选择的数据类型:
            8种基本类型,String类型,枚举类型,注解类型,Class类型
            以及以上任意类型对应的一维数组
 */
public class Demo03Annotation {
}
```

```java
//空注解
public @interface MyAnno01 {
}
//定义有属性集的注解
public @interface MyAnno02 {
    String name();//String 类型的属性 name,没有默认值
    int age() default 18;//int 类型的属性 age,默认值 18
    String[] hobbies();//String 类型的数组 hobbies
    MyAnno01 myAnno01();//注解类型
}
```

### 2.3 自定义注解基本使用

```java
/*
    自定义注解的使用
        空注解使用格式: 直接使用
            @注解名称            
        有属性集注解使用格式:
            @注解名称(属性名1=属性值1,属性名2=属性值2,属性名3={元素1,元素2...})
        注意事项:
            1.空注解可以直接使用
            2.一个注解只能在一个位置上使用一次,一个位置上可以使用多个不同的注解
            3.如果注解有属性,那么必须给属性赋值才能使用  
            	键值对的方式赋值 属性名=属性值 多个属性,隔开
              	如果属性是数组类型 并且只有一个属性值 那么{}可以省略 如果多个属性值 {}不能省略
            4.如果属性没有默认值 必须赋值 如果有默认值 可以不赋值
 */
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD,ElementType.TYPE})
public @interface A {
    public String[] hobby();
    public Class cz();
    public Sex sex();

    public B b();
}

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD,ElementType.TYPE})
public @interface B {
    public int value() default 100;
}

public enum Sex {
    MAN,WOMEN
}

/*
    在这里 使用 A 注解
 */

import java.lang.annotation.Annotation;
import java.util.Arrays;

@A(hobby={"唱","太哦"},cz= Object.class,sex = Sex.MAN,b=@B(200))
public class MyTest12_01 {

    public static void main(String[] args) {
        // 解析当前类头上的注解,并通过注解对象,获取注解中的属性值
        Class aClass = MyTest12_01.class;
        // 从 aClass 中获取指定的注解
        A a = (A) aClass.getDeclaredAnnotation(A.class);
        // 面向 a 对象,获取属性
        String[] hobby = a.hobby();
        Class cz = a.cz();
        Sex sex = a.sex();
        B b = a.b();
        int value = b.value();
        System.out.println(Arrays.toString(hobby));
        System.out.println(cz);
        System.out.println(sex);
        System.out.println(b);
        System.out.println(value);

    }
}
```




### 2.5 元注解@Target介绍

什么是元注解？

元注解是修饰注解的注解。

![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/hh174.png)

```java
@Target是用来声明注解只能用在那些位置，比如：类上、方法上、成员变量上等
@Retetion是用来声明注解保留周期，比如：源代码时期、字节码时期、运行时期
```

![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/hh175.png)

```java
/*
    元注解:
        1.作用:
            用来限制自定义注解的生命周期(只存在于源代码中,存在于class文件中,存在于运行时期的内存中)
            用来限制自定义注解的使用范围(只能写在类上,只能写方法上,既能写在类上又能写在方法上等等)

        2.限制自定义注解的使用范围(在什么位置可以使用)
            元注解(限制自定义注解的注解)之@Target,源代码:
            public @interface Target {
                ElementType[] value();
            }

            java.lang.annotation.ElementType 枚举 可以理解为类,里面都是静态内容,直接用类名/枚举名调用

             TYPE： 用在类,接口上
             FIELD：用在成员变量上
             METHOD： 用在方法上
             PARAMETER：用在参数上
             CONSTRUCTOR：用在构造方法上
             LOCAL_VARIABLE：用在局部变量上

 */
@MyAnno06
public class Demo05YuanAnnotation {
    //@MyAnno06 //错误了,该注解只能写在类/方法上
    private String name;
    @MyAnno06
    public static void main(String[] args) {

    }
}
/*
    限制注解的使用范围: 指定写在类上/方法上
    使用元注解: Target
 */
@Target({ElementType.TYPE,ElementType.METHOD})
public @interface MyAnno06 {
}
```

### 2.6 元注解@Retention介绍

```java
/*
    元注解:
        1.作用:
            用来限制自定义注解的生命周期(只存在于源代码中,存在于class文件中,存在于运行时期的内存中)
            用来限制自定义注解的使用范围(只能写在类上,只能写方法上,既能写在类上又能写在方法上等等)

        2.限制自定义注解的生命周期(存在到什么时候,源代码中,生成的.class文件中,还是运行.class文件的时)
            元注解(限制自定义注解的注解)之@Retention
            public @interface Retention {
                RetentionPolicy value();
            }

            该注解是单属性的,属性名value,使用时,可以不写属性名

            java.lang.annotation.RetentionPolicy 
            	枚举 可以理解为类,里面都是静态内容,直接用类名/枚举名调用
                SOURCE：
                	注解只存在于Java源代码中，编译生成的字节码文件中就不存在了。
                CLASS：
                	注解存在于Java源代码、编译以后的字节码文件中，运行的时候内存中没有，默认值。
                RUNTIME：
                	注解存在于Java源代码中、编译以后的字节码文件中、运行时内存中，
                		程序可以通过反射获取该注解。

 */
@MyAnno07
//@MyAnno08//只能用在方法上/成员变量上
public class Demo06YuanAnnotation {
    //@MyAnno07 //错误了,该注解只能写在类/方法上
    @MyAnno08
    private String name;
    @MyAnno07
    @MyAnno08
    public static void main(String[] args) {

    }
}
/*
    定义注解:
        只能用在方法上/类上
        保留在class文件中,运行时期内存中没有
 */
@Target({ElementType.TYPE,ElementType.METHOD})
@Retention(RetentionPolicy.CLASS)
public @interface MyAnno07 {
}

/*
    定义注解:
        只能用在方法上/成员变量上
        保留在源文件中,class文件中没有
 */
@Target({ElementType.METHOD,ElementType.FIELD})
@Retention(RetentionPolicy.SOURCE)
public @interface MyAnno08 {

}
```

### 2.7 注解解析获取到类上的注解

```java
/*
    注解解析
        注解本质上就是一个接口，该接口默认继承Annotation接口
        java.lang.annotation.Annotation接口：
        	所有注解类型的公共接口，类似所有类的父类是Object。
            前面用过的元注解 @Target @Retention 就是该接口的实现类对象
            
    需求说明

        1. 定义注解Books，要求如下：
           - 包含属性：String value()   书名
           - 包含属性：double price()  价格，默认值为 100
           - 包含属性：String[] authors() 多位作者
           - 限制注解使用的位置：类和成员方法上
           - 指定注解的有效范围：RUNTIME

        2. 定义BookStore类，在类和成员方法上使用Book注解

        3. 定义Demo06AnnotationTest测试类获取Book注解上的数据


    获取类上定义的注解
        java.lang.Class类,成员方法
            public <A extends Annotation> A getAnnotation(Class<A> annotationClass)
                如果该元素的指定注解类型的注解存在于此对象(Class对象)上，则返回这个注解，否则返回 null
                获得当前对象上指定的注解对象。

            public boolean isAnnotationPresent(Class annotationClass):
                判断当前对象(Class对象)是否有指定的注解，有则返回true，否则返回false。


    步骤:
        1.获取类的Class类型的对象
        2.Class类型的对象调用方法,判断是否具有Books注解
        3.如果有,Class类型的对象调用方法获取Books注解对象
        4.打印Books注解对象的属性值

 */
```

```java
/*
    定义注解Books，要求如下：
       - 包含属性：String value()   书名
       - 包含属性：double price()  价格，默认值为 100
       - 包含属性：String[] authors() 多位作者
       - 限制注解使用的位置：类和成员方法上
       - 指定注解的有效范围：RUNTIME
 */
//限制注解使用的位置：类和成员方法上
@Target({ElementType.TYPE,ElementType.METHOD})
//指定注解的有效范围：RUNTIME
@Retention(RetentionPolicy.RUNTIME)
public @interface Books {
    String value();//书名
    double price() default 100;//价格，默认值为 100
    String[] authors();//多位作者
}
```

```java
@Books(value = "面向对象",price = 180,authors = {"响哥","刚哥"})
public class BookStore {
    @Books(value = "jdk8新特性",authors = "响哥")
    public void show() {

    }
}

```

```java
//获取类上注解信息的测试类
public class Demo06AnnotationTest {
    @Test
    public void getParseClassAnnotation() throws Exception {
        //1.获取类的Class类型的对象
        Class<?> clazz = Class.forName("itheima06.BookStore");

        //2.Class类型的对象调用方法,判断是否具有Books注解
        if(clazz.isAnnotationPresent(Books.class)) {
            //3.如果有,Class类型的对象调用方法获取Books注解对象
            Books booksAnno = clazz.getAnnotation(Books.class);

            //4.打印Books注解对象的属性值
            String bookName = booksAnno.value();
            double price = booksAnno.price();
            String[] authors = booksAnno.authors();
            System.out.println(bookName+"::"+price+"::"+ Arrays.toString(authors));
        }
    }
}

```

### 2.8 模拟junit框架的注解
```java
/*
    模拟junit框架的注解,将来,哪些方法的头上添加了这个注解,并且传递了值是 true或不传,都可以运行,传递false或不加注解,就不执行
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface MyAnnoTest {

    public boolean value() default true;

}


public class Test13 {

    @MyAnnoTest
    public void a1(){
        System.out.println("a1...");
    }

    @MyAnnoTest(true)
    public void a2(){
        System.out.println("a2...");
    }
    @MyAnnoTest(false)
    public void a3(){
        System.out.println("a3...");
    }

    @MyAnnoTest
    public void a4(){
        System.out.println("a4...");
    }

    public void a5(){
        System.out.println("a5...");
    }

}

public class MyAPP {
    public static void main(String[] args) throws InstantiationException, IllegalAccessException, InvocationTargetException {
        // 1: 获取 Test13类中所有的方法,
        // 2: 遍历,面向每个方法对象,判断,是否有 MyAnnoTest,有就获取 MyAnnoTest,再获取值,如果值是false就不执行
        Class<Test13> aClass = Test13.class;
        Test13 test13 = aClass.newInstance();
        Method[] arr = aClass.getMethods();
        for (Method method : arr) {
            if (method.isAnnotationPresent(MyAnnoTest.class)) {
                MyAnnoTest test = method.getAnnotation(MyAnnoTest.class);
                if (test.value()) {
                    method.invoke(test13);
                } else {
                    System.out.println(method.getName() + "方法头上有注解,但是值是false,所以不执行!");
                }
            } else {
                System.out.println(method.getName() + "方法头上没注解,所以不执行!");
            }
        }
    }
}
```

## 第三章 Map集合【重点】

### 3.1 Map集合的特点

```java
java.util.Map<K,V>接口:
	双列集合根接口,内部定义的方法,子接口/实现类都有
	和java.util.Collection<T>接口: 单列集合的根接口,无关的

Map<K,V>接口的特点:
    1.键唯一,值可以重复
    2.一个键对应一个值,叫一一对应关系(映射关系/键值对关系)
    3.依靠键维护映射关系(可以通过键获取到值,但是不能通过值获取键)
```

![1601287013534](img/1601287013534.png)

所谓双列集合，就是说集合中的元素是一对一对的。Map集合中的每一个元素是以`key=value`的形式存在的，一个`key=value`就称之为一个键值对，而且在Java中有一个类叫Entry类，**Entry的对象用来表示键值对对象**。

所有的Map集合有如下的特点：**键不能重复，值可以重复，每一个键只能找到自己对应的值。**

![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205220443.png)

下面我们先写一个Map集合，保存几个键值对

```java
public class MapTest1 {
    public static void main(String[] args) {
        // Map<String, Integer> map = new HashMap<>(); // 一行经典代码。 按照键 无序，不重复，无索引。
        Map<String, Integer> map = new LinkedHashMap<>(); // 有序，不重复，无索引。
        map.put("手表", 100);
        map.put("手表", 220); // 后面重复数据会覆盖前面数据（键）
        map.put("手机", 2);
        map.put("Java", 2);
        map.put(null, null);
        System.out.println(map);//{null=null, 手表=220, Java=2, 手机=2}

        Map<Integer, String> map1 = new TreeMap<>(); // 可排序，不重复，无索引
        map1.put(23, "Java");
        map1.put(23, "MySQL");
        map1.put(19, "李四");
        map1.put(20, "王五");
        System.out.println(map1); //{19=李四, 20=王五, 23=MySQL}
    }
}
```

Map集合也有很多种，每一种Map集合其键的特点是有些差异的，值是键的一个附属值，所以我们**只关注键的特点**就可以了。
![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205220507.png)

### 3.2 Map集合实现类的特点

```java
Map接口常用实现类:
java.util.HashMap<K,V>集合特点          ----使用
    1.键具备哈希特性: 
		哈希表 数组 + 单向链表/红黑树(链表数量>8 同时 数组元素>=64,链表变成红黑树)
    2.查询速度非常快,增删速度也不慢
    3.键要唯一: 键所属的类覆盖重写hashCode和equals方法
    4.键无序: 不保证存入和取出的顺序是一致的
    5.键无索引: 不能通过索引的方式获取键
    6.允许存储null键和null值
    7.线程不同步,不安全,但是效率高

java.util.Hashtable<K,V>集合特点          ----不使用
    1.键具备哈希特性: 哈希表 数组 + 单向链表
    2.查询速度非常快,增删速度也不慢
    3.键要唯一: 键所属的类覆盖重写hashCode和equals方法
    4.键无序: 不保证存入和取出的顺序是一致的
    5.键无索引: 不能通过索引的方式获取键
    6.不允许存储null键和null值
    7.线程同步,安全,但是效率低

java.util.LinkedHashMap<K,V>集合特点          ----使用
    3.键具备哈希特性和链表特性: 
		哈希表 数组 + 双向链表/红黑树(链表数量>8 同时 数组元素>=64,链表变成红黑树)
    2.查询速度非常快,增删速度也不慢
    3.哈希特性保证键要唯一: 键所属的类覆盖重写hashCode和equals方法
    4.链表特性保证键有序: 保证存入和取出的顺序是一致的
    5.键无索引: 不能通过索引的方式获取键
    6.允许存储null键和null值
    7.线程不同步,不安全,但是效率高
```

### 3.3 Map集合的常用方法

```java
Map接口中的常用方法
	public V put(K key, V value) : 把指定的键与指定的值添加到Map集合中。
    	如果键key,是第一次存储,返回null
    	如果键key已经存在,返回是被替换掉的值
    	键相同,值被替换
	public V get(Object key) 根据指定的键，在Map集合中获取对应的值。
    	键不存在: 返回null
	public V remove(Object key) : 
		把指定的键 所对应的键值对元素 在Map集合中删除，返回被删除元素的值。	
	public boolean containsKey(Object key) :判断该集合中是否有此键。
	public boolean containsValue(Object value) :判断该集合中是否有此值。
//测试代码
		// 1: 创建对象
        HashMap<Integer,String> map = new HashMap<>();
        // 2: 添加数据
        String v = map.put(207,"11期"); // 当key不存在的时候,就是向集合中添加一个键值对数据
        map.put(206,"12期");
        map.put(205,"办公室");
        map.put(413,"9期");
        String v2 =map.put(413,"10期");// 当key存在的时候,就是修改集合中指定的键值对数据

        // 3: 直接输出
        System.out.println(map);
        System.out.println(v); // null
        System.out.println(v2);// 被替换掉的元素 "9期"

        // 4: 根据key获取值
        System.out.println(map.get(206));
        System.out.println(map.get(413));
        System.out.println(map.get(416));

        // 获取值的时候,如果不存在,给出默认值
        System.out.println(map.getOrDefault(207, "嘿嘿嘿"));
        System.out.println(map.getOrDefault(208, "嘿嘿嘿"));

        // 删除数据
        Integer key1 = 413; // 只要数字超过byte范围,每次自动装箱都会创建新的对象
        Integer key2 = 413;

        Integer key3 = 127;// 只要数字不超过byte范围,每次自动装箱都会使用常量池中的同一个对象
        Integer key4 = 127;
        System.out.println(key1 == key2); // false
        System.out.println(key3 == key4); // true

        String remove = map.remove(413); // 靠Integer的hashcode和equals方法判断 413这个对象是否和集合中的某个 key 相同!!!
        System.out.println("被删除掉的是:"+remove); // 被删除掉的是:10期
        System.out.println("删除后集合剩余:"+map); // 删除后集合剩余:{205=办公室, 206=12期, 207=11期}

        // 获取map中所有的 值组成的 Collection 集合
        Collection<String> values = map.values();
        System.out.println(values); //[办公室, 12期, 11期]

        // 判断是否包含指定的 key 或 value
        System.out.println(map.containsKey(206)); //true
        System.out.println(map.containsValue("办公室"));//true

        // 获取集合的长度
        System.out.println(map.size());

        map.clear();
        System.out.println(map.isEmpty());
```

### 3.5 Map集合的遍历_键找值

```java
Map接口中的常用方法
	public Set<K> keySet() : 获取Map集合中所有的键，存储到Set集合中。
	public Collection<V> values() :返回Map集合中的所有值到Collection集合。
/*
    练习 HashMap 遍历方式1
 */
public class MyHashMap_2 {
    public static void main(String[] args) {
        // 1: 创建对象
        HashMap<Integer, String> map = new HashMap<>();
        // 2: 添加数据
        map.put(207, "11期"); // 当key不存在的时候,就是向集合中添加一个键值对数据
        map.put(206, "12期");
        map.put(205, "办公室");
        map.put(413, "9期");
        map.put(413, "10期");//// 当key存在的时候,就是修改集合中指定的键值对数据
        // 3: 获取所有的 key 组成的单列集合
        Set<Integer> keys =  map.keySet();
        // 4: 遍历 keys这个单列集合,就可以获取每个 key
        for (Integer key : keys) {
            // 5: 根据key从map中获取对应的 v
            String v = map.get(key);
            System.out.println(key+"====>"+v);
        }
    }
}
```

### 3.6 Map集合的遍历_键值对

```java
Map集合遍历方式二: 键值对方式
    原理分析:
    Map<K,V>接口内部定义静态的内部接口Entry<K,V>,用来描述结婚(键值对/映射关系)的
    Map接口的所有实现类内部,必然定义类实现Entry接口,覆盖重写抽象方法,
    描述自己的结婚证(键值对/映射关系)

    Map接口内部静态接口Entry<K,V>抽象方法:
        public abstract K getKey(): 获取键
        public abstract V getValue(): 获取值
        public abstract V setValue(V newValue): 修改值,返回的被修改的值
    Map<K,V>接口内部,定义抽象方法,用来获取所有的结婚证(键值对/映射关系)
    public abstract Set<Entry> entrySet(): 用来获取所有的结婚证(键值对/映射关系)
    Map接口的所有实现类,必然覆盖重写entrySet方法,获取键值对对象组成的Set集合
```

![1601287879467](img/1601287879467.png)

```java
/*
    练习 HashMap 遍历方式2  键值对对象
 */
public class MyHashMap_3 {
    public static void main(String[] args) {
        // 1: 创建对象
        HashMap<Integer, String> map = new HashMap<>();
        // 2: 添加数据
        map.put(207, "11期"); // 当key不存在的时候,就是向集合中添加一个键值对数据
        map.put(206, "12期");
        map.put(205, "办公室");
        map.put(413, "9期");
        map.put(413, "10期");//// 当key存在的时候,就是修改集合中指定的键值对数据
       // 3: 获取所有的 键值对对象 组成的单列集合
        // Set的泛型是  Map.Entry  Entry的泛型是 <Integer, String>
        Set<Map.Entry<Integer, String>> entries = map.entrySet();
        // 4: 遍历set集合,就可以得到每一个 Entry 对象
        for (Map.Entry<Integer, String> entry : entries) {
            // 面向每个 entry 对象,获取对象中包含的 key和value
            Integer key = entry.getKey();
            String value = entry.getValue();
            System.out.println(key+"---->"+value);
        }
    }
}
```

### 3.7 Map集合的遍历_foreach

```java
/*
    练习 HashMap 遍历方式3  集合提供的 默认方法  foreach
 */
public class MyHashMap_4 {
    public static void main(String[] args) {
        // 1: 创建对象
        HashMap<Integer, String> map = new HashMap<>();
        // 2: 添加数据
        map.put(207, "11期"); // 当key不存在的时候,就是向集合中添加一个键值对数据
        map.put(206, "12期");
        map.put(205, "办公室");
        map.put(413, "9期");
        map.put(413, "10期");//// 当key存在的时候,就是修改集合中指定的键值对数据
       // 3: 直接调用集合的默认方法,调用的时候,需要传递一个 接口类型的对象(可以使用匿名内部类),
        map.forEach(new BiConsumer<Integer, String>() {
            // 这个 accept 方法,我们只负责写, 由forEach内部负责调用,调用的时候,会把map的每个key和每个value传递过来
            public void accept(Integer k, String v) {
                // 只需要写处理 k 和v的逻辑即可
                System.out.println(k+"====>"+v);
            }
        });
        //遍历map集合，传递Lambda表达式
        map.forEach(( k,  v) -> {
            System.out.println(k + "---->" + v);
        });
    }
}
```

### 3.8 HashMap存储自定义对象并遍历

```java
//JavaBean类又叫做pojo类
public class Student {
    private String name;
    private int age;
    ...
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        if (age != student.age) return false;
        return Objects.equals(name, student.name);
    }

    @Override
    public int hashCode() {
        int result = name != null ? name.hashCode() : 0;
        result = 31 * result + age;
        return result;
    }
}
/*
	HashMap存储自定义对象
        练习：每位学生（姓名，年龄）都有自己的家庭住址。那么，既然有对应关系，
        则将学生对象和家庭住址存储到map集合中。学生作为键, 家庭住址作为值。
        注意，学生姓名相同并且年龄相同视为同一名学生。
        
   	使用keySet完成遍历的实现步骤:
        3.创建标准的Studnet类
        2.创建HashMap集合对象,键: Student,值: String
        3.HashMap集合对象调用put方法,添加键值对
        4.HashMap集合对象调用keySet方法,获取所有的键对应的Set集合
        5.使用迭代器遍历所有的键对应的Set集合
            5.1获取当前的键
            5.2HashMap集合对象调用get方法,传递当前的键,获取对应的值
            5.3打印键和值
*/
public class Test03 {
    public static void main(String[] args) {
        // 1: 创建集合
        HashMap<Student,String> map = new HashMap<>();
        // 2: 添加数据
        map.put(new Student("张三",18),"北京");
        map.put(new Student("张三",18),"杭州");
        map.put(new Student("李四",18),"上海");
        map.put(new Student("王五",18),"杭州");

        map.forEach((student, city) -> System.out.println(student + " lives in " + city));

    }
}
```

### 3.9 LinkedHashMap集合的使用

```java
/*
	LinkedHashMap存储自定义对象
        练习：每位学生（姓名，年龄）都有自己的家庭住址。那么，既然有对应关系，
        则将学生对象和家庭住址存储到map集合中。学生作为键, 家庭住址作为值。
        注意，学生姓名相同并且年龄相同视为同一名学生。
    使用entrySet完成遍历
    实现步骤:
        3.创建标准的Student类
        2.创建LinkedHashMap集合对象,键: Student,值: String
        3.LinkedHashMap集合对象调用put方法,添加键值对
        4.LinkedHashMap集合对象调用entrySet方法,获取所有的键值对对应的Set集合
        5.使用增强for遍历所有的键值对对应的Set集合
            5.1获取当前的键值对对象
            5.2键值对对象调用getKey方法,获取对应的键
            5.3键值对对象调用getValue方法,获取对应的值
            5.4打印键和值
*/
public class Demo04LinkedHashMapTest {
    public static void main(String[] args) {
        //3.创建标准的Studnet类
        //2.创建LinkedHashMap集合对象,键: Student,值: String
        LinkedHashMap<Student,String> hm = new LinkedHashMap<>();

        //3.LinkedHashMap集合对象调用put方法,添加键值对
        hm.put(new Student("张三",38),"北京");
        hm.put(new Student("张三",38),"南京");
        hm.put(new Student("李四",18),"上海");
        hm.put(new Student("李四",18),"武汉");
        hm.put(new Student("王五",28),"广州");
        hm.put(new Student("王五",28),"深圳");
        //4.LinkedHashMap集合对象调用entrySet方法,获取所有的键值对对应的Set集合
        Set<Map.Entry<Student, String>> set = hm.entrySet();
        //5.使用增强for遍历所有的键值对对应的Set集合
        for (Map.Entry<Student, String> entry : set) {
            //5.1获取当前的键值对对象: entry
            //5.2键值对对象调用getKey方法,获取对应的键
            //5.3键值对对象调用getValue方法,获取对应的值
            //5.4打印键和值
            System.out.println(entry.getKey()+"::::"+entry.getValue());
        }
    }
}

```

- LinkedHashMap的底层原理，和LinkedHashSet底层原理是一样的。底层多个一个双向链表来维护键的存储顺序。

取元素时，先取头节点元素，然后再依次取下一个几点，一直到尾结点。所以是有序的。
![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205221444.png)

### 3.10 TreeMap

- TreeMap集合的特点也是**由键决定的，默认按照键的升序排列，键不重复，也是无索引的。**

![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205221455.png)

- TreeMap集合的底层原理和TreeSet也是一样的，底层都是红黑树实现的。
- 所以可以对键进行排序。比如往TreeMap集合中存储Student对象作为键，排序方法有两种。

排序方式1： 写一个Student类，**让Student类实现Comparable接口**

```java
//第一步：先让Student类，实现Comparable接口
public class Student implements Comparable<Student>{
    private String name;
    private int age;
    private double height;
    //无参数构造方法
    public Student(){}
    //全参数构造方法
    public Student(String name, int age, double height){
        this.name=name;
        this.age=age;
        this.height=height;
    }
    //...get、set、toString()方法自己补上..
    
    //按照年龄进行比较，只需要在方法中让this.age和o.age相减就可以。
    /*
    原理：
    在往TreeSet集合中添加元素时，add方法底层会调用compareTo方法，根据该方法的
    结果是正数、负数、还是零，决定元素放在后面、前面还是不存。
    */
    @Override
    public int compareTo(Student o) {
        //this：表示将要添加进去的Student对象
        //o: 表示集合中已有的Student对象
        return this.age-o.age;
    }
}
```

排序方式2： 在创建TreeMap集合时，**直接传递Comparator比较器对象。**

```java
public class Test3TreeMap {
    public static void main(String[] args) {
        Map<Student, String> map = new TreeMap<>(new Comparator<Student>() {
            @Override
            public int compare(Student o1, Student o2) {
                return Double.compare(o1.getHeight(), o2.getHeight());
            }
        });
//        Map<Student, String> map = new TreeMap<>(( o1,  o2) ->   Double.compare(o2.getHeight(), o1.getHeight()));
        map.put(new Student("蜘蛛精", 25, 168.5), "盘丝洞");
        map.put(new Student("蜘蛛精", 25, 168.5), "水帘洞");
        map.put(new Student("至尊宝", 23, 163.5), "水帘洞");
        map.put(new Student("牛魔王", 28, 183.5), "牛头山");
        System.out.println(map);
    }
}
```

这种方式都可以对TreeMap集合中的键排序。

注意：**只有TreeMap的键才能排序，HashMap键不能排序**。

### 3.10 Properties集合介绍

```java
java.util.Properties集合: 代表属性集
	数据存储格式: 属性名=属性值 name=zhangsan age=18 可以存储文件中
	Properties是Hashtable的子类
   	Hashtable是Map集合的实现类
    所以: Properties也是Map集合的实现类,Map集合中定义的方法,它都有

面试题: Hashtable和HashMap的区别?
	1.HashMap可以存储null键和null值
	2.Hashtable不能存储null键和null值
	3.HashMap线程不同步,不安全,但是效率高
	4.Hashtable线程同步,安全,但是效率低

Properties的特点:
    3.Properties也是Map集合的实现类,Map集合中定义的方法,它都有
    2.Hashtable是Map接口的实现类,具有泛型K代表键的类型,V代表值的类型
    但是Properties继承Hashtable时,确定键的类型Object以及值的类型Object
        所以创建Properties集合对象时,不能再指定泛型
    3.Properties集合提供了参数和返回值都是String的方法,而String后期可以写在文件中
    4.Properties集合是唯一一个和IO流配合使用的双列集合

Properties集合的使用
	空参构造
    	public Properties(): 可以直接创建对象
```

### 3.11 Properties集合的基本使用

```java
Properties集合常用方法:
	public Object setProperty(String key,String value): 向集合中存储键值对。
    	等价于Map集合
    	public V put(K k,V v): 向集合中存储键值对。
		public String getProperty(String key): 获取集合中键对应的值，无此键返回null。等价于Map集合
    	public V get(K k): 根据键获取值
		public Set<String> stringPropertyNames(): 集合中的所有键存储到Set集合。等价于Map集合
    	public Set<K> keySet(): 集合中的所有键存储到Set集合。
```

```java
/*
    练习 properties集合的  CRUD
 */
public class MyProperties {
    public static void main(String[] args) {
        // 1: 创建集合
        Properties p = new Properties();
        // 2: 存字符串数据
        p.setProperty("张三","李四");
        p.put(123,456);
        System.out.println(p);

        // 3: 取数据
        String v1 = p.getProperty("张三");
        String v2 = p.getProperty("李四","嘿嘿嘿");
        System.out.println(v1);
        System.out.println(v2);

        String property = p.getProperty("123");
        Object o = p.get(123);
        System.out.println(property);
        System.out.println(o);

        // 遍历  仅获取 由  setProperty 保存的数据
        Set<String> set = p.stringPropertyNames();
        for (String s : set) {
            String property1 = p.getProperty(s);
            System.out.println(property1);
        }

        Set<Object> set1 = p.keySet();
        for (Object object : set1) {
            Object o1 = p.get(object);
            System.out.println(object+"=====>"+o1);
        }
    }
}
{张三=李四, 123=456}
李四
嘿嘿嘿
null
456
李四
张三=====>李四
123=====>456
```

### 3.12 Map练习统计字符个数的案例

![1601288696426](img/1601288696426.png)

```java
  /*
    统计一个字符串中每个字符出现的次数

    分析:
        1: 遍历字符串
        2: 以字符作为key,出现的次数作为value,创建map
        3: 根据字符获取value,+1,存回去

 */
public class Test03_2 {
    public static void main(String[] args) {
        String s = "abacaDad123745%$^$%^$23hsd";
        HashMap<Character,Integer> map = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            Character c = s.charAt(i);
            // 3: 根据字符获取value,+1,存回去
            /*Integer v = map.get(c);
            if(v == null){
                map.put(c,1);
            }else {
                map.put(c,++v);
            }*/
            Integer v = map.getOrDefault(c, 0);
            map.put(c,++v);
        }
        System.out.println(map);
    }
}
```

## 第四章 集合嵌套（重要）

list.of   **不支持增删改**    但支持查询

就是把一个集合当做元素，存储到另一个集合中去，我们把这种用法称之为集合嵌套。
![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205224503.png)

- 案例分析

```java
1.从需求中我们可以看到，有三个省份，每一个省份有多个城市
    我们可以用一个Map集合的键表示省份名称，而值表示省份有哪些城市
2.而又因为一个身份有多个城市，同一个省份的多个城市可以再用一个List集合来存储。
    所以Map集合的键是String类型，而指是List集合类型
    HashMap<String, List<String>> map = new HashMap<>();
```

- 代码如下

```java
/**
 * 目标：理解集合的嵌套。
 * 江苏省 = "南京市","扬州市","苏州市“,"无锡市","常州市"
 * 湖北省 = "武汉市","孝感市","十堰市","宜昌市","鄂州市"
 * 河北省 = "石家庄市","唐山市", "邢台市", "保定市", "张家口市"
 */
public class Test {
    public static void main(String[] args) {
        // 1、定义一个Map集合存储全部的省份信息，和其对应的城市信息。
        Map<String, List<String>> map = new HashMap<>();

        List<String> cities1 = new ArrayList<>();
        Collections.addAll(cities1, "南京市","扬州市","苏州市" ,"无锡市","常州市");
        map.put("江苏省", cities1);

        List<String> cities2 = new ArrayList<>();
        Collections.addAll(cities2, "武汉市","孝感市","十堰市","宜昌市","鄂州市");
        map.put("湖北省", cities2);

        List<String> cities3 = new ArrayList<>();
        Collections.addAll(cities3, "石家庄市","唐山市", "邢台市", "保定市", "张家口市");
        map.put("河北省", cities3);
        System.out.println(map);

        List<String> cities = map.get("湖北省");
        for (String city : cities) {
            System.out.println(city);
        }

        map.forEach((p, c) -> {
            System.out.println(p + "----->" + c);
        });
    }
}
```

### 4.1 集合嵌套List嵌套List

![1601291540995](img/1601291540995.png)

```java
/*
    练习list嵌套list
 */
public class Test05 {
    public static void main(String[] args) {
        List<List<Integer>> list = new ArrayList<>();
        // 1: 准备3个小集合
        List<Integer> list1 = new ArrayList<>();
        Collections.addAll(list1,1,3,5);
        List<Integer> list2 = new ArrayList<>();
        Collections.addAll(list2,2,4,6);
        List<Integer> list3 = new ArrayList<>();
        Collections.addAll(list3,7,8,9);

        // 2: 添加到大集合中
        Collections.addAll(list,list1,list2,list3);

        // 3: 遍历 list,根据索引可以获取每个小集合
        for (List<Integer> xl : list) {
            // 面向 xl 集合,获取里面的每个具体数据
            for (Integer i : xl) {
                System.out.println(i);
            }
        }
    }
}
```

### 4.2 集合嵌套List嵌套Map

![1601291674096](img/1601291674096.png)

```java
/*
    练习list嵌套map
 */
public class Test05_2 {
    public static void main(String[] args) {
        List<Map<Integer,String>> list = new ArrayList<>();
        // 1: 准备3个小map集合
        Map<Integer,String> map1 = new HashMap<>();
        Map<Integer,String> map2 = new HashMap<>();
        Map<Integer,String> map3 = new HashMap<>();

        // 2: 批量添加数据
        map1.put(207,"11期");
        map1.put(206,"12期");
        map2.put(413,"9期");
        map3.put(205,"办公室");

        // 将3个小map存入list
        Collections.addAll(list,map1,map2,map3);

        // 遍历list 获取每个小map.面向小map继续遍历即可获取元素
        for (Map<Integer, String> map : list) {
            Set<Integer> set = map.keySet();
            for (Integer key : set) {
                String v = map.get(key);
                System.out.print(key+"===>"+v+"\t");
            }
            System.out.println();
        }
    }
}
```

### 4.3 集合嵌套Map嵌套Map

![1601291808215](img/1601291808215.png)

```java
/*
    练习map嵌套map
 */
public class Test05_3 {
    public static void main(String[] args) {
        Map<String,Map<Integer,String>> map = new HashMap<>();
        // 1: 准备3个小map集合
        Map<Integer, String> map1 = Map.of(207, "11期", 206, "12期");
        Map<Integer, String> map2 = Map.of(413, "9期", 415, "10期");
        Map<Integer, String> map3 = Map.of(205, "办公室");

        // 2: 保存到大map中
        map.put("3号楼",map1);
        map.put("4号楼",map2);
        map.put("2号楼",map3);

        // 3: 面向 map 遍历,获取所有的键值对对象组成的set集合
        Set<Map.Entry<String,Map<Integer,String>>> set=map.entrySet();
        for (Map.Entry<String, Map<Integer, String>> entry : set) {
            // 面向entry,获取key,就是 xx号楼,获取value,就是 每个小map
            String key = entry.getKey();
            Map<Integer, String> value = entry.getValue();
            System.out.println(key+"有以下教室:");
            System.out.print("\t");
            
            value.forEach(new BiConsumer<Integer, String>() {
                @Override
                public void accept(Integer k, String v) {
                    System.out.print(k+"--->"+v+"\t");
                }
            });
            System.out.println();
        }
    }
}

```

### 4.4 创建不可变的集合

```java
/*
    练习创建不可变的集合
 */
public class Test06 {
    public static void main(String[] args) {
        // 1: 创建list系列的集合
        List<Integer> list = List.of(1, 3, 5, 5, 2, 4, 6);
        System.out.println(list);

        // 2: 尝试增删改
        //list.add(8); //  .UnsupportedOperationException
//        list.set(0,666);
        //list.remove(0);

        System.out.println(list.get(0));
        List<Integer> list2 = new ArrayList<>(list);
        System.out.println(list2);
        list2.add(88);
        list2.set(0, 666);
        list2.remove(1);
        System.out.println(list2);

        // set由于不可重复,因此添加元素的时候,不能带重复的元素,否则出异常
        //Set<Integer> set = Set.of(2, 5, 8, 3, 6, 9, 6);
        //System.out.println(set);

        // map.of也不能添加重复的key
        Map<Integer, Integer> map = Map.of(2, 22, 3, 33, 4, 22);
        System.out.println(map);
    }
}
```

### 作业

```java
package com.zxq._01_昨日作业;

import java.util.Objects;

/*
    课程编号（String）、课程名称（String）、课程学分（double）
 */
public class Course {
    private String id;
    private String name;
    private double score;

    @Override
    public String toString() {
        return "Course{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", score=" + score +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Course course = (Course) o;

        if (Double.compare(score, course.score) != 0) return false;
        if (!Objects.equals(id, course.id)) return false;
        return Objects.equals(name, course.name);
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        temp = Double.doubleToLongBits(score);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        return result;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public Course(String id, String name, double score) {
        this.id = id;
        this.name = name;
        this.score = score;
    }
}

```

### 

```java
package com.zxq._01_昨日作业;

import java.util.Objects;

/*
    学号（String）、姓名（String）、年龄（int）
 */
public class Student {
    private String id;
    private String name;
    private int age;

    @Override
    public String toString() {
        return "Student{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Student student = (Student) o;

        if (age != student.age) return false;
        if (!Objects.equals(id, student.id)) return false;
        return Objects.equals(name, student.name);
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + age;
        return result;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Student(String id, String name, int age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

```

### 

```java
package com.zxq._01_昨日作业;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

/*
    ### 需求描述

某学校需要开发一个学生选课系统，系统需要管理以下信息：

1. 课程信息：课程编号（String）、课程名称（String）、课程学分（double）
2. 学生信息：学号（String）、姓名（String）、年龄（int）
3. 选课关系：一个学生可以选择多门课程，一门课程可以被多个学生选择

系统需要实现以下功能：

1. 添加学生和课程信息
2. 学生选课（一个学生选择一门课程）
3. 查询某个学生选择的所有课程
4. 查询某门课程的所有学生
5. 统计每门课程的选课人数
6. 统计每个学生的选课总学分

### 具体要求

1. 设计合适的实体类（Student、Course），注意重写必要的equals和hashCode方法
2. 使用Map集合来存储选课关系，考虑如何设计数据结构
3. 实现选课系统核心类（CourseSelectionSystem），提供上述功能的方法
4. 编写测试代码，演示所有功能的正确性
 */
public class SystemManager {
    // 设计一个容器,专门用于存储学生的信息  确保学生不能重复存在! 计划是根据id判断学生是否存在,选用 map容器,用id作为key,学生对象作为value
    private HashMap<String,Student> students = new HashMap<>();
    private HashMap<String,Course> courses = new HashMap<>();
    private HashMap<Student, Set<Course>> stuChCourse = new HashMap<>();
    private HashMap<Course, Set<Student>> courseForStudent = new HashMap<>();


    //1. 添加学生和课程信息
    public void addStudent(Student student){
        // 判断当前id的学生是否存在
        if(students.containsKey(student.getId())){
            System.out.println("该id的学生信息,已经存在了,需要更换一个id");
        }else {
            students.put(student.getId(), student);
            System.out.println("添加学生:"+student+"成功了");
        }
    }


    //2. 添加课程信息
    public void addCourse(Course course){
        // 判断当前id的学生是否存在
        if(courses.containsKey(course.getId())){
            System.out.println("该id的课程信息,已经存在了,需要更换一个id");
        }else {
            courses.put(course.getId(), course);
            System.out.println("添加课程:"+course+"成功了");
        }
    }

    // 2. 学生选课（一个学生选择一门课程） 需要设计两个参数,分别是学生和课程 的id
    public void studentChooseCourse(String sid,String cid){
        // 根据学生id和课程id,分别获取对象,把学生对象作为新map的key,把这个学生选择的所有课程作为map的value
        Student student = students.get(sid);
        if(student == null){
            System.out.println("学号不存在!");
            return;
        }
        Course course = courses.get(cid);
        if(course == null){
            System.out.println("课程不存在!");
            return;
        }
        /*Set<Course> set = stuChCourse.get(student);
        if(set == null){
            HashSet<Course> set1 = new HashSet<>();
            set1.add(course);
            stuChCourse.put(student,set1);
        }else {
            set.add(course);
           // stuChCourse.put(student,set); // 不需要再次存储了,因为上面的 set.add(course); 代码,不会改变 set集合的地址值,map中已经记录了 这个set集合的地址值了;
        }*/
        // 使用 getOrDefault 方法优化,优化后,可以不写 if 语句
        
        
        
        Set<Course> set = stuChCourse.getOrDefault(student, new HashSet<Course>());
        set.add(course);
        stuChCourse.put(student,set);

        // 再向 课程对应的学生的map中添加信息
        Set<Student> set1 = courseForStudent.getOrDefault(course, new HashSet<Student>());
        set1.add(student);
        courseForStudent.put(course,set1);
    }

    //3. 查询某个学生选择的所有课程
    public void showByStudent(String id){
        Student student = students.get(id);
        Set<Course> set = stuChCourse.get(student);
        System.out.println(student+"选择的课程信息是:"+set);
    }

    //4. 查询某门课程的所有学生
    public void showByCourse(String cid){
        // 根据课程id,获取课程对象,根据课程对象,找到学习信息
        Course course = courses.get(cid);
        Set<Student> set = courseForStudent.get(course);
        System.out.println(course+"被以下学生选择了:"+set);
    }

    // 6. 统计每个学生的选课总学分
    public void showScoreByStudent(String sid){
        Student student = students.get(sid);
        Set<Course> set = stuChCourse.get(student);
        // 遍历求和
        double sum = 0;
        for (Course course : set) {
            sum+=course.getScore();
        }
        System.out.println(student+"对应的学分是:"+sum);
    }

    public void show(){
        System.out.println(stuChCourse);
    }

}

```

### 

```java
package com.zxq._01_昨日作业;

public class Test {
    public static void main(String[] args) {
        SystemManager sm = new SystemManager();
        sm.addStudent(new Student("001","张三",23));
        sm.addStudent(new Student("002","李四",23));
        sm.addStudent(new Student("003","王璐",23));

        sm.addCourse(new Course("c001","语文",5.0));
        sm.addCourse(new Course("c002","数学",4.0));
        sm.addCourse(new Course("c003","英语",6.0));

        sm.studentChooseCourse("001","c001");
        sm.studentChooseCourse("001","c002");
        sm.studentChooseCourse("002","c001");
        sm.studentChooseCourse("002","c003");
        sm.studentChooseCourse("003","c001");

        //sm.show();
        sm.showByStudent("001");
        sm.showByStudent("002");
        sm.showByStudent("003");

        sm.showByCourse("c001");
        sm.showByCourse("c002");
        sm.showByCourse("c003");

        sm.showScoreByStudent("001");
        sm.showScoreByStudent("002");
        sm.showScoreByStudent("003");
    }
}

```



