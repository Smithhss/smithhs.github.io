---
title: Collection集合、List集合、斗地主、泛型
date: 2026-03-27 09:09:41
tags:
  - Java
  - JavaSE
categories: 编程开发
cover: 'https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205212245.png'
---



## 1.Collection集合

### 1.1数组和集合的区别

- 相同点

  都是容器,可以存储多个数据

- 不同点

  - **数组的长度是不可变的,集合的长度是可变的**

  - 数组可以存基本数据类型和引用数据类型

    **集合只能存引用数据类型**,如果要存基本数据类型,需要存对应的**包装类**

### 1.2集合类体系结构

![image-20260327115004823](img/image-20260327115004823.png)

一类是单列集合元素是一个一个的，
另一类是双列集合元素是一对一对的。

![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205212245.png)

### 1.3Collection 集合

**Collection是单列集合的根接口**，Collection接口下面又有两个子接口List接口、Set接口，List和Set下面分别有不同的实现类，如下图所示：

- 创建Collection集合的对象

- **多态的方式**
- 具体的实现类ArrayList

上图中各种集合的特点如下图所示：
![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205212618.png)

各种集合的特点

```java
ArrayList<String> list = new ArrayList<>(); //存取顺序一致，可以重复，有索引
list.add("java1");
list.add("java2");
list.add("java1");
list.add("java2");
System.out.println(list); //[java1, java2, java1, java2] 

//  多态
//  List<String> list1 = new ArrayList<>(); //存取顺序一致，可以重复，有索引  
//  list.add("java1");  
//  list.add("java2");  
//  list.add("java1");  
//  list.add("java2");  
//  System.out.println(list); //[java1, java2, java1, java2]

HashSet<String> list = new HashSet<>(); //存取顺序不一致，不重复，无索引
list.add("java1");
list.add("java2");
list.add("java1");
list.add("java2");
list.add("java3");
System.out.println(list); //[java3, java2, java1] 
```

- Collection集合常用方法

  | 方法名                     | 说明                               |
  | ------------------------- | --------------------------------- |
  | boolean add(E e)           | 添加元素                           |
  | boolean remove(Object o)   | 从集合中移除指定的元素             |
  | boolean removeIf(Object o) | 根据条件进行移除                   |
  | void   clear()             | 清空集合中的元素                   |
  | boolean contains(Object o) | 判断集合中是否存在指定的元素       |
  | boolean isEmpty()          | 判断集合是否为空                   |
  | int   size()               | 集合的长度，也就是集合中元素的个数 |

```java
java.util.Collection<E>接口:
    常用方法:
        public boolean add(E e) ： 把给定的对象添加到当前集合中 
        public boolean addAll(Collection con): 把方法参数集合对象con中的所有元素添加到调用方法的集合对象中
        public void clear() :清空集合中所有的元素。
        public boolean remove(E e) : 把给定的对象在当前集合中删除。有相同元素,只能删除一个
		public boolean contains(Object obj) : 判断当前集合中是否包含给定的对象。
        public boolean isEmpty() : 判断当前集合是否为空。
        public int size() : 返回集合中元素的个数。
        public Object[] toArray() : 把集合中的元素，存储到数组中。

/*
    练习 collection接口的通用方法
 */
public class Test01 {
    public static void main(String[] args) {
        // 1: 以多态的形式创建集合的对象
        Collection<String> c = new ArrayList<>();
        // 2: 面向对象,调用方法
        boolean b = c.add("程程");
        c.add("文强");
        c.add("阿力");
        System.out.println(c);
        System.out.println(b);
        // 不能使用链式编程,持续添加数据,因为 add方法返回的是 boolean值,不是集合容器本身
        // 3: 删除数据  依靠对象的 equals方法判断要删除的元素是否存在
        boolean b1 = c.remove(new String("阿力"));
        System.out.println(b1); // true
        System.out.println(c);
        // 4: 查看集合长度
        System.out.println(c.size());
        // 5: 查看集合是否为空
        System.out.println(c.isEmpty());
        // 6: 清空集合
        c.clear();
        System.out.println(c.isEmpty());
        // 7: 继续添加数据
        c.add("宝宝");
        System.out.println(c);
        // 8: 把集合设置为null
        //c = null; // 直接把集合容器丢掉了,后续就不能继续使用了
        System.out.println(c.isEmpty());
        System.out.println(c.contains("程程"));
        System.out.println(c.contains(new String("宝宝")));// true
    }
}
        
/*
   练习 collection接口的通用方法 - 根据条件删除数据
*/
public class Test02 {
    public static void main(String[] args) {
        // 1: 以多态的形式创建集合的对象
        Collection<String> c = new ArrayList<>();
        // 2: 面向对象,调用方法
        c.add("aa");
        c.add("aaa");
        c.add("b");
        c.add("bb");
        c.add("c");
        c.add("ddd");
        // 删除 长度为2的字符串数据  利用 removeIf 要想成功的调用这个方法,必须给这个方法传递一个 `Predicate 接口类型的对象`,使用匿名内部类,创建一个对象,作为参数,传递给这个方法即可
        c.removeIf(new Predicate<String>() {
            // 在这个方法内部,写 "删除的规则"
            public boolean test(String s) {
                // 此时的s代表的就是 集合的每一个元素,这个test方法,会被 removeIf 方法循环调用
                System.out.println(s);
                return s.length() == 2;
            }
        });
        System.out.println(c);
    }
}

//7.public Object[] toArray(): 把集合转换为数组
Object[] array = c.toArray();
System.out.println(Arrays.toString(array)); //[java1,java2, java2, java3]

//8.如果想把集合转换为指定类型的数组，可以使用下面的代码
String[] array1 = c.toArray(new String[c.size()]);
System.out.println(Arrays.toString(array1)); //[java1,java2, java2, java3]

//9.还可以把一个集合中的元素，添加到另一个集合中
Collection<String> c1 = new ArrayList<>();
c1.add("java1");
c1.add("java2");
Collection<String> c2 = new ArrayList<>();
c2.add("java3");
c2.add("java4");
c1.addAll(c2); //把c2集合中的全部元素，添加到c1集合中去
System.out.println(c1); //[java1, java2, java3, java4]
```

### 1.4Collection集合的遍历

以前的普通for循环遍历需要索引，只有List集合有索引，而Set集合没有索引。

**我们需要有一种通用的遍历方式，能够遍历所有集合。**

