---
title: JavaScript
date: 2026-04-13 21:13:28
tags:
  - Java
  - JavaWeb
  - 后端
categories: 编程开发
cover: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80'
---



# 1 JavaScript

JavaScript，这门语言会让我们的页面能够和用户进行交互。

## 1.1 介绍

**那什么是JavaScript呢 ?**

**JavaScript**（简称：**JS**） 是一门跨平台、面向对象的脚本语言，是用来控制网页行为的，实现人机交互效果。

* 组成：

  * ECMAScript: 规定了JS基础语法核心知识，包括变量、数据类型、流程控制、函数、对象等。

  * BOM：**浏览器对象模型，用于操作浏览器本身**，如：页面弹窗、地址栏操作、关闭窗口等。

  * DOM：**文档对象模型，用于操作HTML文档**，如：改变标签内的内容、改变标签内字体样式等。 

## 1.2 引入方式

同样，js代码也是书写在html中的，那么html中如何引入js代码呢？

主要通过下面的2种引入方式：

**第一种方式：**内部脚本，将JS代码定义在HTML页面中

- JavaScript代码必须位于&lt;script&gt;&lt;/script&gt;标签之间
- 在HTML文档中，可以在任意地方，放置任意数量的&lt;script&gt;
- 一般会把脚本置于&lt;body&gt;元素的底部，可改善显示速度

~~~html
<script>
    alert("Hello JavaScript")
</script>
~~~

**第二种方式：**外部脚本将， JS代码定义在外部 JS文件中，然后引入到 HTML页面中

- 外部JS文件中，只包含JS代码，不包含&ltscript&gt;标签
- 引入外部js的&lt;script&gt;标签，必须是双标签

~~~html
<script src="js/demo.js"></script>
~~~

* **注意1：demo.js中只有js代码，没有\<script>标签**
* **注意2：通过\<script>\</script>标签引入外部JS文件时，标签不能自闭合，如：\<script src="js/demo.js" />**

![1668020985363](assets/1668020985363.png) 

接下来演示外部脚本，注释掉内部脚本，然后在css目录同级创建js目录，然后创建一个名为demo.js的文件：

![1668021080890](assets/1668021080890.png) 

在demo.js中编写如下js内容：

~~~
alert('Hello JS2');
~~~

注释掉之前的内部脚本代码，添加&lt;script&gt;标签来引入外部demo.js文件,具体代码如下：

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS-引入方式</title>
    <!-- 内部脚本 -->
    <!-- <script>
        alert('Hello JS');
    </script> -->

    <!-- 外部脚本 -->
    <script src="js/demo.js"></script>
</head>
<body>

</body>
</html>
~~~

浏览器刷新效果如图：

![1668021241174](assets/1668021241174.png) 

## 1.3 基础语法

### 1.3.1 书写语法

js的书写语法，语法规则如下：

- 区分大小写：与 Java 一样，变量名、函数名以及其他一切东西都是区分大小写的

- 每行结尾的分号可有可无

- 大括号表示代码块

- 注释：

  - 单行注释：// 注释内容

  - 多行注释：/* 注释内容 */


我们需要借助js中3钟输出语句，来演示书写语法

| api              | 描述             |
| ---------------- | ---------------- |
| window.alert()   | 警告框           |
| document.write() | 在HTML 输出内容  |
| console.log()    | 写入浏览器控制台 |

具体代码如下；

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS基础语法</title>
</head>
<body>
    <script>
        //方式一: 写入浏览器的body区域
        document.write("Hello JS (document.write)");

        //方式二: 弹出框
        window.alert("Hello JS (window.alert)");

        //方式三: 控制台
        console.log("Hello JS (console.log)")
    </script>
</body>
</html>
```

### 1.3.2 变量

js中变量的声明，在js中，变量的声明和java中还是不同的。首先js中主要通过如下3个关键字来声明变量的：

| 关键字 | 解释                                                 |
| ------ | ---------------------------------------------------- |
| var    | 用于变量声明的关键字                                 |
| let    | 用于变量声明的关键字，相比较var，let只在代码块内生效 |
| const  | 声明常量的，常量一旦声明，不能修改                   |

在js中声明变量还需要注意如下几点：

- JavaScript 是一门弱类型语言，变量可以存放不同类型的值 。
- 变量名需要遵循如下规则：
  - 组成字符可以是任何字母、数字、下划线（_）或美元符号（$）
  - 数字不能开头
  - 建议使用驼峰命名

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script>
        // 定义变量
        var a = 123;
        var a = 'abc'; // 语法正确,后面的会覆盖前面的,不推荐使用 var
        //alert(a);

        let b = 123; //let 声明的变量具有块级作用域
        //let b = 'bbc'; // 语法错误,let的变量,不能重复定义!

        // 定义常量
        const c = 456;
        //c = 678; // 运行的时候报错
       // alert(c);

        {
            d = 555; // 直接写的变量,相当于是 java中的成员变量
            alert(d);
            let e = 666;
            var f = 777;
        }
        //alert(d);
        //alert(e); // let 定义的变量,有效范围就是它所在的大括号
        alert(f); // var 定义的变量,无论写在哪里,都相当于是 成员变量!

    </script>

</body>
</html>
```

let声明的变量在代码块外不生效

const关键字用来声明常量，但是一旦声明，常量的值是无法更改的。 

| 特性             | `var`                             | `let`                                    |
| :--------------- | :-------------------------------- | :--------------------------------------- |
| **作用域**       | 函数作用域（或全局）              | 块级作用域 `{ }`                         |
| **重复声明**     | 允许，后覆盖前                    | 不允许，会报语法错误                     |
| **变量提升**     | 会提升，初始值为 `undefined`      | 会提升，但**暂时性死区**，声明前不能访问 |
| **全局变量挂载** | 全局 `var` 会成为 `window` 的属性 | 全局 `let` 不会成为 `window` 的属性      |
| **推荐程度**     | 不推荐在现代 JS 中使用            | 推荐使用，更符合预期                     |

