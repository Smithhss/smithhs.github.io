---
title: Vue指令-Ajax-Axios-前端工程化-ElementUI-路由重点总结
date: 2026-04-16 17:39:17
tags:
  - Java
  - JavaWeb
  - 后端
categories: 编程开发
cover: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80'
---


{% raw %}
# Vue 指令 · Ajax · Axios · 前端工程化 · Element UI · 路由 · 重点总结

## 一、Vue 指令

| 模块        | 核心内容  | 说明                           | 常用写法                     |
| ----------- | --------- | ------------------------------ | ---------------------------- |
| MVVM        | Model     | 数据模型，通常是后端返回的数据 | `data:{}`                    |
| MVVM        | View      | 页面视图，负责展示数据         | HTML + CSS                   |
| MVVM        | ViewModel | 连接数据和视图的桥梁           | Vue 实例                     |
| Vue实例属性 | el        | 指定 Vue 接管的区域            | `el:"#app"`                  |
| Vue实例属性 | data      | 定义数据模型                   | `data:{message:"Hello Vue"}` |
| Vue实例属性 | methods   | 定义函数/事件方法              | `methods:{}`                 |

**核心理解：**
Vue 的主要作用是减少手写 DOM 操作，让数据和页面自动联动。

### 1.1 指令总览

| 指令 | 作用 | 简写 |
|------|------|------|
| `v-bind:属性` | 为 HTML 标签**绑定属性值**（单向：data → view） | `:属性` |
| `v-model` | 在**表单元素**上创建**双向数据绑定**（data ↔ view） | — |
| `v-on:事件` | 为 HTML 标签**绑定事件**，函数须在 `methods` 中定义，事件名不带 `on` | `@事件` |
| `v-if` | **条件渲染**，true 时渲染，false 时 **DOM 元素不存在** | — |
| `v-else-if` | 配合 v-if 多条件判断 | — |
| `v-else` | v-if/v-else-if 都不满足时渲染 | — |
| `v-show` | **条件显示**，false 时 DOM 存在但 `display:none` | — |
| `v-for` | **列表渲染**，遍历数组或对象 | — |

| 步骤 | 内容                      | 示例                                |
| ---- | ------------------------- | ----------------------------------- |
| 1    | 引入 `vue.js`             | `<script src="js/vue.js"></script>` |
| 2    | 准备 Vue 接管区域         | `<div id="app"></div>`              |
| 3    | 创建 Vue 对象             | `new Vue({...})`                    |
| 4    | 在页面中使用插值表达式    | `{{message}}`                       |
| 5    | 使用 `v-model` 绑定输入框 | `<input v-model="message">`         |

**重要代码：**

```html
<body>
    <!-- 1: 引入 vue.js 文件
    2: 准备一个 div 标签,与 vue对象实现双向绑定
    3: 在js中创建 vue对象,定义属性,与div绑定 -->

    <div id="d1">
        请在输入框中输入内容:<input type="text" v-model="msg">
        <br>
        您输入的内容是:<span style="color: red;font-size:20px">{{msg}}</span>
    </div>

    <script>
        new Vue({
            el:"#d1",
            data:{
                msg:'撒撒水啦'
            }
        });
    </script>
</body>
```

### 1.2 v-bind vs v-model（⭐ 常考）

| 对比项 | `v-bind`（单向绑定） | `v-model`（双向绑定） |
|--------|---------------------|----------------------|
| 数据流向 | data → view（单向） | data ↔ view（双向） |
| 使用场景 | href、src、class 等普通属性 | **表单元素**（input、select、textarea） |
| 写法 | `v-bind:href="url"` 或 `:href="url"` | `v-model="变量名"` |
| 核心用途 | 动态绑定标签属性 | **获取表单输入值后提交给服务器** |

**双向绑定的作用：可以获取表单的数据的值，然后提交给服务器**

```html
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
</body><input v-model="url">
<a :href="url">点击试试</a>
<img :src="img">
```

### 1.3 v-on 事件绑定

> 函数必须定义在 Vue 对象的 `methods` 中；方法内部通过 **`this.属性名`** 访问 data 中的数据。

| 写法         | 说明         | 示例                        |
| ------------ | ------------ | --------------------------- |
| `v-on:click` | 点击事件绑定 | `<button v-on:click="myc">` |
| `@click`     | `v-on` 简写  | `<button @click="myc">`     |
| `@mouseover` | 鼠标移入事件 | `<button @mouseover="mym">` |

