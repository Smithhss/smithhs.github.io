---
title: Vue-axios-ele入门
date: 2026-04-15 09:31:09
tags:
  - Java
  - JavaWeb
  - 后端
categories: 编程开发
cover: 'https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250211140304.png'
---


{% raw %}
# 2 Vue

## 2.1 Vue概述

这种开发流程，所以我们引入了一种叫做**MVVM(Model-View-ViewModel)的前端开发思想**，即让我们开发者更加关注数据，而非数据绑定到视图这种机械化的操作。那么具体什么是MVVM思想呢？

MVVM:其实是Model-View-ViewModel的缩写，有3个单词，具体释义如下：

- Model: 数据模型，特指前端中通过请求从后台获取的数据
- View: 视图，用于展示数据的页面，可以理解成我们的html+css搭建的页面，但是没有数据
- ViewModel: 数据绑定到视图，负责将数据（Model）通过JavaScript的DOM技术，将数据展示到视图（View）上

如图所示就是MVVM开发思想的含义：

![1668857055058](assets/1668857055058.png) 

基于上述的MVVM思想，其中的Model我们可以通过Ajax来发起请求从后台获取;
对于View部分，我们将来会学习一款ElementUI框架来替代HTML+CSS来更加方便的搭建View;
而今天我们要学习的就是侧重于ViewModel部分开发的vue前端框架，用来替代JavaScript的DOM操作，让数据展示到视图的代码开发变得更加的简单。可以简单到什么程度呢？可以参考下图对比：

![1668858213508](assets/1668858213508.png) 

在上述的代码中，我们看不到之前的DOM操作，因为vue全部帮我们封装好了。

接下来我们来介绍一下vue。

Vue.js（读音 /vjuː/, 类似于 **view**） 是一套构建用户界面的 **渐进式框架**。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。Vue.js 的目标是通过尽可能简单的 API 实现**响应的数据绑定**和**组合的视图组件**。

框架即是一个半成品软件，是一套可重用的、通用的、软件基础代码模型。基于框架进行开发，更加快捷、更加高效。

在上面的这句话中呢，出现了三个词，分别是：**构建用户界面、渐进式、框架**。

**1). 构建用户界面**

构建用户界面是指，在Vue中，可以基于数据渲染出用户看到的界面。
那这句话什么意思呢？我们来举一个例子，比如将来服务器端返回给前端的原始数据呢，就是如下这个样子：

```json
userList: [
    {"id": 1, "name": "谢逊", "image": "1.jpg", "gender": 1, "job": "班主任"},
    {"id": 2, "name": "韦一笑", "image": "2.jpg", "gender": 1, "job": "班主任"}
]
```

而上面的这些原始数据，用户是看不懂的。
而我们开发人员呢，可以使用Vue中提供的操作，将原始数据遍历、解析出来，从而渲染呈现出用户所能看懂的界面，如下所示：

![image.png](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250211140304.png)

那这个过程呢，就是基于数据渲染出用户看到的界面，也就是所谓的 **构建用户界面。**

**2). 渐进式**

渐进式中的渐进呢，字面意思就是 " 循序渐进 "。Vue生态中的语法呢是非常多的，比如声明式渲染、组件系统、客户端路由（VueRouter）、状态管理（Vuex、Pinia）、构建工具（Webpack、Vite）等等。

![image.png](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250211140535.png)

所谓渐进，指的是我们使用Vue框架呢，我们不需要把所有的组件、语法全部学习完毕才可以使用Vue。 而是，我们学习一点就可以使用一点了

那由此呢，也就引出了Vue中两种常见的开发模式：

- 基于Vue提供的核心包，完成项目局部模块的改造了。
- 基于Vue提供的核心包、插件进行工程化开发，也就是做整站开发。

**3). 框架**

- 

  框架：就是一套完整的项目解决方案，用于快速构建项目 。这是我们接触的第一个框架，那在我们后面的学习中，我们还会学习很多的java语言中的框架，那通过这些框架呢，就可以来快速开发java项目，提高开发效率。

- 

  优点：大大提升前端项目的开发效率 。

## 2.2 快速入门

如下图所示：

第二步：然后编写&lt;script&gt;标签来引入vue.js文件，代码如下：

```html
<script src="js/vue.js"></script>
```

第三步：在js代码区域定义vue对象,代码如下：