### 1.3.3 数据类型和运算符

JS中也存在数据类型，JS中的数据类型分为 ：**原始数据类型 和 引用数据类型**。原始数据类型，主要包含以下几种类型：

| 数据类型  | 描述                                               |
| --------- | -------------------------------------------------- |
| number    | 数字（整数、小数、NaN(Not a Number)）              |
| string    | 字符串，单双引皆可                                 |
| boolean   | 布尔。true，false                                  |
| null      | 对象为空                                           |
| undefined | 当声明的变量未初始化时，该变量的默认值是 undefined |

使用`typeof` 关键字可以返回变量的数据类型。代码如下:

~~~html
<script>
        // 练习原始类型
        let a = 1;
        let b = 1.5;
        let c = '1.5';
        let d = true;
        let e ;
        let f = null;

        //alert(typeof a);
        //alert(typeof b);
        //alert(typeof c);
       // alert(typeof d);
        //alert(typeof e);
        //alert(typeof f); // null 代表的是所有引用数据类型的默认值,因此判断的类型为 object

        // 由其他类型的数据,转 数字的时候如果转换失败,就会得到 NaN 类型的数据  使用全局函数 parseInt 直接转即可,转换规则是从左向右逐个字符转换,只有当左边的第1个字符都转换失败的时候,才会得到 NaN
        let g = '12a34b';
        alert(parseInt(g)); //12
        let h = 'a12a34b';
        alert(parseInt(h)); //null

        alert(NaN == NaN);  // false

    </script>
~~~

在js中，虽然不区分数据类型，但是有时候涉及到数值计算，还是需要进行类型转换的，js中可以通过parseInt()函数来进行将其他类型转换成数值类型。注释之前的代码，添加代码如下：

~~~js
// 类型转换 - 其他类型转为数字
alert(parseInt("12")); //12
alert(parseInt("12A45")); //12
alert(parseInt("A45"));//NaN (not a number)
~~~

熟悉了js的数据类型了，那么我们需要学习js中的运算法，js中的运算规则绝大多数还是和java中一致的，具体运算符如下：

| 运算规则   | 运算符                                                       |
| ---------- | ------------------------------------------------------------ |
| 算术运算符 | + , - , * , / , % , ++ , --                                  |
| 赋值运算符 | = , += , -= , *= , /= , %=                                   |
| 比较运算符 | &gt; , < , >= , <= , != , == , ===   注意     == 会进行类型转换，=== 不会进行类型转换 |
| 逻辑运算符 | && , \|\| , !                                                |
| 三元运算符 | 条件表达式 ? true_value: false_value                         |

接下来我们通过代码来演示js中的运算法，主要记忆js中和java中不一致的地方

在js中，绝大多数的运算规则和java中是保持一致的，但是js中的\==和===是有区别的。

- ==：**只比较值是否相等，不区分数据类型**，哪怕类型不一致，==也会自动转换类型进行值得比较
- ===：**不光比较值，还要比较类型**，如果类型不一致，直接返回false

~~~html
<script>
        let a = 123;
        let b = '123';

        alert(a==b); // true
        alert(a===b); // false

        alert(a/2);
</script>

<script>
        // 当语法中需要一个 布尔值,而我们实际给的数据不是布尔值的时候,js会进行默认的转换,
        let a = 1;
        let b ;
        let c = '';

        //alert(a?a+'转成了true':a+'转成了false');
        //alert(b?b+'转成了true':b+'转成了false');
       // alert(c?c+'转成了true':c+'转成了false');

       // 数字与布尔比较的时候,会把布尔转数字
       alert(0== false) // true
       alert(1== true) //  true
       alert(2== true) //  false
</script>
~~~

流程控制语句if，switch，for等和java保持一致，此处不再演示

**需要注意的是：**在js中，0,null,undefined,"",NaN理解成false,反之理解成true



## 1.4 函数

**函数（function）** 是被设计用来执行特定任务的代码块，方便程序的封装复用。 那我们学习函数，主要就是学习JS中函数的定义及调用的语法。

JavaScript中的函数被设计为执行特定任务的代码块，通过关键字function来定义。

JavaScript中定义函数的2种语法

### 1.4.1 第一种定义格式

第一种定义格式如下：

~~~js
function 函数名(参数1,参数2..){
    要执行的代码
}
~~~

因为JavaScript是弱数据类型的语言，所以有如下几点需要注意：

- 形式参数不需要声明类型，并且JavaScript中不管什么类型都是let或者var去声明，加上也没有意义。
- 返回值也不需要声明类型，直接return即可

如下示例：

~~~js
function add(a, b){
    return a + b;
}
~~~

第一步：新建名为js的文件夹，创建名为01. JS-函数的html文件，然后在&lt;script&gt;中定义上述示例的函数：

~~~html
<script>
     function add(a,b){
        return  a + b;
     }
</script>
~~~

但是上述只是定义函数，**函数需要被调用才能执行！**所以接下来我们需要调用函数

第二步：因为定义的add函数有返回值，所以我们可以接受返回值，并且输出到浏览器上，添加如下代码：

~~~js
let result = add(10,20);
alert(result);
~~~

查看浏览器运行结果：浏览器弹框内容如下图所示：

![1668584359136](assets/1668584359136.png) 

### 1.4.2 第二种定义格式

第二种可以通过var去定义函数的名字，具体格式如下：

~~~js
var functionName = function (参数1,参数2..){   
	//要执行的代码
}
~~~

接下来我们按照上述的格式，修改代码如下：只需要将第一种定义方式注释掉，替换成第二种定义方式即可，函数的调用不变

~~~html
<script>

    //定义函数-1
    // function add(a,b){
    //    return  a + b;
    // }

    //定义函数-2
    var add = function(a,b){
        return  a + b;
    }

    //函数调用
    var result = add(10,20);
    alert(result);
    
</script>
~~~

浏览器弹框效果和上述一致

我们在调用add函数时，再添加2个参数，修改代码如下：