```java
迭代器介绍

- 迭代器,集合的专用遍历方式
- Iterator<E> iterator(): 返回此集合中元素的迭代器,通过集合对象的iterator()方法得到
//Iterator中的常用方法
//boolean hasNext(): 判断当前位置是否有元素可以被取出
//E next(): 获取当前位置的元素,将迭代器对象移向下一个索引位置

Collection<String> c = new ArrayList<>();
c.add("赵敏");
c.add("小昭");
c.add("素素");
c.add("灭绝");
System.out.println(c); //[赵敏, 小昭, 素素, 灭绝]

//第一步：先获取迭代器对象
//解释：Iterator就是迭代器对象，用于遍历集合的工具)
Iterator<String> it = c.iterator();

//第二步：用于判断当前位置是否有元素可以获取
//解释：hasNext()方法返回true，说明有元素可以获取；反之没有
while(it.hasNext()){
    //第三步：获取当前位置的元素，然后自动指向下一个元素.
    String e = it.next();
    System.out.println(s);
}

//迭代器中删除的方法
//void remove(): 删除迭代器对象当前指向的元素

ArrayList<String> list = new ArrayList<>();
list.add("a");
list.add("b");
list.add("b");
list.add("c");
list.add("d");

Iterator<String> it = list.iterator();
while(it.hasNext()){
    String s = it.next();
    if("b".equals(s)){
        //指向谁,那么此时就删除谁.
        it.remove();
    }
}
System.out.println(list);
迭代器代码的原理如下：

- 当调用 iterator() 方法获取迭代器时，当前指向第一个元素
- hasNext() 方法则判断这个位置是否有元素，如果有则返回 true，进入循环
- 调用 next() 方法获取元素，并将当月元素指向下一个位置，
- 等下次循环时，则获取下一个元素，依此内推
```

### 1.5增强for循环

- 介绍

  - 其实还有一种更加简化的写法，叫做**增强for循环**。其内部原理是一个Iterator迭代器
  - 实现Iterable接口的类才可以使用迭代器和增强for

  ```java
  for(集合/数组中元素的数据类型 变量名 :  集合/数组名) {
  // 已经将当前遍历到的元素封装到变量中了,直接使用变量即可
  }
  ```

- 代码

  ```java
  Collection<String> c = new ArrayList<>();
          c.add("赵敏");
          c.add("小昭");
          c.add("素素");
          c.add("灭绝");
  
          //1.使用增强for遍历集合
          for (String s : c) {
              System.out.println(s);
          }
  
          //2.再尝试使用增强for遍历数组
          String[] arr = {"迪丽热巴", "古力娜扎", "稀奇哈哈"};
          for (String name : arr) {
              System.out.println(name);
          }
  ```

### **1.6forEach遍历集合**

在JDK8版本以后还提供了一个**forEach方法**也可以遍历集合，如果下图所示：
![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205213229.png)

我们发现forEach方法的**参数是一个Consumer接口，而Consumer是一个函数式接口**，所以可以传递Lambda表达式

```java
Collection<String> c = new ArrayList<>();
c.add("赵敏");
c.add("小昭");
c.add("素素");
c.add("灭绝");

//调用forEach方法
//由于参数是一个Consumer接口，所以可以传递匿名内部类
c.forEach(new Consumer<String>{
    @Override
    public void accept(String s){
        // accept 方法,每拿到一个元素 s，就自动调用一次 accept(s)。
        System.out.println(s);
    }
});

//也可以使用lambda表达式对匿名内部类进行简化
c.forEach(s->System.out.println(s)); //[赵敏, 小昭, 素素, 灭绝]
```

### 1.7练习Collection接口的存学生对象

```java
/*
    练习 collection接口的存学生对象
 */
public class Test04 {
    public static void main(String[] args) {
        // 1: 以多态的形式创建集合的对象
        Collection<Student> c = new ArrayList<>();
        // 2: 创建3个学生对象
        for (int i = 1; i <= 3; i++) {
            c.add(new Student("张三"+i,i+16));
        }
        //System.out.println(c);
        for (Student student : c) {
            System.out.println(student);
        }
    }
}
```



## 2.List集合

### 2.1概述

- List集合的概述
  - **有序集合**,这里的有序指的是存取顺序
  - 用户可以精确控制列表中每个元素的插入位置,用户可以通过整数索引访问元素,并搜索列表中的元素
  - 与Set集合不同,列表通常允许重复的元素
- List集合的特点
  - **存取有序**
  - **可以重复**
  - **有索引**

### 2.2List集合的方法

- 方法介绍

  | 方法名                          | 描述                                   |
  | ------------------------------- | -------------------------------------- |
  | void add(int index,E   element) | 在此集合中的指定位置插入指定的元素     |
  | E remove(int   index)           | 删除指定索引处的元素，返回被删除的元素 |
  | E set(int index,E   element)    | 修改指定索引处的元素，返回被修改的元素 |
  | E get(int   index)              | 返回指定索引处的元素                   |

- 示例代码

  ```java
  java.util.Collection<E>接口: 单列集合的根接口里面定义的方法,所有的子接口/实现类,都有
  java.util.List<E>子接口:
      特点:
          1.有序: 保证存入和取出元素的顺序是一致的
          2.有索引: 可以通过索引的方式获取元素
          3.可重复: 可以存储相同的元素
  List子接口,除了用于父接口的方法外,额外添加与索引相关的方法
  
  public void add(int index,E element) 在列表的指定位置上插入元素。
  public E get(int index) 返回列表中指定位置的元素。
  public E set(int index,E element) 用指定元素替换列表中指定位置的元素，并返回替换前的元素。
  public E remove(int index) 移除列表中指定位置的元素，并返回被移除之前的元素。
  
  对于集合,最常用的操作:
  增删改查: C(增: Create)R(查:Read)U(改: Update)D(删: Delete)
  
  public class Con {
      public static void main(String[] args) {
  
          //1.创建一个ArrayList集合对象（有序、有索引、可以重复）
          List<String> list = new ArrayList<>();
          list.add("蜘蛛精");
          list.add("至尊宝");
          list.add("至尊宝");
          list.add("牛夫人");
          System.out.println(list); //[蜘蛛精, 至尊宝, 至尊宝, 牛夫人]
  
          list.add(2, "紫霞仙子");
          System.out.println(list); //[蜘蛛精, 至尊宝, 紫霞仙子, 至尊宝, 牛夫人]
  
          System.out.println(list.remove(2)); //紫霞仙子
          System.out.println(list);//[蜘蛛精, 至尊宝, 至尊宝, 牛夫人]
          System.out.println(list.get(3));
          System.out.println(list.set(3, "牛魔王")); //牛夫人
          System.out.println(list); //[蜘蛛精, 至尊宝, 至尊宝, 牛魔王]
  
          private static void method4(List<String> list) {
              //  E get(int index)		返回指定索引处的元素
              String s = list.get(0);
              System.out.println(s);
          }
  
          private static void method3 (List < String > list) {
              //  E set(int index,E element)	修改指定索引处的元素，返回被修改的元素
              //被替换的那个元素,在集合中就不存在了.
              String result = list.set(0, "qqq");
              System.out.println(result);
              System.out.println(list);
          }
  
          private static void method2 (List < String > list) {
              //  E remove(int index)		删除指定索引处的元素，返回被删除的元素
              //在List集合中有两个删除的方法
              //第一个 删除指定的元素,返回值表示当前元素是否删除成功
              //第二个 删除指定索引的元素,返回值表示实际删除的元素
              String s = list.remove(0);
              System.out.println(s);
              System.out.println(list);
          }
  
          private static void method1 (List < String > list) {
              //  void add(int index,E element)	在此集合中的指定位置插入指定的元素
              //原来位置上的元素往后挪一个索引.
              list.add(0, "qqq");
              System.out.println(list);
          }
      }
  }
  ```