```html
<div id="d1">
    <button v-on:click="myc">按钮1（完整写法）</button>
    <button @mouseover="mym">按钮2（简写）</button>
</div>
<script>
new Vue({
    el: "#d1",
    data: { msg: '自定义变量值' },
    methods: {
        myc() { alert('点我干啥'); },
        mym() { alert('msg=' + this.msg); }  // this 访问 data
    }
});
</script>
```

### 1.4 v-if vs v-show（⭐ 常考）

| 对比项 | `v-if` | `v-show` |
|--------|--------|----------|
| 原理 | 条件为 false → **DOM 元素不存在**（销毁/重建） | 条件为 false → 仅加 `display:none`，**DOM 仍存在** |
| 切换性能 | 较高开销（重建 DOM） | 低开销（只改 CSS），**频繁切换推荐用 v-show** |
| 初始加载 | 条件为 false 时不渲染，**初始开销低** | 始终渲染，**初始开销略高** |
| 使用场景 | 条件**很少改变**时 | **频繁切换**显示/隐藏时 |

```html
<!-- v-if：不满足条件的标签从 DOM 中删除 -->
<span v-if="age < 18">未成年人</span>
<span v-else-if="age <= 40">青年人</span>
<span v-else-if="age < 60">壮年人</span>
<span v-else>老年人</span>

<button @click="myshow">显示图片</button>
<button @click="myyc">隐藏图片</button>
<img src="../04_img/1.jpg" v-show="flag">
<img src="../04_img/2.jpg" v-if="flag">

<!-- v-show：不满足条件的标签仍在 DOM，只是隐藏 -->
<img src="1.jpg" v-show="flag">
<img src="2.jpg" v-if="flag">
```

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

### 1.5 v-for 列表渲染

| 写法                           | 说明               |
| ------------------------------ | ------------------ |
| `v-for="item in list"`         | 遍历数组           |
| `v-for="(item,index) in list"` | 遍历数组并拿到索引 |

```html
<!-- 不带索引 -->
<div v-for="addr in addrs">{{ addr }}</div>

<!-- 带索引（索引从 0 开始，序号显示需要 +1）-->
<div v-for="(addr, index) in addrs">{{ index + 1 }} : {{ addr }}</div>

<!-- 遍历对象数组（渲染表格常用）-->
<tr v-for="(stu, i) in stus">
    <td>{{ i + 1 }}</td>
    <td>{{ stu.name }}</td>
    <td>{{ stu.sex == 1 ? '男' : '女' }}</td>
    <td>
        <span v-if="stu.score < 60" style="color:red">不及格</span>
        <span v-else-if="stu.score < 80" style="color:green">良好</span>
        <span v-else>优秀</span>
    </td>
</tr>
```

**学生表格案例总表**

| 字段 | 展示内容     | 处理方式                     |
| ---- | ------------ | ---------------------------- |
| 序号 | 从 1 开始    | `i+1`                        |
| 姓名 | `stu.name`   | 直接显示                     |
| 年龄 | `stu.age`    | 直接显示                     |
| 性别 | 男/女        | `stu.sex == 1 ? '男' : '女'` |
| 分数 | `stu.score`  | 直接显示                     |
| 等级 | 根据分数判断 | `v-if` 分级                  |

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
            },
            methods: {
            },
        });
    </script>
