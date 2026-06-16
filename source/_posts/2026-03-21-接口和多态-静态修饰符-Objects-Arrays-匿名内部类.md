---
title: 接口和多态-静态修饰符-Objects-Arrays-匿名内部类
date: 2026-03-21 14:18:47
tags:
  - Java
  - JavaSE
categories: 编程开发
cover: 'https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250204131900.png'
---



## 1.接口

### 1.1 概述

+ 接口就是一种公共的规范标准，只要符合规范标准，大家都可以通用。
+ Java中接口存在的两个意义
  1. 用来定义规范
  2. 用来做功能的拓展
     **//接口和抽象类都不能创建对象**

### 1.2接口的特点

```java
public interface 接口名 {
    //成员变量（常量）
    //成员方法（抽象方法）
} 
```

```java
public class 类名 implements 接口名 {}
```

- **接口不能实例化**

  ​	我们可以创建接口的实现类对象使用

- 接口的子类

  ​	**要么重写接口中的所有抽象方法**
  ​	**要么子类也是抽象类**

### 1.3接口的成员特点（记忆）

- 成员特点
  - 成员变量
    ​	 只能是常量
    ​	 默认修饰符：**public static final**

  - 构造方法
    ​	没有，因为接口主要是扩展功能的，而没有具体存在

  - 成员方法
    ​	**只能是抽象方法**
    ​	默认修饰符：public abstract

- 代码演示

  - 接口

  ```java
  public interface Inter {
      public static final int NUM = 10;
  
      public abstract void show();
  }
  ```

  - 实现类

  ```java
  class InterImpl implements Inter{
  
      public void method(){
          // NUM = 20;
          System.out.println(NUM);
      }
  
      public void show(){
  
      }
  }
  ```

  - 测试类

  ```java
  public class TestInterface {
      public static void main(String[] args) {
          System.out.println(Inter.NUM);
      }
  }
  ```

### 1.4类和接口的关系（记忆）

- 类与类的关系

  ​	**继承关系，只能单继承，但是可以多层继承**

- 类与接口的关系

  ​	实现关系，**可以单实现，也可以多实现**，还可以在继承一个类的同时实现多个接口

- 接口与接口的关系

  ​	继承关系，可以**单继承，也可以多继承**

我们看一个案例演示，假设有一个Studnet学生类，还有一个Driver司机的接口，还有一个Singer歌手的接口。

现在要写一个A类，想让他既是学生，偶然也是司机能够开车，偶尔也是歌手能够唱歌。那我们代码就可以这样设计，如下：

```java
class Student{
}

interface Driver{
    void drive();
}

interface Singer{
    void sing();
}

//A类是Student的子类，同时也实现了Dirver接口和Singer接口
class A extends Student implements Driver, Singer{
    @Override
    public void drive() {
    }
    
    @Override
    public void sing() {
    }
}

public class Test {
    public static void main(String[] args) {
        //想唱歌的时候，A类对象就表现为Singer类型
        Singer s = new A();
        s.sing();
        
        //想开车的时候，A类对象就表现为Driver类型
        Driver d = new A();
        d.drive();
    }
}
```



## 2.接口新概念

### 2.1概述

- 常量

  public static final

- 抽象方法

  public abstract

- 默认方法(Java 8)

- 静态方法(Java 8)

- 私有方法(Java 9)

### 2.2接口中默认方法【应用】

- 作用  解决接口升级的问题

  ```java
  public default void show3() { 
  }
  ```

  **默认方法不是抽象方法，所以不强制被重写。但是可以被重写，重写的时候去掉default关键字**

  public可以省略，default不能省略

  如果实现了多个接口，多个接口中存在相同的方法声明，子类就必须对该方法进行重写


### 2.3接口中静态方法

```java
public static void show() {
}
```

- **静态方法只能通过接口名调用，不能通过实现类名或者对象名调用**
- public可以省略，static不能省略

```java
public interface A {   //接口中调用方法按使用默认default
    public default void show(){
        System.out.println("a接口的show方法...");
    }
    public default void show2(){
        System.out.println("a接口的show2方法...");
    }
    public static void show4(){
        System.out.println("a接口的show4方法...");
    }
}

public interface B {
    public default void show(){
        System.out.println("B接口的show方法...");
    }
    public default void show3(){
        System.out.println("B接口的show3方法...");
    }
    public static void show4(){
        System.out.println("B接口的show4方法...");
    }
}

public class Zi implements A,B{
    @Override
    public void show() {
        // 在当前这个实现类(干儿子)方法中,调用干爹的某个方法
        //A.super.show();
        B.super.show();
    }
}

public class Test {
    public static void main(String[] args) {
        Zi zi = new Zi();
        zi.show();
        zi.show2();
        zi.show3();

        //zi.show4();  错误,无法通过子类对象
        A.show4(); // 调用接口的静态方法,只能通过接口名调用
        B.show4();
    }
}
```



### 2.4接口中私有方法

- 私有方法产生原因

  当两个默认方法或者静态方法中包含一段相同的代码实现时，程序必然考虑将这段实现代码抽取成一个共性方法，而这个共性方法是不需要让别人使用的，因此用私有给隐藏起来，这就是Java 9增加私有方法的必然性

  ```java
  private void show() {  
  }
  ```

  ```java
  private static void method() {  
  }
  ```

  - 默认方法可以调用私有的静态方法和非静态方法
  - 静态方法只能调用私有的静态方法