~~~js
var result = add(10,20,30,40);
~~~

浏览器打开，发现没有错误，并且依然弹出30，这是为什么呢？

因为在JavaScript中，函数的调用只需要名称正确即可，参数列表不管的。如上述案例，10传递给了变量a，20传递给了变量b,而30和40没有变量接受，但是不影响函数的正常调用。

```html
<body>
    <script>
        // 定义一个求两个数字的和的方法,并返回结果
        function sum(a,b){
            alert('2个参数的方法执行了,a='+a+",b="+b);
            return a+b;
        }

        // 不能重载,只要函数名相同,无论参数是否相同,都会直接覆盖
        function sum(a,b,c){
            alert('三个参数的方法执行了,a='+a+",b="+b+",c="+c);
            return a+b+c;
        }

         // 调用函数 ,实参的数量可以和形参不一样,多了,会丢弃,少了,会导致形参得到的值是  undefined
         let s = sum(2,3);
        alert(s);

        let s2 = sum(1,2,3);
        alert(s2);

    </script>
</body>


<body>
    <script>
        // 等号右边相当于是一个  匿名函数,直接给左边的变量赋值了,此时的a代表的就是一个函数
        let a = function(){
            alert(1);
        }

        a();
    </script>
</body>
```

## 1.5 JavaScript对象