```html
<script>
    //定义Vue对象
    new Vue({
        el: "#app", //vue接管区域
        data:{
            message: "Hello Vue"
        }
    })
</script>
```

在创建vue对象时，有几个常用的属性：

- el:  用来指定哪儿些标签受 Vue 管理。 该属性取值 `#app` 中的 `app` 需要是受管理的标签的id属性值
- data: 用来定义数据模型
- methods: 用来定义函数。

第四步：在html区域编写视图，其中{{}}是插值表达式，用来将vue对象中定义的model展示到页面上的

```html
<body>
    <div id="app">
        <input type="text" v-model="message">
        {{message}}
    </div>
</body>
```

浏览器打开效果如图所示：

![1668859214102](assets/1668859214102.png) 

整体代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue-快速入门</title>
    <script src="js/vue.js"></script>
</head>
<body>
    <div id="app">
        <input type="text" v-model="message">
        {{message}}
    </div>
</body>
<script>
    //定义Vue对象
    new Vue({
        el: "#app", //vue接管区域
        data:{
            message: "Hello Vue"
        }
    })
</script>
</html>
```

## 2.3 Vue指令

在上述的快速入门中，我们发现了html中输入了一个没有学过的属性`v-model`，这个就是vue的**指令**。

**指令：**HTML 标签上带有 v- 前缀的特殊属性，不同指令具有不同含义。例如：v-if，v-for…

在vue中，通过大量的指令来实现数据绑定到**视图**的，所以接下来我们需要学习vue的常用指令，如下表所示：

| **指令**  | **作用**                                            |
| --------- | --------------------------------------------------- |
| v-bind    | 为HTML标签绑定属性值，如设置  href , css样式等      |
| v-model   | 在表单元素上创建双向数据绑定                        |
| v-on      | 为HTML标签绑定事件                                  |
| v-if      | 条件性的渲染某元素，判定为true时渲染,否则不渲染     |
| v-else    |                                                     |
| v-else-if |                                                     |
| v-show    | 根据条件展示某元素，区别在于切换的是display属性的值 |
| v-for     | 列表渲染，遍历容器的元素或者对象的属性              |

### 2.3.1 v-bind和v-model

| **指令** | **作用**                                       |
| -------- | ---------------------------------------------- |
| v-bind   | 为HTML标签绑定属性值，如设置  href , css样式等 |
| v-model  | 在表单元素上创建双向数据绑定                   |

- v-bind:  为HTML标签绑定属性值，如设置  href , css样式等。**当vue对象中的数据模型发生变化时，标签的属性值会随之发生变化**。如下代码：

```html
<!DOCTYPE html>
  <html lang="en">
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Vue-指令-v-bind</title>
      <script src="js/vue.js"></script>
  </head>
  <body>
      <div id="app">

          <a >链接1</a>
          <a >链接2</a>
      
          <input type="text" >
      
      </div>
  </body>
  <script>
      //定义Vue对象
      new Vue({
          el: "#app", //vue接管区域
          data:{
             url: "https://www.baidu.com"
          }
      })
  </script>
  </html>

```

  在上述的代码中，v-bind指令是可以省略的，但是:不能省略，所以第二个超链接的代码编写如下：

  ```html
<a :href="url">链接2</a>
  ```

  浏览器打开，2个超链接都可以点击，然后跳转到百度去！效果如图所示：

 ![1668860425429](assets/1668860425429.png)

  **注意：html属性前面有:表示采用的vue的属性绑定！**

- v-model： 在表单元素上创建双向数据绑定。什么是双向？

  -  vue对象的data属性中的数据变化，视图展示会一起变化
  - 视图数据发生变化，vue对象的data属性中的数据也会随着变化。

  data属性中数据变化，我们知道可以通过赋值来改变，但是视图数据为什么会发生变化呢？**只有表单项标签！所以双向绑定一定是使用在表单项标签上的**。编写如下代码：

  ```html
  <input type="text" v-model="url">
  ```

  打开浏览器，我们修改表单项标签，发现vue对象data中的数据也发生了变化，如下图所示：
  ![1668861009068](assets/1668861009068.png)
  通过上图我们发现，我们只是改变了表单数据，那么我们之前超链接的绑定的数据值也发生了变化，为什么？

  就是因为我们双向绑定，在视图发生变化时，同时vue的data中的数据模型也会随着变化。那么这个在企业开发的应用场景是什么？

  **双向绑定的作用：可以获取表单的数据的值，然后提交给服务器**

  整体代码如下:
```html
<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>

      <script src="../02_js/vue.js"></script>
  </head>
  <body>
      
      <!-- 1: 引入 vue.js 文件
      2: 准备一个 div 标签,与 vue对象实现双向绑定
      3: 在js中创建 vue对象,定义属性,与div绑定 -->
      
      <div id="d1">
          请在输入框中输入超链接的地址:<input type="text" v-model="addr">
          <br>
          <a v-bind:href="addr">点击试试</a>
          <a :href="addr">简写格式-点击试试</a>
          <br>
          请在输入框中输入图片名称:<input type="text" v-model="img">
          <br>
          <img :src="img" >
      </div>
      
      <script>
          new Vue({
              el:"#d1",
            data:{
                  addr:'http://www.jd.com',
                  img:'../04_img/1.jpg'
              }
          });
      </script>

  </body>
  </html>