![image-20260321151939131](img/image-20260321151939131.png)

### 2.5接口的案例

![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250204131900.png)

首先我们写一个学生类，用来描述学生的相关信息

```java
public class Student {
    private String name;
    private char sex;
    private double score;

    public Student() {
    }

    public Student(String name, char sex, double score) {
        this.name = name;
        this.sex = sex;
        this.score = score;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    ...
    }
}
```

接着，写一个StudentOperator接口，表示学生信息管理系统的两个功能。

```java
public interface StudentOperator {
    void printAllInfo(ArrayList<Student> students);
    void printAverageScore(ArrayList<Student> students);
}
```

然后，写一个StudentOperator接口的实现类StudentOperatorImpl1，采用第1套方案对业务进行实现。

```java
public class StudentOperatorImpl1 implements StudentOperator{
    @Override
    public void printAllInfo(ArrayList<Student> students) {
        System.out.println("----------全班全部学生信息如下--------------");
        for (int i = 0; i < students.size(); i++) {
            Student s = students.get(i);
            System.out.println("姓名：" + s.getName() + ", 性别：" + s.getSex() + ", 成绩：" + s.getScore());
        }
        System.out.println("-----------------------------------------");
    }

    @Override
    public void printAverageScore(ArrayList<Student> students) {
        double allScore = 0.0;
        for (int i = 0; i < students.size(); i++) {
            Student s = students.get(i);
            allScore += s.getScore();
        }
        System.out.println("平均分：" + (allScore) / students.size());
    }
}
```

接着，再写一个StudentOperator接口的实现类StudentOperatorImpl2，采用第2套方案对业务进行实现。

```java
public class StudentOperatorImpl2 implements StudentOperator{
    @Override
    public void printAllInfo(ArrayList<Student> students) {
        System.out.println("----------全班全部学生信息如下--------------");
        int count1 = 0;
        int count2 = 0;
        for (int i = 0; i < students.size(); i++) {
            Student s = students.get(i);
            System.out.println("姓名：" + s.getName() + ", 性别：" + s.getSex() + ", 成绩：" + s.getScore());
            if(s.getSex() == '男'){
                count1++;
            }else {
                count2 ++;
            }
        }
        System.out.println("男生人数是：" + count1  + ", 女士人数是：" + count2);
        System.out.println("班级总人数是：" + students.size());
        System.out.println("-----------------------------------------");
    }

    @Override
    public void printAverageScore(ArrayList<Student> students) {
        double allScore = 0.0;
        double max = students.get(0).getScore();
        double min = students.get(0).getScore();
        for (int i = 0; i < students.size(); i++) {
            Student s = students.get(i);
            if(s.getScore() > max) max = s.getScore();
            if(s.getScore() < min) min = s.getScore();
            allScore += s.getScore();
        }
        System.out.println("学生的最高分是：" + max);
        System.out.println("学生的最低分是：" + min);
        System.out.println("平均分：" + (allScore - max - min) / (students.size() - 2));
    }
}
```

再写一个班级管理类ClassManager，在班级管理类中使用StudentOperator的实现类StudentOperatorImpl1对学生进行操作

```java
public class ClassManager {
    private ArrayList<Student> students = new ArrayList<>();
    private StudentOperator studentOperator = new StudentOperatorImpl1();

    public ClassManager(){
        students.add(new Student("迪丽热巴", '女', 99));
        students.add(new Student("古力娜扎", '女', 100));
        students.add(new Student("马尔扎哈", '男', 80));
        students.add(new Student("卡尔扎巴", '男', 60));
    }

    // 打印全班全部学生的信息
    public void printInfo(){
        studentOperator.printAllInfo(students);
    }

    // 打印全班全部学生的平均分
    public void printScore(){
        studentOperator.printAverageScore(students);
    }
}
```

最后，再写一个测试类Test，在测试类中使用ClassMananger完成班级学生信息的管理。

```java
public class Test {
    public static void main(String[] args) {
        // 目标：完成班级学生信息管理的案例。
        ClassManager clazz = new ClassManager();
        clazz.printInfo();
        clazz.printScore();
    }
}
```

### 2.6接口的其他细节

- 一个接口可以继承多个接口

```java
interface A{
    void test1();
}
interface B{
    void test2();
}
interface C{}

//比如：D接口继承C、B、A
interface D extends C, B, A{}

//E类在实现D接口时，必须重写D接口、以及其父类中的所有抽象方法。
class E implements D{
    @Override
    public void test1() {}

    @Override
    public void test2() {}
}
```

接口除了上面的多继承特点之外，在多实现、继承和实现并存时，有可能出现方法名冲突的问题

```java
1.一个接口继承多个接口，如果多个接口中存在`相同的方法声明`，则此时不支持多继承
2.一个类实现多个接口，如果多个接口中存在`相同的方法声明`，则此时不支持多实现
3.一个类继承了父类，又同时实现了接口，父类中和接口中有同名的默认方法，实现类会有限使用父类的方法
4.一个类实现类多个接口，多个接口中有同名的默认方法，则这个类必须重写该方法。
```

综上所述：一个接口可以继承多个接口，接口同时也可以被类实现。

![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250222004255.png)



## 3.多态 

### 3.1多态的概述