### 2.3List集合的遍历方式

List集合相比于前面的Collection多了一种可以通过索引遍历的方式，所以List集合遍历方式一共有四种：

- 普通for循环（只因为List有索引）
- 迭代器
- 增强for
- Lambda表达式

```java
List<String> list = new ArrayList<>();
list.add("蜘蛛精");
list.add("至尊宝");
list.add("糖宝宝");

//1.普通for循环
for(int i = 0; i< list.size(); i++){
    //i = 0, 1, 2
    String e = list.get(i);
    System.out.println(e);
}

//2.增强for遍历
for(String s : list){
    System.out.println(s);
}

//3.迭代器遍历
Iterator<String> it = list.iterator();
while(it.hasNext()){
    String s = it.next();
    System.out.println(s);
}

//4.lambda表达式遍历
list.forEach(s->System.out.println(s));
```

```java
/*
    练习 List删除数据
 */
public class ListTest02 {
    public static void main(String[] args) {
        // 1: 创建list集合
        List<Integer> list = new ArrayList<>();
        list.add(11);
        list.add(11);
        list.add(22);
        list.add(11);
        list.add(33);
        list.add(11);
        list.add(11);
        list.add(11);
        // 删除集合中的11,如果根据元素删,必须确保传递的参数是 Integer 类型,否则默认会当成索引使用,remove方法,无论根据索引删,还是根据元素删,都只能删除第1次找到的元素
        //list.remove(Integer.valueOf(11));
        // 增强for循环遍历集合的过程中,只能获取集合的元素,不能修改集合的长度,否则会出"并发修改异常"
        /*for (Integer i : list) {
            if(i == 11){
                list.remove(i);
            }
        }*/
        // 使用普通for循环,配合索引,删除数据是可以的,需要注意删除元素的时候,后面的元素会自动向前补位
        /*for (int i = 0; i < list.size(); ) {
            if(list.get(i) == 11){
                list.remove(i);
                continue;
            }
            i++;
        }*/
        System.out.println("-----------------------");
        // 使用逆向遍历的思路,不需要考虑补位的问题
        for (int i = list.size() - 1; i >= 0; i--) {
            if(list.get(i) == 11){
                list.remove(i);
            }
        }
        System.out.println(list);
    }
}
```



## 3.List集合的实现类

### 3.1List集合子类的特点

- ArrayList集合

  ​	底层是数组结构实现，**查询快、增删慢**

- LinkedList集合

  ​	底层是链表结构实现，**查询慢、增删快**

我们知道数组的长度是固定的，但是集合的长度是可变的，这是怎么做到的呢？原理如下：

![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205214150.png)

数组扩容，并不是在原数组上扩容（原数组是不可以扩容的），**底层是创建一个新数组，然后把原数组中的元素全部复制到新数组中去**。
![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205214155.png)

**LinkedList底层原理**

LinkedList底层是链表结构，链表结构是由一个一个的节点组成，一个节点由数据值、下一个元素的地址组成。如下图所示
![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205214311.png)

假如，现在要在B节点和D节点中间插入一个元素，只需要把B节点指向D节点的地址断掉，重新指向新的节点地址就可以了。如下图所示：
![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205214358.png)

假如，现在想要把D节点删除，只需要让C节点指向E节点的地址，然后把D节点指向E节点的地址断掉。此时D节点就会变成垃圾，会把垃圾回收器清理掉。
![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205214326.png)

上面的链表是单向链表，它的方向是从头节点指向尾节点的，只能从左往右查找元素，这样查询效率比较慢；

还有一种链表叫做双向链表，不光可以从做往右找，还可以从右往左找。如下图所示：
![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205214343.png)

**可以用它来设计栈结构、队列结构。**
![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205214459.png)

入队列可以调用LinkedList集合的**addLast方法**，出队列可以调用**removeFirst()方法**.

```java
//1.创建一个队列：先进先出、后进后出
LinkedList<String> queue = new LinkedList<>();
//入对列
queue.addLast("第1号人");
queue.addLast("第2号人");
System.out.println(queue);
//出队列
System.out.println(queue.removeFirst());	//第2号人
System.out.println(queue.removeFirst());	//第1号人
```

- 所以栈结构的特点是先进后出，后进先出

![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205214512.png)

接着，我们就用LinkedList来模拟下栈结构，代码如下：

```java
//1.创建一个栈对象
LinkedList<String> stack = new ArrayList<>();
//压栈(push) 等价于 addFirst()
stack.push("第1颗子弹");
stack.push("第2颗子弹");
stack.push("第3颗子弹");
stack.push("第4颗子弹");
System.out.println(stack); //[第4颗子弹, 第3颗子弹, 第2颗子弹,第1颗子弹]

//弹栈(pop) 等价于 removeFirst()
System.out.println(statck.pop()); //第4颗子弹
System.out.println(statck.pop()); //第3颗子弹
System.out.println(statck.pop()); //第2颗子弹
System.out.println(statck.pop()); //第1颗子弹

//弹栈完了，集合中就没有元素了
System.out.println(list); //[]
```

### 3.2LinkedList集合特有功能

