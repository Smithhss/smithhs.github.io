---
title: JavaScript-Vue重点总结
date: 2026-04-15 19:02:29
tags:
  - Java
  - JavaWeb
  - 后端
categories: 编程开发
cover: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80'
---


{% raw %}
# JavaScript · Vue · 重点总结

## 一、JavaScript 概述

### 1.1 核心概念

| 项目 | 说明 |
|------|------|
| **定义** | 跨平台、面向对象的**脚本语言**，控制网页行为，实现人机交互 |
| **ECMAScript** | 规定 JS 基础语法（变量、数据类型、流程控制、函数、对象等） |
| **BOM** | 浏览器对象模型，操作浏览器本身（弹窗、地址栏、关闭窗口等） |
| **DOM** | 文档对象模型，操作 HTML 文档（改内容、改样式等） |

### 1.2 两种引入方式

| 方式 | 说明 | 注意事项 |
|------|------|----------|
| **内部脚本** | `<script>` 标签内直接写 JS | 推荐放在 `<body>` 底部，改善显示速度 |
| **外部脚本** | `<script src="js/demo.js"></script>` | ① js 文件中不含 `<script>` 标签；② `<script>` 标签**不能自闭合** |

## 二、JS 基础语法

### 2.1 输出语句

| API | 描述 |
|-----|------|
| `window.alert()` | 警告弹框 |
| `document.write()` | 向 HTML body 写入内容 |
| `console.log()` | 写入浏览器控制台（调试常用） |

### 2.2 三种变量声明（⭐ 常考）

| 关键字 | 作用域 | 能否重复声明 | 变量提升 | 推荐 |
|--------|--------|------------|---------|------|
| `var` | 函数/全局作用域 | ✅ 允许（后覆盖前） | ✅ 提升，初值 `undefined` | ❌ 不推荐 |
| `let` | **块级作用域** `{ }` | ❌ 不允许，报语法错误 | ⚠️ 暂时性死区，声明前不能访问 | ✅ 推荐 |
| `const` | 块级作用域 | ❌ 不允许 | — | ✅ 声明常量时用 |

> JS 是**弱类型语言**：变量可存放任意类型的值，无需声明类型。

### 2.3 原始数据类型

| 数据类型 | 说明 |
|----------|------|
| `number` | 数字（整数、小数、`NaN`） |
| `string` | 字符串，单双引号均可 |
| `boolean` | 布尔值，`true` / `false` |
| `null` | 对象为空（`typeof null` 返回 `"object"`） |
| `undefined` | 声明但未初始化的变量默认值 |

> 使用 `typeof 变量` 查看数据类型；`parseInt("12A")` 从左往右逐字符转，遇到非数字停止；`parseInt("A12")` 返回 `NaN`。

**隐式类型转换（布尔上下文）：**

| 转为 `false` | 转为 `true` |
|-------------|------------|
| `0` `null` `undefined` `""` `NaN` | 其他所有值 |

```html
<script>
        // 练习原始类型
        let a = 1;
        let b = 1.5;
        let c = '1.5';
        let d = true;
        let e ;
        let f = null;

        //alert(typeof a); number
        //alert(typeof b); number
        //alert(typeof c); string
       // alert(typeof d); boolean
        //alert(typeof e); null
        //alert(typeof f); // null 代表的是所有引用数据类型的默认值,因此判断的类型为 object

        // 由其他类型的数据,转 数字的时候如果转换失败,就会得到 NaN 类型的数据  使用全局函数 parseInt 直接转即可,转换规则是从左向右逐个字符转换,只有当左边的第1个字符都转换失败的时候,才会得到 NaN
        let g = '12a34b';
        alert(parseInt(g)); //12
        let h = 'a12a34b';
        alert(parseInt(h)); //null

        alert(NaN == NaN);  // false
</script>
```

### 2.4 运算符

| 类型 | 说明 |
|------|------|
| 算术 | `+ - * / % ++ --` |
| 赋值 | `= += -= *= /= %=` |
| 比较 | `> < >= <= != == ===` |
| 逻辑 | `&& \|\| !` |
| 三元 | `条件 ? true值 : false值` |

**`==` vs `===`（⭐ 常考）：**

| 运算符 | 行为 |
|--------|------|
| `==` | 只比较**值**，自动进行类型转换（`1 == "1"` → `true`） |
| `===` | 同时比较**值和类型**（`1 === "1"` → `false`，**推荐使用**） |