- 什么是多态
- 表现为：对象多态、行为多态
  ​	**同一个对象，在不同时刻表现出来的不同形态**
- 多态的前提

  - 要有**继承或实现关系**
  - 要有**方法的重写**
  - 要有**父类引用指向子类对象**

  ```java
  class Animal {
      public void eat(){
          System.out.println("动物吃饭");
      }
  }
  
  class Cat extends Animal {
      @Override
      public void eat() {
          System.out.println("猫吃鱼");
      }
  }
  
  public class Test1Polymorphic {
      /*
          多态的前提:
              1. 要有(继承 \ 实现)关系
              2. 要有方法重写
              3. 要有父类引用, 指向子类对象
       */
      public static void main(String[] args) {
          // 当前事物, 是一只猫
          Cat c = new Cat();
          // 当前事物, 是一只动物
          Animal a = new Cat();
          a.eat();
  
      }
  }
  ```

### 3.2多态中的成员访问特点（记忆）

- 成员访问特点

  - 成员变量	**编译看父类，运行看父类**

  - 成员方法    **编译看父类，运行看子类**


  ![image-20260321153520901](img/image-20260321153520901.png)

  **//成员变量**
  编译看左边有没有成员变量
  运行也看左边有没有成员变量

  **//成员方法**
  编译看左边有没有方法
  运行看右边有没有方法

- 代码演示

  ```java
  class Fu {
      int num = 10;
  
      public void method(){
          System.out.println("Fu.. method");
      }
  }
  
  class Zi extends Fu {
      int num = 20;
  
      public void method(){
          System.out.println("Zi.. method");
      }
  }
  
  public class Test2Polymorpic {
      /*
           多态的成员访问特点:
                  成员变量: 编译看左边 (父类), 运行看左边 (父类)
                  成员方法: 编译看左边 (父类), 运行看右边 (子类)
       */
      public static void main(String[] args) {
          Fu f = new Zi();
          System.out.println(f.num);
          f.method();
      }
  }
  ```

### 3.3多态的好处和弊端

- 好处

  **提高程序的扩展性**。定义方法时候，使用父类型作为参数，在使用的时候，使用具体的子类型参与操作

- 弊端

  ​	**不能使用子类的特有成员**
  
  ```java
  public abstract class Animal {
      private String name;
      private int age;
  
      ...
          
      public Animal() {
      }
  
      public Animal(String name, int age) {
          this.name = name;
          this.age = age;
      }
  
      public abstract void eat();
  }
  
  public class Dog extends Animal{
      public Dog() {
      }
  
      public Dog(String name, int age) {
          super(name, age);
      }
  
      @Override
      public void eat() {
          System.out.println(getAge()+"岁的狗"+getName()+"正在吃狗粮...");
      }
  }
  
  public class Pig extends Animal{
      public Pig() {
      }
  
      public Pig(String name, int age) {
          super(name, age);
      }
  
      @Override
      public void eat() {
          System.out.println(getAge()+"岁的猪"+getName()+"正在吃白菜...");
      }
  }
  
  /*
      1: 核心职责是 "接收"老板传递的动物,并
          面向动物对象,指挥动物吃饭!
          饲养员不能决定具体是什么动物
  
          代码该如何设计,才能做到可以接收老板
          传递的任意一个动物,并成功的调用动物
          的吃饭方法???
  
          为了能接收到任意类型的动物对象,可以
          采用多态的技术,设计父类类型的参数!
   */
  public class SiYangYuan {
      // 多态的好处,就体现在了这里
      public void siYang(Animal animal) {
          // 利用多态的特点,面向多态的对象,调用 eat方法,编译的时候,检查 Animal,运行的时候,找正在的子类重写的 eat方法
          System.out.println("饲养员准备好了动物的食物..................");
          animal.eat();
      }
  }
  
  
  /*
  饲养场的老板:(测试类)
  
  1: 负责决定饲养什么动物
  2: 负责招聘1名员工,指挥员工饲养动物
   */
  public class Boss {
      public static void main(String[] args) {
          //1: 负责决定饲养什么动物
          Pig pig = new Pig("乔治",2);
          // 2: 负责招聘1名员工,指挥员工饲养动物
          SiYangYuan s = new SiYangYuan();
          s.siYang(pig);
  
          // 3: 老板决定添加一种新的动物,交给饲养员饲养
          Dog dog = new Dog("旺财",3);
          s.siYang(dog);
  
      }
  }
  ```
  
  

### 3.4多态中的转型

- 向上转型  **父类引用指向子类对象就是向上转型**

- 向下转型

  ​	格式：**子类型 对象名 = (子类型)父类引用;**

- 代码演示

  ```java
  class Fu {
      public void show(){
          System.out.println("Fu..show...");
      }
  }
  
  class Zi extends Fu {
      @Override
      public void show() {
          System.out.println("Zi..show...");
      }
  
      public void method(){
          System.out.println("我是子类特有的方法, method");
      }
  }
  
  public class Test3Polymorpic {
      public static void main(String[] args) {
          // 1. 向上转型 : 父类引用指向子类对象
          Fu f = new Zi();
          f.show();
          // 多态的弊端: 不能调用子类特有的成员
          // f.method();
  
          // A: 直接创建子类对象
          // B: 向下转型
  
          // 2. 向下转型 : 从父类类型, 转换回子类类型
          Zi z = (Zi) f;
          z.method();
      }
  }
  ```