- 特有方法

  | 方法名                    | 说明                             |
  | ------------------------- | -------------------------------- |
  | public void addFirst(E e) | 在该列表开头插入指定的元素       |
  | public void addLast(E e)  | 将指定的元素追加到此列表的末尾   |
  | public E getFirst()       | 返回此列表中的第一个元素         |
  | public   E getLast()      | 返回此列表中的最后一个元素       |
  | public E removeFirst()    | 从此列表中删除并返回第一个元素   |
  | public   E removeLast()   | 从此列表中删除并返回最后一个元素 |

  ```java
  LinkedList集合是基于双向链表实现了，所以相对于ArrayList新增了一些可以针对头尾进行操作的方法
  LinkedList集合操作链表头和尾的方法
  public void addFirst(E e) :将指定元素插入此列表的开头。
  public void addLast(E e) :将指定元素添加到此列表的结尾。
  public E getFirst() :返回此列表的第一个元素。
  public E getLast() :返回此列表的最后一个元素。
  public E removeFirst() :移除并返回此列表的第一个元素。
  public E removeLast() :移除并返回此列表的最后一个元素。
  
  public class MyLinkedListDemo4 {
      public static void main(String[] args) {
        LinkedList<Integer> linkedList = new LinkedList<>();
          linkedList.addFirst(22);
          linkedList.addFirst(33);
          linkedList.addFirst(44);
          System.out.println(linkedList);
  
          System.out.println(linkedList.getFirst());
          System.out.println(linkedList.getLast());
          System.out.println("\r");
  
          System.out.println(linkedList.removeFirst());
          System.out.println(linkedList.removeLast());
          System.out.println(linkedList);
        
      }
  [44, 33, 22]
  44
  22
  
  44
  22
  [33]
  ```



## 4.Collections

**一般后缀为s的类很多都是工具类**。

它提供了一些好用的静态方法，如下

![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250205220121.png)

### 4.1 shuffle方法的使用

```java
java.util.Collections类: 操作集合的工具类
特点:
    1.构造方法private修饰
    2.所有成员static修饰
常用方法:
    public static void shuffle(List<?> list): 打乱List集合中元素的顺序
参数:
    List list: 接口,传递实现类ArrayList/LinkedList对象
public class Demo01Collections {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        //add: 添加元素
        for (int i = 1;i<=15;i++) {
            list.add(i*100);
        }
        System.out.println("集合原内容: "+list);

        //shuffle方法: 打乱List集合中元素的顺序
        Collections.shuffle(list);
        System.out.println("打乱集合顺序后: "+list);
    }
}
```

### 4.2 addAll方法的使用

```java
/*
    java.util.Collections工具类静态方法:
        public static <T> boolean addAll(Collection<T> coll, T... elements) :
            把调用方法时,可变参数列表中的实际数据elements,添加到集合对象coll中
            参数:
                Collection<T> coll: 接口,传递实现类ArrayList/HashSet/LinkedHashSet对象
                T... elements: 可变参数,可以传递数组/参数列表/不传参数
*/        
public class Demo04VarParams {
    public static void main(String[] args) {
        //创建List集合对象,存储花色
        List<String> colors = new ArrayList<>();

        //调用addAll方法: 可变参数,传递的是参数列表
        ////把"♥","♠","♣","♦" 添加到集合对象colors中
        Collections.addAll(colors,"♥","♠","♣","♦");        
        System.out.println(colors);

        //创建List集合对象,存储数字
        List<String> nums = new ArrayList<>();
        String[] arr = "3-4-5-6-7-8-9-10-J-Q-K-A-2".split("-");

        //调用addAll方法: 可变参数,传递的是数组
        Collections.addAll(nums,arr);//把数组arr中的元素 添加到集合对象nums中        
        System.out.println(nums);
    }
}
```

## 5.集合模拟斗地主案例

```txt
需求:
	按照斗地主的规则，完成洗牌发牌的动作。 
具体规则：
	使用54张牌打乱顺序,三个玩家参与游戏，三人交替摸牌，每人17张牌，最后三张留作底牌。
```

![1747384888642](img/1747384888642.png)

```java
/*
    任意一张牌,都是这个类的一个对象
    有两个属性

    花色
    点数

    人为给牌添加一个用于排序的 值

 */
public class Pai {
    private String hua;
    private String dian;
    private int zhi;

    public int getZhi() {
        return zhi;
    }


    public Pai(String hua, String dian, int zhi) {
        this.hua = hua;
        this.dian = dian;
        this.zhi = zhi;
    }

    @Override
    public String toString() {
        return hua+dian;
    }
}
```



```java

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

/*
    斗地主的逻辑类

    1: 先组装54张牌(54个对象)
    2: 准备一个集合,用于保存54个对象
    3: 随机一个[0--50]之间数,当成索引获取对应的牌当成 "明牌",谁抽取到了这张牌,谁就是地主
    4: 轮流发牌; 剩最后3张的时候,需要判断谁是地主,把这3张牌,加给谁
        TODO 可选操作: 排序
    5: 看牌
 */
public class DouDiZhu {
    public static void main(String[] args) {
        //1: 先组装54张牌(54个对象)
        // 2: 准备一个集合,用于保存54个对象
        List<Pai> list = new ArrayList<>();
        int zhi = 1;
        // 添加大小王
        list.add(new Pai("大王", "", zhi++));
        list.add(new Pai("小王", "", zhi++));
        String[] huas = {"♠", "♥", "♣", "♦"};
        String[] dians = {"2", "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3"};
        for (String dian : dians) {
            for (String hua : huas) {
                list.add(new Pai(hua, dian,zhi++));
            }
        }
       // System.out.println(list);
        // 5: 洗牌
        Collections.shuffle(list);
        //3: 随机一个[0--50]之间数,当成索引获取对应的牌当成 "明牌",谁抽取到了这张牌,谁就是地主
        Random random = new Random();
        int randomCode = random.nextInt(51);
        System.out.println("明牌是:" + list.get(randomCode));
        //4: 轮流发牌; 剩最后3张的时候,需要判断谁是地主,把这3张牌,加给谁
        List<Pai> player1 = new ArrayList<>();
        List<Pai> player2 = new ArrayList<>();
        List<Pai> player3 = new ArrayList<>();
        List<Pai> dp = new ArrayList<>();

        // 按牌的索引,对3求余数,根据余数,决定发给哪个玩家,如果剩最后三张,直接给底牌
        for (int i = 0; i < list.size(); i++) {
            // 1: 根据索引获取牌
            Pai pai = list.get(i);
            if (i >= 51) {
                dp.add(pai);
            } else {
                if (i % 3 == 1) {
                    player1.add(pai);
                } else if (i % 3 == 2) {
                    player2.add(pai);
                } else {
                    player3.add(pai);
                }
            }
        }
        // 处理地主
        if (player1.contains(list.get(randomCode))) {
            System.out.println("玩家1是地主...");
            player1.addAll(dp);
        } else if (player2.contains(list.get(randomCode))) {
            System.out.println("玩家2是地主...");
            player2.addAll(dp);
        } else {
            System.out.println("玩家3是地主...");
            player3.addAll(dp);
        }
        // 排序
        sort(player1);
        sort(player2);
        sort(player3);
        sort(dp);
        // 看牌
        System.out.println(player1);
        System.out.println(player2);
        System.out.println(player3);
        System.out.println(dp);

    }

    public static void  sort(List<Pai> list){
        // 使用冒泡排序,对集合的元素进行排序
        //1: 使用循环嵌套,外循环控制排序的轮数 (长度 - 1)
        for (int i = 0; i < list.size() -1 ; i++) {
            //  2: 内循环控制 相邻的两个元素比较, 前面的元素大于了后面的元素就交换位置
            for (int j = 0; j < list.size()-i-1; j++) {
                //内循环由于是"相邻"的两个元素比较,因此需要注意后面的元素不要索引越界
                if(list.get(j).getZhi() > list.get(j+1).getZhi()){
                    // 交换
                    Pai temp = list.get(j);
                    list.set(j, list.get(j+1));
                    list.set(j+1,temp);
                }
            }
        }
    }
}
```

