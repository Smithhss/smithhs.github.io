---
title: lambda表达式和Stream流笔记
date: 2026-03-31 10:32:41
tags:
  - Java
  - JavaSE
categories: 编程开发
cover: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80'
---



#  day09 lambda和Stream

## 第一章 Lambda表达式

### 1.1 函数式编程思想

**（注意：不能是抽象类，只能是接口）** 而且接口中只能有一个抽象方法

像这样的接口，我们称之为**函数式接口，只有基于函数式接口的匿名内部类才能被Lambda表达式简化**。

```java
/*
    lambda表达式书写规则:
        使用匿名内部类的方式中,只保留覆盖重写后方法的()和{},在()和{}之间,添加->,其它全部省略

        可以推导,就是可以省略
        行为参数化
        lambda表达式是对 匿名内部类的简化书写格式
 */
```

### 1.2 Lambda表达式

**作用：用于简化匿名内部类代码的书写。**

```java
(被重写方法的形参列表) -> {
    被重写方法的方法体代码;
}
```

```java
/*
    Lambda表达式的标准格式
        1.lambda表达式的组成
            (1)一个箭头:    ->
            (2)一些参数:    ()内部可以写参数
            (3)一段代码:    {}中的内容
        2.标准格式:
            (参数类型 参数名称) -> { 代码语句 }

        3.格式解释:
            (1)小括号(): 就是以前定义方法的小括号,内部写的是方法参数列表
                        没有参数,也不能省略
            (2)箭头->: 代表方法的参数传递
            (3)大括号{}:  就是以前定义方法的{},代表方法体,方法的功能代码
 */
```

```java
public interface A {
    void abc();
    //void bbc();
}
```

```java
public class LambdaTest1 {
    public static void main(String[] args) {
        // 要想成功的在这里调用 method方法,不得不提前准备一个 A接口的实现类对象,并作为实参使用
        method(new A() {
            @Override
            public void abc() {
                System.out.println("匿名内部类重写的abc方法执行了...");
            }
        });

        method(()->{
            System.out.println("lambda的方式执行了...");
        });

        //()->{}; // 没有推导的环境,这个语法会报错
    }

    public static void method(A a){
        a.abc();
    }
}
```

### 1.3 Lambda表达式有参数有返回值及省略方式

```java
    Lambda表达式的省略格式
        1.数据类型可以省略: 
        	(Person p) 简化为 (p)
            (Person p1,Person p2) 简化为 (p1,p2)
        2.如果只有一个参数: ()可以省略 
        	(Person p) 简化为 (p) 再简化为 p
            注意: 没有参数,()不能省略
        3.如果{}中只有一句话,那么{}和分号和return,全部可以省略
            注意: 要么全部省略,要么全部保留
        4.->: 永远不能省略
```

```java
/*  Collections工具类,实现自定义排序
	public static <T> void sort(List<T> list，Comparator<T> comp):
		将集合list中元素按照指定规则comp排序。
	参数:
		Comparator<T> comp: 接口,传递实现类对象/匿名内部类对象
			抽象方法:
				public int compare(T o1,T o2):用来指定排序的规则的
				第一个参数 - 第二个参数: 升序
				第二个参数 - 第一个参数: 降序
				参数T是引用类型,不能直接减

			举例:
				按照Person对象age属性,从小到大排序
                    public int compare(Person o1,Person o2) {
                        return o1.getAge() - o2.getAge();
                    }

				按照Student对象age属性,从大到小排序
                    public int compare(Person o1,Person o2) {
                        return o2.getAge() - o1.getAge();
                    }
    List集合存储多个Person对象,完成对List集合的排序,按照年龄排序
 */
public class MyTest03_3 {
    public static void main(String[] args) {

        List<Integer> list = new ArrayList<>();
        Collections.addAll(list,2,3,4,5,6,7,8,9);
        // 2: 从大到小排序
        // 此时lambda中的形参a和b就是集合中的两个元素
        list.sort((a,b)->{
            return b-a;
        });
        System.out.println(list);

        // 创建2个TreeSet集合,都是存字符串,都是按字符串长度降序排序,如果长度相同,按字典顺序升序排序
        // 直接定义一个lambda,赋值给一个接口!!!
        Comparator<String> c = (s1, s2)->{
            //先按字符串长度降序排序：s2.length() - s1.length() 为正，说明 s2 更长，排在前面。
            int i = s2.length()-s1.length();
            //三元表达式：若 i == 0（长度相同），则调用 s1.compareTo(s2) 按字典顺序升序排序；否则直接返回 i（按长度降序）。
            return i == 0? s1.compareTo(s2):i;
        };
        TreeSet<String> set1 = new TreeSet<>(c);
        TreeSet<String> set2 = new TreeSet<>(c);

        Collections.addAll(set1,"a","c","d","ee","fff");
        Collections.addAll(set2,"aa","ccc","dd","eee","fff");

        System.out.println(set1);
        System.out.println(set2);
    }
}
```