```

### 2.3.2 v-on

v-on: 用来给html标签绑定事件的。**需要注意的是如下2点**：

- v-on语法给标签的事件绑定的函数，必须是vue对象种声明的函数
- v-on语法绑定事件时，事件名相比较js中的事件名，没有on

例如：在js中，事件绑定demo函数

  ```html
  <input onclick="demo()">
  ```

vue中，事件绑定demo函数

  ```html
  <input v-on:click="demo()">
  ```

完整代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../02_js/vue.js"></script>
</head>
<body>
    <!-- 1: 引入 vue.js 文件
    2: 准备一个 div 标签,与 vue对象实现双向绑定
    3: 在js中创建 vue对象,定义属性,与div绑定 -->

    <div id="d1">
       <button  v-on:click="myc">按钮1</button>
       <button @mouseover="mym">按钮2</button>
    </div>

    <script>
        new Vue({
            el:"#d1",
            data:{
                msg:'自定义变量值'
            },
            methods:{
                myc(){
                    alert('点我干啥');
                },
                mym(){
                    // 在这里想获取vue对象的属性名,可以通过  this.xx
                    alert('vue对象中的msg='+this.msg);
                }
            }
        });
    </script>
</body>
</html>
```

### 2.3.3 v-if和v-show

| 指令      | 描述                                                |
| --------- | --------------------------------------------------- |
| v-if      | 条件性的渲染某元素，判定为true时渲染,否则不渲染     |
| v-if-else |                                                     |
| v-else    |                                                     |
| v-show    | 根据条件展示某元素，区别在于切换的是display属性的值 |

如下代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue-指令-v-if与v-show</title>
    <script src="js/vue.js"></script>
</head>
<body>
    <div id="app">
        
        年龄<input type="text" v-model="age">经判定,为:
        <span>年轻人(35及以下)</span>
        <span>中年人(35-60)</span>
        <span>老年人(60及以上)</span>

        <br><br>
    </div>
</body>
<script>
    //定义Vue对象
    new Vue({
        el: "#app", //vue接管区域
        data:{
           age: 20
        },
        methods: {
            
        }
    })
</script>
</html>
```

其中采用了双向绑定到age属性，意味着我们可以通过表单输入框来改变age的值。

需求是当我们改变年龄时，需要动态判断年龄的值，呈现对应的年龄的文字描述。年轻人，我们需要使用条件判断`age<=35`,中年人我们需要使用条件判断`age>35 && age<60`,其他情况是老年人。所以通过v-if指令编写如下代码：

```html
年龄<input type="text" v-model="age">经判定,为:
<span v-if="age <= 35">年轻人(35及以下)</span>
<span v-else-if="age > 35 && age < 60">中年人(35-60)</span>
<span v-else>老年人(60及以上)</span>
```

浏览器打开测试效果如下图：

![1668864281939](assets/1668864281939.png) 

v-show和v-if的作用效果是一样的，只是原理不一样。复制上述html代码，修改v-if指令为v-show指令，代码如下：

```html
年龄<input type="text" v-model="age">经判定,为:
<span v-show="age <= 35">年轻人(35及以下)</span>
<span v-show="age > 35 && age < 60">中年人(35-60)</span>
<span v-show="age >= 60">老年人(60及以上)</span>
```

打开浏览器，展示效果如下所示：

![1668864558419](assets/1668864558419.png) 

可以发现，浏览器呈现的效果是一样的，但是浏览器中html源码不一样。v-if指令，不满足条件的标签代码直接没了，而v-show指令中，不满足条件的代码依然存在，只是添加了css样式来控制标签不去显示。

完整代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="../02_js/vue.js"></script>


</head>
<body>
    
    <!-- 1: 引入 vue.js 文件
    2: 准备一个 div 标签,与 vue对象实现双向绑定
    3: 在js中创建 vue对象,定义属性,与div绑定 -->

    <div id="d1">
        请在输入框中输入年龄:<input type="text" v-model="age">
        <br>
        您输入的年龄对应的阶段是:
        <span v-if="age < 0">年龄不合法</span>
        <span v-else-if="age < 18">未成年人</span>
        <span v-else-if="age <= 40">青年人</span>
        <span v-else-if="age < 60">壮年人</span>
        <span v-else>老年人</span>

        <hr>
        <button @click="myshow">显示图片</button>
        <button @click="myyc">隐藏图片</button>
        <br>
        <img src="../04_img/1.jpg" width="200px" height="500px" v-show="flag">
        <img src="../04_img/2.jpg" width="200px" height="500px" v-if="flag">
    </div>

    <script>
        new Vue({
            el:"#d1",
            data:{
                age:10,
                flag:false
            },
            methods:{
                myshow(){
                    this.flag = true;
                },
                myyc(){
                    this.flag = false;
                }
            }
        });
    </script>

</body>
</html>
```