```html
<script>
        let a = 123;
        let b = '123';

        alert(a==b); // true
        alert(a===b); // false

       // 数字与布尔比较的时候,会把布尔转数字 0:false 1:true
       alert(0== false) // true
       alert(1== true) //  true
       alert(2== true) //  false
</script>
```

## 三、函数

### 3.1 两种定义方式

```js
// 方式1：function 关键字
function add(a, b) {
    return a + b;
}

// 方式2：var/let 赋值（匿名函数）
var add = function(a, b) {
    return a + b;
}

// 箭头函数（ES6）
var add = (a, b) => a + b;
```

### 3.2 函数注意事项

| 特点 | 说明 |
|------|------|
| 参数无类型声明 | 形参不需要写 `let`/`var` |
| 返回值无类型声明 | 直接 `return` |
| 参数数量不匹配 | 多传 → 丢弃；少传 → 未接收的形参为 `undefined` |
| **不支持重载** | 同名函数后定义的会覆盖前定义的 |

## 四、JavaScript 内置对象

### 4.1 Array 数组

**创建方式：**
```js
var arr = new Array(1, 2, 3);  // 方式1
var arr = [1, 2, 3];           // 方式2（推荐）
```

**特点：** **长度可变；可存任意类型；越界不报错**（返回 `undefined`）

**常用属性/方法：**

| 方法/属性 | 说明 |
|-----------|------|
| `length` | 获取/设置数组长度 |
| `push(值)` | 向末尾添加元素，返回新长度 |
| `splice(start, count)` | 从 start 索引删除 count 个元素 |
| `forEach(fn)` | 遍历**有值**的元素，回调参数：`(元素, 索引)` |

```js
let arr = [2, 4, 5, 6, 8];

// 普通 for 遍历
for (let i = 0; i < arr.length; i++) { console.log(arr[i]); }

// for...of 遍历（只要值）
for (let v of arr) { console.log(v); }

// forEach（箭头函数）
arr.forEach((ele, ind) => { console.log(ind + ":" + ele); });
//ele 表示当前遍历到的数组元素的值。
//ind 表示该元素在数组中的位置（从 0 开始计数）

arr.push(9);           // 末尾添加 9
arr.splice(1, 2);      // 从索引1开始删除2个元素
```

### 4.2 String 字符串

| 属性/方法 | 说明 |
|-----------|------|
| `length` | 字符串长度 |
| `charAt(index)` | 返回指定索引处的字符 |
| `indexOf(str)` | 返回子串首次出现的索引，不存在返回 `-1` |
| `trim()` | 去除首尾空格 |
| `substring(start, end)` | 截取 `[start, end)`，含头不含尾 |
| `toLowerCase()` / `toUpperCase()` | 转小写 / 大写 |

### 4.3 JSON 对象

**自定义的对象：**

```js
var user = {
    name: "Tom",
    age: 18,
    eat() {
        console.log("用膳~");
    }
};
console.log(user.name);  // 访问属性
user.eat();              // 调用方法
```

##### json对象:**J**ava**S**cript **O**bject **N**otation，JavaScript对象标记法。

~~~js
{
    "key":value,
    "key":value,
    "key":value
}
~~~

**JSON 字符串格式：** key 必须用**双引号**，value 可以是任意类型（数字/字符串/布尔/数组/对象/null）

**JSON ↔ JS 对象互转（⭐ 重要）：**

| 方法 | 方向 | 说明 |
|------|------|------|
| `JSON.stringify(obj)` | JS 对象 → JSON 字符串 | 用于传输/存储 |
| `JSON.parse(str)` | JSON 字符串 → JS 对象 | 解析后才能用 `.属性名` 访问 |

```js
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

        // JS 对象 → JSON 字符串
        let stuStr = JSON.stringify(stu);
        alert(stuStr);

        // 假如手中已经有了字符串形式的json对象,可以转成 js的对象,然后面向对象,获取对象的内容
		// JSON 字符串 → JS 对象
        let s = '{"name":"张三丰","age":108,"marry":false,"hobby":["抽烟","喝酒","烫头"]}';

        let obj= JSON.parse(s);
        alert(obj.name);
        alert(obj.age);
        alert(obj.marry);
        alert(obj.hobby);
    </script>
</body>
```

## 五、BOM 对象

BOM的全称是Browser Object Model,翻译过来是浏览器对象模型