```java
public class LambdaTest2 {
    public static void main(String[] args) {

        double[] prices = {99.8, 128, 100};
        //1.把所有元素*0.8: 先用匿名内部类写法
        Arrays.setAll(prices, new IntToDoubleFunction() {
            @Override
            public double applyAsDouble(int value) {
                // value = 0  1  2
                return prices[value] * 0.8;
            }
        });
        //2.把所有元素*0.8: 改用Lamdba表达式写法
        Arrays.setAll(prices, (int value) -> {
                return prices[value] * 0.8;
        });
        System.out.println(Arrays.toString(prices));
        
        Student[] students = new Student[4];
        students[0] = new Student("蜘蛛精", 169.5, 23);
        students[1] = new Student("紫霞", 163.8, 26);
        students[2] = new Student("紫霞", 163.8, 26);
        students[3] = new Student("至尊宝", 167.5, 24);
        //3.对数组中的元素按照年龄升序排列: 先用匿名内部类写法
        Arrays.sort(students, new Comparator<Student>() {
            @Override
            public int compare(Student o1, Student o2) {
                return Double.compare(o1.getHeight(), o2.getHeight()); // 升序
            }
        });
        
        //4.对数组中的元素按照年龄升序排列: 改用Lambda写法
        Arrays.sort(students, (Student o1, Student o2) -> {
                return Double.compare(o1.getHeight(), o2.getHeight()); // 升序
        });
        System.out.println(Arrays.toString(students));
    }
}
```

### 1.4 Lambda表达式的前提

```java
/*
    Lambda表达式的前提
        1.必须要有接口(函数式接口):
            该接口中必须被覆盖重写的抽象方法,只能有一个,可以有默认方法,可以有静态方法
        2.必须有方法使用函数式接口作为方法参数
    @Override: 检测子类方法是否是对父类方法的覆盖重写
    @FunctionalInterface: 检测是否是函数是接口的
 */
```

### 1.5 自定义函数式接口

```java
//函数式接口
@FunctionalInterface
public interface MyFunctionalInter {
    //抽象方法
    public abstract void method();
    //public abstract void show(String str);
}

//测试类
public class Demo05LambdaBase {
    public static void main(String[] args) {
        //1.匿名内部类的方式
        fun(new MyFunctionalInter() {
            @Override
            public void method() {
                System.out.println("匿名内部类的方式....");
            }
        });

        //2.使用lambda表达式的标准格式
        fun(()->{
            System.out.println("使用lambda表达式的标准格式...");
        });

        //3.使用lambda表达式的简化格式
        fun(()-> System.out.println("使用lambda表达式的简化格式"));
    }

    public static void fun(MyFunctionalInter mfi) {
        //调用抽象方法
        mfi.method();
    }
}
```

## 第二章 函数式接口

### 2.1 Supplier接口的get方法

```java
/*
    java中常用的函数式接口,都被定义在java.util.function包中
        java.util.function.Supplier<T>接口: 供给型接口 
        功能: 提供一个T类型的数据
        抽象方法:
            public abstract T get(): 获取一个泛型指定类型的数据
 */

//练习  使用 生产者接口

public class MyTest02_1 {
    public static void main(String[] args) {
        // 要想成功的调用 method 方法,需要提前准备一个 Supplier 接口的实现类对象
        // 使用匿名内部类创建 Supplier 接口的实现类对象,并作为方法的实际参数使用
        method(new Supplier<Integer>() {
            @Override
            public Integer get() {
                System.out.println("自己规定的生成的逻辑执行了............");
                return 666;
            }
        });
    }

    // 由method方法的调用者,决定"如何生成数据",method方法仅负责对"生产的结果"进行处理
    public static <T> void method(Supplier<T> sup){
        // 面向 sup 对象,调用 get方法,就可以得到一个具体的结果
        T t = sup.get();
        System.out.println("method方法,最终通过 sup对象得到的结果是:"+t);
    }
}
```

### 2.2 Consumer接口的accept方法

```java
/*	java中常用的函数式接口,都被定义在java.util.function包中
        java.util.function.Consumer<T>接口: 消费型接口 功能: 消费(处理)一个T类型的数据
        抽象方法:
            public abstract void accept(T t): 消费一个泛型指定类型的数据t
            accept单词: 接收的意思
            什么叫做消费呢?只要给accept方法添加方法体{},就叫做消费,不管{}中写的是什么
    练习:
        给你一个字符串,请按照大写的方式进行消费

/*
    练习  使用 消费者接口
 */
public class MyTest02_2 {
    public static void main(String[] args) {
        // 要想成功的调用 method 方法,需要提前准备一个 Consumer 接口的实现类对象
        // 使用匿名内部类创建 Consumer 接口的实现类对象,并作为方法的实际参数使用
        method(new Consumer<Object>() {
            @Override
            public void accept(Object o) {
                System.out.println("具体的消费逻辑,执行了,得到的实际数据是:"+o);
            }
        },345);
    }

    // 由method方法的调用者,决定"如何生成数据",method方法仅负责对"生产的结果"进行处理
    public static <T> void method(Consumer<T> con,T t){
        con.accept(t);
        System.out.println("method方法,最终通过 con对象把数据:"+t+"消灭掉了...");
    }
}
```

### 2.3 Function接口的apply方法