### 2.3.4 v-for

v-for: 从名字我们就能看出，这个指令是用来遍历的。其语法格式如下：

```html
<标签 v-for="变量名 in 集合模型数据">
    {{变量名}}
</标签>
```

需要注意的是：需要循环那个标签，v-for 指令就写在那个标签上。

有时我们遍历时需要使用索引，那么v-for指令遍历的语法格式如下：

```html
<标签 v-for="(变量名,索引变量) in 集合模型数据">
    <!--索引变量是从0开始，所以要表示序号的话，需要手动的加1-->
   {{索引变量 + 1}} {{变量名}}
</标签>
```

如下代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue-指令-v-for</title>
    <script src="js/vue.js"></script>
</head>
<body>
    <div id="app">

    </div>
</body>
<script>
    //定义Vue对象
    new Vue({
        el: "#app", //vue接管区域
        data:{
           addrs:["北京", "上海", "西安", "成都", "深圳"]
        },
        methods: {
            
        }
    })
</script>
</html>
```

然后分别编写2种遍历语法，来遍历数组，展示数据，代码如下：

```html
 <div id="app">
     <div v-for="addr in addrs">{{addr}}</div>
     <hr>
     <div v-for="(addr,index) in addrs">{{index + 1}} : {{addr}}</div>
</div>
```

浏览器打开，呈现如下效果：

![1668866805981](assets/1668866805981.png) 



### 2.3.5 案例

- 需求：

  ![1668868100828](assets/1668868100828.png) 


其完整代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="../02_js/vue.js"></script>


</head>
<body>
    
    <!-- 1: 引入 vue.js 文件
    2: 准备一个 div 标签,与 vue对象实现双向绑定
    3: 在js中创建 vue对象,定义属性,与div绑定 -->

    <div id="d1">
        <table border="1px" width="500px" cellspacing="0px">
            <tr>
                <th>序号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
                <th>分数</th>
                <th>等级</th>
            </tr>
            <tr v-for="(stu,i) in stus">
                <td>{{i+1}}</td>
                <td>{{stu.name}}</td>
                <td>{{stu.age}}</td>
                <td>{{stu.sex ==1?'男':'女'}}</td>
                <td>{{stu.score}}</td>
                <td>
                    <span v-if="stu.score < 0 || stu.score > 100" style="color: red;">不合法</span>
                    <span v-else-if="stu.score < 60" style="color: red;">不及格</span>
                    <span v-else-if="stu.score < 80" style="color: green;">良好</span>
                    <span v-else>优秀</span>
                </td>
            </tr>
        </table>
    </div>

    <script>
        new Vue({
            el:"#d1",
            data:{
                stus:[
                    {
                        name:'张三',
                        age:18,
                        sex:1,
                        score:67
                    },
                    {
                        name:'李四',
                        age:19,
                        sex:2,
                        score:97
                    },
                    {
                        name:'王五',
                        age:16,
                        sex:1,
                        score:17
                    },
                    {
                        name:'赵六',
                        age:16,
                        sex:1,
                        score:-17
                    }
                ]
            }
        });
    </script>


</body>
</html>
```