### 5.1 五大 BOM 对象

| 对象 | 描述 |
|------|------|
| **Window** | 浏览器窗口对象（全局对象，方法可省略 `window.`） |
| Location | 地址栏对象 |
| Navigator | 浏览器信息对象 |
| Screen | 屏幕对象 |
| History | 历史记录对象 |

### 5.2 Window 常用方法

| 方法 | 说明 |
|------|------|
| `alert(msg)` | 警告弹框 |
| `confirm(msg)` | 确认/取消弹框，返回 `boolean` |
| `setInterval(fn, ms)` | **周期性**执行函数（循环），返回定时器 ID |
| `setTimeout(fn, ms)` | **延迟执行**一次函数 |
| `clearInterval(id)` | 清除周期定时器 |

```js
// 确认框
let res = confirm('我帅吗?');
if(res){
	alert("你真有眼光");
}else{
	alert("你再瞅瞅!");
}

// 周期定时器（每秒执行一次）
let i = 1;
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
```

### 5.3 Location 对象

| 属性/方法 | 说明 |
|-----------|------|
| `location.href` | 获取/设置当前页面 URL（设置即跳转） |

```js
alert(location.href);              // 获取当前 URL
location.href = "https://jd.com"; // 跳转到京东
```

## 六、DOM 对象

### 6.1 核心概念

> DOM（Document Object Model）：浏览器将 HTML 文档中**每个标签**封装成对象，**通过操作对象来动态改变页面**。

### 6.2 获取 DOM 元素的四种方式

| 方法 | 描述 | 返回值 |
|------|------|--------|
| `document.getElementById("id")` | 根据 id 获取 | 单个 Element 对象 |
| `document.getElementsByTagName("标签名")` | 根据标签名获取 | Element 数组 |
| `document.getElementsByName("name值")` | 根据 name 属性获取 | Element 数组 |
| `document.getElementsByClassName("class值")` | 根据 class 获取 | Element 数组 |

### 6.3 操作 DOM 元素

| 操作 | 代码 |
|------|------|
| 读/写标签体内容 | `元素.innerHTML` / `元素.innerHTML = "..."` |
| 修改 CSS 样式 | `元素.style.backgroundColor = "red"` |
| 修改普通属性 | `元素.src = "..."` / `元素.checked = true` |

```js
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
```

## 七、JS 事件

### 7.1 两种事件绑定方式

| 方式 | 说明 | 示例 |
|------|------|------|
| **HTML 属性绑定** | 直接在标签上写事件属性 | `<button onclick="fn()">` |
| **DOM 属性绑定** | 通过 JS 代码动态绑定 | `document.getElementById("btn").onclick = function(){}` |

```html
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

### 7.2 常用事件

| 事件属性 | 触发时机 |
|----------|----------|
| `onclick` | 鼠标单击 |
| `onblur` | 元素**失去**焦点 |
| `onfocus` | 元素**获得**焦点 |
| `onload` | 页面/图像加载完成 |
| `onsubmit` | 表单提交时（返回 false 可阻止提交） |
| `onmouseover` | 鼠标移入元素 |
| `onmouseout` | 鼠标移出元素 |

```html
action="#"：表单提交时发送到的地址。# 表示提交到当前页面（不跳转）
placeholder="来人留下大名"：灰色提示文字，当输入框为空时显示“来人留下大名”
onblur="mycheck()"：失去焦点事件.当用户点击输入框外面（即离开这个输入框）时，会调用 mycheck() 函数
```

```html
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



## 八、Vue 框架

### 8.1 MVVM 思想

| 概念 | 说明 |
|------|------|
| **Model** | 数据模型（从后台请求获取的数据） |
| **View** | 视图（HTML + CSS 搭建的页面） |
| **ViewModel** | Vue 框架负责将 Model 数据自动绑定到 View，**无需手写 DOM 操作** |

### 8.2 Vue 快速入门三步骤

```html
<!-- 第1步：引入 Vue -->
<script src="js/vue.js"></script>

<!-- 第2步：定义受管理区域 -->
<div id="app">
    <input type="text" v-model="message">
    {{message}}
</div>

<!-- 第3步：创建 Vue 对象 -->
<script>
new Vue({
    el: "#app",          // 接管区域（CSS选择器）
    data: {
        message: "Hello Vue"
    },
    methods: {
        fn() { alert("方法被调用"); }
    },
    mounted() {           // 挂载完成钩子（页面加载后自动执行）
        // 通常用于页面初始化时发送 Ajax 请求
        console.log("Vue 挂载完成");
    }
})
</script>
```