</body>
</html>
```

## 二、Vue 生命周期

### 2.1 八个阶段

| 钩子函数 | 阶段 | 说明 |
|----------|------|------|
| `beforeCreate` | 创建前 | Vue 实例刚初始化，data/methods 未初始化 |
| `created` | 创建后 | data/methods 已就绪，**DOM 尚未渲染** |
| `beforeMount` | 挂载前 | 模板已编译，尚未插入页面 |
| **`mounted`** | **挂载完成** | **⭐ HTML 页面渲染成功，最常用，用于发 Ajax 初始化数据** |
| `beforeUpdate` | 更新前 | data 变化，DOM 还未重渲染 |
| `updated` | 更新后 | DOM 已更新 |
| `beforeDestroy` | 销毁前 | 实例仍可用 |
| `destroyed` | 销毁后 | 所有绑定和事件监听器已解除 |

**最重要的是 `mounted`。**

```javascript
mounted () {
    alert("vue挂载完成,发送请求到服务端")
}
```

它适合做页面加载后的初始化请求。

```js
new Vue({
    el: "#app",
    data: { list: [] },
    methods: { loadData() { /* ... */ } },
    mounted() {
        // 页面加载完成后自动执行，通常在这里发 Ajax 请求后台数据
        this.loadData();
    }
})
```

## 三、Ajax 与 Axios

### 3.1 Ajax 概述

| 项目 | 说明 |
|------|------|
| **全称** | Asynchronous JavaScript And XML（异步 JS 和 XML） |
| **作用** | 无需重新加载整个网页，通过 JS 与服务器进行**异步**数据交互，实现**局部页面更新** |
| **同步 vs 异步** | 同步：等响应才继续；异步：发请求后**继续执行**，响应回来再用回调处理 |
| **原生 Ajax 缺点** | 代码繁琐（需手动创建 XMLHttpRequest），开发中直接使用 Axios 封装版 |

**原生 Ajax 示例：**

```javascript
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
```

### 3.2 Axios 核心概念

| 项目 | 说明 |
|------|------|
| **定义** | 对原生 Ajax（XMLHttpRequest）封装后的轻量框架，简化异步请求和响应处理 |
| **引入方式** | `<script src="js/axios-0.18.0.js"></script>` 或 `npm install axios` |
| **特点** | 基于 Promise，支持链式调用 `.then()` 和 `.catch()` |

### 3.3 通用写法 vs 简写格式

**通用写法：**
```js
axios({
    method: "get",          // 请求方式：get / post / put / delete
    url: "http://localhost:10010/emp/list",
    // params: { id: 1 }    // GET 参数（拼到 URL 后面）
    // data: "id=1"         // POST 参数（放到请求体）
}).then(resp => {
    // resp.data：后端返回的实际数据（自动解析 JSON）
    // resp.status：HTTP 状态码（如 200）
    // resp.headers：响应头
    console.log(resp.data);
}).catch(e => {
    console.error("出异常了:", e);
});
```

**简写格式（推荐）：**

| 请求类型 | 简写语法 | 参数说明 |
|----------|---------|---------|
| GET | `axios.get(url).then(resp => {})` | 参数拼 URL：`axios.get(url, {params:{id:1}})` |
| POST | `axios.post(url, data).then(resp => {})` | 数据放请求体，`data` 是字符串或对象 |

```js
// GET 简写
axios.get('http://localhost:10010/emp/list')
     .then(resp => alert(JSON.stringify(resp.data)));

// POST 简写
axios.post('http://localhost:10010/emp/deleteById', 'id=456')
     .then(resp => alert(JSON.stringify(resp.data)));
```

### 3.4 Axios + Vue 综合案例（⭐ 标准用法）

**响应对象重点：**

| 属性           | 含义             |
| -------------- | ---------------- |
| `resp.data`    | 响应数据，最常用 |
| `resp.status`  | 状态码           |
| `resp.headers` | 响应头           |
| `resp.config`  | 请求配置         |

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
                <td>{{e.gender == 1?'男':'女' }}</td>
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
                arr:[],  // 初始为空数组
            },
            mounted() {
                // 页面加载完成后自动发请求，把响应数据赋值给 arr
                axios.get('http://localhost:10010/emp/list')
                .then(r=>this.arr=r.data.data) // 箭头函数中 this 指向 Vue 对象
            },
        });
    </script>
</body>
</html>
```

> ⚠️ **`this` 指向问题**：`.then()` 回调中必须用**箭头函数** `=>` 才能使 `this` 正确指向 Vue 实例；若用普通函数 `function(){}`，`this` 会丢失。

## 四、前后端分离开发

### 4.1 对比

| 模式 | 说明 | 缺点 |
|------|------|------|
| **前后端混合** | 前后端代码在同一项目，页面由后端渲染 | 沟通成本高、维护困难、分工不明确 |
| **前后端分离（主流）** | 前后端独立开发，通过 API 接口交互 | 需要约定接口规范 |

**前后端分离开发流程：**
```
需求分析 → 定义接口（API 文档）→ 前后端并行开发 → 联调测试 → 上线部署
```

## 五、前端工程化（Vue CLI）

### 5.1 环境搭建

| 步骤 | 命令 | 说明 |
|------|------|------|
| 安装 Node.js | 官网下载 | 验证：`node -v` |
| 安装 Vue CLI | `npm install -g @vue/cli` | 全局安装 |
| 验证安装 | `vue --version` | 显示版本即成功 |
| 创建项目（命令行） | `vue create 项目名` | 在目标目录下执行 |
| 创建项目（图形化） | `vue ui` | 打开网页端创建界面 |
| 运行项目 | `npm run serve` | 进入项目目录后执行 |

### 5.2 Vue 项目目录结构