## 2.4 生命周期

vue的生命周期：指的是vue对象从创建到销毁的过程。vue的生命周期包含8个阶段：每触发一个生命周期事件，会自动执行一个生命周期方法，这些生命周期方法也被称为钩子方法。其完整的生命周期如下图所示：

| 状态          | 阶段周期 |
| ------------- | -------- |
| beforeCreate  | 创建前   |
| created       | 创建后   |
| beforeMount   | 挂载前   |
| mounted       | 挂载完成 |
| beforeUpdate  | 更新前   |
| updated       | 更新后   |
| beforeDestroy | 销毁前   |
| destroyed     | 销毁后   |

下图是 Vue 官网提供的从创建 Vue 到效果 Vue 对象的整个过程及各个阶段对应的钩子函数：

![1668867134683](assets/1668867134683.png)

其中我们需要重点关注的是**mounted,** 其他的我们了解即可。

mounted：挂载完成，Vue初始化成功，HTML页面渲染成功。**以后我们一般用于页面初始化自动的ajax请求后台数据**

如下代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue-指令-v-for</title>
    <script src="js/vue.js"></script>
</head>
<body>
    <div id="app">
    </div>
</body>
<script>
    //定义Vue对象
    new Vue({
        el: "#app", //vue接管区域
        data:{
           
        },
        methods: {
            
        }
    })
</script>
</html>
```

然后我们编写mounted声明周期的钩子函数，与methods同级，代码如下：

```html
<script>
    //定义Vue对象
    new Vue({
        el: "#app", //vue接管区域
        data:{
           
        },
        methods: {
            
        },
        mounted () {
            alert("vue挂载完成,发送请求到服务端")
        }
    })
</script>
```

浏览器打开，运行结果如下：我们发现，自动打印了这句话，因为页面加载完成，vue对象创建并且完成了挂在，此时自动触发mounted所绑定的钩子函数，然后自动执行，弹框。

![1668867458156](assets/1668867458156.png) 


## 一、Ajax

```JavaScript
概述:
Ajax(Asynchronous JavaScript and XML)是一种在无需重新加载整个网页的情况下，通过JavaScript与服务器进行异步数据交互，实现局部页面更新的技术。

1. 同步与异步
- **同步**：客户端发送请求后必须等待服务器响应，期间不能执行其他操作。
- **异步**：客户端发送请求后可以继续执行其他操作，服务器响应后通过回调函数处理。

2. 原生 Ajax 示例
function getData() {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('GET', 'http://localhost:10010/emp/list');
    xmlHttpRequest.send();
    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            document.getElementById('div1').innerHTML = xmlHttpRequest.responseText;
        }
    };
}

缺点: 代码复杂,操作不方便,因此开发很少使用这种方式实现!
```

针对于上述Ajax的局部刷新功能是因为Ajax请求是异步的，与之对应的有同步请求。

- **同步请求**发送过程如下图所示：

![image.png](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250211155119.png)

浏览器页面在发送请求给服务器，在服务器处理请求的过程中，**浏览器页面不能做其他的操作**。只能等到服务器响应结束后才能，浏览器页面才能继续做其他的操作。

- **异步请求**发送过程如下图所示：

![image.png](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/20250211155154.png)

浏览器页面发送请求给服务器，在服务器处理请求的过程中，**浏览器页面还可以做其他的操作**。

## 二、Axios

### 1. Axios 

- 基于 Promise 的 HTTP 客户端，简化 Ajax 操作。

### 2. 快速入门

```
<script src="js/axios-0.18.0.js"></script>
```

### 3. 请求方式

通用方式

```JavaScript
axios({
    method: "get",
    url: "http://localhost:10010/emp/list"
}).then((result) => {
    console.log(result.data);
});
```

#### GET 请求（推荐）

```JavaScript
axios.get("http://localhost:10010/emp/list").then((result) => {
    console.log(result.data);
});
```

#### POST 请求（推荐）

```JavaScript
axios.post("http://localhost:10010/emp/deleteById", "id=1").then((result) => {
    console.log(result.data);
});
```

### 4. 案例：结合 Vue 动态加载数据

- 页面加载完成后自动请求并渲染员工列表。
- 性别：1 → 男，2 → 女。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="../02_js/axios-0.18.0.js"></script>

</head>
<body>
    <!-- 1: 引入 axios.js 文件
    2: 直接使用 axios({}).then(lambda处理响应).catch(lambda处理异常) -->
    <script>
        axios({
            method: 'get',
            url:'http://localhost:10010/emp/list'
            /* data: 'a=123' */
        }).then(resp=>{
            // resp形参代表 整个响应的对象,如果想获取响应的内容,需要使用固定的属性名 data
            alert('响应的对象整体是:'+JSON.stringify(resp));
            alert('响应的数据是:'+JSON.stringify(resp.data));
        }).catch(e=>{
            alert('出异常了:'+JSON.stringify(e))
        });
    </script>
</body>
</html>
```