### 3.5多态中转型存在的风险和解决方案 (应用) 

+ 风险

  如果被转的引用类型变量,对应的实际类型和目标类型不是同一种类型,那么在转换的时候就会出现**ClassCastException** 

+ 解决方案

  + 关键字 instanceof

  + 使用格式

    变量名 instanceof 类型 通俗的理解：判断关键字左边的变量，是否是右边的类型，返回boolean类型结果

+ 代码演示

  ```java
  abstract class Animal {
      public abstract void eat();
  }
  
  class Dog extends Animal {
      public void eat() {
          System.out.println("狗吃肉");
      }
  
      public void watchHome(){
          System.out.println("看家");
      }
  }
  
  class Cat extends Animal {
      public void eat() {
          System.out.println("猫吃鱼");
      }
  }
  
  public class Test4Polymorpic {
      public static void main(String[] args) {
          useAnimal(new Dog());
          useAnimal(new Cat());
      }
  
      public static void useAnimal(Animal a){  // Animal a = new Dog();
                                               // Animal a = new Cat();
          a.eat();
          //a.watchHome();
  
  //        Dog dog = (Dog) a;
  //        dog.watchHome();  // ClassCastException  类型转换异常
        
          // 判断a变量记录的类型, 是否是Dog
          if(a instanceof Dog){
              Dog dog = (Dog) a;
              dog.watchHome();
          }
      }
  
  }
  ```

**原本是什么类型，才能还原成什么类型**

## 5. static关键字

### 5.1 static关键字的概念

用于修饰类的成员(**变量、方法、代码块和内部类**)   

**而是属于整个类，被所有对象共享**

```java
static关键字:
1.概念:
    `被该类的所有对象共享使用`,不依赖于某个具体的对象,和对象无关,依赖于类,在内存中唯一只有一份

2.类的加载过程:
    第一次使用new创建Student类的对象时,首先检查.class文件,是否被加载到方法区中,如果没有,把
    Student类的.class文件加载到方法区中(此时还没有对象),如果.class文件中有static静态修饰的内容,
    会把static静态修饰的内容,加载方法区的静态区中,并且要完成静态成员的初始化然后: 才进行对象的创建
```

![1600693937764](img/1600693937764.png)

### 5.2 static修饰成员变量的使用

static修饰修饰成员变量(**类变量: 依赖于类,与对象无关**)

```java
1.定义格式:
    static 数据类型 变量名称 = 数据值;

2.使用格式:
    类名.静态成员变量名称;        推荐使用
    对象名.静态成员变量名称;      不推荐使用
```

Java中的成员变量按照有无static修饰分为两种：**类变量、实例变量**。

![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250203231149.png)

```java
- 1.类变量：属于类，在内存中只有一份，用类名调用
- 2.实例变量：属于对象，每一个对象都有一份，用对象调用
```

```java
public class Student {
    private String name;
    private int age;

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    public String getName() {
        return name;
    }
    ...

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public Student() {
    }
}

/*
    这个类是专门描述 咱们班级的类
 */
public class JavaAi11Qi {
    // 多个对象需要共享的内容,就设计成 static的
    private static String name ;
    public static String ysj;

    // 每个对象都是不同的(独享的),就不要带static
    private Student student;

    public JavaAi11Qi(Student student) {
        super();
        this.student = student;
    }

    ...

    public static void setYsj(String ysj) {
//        System.out.println(this);  // 静态不能使用非静态的内容
//        System.out.println(super);
//        System.out.println(Student);
        JavaAi11Qi.ysj = ysj;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    @Override
    public String toString() {
        return "JavaAi11Qi{" +
                "student=" + student + "所属班级是:"+name+",使用的饮水机是:"+ysj+
                '}';
    }

    {
        System.out.println("普通的构造代码块,会在构造方法的第一行之后,第2行之前执行,且每次执行构造方法的时候,都会执行...");
    }
    static {
        System.out.println("静态代码块,仅在类加载的时候,执行唯一的1次...");
        Random random = new Random();
        int randomCode = random.nextInt(1, 3);
        System.out.println(randomCode);
        if(randomCode == 1){
            ysj = "奥克斯";
        }else {
            ysj = "美的";
        }
    }

}

public class Test {
    public static void main(String[] args) {
        // 1: 创建两个学生对象,并分别设置到班级中
        Student s1 = new Student("吴彦祖",18);
        Student s2 = new Student("胡歌",19);

        // 2: 设置班级共享的数据
        JavaAi11Qi.setName("java+ai+11期");
        JavaAi11Qi.ysj = "奥克斯";

        // 3: 创建对象,把学生添加到班级
        JavaAi11Qi qi1 = new JavaAi11Qi(s1);
        System.out.println(qi1.toString());
        // 通过对象,对共享的内容进行修改,会影响其他对象
        qi1.ysj = "小鸭"; // 不推荐使用对象操作共享的内容,推荐使用类名直接操作!!!
        JavaAi11Qi qi2 = new JavaAi11Qi(s2);
        System.out.println(qi2.toString());
    }
}
```



### 5.3 static修饰成员方法的使用

成员方法根据有无static也分为两类：**类方法、实例方法**
![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250203231735.png)