| 目录/文件 | 说明 |
|-----------|------|
| `node_modules/` | 依赖包（不提交 Git） |
| `public/` | 静态资源（不经 webpack 处理） |
| `src/assets/` | 图片、字体等资源 |
| `src/components/` | **可复用公共组件** |
| `src/views/` | **页面级组件**（配合路由使用） |
| `src/router/index.js` | **路由配置文件** |
| `src/App.vue` | **根组件**（应用外壳，含导航栏和 `<router-view>`） |
| `src/main.js` | **入口文件**，创建 Vue 实例 |
| `vue.config.js` | Vue CLI 配置（可修改端口等） |
| `package.json` | 项目描述和依赖声明 |

### 5.3 .vue 单文件组件结构

| 部分 | 标签 | 说明 |
|------|------|------|
| 模板 | `<template>` | HTML 结构，**只能有一个根元素** |
| 逻辑 | `<script>` | JS 逻辑（data、methods、mounted 等） |
| 样式 | `<style scoped>` | CSS 样式，`scoped` 表示**仅当前组件生效**，不污染其他组件 |

```vue
<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'MyHelloView',
    data() {                  // ⚠️ 组件中 data 必须是函数，不能是对象
        return {
            msg: '嘿嘿嘿'
        }
    }
}
</script>

<style scoped>
h1 { font-size: 50px; color: red; }   /* scoped：只作用于当前组件 */
</style>
```

> ⚠️ **Vue 组件中 `data` 必须是返回对象的函数**，不能直接写对象，否则多个组件实例会共享数据。

## 六、Vue Router（路由）

### 6.1 核心概念

| 项目 | 说明 |
|------|------|
| **作用** | 控制 URL → 组件的映射，实现单页应用（SPA）中的页面切换（**不刷新整个页面**） |
| **核心文件** | `src/router/index.js` |
| **两种模式** | `history`（URL 无 `#`，美观）；`hash`（URL 含 `#`，如 `http://localhost/#/about`） |

### 6.2 路由三要素

| 要素 | 说明 |
|------|------|
| **路由规则表** | `router/index.js` 中定义 `path → component` 映射 |
| `<router-link to="路径">` | 路由导航链接（代替 `<a>` 标签，点击不刷新页面） |
| `<router-view>` | 路由出口（"坑位"），当前匹配的组件在此渲染 |

### 6.3 路由完整代码

```js
// src/router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'   // 直接导入（首页立即加载）

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: HomeView },
    // 懒加载：访问 /about 时才加载 AboutView.vue（优化首页加载速度）
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    // 自定义路由
    { path: '/abcd', component: () => import('../views/MyHelloView.vue') }
]

const router = new VueRouter({
    mode: 'history',              // history 模式（无 # 号）
    base: process.env.BASE_URL,
    routes
})

export default router
```

```vue
<!-- src/App.vue：根组件，包含导航和内容展示区 -->
<template>
    <div id="app">
        <!-- 导航栏（点击切换页面，不刷新）-->
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/abcd">自定义页面</router-link>
        </nav>
        <!-- 路由出口：当前页面组件渲染在这里 -->
        <router-view/>
    </div>
</template>
```

### 6.4 路由工作流程

```
用户访问 http://localhost:8080/abcd
    ↓
router/index.js 匹配到 path: '/abcd'
    ↓
加载对应组件 MyHelloView.vue
    ↓
App.vue 中的 <router-view> 渲染该组件内容
    ↓
顶部导航栏（<nav>）保持不变
```

---

## 七、Element UI

### 7.1 核心概念

| 项目 | 说明 |
|------|------|
| **定义** | 基于 Vue 2.0 的桌面端 UI 组件库 |
| **作用** | 提供丰富的现成组件（表格、分页、表单、弹框等），快速搭建后台管理页面 |
| **官网** | `https://element.eleme.cn` |

### 7.2 安装与引入

```bash
# npm 安装（Vue CLI 项目）
npm install element-ui@2.15.3
npm install axios
```

```js
// src/main.js：全量引入 Element UI
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(ElementUI)
Vue.prototype.$axios = axios    // 挂载到 Vue 原型，组件中用 this.$axios 调用

new Vue({ router, render: h => h(App) }).$mount('#app')
```

### 7.3 常用组件速查