- `.then()`：Promise 的链式调用，当请求**成功**（HTTP 状态码 2xx）时，这里的回调函数会被执行。
- **`resp` 形参**：代表 Axios 封装后的**完整响应对象**。它包含以下常用属性：
  - `data`：服务器返回的实际数据（已自动解析为 JSON 对象）。
  - `status`：HTTP 状态码（如 200）。
  - `statusText`：状态文本（如 "OK"）。
  - `headers`：响应头信息。
  - `config`：本次请求的配置信息。
- **`alert('响应的对象整体是:'+JSON.stringify(resp))`**：
  - 将整个 `resp` 对象转为 JSON 字符串并通过弹窗显示，方便查看 Axios 响应对象的完整结构。
- **`alert('响应的数据是:'+JSON.stringify(resp.data))`**：
  - 只将服务器返回的核心数据（`resp.data`）转为 JSON 字符串并弹窗显示。这是实际业务中最关心的部分。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="../02_js/axios-0.18.0.js"></script>

</head>
<body>
    
    <!-- 1: 引入 axios.js 文件
    2: 直接使用 axios({}).then(lambda处理响应).catch(lambda处理异常) -->

    <script>
        /* axios({
            method: 'post',
            url:'http://localhost:10010/emp/deleteById',
            data:'id=123'
        }).then(resp=>{
            // resp形参代表 整个响应的对象,如果想获取响应的内容,需要使用固定的属性名 data
            alert('响应的数据是:'+JSON.stringify(resp.data));
        }).catch(e=>{
            alert('出异常了:'+JSON.stringify(e))
        }); */

        // 简化形式
        axios.post('http://localhost:10010/emp/deleteById','id=456').then(resp=>alert(JSON.stringify(resp.data)));

        axios.get('http://localhost:10010/emp/list').then(resp=>alert(JSON.stringify(resp.data)));
    </script>

</body>
</html>
```

综合案例
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="../02_js/vue.js"></script>
    <script src="../02_js/axios-0.18.0.js"></script>


</head>
<body>
    
    <!-- 1: 引入 vue.js 文件
    2: 准备一个 div 标签,与 vue对象实现双向绑定
    3: 在js中创建 vue对象,定义属性,与div绑定 -->

    <div id="d1">
        <table width="500px" border="1px" cellspacing = "0px">
            <tr>
                <th>序号</th>
                <th>姓名</th>
                <th>图像</th>
                <th>性别</th>
                <th>职位</th>
                <th>入职日期</th>
                <th>操作时间</th>
            </tr>
            <tr v-for="(e,i) in arr">
                <td>{{i+1}}</td>
                <td>{{e.name}}</td>
                <td>
                    <img :src="e.image" width="80px" height="80px">
                </td>
                <td>{{ e.gender == 1?'男':'女' }}</td>
                <td>{{e.job}}</td>
                <td>{{e.entrydate}}</td>
                <td>{{e.updatetime}}</td>
            </tr>
        </table>
    </div>

    <script>
        new Vue({
            el:"#d1",
            data:{
                arr:[],
            },
            mounted() {
                // 发送异步请求,讲响应的结果,给 vue的arr赋值!!!
                axios.get('http://localhost:10010/emp/list')
                .then(r=>this.arr=r.data.data)
            },
        });
    </script>
</body>
</html>
```
## 三、前后端分离开发

### 1. 前后端混合开发缺点

- 沟通成本高，维护困难，扩展性差，分工不明确。

### 2. 前后端分离开发

- 当前主流开发模式。
- 流程：
  - 需求分析
  - 接口定义（API 文档）
  - 前后端并行开发
  - 前后端联调测试

## 四、前端工程化

### 1. 概念

- 将前端开发中的工具、技术、流程、经验规范化、标准化。