```java
static修饰成员方法(类方法: 依赖于类,与对象无关)
1.定义格式:
    public static 返回值类型 方法名称(参数列表...) {...}

2.使用格式:
   类名.静态成员方法名称(...)        推荐使用
    对象名.静态成员方法名称(...)      不推荐使用
    
3.注意:
	静态成员变量也有默认初始化值
```

- 先定义一个Student类，在类中定义一个类方法、定义一个实例方法

```java
public class Student{
    double score;
    
    //类方法：
    public static void printHelloWorld{
        System.out.println("Hello World!");
    }
    
    //实例方法（对象的方法）
    public void printPass(){
        //打印成绩是否合格
        System.out.println(score>=60?"成绩合格":"成绩不合格");
    }
}
```

- 在定义一个测试类，注意类方法、对象方法调用的区别

```java
public class Test2{
    public static void main(String[] args){
        //1.调用Student类中的类方法
        Student.printHelloWorld();
        
        //2.调用Student类中的实例方法
        Student s = new Student();        
        s.printPass();
        
        //使用对象也能调用类方法【不推荐，IDEA连提示都不给你，你就别这么用了】
        s.printHelloWorld();
    }
}
```

static修饰成员方法的内存原理

```java
1.类方法：static修饰的方法，可以被类名调用，是因为它是随着类的加载而加载的；
         所以类名直接就可以找到static修饰的方法
         
2.实例方法：非static修饰的方法，需要创建对象后才能调用，是因为实例方法中可能会访问实例变量，而实例变量需要创建对象后才存在。
          所以实例方法，必须创建对象后才能调用。
```



```java
public class JavaEE372Student {
    String name;//不能使用static修饰: 属于每个对象的特有数据
    static String room;//使用static修饰: 属于所有对象的共享数据

    //定义静态方法
    public static void show() {
        System.out.println("班级: "+room);
    }
}
//测试类
public class Demo05Static {
    public static void main(String[] args) {
        System.out.println(JavaEE370Student.room);//null
        //创建JavaEE372Student类的对象
        JavaEE372Student stu = new JavaEE372Student();
        //不推荐使用对象调用静态成员
        System.out.println(stu.room);//null

        System.out.println("---------");
        //给静态成员赋值
        JavaEE372Student.room = "ZSTBD1002";
        System.out.println(JavaEE372Student.room);//ZSTBD1002
        System.out.println(stu.room);//ZSTBD1002

        System.out.println("---------");
        JavaEE372Student stu2 = new JavaEE372Student();

        stu2.room = "ZSTBD1003";

        System.out.println(stu.room);//ZSTBD1003
        System.out.println(stu2.room);//ZSTBD1003
        System.out.println(JavaEE372Student.room);//ZSTBD1003

        System.out.println("---------");
        //调用静态成员方法
        //推荐使用类名调用
        JavaEE372Student.show();//班级: ZSTBD1003

        //不推荐使用对象调用
        stu.show();//班级: ZSTBD1003
    }
}

```

### 5.4 静态的注意事项

```java
静态的内容只能使用静态的内容,不能使用非静态的内容
        1.解释:
            (1)静态当中不能使用非静态
            (2)静态的内容,是最先被加载到内存方法区中的静态区中,并完成初始化,但是此时没有对象(非静态的内容存在			于对象中)既然没有对象,就不能使用非静态的内容
            (3)静态(先人),非静态(后人)

        2.静态的注意事项
            (1)静态方法可以直接访问静态变量和静态方法。
            (2)静态方法不能直接访问非静态成员变量或非静态成员方法。
                反之，非静态方法可以直接访问静态变量或静态方法。
            (3)静态方法中，不能使用this关键字。
```

```java
//此类只针对智晟的老师
public class ZSTeacher {
    String name;//不能使用static修饰: 属于每个对象的特有数据
    static String country = "CHINA";//使用static修饰: 属于所有对象的共享数据

    //静态方法
    public static void show() {
        //静态方法中可以直接使用静态成员变量
        //静态的内容是统一最先被加载到内存的静态区的
        System.out.println("国籍: "+country);
        /*
            静态内容是最先被加载到内存的静态区中的,此时没有对象(哪来的this),
            而非静态的成员变量存在于对象中,既然没有对象,就不能使用非静态内容
         */
        //System.out.println("姓名: "+name);

        //System.out.println("姓名: "+this.name);

        //调用静态
        //method方法和show方法在同一个类中,可以省略类名
        method();
        //ZSTeacher.method();

        /*
            静态内容是最先被加载到内存的静态区中的,此时没有对象,
            而非静态的成员方法存在于对象中,既然没有对象,就不能使用非静态内容
         */
        //printName();

    }

    //静态方法
    public static void method() {
        System.out.println("静态方法...method...");
    }

    //非静态方法
    public void printName() {
        /*
            非静态方法必须由对象调用,对象都已经有了,
            class文件早已经被加载到内存中了,
            那静态的内容也已经被加载到内存中并初始化了
         */
        System.out.println("姓名: "+name+", 国籍: "+country);

        //调用静态方法
        show();

    }
}
//测试类
public class Demo06StaticNotice {
    public static void main(String[] args) {
        //直接使用类名调用静态方法,根本没有对象
        //ZSTeacher.show();

        //创建对象
        ZSTeacher ht = new ZSTeacher();

        //对象调用成员方法
        ht.printName();
    }
}
```



### 5.5 静态代码块