## 6.泛型

*所谓泛型指的是，在定义类、接口、方法时，**同时声明了一个或者多个类型变量***称为泛型类、泛型接口、泛型方法、它们统称为**泛型**。

比如我们前面学过的ArrayList类就是一个泛型类

![null](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250204154645.png)

就用一个`<E>`表示元素的数据类型。

**当别人使用ArrayList集合创建对象时，**`new ArrayList<String> `**就表示元素为String类型，**`new ArrayList<Integer>`**表示元素为Integer类型。**

**泛型的作用、本质：**

- 泛型的好处：**在编译阶段可以避免出现一些非法的数据。**
- 泛型的本质：**把具体的数据类型传递给类型变量**。

### 6.1 泛型的好处

```java
/*
    泛型的好处:
        1.避免强制类型转换的麻烦
        2.将运行时异常,提前到了编译时期,降低了程序员的工作量
        3.一旦指定泛型,数据类型将被统一
        4.实现代码的模板化,把数据类型当做参数传递

    泛型可以定义在哪些地方?
        1.可以定义在类上
        2.可以定义在方法(静态方法/非静态方法)上
        3.可以定义在接口上
*/
```

```java
public class Demo03Generic {
    public static void main(String[] args) {
        //创建集合,指定存储数据的类型String
        ArrayList<String> list = new ArrayList<>();
        list.add("aa");
        list.add("bbb");
        list.add("cccc");
        //只能存储String,不能存储Student
        //2.将运行时异常,提前到了编译时期,降低了程序员的工作量
        //list.add(new Student("zs",18));

        //增强for进行遍历
        for (String s : list) {
            System.out.println(s+"的长度: "+s.length());//1.避免强制类型转换的麻烦
        }

        //创建集合,不指定存储数据的类型String
        //全部按照Object类型处理
        ArrayList list2 = new ArrayList();
        list2.add("aa");
        list2.add("bbb");
        list2.add("cccc");
        //可以存
        //但是取出来进行强制类型转换,报出类型转换异常
        //list2.add(new Student("zs",18));

        //增强for进行遍历
        for (Object obj : list2) {
            //把String提升为Object,不能调用String的特有方法
            //必须进行强制类型转换
            System.out.println(obj+"的长度: "+((String)obj).length());
        }
    }
}
```

![1601126122020](img/1601126122020.png)

### 6.2 泛型类的定义【重点】

```java
/*
    泛型: jdk1.5添加的新特性

    泛型类: 定义的类上有属于类自己的泛型 
        定义类时,该类中需要处理某种类型的数据,但是什么类型,不确定,所以定义成泛型
        泛型变量一般用大写字母表示:
            T(Type),E(Element),K(Key),V(Value)

    泛型类的定义格式:
        public class 类名<泛型变量> {
            ...
        }
        比如:
        public class 类名<T> {
            ...
        }

    泛型类上定义的泛型,什么时间确定具体的类型呢?
        创建该类的对象时,<>中写的是什么类型,泛型就代表什么类型
*/
```

```java
/*
    自定义带泛型的类
 */
// 此时的 QQ就一个"泛型名",专门等待接收一个具体的"数据类型",将来使用 Box 类的人,必须给这个"QQ"传递一个具体的数据类型,如果不传递,ＱＱ将默认为　Ｏｂｊｅｃｔ
public class Box<QQ> {
    // 在这个类中,所有使用到数据类型的地方,都可以使用 QQ来 替代
    private QQ name;
    private int age;

    // 添加 getter和setter

    public QQ getName() {
        return name;
    }

    public void setName(QQ name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Box() {
    }

    public Box(QQ name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Box{" +
                "name=" + name +
                ", age=" + age +
                '}';
    }
}

```

```java

public class TestBox {
    public static void main(String[] args) {
        // 1: 创建Box对象的时候,应该传递一个具体的数据类型,以便于让Box类中的 "QQ" 变成具体的类型,如果不传递,默认是Object
        Box<Integer> b1 = new Box<>(11,22);
        Integer name = b1.getName();
        
        Box<String> b2 = new Box<>("11",22);
        String name1 = b2.getName();
        
        Box<Double> b3 = new Box<>(2.5,22);
        Double name2 = b3.getName();

        Box b4 = new Box("bb",33);
        Object name3 = b4.getName();
    }
}
```

### 6.3 泛型方法

```java
非静态/静态泛型方法: 定义的方法上有属于方法自己的泛型
    定义方法时,该方法中需要处理某种类型的数据,但是什么类型,不确定,所以定义成泛型
    泛型变量一般用大写字母表示:
        T(Type),E(Element),K(Key),V(Value)

泛型方法的定义格式:
    //<泛型变>: 定义泛型
    //参列表中: 使用泛型
    修饰符 <泛型变> 返回值类型 方法名称(泛型变量 变量名称) {
        ...
    }
    举例:
    修饰符 <T> 返回值类型 方法名称(T t) {
        ...
    }

方法上定义的泛型,什么时间确定具体的类型呢?
调用方法时,根据方法参数的类型,确定方法上定义的泛型的具体类型
```

```java
//泛型方法的定义
/*
    定义方法时,该方法中需要处理某种类型的数据,但是什么类型,不确定,所以定义成泛型
    T: 属于类上定义的泛型,该类中所有非静态方法中都可以直接使用
 */
public class MyClass04<T> {
    /*
        注意:
            该方法不是泛型方法,只是一个普通的方法而已,
            只不过该方法上使用了类上定义的泛型
     */
    public void method(T t) {
        System.out.println(t);
    }

    /*
        非静态泛型方法:
            <E>: 在定义泛型,该泛型只属于当前show方法
     */
    public <E> void show(E e) {
        System.out.println(e);
    }
    /*
        注意:
            静态方法不能使用类上定义的泛型
        原因:
            类上的泛型,创建对象后才确定具体的类型,
            但是静态方法的调用和对象无关,直接使用类名调用,
            没有对象,类上的泛型就没有被确定
     */
    public static <K>  void fun(/*T t*/ K k) {
        System.out.println(k);
    }
}
```