JavaScript中的对象有很多，主要可以分为如下3大类，我们可以打开[W3school在线学习文档](https://www.w3school.com.cn/)，来到首页，在左侧栏找到浏览器脚本下的JavaScript，如下图所示：

![1668587524509](assets/1668587524509.png)

然后进入到如下界面，点击右侧的参考书

![1668587661914](assets/1668587661914.png) 



然后进入到如下页面，此页面列举出了JavaScript中的所有对象

![1668587855863](assets/1668587855863.png)

可以大体分页3大类：

第一类：基本对象,我们主要学习Array和JSON和String

![1668587953841](assets/1668587953841.png) 

第二类：BOM对象,主要是和浏览器相关的几个对象

![1668588039871](assets/1668588039871.png) 

第三类：DOM对象，JavaScript中将html的每一个标签都封装成一个对象

![1668588141399](assets/1668588141399.png) 

我们先来学习基本对象种的Array对象

### 1.5.1 基本对象

#### 1.5.1.1 Array对象

##### 语法格式

Array对象时用来定义数组的。常用语法格式有如下2种：

方式1：

~~~js
var 变量名 = new Array(元素列表); 
~~~

~~~js
var arr = new Array(1,2,3,4); //1,2,3,4 是存储在数组中的数据（元素）
~~~

方式2：

~~~js
var 变量名 = [ 元素列表 ]; 
~~~

~~~js
var arr = [1,2,3,4]; //1,2,3,4 是存储在数组中的数据（元素）
~~~

数组定义好了，那么我们该如何获取数组中的值呢？和java中一样，需要通过索引来获取数组中的值。语法如下：

~~~js
arr[索引] = 值;
~~~

按照上述的语法定义数组，并且通过索引来获取数组中的值。

~~~html
<script>
    //定义数组
     var arr = new Array(1,2,3,4);
     var arr = [1,2,3,4];
	//获取数组中的值，索引从0开始计数
     console.log(arr[0]);
     console.log(arr[1]);
</script>
~~~

浏览器控制台观察的效果如下：输出1和2

![1668590655291](assets/1668590655291.png) 

##### 特点

与java中不一样的是，JavaScript中数组相当于java中的集合，数组的长度是可以变化的。而且JavaScript是弱数据类型的语言，所以数组中可以存储任意数据类型的值。接下来我们通过代码来演示上述特点。

注释掉之前的代码，添加如下代码：

~~~js
//特点: 长度可变 类型可变
var arr = [1,2,3,4];
arr[10] = 50;

console.log(arr[10]);
console.log(arr[9]);
console.log(arr[8]);
~~~

上述代码定义的arr变量中，数组的长度是4，但是我们直接再索引10的位置直接添加了数据10，并且输出索引为10的位置的元素，浏览器控制台数据结果如下：

![1668590614787](assets/1668590614787.png) 

因为索引8和9的位置没有值，所以输出内容undefined,当然，我们也可以给数组添加其他类型的值，添加代码如下：注释掉之前控制台输出的代码

~~~js
//特点: 长度可变 类型可变
var arr = [1,2,3,4];
arr[10] = 50;

// console.log(arr[10]);
// console.log(arr[9]);
// console.log(arr[8]);

arr[9] = "A";
arr[8] = true;

console.log(arr);
~~~

浏览器控制台输出结果如下：

![1668590895662](assets/1668590895662.png) 

##### 属性和方法

Array作为一个对象，那么对象是有属性和方法的，所以接下来我们介绍一下Array对象的属性和方法

官方文档中提供了Array的很多属性和方法，但是我们只学习常用的属性和方法，如下图所示：

属性：

| 属性   | 描述                         |
| :----- | :--------------------------- |
| length | 设置或返回数组中元素的数量。 |

方法：

| 方法方法  | 描述                                             |
| :-------- | :----------------------------------------------- |
| forEach() | 遍历数组中的每个有值得元素，并调用一次传入的函数 |
| push()    | 将新元素添加到数组的末尾，并返回新的长度         |
| splice()  | 从数组中删除元素                                 |

- length属性：

  length属性可以用来获取数组的长度，所以我们可以借助这个属性，来遍历数组中的元素，添加如下代码：

  ~~~js
  var arr = [1,2,3,4];
  arr[10] = 50;
  	for (let i = 0; i < arr.length; i++) {
  	console.log(arr[i]);
  }
  ~~~

  浏览器控制台输出结果如图所示：

  ![1668591566013](assets/1668591566013.png) 

- forEach()函数

  所以这个方法的参数，需要传递一个函数，而且这个函数接受一个参数，就是遍历时数组的值。修改之前的遍历代码如下：

  ~~~js
  //e是形参，接受的是数组遍历时的值
  arr.forEach(function(e){
       console.log(e);
  })
  ~~~

  当然了，在ES6中，引入箭头函数的写法，语法类似java中lambda表达式，修改上述代码如下：

  ~~~js
  arr.forEach((e) => {
       console.log(e);
  }) 
  ~~~

  浏览器输出结果如下：注意的是，没有元素的内容是不会输出的，因为forEach只会遍历有值的元素 

![1668592407223](assets/1668592407223.png)  

- push()函数

  push()函数是用于向数组的末尾添加元素的，其中函数的参数就是需要添加的元素，编写如下代码：向数组的末尾添加3个元素

  ~~~js
  //push: 添加元素到数组末尾
  arr.push(7,8,9);
  console.log(arr);
  ~~~

  浏览器输出结果如下：

  ![1668593799333](assets/1668593799333.png) 


- splice()函数

  splice()函数用来数组中的元素，函数中填入2个参数。

  参数1：表示从哪个索引位置删除

  参数2：表示删除元素的个数

  如下代码表示：从索引2的位置开始删，删除2个元素

  ~~~js
  //splice: 删除元素
  arr.splice(2,2);
  console.log(arr);
  ~~~

  浏览器执行效果如下：元素3和4被删除了，元素3是索引2

  ![1668594075039](assets/1668594075039.png) 

Array数组的完整代码如下：

~~~html
<body>
    <script>
        let arr1 = new Array(5); // 动态初始化,创建长度为5的数组,长度可以自动变化
        //alert(arr1.length);
       // alert(arr1[0]);
       arr1[100] = 666; // 不会出索引越界
       //alert(arr1[100]);
       //alert(arr1.length);

       // 静态初始化
       let arr2 = [2,4,5,6,8];

       // 遍历
       for(let i = 0;i<arr2.length;i++){
            document.write(arr2[i]+"<br>");
       }
       document.write("<hr>");
       // 增强for遍历 ind 代表的是索引
       for(let ind in arr2){
            document.write(arr2[ind]+'<---->'+ind+"<br>");
       }
       document.write("<hr>");
       for(let v of arr2){
            document.write(v+"<br>");
       }
    </script>
</body>

<body>
    <script>
       // 静态初始化
       let arr2 = [2,4,5,6,8];

       arr2.push(9);

       // 使用 foreach 方法遍历
       arr2.forEach((ele,ind)=>{
          document.write(ele+"--->"+ind+"<br>");
       });
    </script>
</body>
~~~

#### 1.5.1.2 String对象

##### 语法格式

String对象的创建方式有2种：

方式1：

~~~js
var 变量名 = new String("…") ; //方式一
~~~

~~~js
var str = new String("Hello String");
~~~

方式2：

~~~js
var 变量名 = "…" ; //方式二
~~~

~~~js
var str = 'Hello String';
~~~

编写代码如下：

~~~html
<script>
    //创建字符串对象
    //var str = new String("Hello String");
    var str = "  Hello String    ";

    console.log(str);
</script> 
~~~

##### 属性和方法

String对象也提供了一些常用的属性和方法，如下表格所示：

属性：

| 属性   | 描述           |
| ------ | -------------- |
| length | 字符串的长度。 |

方法：

| 方法        | 描述                                     |
| ----------- | ---------------------------------------- |
| charAt()    | 返回在指定位置的字符。                   |
| indexOf()   | 检索字符串。                             |
| trim()      | 去除字符串两边的空格                     |
| substring() | 提取字符串中两个指定的索引号之间的字符。 |

- length属性：

  length属性可以用于返回字符串的长度

  ~~~js
  //length
  console.log(str.length);
  ~~~

- charAt()函数：

  charAt()函数用于返回在指定索引位置的字符，函数的参数就是索引。

  ~~~js
  console.log(str.charAt(4));
  ~~~

- indexOf()函数

  indexOf()函数用于检索指定内容在字符串中的索引位置的，返回值是索引，参数是指定的内容。

  ~~~js
  console.log(str.indexOf("lo"));
  ~~~

- trim()函数

  trim()函数用于去除字符串两边的空格的。

  ~~~js
  var s = str.trim();
  console.log(s.length);
  ~~~

- substring()函数

  substring()函数用于截取字符串的，函数有2个参数。

  参数1：表示从那个索引位置开始截取。包含

  参数2：表示到那个索引位置结束。不包含

  ~~~js
  console.log(s.substring(0,5));
  ~~~

整体代码如下：

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS-对象-String</title>
</head>
<body>
    
</body>
<script>
    //创建字符串对象
    //var str = new String("Hello String");
    var str = "  Hello String    ";

    console.log(str);

    //length
    console.log(str.length);

    //charAt
    console.log(str.charAt(4));

    //indexOf
    console.log(str.indexOf("lo"));

    //trim
    var s = str.trim();
    console.log(s.length);

    //substring(start,end) --- 开始索引, 结束索引 (含头不含尾)
    console.log(s.substring(0,5));

</script>
</html>
~~~

浏览器执行效果如图所示：

![1668595450181](assets/1668595450181.png) 

#### 1.5.1.3 JSON对象

##### 自定义对象

在 JavaScript 中自定义对象特别简单，其语法格式如下：

~~~js
var 对象名 = {
    属性名1: 属性值1, 
    属性名2: 属性值2,
    属性名3: 属性值3,
    函数名称: function(形参列表){}
};
~~~

我们可以通过如下语法调用属性：

~~~js
对象名.属性名
~~~

通过如下语法调用函数：

~~~js
对象名.函数名()
~~~

接下来，我们再VS Code中创建名为04. JS-对象-JSON.html的文件演示自定义对象

~~~html
<script>
    //自定义对象
    var user = {
        name: "Tom",
        age: 10,
        gender: "male",
        eat: function(){
             console.log("用膳~");
         }
    }

    console.log(user.name);
    user.eat();
<script>
~~~

浏览器控制台结果如下：

![1668596039535](assets/1668596039535.png)

其中上述函数定义的语法可以简化成如下格式：

~~~js
    var user = {
        name: "Tom",
        age: 10,
        gender: "male",
        // eat: function(){
        //      console.log("用膳~");
        //  }
        eat(){
            console.log("用膳~");
        }
    }
~~~

##### json对象

JSON对象：**J**ava**S**cript **O**bject **N**otation，JavaScript对象标记法。是通过JavaScript标记法书写的文本。其格式如下：

~~~js
{
    "key":value,
    "key":value,
    "key":value
}
~~~

其中，**key必须使用引号并且是双引号标记，value可以是任意数据类型。**

例如我们可以直接百度搜索“json在线解析”，随便挑一个进入，然后编写内容如下：

~~~js
{
	"name": "李传播"
}
~~~

![1668596701343](assets/1668596701343.png) 

但是当我们将双引号切换成单引号，再次校验，则报错，如下图所示：

![1668596798551](assets/1668596798551.png)

那么json这种数据格式的文本到底应用在企业开发的什么地方呢？

经常用来作为前后台交互的数据载体

如下图所示：前后台交互时，我们需要传输数据，但是java中的对象我们该怎么去描述呢？我们可以使用如图所示的xml格式，可以清晰的描述java中需要传递给前端的java对象。

![1668597000013](assets/1668597000013.png) 



但是xml格式存在如下问题：

- 标签需要编写双份，占用带宽，浪费资源
- 解析繁琐

所以我们可以使用json来替代，如下图所示：

![1668597176685](assets/1668597176685.png) 



接下来我们通过代码来演示json对象：注释掉之前的代码，编写代码如下：

~~~js
var jsonstr = '{"name":"Tom", "age":18, "addr":["北京","上海","西安"]}';
alert(jsonstr.name);
~~~

浏览器输出结果如下：

![1668597352197](assets/1668597352197.png) 

为什么呢？**因为上述是一个json字符串，不是json对象，所以我们需要借助如下函数来进行json字符串和json对象的转换。**添加代码如下：

~~~js
var obj = JSON.parse(jsonstr);
alert(obj.name);
~~~

此时浏览器输出结果如下：

![1668597489911](assets/1668597489911.png) 

当然了，我们也可以通过如下函数将json对象再次转换成json字符串。添加如下代码：

~~~js
alert(JSON.stringify(obj));
~~~

浏览器输出结果如图所示：

![1668597624263](assets/1668597624263.png) 

整体全部代码如下：

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script>
        // 定义 js 中的 对象
        let stu = {
            name:"张三丰",
            age:108,
            marry: false,
            hobby:["抽烟","喝酒","烫头"]
        };
        // 打印对象
        alert(stu); // 输出的是 object,如果想看到对象的内容,可以把对象,转成json字符串,再打印

        //将 JavaScript 对象 stu 转换为 JSON 字符串。
        let stuStr = JSON.stringify(stu);
        alert(stuStr);

        // 假如手中已经有了字符串形式的json对象,可以转成 js的对象,然后面向对象,获取对象的内容
        let s = '{"name":"张三丰","age":108,"marry":false,"hobby":["抽烟","喝酒","烫头"]}';
        let obj= JSON.parse(s);
        alert(obj.name);
        alert(obj.age);
        alert(obj.marry);
        alert(obj.hobby);
    </script>

</body>
</html>
~~~

### 1.5.2 BOM对象

接下来我们学习BOM对象，BOM的全称是Browser Object Model,翻译过来是浏览器对象模型。

也就是JavaScript将浏览器的各个组成部分封装成了对象。我们要操作浏览器的部分功能，可以通过操作BOM对象的相关属性或者函数来完成。例如：我们想要将浏览器的地址改为`http://www.baidu.com`,我们就可以通过BOM中提供的location对象的href属性来完成，代码如下：`location.href='http://www.baidu.com'`

BOM中提供了如下5个对象：

| 对象名称  | 描述           |
| :-------- | :------------- |
| Window    | 浏览器窗口对象 |
| Navigator | 浏览器对象     |
| Screen    | 屏幕对象       |
| History   | 历史记录对象   |
| Location  | d地址栏对象    |

上述5个对象与浏览器各组成对应的关系如下图所示：

![](assets/image-20210815194911914.png) 

对于上述5个对象，我们重点学习的是**Window对象、Location对象这2个**。

#### 1.5.2.1 Window对象

window对象指的是浏览器窗口对象，是JavaScript的全部对象，所以对于window对象，我们可以直接使用，并且对于window对象的方法和属性，我们可以省略window.例如：我们之前学习的alert()函数其实是属于window对象的,其完整的代码如下：

~~~
window.alert('hello');
~~~

其可以省略window.  所以可以简写成

~~~
alert('hello')
~~~

所以对于window对象的属性和方法，我们都是采用简写的方式。window提供了很多属性和方法，下表列出了常用属性和方法

window对象提供了获取其他BOM对象的属性：

| 属性      | 描述                  |
| --------- | --------------------- |
| history   | 用于获取history对象   |
| location  | 用于获取location对象  |
| Navigator | 用于获取Navigator对象 |
| Screen    | 用于获取Screen对象    |

也就是说我们要使用location对象，只需要通过代码`window.location`或者简写`location`即可使用

window也提供了一些常用的函数，如下表格所示：

| 函数          | 描述                                               |
| ------------- | -------------------------------------------------- |
| alert()       | 显示带有一段消息和一个确认按钮的警告框。           |
| comfirm()     | 显示带有一段消息以及确认按钮和取消按钮的对话框。   |
| setInterval() | 按照指定的周期（以毫秒计）来调用函数或计算表达式。 |
| setTimeout()  | 在指定的毫秒数后调用函数或计算表达式。             |

接下来，我们通过VS Code中创建名为05. JS-对象-BOM.html文件来编写代码来演示上述函数：

- alert()函数：弹出警告框，函数的内容就是警告框的内容

  ~~~html
  <script>
      //window对象是全局对象，window对象的属性和方法在调用时可以省略window.
      window.alert("Hello BOM");
      alert("Hello BOM Window");
  </script>
  ~~~

  浏览器打开，依次弹框，此处只截图一张

  ![1668794735581](assets/1668794735581.png) 

- confirm()函数：弹出确认框，并且提供用户2个按钮，分别是确认和取消。

  添加如下代码：

  ~~~js
  confirm("您确认删除该记录吗?");
  ~~~

  浏览器打开效果如图所示：

  ![1668794898891](assets/1668794898891.png) 

  但是我们怎么知道用户点击了确认还是取消呢？所以这个函数有一个返回值，当用户点击确认时，返回true，点击取消时，返回false。我们根据返回值来决定是否执行后续操作。修改代码如下：再次运行，可以查看返回值true或者false

  ~~~js
  var flag = confirm("您确认删除该记录吗?");
  alert(flag);
  ~~~

- setInterval(fn,毫秒值)：定时器，用于周期性的执行某个功能，并且是**循环执行**。该函数需要传递2个参数：

  fn:函数，需要周期性执行的功能代码

  毫秒值：间隔时间

  注释掉之前的代码，添加代码如下：

  ~~~js
  //定时器 - setInterval -- 周期性的执行某一个函数
  var i = 0;
  setInterval(function(){
       i++;
       console.log("定时器执行了"+i+"次");
  },2000);
  ~~~

  刷新页面，浏览器每个一段时间都会在控制台输出，结果如下：

  ![1668795435780](assets/1668795435780.png) 

- setTimeout(fn,毫秒值) ：定时器，只会在一段时间后**执行一次功能**。参数和上述setInterval一致

  注释掉之前的代码，添加代码如下：

  ~~~js
  //定时器 - setTimeout -- 延迟指定时间执行一次 
  setTimeout(function(){
  	alert("JS");
  },3000);
  ~~~

  浏览器打开，3s后弹框，关闭弹框，发现再也不会弹框了。

#### 1.5.2.2 Location对象

location是指代浏览器的地址栏对象，对于这个对象，我们常用的是href属性，用于获取或者设置浏览器的地址信息，添加如下代码：

~~~js
//获取浏览器地址栏信息
alert(location.href);
//设置浏览器地址栏信息
location.href = "https://www.itcast.cn";
~~~

浏览器效果如下：首先弹框展示浏览器地址栏信息，

![1668796236628](assets/1668796236628.png) 

然后点击确定后，因为我们设置了地址栏信息，所以浏览器跳转到传智首页

完整代码如下：

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script>
        /* let res = confirm('我帅吗?');
        if(res){
            alert("你真有眼光");
        }else{
            alert("你再瞅瞅!");
        } */

        let i = 1;
        // 循环执行的定时器  每秒,向页面中写一个数字
        /* setInterval(function(){
            document.write(i++ +"<br>")
        },1000); */

        // 使用仅执行1次的定时器
        setTimeout(function(){
            document.write(i++ +"<br>")
        },500);
        
        // 3秒后进行跳转
        let dsq = setInterval(()=>{
            document.write(i++ +"<br>")
            if(i == 4){
                // 清除定时器,同时让页面跳转
                clearInterval(dsq);
                // 跳转
                location.href = 'http://www.jd.com';
            }
        },1000);

    </script>

</body>
</html>
~~~

### 1.5.3 DOM对象

#### 1.5.3.1 DOM介绍

DOM：Document Object Model 文档对象模型。也就是 JavaScript 将 HTML 文档的各个组成部分封装为对象。

DOM 其实我们并不陌生，之前在学习 XML 就接触过，只不过 XML 文档中的标签需要我们写代码解析，而 HTML 文档是浏览器解析。封装的对象分为

- Document：整个文档对象
- Element：元素对象
- Attribute：属性对象
- Text：文本对象
- Comment：注释对象

如下图，左边是 HTML 文档内容，右边是 DOM 树

![1668796698067](assets/1668796698067.png) 

那么我们学习DOM技术有什么用呢？主要作用如下：

- 改变 HTML 元素的内容
- 改变 HTML 元素的样式（CSS）
- 对 HTML DOM 事件作出反应
- 添加和删除 HTML 元素

总而达到动态改变页面效果目的

#### 1.5.3.2 获取DOM对象

我们知道DOM的作用是通过修改HTML元素的内容和样式等来实现页面的各种动态效果，但是我们要操作DOM对象的前提是先获取元素对象，然后才能操作。

- 如何获取DOM中的元素对象（Element对象 ，也就是标签）
- 如何操作Element对象的属性,也就是标签的属性。

接下来我们先来学习如何获取DOM中的元素对象。

HTML中的Element对象可以通过Document对象获取，而Document对象是通过window对象获取的。document对象提供的用于获取Element元素对象的api如下表所示：

| 函数                              | 描述                                     |
| --------------------------------- | ---------------------------------------- |
| document.getElementById()         | 根据id属性值获取，返回单个Element对象    |
| document.getElementsByTagName()   | 根据标签名称获取，返回Element对象数组    |
| document.getElementsByName()      | 根据name属性值获取，返回Element对象数组  |
| document.getElementsByClassName() | 根据class属性值获取，返回Element对象数组 |

如下页面代码：

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    
    <table border="1px" cellspacing="0px" width = "300px";>
        <tr id="shou">
            <th>序号</th>
            <th>姓名</th>
            <th>年龄</th>
        </tr>
        <tr>
            <td>1</td>
            <td name="myname">张三</td>
            <td class="myage">18</td>
        </tr>
        <tr>
            <td>2</td>
            <td  name="myname">李四</td>
            <td class="myage">19</td>
        </tr>
        <tr>
            <td>3</td>
            <td  name="myname">王五</td>
            <td class="myage">17</td>
        </tr>
    </table>

    <script>
        // 给所有的人的年龄 添加 2岁
        // 1: 自己给想要操作的 tb 单元格添加了 className
        // 2: 根据 className获取对应的标签对象数组
        let arr = document.getElementsByClassName("myage");
        // 3: 遍历数组,得到每个对象,面向对象, 获取里面的内容,并将内容转成int
        for(let e of arr){
            // 面向对象, 获取里面的内容,并将内容转成int
            let age = parseInt(e.innerHTML);
            // 4: 添加2岁,存回去
            e.innerHTML = age+2;
        }
        // 给所有人的姓名,添加一个绿色的背景色
        let arr2 = document.getElementsByName("myname");
        for(let v of arr2){
            // 直接面向 元素对象,操作样式即可
            v.style.backgroundColor = 'green';
        }

        // 给表格的标题行添加红色背景,并将字体颜色修改为 黄色
        let hang = document.getElementById("shou");
        hang.style.backgroundColor='red';
        hang.style.color='yellow';

    </script>
</body>
</html>
~~~

### 1.5.4 案例

#### 1.5.4.1 需求说明

鲁迅说的好，光说不练假把式,光练不说傻把式。所以接下来我们需要通过案例来加强对于上述DOM知识的掌握。需求如下3个：

- 点亮灯泡
- 将所有的div标签的标签体内容后面加上：very good
- 使所有的复选框呈现被选中的状态

效果如下所示：

![1668800646200](assets/1668800646200.png) 

#### 1.5.4.2 资料准备

![1668801302139](assets/1668801302139.png) 

然后准备如下代码：

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <img id="light" src="../04_img/off.gif"> <br>

    <div class="cls">程序员K哥</div>   <br>
    <div class="cls">杭州智晟</div> <br>

    <input type="checkbox" name="hobby" > 电影
    <input type="checkbox" name="hobby"> 旅游
    <input type="checkbox" name="hobby"> 游戏
    <br>
    <script>
        
        //1. 点亮灯泡
        document.getElementById("light").src = '../04_img/on.gif';

        //2. 将所有的 div 标签的标签体内容追加 红色的非常好
        let arr = document.getElementsByTagName("div");
        for(let div of arr){
            div.innerHTML += '<span style="color: red;">非常好</span>'
        }

        //3. 使所有的复选框呈现被选中的状态
        let arr2 = document.getElementsByName("hobby");
        for(let v of arr2){
            v.checked = true;
        }

    </script>
</body>
</html>
~~~

## 1.6 JavaScript事件

### 1.6.1 事件介绍

如下图所示的百度注册页面，当我们用户输入完内容，百度可以自动的提示我们用户名已经存在还是可以使用。那么百度是怎么知道我们用户名输入完了呢？这就需要用到JavaScript中的事件了。

![1668802830796](assets/1668802830796.png) 

什么是事件呢？HTML事件是发生在HTML元素上的 “事情”，例如：

- 按钮被点击
- 鼠标移到元素上
- 输入框失去焦点
- ........

而我们可以给这些事件绑定函数，当事件触发时，可以自动的完成对应的功能。这就是事件监听。例如：对于我们所说的百度注册页面，我们给用户名输入框的失去焦点事件绑定函数，当我们用户输入完内容，在标签外点击了鼠标，对于用户名输入框来说，失去焦点，然后执行绑定的函数，函数进行用户名内容的校验等操作。JavaScript事件是js非常重要的一部分，接下来我们进行事件的学习。那么我们对于JavaScript事件需要学习哪些内容呢？我们得知道有哪些常用事件，然后我们得学会如何给事件绑定函数。所以主要围绕2点来学习：

- 事件绑定
- 常用事件

### 1.6.2 事件绑定 

JavaScript对于事件的绑定提供了2种方式：

- 方式1：通过html标签中的事件属性进行绑定

  例如一个按钮，我们对于按钮可以绑定单机事件，可以借助标签的onclick属性，属性值指向一个函数。

  在VS Code中创建名为09. JS-事件-事件绑定.html，添加如下代码：

  ~~~html
  <input type="button" id="btn1" value="事件绑定1" onclick="on()">
  ~~~

  很明显没有on函数，所以我们需要创建该函数，代码如下：

  ~~~html
  <script>
      function on(){
          alert("按钮1被点击了...");
      }
  </script>
  ~~~

  浏览器打开，然后点击按钮，弹框如下：

  ![1668804375833](assets/1668804375833.png) 

- 方式2：通过DOM中Element元素的事件属性进行绑定

  依据我们学习过得DOM的知识点，我们知道html中的标签被加载成element对象，所以我们也可以通过element对象的属性来操作标签的属性。此时我们再次添加一个按钮，代码如下：

  ~~~html
  <input type="button" id="btn2" value="事件绑定2">
  ~~~

  我们可以先通过id属性获取按钮对象，然后操作对象的onclick属性来绑定事件，代码如下：

  ~~~js
  document.getElementById('btn2').onclick = function(){
      alert("按钮2被点击了...");
  }
  ~~~

  浏览器刷新页面，点击第二个按钮，弹框如下：

  ![1668804696373](assets/1668804696373.png) 

  **需要注意的是：事件绑定的函数，只有在事件被触发时，函数才会被调用。**

  整体代码如下：
```html
  <!DOCTYPE html>
    <html lang="en">
  <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>JS-事件-事件绑定</title>
    </head>

    <body>
        <input type="button" id="btn1" value="事件绑定1" onclick="on()">
        <input type="button" id="btn2" value="事件绑定2">
    </body>

    <script>
        function on(){
            alert("按钮1被点击了...");
        }


        document.getElementById('btn2').onclick = function(){
            alert("按钮2被点击了...");
        }

    </script>
    </html>
```
### 1.6.3 常见事件

上面案例中使用到了 `onclick` 事件属性，那都有哪些事件属性供我们使用呢？下面就给大家列举一些比较常用的事件属性

| 事件属性名  | 说明                     |
| ----------- | ------------------------ |
| onclick     | 鼠标单击事件             |
| onblur      | 元素失去焦点             |
| onfocus     | 元素获得焦点             |
| onload      | 某个页面或图像被完成加载 |
| onsubmit    | 当表单提交时触发该事件   |
| onmouseover | 鼠标被移到某元素之上     |
| onmouseout  | 鼠标从某元素移开         |

在代码中提供了10. JS-事件-常见事件.html的文件，我们可以通过浏览器打开来观察几个常用事件的具体效果：

- onfocus:获取焦点事件，鼠标点击输入框，输入框中光标一闪一闪的，就是输入框获取焦点了

  ![1668805346551](assets/1668805346551.png) 

- onblur:失去焦点事件，前提是输入框获取焦点的状态下，在输入框之外的地方点击，光标从输入框中消失了，这就是失去焦点。

  ![1668805498416](assets/1668805498416.png) 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <form action="#" method="get" onsubmit="return mysub()">
        用户名:<input type="text" name="un" placeholder="来人留下大名" onblur="mycheck()" id = "inp"><span id="sp" style="color: red;display: none;">必须写名字哟</span>
        <br>
        <input type="submit" value="提交">
    </form>


    <script>
        function mycheck(){
            if(!document.getElementById('inp').value){
                document.getElementById("sp").style.display = 'inline';
                return false;
            }
            document.getElementById("sp").style.display = 'none';
            return true;
        }
        function mysub(){
            return mycheck();
        }
    </script>
</body>
</html>
```

### 1.6.4 案例

#### 1.6.4.1 需求说明

接下来我们通过案例来加强所学js知识点的掌握。

需求如下3个：

1. 点击 “点亮”按钮 点亮灯泡，点击“熄灭”按钮 熄灭灯泡
2. 输入框鼠标聚焦后，展示小写；鼠标离焦后，展示大写。
3. 点击 “全选”按钮使所有的复选框呈现被选中的状态，点击 “反选”按钮使所有的复选框呈现取消勾选的状态。

效果如图所示：

![1668806049390](assets/1668806049390.png) 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS-事件-案例</title>
</head>
<body>

    <img id="light" src="img/off.gif"> <br>

    <input type="button" value="点亮" onclick="on()"> 
    <input type="button"  value="熄灭" onclick="off()">
    
    <br> <br>
    <input type="text" id="name" value="ITCAST" onfocus="lower()" onblur="upper()">
    <br> <br>

    <input type="checkbox" name="hobby"> 电影
    <input type="checkbox" name="hobby"> 旅游
    <input type="checkbox" name="hobby"> 游戏
    <br>
    <input type="button" value="全选" onclick="checkAll()"> 
    <input type="button" value="反选" onclick="reverse()">
</body>
<script>
    //1. 点击 "点亮" 按钮, 点亮灯泡; 点击 "熄灭" 按钮, 熄灭灯泡; -- onclick
    function on(){
        //a. 获取img元素对象
        var img = document.getElementById("light");

        //b. 设置src属性
        img.src = "img/on.gif";
    }

    function off(){
        //a. 获取img元素对象
        var img = document.getElementById("light");

        //b. 设置src属性
        img.src = "img/off.gif";
    }

    //2. 输入框聚焦后, 展示小写; 输入框离焦后, 展示大写; -- onfocus , onblur
    function lower(){//小写
        //a. 获取输入框元素对象
        var input = document.getElementById("name");

        //b. 将值转为小写
        input.value = input.value.toLowerCase();
    }

    function upper(){//大写
        //a. 获取输入框元素对象
        var input = document.getElementById("name");

        //b. 将值转为大写
        input.value = input.value.toUpperCase();
    }

    //3. 点击 "全选" 按钮使所有的复选框呈现选中状态 ; 点击 "反选" 按钮使所有的复选框呈现取消勾选的状态 ; -- onclick
    function checkAll(){
        //a. 获取所有复选框元素对象
        var hobbys = document.getElementsByName("hobby");

        //b. 设置选中状态
        for (let i = 0; i < hobbys.length; i++) {
            const element = hobbys[i];
            element.checked = true;
        }
    }
    
    function reverse(){
        //a. 获取所有复选框元素对象
        var hobbys = document.getElementsByName("hobby");

        //b. 设置未选中状态
        for (let i = 0; i < hobbys.length; i++) {
            const element = hobbys[i];
            element.checked = false;
        }
    }

</script>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div{
            font-size: 50px;
            text-align: center;
            line-height: 100px;
        }
    </style>
</head>
<body>
    
    <div style="border: 5px solid grey;width:120px;height:400px;margin: auto;border-radius: 10px;">
        <div id="g" style="border: 1px solid red;width:100px;height:100px;margin: auto;margin-top: 10px;border-radius: 50px;background-color: grey;" >

        </div>
        <div id="y" style="border: 1px solid red;width:100px;height:100px;margin: auto;margin-top: 10px;border-radius: 50px;background-color: grey;" >

        </div>
        <div id="r" style="border: 1px solid red;width:100px;height:100px;margin: auto;margin-top: 10px;border-radius: 50px;background-color: grey;" >

        </div>
    </div>

    <script>
        // 页面加载完成之后,开始量红灯,10秒后,亮绿灯,前7秒是绿色,后3秒是黄色,最后变红灯,依次类推...
        let time =0;
        let g = document.getElementById('g');
        let y = document.getElementById('y');
        let r = document.getElementById('r');
        let dsq = setInterval(()=>{
            time++;
            if(time <= 10){
                r.style.backgroundColor = 'red';
                r.innerHTML = 10-time;
            }else if(time <= 17){
                r.style.backgroundColor = 'grey';
                r.innerHTML = '--';
                g.style.backgroundColor = 'green';
                g.innerHTML = 20-time;
            }else if(time < 20){
                g.style.backgroundColor = 'grey';
                g.innerHTML = '--';
                y.style.backgroundColor = 'yellow';
                y.innerHTML = 20-time;
            }else if(time == 20){
                y.style.backgroundColor = 'grey';
                y.innerHTML = '--';
                time=0;
            }
        },1000);
    </script>

</body>
</html>
```