```java
静态代码块
1.格式:
	static {
    	...
	}

2.特点:
    (1)假如只创建对象,静态代码块会优先于构造方法执行,`唯一执行一次`
    (2)静态代码块,随着类的加载而加载并唯一执行一次
    (3)完成静态成员变量的赋值
    (4)静态代码块,仍然属于静态内容,内部不能使用非静态
    (5)完成项目的初始化工作

```

## 执行顺序

用一句话总结核心规律：**先静态、后实例；先父类、后子类；先块、后构造。**

下面用 "建造一栋楼" 的比喻来理解，再配上代码验证。

------

**比喻：建造一栋楼**

- `静态代码块` = 打地基（只做一次，盖楼前必须先打好）
- `构造方法` = 装修房间（每次造一个新房间都要装修）
- `super()` = 先装修父楼层，再装修子楼层
- `实例代码块` = 每次装修前都要做的固定准备工作---



```java
class Animal {
    // ① 父类静态块
    static { System.out.println("① 父类 静态代码块"); }

    // ③ 父类实例块
    { System.out.println("③ 父类 实例代码块"); }

    // ④ 父类构造方法
    Animal() { System.out.println("④ 父类 构造方法"); }
}

class Dog extends Animal {
    // ② 子类静态块
    static { System.out.println("② 子类 静态代码块"); }

    // ⑤ 子类实例块
    { System.out.println("⑤ 子类 实例代码块"); }

    // ⑥ 子类构造方法（第一行隐式调用 super()）
    Dog() { System.out.println("⑥ 子类 构造方法"); }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("=== 第一次 new Dog() ===");
        new Dog();
        System.out.println("=== 第二次 new Dog() ===");
        new Dog();
    }
}
```

**输出结果：**

```
=== 第一次 new Dog() ===
① 父类 静态代码块
② 子类 静态代码块
③ 父类 实例代码块
④ 父类 构造方法
⑤ 子类 实例代码块
⑥ 子类 构造方法
=== 第二次 new Dog() ===
③ 父类 实例代码块       ← ① ② 不再出现！
④ 父类 构造方法
⑤ 子类 实例代码块
⑥ 子类 构造方法
```

------

### 三个最容易踩的坑

**坑 1：静态块只执行一次** 第二次 `new Dog()` 时，① 和 ② 不会再出现，因为类已经加载过了。

**坑 2：子类构造方法第一行隐式是 `super()`** 即使你不写 `super()`，Java 编译器也会自动加上，所以父类构造一定先跑。

**坑 3：实例块在构造方法之前** `{ ... }` 实例代码块会被编译器插入到每个构造方法的最前面（`super()` 之后），可以理解成"构造方法的前置准备"。



```java
public class Demo07StaticKuai {
    public static void main(String[] args) {
        //创建对象
        //Person p = new Person();
        //Person p2 = new Person();

        System.out.println(Person.country);
    }
}
//此类只针对咱们中国人
public class Person {
    String name;//不能使用static修饰: 每个对象的特有数据
    static String country = "CHINESE";//必须使用static修饰: 所有的对象的共享数据

    //空参构造方法
    public Person(){
        System.out.println("空参构造被执行了...");
    }

    //静态代码块
    static {
        System.out.println("静态代码块执行了...");
        //(3)完成静态成员变量的赋值
        country = "CHINA";
        //(4)静态代码块,仍然属于静态内容,内部不能使用非静态
        /*
            name属于非静态成员变量,必须由对象调用,
            但是静态代码块执行时,还没有完成对象的创建,
            所以静态代码块中不能使用非静态的内容
         */
        //System.out.println(name);
        /*
            this代表对象,但是静态代码块执行时,还没有完成对象的创建
         */
        //System.out.println(this.name);

        //(5)完成项目的初始化工作
        init();
    }

    //模拟项目初始化的方法
    public static void init() {
        System.out.println("项目正在完成初始化,需要稍等10秒钟....");
        for (int i = 10; i > 0; i--) {
            //此代码直接复制,后面多线程中讲解
            try {
                Thread.sleep(1000);//1000毫秒,程序在此处休眠1000毫秒(1秒)
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(i);
        }
        System.out.println("项目初始化完成,你可以尽情使用了....");
    }
}

```

## 6.  内部类

### 6.1 内部类的概念

内部类是类中的五大成分之一（***成员变量、方法、构造器、内部类、代码块***），如果一个类定义在另一个类的内部，这个类就是内部类。

```java
内部类概念:
	将一个类A定义在另一个类B里面，里面的那个类A就称为内部类，B则称为外部类。
	举例:
		汽车(外部类)内部有个发动机(内部类)
        人体(外部类)内部有心肝脾肺肾(内部类)
        定义一个类来描述一个事物时,该类的内部又定义了一个/多个类来描述其内部的事物
        一个东西(外部类)内部包含另外一个/多个东西(内部类)
    分类:
		1.成员内部类: 定义在外部类的成员位置(和成员变量/成员方法 地位相同)
            可以使用: public/private/static进行修饰
        2.局部内部类: 定义在外部类的方法内部,该内部类出了方法就没有用了
```

比如：**汽车(外部类)内部有个发动机(内部类)**

```java
public class Car{
    //内部类
    public class Engine{
    }
}
```

内部类有四种形式，分别是  **成员内部类、静态内部类、局部内部类、匿名内部类。**