### 2. 环境准备

- 安装 NodeJS
- 安装 Vue CLI：

```
npm install -g @vue/cli
```

### 3. Vue 项目

#### 创建项目

- 命令行：`vue create vue-project01`
- 图形化界面：`vue ui`

#### 目录结构

- `public/`：静态资源
- `src/components/`：可重用组件
- `src/router/`：路由配置
- `src/views/`：视图组件
- `src/App.vue`：根组件
- `src/main.js`：入口 JS 文件

#### 启动项目

```shell
npm run serve
```

#### 配置端口

- 修改 `vue.config.js` 文件。

### 4. 开发流程

- 每个组件由三部分组成：
  - `<template>`：HTML 结构
  - `<script>`：JS 逻辑
  - `<style>`：样式

## 五、Element UI 组件库

### 1. 简介

- 基于 Vue 2.0 的桌面端组件库

### 2. 快速入门

```shell
npm install element-ui@2.15.3
```

- 在项目中引入 ElementUI，复制官网组件代码并调整。

### 3. 常见组件

- **表格（Table）**：展示结构化数据
- **分页（Pagination）**：处理大量数据
- **对话框（Dialog）**：弹窗交互
- **表单（Form）**：数据收集与校验

### 4. 案例：员工管理页面

- 实现页面布局、组件整合、数据异步加载。
- 数据接口：`http://localhost:10010/emp/list`
- 安装 Axios：

```shell
npm install axios
```

- 使用 Axios：

```shell
import axios from 'axios';
```

## Vue 路由

### 1. 前端路由概念

- URL 中的 hash（#）与组件的对应关系。

### 2. 安装路由

```shell
npm install vue-router@3.5.1
```

### 3. 核心组件

- `<router-link>`：路由导航
- `<router-view>`：路由内容展示
- 路由表：定义路径与组件的映射


### 📁 文件结构梳理
你粘贴的代码包含了一个标准 Vue 2 项目的 5 个核心文件：
1.  **`router/index.js`**：路由配置（指挥页面跳转的导航仪）
2.  **`App.vue`**：根组件（所有页面的外壳）
3.  **`views/HomeView.vue`**：首页
4.  **`views/AboutView.vue`**：关于页
5.  **`views/MyHelloView.vue`**：你自定义的页面

### 1️⃣ 文件一：`router/index.js` (路由配置)
这是整个项目的**交通指挥中心**，定义了“访问哪个网址显示哪个页面”。

```javascript
// 1. 导入 Vue 核心库
import Vue from 'vue'
// 2. 导入 VueRouter 路由插件
import VueRouter from 'vue-router'
// 3. 导入首页组件（直接导入，启动就加载）
import HomeView from '../views/HomeView.vue'

// 4. 让 Vue "使用" 路由插件
// 翻译：use = 使用
Vue.use(VueRouter)

// 5. 定义路由规则数组
// 翻译：routes = 路线（复数）
const routes = [
  {
    // 路径：访问根域名 http://localhost:8080/ 时
    path: '/',
    // 给这条路由起个名字
    name: 'home',
    // 显示的组件：HomeView
    component: HomeView
  },
  
  // 这是第二种写法：懒加载（按需加载）
  {
    path: '/about',
    name: 'about',
    // 翻译：component = 组件
    // 这里不是直接 import，而是写了一个函数
    // 好处：只有当你访问 /about 时，才会去下载这个页面的代码
    // 作用：让首页打开速度更快
    component: function () {
      return import('../views/AboutView.vue')
    }
  },

  // 这是你自己加的路由
  {
    path: '/abcd',
    // 懒加载：访问 /abcd 时才加载 MyHelloView.vue
    component: function () {
      return import('../views/MyHelloView.vue')
    }
  }
]

// 6. 创建路由对象实例
const router = new VueRouter({
  // 模式：history 模式（网址里没有 # 号，比较好看）
  // 如果是 'hash' 模式，网址会是 http://localhost:8080/#/about
  mode: 'history',
  // 基础路径：通常不用改，由环境变量决定
  base: process.env.BASE_URL,
  // 把上面定义的 routes 数组传进去
  routes
})

// 7. 导出路由对象，让 main.js 可以使用它
export default router
```

### 2️⃣ 文件二：`App.vue` (根组件)
这是所有页面的**“外壳”**，顶部的导航栏永远在这里，中间的内容会根据路由变化。