```java
/*
    方法上定义的泛型,什么时间确定具体的类型呢?
    调用方法时,根据方法参数的类型,确定方法上定义的泛型的具体类型
 */
public class Demo03GenericMethod {
    public static void main(String[] args) {
        //创建MyClass04类的对象,泛型指定为String
        MyClass04<String> mc = new MyClass04<>();
        mc.method("Hello");
        //错误: method方法,使用类上的泛型,已经被确定为了String,不能传递Integer
        //mc.method(100);

        //正确: 非静态show方法有自己的泛型,根据参数的具体类型,来决定泛型的类型
        mc.show("Hello");
        mc.show(100);
        mc.show(new Student("张三",18));

        //正确: 静态fun方法有自己的泛型,根据参数的具体类型,来决定泛型的类型
        MyClass04.fun("World");
        MyClass04.fun(200);
        MyClass04.fun(new Student("李四",38));
    }
}
```

### 6.4 泛型接口

```java
泛型接口: 
    定义接口时,该接口中需要处理某种类型的数据,但是什么类型,不确定,所以定义成泛型
    泛型变量一般用大写字母表示:
        T(Type),E(Element),K(Key),V(Value)

定义接口的定义格式:
    public interface 接口名称<泛型变量> {
        ...
    }
    举例:
    public interface 接口名称<T> {
        ...
    }

接口上定义的泛型,什么时间确定具体的类型呢?
    1.实现类实现接口时,确定接口上泛型的具体类型的话,
        直接指定具体类型

    2.定义实现类时,也不确定接口上的泛型
        该实现类必须定义为泛型类
        而且实现类上的泛型和接口上的泛型要保持一致
        创建实现类对象时,确定具体的类型
```

```java
// 1. 泛型接口（设计图）
public interface A<WX> {
    public WX abc(WX a); // 定义：放进去 WX，拿出来 WX
}

// 2. 实现类 Zi1：直接写死 WX 为 Double
public class Zi1 implements A<Double> { 
    @Override
    public Double abc(Double a) { // 这里的 WX 已经被替换成了 Double
        return a * 2; // 比如：返回 Double 类型的结果
    }
}


// 1. 泛型接口（设计图）
public interface A<WX> {
    public WX abc(WX a);
}

// 2. 实现类 Zi2：自己也带泛型 <MM>，把 MM 传给接口 A
public class Zi2<MM> implements A<MM> { 
    @Override
    public MM abc(MM a) { // 这里的 WX 就是 Zi2 的 MM 类型
        return a; // 比如：直接返回 MM 类型的数据
    }
}

// 3. 测试
public class Test {
    public static void main(String[] args) {
        // 创建对象时，指定 MM 为 Integer（决定装 Integer）
        Zi2<Integer> intBox = new Zi2<>(); 
        Integer result1 = intBox.abc(100);

        // 再创建一个对象，指定 MM 为 String（决定装 String）
        Zi2<String> strBox = new Zi2<>();
        String result2 = strBox.abc("Hello");
    }
}

// 泛型接口：定义“身份卡”
public interface IdCard<T> {
    T getInfo(); // 获取身份信息
}

// 实现类：通用身份卡（自己带泛型 T）
public class CommonIdCard<T> implements IdCard<T> {
    private T info;

    public CommonIdCard(T info) {
        this.info = info;
    }

    @Override
    public T getInfo() {
        return info; // 返回 T 类型的信息
    }
}

// 测试
public class Test {
    public static void main(String[] args) {
        // 1. 身份信息是 String 类型（姓名）
        CommonIdCard<String> nameCard = new CommonIdCard<>("张三");
        System.out.println("姓名卡：" + nameCard.getInfo());

        // 2. 身份信息是 Integer 类型（工号）
        CommonIdCard<Integer> empCard = new CommonIdCard<>(10086);
        System.out.println("工号卡：" + empCard.getInfo());
    }
}
```



### 6.5 泛型通配符

**泛型不存在多态**

```java
/*
    泛型通配符: ?
        用来匹配泛型的,但是不能使用?定义泛型

    注意事项:
        1.泛型是不存在多态的,左侧<>中写的类型必须和右侧<>中的类型保持一致(省略右侧<>中的内容)
        2.使用泛型通配符,定义变量:
            List<?> list 可以接收哪些对象?
                只要是List接口实现类的任意泛型对象(创建对象时,只要在<>中写上一种引用类型就可以)都可以
        3.List<?> list: 理解为它是各种泛型List集合对象的父类
 */


/*
    练习泛型通配符
 */
public class Test08_1 {
    public static void main(String[] args) {
        List<Object> l1 = new ArrayList<>();
        List<Number> l2 = new ArrayList<>();
        List<Integer> l3 = new ArrayList<>();

        //m1(l1); // 超出了泛型的上限
        m1(l2);
        m1(l3); // 泛型不能用多态,为了让 m1既能接收 Number也能接收 Integer,需要使用 泛型通配符的技术

        m2(l1);
        m2(l2);
        //m2(l3); // 超出了泛型的下限
    }

    // 这个方法,允许调用者传递 Number及Number的子类对象
    public static void m1(List<? extends Number> list){

    }

    // 这个方法,允许调用者传递 Number及Number的父类对象
    public static void m2(List<? super Number> list){

    }
}

```



### 6.6 泛型的上限

? extends T：**表示上界通配符，可以是 T 或 T 的子类（继承 T 的类型）**
用于读取数据
```
例如：List<? extends Number> 可以存储 Integer、Double 等 Number 的子类
? super T：**表示下界通配符，可以是 T 或 T 的父类（T 及其父类型）**
用于写入数据
例如：List<? super Integer> 可以存储 Integer 以及 Integer 的父类型（Number、Object）

```
```java
/*
    父类: Person
    子类: Worker
    子类: Teacher
    子类: JavaTeacher

        一个父类的子类可以有任意多个,如何表示出一个父类的任意子类呢?
        ?: 任意一种引用类型
        ? extends Person: 表示Person类型或者Person类型的任意子类型
        ? extends E: 表示E类型或者E类型的任意子类型


    泛型的上限:
        ? extends Person: 表示Person类型或者Person类型的任意子类型
        ? extends E: 表示E类型或者E类型的任意子类型
*/
```