### 8.3 Vue 常用指令速查（⭐ 重点）

| 指令 | 作用 | 简写 |
|------|------|------|
| `v-bind:属性="变量"` | 绑定 HTML 属性（单向：data → view） | `:属性="变量"` |
| `v-model="变量"` | 表单元素双向绑定（data ↔ view） | — |
| `v-on:事件="方法"` | 绑定事件，方法需在 methods 中定义 | `@事件="方法"` |
| `v-if="条件"` | 条件为 true 时**渲染**元素（不满足则 DOM 中不存在） | — |
| `v-else-if="条件"` | 配合 v-if 使用 | — |
| `v-else` | v-if/v-else-if 都不满足时渲染 | — |
| `v-show="条件"` | 条件为 true 时**显示**（不满足则 `display:none`，DOM 仍存在） | — |
| `v-for="(item,index) in 集合"` | 列表渲染，遍历数组或对象 | — |

### 8.4 v-if vs v-show（⭐ 常考）

| 对比项 | `v-if` | `v-show` |
|--------|--------|----------|
| 原理 | 条件为 false → **DOM 元素不存在** | 条件为 false → 元素仍存在，仅加 `display:none` |
| 切换开销 | 高（销毁/重建 DOM） | 低（只改 CSS） |
| 适用场景 | 条件**很少改变**时 | 需要**频繁切换**显示/隐藏时 |

### 8.5 指令代码示例

```html
<div id="app">
    <!-- v-bind：绑定 href 属性（两种等价写法） -->
    <a v-bind:href="url">链接1</a>
    <a :href="url">链接2</a>

    <!-- v-model：双向绑定输入框（改输入框 → url 同步变化）-->
    <input type="text" v-model="url">

    <!-- v-on：绑定点击事件 -->
    <button v-on:click="handle()">按钮1</button>
    <button @click="handle()">按钮2</button>

    <!-- v-if / v-else-if / v-else：条件渲染 -->
    <span v-if="age <= 35">年轻人</span>
    <span v-else-if="age > 35 && age < 60">中年人</span>
    <span v-else>老年人</span>

    <!-- v-for：遍历数组，含索引 -->
    <tr v-for="(user, index) in users">
        <td>{{ index + 1 }}</td>
        <td>{{ user.name }}</td>
        <td>
            <span v-if="user.gender == 1">男</span>
            <span v-if="user.gender == 2">女</span>
        </td>
        <td>
            <span v-if="user.score >= 85">优秀</span>
            <span v-else-if="user.score >= 60">及格</span>
            <span style="color:red" v-else>不及格</span>
        </td>
    </tr>
</div>
```

### 8.6 Vue 生命周期（八个阶段）

| 钩子函数 | 阶段 | 说明 |
|----------|------|------|
| `beforeCreate` | 创建前 | — |
| `created` | 创建后 | data/methods 已初始化，但 DOM 未挂载 |
| `beforeMount` | 挂载前 | — |
| **`mounted`** | **挂载完成** | **⭐ HTML 页面渲染成功，常用于发送 Ajax 初始化数据** |
| `beforeUpdate` | 更新前 | — |
| `updated` | 更新后 | — |
| `beforeDestroy` | 销毁前 | — |
| `destroyed` | 销毁后 | — |

---

## 九、综合速查

### JS vs Java 关键差异

| 对比项 | Java | JavaScript |
|--------|------|-----------|
| 类型系统 | 强类型 | **弱类型**（变量可存任意类型） |
| 变量声明 | `int a` / `String s` | `let` / `const` / `var` |
| 等值比较 | `==`（值比较） | `===`（值+类型）/ `==`（仅值） |
| 函数重载 | ✅ 支持 | ❌ 不支持（同名覆盖） |
| 数组越界 | 报异常 | 返回 `undefined` |

### DOM 操作常用模式

```js
// 获取 → 修改内容
document.getElementById("id").innerHTML = "新内容";

// 获取 → 修改样式
document.getElementById("id").style.color = "red";

// 获取 → 修改属性
document.getElementById("img").src = "on.gif";
document.getElementById("cb").checked = true;
```

### Vue 指令简写速记

```
v-bind:href  →  :href
v-on:click   →  @click
{{变量}}        插值表达式
```

{% endraw %}