```html
<template>
  <!-- 模板区域：写 HTML 结构 -->
  <div id="app">
    <!-- 导航栏区域 -->
    <nav>
      <!-- router-link：路由链接组件（代替 <a> 标签） -->
      <!-- to="/"：点击后跳转到根路径 -->
      <!-- 好处：点击时页面不会刷新，只是局部替换内容 -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/abcd">自定义的页面</router-link> 
    </nav>

    <!-- router-view：路由视图（坑位） -->
    <!-- 作用：根据当前网址，把对应的组件"填"到这里显示 -->
    <router-view/>
  </div>
</template>

<style>
/* 全局样式：作用于整个项目 */
#app {
  /* 字体设置 */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* 字体抗锯齿（让字更平滑） */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* 文字居中 */
  text-align: center;
  /* 文字颜色 */
  color: #2c3e50;
}

/* 导航栏样式 */
nav {
  padding: 30px;
}

/* 导航链接样式 */
nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* 当前激活的链接样式（你在哪个页面，哪个链接就变绿） */
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
```

### 3️⃣ 文件三：`views/HomeView.vue` (首页)
这是访问网站时看到的**第一个页面**。

```html
<template>
  <div class="home">
    <!-- 显示 Vue 的 Logo 图片 -->
    <!-- alt：图片加载失败时显示的文字 -->
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 使用 HelloWorld 组件，并传入 msg 参数 -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ 是一个别名，代表 /src 文件夹
// 这句话的意思是：从 src/components/HelloWorld.vue 导入组件
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // 组件的名字
  name: 'HomeView',
  // 注册组件：告诉 Vue，我要用 <HelloWorld> 这个标签
  components: {
    HelloWorld
  }
}
</script>
```

### 4️⃣ 文件四：`views/AboutView.vue` (关于页)
这是演示**页面内跳转**的页面。

```html
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 在页面内部也可以放 router-link -->
    <!-- 点击这里会跳转到 /abcd 页面 -->
    <router-link to="/abcd">去自定义的页面</router-link> 
  </div>
</template>
```

### 5️⃣ 文件五：`views/MyHelloView.vue` (自定义页面)
这是你写的组件，演示了**数据绑定**。

```html
<template>
    <div>
        <h1>我是大标题</h1>
        <!-- 插值表达式：{{ }} -->
        <!-- 作用：把 data 里的 msg 变量显示在这里 -->
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
// 导出组件
export default {
    // data 函数：存放组件的数据
    // 注意：在 Vue 2 组件中，data 必须是一个函数，返回一个对象
    data(){
        return {
            // 定义一个变量叫 msg，值是 '嘿嘿嘿'
            msg:'嘿嘿嘿'
        }
    }
}
</script>

<style scoped>
    /* scoped：作用域样式 */
    /* 加了 scoped 后，这里写的样式只对当前这个文件里的 <h1> 生效 */
    /* 不会污染其他文件里的 h1 */
    h1{
        font-size: 50px;
        color: red;
    }
</style>
```

### 🔄 整个流程串起来
1.  **用户打开浏览器**：访问 `http://localhost:8080/`。
2.  **路由匹配**：`router/index.js` 发现 `/` 对应 `HomeView`。
3.  **页面渲染**：
    *   `App.vue` 的 `<router-view/>` 被替换成 `HomeView` 的内容。
    *   顶部的导航栏（Home | About | 自定义）保持不变。
4.  **用户点击“自定义的页面”**：
    *   网址变成 `/abcd`。
    *   `<router-view/>` 清空 `HomeView`，填入 `MyHelloView`。
    *   页面显示红色的“我是大标题”和“嘿嘿嘿”。


### 4. 案例：左侧菜单切换

- 点击菜单切换显示部门管理或员工管理。

## 七、打包部署

### 1. 打包项目

```shell
npm run build
```

- 生成 `dist/` 目录，包含所有静态资源。

### 2. 部署到 Nginx

- 将 `dist/` 内容复制到 Nginx 的 `html/` 目录。
- 启动 Nginx：双击 `nginx.exe`
- 默认端口：80
- 访问地址：`http://localhost:90`

## 总结

本课程涵盖：

- Ajax 与 Axios 的使用
- 前后端分离开发模式
- 前端工程化与 Vue 项目构建
- Element UI 组件库集成
- Vue 路由实现页面切换
- 项目打包与 Nginx 部署

{% endraw %}