```java
//Person类
public class Person {
    private String name;
    private int age;

    @Override
    public String toString() {
        return "Person{" + "name='" + name + '\'' + ", age=" + age + '}';
    }
    //生成空参,满参构造,set和get方法
}
//Worker类
public class Worker extends Person {
    @Override
    public String toString() {
        return "Worker{" + "name='" + getName() + '\'' + ", age=" + getAge() + '}';
    }
    //根据父类生成空参,满参构造
}
//Teacher类
public class Teacher extends Worker {
    @Override
    public String toString() {
        return "Teacher{" + "name='" + getName() + '\'' + ", age=" + getAge() + '}';
    }
    //根据父类生成空参,满参构造
}
//JavaTeacher类
public class JavaTeacher extends Teacher {
    @Override
    public String toString() {
        return "JavaTeacher{" + "name='" + getName()+'\'' + ", age=" + getAge() + '}';
    }
    //根据父类生成空参,满参构造
}

//测试类
public class Demo01ShangXian {
    public static void main(String[] args) {
        ArrayList<Person> list1 = new ArrayList<>();
        list1.add(new Person("zs", 18));
        list1.add(new Person("ls", 28));
        list1.add(new Person("ww", 38));

        ArrayList<Worker> list2 = new ArrayList<>();
        list2.add(new Worker("zs01", 18));
        list2.add(new Worker("ls01", 28));
        list2.add(new Worker("ww01", 38));

        ArrayList<Teacher> list3 = new ArrayList<>();
        list3.add(new Teacher("zs02", 18));
        list3.add(new Teacher("ls02", 28));
        list3.add(new Teacher("ww02", 38));

        ArrayList<String> list4 = new ArrayList<>();
        list4.add("aaa");
        list4.add("bbb");

        ArrayList<Integer> list5 = new ArrayList<>();
        list5.add(100);
        list5.add(200);


        //调用方法
        print(list1);
        print(list2);
        print(list3);
        //print(list4);//错误,因为String不是Person的子类
        //print(list5);//错误,因为Integer不是Person的子类
    }

    /*
        定义一个方法,只能完成以上3个集合的遍历
        	ArrayList<Person>/ArrayList<Worker>/ArrayList<Teacher>
        
        不管是Worker类还是Teacher类,都是Person的子类
        ? extends Person: Person类型或者Person类型的任意子类型
     */
    public static void print(ArrayList<? extends Person> list) {
        for (Person p : list) {
            System.out.println(p);
        }
    }
}

```

### 6.7 泛型的下限

```java
/*
    //使用3.7中定义的Person/Worker/Teacher/JavaTeacher类
    子类: JavaTeacher
    父类: Teacher
    父类: Worker
    父类: Person

        一个子类的父类可以有任意多个,如何表示出一个子类的任意父类呢?
        ?: 任意一种引用类型
        ? super JavaTeacher: 表示JavaTeacher类型或者JavaTeacher类型的任意父类型
        ? super E: 表示E类型或者E类型的任意父类型

    泛型的下限:
        ? super JavaTeacher: 表示JavaTeacher类型或者JavaTeacher类型的任意父类型
        ? extends E: 表示E类型或者E类型的任意父类型
*/
```

```java
public class Demo02XiaXian {
    public static void main(String[] args) {
        ArrayList<Person> list1 = new ArrayList<>();
        list1.add(new Person("zs", 18));
        list1.add(new Person("ls", 28));
        list1.add(new Person("ww", 38));

        ArrayList<Worker> list2 = new ArrayList<>();
        list2.add(new Worker("zs01", 18));
        list2.add(new Worker("ls01", 28));
        list2.add(new Worker("ww01", 38));

        ArrayList<Teacher> list3 = new ArrayList<>();
        list3.add(new Teacher("zs02", 18));
        list3.add(new Teacher("ls02", 28));
        list3.add(new Teacher("ww02", 38));

        ArrayList<String> list4 = new ArrayList<>();
        list4.add("aaa");
        list4.add("bbb");

        ArrayList<Integer> list5 = new ArrayList<>();
        list5.add(100);
        list5.add(200);


        //调用方法
        print(list1);
        print(list2);
        print(list3);
        //print(list4);//错误,因为String不是Teacher的父类
        //print(list5);//错误,因为Integer不是Teacher的父类
    }

    /*
        定义一个方法,只能完成以上3个集合的遍历
        ArrayList<Person>/ArrayList<Worker>/ArrayList<Teacher>
        不管是Person类还是Worker类都是Teacher类的父类
        ? super Teacher: Teacher类型或者Teacher类型的任意父类型

     */
    public static void print(ArrayList<? super Teacher> list) {
        for (Object o : list) {
            System.out.println(o);
        }
    }
}
```

### 6.8 排序

```java
public class Studnet {
    private String name;
    private int age;

    @Override
    public String toString() {
        return "Studnet{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
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

    public Studnet(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/*
    使用冒泡排序,对集合的元素进行排序
    思路:
        1: 使用循环嵌套,外循环控制排序的轮数 (长度 - 1)
        2: 内循环控制 相邻的两个元素比较, 前面的元素大于了后面的元素就交换位置
            内循环由于是"相邻"的两个元素比较,因此需要注意后面的元素不要索引越界
 */
public class MyTest {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        Collections.addAll(list,2,5,8,1,4,7);
        sort(list);
        System.out.println(list);
        System.out.println("-------------------------");
        // 创建集合,保存学生对象,按学生的年龄升序排序
        List<Studnet> studnets = new ArrayList<>();
        studnets.add(new Studnet("张三",19));
        studnets.add(new Studnet("李四",17));
        studnets.add(new Studnet("王五",20));
        studnets.add(new Studnet("赵六",17));

        //调用方法,排序
        stuSort(studnets);
        System.out.println(studnets);

    }

    public static void  stuSort(List<Studnet> list){
        // 使用冒泡排序,对集合的元素进行排序
        //1: 使用循环嵌套,外循环控制排序的轮数 (长度 - 1)
        for (int i = 0; i < list.size() -1 ; i++) {
            //  2: 内循环控制 相邻的两个元素比较, 前面的元素大于了后面的元素就交换位置
            for (int j = 0; j < list.size()-i-1; j++) {
                //内循环由于是"相邻"的两个元素比较,因此需要注意后面的元素不要索引越界
                if(list.get(j).getAge() > list.get(j+1).getAge()){
                    // 交换
                    Studnet temp = list.get(j);
                    list.set(j, list.get(j+1));
                    list.set(j+1,temp);
                }
            }
        }
    }

    public static void  sort(List<Integer> list){
        // 使用冒泡排序,对集合的元素进行排序
        //1: 使用循环嵌套,外循环控制排序的轮数 (长度 - 1)
        for (int i = 0; i < list.size() -1 ; i++) {
            //  2: 内循环控制 相邻的两个元素比较, 前面的元素大于了后面的元素就交换位置
            for (int j = 0; j < list.size()-i-1; j++) {
                //内循环由于是"相邻"的两个元素比较,因此需要注意后面的元素不要索引越界
                if(list.get(j) > list.get(j+1)){
                    // 交换
                    Integer temp = list.get(j);
                    list.set(j, list.get(j+1));
                    list.set(j+1,temp);
                }
            }
        }
    }
}
```