### 6.2静态内部类

在成员内部类的前面加了一个static关键字。静态内部类属于外部类自己持有。

```java
public class Outer {
    private int age = 99;
    public static String schoolName="黑马";
    // 静态内部类
    public static class Inner{
        //静态内部类访问外部类的 静态变量，是可以的；
        //静态内部类访问外部类的 实例变量，是不行的
        public void test(){
            System.out.println(schoolName); //99
            //System.out.println(age);   //报错
        }
    }
}
```

静态内部类创建对象时，需要使用外部类的类名调用。

```java
//格式：外部类.内部类 变量名 = new 外部类.内部类();
Outer.Inner in = new Outer.Inner();
in.test();
```

### 6.3局部内部类

局部内部类是定义在方法中的类，和局部变量一样，只能在方法中有效。所以局部内部类的局限性很强，一般在开发中是不会使用的。

```java
public class Outer{
    public void test(){
        //局部内部类
        class Inner{
            public void show(){
                System.out.println("Inner...show");
            }
        }
        
        //局部内部类只能在方法中创建对象，并使用
        Inner in = new Inner();
        in.show();
    }
}
```



### 6.2 匿名内部类的使用

我们还是先认识一下什么是匿名内部类？

匿名内部类是一种特殊的局部内部类；所谓匿名，指的是程序员不需要为这个类声明名字。

下面就是匿名内部类的格式：

```java
new 父类/接口(参数值){
    @Override
    重写父类/接口的方法;
}
```

匿名内部类本质上是一个**没有名字的子类对象、或者接口的实现类对象**。

```java
/*
    匿名内部类对象
    1.概念:
        是内部类的简化写法。它的本质是一个 带具体实现的 父类或者父接口的 匿名的 子类对象。

    2.作用:
        (1)是一种创建接口实现类对象的快捷方式
            把创建实现类,覆盖重写抽象方法,创建实现类对象,实现类对象调用方法这四步合成一步完成

        (2)是一种创建抽象父类的子类对象的快捷方式
            把创建子类,覆盖重写抽象方法,创建子类对象,子类对象调用方法这四步合成一步完成

    3.匿名内部类对象创建格式:
        new 抽象父类/接口(); //错误: 不能直接new抽象父类/接口的对象

        new 抽象父类/接口() {
            覆盖重写所有的抽象方法;
        }

        注意:
            (1)上面只是创建了一个抽象父类的子类对象或者接口的实现类对象
            (2)该对象目前没有名字
            (3)该对象所属的类是没有名字的
                (注意:其实有名字(外部类名$1.class),只是该名字不是我们起的,是JVM帮助我们起的)
*/      
```

```java
//例1:
public class Test{
    public static void main(String[] args){
        //这里后面new 的部分，其实就是一个Animal的子类对象
        //这里隐含的有多态的特性： Animal a = Animal子类对象;
        Animal a = new Animal(){
            @Override
            public void cry(){
                System.out.println("猫喵喵喵的叫~~~");
            }
        }
        a.cry(); //直线上面重写的cry()方法
    }
}
//例2:
public abstract class Animal {
    //抽象方法
    public abstract void eat();
    public abstract void sleep();
}
//抽象类,演示匿名内部类对象的使用
public class Demo10AbstractNiMing {
    public static void main(String[] args) {
        //直接创建抽象类的匿名内部类对象
        new Animal(){
            @Override
            public void eat() {
                System.out.println("小狗在吃....");
            }

            @Override
            public void sleep() {
                System.out.println("小狗在睡....");
            }
        };
        //直接创建抽象类的匿名内部类对象然后调用抽象类中定义的方法
        new Animal(){
            @Override
            public void eat() {
                System.out.println("小狗在吃....");
            }

            @Override
            public void sleep() {
                System.out.println("小狗在睡....");
            }
        }.eat();
        new Animal(){
            @Override
            public void eat() {
                System.out.println("小狗在吃....");
            }

            @Override
            public void sleep() {
                System.out.println("小狗在睡....");
            }
        }.sleep();
        //直接创建抽象类的匿名内部类对象然后调用子类特有的方法
        //没有意义
        new Animal(){
            @Override
            public void eat() {
                System.out.println("小狗在吃....");
            }

            @Override
            public void sleep() {
                System.out.println("小狗在睡....");
            }
            //特有方法
            public void kanHome() {
                System.out.println("小狗在看家....");
            }
        }.kanHome();
        //多态的方式创建抽象类的匿名内部类对象
        Animal a = new Animal() {
            @Override
            public void eat() {
                System.out.println("小猫在吃....");
            }

            @Override
            public void sleep() {
                System.out.println("小猫在睡....");
            }
            //特有方法
            public void catcZSouse() {
                System.out.println("小猫在逮老鼠....");
            }
        };
        a.eat();
        a.sleep();
        //错误: 多态不能调用子类的特有方法
        //((Animal) a).catcZSouse();
        //Demo10AbstractNiMing$5类是JVM内部创建的,我们无法使用
        //((Demo10AbstractNiMing$5) a).catcZSouse();
    }
}
```

## 7. Arrays工具类

### 一、什么是工具类？

**工具类（Utility Class）** 是Java编程中一种常见的设计模式，具有以下特点：