| 组件 | 标签 | 关键属性/事件 |
|------|------|-------------|
| **按钮** | `<el-button>` | `type="primary/success/danger"` |
| **表格** | `<el-table>` + `<el-table-column>` | `:data="数组"` 绑定数据；`prop` 指定字段 |
| **分页** | `<el-pagination>` | `:total` 总条数；`@current-change` 页码变化事件 |
| **表单** | `<el-form>` + `<el-form-item>` | `:model` 绑定数据；`:rules` 校验规则；`ref` 获取实例 |
| **输入框** | `<el-input>` | `v-model` 双向绑定 |
| **对话框** | `<el-dialog>` | `:visible.sync="变量"` 控制显隐 |
| **下拉选择** | `<el-select>` + `<el-option>` | `v-model` 绑定选中值；`:value` 和 `label` |
| **消息提示** | JS 调用 | `this.$message.success/error/warning('文字')` |
| **确认对话框** | JS 调用 | `this.$confirm('内容').then(() => { 确认逻辑 })` |

### 7.4 表格 + 分页完整示例

```vue
<template>
    <div>
        <!-- 数据表格 -->
        <el-table :data="tableData" border stripe>
            <el-table-column label="编号"   prop="id"       width="80"></el-table-column>
            <el-table-column label="姓名"   prop="name"></el-table-column>
            <el-table-column label="性别">
                <template slot-scope="scope">
                    {{ scope.row.gender == 1 ? '男' : '女' }}
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="edit(scope.row)">编辑</el-button>
                    <el-button type="danger"  size="mini" @click="del(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination
            layout="total, prev, pager, next"
            :total="total"
            :page-size="pageSize"
            @current-change="handlePageChange">
        </el-pagination>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            tableData: [],
            total: 0,
            pageSize: 10,
            currentPage: 1
        }
    },
    methods: {
        loadData() {
            axios.get('http://localhost:10010/emp/list', {
                params: { page: this.currentPage, pageSize: this.pageSize }
            }).then(res => {
                this.tableData = res.data.data;
                this.total = res.data.total;
            });
        },
        handlePageChange(page) {
            this.currentPage = page;
            this.loadData();
        },
        del(id) {
            this.$confirm('确认删除该记录吗？', '提示', { type: 'warning' })
                .then(() => {
                    axios.post('/emp/delete', { id }).then(() => {
                        this.$message.success('删除成功');
                        this.loadData();
                    });
                });
        }
    },
    mounted() {
        this.loadData();   // 页面加载完成后自动拉取数据
    }
}
</script>
```

## 八、打包与部署

### 8.1 打包

| 步骤 | 命令 | 产物 |
|------|------|------|
| 打包 | `npm run build` | `dist/` 目录（纯 html+css+js，可直接部署） |

### 8.2 Nginx 部署

| 步骤 | 操作 |
|------|------|
| ① 解压 Nginx | 解压到**不含中文**的路径 |
| ② 复制产物 | 将 `dist/` 内所有文件复制到 Nginx 的 `html/` 目录 |
| ③ 启动 Nginx | 双击 `nginx.exe`，在任务管理器确认进程存在 |
| ④ 访问 | 默认端口 80：`http://localhost`；修改端口后对应访问 |

```nginx
# nginx.conf 修改端口
server {
    listen 90;   # 改为 90 端口
    ...
}
```

## 九、综合速查

### Vue 对象核心属性一览

| 属性 | 说明 |
|------|------|
| `el` | CSS 选择器，指定 Vue 接管的 DOM 区域（如 `"#app"`） |
| `data` | 数据模型；**组件中必须是返回对象的函数** `data(){ return {} }` |
| `methods` | 定义方法；方法内用 `this.属性名` 访问 data |
| `mounted` | 生命周期钩子，挂载完成后执行，**常用于发送 Ajax 初始化数据** |

### Axios 响应对象 resp 常用属性

| 属性 | 说明 |
|------|------|
| `resp.data` | **服务器返回的实际业务数据**（最常用，已自动解析 JSON） |
| `resp.status` | HTTP 状态码（如 200） |
| `resp.statusText` | 状态文本（如 "OK"） |
| `resp.headers` | 响应头信息 |

### 前端完整开发流程

```
① vue create 创建项目
② npm install element-ui axios 安装依赖
③ main.js 注册 Element UI
④ views/ 下创建页面 .vue 组件
⑤ router/index.js 配置路由（path → component）
⑥ App.vue 中配置 <router-link> 导航 + <router-view> 展示区
⑦ 组件中 mounted() 发 axios 请求，赋值给 data
⑧ 使用 Element UI 组件（el-table/el-pagination 等）展示数据
⑨ npm run build 打包
⑩ 将 dist/ 部署到 nginx/html/，启动 nginx
```

{% endraw %}