### 作业


| 对比项           | `findEmployeeById`（按编号）       | `findEmployeeByName`（按姓名）                     |
| ---------------- | ---------------------------------- | -------------------------------------------------- |
| **返回值类型**   | 单个 `Employee` 对象               | `List<Employee>` 列表                              |
| **查找逻辑**     | 找到一个就立即返回（因为编号唯一） | 必须遍历完所有员工（因为姓名可能重复）             |
| **没找到时返回** | `null`                             | 空列表 `[]`（不会返回 `null`）                     |
| **打印内容**     | 直接打印找到的那个员工的详情       | 打印找到的数量，不直接打印详情（由调用方处理列表） |
```java
package com.zxq._01_昨日作业;

import java.util.Objects;

/*
    - 员工编号（id，String类型）
- 姓名（name，String类型）
- 年龄（age，int类型）
 */
public class Employee {
    private String id;
    private String name;
    private int age;

    @Override
    public String toString() {
        return "Employee{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", age=" + age +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Employee employee = (Employee) o;

        if (age != employee.age) return false;
        if (!Objects.equals(id, employee.id)) return false;
        return Objects.equals(name, employee.name);
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

    public Employee() {
    }

    public Employee(String id, String name, int age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

```

```java
package com.zxq._01_昨日作业;

public class ManagerEmployee extends Employee{
    private String manageLevel;

    public ManagerEmployee(String id, String name, int age, String manageLevel) {
        super(id, name, age);
        this.manageLevel = manageLevel;
    }

    public ManagerEmployee() {
    }

    @Override
    public String toString() {
        return "ManagerEmployee{" +
                "manageLevel='" + manageLevel + '\'' + super.toString()+
                '}';
    }

    public String getManageLevel() {
        return manageLevel;
    }

    public void setManageLevel(String manageLevel) {
        this.manageLevel = manageLevel;
    }
}

```

```java
package com.zxq._01_昨日作业;

public class TechnicalEmployee extends Employee{
    private int techLevel;

    public TechnicalEmployee(String id, String name, int age, int techLevel) {
        super(id, name, age);
        this.techLevel = techLevel;
    }

    public TechnicalEmployee() {
    }

    @Override
    public String toString() {
        return "TechnicalEmployee{" +
                "techLevel=" + techLevel + super.toString()+
                '}';
    }

    public int getTechLevel() {
        return techLevel;
    }

    public void setTechLevel(int techLevel) {
        this.techLevel = techLevel;
    }
}

```

```java
package com.zxq._01_昨日作业;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

/*
    核心业务类

    - 使用集合存储所有员工
- 支持添加员工、删除员工、查找员工
- 支持按不同类型筛选员工
- 支持对员工列表进行排序

 */
public class EmployeeManager {
    private List<Employee> employeeList = new ArrayList<>();
    /*
    - 添加员工时，如果员工编号已存在，则提示“员工已存在”
- 删除员工时，根据员工编号删除，如果不存在则提示“员工不存在”
- 查找员工时，支持按编号查找和按姓名查找
- 筛选功能：可以筛选出所有技术员工或所有管理员工
- 排序功能：可以按年龄对员工进行排序
     */
    public boolean addEmp(Employee employee){
        //如果员工编号已存在，则提示“员工已存在”
        Employee emp = findEmpByIdOrName(employee.getId());
        // 判断,如果  emp 是null,说明不存在,可以添加,如果不是null,说明存在,不添加,返回false
        if(emp == null){
            return employeeList.add(employee);
        }
        return false;
    }

    //删除员工时，根据员工编号删除，如果不存在则提示“员工不存在”
    public boolean delEmp(String id){
        Employee emp = findEmpByIdOrName(id);
        if(emp == null){
            return false;
        }
        return employeeList.remove(emp);
    }

    // 筛选功能：可以筛选出所有技术员工或所有管理员工 可以使用泛型方法
    public <T> List<T> findEmpsByType(T t){
        // 从 employeeList 集合中,.找 所有的 T 类型的对象,并添加到一个新的集合中,最终返回新的集合即可
        List<T> newList = new ArrayList<>();
        for (Employee employee : employeeList) {
            // 判断 employee 是否属于  T 类型
            if(t.getClass() == employee.getClass()){
                newList.add((T)employee);
            }
        }
        return newList;
    }

    //  排序功能：可以按年龄对员工进行排序
    public void sort(){
        for (int i = 0; i < employeeList.size() -1 ; i++) {
            //  2: 内循环控制 相邻的两个元素比较, 前面的元素大于了后面的元素就交换位置
            for (int j = 0; j < employeeList.size()-i-1; j++) {
                //内循环由于是"相邻"的两个元素比较,因此需要注意后面的元素不要索引越界
                if(employeeList.get(j).getAge() > employeeList.get(j+1).getAge()){
                    // 交换
                    Employee temp = employeeList.get(j);
                    employeeList.set(j, employeeList.get(j+1));
                    employeeList.set(j+1,temp);
                }
            }
        }
    }
    public Employee findEmpByIdOrName(String key){
        // 循环加判断,找东西
        for (Employee employee : employeeList) {
            if(employee.getId().equals(key) || employee.getName().equals(key)){
                return employee;
            }
        }
        return null;
    }
    public void show(){
        employeeList.forEach(new Consumer<Employee>() {
            @Override
            public void accept(Employee employee) {
                System.out.println(employee);
            }
        });
    }

}

```

```java
package com.zxq._01_昨日作业;

import java.util.List;

public class Test {
    public static void main(String[] args) {
        EmployeeManager manager = new EmployeeManager();
        TechnicalEmployee employee = new TechnicalEmployee("001", "二牛", 19, 10);
        TechnicalEmployee employee2 = new TechnicalEmployee("002", "二牛2", 20, 10);
        System.out.println( manager.addEmp(employee)?"添加"+employee.getName()+"成功":"id"+employee.getId()+"已经存在,添加失败");
        ManagerEmployee employee1 = new ManagerEmployee("001", "牛二", 20, "3");
        ManagerEmployee employee3 = new ManagerEmployee("003", "牛二3", 10, "3");
        System.out.println( manager.addEmp(employee1)?"添加"+employee1.getName()+"成功":"id"+employee1.getId()+"已经存在,添加失败");
        manager.addEmp(employee2);
        manager.addEmp(employee3);
        manager.show();

        //boolean b = manager.delEmp("002");
        //System.out.println(b?"删除002成功":"失败");

        List<ManagerEmployee> empsByType = manager.findEmpsByType(employee1);
        System.out.println(empsByType);

        manager.sort();
        manager.show();
    }
}

```