```java
/*
    java中常用的函数式接口,都被定义在java.util.function包中

        java.util.function.Function<T, R>接口: 转换型接口 功能: 把T类型的数据转换成R类型
        抽象方法:
            public abstract R apply(T t): 根据方法参数T类型的t,获取R类型的数据

            转换前: T类型
            转换后: R类型

        练习:
            给你一个String的数字,你给我转成一个int数字
            转换前: String类型   <---T
            转换后: Integer类型  <---R
 */
/*
    练习  使用 消费者接口
 */
public class MyTest02_3 {
    public static void main(String[] args) {
        // 要想成功的调用 method 方法,需要提前准备一个 Consumer 接口的实现类对象
        // 使用匿名内部类创建 Consumer 接口的实现类对象,并作为方法的实际参数使用
        Integer res = method(new Function<String, Integer>() {
            // 写具体的转换的逻辑  把String转成Integer
            public Integer apply(String s) {
                System.out.println("准备开始转换...");
                return Integer.parseInt(s);
            }
        },"123");
        System.out.println("main方法通过method得到的结果是:"+res);
    }

    // 由method方法的调用者,决定"如何生成数据",method方法仅负责对"生产的结果"进行处理
    public static <T,R> R method(Function<T,R> fun, T t){
        R r = fun.apply(t);
        System.out.println("method方法,最终通过 fun对象把数据:"+t+"转成了数据"+r);
        return r;
    }
}

```

### 2.4 Predicate的test方法

```java
/*
    java中常用的函数式接口,都被定义在java.util.function包中

        java.util.function.Predicate<T>接口: 判断型接口 功能: 根据T类型的数据获取boolean类型的结果
        抽象方法:
            public abstract boolean test(T t): 根据方法参数T类型的数据t,返回一个boolean类型的结果

    练习:
        //1.练习:判断字符串长度是否大于5
        //2.练习:判断字符串是否包含"H"
 */
/*
    练习  使用 断言者接口   碰环境
 */
public class MyTest02_4 {
    public static void main(String[] args) {
        boolean res = method(new Predicate<Integer>() {
            @Override
            public boolean test(Integer integer) {
                System.out.println("即将判断"+integer+"是不是偶数!");
                return integer%2==0;
            }
        }, 23);
        System.out.println("main方法通过method得到的结果是:"+res);
    }

    // 由method方法的调用者,决定"如何生成数据",method方法仅负责对"生产的结果"进行处理
    public static <T> boolean method(Predicate<T> pre, T t){
        Boolean r = pre.test(t);
        System.out.println("method方法,最终通过 pre对象把数据:"+t+"转成了布尔结果是"+r);
        return r;
    }
}
```


## 第三章 Stream流

### 3.1 流式思想的介绍

![1602322734160](imgs/1602322734160.png)

**Stream流体验**

案例需求：有一个List集合，元素有`"张三丰","张无忌","周芷若","赵敏","张强"`，找出姓张，且是3个字的名字，存入到一个新集合中去。

```java
List<String> names = new ArrayList<>();

Collections.addAll(names, "张三丰","张无忌","周芷若","赵敏","张强");
System.out.println(names);
```

- 用传统方式来做，代码是这样的

```java
// 找出姓张，且是3个字的名字，存入到一个新集合中去。
List<String> list = new ArrayList<>();

for (String name : names) {
    if(name.startsWith("张") && name.length() == 3){
        list.add(name);
    }
}
System.out.println(list);
```

- 用Stream流来做，代码是这样的

```java
List<String> list2 = names.stream().filter(s -> s.startsWith("张") && s.length() == 3).collect(Collectors.toList());
        System.out.println(list2);
```