1. **静态方法为主**：主要提供**静态方法，通过类名直接调用**
2. **不可实例化**：通常将构造函数私有化，防止被实例化
3. **功能专一**：专注于某一领域的通用功能
4. **无状态**：不维护对象状态，所有方法都是无状态的
5. **工具性质**：提供通用、可重用的功能方法

如果一个类中的方法全都是**静态的**，那么这个**类中的方法就全都可以被类名直接调用**，

由于调用起来非常方便，就像一个工具一下，所以把这样的类就叫做工具类。

- 我们写一个生成验证码的工具类

```java
public class MyUtils{
    public static String createCode(int n){
        //1.定义一个字符串，用来记录产生的验证码
        String code = "";
        
        //2.验证码是由所有的大写字母、小写字母或者数字字符组成
        //这里先把所有的字符写成一个字符串，一会从字符串中随机找字符
        String data = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ";
        
        //3.循环n次，产生n个索引,再通过索引获取字符
        Random r = new Random();
        for(int i=0; i<n; i++){
            int index = r.nextInt(data.length());
            char ch = data.charAt(index);
            //4.把获取到的字符，拼接到code验证码字符串上。
            code+=ch;
        }
        
        //最后返回code,code的值就是验证码
        return code;
    }
}
```

- 接着可以在任何位置调用`MyUtils`的`createCOde()方法`产生任意个数的验证码

```java
//比如这是一个登录界面
public class LoginDemo{
    public static void main(String[] args){
        System.out.println(MyUtils.createCode());
    }
}
//比如这是一个注册界面
public class registerDemo{
    public static void main(String[] args){
        System.out.println(MyUtils.createCode());
    }
}
```

工具类的使用就是这样子的，学会了吗？

在补充一点，工具类里的方法全都是静态的，推荐用类名调用为了防止使用者用对象调用。我们可以把工具类的构造方法私有化。

```java
public class MyUtils{
    //私有化构造方法：这样别人就不能使用构造方法new对象了
    private MyUtils(){
    }
    //类方法
    public static String createCode(int n){
       ...
    }
}
```

### 二、Arrays工具类的作用

`java.util.Arrays` 是Java集合框架的一部分，专门用于操作数组的工具类。

它提供了一系列静态方法，用于：

1. **数组排序**：对数组元素进行排序
2. **数组搜索**：在数组中查找特定元素
3. **数组比较**：比较两个数组是否相等
4. **数组填充**：用指定值填充数组
5. **数组转换**：将数组转换为字符串或其他形式
6. **数组复制**：复制数组的部分或全部内容
7. **数组流操作**：将数组转换为流进行函数式编程

### 三、Arrays工具类的常见方法

| 方法类别         | 方法名           | 描述                     | 主要参数                   | 返回值                           | 注意事项                                                     |
| :--------------- | :--------------- | :----------------------- | :------------------------- | :------------------------------- | :----------------------------------------------------------- |
| **二分查找**     | `binarySearch()` | 在有序数组中查找指定元素 | 数组, 要查找的值           | 元素索引(找到时)或负数(未找到时) | 1. 数组必须已排序 2. 可以指定搜索范围 3. 未找到时返回负数表示插入点 |
| **数组转字符串** | `toString()`     | 将一维数组转换为字符串   | 数组                       | 数组的字符串表示                 | 1. 用于基本类型和对象数组 2. 格式为 `[元素1, 元素2, ...]`    |
| **数组排序**     | `sort()`         | 对数组进行排序           | 数组                       | 无(原地排序)                     | 1. 默认自然顺序(升序) 2. 可以指定排序范围 3. 对象数组需要Comparable |
| **数组复制**     | `copyOf()`       | 复制数组                 | 原数组, 新长度             | 新数组                           | 1. 新长度可大于或小于原数组 2. 超长部分用默认值填充          |
| **数组复制**     | `copyOfRange()`  | 复制数组指定范围         | 原数组, 起始索引, 结束索引 | 新数组                           | 1. 包含起始索引 2. 不包含结束索引 3. 可扩展范围              |

```java
// 1: 准备数组
        int[] arr= {1,4,7,2,5,8,3,5,6,9};
        // 2: 把数组转字符串,观察里面的内容
        //String string = arr.toString(); 
        // 不建议直接调用,因为这样只能看到 Object默认的字符串格式,如果想看数组的内容,需要使用工具类转字符串即可
       // System.out.println(string);
        String string = Arrays.toString(arr);
        System.out.println(string);

        // 2: 排序
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));
        // 3: 二分查找
        System.out.println(Arrays.binarySearch(arr, 5));

        // 4: 数组复制 前5个元素到新数组
        int[] ints = Arrays.copyOf(arr, 5);
        System.out.println(Arrays.toString(ints));

        // 5: 按范围复制
        int[] ints1 = Arrays.copyOfRange(arr, 2, 5);
        System.out.println(Arrays.toString(ints1));
```



## 8. Objects工具类

![image-20260208100759783](img/image-20260208100759783.png)



```java
/*
    练习 Objects 工具类的使用
 */
public class MyObjects {
    public static void main(String[] args) {
        String s = Objects.toString(null);
        System.out.println(s);

        Student student = new Student("张三",18);
        String s1 = Objects.toString(student);
        System.out.println(s1);

        student = null;
        //String string = student.toString(); // 直接调用会出现空指针异常
        String s2 = Objects.toString(student,"嘿嘿喝");
        System.out.println(s2);

    }
}
```