![null](https://cdn.nlark.com/yuque/0/2026/png/22219232/1773406864463-1b2747e5-2bd1-4f77-b0e2-6a4c6f8a339f.png)

### 3.2 获取Stream流的方式

```java
/*
    获取Stream流的方式    
        java.util.stream.Stream<T>流: 是Java 8新加入的最常用的流接口。
            问题: 要想使用Stream流,必须先获取到Stream<T>接口的实现类对象
        
        方式一: 获取Collection集合对象的Stream流对象
            java.util.Collection<T>接口: 单列集合的根接口
            默认方法:
                public default Stream<E> stream(): 获取Collection集合对象的Stream流对象
                返回值类型:
                    java.util.stream.Stream<T>: 接口,该方法内部必然返回接口的实现类对象
            也就是说: 如果能够调用Collection接口中的默认方法stream,也就可以获取到Stream流对象
                Collection接口中的默认方法stream必须由Collection接口的实现类对象调用
                Collection接口的实现类: ArrayList/LinkedList/HashSet/LinkedHashSet
        方式二: 获取数组对应的Stream流对象
            java.util.stream.Stream<T>接口
            静态方法: 由接口名称直接调用
                public static<T> Stream<T> of(T... values): 获取方法可变参数对应的Stream流对象
                返回值类型:
                    java.util.stream.Stream<T>: 接口,该方法内部必然返回接口的实现类对象
                参数列表:
                    T... values: 可变参数,可以传递参数列表,可以传递数组,还可以不传参
   //1.获取List集合对象对应的Stream流对象
   //2.获取Set集合对象对应的Stream流对象   
 */
 
/*
    练习获取流对象的 4种方式
 */
public class Test04_1 {
    public static void main(String[] args) {
        // 1: 创建单列集合
        List<Integer> list = List.of(2, 5, 8, 3, 6, 9);
        // 2: 直接获取流对象
        Stream<Integer> stream = list.stream();
        System.out.println(stream);

        // 3: 创建双列集合
        Map<Integer, Integer> map = Map.of(1, 11, 2, 22, 3, 33);
        // 4: map必须先转单列集合,再获取流
        Set<Map.Entry<Integer, Integer>> set = map.entrySet();
        Stream<Map.Entry<Integer, Integer>> stream1 = set.stream();
        System.out.println(stream1);

        // 5: 数组转流
        String[] arr = {"aa","bb"};
        Stream<String> stream2 = Arrays.stream(arr);
        System.out.println(stream2);

        // 6: 零散数据
        Stream<String> a = Stream.of("a", "b");
        System.out.println(a);
    }
}
```
### 常用方法

```text
一、常用中间操作
filter：过滤操作，保留流中符合断言条件的元素，剔除不满足条件的元素。
map：元素映射转换，将流中的每个元素按照指定规则转换为另一个元素，支持同类型 / 跨类型的转换。
flatMap：扁平化映射，将流中每个嵌套的容器元素（如集合、数组）拆分为单个元素，最终合并为一个新的流，解决多层嵌套结构的流处理问题。
sorted：元素排序，无参版本为元素的自然排序，有参版本可传入自定义比较器，实现指定规则的排序。
distinct：元素去重，基于元素的equals()和hashCode()方法，去除流中的重复元素。
limit：流截取，保留流中前 N 个元素，直接截断超出数量的部分。
skip：元素跳过，跳过流中前 N 个元素，仅保留剩余的元素。
peek：遍历消费（调试专用），对流中每个元素执行指定的消费操作，不会改变元素本身，多用于流处理链路的调试。

二、常用终端操作
1. 结果收集类
collect：流结果聚合收集，最核心的终端操作之一，通过传入收集器（通常由Collectors工具类提供），可将流转换为 List、Set、Map 等集合容器，也可实现分组、分区、字符串拼接、统计等复杂聚合操作。
toArray：流转数组，将流中的所有元素转换为对应类型的数组。

2. 遍历消费类
forEach：全量遍历，对流中每个元素执行指定的消费操作，无返回值，串行流下按元素顺序执行，并行流下不保证执行顺序。
forEachOrdered：有序遍历，严格按照流的元素定义顺序执行遍历操作，即使在并行流中也能保证执行顺序与元素顺序一致。

3. 匹配判断类（均为短路求值）
anyMatch：任意匹配，判断流中是否存在至少一个符合断言条件的元素，返回布尔值，匹配到第一个符合条件的元素时立即终止计算。
allMatch：全量匹配，判断流中是否所有元素都符合断言条件，返回布尔值，遇到第一个不符合条件的元素时立即终止计算。
noneMatch：无匹配，判断流中是否没有任何元素符合断言条件，返回布尔值，遇到第一个符合条件的元素时立即终止计算。

4. 查找获取类
findFirst：获取首个元素，返回流中第一个元素，结果封装为Optional对象，空流返回空的Optional，有序流中可稳定返回首个元素。
findAny：获取任意元素，返回流中任意一个元素，结果封装为Optional对象，空流返回空的Optional，串行流中多返回首个元素，并行流中用于提升获取效率。

5. 归约聚合类
reduce：归约计算，将流中所有元素按照指定的累加规则，逐步合并为一个最终结果，支持设置初始值，可实现求和、求最值、字符串拼接等各类聚合操作。

6. 基础统计类
count：元素计数，统计并返回流中元素的总个数，返回值为 long 类型。
max：获取最大值，根据传入的比较器规则，返回流中的最大元素，结果封装为Optional对象。
min：获取最小值，根据传入的比较器规则，返回流中的最小元素，结果封装为Optional对象。
```

```java

/*
    练习获取流对象的 中间方法
 */
public class Test04_3 {
    public static void main(String[] args) {
        // 1: 创建单列集合
        List<Integer> list = List.of(2, 5,4,10,2,4,12,88 ,8, 3, 6, 9,2,6,2,0,8);
        // 2: 保留所有的大于2偶数并去重,跳过第1个,保留前3个,
        list.stream()
                .filter(s->s>2&&s%2==0)
                .distinct()
                .skip(1)
                .limit(3)
                .forEach(s-> System.out.println(s));
    }
}

public class Test04_4 {
    public static void main(String[] args) {
        // 1: 创建单列集合
        List<String> list1 = List.of("11","22","333","5","666","22");
        List<String> list2 = List.of("5","6","7","88","999","6");
        // 2: 第1个集合保留长度为2的数据,第2个集合保留长度为1的数据,合并流之后,去重,把数据转成int,从大到小排序,输出
        Stream<String> stram1 = list1.stream()
                .filter(s -> s.length() == 2);
        Stream<String> stream2 = list2.stream().filter(s -> s.length() == 1);
        Stream.concat(stram1,stream2)
                .distinct()
                .map(s->Integer.parseInt(s))
                //.mapToInt(s->Integer.parseInt(s)) 返回的是 IntStream,只能升序排序,不能指定排序规则
                .sorted((a,b)->b-a)
                .forEach(s-> System.out.println(s));

        Optional<String> max = list1.stream().max((s1, s2) -> Integer.parseInt(s1) - Integer.parseInt(s2));
        String s = max.get();
        System.out.println(s);

    }
}

/*
    练习获取流对象的 总结方法
 */
public class Test04_5 {
    public static void main(String[] args) {
        // 1: 创建单列集合
        List<String> list1 = List.of("11","22","333","5","666","22");
        // 2: 获取流对象,统计长度为2的字符串的个数
        long count = list1.stream().filter(s -> s.length() == 2).count();
        System.out.println(count);
        System.out.println(list1);
    }
}
```

### 3.3 Stream的forEach方法

```java
/*
    java.util.stream.Stream<T>接口: 我们已经可以获取Stream接口的实现类对象
    抽象方法:
        public abstract void forEach(Consumer<T> con):
            按照方法参数con指定的规则对Stream流对象中的元素逐一处理
            参数:
                Consumer<T> con: 消费型接口,传递匿名内部类对象,lambda表达式
        java.util.function.Consumer<T>接口: 消费型接口 功能: 消费(处理)一个T类型的数据
        抽象方法:
            public abstract void accept(T t): 消费一个泛型指定类型的数据t
            accept单词: 接收的意思
            什么叫做消费呢?只要给accept方法添加方法体{},就叫做消费,不管{}中写的是什么
 */
/*
    练习获取流对象的 数组获取流和静态方法of的区别
 */
public class Test04_6 {
    public static void main(String[] args) {
        // 1: 创建单列集合
        int[] arr = {1,3,5};
        // 2: 分别使用两种方式获取流对象,并输出结果
        Arrays.stream(arr).forEach(s-> System.out.println(s));
        Stream.of(arr).forEach(s-> System.out.println(s));

        String[] arr2 = {"a","b"};
        Arrays.stream(arr2).forEach(s-> System.out.println(s));
        Stream.of(arr2).forEach(s-> System.out.println(s));
    }
}
```

**Collection集合的forEach方法**

```java
//Stream流遍历Collection集合
        //单列集合调用forEach方法,传递lambda表达式标准格式
        coll.forEach(s-> System.out.println(s));
    }
}
```

**Map集合的forEach方法**

```java
//Map集合的forEach方法
        //双列集合调用forEach方法,传递lambda表达式简化格式
        map.forEach((key, value) -> System.out.println(key + "==" + value));
    }
}
```

### 3.4 数据收集到 单列集合和双列结合

```java
/*
    练习获取流对象的 数据收集到 单列集合
 */
public class Test04_7 {
    public static void main(String[] args) {
        // 1: 创建单列集合
        List<Integer> list = List.of(2, 5, 8, 3, 6, 9, 1, 4, 7);
        // 找出所有的偶数并收集到一个新的list集合中
        List<Integer> list1 = list.stream().filter(s -> s % 2 == 0).collect(Collectors.toList());
        System.out.println(list1);
        System.out.println(list);
        // 找出所有的偶数并收集到一个新的set集合中

        Set<Integer> set = list.stream().filter(s -> s % 2 == 0).collect(Collectors.toSet());
        System.out.println(set);

        // 收集到数组
        String[] array = list.stream()
	    .filter(s -> s % 2 == 1)      // 第一步：过滤
	    .map(s->String.valueOf(s))     // 第二步：类型转换
	    .toArray(s->new String[s]);    // 第三步：收集到数组（核心）
        System.out.println(Arrays.toString(array));
    }
}
```
```txt
/*
    抽象方法:
        public abstract <R> Stream<R> map(Function<T, R> mapper)
            按照方法参数mapper指定的方式把Stream流对象中的T类型的元素转换成R类型,返回新的Stream流
            参数:
                Function<T, R> mapper: 转换型接口

        java.util.function.Function<T, R>接口: 转换型接口 
        功能: 把T类型的数据转换成R类型
        抽象方法:
            public abstract R apply(T t): 根据方法参数T类型的t,获取R类型的数据
            转换前: T类型
            转换后: R类型
   	map: 映射
   	如果需要将流中的元素映射到另一个流中,可以使用map方法.方法签名
   	public abstract <R> Stream<R> map(Function<T, R> mapper);
   	该方法需要一个Function函数式接口参数,可以将当前流中的T类型数据转换为另一种R类型的流.
 */
```

```java
/*
    练习获取流对象的 数据收集到 双列集合
 */
public class Test04_8 {
    public static void main(String[] args) {
        // 1: 创建单列集合
        List<String> list = List.of("a,aa","b,bb","c,ccc");
        // 如果要把流中的数据收集到双列集合中,必须指定 "每个元素"如何转成 map的key和map的value
        // 收集到 Map
		Map<String, String> map = list.stream()
	    .collect(Collectors.toMap(
	        s -> s.split(",")[0],  // 第一个参数：Key 怎么来？
	        s -> s.split(",")[1]   // 第二个参数：Value 怎么来？
	    ));
		System.out.println(map);

        // 准备一个list集合
        List<Integer> list1 = List.of(2, 5, 8);
        // 把list1的数据收集到map,数字本身作为map的key,本身放大2倍作为value
        Map<Integer, Integer> map1 = list1.stream().collect(Collectors.toMap(s -> s, s -> s * 2));
        System.out.println(map1);
    }
}
```


### 3.5 Stream流的练习
```java
public class Actor {
    private String name;

    @Override
    public String toString() {
        return "Actor{" +
                "name='" + name + '\'' +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Actor(String name) {
        this.name = name;
    }
}
```

```java
public class Test {
    public static void main(String[] args) {
        // 1: 创建两个集合,分别保存男演员和女演员的姓名
        List<String> list = List.of("张学友", "周润发", "黎明", "伍佰", "刘德华");
        List<String> list2 = List.of("杨紫", "杨敏", "杨毅杨", "杨柳", "鸡柳");

        Stream<String> stream = list.stream()
                .filter(s -> s.length() == 3)
                .limit(2);

        Stream<String> stream1 = list2.stream()
                .filter(s -> s.startsWith("杨"))
                .skip(1);

        // 转演员对象之后,收集到map,使用名字作为key,对象本身作为value
        Map<String, Actor> map = Stream.concat(stream, stream1).map(s -> new Actor(s)).collect(Collectors.toMap(s -> s.getName(), s -> s));
        System.out.println(map);
        
        /*
        // 转演员对象之后,收集到map,使用名字作为key,对象本身作为value
        Map<String, Actor> map = Stream.concat(stream, stream1).map(Actor::new)
                .collect(Collectors.toMap(s -> s.getName(), s -> s));
        System.out.println(map);
        */
    }
}
```


```java
1. Stream.concat(stream, stream1) —— 合并流
作用：把两个流 “拼” 在一起，变成一个大流。
结果：
新的大流里的数据顺序是：["张学友", "周润发", "杨敏", "杨毅杨", "杨柳"]。

2. .map(s -> new Actor(s)) —— 映射（转型）

流里现在是 String（字符串名字）。
s 代表当前的名字（例如第一个 s 是 "张学友"）。
new Actor(s)：调用 Actor 的构造方法，把这个名字传进去，造一个新的 Actor 对象。
结果：
流变成了 Stream<Actor>。
里面装的是 5 个对象：[Actor对象(张学友), Actor对象(周润发), ...]。

3. .collect(Collectors.toMap(s -> s.getName(), s -> s)) —— 收集到 Map

第一个参数 s -> s.getName() (Key 的规则)：
s：现在代表流里的 Actor 对象。
s.getName()：调用 Actor 的 getName() 方法，**拿到名字字符串。**

第二个参数 s -> s (Value 的规则)：
s：还是那个 Actor 对象。
s：直接返回它自己。
含义：Map 的 Value 就存这个对象本身。
```

-----------

## 第四章 方法引用

### 例子

```java
/*
    我们自定义的类
 */
public class MyTools {

    public static boolean isEven(int a){
        System.out.println("自定义的类中.......判断是不是偶数:"+a);
        return a%2==0;
    }

    public boolean isOdd(int a){
        System.out.println("自定义的类中.......判断是不是奇数:"+a);
        return a%2==1;
    }

}

public class MtTest02 {
    public static void main(String[] args) {
        // 1: 创建集合
        List<Integer> list = List.of(1, 3, 5, 7, 2, 5, 7, 8, 4);
        ArrayList<Integer> list1 = new ArrayList<>(list);
        // 2: 面向list1集合对象,调用 removeif方法,删除所有的偶数
        // 我们此时写的lambda,就是在描述"元素是不是偶数"刚好,这个"描述"已经提前被 MyTools的静态方法 isEven写好了,我们就可以使用 方法引用的技术,把 isEven方法引用过来
        //list1.removeIf(s->s%2==0);
        // 使用方法
        //list1.removeIf(MyTools::isEven);

        // 使用lambda删除所有的奇数
        // list1.removeIf(s->s%2==1);
        // 使用成员方法引用删除所有的奇数
        MyTools tools = new MyTools();
        list1.removeIf(tools::isOdd);
        System.out.println(list1);

    }
}
```

### 4.1 输出语句的方法引用

```java
/*
    方法引用格式符:    ::
    输出语句: System.out.println(...);
    方法引用: System.out::println    
    注意:
        System.out是PrintStream类的对象
        PrintStream类中有个方法println方法
        println方法是用来处理接口抽象方法printLine的参数的
        要求:
            println方法和接口抽象方法printLine的参数列表一致
        方法引用是对lambda表达式的一种简化书写格式
    限制:
        1.lambda表达式{}中只能有一句话
        2.lambda表达式中不能对参数进行任何处理
 */
```



```java
//接口
@FunctionalInterface
public interface MyPrinter {
    //抽象方法
    public abstract void printLine(String str);
}
//测试类
public class Demo04MethodRef {
    public static void main(String[] args) {
        String str = "hello world";
        //1.匿名内部类的方式
        show(str, new MyPrinter() {
            @Override
            public void printLine(String str) {
                System.out.println(str);
            }
        });
        //2.使用lambda表达式的标准格式
        show(str,(String s)->{
            System.out.println(s);
        });
        //3.使用lambda表达式的简化格式
        show(str,s-> System.out.println(s));
        //4.使用方法引用
        /*
            输出语句: System.out.println(...);
            方法引用: System.out::println
            注意:
                System.out是PrintStream类的对象
                PrintStream类中有个方法println方法
                println方法是用来处理接口抽象方法printLine的参数的
                要求:
                    println方法和接口抽象方法printLine的参数列表一致
         */
        show(str,System.out::println);
    }
    //定义方法,使用函数式接口MyPrinter作为方法参数
    public static void show(String ss,MyPrinter mp) {
        mp.printLine(ss);
    }
}
```

![1602323898040](imgs/1602323898040.png)

### 4.2 对象名的方法引用

```java
/*
    对象名的方法引用:
        对象名::方法名称
 */
//助手类
public class Assistant {
    public void buyComputer(Integer money) {
        System.out.println("很高兴为您买到价值为: "+money+" 元的一台电脑");
    }
}
//测试类
public class Demo05MethodRef {
    public static void main(String[] args) {
        int money = 10000;
        //创建助手类的对象
        Assistant as = new Assistant();
        //1.匿名内部类的方式
        show(money, new Consumer<Integer>() {
            @Override
            public void accept(Integer num) {
                as.buyComputer(num);
            }
        });
        //2.使用lambda表达式的标准格式

        show(money,(Integer num)->{
            as.buyComputer(num);
        });

        //3.使用lambda表达式的简化格式
        //4.使用方法引用
        /*
            Assistant类的buyComputer方法,
            就可以成为接口抽象方法accept的解决方案
            要求:
               buyComputer方法和 accept方法的参数列表要一致
         */
        show(money,as::buyComputer);
    }
    //定义方法,使用函数式接口作为参数
    public static void show(Integer money,Consumer<Integer> con) {
        con.accept(money);
    }
}
```



### 4.3 类名引用静态方法

```java
/*
    静态方法的方法引用:
        类名称::方法名称
 */
//助手类
public class Assistant {
    public static void buyComputer(Integer money) {
        System.out.println("很高兴为您买到价值为: "+money+" 元的一台电脑");
    }
}
//测试类
public class Demo06MethodRef {
    public static void main(String[] args) {
        int num = 10000;
        //1.匿名内部类的方式
        show(num, new Consumer<Integer>() {
            @Override
            public void accept(Integer n) {
                Assistant.buyComputer(n);
            }
        });

        //2.使用lambda表达式的标准格式
        show(num,(Integer n)->{
            Assistant.buyComputer(n);
        });

        //3.使用方法引用
        /*
            Assistant类的buyComputer方法,
            就可以成为接口抽象方法accept的解决方案
            要求:
               buyComputer方法和 accept方法的参数列表要一致
         */
        show(num,Assistant::buyComputer);//简单理解: 把num交给Assistant类的静态方法buyComputer
    }
    //定义方法,使用函数式接口Consumer作为方法的参数
    public static void show(Integer i,Consumer<Integer> con) {
        con.accept(i);
    }
}

```

### 4.4 类名引用静态方法练习

```java
/*
    给你一个String类型的数字,转换成int数字

    转换型接口: Function<T,R>
        转换前类型: String类型 <---T
        转换后类型: Integer类型 <---R
 */
public class Demo07MethodRefTest {
    public static void main(String[] args) {
        String str = "1235";
        //1.匿名内部类的方式
        show(str, new Function<String, Integer>() {
            @Override
            public Integer apply(String s) {
                //String --> int
                return Integer.parseInt(s);
            }
        });

        //2.使用lambda表达式的标准格式
        show(str,(String s)->{return Integer.parseInt(s);});

        //3.使用方法引用
        /*
            Integer类的parseInt方法,
            就可以成为接口抽象方法accept的解决方案
            要求:
               parseInt方法和 accept方法的参数列表要一致
         */
        show(str,Integer::parseInt);//把str交给Integer类的静态方法parseInt处理
    }
    //定义方法使用函数式接口Function作为方法的参数
    public static void show(String strNum,Function<String,Integer> fun) {
        Integer num = fun.apply(strNum);
        System.out.println(num);
    }
}
```



### 4.5 类名引用构造方法

```java
/*
    类名引用构造方法
        类名::new
        给你一个字符串String(名字),转换成一个Person对象
    转换型接口: Function<T,R>
        转换前类型: String类型 <---T
        转换后类型: Person类型 <---R
 */
//标准Java类
public class Person {
    private String name;
	//toString方法,空参/满参构造,get/set方法
}
//测试类
public class Demo07ConstructorRef {
    public static void main(String[] args) {
        String name = "张三";
        //1.匿名内部类的方式
        show(name, new Function<String, Person>() {
            @Override
            public Person apply(String s) {
                return new Person(s);
            }
        });
        //2.使用lambda表达式的标准格式
        show(name,(String n)->{return new Person(n);});
        //3.使用方法引用
        /*
            Person类的有参构造方法,可以成为接口抽象方法apply的解决方案
         */
        show(name,Person::new);//把name交给Person类的构造方法
    }
    //定义方法,使用函数式接口Function作为参数
    public static void show(String name,Function<String,Person> fun) {
        Person p = fun.apply(name);
        System.out.println(p);
    }
}
```

![1602323971902](imgs/1602323971902.png)

### 4.6 数组的构造引用

```java
/*
    数组的构造引用
        数据类型[]::new
        给你一个Integer数字,获取到一个数组,数组的长度就是给的Integer数字
    转换型接口: Function<T,R>
        转换前类型: Integer类型 <---T
        转换后类型: int[]类型 <---R
 */
public class Demo08ArrayMethodRef {
    public static void main(String[] args) {
        int len = 5;
        //1.匿名内部类的方式
        show(len, new Function<Integer, int[]>() {
            @Override
            public int[] apply(Integer num) {
                int[] arr = new int[num];
                for (int i = 0; i < arr.length; i++) {
                    arr[i] = i*10;
                }
                return arr;
            }
        });
        //2.使用lambda表达式的标准格式
        show(len,(Integer num)->{return new int[num];});
        //3.使用方法引用
        show(len,int[]::new);
    }
    //定义方法,使用函数式接口Function作为参数
    public static void show(Integer num,Function<Integer, int[]> fun) {
        int[] arr = fun.apply(num);
        System.out.println("数组长度: "+arr.length);
    }
}
```

# 作业

```java
public enum MyStatus {
    //1-待支付，2-已支付，3-已发货，4-已完成，5-已取消）
    DAI,YI,FA,OVER,CANCEL
}
```

```java

public class Order {
    //订单ID（String）、用户ID（String）、订单金额（double）、订单状态（int：1-待支付，2-已支付，3-已发货，4-已完成，5-已取消）
    private String oid;
    private String uid;
    private double money;
    private MyStatus status;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Order order = (Order) o;

        if (Double.compare(money, order.money) != 0) return false;
        if (!Objects.equals(oid, order.oid)) return false;
        if (!Objects.equals(uid, order.uid)) return false;
        return status == order.status;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = oid != null ? oid.hashCode() : 0;
        result = 31 * result + (uid != null ? uid.hashCode() : 0);
        temp = Double.doubleToLongBits(money);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (status != null ? status.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Order{" +
                "oid='" + oid + '\'' +
                ", uid='" + uid + '\'' +
                ", money=" + money +
                ", status=" + status +
                '}';
    }

	...
    public Order(String oid, String uid, double money, MyStatus status) {
        this.oid = oid;
        this.uid = uid;
        this.money = money;
        this.status = status;
    }
}

```

```java
public class User {
    // 用户信息：用户ID（String）、用户名（String）、用户等级（int：1-普通，2-白银，3-黄金，4-铂金，5-钻石）
    private String uid;
    private String name;
    private int level;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        User user = (User) o;

        if (level != user.level) return false;
        if (!Objects.equals(uid, user.uid)) return false;
        return Objects.equals(name, user.name);
    }

    @Override
    public int hashCode() {
        int result = uid != null ? uid.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + level;
        return result;
    }

    @Override
    public String toString() {
        return "User{" +
                "uid='" + uid + '\'' +
                ", name='" + name + '\'' +
                ", level=" + level +
                '}';
    }

...

    public User(String uid, String name, int level) {
        this.uid = uid;
        this.name = name;
        this.level = level;
    }
}

```

```java
public class OrderProcessor {
    /*
        1. 筛选出所有已支付的订单（状态为2）
        2. 计算所有已支付订单的总金额
        3. 找出金额最高的前3个订单
        4. 将所有订单按金额从高到低排序后输出
     */
    private List<Order> orderList = new ArrayList<>();

    private Map<String,User> map = new HashMap<>();

    public OrderProcessor() {
        orderList.add(new Order("001","u01",100,MyStatus.DAI));
        orderList.add(new Order("002","u01",200,MyStatus.FA));
        orderList.add(new Order("003","u01",300,MyStatus.YI));
        orderList.add(new Order("004","u02",400,MyStatus.OVER));
        orderList.add(new Order("005","u02",500,MyStatus.CANCEL));
        orderList.add(new Order("006","u01",600,MyStatus.YI));
        orderList.add(new Order("007","u01",700,MyStatus.DAI));

        map.put("u01",new User("u02","迪丽热巴",5));
        map.put("u02",new User("u02","杨幂",3));
    }

    //1. 筛选出所有已支付的订单（状态为2）
    public void showYi(){
        orderList.stream().filter(order -> order.getStatus() == MyStatus.YI).forEach(s-> {
            User user = map.get(s.getUid());
            System.out.println(user+"===>"+s);
        });
    }
    //2. 计算所有已支付订单的总金额
    public void showPayMoney(){
        double sum = orderList.stream().filter(order -> order.getStatus() == MyStatus.YI).mapToDouble(s -> s.getMoney()).sum();
        System.out.println("已经支付的订单总金额是:"+sum);
    }

    //4. 将所有订单按金额从高到低排序后输出
    public void showByPrice(){
        orderList.stream().sorted((a,b)->Double.compare(b.getMoney(),a.getMoney())).forEach(System.out::println);
    }
    // 3. 找出金额最高的前3个订单
    public void showTop3(){
        orderList.stream().sorted((a,b)->Double.compare(b.getMoney(),a.getMoney())).limit(3).forEach(System.out::println);
    }

}
```

```java
public class TestAPP {
    public static void main(String[] args) {
        OrderProcessor app = new OrderProcessor();
        app.showYi();

        app.showPayMoney();

        app.showByPrice();

        System.out.println("-----------------");

        app.showTop3();
    }
}

```

```java

```