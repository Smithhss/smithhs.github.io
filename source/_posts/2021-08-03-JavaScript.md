---
title: JavaScript
date: 2021-08-03 10:21:24
tags: JavaScript
categories: Front
cover: 'https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/JavaScript.png'
---

 

#### 目录

+   [第一章 JavaScript简介](#_JavaScript_7)
+   +   [1.1、JavaScript的起源](#11JavaScript_9)
    +   [1.2、JavaScript的组成](#12JavaScript_27)
    +   [1.3、JavaScript的特点](#13JavaScript_39)
    +   [1.4、JavaScript的使用](#14JavaScript_63)
    +   +   [1.4.1、标签引用](#141_65)
        +   [1.4.2、文件引用](#142_75)
    +   [1.5、JavaScript的输出](#15JavaScript_91)
    +   +   [1.5.1、页面输出](#151_93)
        +   [1.5.2、控制台输出](#152_103)
        +   [1.5.3、弹出窗口输出](#153_120)
    +   [1.6、JavaScript的注释](#16JavaScript_130)
    +   +   [1.6.1、单行注释](#161_139)
        +   [1.6.2、多行注释](#162_148)
+   [第二章 JavaScript基础语法](#_JavaScript_159)
+   +   [2.1、标识符](#21_161)
    +   [2.2、字面量和变量](#22_196)
    +   +   [2.2.1、字面量](#221_198)
        +   [2.2.2、变量](#222_202)
    +   [2.3、数据类型](#23_224)
    +   +   [2.3.1、类型分类](#231_226)
        +   [2.3.2、typeof运算符](#232typeof_242)
        +   [2.3.3、String](#233String_266)
        +   [2.3.4、Number](#234Number_276)
        +   [2.3.5、Boolean](#235Boolean_300)
        +   [2.3.6、Undefined](#236Undefined_306)
        +   [2.3.7、Null](#237Null_314)
    +   [2.4、强制类型转换](#24_322)
    +   +   [2.4.1、转换为String类型](#241String_326)
        +   [2.4.2、转换为Number类型](#242Number_367)
        +   [2.4.3、转换为Boolean类型](#243Boolean_405)
    +   [2.5、运算符](#25_417)
    +   +   [2.5.1、算术运算符](#251_423)
        +   [2.5.2、关系运算符](#252_439)
        +   [2.5.3、赋值运算符](#253_452)
        +   [2.5.4、逻辑运算符](#254_467)
        +   [2.5.5、比较运算符](#255_493)
        +   [2.5.6、条件运算符](#256_506)
        +   [2.5.7、逗号运算符](#257_516)
    +   [2.6、运算符优先级](#26_524)
    +   [2.7、代码块](#27_530)
    +   +   [2.7.1、语句](#271_532)
        +   [2.7.2、代码块](#272_538)
    +   [2.8、条件语句](#28_554)
    +   +   [2.8.1、if...else](#281ifelse_561)
        +   [2.8.2、switch...case](#282switchcase_619)
    +   [2.9、循环语句](#29_699)
    +   +   [2.9.1、while](#291while_707)
        +   [2.9.2、do...while](#292dowhile_729)
        +   [2.9.3、for](#293for_751)
        +   [2.9.4、跳转控制](#294_771)
    +   [2.10、对象基础](#210_789)
    +   +   [2.10.1、概述](#2101_791)
        +   [2.10.2、创建对象](#2102_795)
        +   [2.10.3、访问属性](#2103_818)
        +   [2.10.4、删除属性](#2104_834)
        +   [2.10.5、遍历对象](#2105_854)
        +   [2.10.6、数据类型梳理](#2106_880)
        +   +   [2.10.6.1、基本数据类型](#21061_882)
            +   [2.10.6.2、引用数据类型](#21062_892)
        +   [2.10.7、栈和堆梳理](#2107_902)
    +   [2.11、函数](#211_925)
    +   +   [2.11.1、概述](#2111_927)
        +   [2.11.2、函数创建](#2112_935)
        +   [2.11.3、函数调用](#2113_987)
        +   [2.11.4、函数参数](#2114_1014)
        +   [2.11.5、函数返回值](#2115_1020)
        +   [2.11.6、嵌套函数](#2116_1039)
        +   [2.11.7、匿名函数](#2117_1057)
        +   [2.11.8、立即执行函数](#2118_1071)
        +   [2.11.9、对象中的函数](#2119_1083)
        +   [2.11.10、this对象](#21110this_1105)
    +   [2.12、对象进阶](#212_1133)
    +   +   [2.12.1、用工厂方法创建对象](#2121_1135)
        +   [2.12.2、用构造函数创建对象](#2122_1249)
        +   [2.12.3、原型](#2123_1335)
        +   [2.12.4、原型链](#2124_1399)
        +   [2.12.5、toString方法](#2125toString_1409)
        +   [2.12.6、hasOwnProperty方法](#2126hasOwnProperty_1478)
        +   [2.12.7、对象继承](#2127_1550)
        +   +   [2.12.7.1、原型链继承](#21271_1567)
            +   [2.12.7.2、借用构造函数继承](#21272_1624)
            +   [2.12.7.3、组合继承](#21273_1675)
        +   [2.12.8、垃圾回收](#2128_1722)
    +   [2.13、作用域](#213_1749)
    +   +   [2.13.1、声明提前](#2131_1756)
        +   [2.13.2、作用域](#2132_1761)
        +   +   [2.13.2.1、全局作用域](#21321_1763)
            +   [2.13.2.2、函数作用域](#21322_1773)
        +   [2.13.3、作用域链](#2133_1781)
+   [第三章 JavaScript常用对象](#_JavaScript_1791)
+   +   [3.1、数组对象](#31_1793)
    +   +   [3.1.1、概述](#311_1795)
        +   [3.1.2、创建数组](#312_1803)
        +   +   [3.1.2.1、使用对象创建](#3121_1805)
            +   [3.1.2.2、使用字面量创建](#3122_1837)
        +   [3.1.3、遍历数组](#313_1851)
        +   [3.1.4、数组属性](#314_1859)
        +   [3.1.5、数组方法](#315_1879)
    +   [3.2、函数对象](#32_2058)
    +   +   [3.2.1、call()和apply()](#321callapply_2060)
        +   [3.2.2、this指向](#322this_2114)
        +   [3.2.3、arguments参数](#323arguments_2121)
    +   [3.3、Date对象](#33Date_2158)
    +   [3.4、Math对象](#34Math_2181)
    +   [3.5、String对象](#35String_2220)
    +   +   [3.5.1、概述](#351_2222)
        +   [3.5.2、字符串属性](#352_2232)
        +   [3.5.3、字符串方法](#353_2252)
    +   [3.6、RegExp对象](#36RegExp_2386)
    +   +   [3.6.1、概述](#361_2388)
        +   [3.6.2、创建正则对象](#362_2394)
        +   +   [3.6.2.1、使用对象创建](#3621_2396)
            +   [3.6.2.2、使用字面量创建](#3622_2422)
        +   [3.6.3、正则进阶](#363_2450)
        +   [3.6.4、正则方法](#364_2518)
        +   [3.6.5、正则量词](#365_2567)
        +   [3.6.6、正则高阶](#366_2606)
        +   [3.6.7、正则案例](#367_2682)
        +   +   [3.6.7.1、检查手机号](#3671_2684)
            +   [3.6.7.2、检查邮箱号](#3672_2694)
+   [第四章 JavaScript DOM](#_JavaScript_DOM_2704)
+   +   [4.1、DOM概述](#41DOM_2706)
    +   [4.2、DOM文档节点](#42DOM_2726)
    +   +   [4.2.1、节点概述](#421_2728)
        +   [4.2.2、节点属性](#422_2751)
        +   [4.2.3、文档节点](#423_2755)
        +   [4.2.4、元素节点](#424_2763)
        +   [4.2.5、属性节点](#425_2771)
        +   [4.2.6、文本节点](#426_2779)
    +   [4.3、DOM文档操作](#43DOM_2785)
    +   +   [4.3.1、查找 HTML 元素](#431_HTML__2791)
        +   +   [4.3.1.1、方法介绍](#4311_2793)
            +   [4.3.1.2、方法演示](#4312_2803)
        +   [4.3.2、获取 HTML 的值](#432_HTML__2925)
        +   +   [4.3.2.1、方法介绍](#4321_2927)
            +   [4.3.2.2、方法演示](#4322_2937)
        +   [4.3.3、改变 HTML 的值](#433_HTML__3170)
        +   +   [4.3.3.1、方法介绍](#4331_3172)
            +   [4.3.3.2、方法演示](#4332_3182)
        +   [4.3.4、修改 HTML 元素](#434_HTML__3421)
        +   +   [4.3.4.1、方法介绍](#4341_3423)
            +   [4.3.4.2、方法演示](#4342_3435)
        +   [4.3.5、查找 HTML 父子](#435_HTML__3731)
        +   +   [4.3.5.1、方法介绍](#4351_3733)
            +   [4.3.5.2、方法演示](#4352_3750)
    +   [4.4、DOM文档事件](#44DOM_3959)
    +   +   [4.4.1、事件概述](#441_3961)
        +   [4.4.2、窗口事件](#442_3965)
        +   [4.4.3、表单事件](#443_4069)
        +   [4.4.4、键盘事件](#444_4264)
        +   [4.4.5、鼠标事件](#445_4373)
        +   [4.4.6、媒体事件](#446_4506)
        +   [4.4.7、其它事件](#447_4536)
        +   [4.4.8、事件冒泡](#448_4543)
        +   [4.4.9、事件委派](#449_4715)
        +   [4.4.10、事件绑定](#4410_4754)
        +   [4.4.11、事件传播](#4411_4854)
+   [第五章 JavaScript BOM](#_JavaScript_BOM_4872)
+   +   [5.1、BOM概述](#51BOM_4874)
    +   [5.2、Window对象](#52Window_4892)
    +   +   [5.2.1、弹出框](#521_4894)
        +   +   [5.2.1.1、警告框](#5211_4898)
            +   [5.2.1.2、确认框](#5212_4916)
            +   [5.2.1.3、提示框](#5213_4943)
        +   [5.2.2、定时事件](#522_4968)
        +   +   [5.2.2.1、延时器](#5221_4986)
            +   [5.2.2.2、定时器](#5222_5029)
        +   [5.2.3、常用窗口属性](#523_5223)
        +   [5.2.4、其它窗口方法](#524_5272)
    +   [5.3、Navigator对象](#53Navigator_5419)
    +   [5.4、Location对象](#54Location_5473)
    +   +   [5.4.1、常用属性](#541_5477)
        +   [5.4.2、常用方法](#542_5505)
    +   [5.5、History对象](#55History_5525)
    +   +   [5.5.1、常用属性](#551_5529)
        +   [5.5.2、常用方法](#552_5538)
    +   [5.6、Screen对象](#56Screen_5563)
    +   +   [5.6.1、Screen对象描述](#561Screen_5569)
        +   [5.6.2、Screen对象属性](#562Screen_5573)
+   [第六章 JavaScript高级语法](#_JavaScript_5591)
+   +   [6.1、Exception](#61Exception_5593)
    +   +   [6.1.1、异常概述](#611_5595)
        +   [6.1.2、异常捕捉](#612_5627)
        +   [6.1.3、异常演示](#613_5666)
        +   +   [6.1.3.1、Eval 错误](#6131Eval__5668)
            +   [6.1.3.2、范围错误](#6132_5684)
            +   [6.1.3.3、引用错误](#6133_5701)
            +   [6.1.3.4、语法错误](#6134_5718)
            +   [6.1.3.5、类型错误](#6135_5734)
            +   [6.1.3.6、URI 错误](#6136URI__5751)
        +   [6.1.4、异常抛出](#614_5767)
        +   +   [6.1.4.1、主动抛出内置异常](#6141_5780)
            +   [6.1.4.2、主动抛出自定义异常](#6142_5798)
    +   [6.2、JSON](#62JSON_5821)
    +   +   [6.2.1、JSON概述](#621JSON_5823)
        +   [6.2.2、JSON语法](#622JSON_5829)
        +   [6.2.3、JSON数据类型](#623JSON_5857)
        +   +   [6.2.3.1、JSON 字符串](#6231JSON__5859)
            +   [6.2.3.2、JSON 数字](#6232JSON__5867)
            +   [6.2.3.3、JSON 对象](#6233JSON__5875)
            +   [6.2.3.4、JSON 数组](#6234JSON__5885)
            +   [6.2.3.5、JSON 布尔](#6235JSON__5895)
            +   [6.2.3.6、JSON null](#6236JSON_null_5903)
        +   [6.2.4、JSON字符串转JS对象](#624JSONJS_5911)
        +   [6.2.5、JS对象转JSON字符串](#625JSJSON_5927)
    +   [6.3、AJAX](#63AJAX_5943)
    +   +   [6.3.1、AJAX概述](#631AJAX_5945)
        +   [6.3.2、AJAX的XMLHttpRequest对象](#632AJAXXMLHttpRequest_5951)
        +   [6.3.3、AJAX的XMLHttpRequest对象方法](#633AJAXXMLHttpRequest_5985)
        +   [6.3.4、AJAX的XMLHttpRequest对象属性](#634AJAXXMLHttpRequest_5998)
        +   [6.3.5、AJAX的GET请求](#635AJAXGET_6009)
        +   [6.3.6、AJAX的POST请求](#636AJAXPOST_6048)
        +   [6.3.7、AJAX的请求整合](#637AJAX_6088)
    +   [6.4、Cookie](#64Cookie_6147)
    +   +   [6.4.1、Cookie概述](#641Cookie_6149)
        +   [6.4.2、Cookie创建](#642Cookie_6166)
        +   [6.4.3、Cookie读取](#643Cookie_6186)
        +   [6.4.4、Cookie修改](#644Cookie_6200)
        +   [6.4.5、Cookie删除](#645Cookie_6215)
        +   [6.4.6、Cookie值设置函数](#646Cookie_6230)
        +   [6.4.7、Cookie值获取函数](#647Cookie_6247)
    +   [6.5、WebStorage](#65WebStorage_6266)
    +   +   [6.5.1、WebStorage概述](#651WebStorage_6268)
        +   [6.5.2、WebStorage分类](#652WebStorage_6278)
        +   [6.5.3、localStorage方法](#653localStorage_6284)
        +   [6.5.4、sessionStorage方法](#654sessionStorage_6342)
    +   [6.6、Closure](#66Closure_6404)
    +   +   [6.6.1、闭包引入](#661_6406)
        +   [6.6.2、闭包概念](#662_6441)
        +   [6.6.3、闭包演示](#663_6451)
        +   [6.6.4、闭包生命周期](#664_6485)
        +   [6.6.5、闭包应用](#665_6513)
+   [第七章 JavaScript新特性](#_JavaScript_6591)
+   +   [7.1、ECMAScript6新特性](#71ECMAScript6_6593)
    +   +   [7.1.1、let 关键字](#711let__6595)
        +   [7.1.2、const 关键字](#712const__6649)
        +   [7.1.3、变量的解构赋值](#713_6673)
        +   [7.1.4、模板字符串](#714_6735)
        +   [7.1.5、简化对象写法](#715_6770)
        +   [7.1.6、箭头函数](#716_6797)
        +   [7.1.7、rest 参数](#717rest__6852)
        +   [7.1.8、spread 扩展运算符](#718spread__6874)
        +   [7.1.9、Symbol类型](#719Symbol_6913)
        +   +   [7.1.9.1、Symbol的使用](#7191Symbol_6915)
            +   [7.1.9.2、Symbol内置值](#7192Symbol_6960)
        +   [7.1.10、迭代器](#7110_7010)
        +   [7.1.11、生成器](#7111_7094)
        +   +   [7.1.11.1、生成器函数使用](#71111_7098)
            +   [7.1.11.2、生成器函数参数](#71112_7134)
            +   [7.1.11.3、生成器函数实例](#71113_7159)
        +   [7.1.12、Promise](#7112Promise_7238)
        +   +   [7.1.12.1、Promise基本使用](#71121Promise_7242)
            +   [7.1.12.2、Promise案例演示](#71122Promise_7268)
            +   [7.1.12.3、Promise-then方法](#71123Promisethen_7306)
            +   [7.1.12.4、Promise-catch方法](#71124Promisecatch_7329)
        +   [7.1.13、Set](#7113Set_7348)
        +   [7.1.14、Map](#7114Map_7378)
        +   [7.1.15、class 类](#7115class__7411)
        +   [7.1.16、数值扩展](#7116_7482)
        +   +   [7.1.16.1、二进制和八进制](#71161_7484)
            +   [7.1.16.2、Number.EPSILON](#71162NumberEPSILON_7501)
            +   [7.1.16.3、Number.isFinite](#71163NumberisFinite_7519)
            +   [7.1.16.4、Number.isNaN](#71164NumberisNaN_7532)
            +   [7.1.16.5、Number.parseInt](#71165NumberparseInt_7542)
            +   [7.1.16.6、Number.parseFloat](#71166NumberparseFloat_7552)
            +   [7.1.16.7、Number.isInteger](#71167NumberisInteger_7562)
            +   [7.1.16.8、Math.trunc](#71168Mathtrunc_7573)
            +   [7.1.16.9、Math.sign](#71169Mathsign_7583)
        +   [7.1.17、对象扩展](#7117_7595)
        +   +   [7.1.17.1、Object.is](#71171Objectis_7603)
            +   [7.1.17.2、Object.assign](#71172Objectassign_7615)
            +   [7.1.17.3、设置原型对象](#71173_7639)
        +   [7.1.18、模块化](#7118_7658)
        +   +   [7.1.18.1、模块化的好处](#71181_7662)
            +   [7.1.18.2、模块化的产品](#71182_7668)
            +   [7.1.18.3、模块化的语法](#71183_7676)
            +   [7.1.18.4、模块化的暴露](#71184_7683)
            +   [7.1.18.5、模块化的导入](#71185_7721)
            +   [7.1.18.6、解构赋值形式](#71186_7753)
        +   [7.1.19、浅拷贝和深拷贝](#7119_7792)
        +   +   [7.1.19.1、浅拷贝](#71191_7796)
            +   [7.1.19.2、深拷贝](#71192_7817)
            +   +   [7.1.19.2.1、自带的](#711921_7819)
                +   [7.1.19.2.2、通用版](#711922_7945)
    +   [7.2、ECMAScript7新特性](#72ECMAScript7_8002)
    +   +   [7.2.1、数组方法扩展](#721_8004)
        +   [7.2.2、幂运算](#722_8015)
    +   [7.3、ECMAScript8新特性](#73ECMAScript8_8026)
    +   +   [7.3.1、async 函数](#731async__8028)
        +   [7.3.2、await 表达式](#732await__8067)
        +   [7.3.3、对象方法拓展](#733_8146)
    +   [7.4、ECMAScript9新特性](#74ECMAScript9_8208)
    +   +   [7.4.1、对象拓展](#741_8210)
        +   +   [7.4.1.1、对象展开](#7411_8214)
            +   [7.4.1.2、对象合并](#7412_8234)
        +   [7.4.2、正则表达式拓展](#742_8259)
        +   +   [7.4.2.1、命名捕获分组](#7421_8261)
            +   [7.4.2.2、正向断言](#7422_8275)
            +   [7.4.2.3、反向断言](#7423_8290)
            +   [7.4.2.4、dotAll模式](#7424dotAll_8305)
    +   [7.5、ECMAScript10新特性](#75ECMAScript10_8338)
    +   +   [7.5.1、对象方法拓展](#751_8340)
        +   [7.5.2、字符串方法拓展](#752_8360)
        +   [7.5.3、数组方法拓展](#753_8370)
        +   [7.5.4、Symbol属性拓展](#754Symbol_8397)
    +   [7.6、ECMAScript11新特性](#76ECMAScript11_8409)
    +   +   [7.6.1、class 私有属性](#761class__8411)
        +   [7.6.2、Promise.allSettled](#762PromiseallSettled_8445)
        +   [7.6.3、字符串方法扩展](#763_8477)
        +   [7.6.4、可选链操作符](#764_8506)
        +   [7.6.5、动态 import](#765_import_8531)
        +   [7.6.6、BigInt类型](#766BigInt_8575)
        +   [7.6.7、globalThis](#767globalThis_8616)
+   [第八章 JavaScript项目百练](#_JavaScript_8626)
+   +   [8.1、项目百练介绍](#81_8628)
    +   [8.2、项目百练目录](#82_8632)

* * *

**配套资料，免费下载**  
链接：https://pan.baidu.com/s/152NnFqzAUx9br2qb49mstA  
提取码：ujyp  
复制这段内容后打开百度网盘手机App，操作更方便哦

## 第一章 JavaScript简介

### 1.1、JavaScript的起源

JavaScript诞生于1995年，它的出现主要是用于处理网页中的前端验证。所谓的前端验证，就是指检查用户输入的内容是否符合一定的规则。比如：用户名的长度，密码的长度，邮箱的格式等。但是，有的同学可能会有疑问，这些验证，后端不也可以进行验证吗？确实，后端程序的确可以进行这些验证，但你要清楚，在1995年那个年代，网速是非常慢的，向后端发送一个请求，浏览器很久才能得到响应，那这无疑是一种非常不好的用户体验。

为了解决前端验证的问题，当时的浏览器巨头NetScape（网景）公司就开发出一种脚本语言，起初命名为LiveScript，后来由于SUN公司的介入更名为了JavaScript。但是你要清楚，Java和JavaScript是没有什么关系的，只不过当时Java非常流行，为了蹭热度，才将LiveScript更名为JavaScript，它们的关系就像雷锋和雷峰塔的关系一样，没啥关系。

但是，浏览器开发商不止网景一家，还有一个大家都知道的公司，微软公司，它们的主打产品是IE（Internet Explorer）浏览器，当网景公司的Netscape Navigator浏览器推出JavaScript语言时，微软就急了啊，好家伙，人网景都推出了专门用于前端验证的语言，不仅大大减少了后端程序的压力，还提高了用户的体验。我微软这么大的公司不也得整一个，在1996年，微软公司在其最新的IE3浏览器中引入了自己对JavaScript的实现JScript。

于是在市面上存在两个版本的JavaScript，一个网景公司的JavaScript和微软的JScript，虽然当时浏览器的巨头是网景，但是网景的浏览器是收费的，虽然微软的IE浏览器在全球的市场份额远远不及网景，但是微软的拳头产品是Windows操作系统，每一个操作系统都自带一个IE浏览器并且免费，那么，未来的发展大家可能也想到了，网景让微软给干倒闭了，1998年11月，网景被美国在线（AOL）收购。

老大哥就是老大哥，为了抢先获得规则制定权，网景最先将JavaScript作为草案提交给欧洲计算机制造商协会，也就是ECMA组织，希望能将JavaScript做成行业标准，最终在网景、SUN以及微软等公司的参与下，由一众程序员和相关组织人员组成的第39技术委员会也就是TC39发布了ECMA-262标准，这个标准定义了名为ECMAScript的全新脚本语言，为啥又来了个ECMAScript？

因为Java是SUN的商标，SUN授权了NetScape可以叫JavaScript，但是ECMA没有SUN的授权就不能叫JavaScript，哪怕NetScape成员特别希望ECMA把它叫做JavaScript，但是ECMA也有成员并不希望这个标准就叫JavaScript，总之经过几轮磋商和博弈，ECMAScript这个名字就定下来。

我们可以简单看一下历史事件发展表：

![image-20201012142902870](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0a3a66f2d3a80fc8d5fb7d42ab2b86a1png.jpg)

### 1.2、JavaScript的组成

ECMAScript是一个标准，而这个标准需要由各个厂商去实现，不同的浏览器厂商对该标准会有不同的实现。

![image-20201012144015831](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/41d6f7d847b08cc9d17f11c29dc749d3png.jpg)

我们已经知道ECMAScript是JavaScript标准，所以一般情况下这两个词我们认为是一个意思。但是实际上JavaScript的含义却要更大一些。一个完整的JavaScript实现应该由以下三个部分构成：

![image-20201012144120964](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/db1d51e9e3829ccc345c7d5da09dd85bpng.jpg)

由此我们也知道了我们所要学习的内容就是这三部分，它们具体的含义后边章节会具体介绍。

### 1.3、JavaScript的特点

**解释型语言**

JavaScript是一门解释型语言，所谓解释型值语言是指不需要被编译为机器码在执行，而是直接执行。由于少了编译这一步骤，所以解释型语言开发起来尤为轻松，但是解释型语言运行较慢也是它的劣势。不过解释型语言中使用了JIT技术，使得运行速度得以改善。

**动态语言**

JavaScript是一门动态语言，所谓的动态语言可以暂时理解为在语言中的一切内容都是不确定的。比如一个变量，这一时刻是个整型，下一时刻可能会变成字符串了。当然这个问题我们以后再谈。不过在补充一句动态语言相比静态语言性能上要差一些，不过由于JavaScript中应用的JIT技术，所以JavaScript可能是运行速度最快的动态语言了。

**类似于 C 和 Java 的语法结构**

JavaScript的语法结构与C和Java很像，向for、if、while等语句和Java的基本上是一模一样的。所以有过C和Java基础的同学学习起来会轻松很多。不过JavaScript和与Java的关系也仅仅是看起来像而已。

**基于原型的面向对象**

JavaScript是一门面向对象的语言。啥是对象？下次聊。

Java也是一门面向对象的语言，但是与Java不同JavaScript是基于原型的面向对象。啥是原型？下次聊。

**严格区分大小写**

JavaScript是严格区分大小写的，也就是abc和Abc会被解析器认为是两个不同的东西。

### 1.4、JavaScript的使用

#### 1.4.1、标签引用

在HTML中在script标签中就可以编写JavaScript代码，以下是一个简单演示。

```html
<script>
    alert("Hello,World!");
</script>
123
```

#### 1.4.2、文件引用

在一个单独的js文件中也可以编写JavaScript代码，然后在HTML文件中使用script标签进行引用，以下是一个简单演示。

main.html

```html
<script src="main.js"></script>
1
```

main.js

```javascript
alert("Hello,World!");
1
```

### 1.5、JavaScript的输出

#### 1.5.1、页面输出

如何使用JavaScript向页面输出一句话，请参考以下代码。

```html
<script>
    document.write("Hello,World!");
</script>
123
```

#### 1.5.2、控制台输出

如何使用JavaScript向控制台输出一句话，请参考以下代码。

> 注意：页面按F12弹出控制台

```html
<script>
    console.log("输出一条日志");//最常用
    console.info("输出一条信息");
    console.warn("输出一条警告");
    console.error("输出一条错误");
</script>
123456
```

![image-20201025103100826](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/92f84a5b734b708039444c43f1b45e83png.jpg)

#### 1.5.3、弹出窗口输出

如何使用JavaScript向弹出窗口输出一句话，请参考以下代码。

```html
<script>
    alert("Hello,World!");
</script>
123
```

### 1.6、JavaScript的注释

注释中的内容不会被解析器解析执行，但是会在源码中显示，我们一般会使用注释对程序中的内容进行解释。

JS中的注释和Java的的一致，分为两种：

+   单行注释：`// 注释内容`
+   多行注释：`/* 注释内容 */`

#### 1.6.1、单行注释

```html
<script>
    // 这是注释内容
    console.log("Hello,World!");
</script>
1234
```

#### 1.6.2、多行注释

```html
<script>
    /**
     * 这是注释内容
     */
    console.log("Hello,World!");
</script>
123456
```

## 第二章 JavaScript基础语法

### 2.1、标识符

所谓标识符，就是指给变量、函数、属性或函数的参数起名字。

标识符可以是按照下列格式规则组合起来的一或多个字符：

+   第一个字符必须是一个字母、下划线（ \_ ）或一个美元符号（ $ ）。
+   其它字符可以是字母、下划线、美元符号或数字。
+   按照惯例，ECMAScript 标识符采用驼峰命名法。
+   标识符不能是关键字和保留字符。

**关键字：**

![image-20201012215759481](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/b9c8a06583c69dd1822fdcab45d47dc3png.jpg)

**保留字符：**

![image-20201012215835171](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/3c9a4c00fc8b896f31d0bb078fee9abcpng.jpg)

**其它不建议使用的标识符：**

![image-20201012215902568](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d9dfde5dc8a7e340216b2cb18a51baf8png.jpg)

**单个单词的标识符举例：**

```auto
name、age、gender、hobby
1
```

**多个单词的标识符举例：**

```auto
studentName、studentAge、studentGender、studentHobby
1
```

### 2.2、字面量和变量

#### 2.2.1、字面量

字面量实际上就是一些固定的值，比如：1、2 、3、true、false、null、NaN、“hello”，字面量都是不可以改变的，由于字面量不是很方便使用，所以在JavaScript中很少直接使用字面量，使用的而是变量。

#### 2.2.2、变量

变量的作用是给某一个值或对象标注名称。比如我们的程序中有一个值123，这个值我们是需要反复使用的，这个时候 我们最好将123这个值赋值给一个变量，然后通过变量去使用123这个值。

**变量的声明：** 使用var关键字声明一个变量。

```javascript
var a;
1
```

**变量的赋值：** 使用=为变量赋值。

```javascript
a = 123;
1
```

**声明和赋值同时进行：**

```javascript
var a = 123;
1
```

### 2.3、数据类型

#### 2.3.1、类型分类

数据类型决定了一个数据的特征，比如：123和”123”，直观上看这两个数据都是123，但实际上前者是一个数字，而后者是一个字符串。

对于不同的数据类型我们在进行操作时会有很大的不同。

JavaScript中一共有5种基本数据类型：

+   字符串型（String）
+   数值型（Number）
+   布尔型（Boolean）
+   undefined型（Undefined）
+   null型（Null）

这5种之外的类型都称为Object，所以总的来看JavaScript中共有六种数据类型。

#### 2.3.2、typeof运算符

使用typeof操作符可以用来检查一个变量的数据类型。

**使用方式：**

```javascript
typeof 数据
1
```

**示例代码：**

```javascript
console.log(typeof 123);
console.log(typeof "Hello,World!");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
12345
```

**运行结果：**

![image-20201013080324458](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/be3e6603107e04d9419e110f620b7733png.jpg)

#### 2.3.3、String

String用于表示一个字符序列，即字符串。字符串需要使用 **单引号** 或 **双引号** 括起来。

**转义字符：**

![image-20201013085608008](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1cd373cff04f5ccc6fff814d831054bfpng.jpg)

> 注意：使用typeof运算符检查字符串时，会返回"string"。

#### 2.3.4、Number

Number 类型用来表示整数和浮点数，最常用的功能就是用来表示10进制的整数和浮点数。

Number表示的数字大小是有限的，如果超过了这个范围，则会返回 ±Infinity。

+   最大值：+1.7976931348623157e+308
+   最小值：-1.7976931348623157e+308
+   0以上的最小值：5e-324

**特殊的数字：**

+   Infinity：正无穷
+   \-Infinity：负无穷
+   NaN：非法数字（Not A Number）

**其它的进制：**

+   二进制：0b 开头表示二进制，但是，并不是所有的浏览器都支持
+   八进制：0 开头表示八进制
+   十六进制：0x 开头表示十六进制

> 注意：使用typeof检查一个Number类型的数据时（包括NaN 和 Infinity），会返回"number"。

#### 2.3.5、Boolean

布尔型也被称为逻辑值类型或者真假值类型。

布尔型只能够取真（true）和假（false）两种数值。除此以外， 其它的值都不被支持。

#### 2.3.6、Undefined

Undefined 类型只有一个值，即特殊的 undefined。

在使用 var 声明变量但未对其加以初始化时，这个变量的值就是 undefined。

> 注意：使用typeof对没有初始化和没有声明的变量，会返回“undefined”。

#### 2.3.7、Null

Null 类型是第二个只有一个值的数据类型，这个特殊的值是 null。

undefined值实际上是由null值衍生出来的，所以如果比较undefined和null是否相等，会返回true。

> 注意：从语义上看null表示的是一个空的对象，所以使用typeof检查null会返回一个Object。

### 2.4、强制类型转换

强制类型转换指将一个数据类型强制转换为其它的数据类型。一般是指，将其它的数据类型转换为String、Number、Boolean。

#### 2.4.1、转换为String类型

将其它数值转换为字符串有三种方式：toString()、String()、 拼串。

+   方式一：调用被转换数据类型的toString()方法，该方法不会影响到原变量，它会将转换的结果返回，但是注意：null和undefined这两个值没有toString()方法，如果调用它们的方法，会报错。
    
    ```javascript
    var a = 123;
    a = a.toString();
    console.log(a);
    console.log(typeof a);
    1234
    ```
    
+   方式二：调用String()函数，并将被转换的数据作为参数传递给函数，使用String()函数做强制类型转换时，对于Number和Boolean实际上就是调用的toString()方法，但是对于null和undefined，就不会调用toString()方法，它会将 null 直接转换为 “null”，将 undefined 直接转换为 “undefined”。
    
    ```javascript
    var a = 123;
    a = String(a);
    console.log(a);
    console.log(typeof a);
    
    var b = undefined;
    b = String(b);
    console.log(b);
    console.log(typeof b);
    
    var c = null;
    c = String(c);
    console.log(c);
    console.log(typeof c);
    1234567891011121314
    ```
    
+   方式三：为任意的数据类型 `+""`
    
    ```javascript
    var a = 123;
    a = a + "";
    console.log(a);
    console.log(typeof a);
    1234
    ```
    

#### 2.4.2、转换为Number类型

有三个函数可以把非数值转换为数值：Number()、parseInt() 和parseFloat()。Number()可以用来转换任意类型的数据，而后两者只能用于转换字符串。parseInt()只会将字符串转换为整数，而parseFloat()可以将字符串转换为浮点数。

+   方式一：使用Number()函数
    
    +   字符串 --> 数字
        +   如果是纯数字的字符串，则直接将其转换为数字
        +   如果字符串中有非数字的内容，则转换为NaN
        +   如果字符串是一个空串或者是一个全是空格的字符串，则转换为0
    +   布尔 --> 数字
        +   true 转成 1
        +   false 转成 0
    +   null --> 数字
        +   null 转成 0
    +   undefined --> 数字
        +   undefined 转成 NaN
+   方式二：这种方式专门用来对付字符串，parseInt() 把一个字符串转换为一个整数
    
    ```javascript
    var a = "123";
    a = parseInt(a);
    console.log(a);
    console.log(typeof a);
    1234
    ```
    
+   方式三：这种方式专门用来对付字符串，parseFloat() 把一个字符串转换为一个浮点数
    
    ```javascript
    var a = "123.456";
    a = parseFloat(a);
    console.log(a);
    console.log(typeof a);
    1234
    ```
    

> 注意：如果对非String使用parseInt()或parseFloat()，它会先将其转换为String然后在操作

#### 2.4.3、转换为Boolean类型

将其它的数据类型转换为Boolean，只能使用Boolean()函数。

+   使用Boolean()函数
    +   数字 —> 布尔
        +   除了0和NaN，其余的都是true
    +   字符串 —> 布尔
        +   除了空串，其余的都是true
    +   null和undefined都会转换为false
    +   对象也会转换为true

### 2.5、运算符

运算符也叫操作符，通过运算符可以对一个或多个值进行运算并获取运算结果。

比如：typeof就是运算符，可以来获得一个值的类型，它会将该值的类型以字符串的形式返回（number string boolean undefined object）

#### 2.5.1、算术运算符

算术运算符用于表达式计算。

y=5，下面的表格解释了这些算术运算符：

| 运算符 | 描述 | 例子 | x 运算结果 | y 运算结果 | 在线实例 |
| :-- | :-- | :-- | :-- | :-- | :-- |
| + | 加法 | x=y+2 | 7 | 5 | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_add) |
| \- | 减法 | x=y-2 | 3 | 5 | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_sub) |
| \* | 乘法 | x=y\*2 | 10 | 5 | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_mult) |
| / | 除法 | x=y/2 | 2.5 | 5 | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_div) |
| % | 取模（求余数） | x=y%2 | 1 | 5 | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_mod) |
| ++ | 自增 | x=++y  
x=y++ | 6  
5 | 6  
6 | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_incr)  
[实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_incr2) |
| – | 自减 | x=–y  
x=y– | 4  
5 | 4  
4 | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_decr)  
[实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_decr2) |

#### 2.5.2、关系运算符

关系运算符在逻辑语句中使用，以测定变量或值是否相等。

x=5，下面的表格解释了比较运算符：

| 运算符 | 描述 | 比较 | 返回值 | 实例 |
| --- | --- | --- | --- | --- |
| \> | 大于 | x>8 | *false* | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_comparison8) |
| < | 小于 | x<8 | *true* | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_comparison9) |
| \>= | 大于或等于 | x>=8 | *false* | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_comparison10) |
| <= | 小于或等于 | x<=8 | *true* | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_comparison11) |

#### 2.5.3、赋值运算符

赋值运算符用于给 JavaScript 变量赋值。

x=10 和 y=5，下面的表格解释了赋值运算符：

| 运算符 | 例子 | 等同于 | 运算结果 | 在线实例 |
| :-- | :-- | :-- | :-- | :-- |
| \= | x=y |  | x=5 | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_equal) |
| += | x+=y | x=x+y | x=15 | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_plusequal) |
| \-= | x-=y | x=x-y | x=5 | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_minequal) |
| \*= | x\*=y | x=x\*y | x=50 | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_multequal) |
| /= | x/=y | x=x/y | x=2 | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_divequal) |
| %= | x%=y | x=x%y | x=0 | [实例 »](https://www.runoob.com/try/try.php?filename=tryjs_oper_modequal) |

#### 2.5.4、逻辑运算符

逻辑运算符用于测定变量或值之间的逻辑。

给定 x=6 以及 y=3，下表解释了逻辑运算符：

| 运算符 | 描述 | 例子 |
| :-- | :-- | :-- |
| && | and | (x < 10 && y > 1) 为 true |
| || | or | (x==5 || y==5) 为 false |
| ! | not | !(x==y) 为 true |

关于逻辑运算符我们可以具体探讨一下：

+   && 与：&&可以对符号两侧的值进行与运算并返回结果，运算规则如下：
    +   两个值中只要有一个值为false，就返回false，只有两个值都为true时，才会返回true
    +   JS中的“与”属于短路的与，如果第一个值为false，则不会检查第二个值
    +   非布尔值时：如果两个都为true，则返回第二个值，如果两个值中有false，则返回靠前的false的值
+   || 或：||可以对符号两侧的值进行或运算并返回结果，运算规则如下：
    +   两个值中只要有一个true，就返回true，只有两个值都为false，才会返回false
    +   JS中的“或”属于短路的或，如果第一个值为true，则不会检查第二个值
    +   非布尔值时：如果两个都为false ，则返回第二个值，如果两个值中有true，则返回靠前的true的值
+   ! 非：!可以用来对一个值进行非运算，所谓非运算就是对一个布尔值进行取反操作，true变false，false变true，运算规则如下：
    +   如果对一个值进行两次取反，它不会变化
    +   非布尔值时：先会将其转换为布尔值，然后再取反，所以我们可以利用该特点，来将一个其它的数据类型转换为布尔值，可以为一个任意数据类型取两次反，来将其转换为布尔值，原理和Boolean()函数一样

#### 2.5.5、比较运算符

比较运算符用来比较两个值是否相等，如果相等会返回true，否则返回false。

+   使用 **\==** 来做相等运算
    +   当使用==来比较两个值时，如果值的类型不同，则会自动进行类型转换，将其转换为相同的类型，然后在比较
+   使用 **!=** 来做不相等运算
    +   不相等用来判断两个值是否不相等，如果不相等返回true，否则返回false，不相等也会对变量进行自动的类型转换，如果转换后相等它也会返回false
+   使用 **\===** 来做全等运算
    +   用来判断两个值是否全等，它和相等类似，不同的是它不会做自动的类型转换，如果两个值的类型不同，直接返回false
+   使用 **!==** 来做不全等运算
    +   用来判断两个值是否不全等，它和不等类似，不同的是它不会做自动的类型转换，如果两个值的类型不同，直接返回true

#### 2.5.6、条件运算符

JavaScript 还包含了基于某些条件对变量进行赋值的条件运算符。

语法：`variablename=(condition)?value1:value2;`

举例：`result=(age<18)?"年龄太小":"年龄合适";`

执行流程：如果condition为true，则执行语句1，并返回执行结果，如果为false，则执行语句2，并返回执行结果。

#### 2.5.7、逗号运算符

使用逗号可以在一条语句中执行多次操作。

比如：var num1=1, num2=2, num3=3;

使用逗号运算符分隔的语句会从左到右顺 序依次执行。

### 2.6、运算符优先级

运算符优先级由上到下依次减小，对于同级运算符，采用从左向右依次执行的方法。

![image-20201013115557984](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/92c21647a80d8c94502b3fd39cafc329png.jpg)

### 2.7、代码块

#### 2.7.1、语句

前边我所说表达式和运算符等内容可以理解成是我们一 门语言中的单词，短语。而语句（statement）就是我们这个语言中一句一句完 整的话了。语句是一个程序的基本单位，JavaScript的程序就是由一条一条语句构成的，每一条语句使用;结尾。

JavaScript中的语句默认是由上至下顺序执行的，但是我们也可以通过一些流程控制语句来控制语句的执行顺序。

#### 2.7.2、代码块

代码块是在大括号 {} 中所写的语句，以此将多条语句的集合视为一条语句来使用。

例如：

```javascript
{
    var a = 123;
    a++;
    alert(a);
}
12345
```

我们一般使用代码块将需要一起执行的语句进行分组，需要注意的是，代码块结尾不需要加 分号。

### 2.8、条件语句

条件语句是通过判断指定表达式的值来决定执行还是跳过某些语句，最基本的条件语句：

+   if…else
+   switch…case

#### 2.8.1、if…else

if…else语句是一种最基本的控制语句，它让JavaScript可以有条件的执行语句。

+   第一种形式：
    
    ```javascript
    if(expression)
        statement
    12
    ```
    
    ```javascript
    var age = 16;
    if (age < 18) {
        console.log("未成年");
    }
    1234
    ```
    
+   第二种形式：
    
    ```javascript
    if(expression)
        statement
    else
        statement
    1234
    ```
    
    ```javascript
    var age = 16;
    if (age < 18) {
        console.log("未成年");
    } else {
        console.log("已成年");
    }
    123456
    ```
    
+   第三种形式：
    
    ```javascript
    if(expression1)
        statement
    else if(expression2)
        statement
    else
        statement    
    123456
    ```
    
    ```javascript
    var age = 18;
    if (age < 18) {
        console.log("小于18岁了");
    } else if (age == 18) {
        console.log("已经18岁了");
    } else {
        console.log("大于18岁了")
    }
    12345678
    ```
    

#### 2.8.2、switch…case

switch…case是另一种流程控制语句。

switch语句更适用于多条分支使用同一条语句的情况。

语法格式：

```javascript
switch (语句) {
    case 表达式1:
        语句...
    case 表达式2:
        语句...
    default:
        语句...
}
12345678
```

> 注意：需要注意的是一旦符合case的条件程序会一直运行到结束，所以我们一般会在case中添加break作为语句的结束。

**案例演示1：根据today的数值，输出今天是星期几。**

```javascript
var today = 1;
switch (today) {
    case 1:
        console.log("星期一");
        break;
    case 2:
        console.log("星期二");
        break;
    case 3:
        console.log("星期三");
        break;
    case 4:
        console.log("星期四");
        break;
    case 5:
        console.log("星期五");
        break;
    case 6:
        console.log("星期六");
        break;
    case 7:
        console.log("星期日");
        break;
    default:
        console.log("输入错误");
}
1234567891011121314151617181920212223242526
```

**案例演示2：根据month的数值，输出对应月份的天数，2月默认28天。**

```javascript
var month = 10;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31天");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30天");
        break;
    case 2:
        console.log("28天");
        break;
    default:
        console.log("输入错误");
}
1234567891011121314151617181920212223
```

### 2.9、循环语句

循环语句和条件语句一样，也是基本的控制语句，只要满足一定的条件将会一直执行，最基本的循环语句：

+   while
+   do…while
+   for

#### 2.9.1、while

while语句是一个最基本的循环语句，while语句也被称为while循环。

语法格式：

```javascript
while(条件表达式){
    语句...
}
123
```

**案例演示：输出1-10。**

```javascript
var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
12345
```

#### 2.9.2、do…while

do…while和while非常类似，只不过它会在循环的尾部而不是顶部检查表达式的值，因此，do…while循环会至少执行一次。相比于while，do…while的使用情况并不 是很多。

语法格式：

```javascript
do{
    语句...
}while(条件表达式);
123
```

**案例演示：输出1-10。**

```javascript
var i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);
12345
```

#### 2.9.3、for

for语句也是循环控制语句，我们也称它为for循环。大部分循环都会有一个计数器用以控制循环执行的次数， 计数器的三个关键操作是初始化、检测和更新。for语句 就将这三步操作明确为了语法的一部分。

语法格式：

```javascript
for(初始化表达式 ; 条件表达式 ; 更新表达式){
    语句...
}
123
```

**案例演示：输出1-10。**

```javascript
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
123
```

#### 2.9.4、跳转控制

+   break：结束最近的一次循环，可以在循环和switch语句中使用。
+   continue：结束本次循环，执行下一次循环，只能在循环中使用。

那如果我们想要跳出多层循环或者跳到指定位置该怎么办呢？可以为循环语句创建一个label，来标识当前的循环，如下例子：

```javascript
outer: for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (j == 5) {
            break outer;
        }
        console.log(j);
    }
}
12345678
```

### 2.10、对象基础

#### 2.10.1、概述

Object类型，我们也称为一个对象，是JavaScript中的引用数据类型。它是一种复合值，它将很多值聚合到一起，可以通过名字访问这些值。对象也可以看做是属性的无序集合，每个属性都是一个名/值对。对象除了可以创建自有属性，还可以通过从一个名为原型的对象那里继承属性。除了字符串、数字、true、false、null和undefined之外，JavaScript中的值都是对象。

#### 2.10.2、创建对象

创建对象有两种方式：

+   第一种方式：
    
    ```javascript
    var person = new Object();
    person.name = "孙悟空";
    person.age = 18;
    console.log(person);
    1234
    ```
    
+   第二种方式：
    
    ```javascript
    var person = {
        name: "孙悟空",
        age: 18
    };
    console.log(person);
    12345
    ```
    

#### 2.10.3、访问属性

访问属性的两种方式：

+   第一种方式：使用 . 来访问
    
    ```javascript
    对象.属性名
    1
    ```
    
+   第二种方式：使用 \[\] 来访问
    
    ```javascript
    对象[‘属性名’]
    1
    ```
    

#### 2.10.4、删除属性

删除对象的属性可以使用delete关键字，格式如下：

```javascript
delete 对象.属性名
1
```

案例演示：

```javascript
var person = new Object();
person.name = "孙悟空";
person.age = 18;
console.log(person);

delete person.name
console.log(person);
1234567
```

#### 2.10.5、遍历对象

枚举遍历对象中的属性，可以使用for … in语句循环，对象中有几个属性，循环体就会执行几次。

语法格式：

```javascript
for (var 变量 in 对象) {

}
123
```

案例演示：

```javascript
var person = {
    name: "zhangsan",
    age: 18
}

for (var personKey in person) {
    var personVal = person[personKey];
    console.log(personKey + ":" + personVal);
}
123456789
```

#### 2.10.6、数据类型梳理

##### 2.10.6.1、基本数据类型

JavaScript中的变量可能包含两种不同数据类型的值：基本数据类型和引用数据类型。

JavaScript中一共有5种基本数据类型：String、Number、 Boolean、Undefined、Null。

基本数据类型的值是无法修改的，是不可变的。

基本数据类型的比较是值的比较，也就是只要两个变量的值相等，我们就认为这两个变量相等。

##### 2.10.6.2、引用数据类型

引用类型的值是保存在内存中的对象。

当一个变量是一个对象时，实际上变量中保存的并不是对象本身，而是对象的引用。

当从一个变量向另一个变量复制引用类型的值时，会将对象的引用复制到变量中，并不是创建一个新的对象。

这时，两个变量指向的是同一个对象。因此，改变其中一个变量会影响另一个。

#### 2.10.7、栈和堆梳理

JavaScript在运行时数据是保存到栈内存和堆内存当中的。

简单来说栈内存用来保存变量和基本类型，堆内存是用来保存对象。

我们在声明一个变量时，实际上就是在栈内存中创建了一个空间用来保存变量。

如果是基本类型则在栈内存中直接保存，如果是引用类型则会在堆内存中保存，变量中保存的实际上对象在堆内存中的地址。

当我们写了下边这几句代码的时候，栈内存和堆内存的结构如下：

```javascript
var a = 123;
var b = true;
var c = "hello";
var d = {name: 'sunwukong', age: 18};
1234
```

栈的特点：先进后出，后进先出

![image-20201014085429553](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/3aa1f42bb7cd43f22cc88c619c7211b7png.jpg)

### 2.11、函数

#### 2.11.1、概述

函数是由一连串的子程序（语句的集合）所组成的，可以被外部程序调用，向函数传递参数之后，函数可以返回一定的值。

通常情况下，JavaScript代码是自上而下执行的，不过函数体内部的代码则不是这样。如果只是对函数进行了声明，其中的代码并不会执行，只有在调用函数时才会执行函数体内部的代码。

这里要注意的是JavaScript中的函数也是一个对象，使用typeof检查一个函数对象时，会返回function。

#### 2.11.2、函数创建

+   使用 **函数对象** 来创建一个函数（几乎不用）
    
    语法格式：
    
    ```javascript
    var 函数名 = new Function("执行语句");
    1
    ```
    
    示例代码：
    
    ```javascript
    var fun = new Function("console.log('这是我的第一个函数');");
    1
    ```
    
+   使用 **函数声明** 来创建一个函数（比较常用）
    
    语法格式：
    
    ```javascript
    function 函数名([形参1,形参2,...,形参N]) {
        语句...
    }
    123
    ```
    
    示例代码：
    
    ```javascript
    function fun(){
        console.log("这是我的第二个函数");
    }
    123
    ```
    
+   使用 **函数表达式** 来创建一个函数（比较常用）
    
    语法格式：
    
    ```javascript
    var 函数名  = function([形参1,形参2,...,形参N]) {
        语句....
    }
    123
    ```
    
    示例代码：
    
    ```javascript
    var fun  = function() {
        console.log("这是我的第三个函数");
    }
    123
    ```
    

#### 2.11.3、函数调用

+   对于无参函数调用：
    
    ```javascript
    // 函数声明
    var fun = function () {
        console.log("哈哈，我执行啦！");
    }
    
    // 函数调用
    fun();
    1234567
    ```
    
+   对于有参函数调用：
    
    ```javascript
    // 函数声明
    var sum = function (num1, num2) {
        var result = num1 + num2;
        console.log("num1 + num2 = " + result);
    }
    
    // 函数调用
    sum(10, 20);
    12345678
    ```
    

#### 2.11.4、函数参数

+   JS中的所有的参数传递都是按值传递的，也就是说把函数外部的值赋值给函数内部的参数，就和把值从一个变量赋值给另一个变量是一样的，在调用函数时，可以在()中指定实参（实际参数），实参将会赋值给函数中对应的形参
+   调用函数时，解析器不会检查实参的类型，所以要注意，是否有可能会接收到非法的参数，如果有可能，则需要对参数进行类型的检查，函数的实参可以是任意的数据类型
+   调用函数时，解析器也不会检查实参的数量，多余实参不会被赋值，如果实参的数量少于形参的数量，则没有对应实参的形参将是undefined

#### 2.11.5、函数返回值

可以使用 return 来设置函数的返回值，return后的值将会作为函数的执行结果返回，可以定义一个变量，来接收该结果。

> 注意：在函数中return后的语句都不会执行，如果return语句后不跟任何值就相当于返回一个undefined，如果函数中不写return，则也会返回undefined，return后可以跟任意类型的值

语法格式：return 值

案例演示：

```javascript
function sum(num1, num2) {
    return num1 + num2;
}

var result = sum(10, 20);
console.log(result);
123456
```

#### 2.11.6、嵌套函数

嵌套函数：在函数中声明的函数就是嵌套函数，嵌套函数只能在当前函数中可以访问，在当前函数外无法访问。

案例演示：

```javascript
function fu() {
    function zi() {
        console.log("我是儿子")
    }

    zi();
}

fu();
123456789
```

#### 2.11.7、匿名函数

匿名函数：没有名字的函数就是匿名函数，它可以让一个变量来接收，也就是用 “函数表达式” 方式创建和接收。

案例演示：

```javascript
var fun = function () {
    alert("我是一个匿名函数");
}

fun();
12345
```

#### 2.11.8、立即执行函数

立即执行函数：函数定义完，立即被调用，这种函数叫做立即执行函数，立即执行函数往往只会执行一次。

案例演示：

```javascript
(function () {
    alert("我是一个匿名函数");
})();
123
```

#### 2.11.9、对象中的函数

对象的属性值可以是任何的数据类型，也可以是个函数。

如果一个函数作为一个对象的属性保存，那么我们称这个函数是这个对象的方法，调用这个函数就说调用对象的方法（method）。

> 注意：方法和函数只是名称上的区别，没有其它别的区别

案例演示：

```javascript
var person = {
    name: "zhangsan",
    age: 18,
    sayHello: function () {
        console.log(name + " hello")
    }
}

person.sayHello();
123456789
```

#### 2.11.10、this对象

解析器在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是this，this指向的是一个对象，这个对象我们称为函数执行的上下文对象，根据函数的调用方式的不同，this会指向不同的对象

+   以函数的形式调用时，this永远都是window
+   以方法的形式调用时，this就是调用方法的那个对象

案例演示：

```javascript
//创建一个全局变量name
var name = "全局变量name";

//创建一个函数
function fun() {
    console.log(this.name);
}

//创建一个对象
var obj = {
    name: "孙悟空",
    sayName: fun
};

//我们希望调用obj.sayName()时可以输出obj的名字而不是全局变量name的名字
obj.sayName();
12345678910111213141516
```

### 2.12、对象进阶

#### 2.12.1、用工厂方法创建对象

我们之前已经学习了如何创建一个对象，那我们要是想要创建多个对象又该怎么办？聪明的同学可能会说，直接在写几个对象不就好了吗？比如下边的代码：

```javascript
var person1 = {
    name: "孙悟空",
    age: 18,
    sayName: function () {
        console.log(this.name);
    }
};

var person2 = {
    name: "猪八戒",
    age: 19,
    sayName: function () {
        console.log(this.name);
    }
};

var person3 = {
    name: "沙和尚",
    age: 20,
    sayName: function () {
        console.log(this.name);
    }
};

console.log(person1);
console.log(person2);
console.log(person3);
123456789101112131415161718192021222324252627
```

的确，上述代码确实可以创建多个对象，但是，这样的解决方案真的好吗？对于少量对象可能使用，我们假设说，要用循环创建1000个对象，那你这种办法似乎就没用了，我们可以这么做，如下代码：

```javascript
// 使用工厂模式创建对象
function createPerson() {
    // 创建新的对象
    var obj = new Object();
    // 设置对象属性
    obj.name = "孙悟空";
    obj.age = 18;
    // 设置对象方法
    obj.sayName = function () {
        console.log(this.name);
    };
    //返回新的对象
    return obj;
}

var person1 = createPerson();
var person2 = createPerson();
var person3 = createPerson();

console.log(person1);
console.log(person2);
console.log(person3);
12345678910111213141516171819202122
```

上述代码看起来更加简洁，但是你会发现每一个人都是孙悟空，我们要是想要给每一个人不同的属性值，请参考：

```javascript
// 使用工厂模式创建对象
function createPerson(name, age) {
    // 创建新的对象
    var obj = new Object();
    // 设置对象属性
    obj.name = name;
    obj.age = age;
    // 设置对象方法
    obj.sayName = function () {
        console.log(this.name);
    };
    //返回新的对象
    return obj;
}

var person1 = createPerson("孙悟空", 18);
var person2 = createPerson("猪八戒", 19);
var person3 = createPerson("沙和尚", 20);

console.log(person1);
console.log(person2);
console.log(person3);
12345678910111213141516171819202122
```

现在再看上述代码，发现好像已经完美的解决了创建多个对象的难题，那我们是不是可以用循环批量创建1000个对象了呢？那我们就来试试：

```javascript
// 使用工厂模式创建对象
function createPerson(name, age) {
    // 创建新的对象
    var obj = new Object();
    // 设置对象属性
    obj.name = name;
    obj.age = age;
    // 设置对象方法
    obj.sayName = function () {
        console.log(this.name);
    };
    //返回新的对象
    return obj;
}

for (var i = 1; i <= 1000; i++) {
    var person = createPerson("person" + i, 18);
    console.log(person);
}
12345678910111213141516171819
```

这样我们就实现了批量创建对象的功能，至于对象的名称和年龄，我们可以通过名称数组和年龄数组来获取，但这并不是我们本小节的重点，我们就忽略了。

#### 2.12.2、用构造函数创建对象

在前一节中，我们学会了使用工厂模式创建对象，但是，你会发现我们所创建的对象类型都是Object，具体代码如下：

```javascript
// 使用工厂模式创建对象
function createPerson(name, age) {
    // 创建新的对象
    var obj = new Object();
    // 设置对象属性
    obj.name = name;
    obj.age = age;
    // 设置对象方法
    obj.sayName = function () {
        console.log(this.name);
    };
    //返回新的对象
    return obj;
}

for (var i = 1; i <= 1000; i++) {
    var person = createPerson("person" + i, 18);
    console.log(typeof person);
}
12345678910111213141516171819
```

![image-20201016083849601](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/06c4cf9a08e1b1149f4924fbc0235ec5png.jpg)

那这有问题吗？看起来有，看起来好像又没有，每创建一个都是对象，但是在实际生活中，人应该是一个确定的类别，属于人类，对象是一个笼统的称呼，万物皆对象，它并不能确切的指明当前对象是人类，那我们要是既想实现创建对象的功能，同时又能明确所创建出来的对象是人类，那么似乎问题就得到了解决，这就用到了构造函数，每一个构造函数你都可以理解为一个类别，用构造函数所创建的对象我们也成为类的实例，那我们来看看是如何做的：

```javascript
// 使用构造函数来创建对象
function Person(name, age) {
    // 设置对象的属性
    this.name = name;
    this.age = age;
    // 设置对象的方法
    this.sayName = function () {
        console.log(this.name);
    };
}

var person1 = new Person("孙悟空", 18);
var person2 = new Person("猪八戒", 19);
var person3 = new Person("沙和尚", 20);

console.log(person1);
console.log(person2);
console.log(person3);
123456789101112131415161718
```

![image-20201016085351603](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/91129738923f7b89521a8d141117e5b0png.jpg)

那这构造函数到底是什么呢？我来解释一下：

构造函数：构造函数就是一个普通的函数，创建方式和普通函数没有区别，不同的是构造函数习惯上首字母大写，构造函数和普通函数的还有一个区别就是调用方式的不同，普通函数是直接调用，而构造函数需要使用new关键字来调用。

那构造函数是怎么执行创建对象的过程呢？我再来解释一下：

1.  调用构造函数，它会立刻创建一个新的对象
2.  将新建的对象设置为函数中this，**在构造函数中可以使用this来引用新建的对象**
3.  逐行执行函数中的代码
4.  将新建的对象作为返回值返回

你会发现构造函数有点类似工厂方法，但是它创建对象和返回对象都给我们隐藏了，使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类。我们将通过一个构造函数创建的对象，称为是该类的实例。

现在，this又出现了一种新的情况，为了不让大家混淆，我再来梳理一下：

+   当以函数的形式调用时，this是window
+   当以方法的形式调用时，谁调用方法this就是谁
+   当以构造函数的形式调用时，this就是新创建的那个对象

我们可以使用 instanceof 运算符检查一个对象是否是一个类的实例，它返回true或false

语法格式：

```javascript
对象 instanceof 构造函数
1
```

案例演示：

```javascript
console.log(person1 instanceof Person);
1
```

#### 2.12.3、原型

在前一节中，我们学习了使用构造函数的方式进行创建对象，但是，它还是存在一个问题，那就是，你会发现，每一个对象的属性不一样这是一定的，但是它的方法似乎好像是一样的，如果我创建1000个对象，那岂不是内存中就有1000个相同的方法，那要是有10000个，那对内存的浪费可不是一点半点的，我们有没有什么好的办法解决，没错，我们可以把函数抽取出来，作为全局函数，在构造函数中直接引用就可以了，上代码：

```javascript
// 使用构造函数来创建对象
function Person(name, age) {
    // 设置对象的属性
    this.name = name;
    this.age = age;
    // 设置对象的方法
    this.sayName = sayName
}

// 抽取方法为全局函数
function sayName() {
    console.log(this.name);
}

var person1 = new Person("孙悟空", 18);
var person2 = new Person("猪八戒", 19);
var person3 = new Person("沙和尚", 20);

person1.sayName();
person2.sayName();
person3.sayName();
123456789101112131415161718192021
```

![image-20201016085859719](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/63890c5f81279c6dfc79da73f5b698a4png.jpg)

但是，在全局作用域中定义函数却不是一个好的办法，为什么呢？因为，如果要是涉及到多人协作开发一个项目，别人也有可能叫sayName这个方法，这样在工程合并的时候就会导致一系列的问题，污染全局作用域，那该怎么办呢？有没有一种方法，我只在Person这个类的全局对象中添加一个函数，然后在类中引用？答案肯定是有的，这就需要原型对象了，我们先看看怎么做的，然后在详细讲解原型对象。

```javascript
// 使用构造函数来创建对象
function Person(name, age) {
    // 设置对象的属性
    this.name = name;
    this.age = age;
}

// 在Person类的原型对象中添加方法
Person.prototype.sayName = function() {
    console.log(this.name);
};

var person1 = new Person("孙悟空", 18);
var person2 = new Person("猪八戒", 19);
var person3 = new Person("沙和尚", 20);

person1.sayName();
person2.sayName();
person3.sayName();
12345678910111213141516171819
```

![image-20201016091223379](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/4862a4a7e824fb4f5cc75a01a1a9988bpng.jpg)

那原型（prototype）到底是什么呢？

我们所创建的每一个函数，解析器都会向函数中添加一个属性prototype，这个属性对应着一个对象，这个对象就是我们所谓的原型对象，即显式原型，原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，我们可以将对象中共有的内容，统一设置到原型对象中。

如果函数作为普通函数调用prototype没有任何作用，当函数以构造函数的形式调用时，它所创建的对象中都会有一个隐含的属性，指向该构造函数的原型对象，我们可以通过`__proto__`（隐式原型）来访问该属性。当我们访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到则直接使用。

以后我们创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中，这样不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法了。

#### 2.12.4、原型链

访问一个对象的属性时，先在自身属性中查找，找到返回， 如果没有，再沿着\_\_proto\_\_这条链向上查找，找到返回，如果最终没找到，返回undefined，这就是原型链，又称隐式原型链，它的作用就是查找对象的属性(方法)。

我们使用一张图来梳理一下上一节原型案例的代码：

![image-20201016092628653](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/f282bb3558f352a2b31f9c2d0898e6ccpng.jpg)

> 注意：Object对象是所有对象的祖宗，Object的原型对象指向为null，也就是没有原型对象

#### 2.12.5、toString方法

toString()函数用于将当前对象以字符串的形式返回。该方法属于Object对象，由于所有的对象都"继承"了Object的对象实例，因此几乎所有的实例对象都可以使用该方法，所有主流浏览器均支持该函数。

```javascript
// 使用构造函数来创建对象
function Person(name, age) {
    // 设置对象的属性
    this.name = name;
    this.age = age;
}

//创建对象的一个实例对象
var p = new Person("张三", 20);
console.log(p.toString());
12345678910
```

![image-20201025104527044](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/e3648004f6263e801cedade9fb26d5fbpng.jpg)

JavaScript的许多内置对象都重写了该函数，以实现更适合自身的功能需要。

| 类型 | 行为描述 |
| --- | --- |
| String | 返回 String 对象的值。 |
| Number | 返回 Number 的字符串表示。 |
| Boolean | 如果布尔值是true，则返回"true"。否则返回"false"。 |
| Object  
(默认) | 返回"\[object ObjectName\]"，其中 ObjectName 是对象类型的名称。 |
| Array | 将 Array 的每个元素转换为字符串，并将它们依次连接起来，两个元素之间用英文逗号作为分隔符进行拼接。 |
| Date | 返回日期的文本表示。 |
| Error | 返回一个包含相关错误信息的字符串。 |
| Function | 返回如下格式的字符串，其中 functionname 是一个函数的名称  
此函数的 toString 方法被调用： “function functionname() { \[native code\] }” |

注意：这里我们只是演示toString()方法，其它的一些没有讲到的知识后边会将，我们只看效果就可。

```javascript
// 字符串
var str = "Hello";
console.log(str.toString());

// 数字
var num = 15.26540;
console.log(num.toString());

// 布尔
var bool = true;
console.log(bool.toString());

// Object
var obj = {name: "张三", age: 18};
console.log(obj.toString());

// 数组
var array = ["CodePlayer", true, 12, -5];
console.log(array.toString());

// 日期
var date = new Date(2013, 7, 18, 23, 11, 59, 230);
console.log(date.toString());

// 错误
var error = new Error("自定义错误信息");
console.log(error.toString());

// 函数
console.log(Function.toString());
123456789101112131415161718192021222324252627282930
```

![image-20201025111357084](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/fcd96b96c9fbddfbd9cf10abf61e3f3bpng.jpg)

#### 2.12.6、hasOwnProperty方法

前边章节我们学过，如何遍历一个对象所有的属性和值，那我们要是判断当前对象是否包含指定的属性或方法可以使用 in 运算符来检查，如下代码演示：

```javascript
// 创造一个构造函数
function MyClass() {
}

// 向MyClass的原型中添加一个name属性
MyClass.prototype.name = "我是原型中的名字";

// 创建一个MyClass的实例
var mc = new MyClass();
mc.age = 18;

// 使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true
console.log("age" in mc);
console.log("name" in mc);
1234567891011121314
```

![image-20201016094121739](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/ed4a1ac9124d59ad5f7eec341f0ced9bpng.jpg)

如果我只想要检查自身对象是否含有某个方法或属性，我们可以使用Object的hasOwnProperty()方法，它返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。如下代码演示：

```javascript
// 创造一个构造函数
function MyClass() {
}

// 向MyClass的原型中添加一个name属性
MyClass.prototype.name = "我是原型中的名字";

// 创建一个MyClass的实例
var mc = new MyClass();
mc.age = 18;

// 使用in检查对象中是否含有某个属性时，如果对象中没有但是原型中有，也会返回true
console.log("age" in mc);
console.log("name" in mc);

// 可以使用对象的hasOwnProperty()来检查对象自身中是否含有该属性，使用该方法只有当对象自身中含有属性时，才会返回true
console.log(mc.hasOwnProperty("age"));
console.log(mc.hasOwnProperty("name"));
123456789101112131415161718
```

![image-20201016094051484](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/37ce7132a03b05651d31d371388ceafcpng.jpg)

有同学可能会有疑问，我的这个MyClass类对象中没有hasOwnProperty这个方法啊，它是哪来的？对了，就是原型中的，在执行方法的时候它会通过原型链进行查找，这个方法是Object的特有方法，如下代码演示：

```javascript
// 创造一个构造函数
function MyClass() {
}

// 向MyClass的原型中添加一个name属性
MyClass.prototype.name = "我是原型中的名字";

// 创建一个MyClass的实例
var mc = new MyClass();
mc.age = 18;

// 检查当前对象
console.log(mc.hasOwnProperty("hasOwnProperty"));
// 检查当前对象的原型对象
console.log(mc.__proto__.hasOwnProperty("hasOwnProperty"));
// 检查当前对象的原型对象的原型对象
console.log(mc.__proto__.__proto__.hasOwnProperty("hasOwnProperty"));
1234567891011121314151617
```

![image-20201016094021988](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5f9ce8c1f05d0520821fb677e4d43d3dpng.jpg)

#### 2.12.7、对象继承

前边我们一直在说继承，那什么是继承？它有什么作用？如何实现继承？将会是本章节探讨的问题。

面向对象的语言有一个标志，那就是它们都有类的概念，而通过类可以创建任意多个具有相同属性和方法的对象。但是在JavaScript中没有类的概念，前边我们说所的类只是我们自己这么叫，大家要清楚。因此它的对象也与基于类的对象有所不同。实际上，JavaScript语言是通过一种叫做原型（prototype）的方式来实现面向对象编程的。

那实现继承有一个最大的好处就是子对象可以使用父对象的属性和方法，从而简化了一些代码。

JavaScript有六种非常经典的对象继承方式，但是我们只学习前三种：

+   **原型链继承**
+   **借用构造函数继承**
+   **组合继承（重要）**
+   原型式继承
+   寄生式继承
+   寄生组合式继承

##### 2.12.7.1、原型链继承

**核心思想：** 子类型的原型为父类型的一个实例对象

**基本做法：**

1.  定义父类型构造函数
2.  给父类型的原型添加方法
3.  定义子类型的构造函数
4.  创建父类型的对象赋值给子类型的原型
5.  将子类型原型的构造属性设置为子类型
6.  给子类型原型添加方法
7.  创建子类型的对象: 可以调用父类型的方法

**案例演示：**

```javascript
// 定义父类型构造函数
function SupperType() {
    this.supProp = 'Supper property';
}

// 给父类型的原型添加方法
SupperType.prototype.showSupperProp = function () {
    console.log(this.supProp);
};

// 定义子类型的构造函数
function SubType() {
    this.subProp = 'Sub property';
}

// 创建父类型的对象赋值给子类型的原型
SubType.prototype = new SupperType();

// 将子类型原型的构造属性设置为子类型
SubType.prototype.constructor = SubType;

// 给子类型原型添加方法
SubType.prototype.showSubProp = function () {
    console.log(this.subProp)
};

// 创建子类型的对象: 可以调用父类型的方法
var subType = new SubType();
subType.showSupperProp();
subType.showSubProp();
123456789101112131415161718192021222324252627282930
```

![image-20201025114537583](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/271175e6ef7dbd74950841229bf9fad8png.jpg)

**缺点描述：**

1.  原型链继承多个实例的引用类型属性指向相同，一个实例修改了原型属性，另一个实例的原型属性也会被修改
2.  不能传递参数
3.  继承单一

##### 2.12.7.2、借用构造函数继承

**核心思想：** 使用.call()和.apply()将父类构造函数引入子类函数，使用父类的构造函数来增强子类实例，等同于复制父类的实例给子类

**基本做法：**

1.  定义父类型构造函数
2.  定义子类型的构造函数
3.  给子类型的原型添加方法
4.  创建子类型的对象然后调用

**案例演示：**

借用构造函数继承的重点就在于SuperType\*\*.call(this, name)\*\*，调用了SuperType构造函数，这样，SubType的每个实例都会将SuperType中的属性复制一份。

```javascript
// 定义父类型构造函数
function SuperType(name) {
    this.name = name;
    this.showSupperName = function () {
        console.log(this.name);
    };
}

// 定义子类型的构造函数
function SubType(name, age) {
    // 在子类型中调用call方法继承自SuperType
    SuperType.call(this, name);
    this.age = age;
}

// 给子类型的原型添加方法
SubType.prototype.showSubName = function () {
    console.log(this.name);
};

// 创建子类型的对象然后调用
var subType = new SubType("孙悟空", 20);
subType.showSupperName();
subType.showSubName();
console.log(subType.name);
console.log(subType.age);
1234567891011121314151617181920212223242526
```

![image-20201025125050202](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7d612cee0ab18f595325ab2c387d066bpng.jpg)

**缺点描述：**

1.  只能继承父类的实例属性和方法，不能继承原型属性和方法
2.  无法实现构造函数的复用，每个子类都有父类实例函数的副本，影响性能，代码会臃肿

##### 2.12.7.3、组合继承

**核心思想：** 原型链+借用构造函数的组合继承

**基本做法：**

1.  利用原型链实现对父类型对象的方法继承
2.  利用super()借用父类型构建函数初始化相同属性

**案例演示：**

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.setName = function (name) {
    this.name = name;
};

function Student(name, age, price) {
    Person.call(this, name, age); // 为了得到父类型的实例属性和方法
    this.price = price; // 添加子类型私有的属性
}

Student.prototype = new Person(); // 为了得到父类型的原型属性和方法
Student.prototype.constructor = Student; // 修正constructor属性指向
Student.prototype.setPrice = function (price) { // 添加子类型私有的方法 
    this.price = price;
};

var s = new Student("孙悟空", 24, 15000);
console.log(s.name, s.age, s.price);
s.setName("猪八戒");
s.setPrice(16000);
console.log(s.name, s.age, s.price);
12345678910111213141516171819202122232425
```

![image-20201025131516264](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/ebfd2f10d2ac57f4c47d9cab0ea721d3png.jpg)

**缺点描述：**

1.  父类中的实例属性和方法既存在于子类的实例中，又存在于子类的原型中，不过仅是内存占用，因此，在使用子类创建实例对象时，其原型中会存在**两份相同的属性和方法** 。

> 注意：**这个方法是JavaScript中最常用的继承模式**。

#### 2.12.8、垃圾回收

垃圾回收（GC）：就像人生活的时间长了会产生垃圾一样，程序运行过程中也会产生垃圾，这些垃圾积攒过多以后，会导致程序运行的速度过慢，所以我们需要一个垃圾回收的机制，来处理程序运行过程中产生垃圾。

当一个对象没有任何的变量或属性对它进行引用，此时我们将永远无法操作该对象，此时这种对象就是一个垃圾，这种对象过多会占用大量的内存空间，导致程序运行变慢，所以这种垃圾必须进行清理。

在JS中拥有自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁，我们不需要也不能进行垃圾回收的操作，我们需要做的只是要将不再使用的对象设置null即可。

案例演示：

```javascript
// 使用构造函数来创建对象
function Person(name, age) {
    // 设置对象的属性
    this.name = name;
    this.age = age;
}

var person1 = new Person("孙悟空", 18);
var person2 = new Person("猪八戒", 19);
var person3 = new Person("沙和尚", 20);

person1 = null;
person2 = null;
person3 = null;
1234567891011121314
```

### 2.13、作用域

作用域指一个变量的作用的范围，在JS中一共有两种作用域：

+   全局作用域
+   函数作用域

#### 2.13.1、声明提前

+   变量的声明提前：使用var关键字声明的变量，会在所有的代码执行之前被声明（但是不会赋值），但是如果声明变量时不使用var关键字，则变量不会被声明提前
+   函数的声明提前：使用函数声明形式创建的函数 function 函数名(){} ，它会在所有的代码执行之前就被创建，所以我们可以在函数声明前来调用函数。使用函数表达式创建的函数，不会被声明提前，所以不能在声明前调用

#### 2.13.2、作用域

##### 2.13.2.1、全局作用域

+   直接编写在script标签中的JavaScript代码，都在全局作用域
+   全局作用域在页面打开时创建，在页面关闭时销毁
+   在全局作用域中有一个全局对象window，它代表的是一个浏览器的窗口，它由浏览器创建，我们可以直接使用
+   在全局作用域中：
    +   创建的变量都会作为window对象的属性保存
    +   创建的函数都会作为window对象的方法保存
+   全局作用域中的变量都是全局变量，在页面的任意的部分都可以访问的到

##### 2.13.2.2、函数作用域

+   调用函数时创建函数作用域，函数执行完毕以后，函数作用域销毁
+   每调用一次函数就会创建一个新的函数作用域，它们之间是互相独立的
+   在函数作用域中可以访问到全局作用域的变量，在全局作用域中无法访问到函数作用域的变量
+   在函数中要访问全局变量可以使用window对象
+   作用域链：当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用，如果没有则向上一级作用域中寻找，直到找到全局作用域，如果全局作用域中依然没有找到，则会报错ReferenceError

#### 2.13.3、作用域链

多个上下级关系的作用域形成的链，它的方向是从下向上的(从内到外)，查找变量时就是沿着作用域链来查找的。

查找一个变量的查找规则：

1.  在当前作用域下的执行上下文中查找对应的属性，如果有直接返回，否则进入2
2.  在上一级作用域的执行上下文中查找对应的属性，如果有直接返回，否则进入3
3.  再次执行2的相同操作，直到全局作用域，如果还找不到就抛出找不到的ReferenceError异常

## 第三章 JavaScript常用对象

### 3.1、数组对象

#### 3.1.1、概述

数组也是对象的一种，数组是一种用于表达有顺序关系的值的集合的语言结构，也就是同类数据元素的有序集合。

数组的存储性能比普通对象要好，在开发中我们经常使用数组来存储一些数据。但是在JavaScript中是支持数组可以是不同的元素，这跟JavaScript的弱类型有关，此处不用纠结，我们大多数时候都是相同类型元素的集合。数组内的各个值被称作元素，每一个元素都可以通过索引（下标）来快速读取，索引是从零开始的整数。

使用typeof检查一个数组对象时，会返回object。

#### 3.1.2、创建数组

##### 3.1.2.1、使用对象创建

+   同类型有序数组创建：
    
    ```javascript
    var arr = new Array();
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;
    arr[3] = 4;
    arr[4] = 5;
    arr[5] = 6;
    arr[6] = 7;
    arr[7] = 8;
    arr[8] = 9;
    12345678910
    ```
    
+   不同类型有序数组创建：
    
    ```javascript
    var arr = new Array();
    arr[0] = 1;
    arr[1] = "2";
    arr[2] = 3;
    arr[3] = "4";
    arr[4] = 5;
    arr[5] = "6";
    arr[6] = 7;
    arr[7] = "8";
    arr[8] = 9;
    12345678910
    ```
    

##### 3.1.2.2、使用字面量创建

+   同类型有序数组创建：
    
    ```javascript
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    1
    ```
    
+   不同类型有序数组创建：
    
    ```javascript
    var arr = [1, "2", 3, "4", 5, "6", 7, "8", 9];
    1
    ```
    

#### 3.1.3、遍历数组

```javascript
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
123
```

#### 3.1.4、数组属性

**constructor属性演示：返回创建数组对象的原型函数**

```javascript
var arr = [1,2,3,4];
console.log(arr.constructor);
12
```

![image-20201017213941462](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/8f49a659d0e70166f9ee1145e1dbe049png.jpg)

**length属性演示：设置或返回数组元素的个数**

```javascript
var arr = [1,2,3,4];
console.log(arr.length);
12
```

![image-20201017214117638](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1172a2fb68f41320ec3666883bb327f5png.jpg)

#### 3.1.5、数组方法

**push()方法演示：该方法可以向数组的末尾添加一个或多个元素，并返回数组的新的长度**

```javascript
var arr = ["孙悟空", "猪八戒", "沙和尚"];
var result = arr.push("唐僧", "蜘蛛精", "白骨精", "玉兔精");
console.log(arr);
console.log(result);
1234
```

![image-20201017215218010](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/60c6754052f36ea3327dffd544cb043dpng.jpg)

**pop()方法演示：该方法可以删除数组的最后一个元素，并将被删除的元素作为返回值返回**

```javascript
var arr = ["孙悟空", "猪八戒", "沙和尚"];
var result = arr.pop();
console.log(arr);
console.log(result);
1234
```

![image-20201017215359638](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/95b984fd2073b95d9346a91c815a5e0epng.jpg)

**unshift()方法演示：该方法向数组开头添加一个或多个元素，并返回新的数组长度**

```javascript
var arr = ["孙悟空", "猪八戒", "沙和尚"];
var result = arr.unshift("牛魔王", "二郎神");
console.log(arr);
console.log(result);
1234
```

![image-20201017215527496](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/be982aa90c138ffcdab2704bcc361781png.jpg)

**shift()方法演示：该方法可以删除数组的第一个元素，并将被删除的元素作为返回值返回**

```javascript
var arr = ["孙悟空", "猪八戒", "沙和尚"];
var result = arr.shift();
console.log(arr);
console.log(result);
1234
```

![image-20201017215800977](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/b3b9add996d6cd71833c58d1f7320fa8png.jpg)

**forEach()方法演示：该方法可以用来遍历数组**

forEach()方法需要一个函数作为参数，像这种函数，由我们创建但是不由我们调用的，我们称为回调函数。数组中有几个元素函数就会执行几次，每次执行时，浏览器会将遍历到的元素，以实参的形式传递进来，我们可以来定义形参，来读取这些内容，浏览器会在回调函数中传递三个参数：

+   第一个参数：就是当前正在遍历的元素
+   第二个参数：就是当前正在遍历的元素的索引
+   第三个参数：就是正在遍历的数组

> 注意：这个方法只支持IE8以上的浏览器，IE8及以下的浏览器均不支持该方法，所以如果需要兼容IE8，则不要使用forEach()，还是使用for循环来遍历数组。

```javascript
var arr = ["孙悟空", "猪八戒", "沙和尚"];
arr.forEach(function (value, index, obj) {
    console.log(value + " #### " + index + " #### " + obj);
});
1234
```

![image-20201017220618530](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1491731826e5186fc73117c0a22168capng.jpg)

**slice()方法演示：该方法可以用来从数组提取指定元素，该方法不会改变元素数组，而是将截取到的元素封装到一个新数组中返回**

参数：

+   第一个参数：截取开始的位置的索引，包含开始索引
+   第二个参数：截取结束的位置的索引，不包含结束索引，第二个参数可以省略不写，此时会截取从开始索引往后的所有元素

> 注意：索引可以传递一个负值，如果传递一个负值，则从后往前计算，-1代表倒数第一个，-2代表倒数第二个。

```javascript
var arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧", "白骨精"];
var result = arr.slice(1, 4);
console.log(result);
result = arr.slice(3);
console.log(result);
result = arr.slice(1, -2);
console.log(result);
1234567
```

![image-20201018090855439](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/af3eca172b1f9a09afe0e89e11233427png.jpg)

**splice()方法演示：该方法可以用于删除数组中的指定元素，该方法会影响到原数组，会将指定元素从原数组中删除，并将被删除的元素作为返回值返回**

参数：

+   第一个参数：表示开始位置的索引
+   第二个参数：表示要删除的元素数量
+   第三个参数及以后参数：可以传递一些新的元素，这些元素将会自动插入到开始位置索引前边

```javascript
var arr = ["孙悟空", "猪八戒", "沙和尚", "唐僧", "白骨精"];
var result = arr.splice(3, 2);
console.log(arr);
console.log(result);
result = arr.splice(1, 0, "牛魔王", "铁扇公主", "红孩儿");
console.log(arr);
console.log(result);
1234567
```

![image-20201018091447071](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/973021f3443e6cc3713096844e34b34cpng.jpg)

**concat()方法演示：该方法可以连接两个或多个数组，并将新的数组返回，该方法不会对原数组产生影响**

```javascript
var arr = ["孙悟空", "猪八戒", "沙和尚"];
var arr2 = ["白骨精", "玉兔精", "蜘蛛精"];
var arr3 = ["二郎神", "太上老君", "玉皇大帝"];
var result = arr.concat(arr2, arr3, "牛魔王", "铁扇公主");
console.log(result);
12345
```

![image-20201018122134527](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/120019a2720a1c90c0b2329d4b091cb6png.jpg)

**join()方法演示：该方法可以将数组转换为一个字符串，该方法不会对原数组产生影响，而是将转换后的字符串作为结果返回，在join()中可以指定一个字符串作为参数，这个字符串将会成为数组中元素的连接符，如果不指定连接符，则默认使用，作为连接符**

```javascript
var arr = ["孙悟空", "猪八戒", "沙和尚"];
var result = arr.join("@-@");
console.log(result);
123
```

![image-20201018122403396](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5811554c3d6d35aabb3f52987105e670png.jpg)

**reverse()方法演示：该方法用来反转数组（前边的去后边，后边的去前边），该方法会直接修改原数组**

```javascript
var arr = ["孙悟空", "猪八戒", "沙和尚"];
arr.reverse();
console.log(arr);
123
```

![image-20201018122520134](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/34bacc5af63153051f76f84d7ee26f77png.jpg)

**sort()方法演示：该方法可以用来对数组中的元素进行排序，也会影响原数组，默认会按照Unicode编码进行排序**

```javascript
var arr = ["b", "c", "a"];
arr.sort();
console.log(arr);
123
```

![image-20201018123042465](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/db95fb3820a83603a26c63b69390f36apng.jpg)

> 注意：即使对于纯数字的数组，使用sort()排序时，也会按照Unicode编码来排序，所以对数字进排序时，可能会得到错误的结果。

```javascript
var arr = [1, 3, 2, 11, 5, 6];
arr.sort();
console.log(arr);
123
```

![image-20201018123124230](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/e98b67bf841338e267d01bd8c62983aapng.jpg)

我们可以自己来指定排序的规则，我们可以在sort()添加一个回调函数，来指定排序规则，回调函数中需要定义两个形参，浏览器将会分别使用数组中的元素作为实参去调用回调函数，使用哪个元素调用不确定，但是肯定的是在数组中a一定在b前边，浏览器会根据回调函数的返回值来决定元素的顺序，如下：

+   如果返回一个大于0的值，则元素会交换位置
+   如果返回一个小于0的值，则元素位置不变
+   如果返回一个等于0的值，则认为两个元素相等，也不交换位置

经过上边的规则，我们可以总结下：

+   如果需要升序排列，则返回 a-b
+   如果需要降序排列，则返回 b-a

```javascript
var arr = [1, 3, 2, 11, 5, 6];
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);
12345
```

![image-20201018123008856](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/34c00685a1202d972e6671b68f991113png.jpg)

### 3.2、函数对象

#### 3.2.1、call()和apply()

call()和apply()这两个方法都是函数对象的方法，需要通过函数对象来调用，当对函数调用call()和apply()都会调用函数执行，在调用call()和apply()可以将一个对象指定为第一个参数，此时这个对象将会成为函数执行时的this，call()方法可以将实参在对象之后依次传递，apply()方法需要将实参封装到一个数组中统一传递，如下演示：

**call()方法演示：**

```javascript
function fun(a, b) {
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("fun = " + this);
}

var obj = {
    name: "obj",
    sayName: function () {
        console.log(this.name);
    }
};

fun(2, 3);
console.log("===============");
fun.call(obj, 2, 3);
12345678910111213141516
```

![image-20201018124051021](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/da527e001d6012e35dd18019c1459543png.jpg)

> 注意：默认fun()函数调用，this指向的是window对象，你可以使用call()调用函数，在调用的时候传入一个对象，这个对象就是this所指向的对象，也就是说，可以自己指定this的指向，然后从第二个参数开始，实参将会依次传递

**apply()方法演示：**

```javascript
function fun(a, b) {
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("fun = " + this);
}

var obj = {
    name: "obj",
    sayName: function () {
        console.log(this.name);
    }
};

fun(2, 3);
console.log("===============");
fun.apply(obj, [2, 3]);
12345678910111213141516
```

![image-20201018123915931](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/282e3e52c230dfb489ee7b6d1ae0f1a9png.jpg)

> 注意：默认fun()函数调用，this指向的是window对象，你可以使用apply()调用函数，在调用的时候传入一个对象，这个对象就是this所指向的对象，也就是说，可以自己指定this的指向，然后从第二个参数开始，需要制定一个实参数组进行参数传递

#### 3.2.2、this指向

+   以函数形式调用时，this永远都是window
+   以方法的形式调用时，this是调用方法的对象
+   以构造函数的形式调用时，this是新创建的那个对象
+   使用call和apply调用时，this是传入的那个指定对象

#### 3.2.3、arguments参数

在调用函数时，浏览器每次都会传递进两个隐含的参数：

1.  函数的上下文对象： **this**
2.  封装实参的对象： **arguments**

this对象我们已经学习过了，那arguments对象是什么呢？

arguments是一个类数组对象，它也可以通过索引来操作数据，也可以获取长度，在调用函数时，我们所传递的实参都会在arguments中保存，比如：arguments.length 可以用来获取实参的长度，我们即使不定义形参，也可以通过arguments来使用实参，只不过比较麻烦，例如：

+   arguments\[0\]：表示第一个实参
+   arguments\[1\]：表示第二个实参
+   …

它里边有一个属性叫做callee，这个属性对应一个函数对象，就是当前正在指向的函数的对象。

**arguments对象演示：**

```javascript
function fun(a, b) {
    // 通过下标获取第一个参数
    console.log(arguments[0]);
    // 通过下标获取第二个参数
    console.log(arguments[1]);
    // 获取实参的个数
    console.log(arguments.length);
    // 看看它的函数对象
    console.log(arguments.callee);
    console.log(arguments.callee == fun);
}

fun("Hello", "World");
12345678910111213
```

![image-20201018125309350](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/192c79f0a5773ec31e84d6bf6c65eaa3png.jpg)

### 3.3、Date对象

在JavaScript中使用Date对象来表示一个时间，如果直接使用构造函数创建一个Date对象，则会封装为当前代码执行的时间。

**案例演示：**

```javascript
var date = new Date();
console.log(date);

console.log(date.getFullYear());//获取当前日期对象的年份(四位数字年份)
console.log(date.getMonth());//获取当前日期对象的月份(0 ~ 11)
console.log(date.getDate());//获取当前日期对象的日数(1 ~ 31)
console.log(date.getHours());//获取当前日期对象的小时(0 ~ 23)
console.log(date.getMinutes());//获取当前日期对象的分钟(0 ~ 59)
console.log(date.getSeconds());//获取当前日期对象的秒钟(0 ~ 59)
console.log(date.getMilliseconds());//获取当前日期对象的毫秒(0 ~ 999)
12345678910
```

![image-20201018130252223](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/bdce49b19b915ee531e1ca326b684f40png.jpg)

**更多方法：** [参考网站](https://www.w3school.com.cn/js/jsref_obj_date.asp)

### 3.4、Math对象

Math和其它的对象不同，它不是一个构造函数，它属于一个工具类不用创建对象，它里边封装了数学运算相关的属性和方法。

**案例演示：**

```javascript
/*固定值*/
console.log("PI = " + Math.PI);
console.log("E  = " + Math.E);
console.log("===============");
/*正数*/
console.log(Math.abs(1));        //可以用来计算一个数的绝对值
console.log(Math.ceil(1.1));     //可以对一个数进行向上取整，小数位只有有值就自动进1
console.log(Math.floor(1.99));   //可以对一个数进行向下取整，小数部分会被舍掉
console.log(Math.round(1.4));    //可以对一个数进行四舍五入取整
console.log("===============");
/*负数*/
console.log(Math.abs(-1));       //可以用来计算一个数的绝对值
console.log(Math.ceil(-1.1));    //可以对一个数进行向上取整，小数部分会被舍掉
console.log(Math.floor(-1.99));  //可以对一个数进行向下取整，小数位只有有值就自动进1
console.log(Math.round(-1.4));   //可以对一个数进行四舍五入取整
console.log("===============");
/*随机数*/
//Math.random()：可以用来生成一个0-1之间的随机数
//生成一个0-x之间的随机数：Math.round(Math.random()*x)
//生成一个x-y之间的随机数：Math.round(Math.random()*(y-x)+x)
console.log(Math.round(Math.random() * 10));            //生成一个0-10之间的随机数
console.log(Math.round(Math.random() * (10 - 1) + 1));  //生成一个1-10之间的随机数
console.log("===============");
/*数学运算*/
console.log(Math.pow(12, 3));   //Math.pow(x,y)：返回x的y次幂
console.log(Math.sqrt(4));      //Math.sqrt(x) ：返回x的平方根
1234567891011121314151617181920212223242526
```

![image-20201018132005284](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0ae2f3c2b632fadb6328eba8f1b499afpng.jpg)

**更多方法：** [参考网站](https://www.w3school.com.cn/jsref/jsref_obj_math.asp)

### 3.5、String对象

#### 3.5.1、概述

在JS中为我们提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象

+   String()：可以将基本数据类型字符串转换为String对象
+   Number()：可以将基本数据类型的数字转换为Number对象
+   Boolean()：可以将基本数据类型的布尔值转换为Boolean对象

但是注意：我们在实际应用中不会使用基本数据类型的对象，如果使用基本数据类型的对象，在做一些比较时可能会带来一些不可预期的结果，在这一章节中，我们重点介绍String()对象的属性和方法。

#### 3.5.2、字符串属性

**constructor属性演示：返回创建字符串对象的原型函数**

```javascript
var str = "Hello,World!";
console.log(str.constructor);
12
```

![image-20201018152739858](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/485ae6120999b6c7cb7d9df6702a06b6png.jpg)

**length属性演示：可以用来获取字符串的长度**

```javascript
var str = "Hello,World!";
console.log(str.length);
12
```

![image-20201018152511480](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/19386d2fbe5f04e6f02113d4ca176429png.jpg)

#### 3.5.3、字符串方法

**charAt()方法演示：该方法可以根据索引获取指定位置的字符**

```javascript
var str = "Hello,World!";
console.log(str.charAt(1));
12
```

![image-20201018153002150](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5295ae7dd8912bab0f5d39208c1f4586png.jpg)

**charCodeAt()方法演示：该方法获取指定位置字符的字符编码（Unicode编码）**

```javascript
var str = "Hello,World!";
console.log(str.charCodeAt(1));
12
```

![image-20201018153218872](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/4865db268f43c98c4d83934d648cb0bfpng.jpg)

**concat()方法演示：该方法可以用来连接两个或多个字符串**

```javascript
var str = "Hello,World!";
console.log(str.concat("你好，", "世界！"));
12
```

![image-20201018153504935](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/8332eae34dc65f6a7a4becf8d1477e3dpng.jpg)

**indexof()方法演示：该方法可以检索一个字符串中是否含有指定内容，如果字符串中含有该内容，则会返回其第一次出现的索引，如果没有找到指定的内容，则返回-1，可以指定一个第二个参数，指定开始查找的位置**

```javascript
var str = "Hello,World!";
console.log(str.indexOf("o"));
console.log(str.indexOf("o", 5));
123
```

![image-20201018160212146](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/fa866e93f3c23a1834b61cab89fc25f1png.jpg)

**lastIndexOf()方法演示：该方法的用法和indexOf()一样，不同的是indexOf是从前往后找，而lastIndexOf是从后往前找，也可以指定开始查找的位置**

```javascript
var str = "Hello,World!";
console.log(str.lastIndexOf("o"));
console.log(str.lastIndexOf("o", 5));
123
```

**slice()方法演示：可以从字符串中截取指定的内容，不会影响原字符串，而是将截取到内容返回**

参数：

+   第一个参数：开始位置的索引（包括开始位置）
+   第二个参数：结束位置的索引（不包括结束位置），如果省略第二个参数，则会截取到后边所有的

> 注意：也可以传递一个负数作为参数，负数的话将会从后边计算

```javascript
var str = "Hello,World!";
var result = str.slice(1, 4);
console.log(result);
result = str.slice(1);
console.log(result);
result = str.slice(1, -1);
console.log(result);
1234567
```

![image-20201018160909634](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/e511ca80c806870dbb41d8996a4f5e19png.jpg)

**substring()方法演示：可以用来截取一个字符串，它和slice()类似**

参数：

+   第一个参数：开始截取位置的索引（包括开始位置）
+   第二个参数：结束位置的索引（不包括结束位置），如果省略第二个参数，则会截取到后边所有的

> 注意：不同的是这个方法不能接受负值作为参数，如果传递了一个负值，则默认使用0，而且它还自动调整参数的位置，如果第二个参数小于第一个，则自动交换

```javascript
var str = "Hello,World!";
var result = str.substring(1, 4);
console.log(result);
result = str.substring(1);
console.log(result);
result = str.substring(1, -1);
console.log(result);
1234567
```

![image-20201018160942481](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2d1d02ba104e6fec12e2a6072fbc0c65png.jpg)

**substr()方法演示：该方法用来截取字符串**

参数：

+   第一个参数：截取开始位置的索引
+   第二个参数：截取的长度

```javascript
var str = "Hello,World!";
var result = str.substr(6, 6);
console.log(result);
123
```

![image-20201018161859192](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d1fa1c7e2d94073a62d84e58866f7f04png.jpg)

**split()方法演示：该方法可以将一个字符串拆分为一个数组，需要一个字符串作为参数，将会根据该字符串去拆分数组**

```javascript
var str = "Hello,World!";
var result = str.split(",");
console.log(result);
123
```

![image-20201018162029011](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/3e912157eee7fccacbf1378b676275dcpng.jpg)

**toUpperCase()方法演示：将一个字符串转换为大写并返回**

```javascript
var str = "Hello,World!";
var result = str.toUpperCase();
console.log(result);
123
```

![image-20201018162118218](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7a85c2e38db55aa7b748d139a2461f4epng.jpg)

**toLowerCase()方法演示：将一个字符串转换为小写并返回**

```javascript
var str = "Hello,World!";
var result = str.toLowerCase();
console.log(result);
123
```

![image-20201018162241087](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d8286a749aece3a740ae7c4e1c040c91png.jpg)

### 3.6、RegExp对象

#### 3.6.1、概述

正则表达式用于定义一些字符串的规则，计算机可以根据正则表达式，来检查一个字符串是否符合规则，获取将字符串中符合规则的内容提取出来。

使用typeof检查正则对象，会返回object。

#### 3.6.2、创建正则对象

##### 3.6.2.1、使用对象创建

**语法格式：**

```javascript
var 变量名 = new RegExp("正则表达式","匹配模式");
1
```

**匹配模式：**

+   i：忽略大小写
+   g：全局匹配模式
+   ig：忽略大小写且全局匹配模式

**案例演示：**

```javascript
// 这个正则表达式可以来检查一个字符串中是否含有a
var reg = new RegExp("ab", "i");
var str = "Abc";
var result = reg.test(str);
console.log(result);
12345
```

![image-20201018163156692](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2108318f3960c8e317794e5bc557af1fpng.jpg)

##### 3.6.2.2、使用字面量创建

**语法格式：**

```javascript
var 变量名 = /正则表达式/匹配模式;
1
```

**匹配模式：**

+   i：忽略大小写
+   g：全局匹配模式
+   m：执行多行匹配

> 注意：可以为一个正则表达式设置多个匹配模式，且顺序无所谓

**案例演示：**

```javascript
// 这个正则表达式可以来检查一个字符串中是否含有a
var reg = /a/i;
var str = "Abc";
var result = reg.test(str);
console.log(result);
12345
```

![image-20201018163156692](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2108318f3960c8e317794e5bc557af1fpng.jpg)

#### 3.6.3、正则进阶

**需求信息：创建一个正则表达式，检查一个字符串中是否有a或b**

**语法格式：使用 | 表示或者的意思**

```javascript
// 这个正则表达式可以来检查一个字符串中是否含有a
var reg = /a|b|c/;
var str = "Abc";
var result = reg.test(str);
console.log(result);
12345
```

![image-20201018164941099](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2edc1bf1a2db6809dd444f2eca4ae3aepng.jpg)

试想一下，如果我们现在要是想要检查一个字符串是否含有小写字母，那我们是不是可以`reg = /a|b|c|d|e|f|g ... /;`这么写，但是你会发现，好啰嗦啊，怎么这么麻烦呢，有没有一种更简单的方式，答案是肯定的。

**需求信息：创建一个正则表达式，检查一个字符串中是否有字母**

**语法格式：\[ \] 里的内容也是或的关系**

```javascript
// 这个正则表达式可以来检查一个字符串中是否含有字母
var reg = /[A-z]/;
var str = "Abc";
var result = reg.test(str);
console.log(result);
12345
```

![image-20201018171936882](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/b0d204b7b478194969ee5fda6927c05epng.jpg)

**常见组合：**

+   \[a-z\]：任意小写字母
+   \[A-Z\]：任意大写字母
+   \[A-z\]：任意字母
+   \[0-9\]：任意数字

**需求信息：创建一个正则表达式，检查一个字符串中是否含有 abc 或 adc 或 aec**

```javascript
// 这个正则表达式可以来检查一个字符串中是否含有abc或adc或aec
var reg = /a[bde]c/;
var str = "abc123";
var result = reg.test(str);
console.log(result);
12345
```

那现在我们已经学会了判断是否包含，那要是判断除了某些字符序列该咋整，只需要这么写`[^字符序列]`

**常见组合：**

+   \[^a-z\]：除了任意小写字母
+   \[^A-Z\]：除了任意大写字母
+   \[^A-z\]：除了任意字母
+   \[^0-9\]：除了任意数字

**需求信息：创建一个正则表达式，检查一个字符串中是否除了数字还有其它字母**

```javascript
// 这个正则表达式可以来检查一个字符串中是否除了数字还有其它字母
var reg = /[^0-9]/;
var str = "0123456789";
var result = reg.test(str);
console.log(result);
12345
```

#### 3.6.4、正则方法

这些正则方法其实都是字符串的方法，但是它的参数需要传递正则表达式，在这里，我就先称为正则方法。

**split()方法演示：该方法可以将一个字符串拆分为一个数组，方法中可以传递一个正则表达式作为参数，这样方法将会根据正则表达式去拆分字符串，这个方法即使不指定全局匹配，也会全都插分**

```javascript
var str = "1a2b3c4d5e6f7";
var result = str.split(/[A-z]/);
console.log(result);
123
```

![image-20201018212920528](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/14e16f58bb2247c4cecf61779de64173png.jpg)

**search()方法演示：该方法可以搜索字符串中是否含有指定内容，如果搜索到指定内容，则会返回第一次出现的索引，如果没有搜索到返回-1，它可以接受一个正则表达式作为参数，然后会根据正则表达式去检索字符串，serach()只会查找第一个，即使设置全局匹配也没用**

```javascript
var str = "hello abc hello aec afc";
var result = str.search(/a[bef]c/);
console.log(result);
123
```

![image-20201018213217017](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/605e9fe75141f5a471587da33ef3e3ffpng.jpg)

**match()方法演示：该方法可以根据正则表达式，从一个字符串中将符合条件的内容提取出来，默认情况下我们的match()只会找到第一个符合要求的内容，找到以后就停止检索，我们可以设置正则表达式为全局匹配模式，这样就会匹配到所有的内容，可以为一个正则表达式设置多个匹配模式，且顺序无所谓，match()会将匹配到的内容封装到一个数组中返回，即使只查询到一个结果**

```javascript
var str = "1a2a3a4a5e6f7A8B9C";
var result = str.match(/[a-z]/ig);
console.log(result);
123
```

![image-20201018213447809](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/c5ffe27feeeb1f896d8e00fbbf05c2a8png.jpg)

**replace()方法演示：该方法可以将字符串中指定内容替换为新的内容，默认只会替换第一个，但是可以设置全局匹配替换全部**

参数：

+   第一个参数：被替换的内容，可以接受一个正则表达式作为参数
+   第二个参数：新的内容

```javascript
var str = "1a2a3a4a5e6f7A8B9C";
var result = str.replace(/[a-z]/gi, "@_@");
console.log(result);
123
```

![image-20201018213653322](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/31170d152f7423e07006a59d91d02a96png.jpg)

#### 3.6.5、正则量词

通过量词可以设置一个内容出现的次数，量词只对它前边的一个内容起作用，如果有多个内容可以使用 `()` 括起来，常见量词如下：

+   `{n}` ：正好出现n次
+   `{m,}` ：出现m次及以上
+   `{m,n}` ：出现m-n次
+   `+` ：至少一个，相当于{1,}
+   `*` ：0个或多个，相当于{0,}
+   `?` ：0个或1个，相当于{0,1}

```javascript
var str = "abbc";

reg = /(ab){3}/;
console.log(reg.test(str));
console.log("===============");
reg = /b{3}/;
console.log(reg.test(str));
console.log("===============");
reg = /ab{1,3}c/;
console.log(reg.test(str));
console.log("===============");
reg = /ab{3,}c/;
console.log(reg.test(str));
console.log("===============");
reg = /ab+c/;
console.log(reg.test(str));
console.log("===============");
reg = /ab*c/;
console.log(reg.test(str));
console.log("===============");
reg = /ab?c/;
console.log(reg.test(str));
console.log("===============");
1234567891011121314151617181920212223
```

![image-20201018214346309](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/95b8c4015a838557081e8a397514bdfbpng.jpg)

#### 3.6.6、正则高阶

如果我们要检查或者说判断是否以某个字符或者字符序列开头或者结尾就会使用`^`和`$`。

+   `^` ：表示开头，注意它在`[^字符序列]`表达的意思不一样
+   `$` ：表示结尾

**需求描述：检查一个字符串中是否以a开头**

```javascript
var str = "abcabca";
var reg = /^a/;
console.log(reg.test(str));
123
```

![image-20201018214857304](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/42bd66ca8f929a71d020f432ea7b7eecpng.jpg)

**需求描述：检查一个字符串中是否以a结尾**

```javascript
var str = "abcabca";
var reg = /a$/;
console.log(reg.test(str));
123
```

![image-20201018214953184](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0f318d3bc87e6d48b327faeba41e8cefpng.jpg)

那如果我们想要检查一个字符串中是否含有`.`和`\`就会使用转义字符

+   `\.` ：表示`.`
+   `\\` ：表示`\`

> 注意：使用构造函数时，由于它的参数是一个字符串，而`\`是字符串中转义字符，如果要使用`\`则需要使用`\\`来代替

```javascript
var reg1 = /\./;
var reg2 = /\\/;
var reg3 = new RegExp("\\.");
var reg4 = new RegExp("\\\\");
1234
```

除了以上两种特殊的字符，其实还有很多如下所示：

+   `\w` ：任意字母、数字、\_，相当于\[A-z0-9\_\]
+   `\W` ：除了字母、数字、\_，相当于\[^A-z0-9\_\]
+   `\d` ：任意的数字，相当于`[0-9]`
+   `\D` ：除了任意的数字，相当于`[^0-9]`
+   `\s` ：空格
+   `\S` ：除了空格
+   `\b` ：单词边界
+   `\B` ：除了单词边界

这里边我们就演示最后四个，其它的都比较简单，后边的案例也会涉及，这里就不演示了

**需求描述：创建一个正则表达式，去除掉字符串中的前后的空格**

```javascript
var str = "  hello child  "
var reg = /^\s*|\s*$/g;
console.log(str);
str = str.replace(reg, "");
console.log(str);
12345
```

![image-20201018220522294](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/4ddfc4c3849680f9ded6a9e8f760c12cpng.jpg)

**需求描述：创建一个正则表达式，检查一个字符串中是否含有单词child**

```javascript
var str = "hello child"
var reg = /\bchild\b/;
console.log(reg.test(str));
123
```

![image-20201018220305875](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/e5db1925a0c4519ca632c395f79a3b49png.jpg)

#### 3.6.7、正则案例

##### 3.6.7.1、检查手机号

```javascript
var phoneStr = "15131494600";
var phoneReg = /^1[3-9][0-9]{9}$/;
console.log(phoneReg.test(phoneStr));
123
```

![image-20201018220305875](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/a4ed498456f52b65de7dbd430be842aapng.jpg)

##### 3.6.7.2、检查邮箱号

```javascript
var emailStr = "abc.def@163.com";
var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
console.log(emailReg.test(emailStr));
123
```

![image-20201018220717578](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/baaee167deb449e943525a6cc913e777png.jpg)

## 第四章 JavaScript DOM

### 4.1、DOM概述

当网页被加载时，浏览器会创建页面的文档对象模型（**D**ocument **O**bject **M**odel）。

HTML **DOM** 模型被结构化为 **对象树** ：

![image-20201019104459658](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/692d9656624ef3f02c027689394de01apng.jpg)

通过这个对象模型，JavaScript 获得创建动态 HTML 的所有力量：

+   JavaScript 能改变页面中的所有 HTML 元素
+   JavaScript 能改变页面中的所有 HTML 属性
+   JavaScript 能改变页面中的所有 CSS 样式
+   JavaScript 能删除已有的 HTML 元素和属性
+   JavaScript 能添加新的 HTML 元素和属性
+   JavaScript 能对页面中所有已有的 HTML 事件作出反应
+   JavaScript 能在页面中创建新的 HTML 事件

换言之：HTML DOM 是关于如何获取、更改、添加或删除 HTML 元素的标准。

### 4.2、DOM文档节点

#### 4.2.1、节点概述

节点Node，是构成我们网页的最基本的组成部分，网页中的每一个部分都可以称为是一个节点。

比如：html标签、属性、文本、注释、整个文档等都是一个节点。

虽然都是节点，但是实际上它们的具体类型是不同的。

比如：标签我们称为元素节点、属性称为属性节点、文本称为 文本节点、文档称为文档节点。

节点的类型不同，属性和方法也都不尽相同。

节点：Node——构成HTML文档最基本的单元。

常用节点分为四类：

+   文档节点：整个HTML文档
+   元素节点：HTML文档中的HTML标签
+   属性节点：元素的属性
+   文本节点：HTML标签中的文本内容

![image-20201019115515595](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/06b24a28f3035b4e793b9ff9861d427dpng.jpg)

#### 4.2.2、节点属性

![image-20201019115655478](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/b0533b79858af882463802e6bf787cb0png.jpg)

#### 4.2.3、文档节点

文档节点（Document）代表的是整个HTML文 档，网页中的所有节点都是它的子节点。

document对象作为window对象的属性存在的，我们不用获取可以直接使用。

通过该对象我们可以在整个文档访问内查找节点对象，并可以通过该对象创建各种节点对象。

#### 4.2.4、元素节点

HTML中的各种标签都是元素节点（Element），这也是我们最常用的一个节点。

浏览器会将页面中所有的标签都转换为一个元素节点， 我们可以通过document的方法来获取元素节点。

例如：`document.getElementById()`，根据id属性值获取一个元素节点对象。

#### 4.2.5、属性节点

属性节点（Attribute）表示的是标签中的一个一个的属 性，这里要注意的是属性节点并非是元素节点的子节点，而是元素节点的一部分。可以通过元素节点来获取指定的属性节点。

例如：`元素节点.getAttributeNode("属性名")`，根据元素节点的属性名获取一个属性节点对象。

> 注意：我们一般不使用属性节点。

#### 4.2.6、文本节点

文本节点（Text）表示的是HTML标签以外的文本内容，任意非HTML的文本都是文本节点，它包括可以字面解释的纯文本内容。文本节点一般是作为元素节点的子节点存在的。获取文本节点时，一般先要获取元素节点，在通过元素节点获取文本节点。

例如：`元素节点.firstChild;`，获取元素节点的第一个子节点，一般为文本节点。

### 4.3、DOM文档操作

文档对象代表您的网页,，如果您希望访问 HTML 页面中的任何元素，那么您总是从访问 document 对象开始。

下面是一些如何使用 document 对象来访问和操作 HTML 的实例。

#### 4.3.1、查找 HTML 元素

##### 4.3.1.1、方法介绍

| 方法 | 描述 |
| :-- | :-- |
| document.getElementById(*id*) | 通过元素 id 来查找元素。 |
| document.getElementsByTagName(*name*) | 通过标签名来查找元素。 |
| document.getElementsByClassName(*name*) | 通过类名来查找元素。 |
| document.querySelector(*CSS选择器*) | 通过CSS选择器选择一个元素。 |
| document.querySelectorAll(*CSS选择器*) | 通过CSS选择器选择多个元素。 |

##### 4.3.1.2、方法演示

**需求描述：创建一个按钮，通过id获取按钮节点对象**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn">我是按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.getElementById("btn");
    console.log(btn);
</script>
</body>
</html>
12345678910111213141516
```

![image-20201019140936584](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/000652ac19dfacaaab6388734f3cc64apng.jpg)

**需求描述：创建一个按钮，通过标签名获取按钮节点对象数组**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button>我是按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.getElementsByTagName("button");
    console.log(btn);
</script>
</body>
</html>
12345678910111213141516
```

![image-20201019141202534](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/368f303c902a546c0ee8b767bc78be42png.jpg)

**需求描述：创建一个按钮，通过类名获取按钮节点对象数组**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button class="btn">我是按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.getElementsByClassName("btn");
    console.log(btn);
</script>
</body>
</html>
12345678910111213141516
```

![image-20201019141405002](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/411cd3af18a0de17befcc9287cc2660fpng.jpg)

**需求描述：创建一个按钮，通过CSS选择器选择该按钮**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button class="btn">我是按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.querySelector(".btn");
    console.log(btn);
</script>
</body>
</html>
12345678910111213141516
```

![image-20201020090857926](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/9b95669acc890ae50ae5bd251c31af8apng.jpg)

**需求描述：创建一个无序列表，通过CSS选择器选择该列表的所有li**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<ul class="list">
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    <li>列表项4</li>
</ul>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var list = document.querySelectorAll(".list li");
    console.log(list);
</script>
</body>
</html>
123456789101112131415161718192021
```

![image-20201020091354415](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/31841364c2e3fff0d6ea30bd28dacd4apng.jpg)

#### 4.3.2、获取 HTML 的值

##### 4.3.2.1、方法介绍

| 方法 | 描述 |
| :-- | :-- |
| 元素节点.innerText | 获取 HTML 元素的 inner Text。 |
| 元素节点.innerHTML | 获取 HTML 元素的 inner HTML。 |
| 元素节点.属性 | 获取 HTML 元素的属性值。 |
| 元素节点.getAttribute(*attribute*) | 获取 HTML 元素的属性值。 |
| 元素节点.style.样式 | 获取 HTML 元素的行内样式值。 |

##### 4.3.2.2、方法演示

**需求描述：创建一个按钮，然后获取按钮的文本内容**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn">我是按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.getElementById("btn");
    console.log(btn.innerText);
</script>
</body>
</html>
12345678910111213141516
```

![image-20201020093332082](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/cc6d9de248ba3375f222ad6917d1c3aapng.jpg)

**需求描述：创建一个div，然后在div中插入一个h1标题，获取div中的html代码**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box">
    <h1>我是Box中的大标题</h1>
</div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box = document.getElementById("box");
    console.log(box.innerHTML);
</script>
</body>
</html>
123456789101112131415161718
```

![image-20201020093459855](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d6e84ffcf4914483b628a370a8c8ac90png.jpg)

**需求描述：创建一个超链接，默认为空，设置href属性为`https://www.baidu.com` ，使用JavaScript代码读取href属性**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a id="a" href="https://www.baidu.com">打开百度，你就知道！</a>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var a = document.getElementById("a");
    console.log(a.href);
</script>
</body>
</html>
12345678910111213141516
```

![image-20201020093633259](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/a93f87adfce864c6e4e8d84e3323e45dpng.jpg)

**需求描述：创建一个超链接，默认为空，设置href属性为`https://www.baidu.com` ，使用JavaScript代码读取href属性**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a id="a" href="https://www.baidu.com">打开百度，你就知道！</a>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var a = document.getElementById("a");
    console.log(a.getAttribute("href"));
</script>
</body>
</html>
12345678910111213141516
```

![image-20201020093817197](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/dd4a71b449fc312f9e40a499741f65acpng.jpg)

**需求描述：创建一个正方形div，默认颜色为红色，使用JavaScript代码获取div的宽度**

> 注意：如果CSS的样式名中含有-，这种名称在JS中是不合法的比如background-color，需要将这种样式名修改为驼峰命名法，去掉-，然后将-后的字母大写，我们通过style属性设置的样式都是行内样式，同样的获取也是行内样式，而行内样式有较高的优先级，所以通过JS修改的样式往往会立即显示，但是如果在样式中写了!important，则此时样式会有最高的优先级，即使通过JS也不能覆盖该样式，此时将会导致JS修改样式失效，所以尽量不要为样式添加!important

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div style="width: 100px;height: 100px;background: red;" id="box"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box = document.getElementById("box");
    console.log(box.style.width);
</script>
</body>
</html>
12345678910111213141516
```

![image-20201020094411123](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/df892dad3da0de7bdea39733122a9277png.jpg)

**拓展知识1：**

通过style属性设置和读取的都是内联样式，无法读取样式表中的样式或者说正在应用的样式，如果想要读取当前正在应用的样式属性我们可以使用`元素.currentStyle.样式名`来获取元素的当前显示的样式，它可以用来读取当前元素正在显示的样式，如果当前元素没有设置该样式，则获取它的默认值，但是currentStyle只有IE浏览器支持，其它的浏览器都不支持，在其它浏览器中可以使用getComputedStyle()这个方法来获取元素当前的样式，这个方法是window的方法，可以直接使用，但是需要两个参数：

+   第一个参数：要获取样式的元素
+   第二个参数：可以传递一个伪元素，一般都传null

该方法会返回一个对象，对象中封装了当前元素对应的样式，可以通过 `对象.样式名` 来读取样式，如果获取的样式没有设置，则会获取到真实的值，而不是默认值，比如：没有设置width，它不会获取到auto，而是一个长度，但是该方法不支持IE8及以下的浏览器。通过currentStyle和getComputedStyle()读取到的样式都是只读的，不能修改，如果要修改必须通过style属性，因此，我们可以写一个适配各个浏览器的读取元素样式的方法。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        /*样式表的样式*/
        #box {
            width: 200px;
            height: 200px;
            background-color: green;
        }
    </style>
</head>
<body>
<div style="width: 100px;height: 100px;" id="box"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    /*通用的获取元素样式的方法*/
    function getStyle(obj, name) {
        if (window.getComputedStyle) {
            //正常浏览器的方式，具有getComputedStyle()方法
            return getComputedStyle(obj, null)[name];
        } else {
            //IE8的方式，没有getComputedStyle()方法
            return obj.currentStyle[name];
        }
    }

    var box = document.getElementById("box");

    console.log(getStyle(box, "width"));
    console.log(getStyle(box, "height"));
    console.log(getStyle(box, "background-color"));
</script>
</body>
</html>
1234567891011121314151617181920212223242526272829303132333435363738
```

谷歌浏览器：

![image-20201020100255039](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/342585b40aa70e2dc6e15205875c07e9png.jpg)

火狐浏览器：

![image-20201020100316096](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0bafe791df71c347a1f25f8eb0111206png.jpg)

IE9-IE11 浏览器：

![image-20201020100443311](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/268b21104c94e23ca8e80293840c0c7epng.jpg)

IE5-IE8 浏览器：

![image-20201020100934400](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d194fd226aec2f632be2b11b71b7be98png.jpg)

有同学会说，在IE5-IE8 浏览器中，老师这不是还不一样吗？因此我们建议设置颜色数值一般采用rgb或者rgba，最好不要采用英文单词的这种颜色值，这样最终展示出来的效果就一致了。

**拓展知识2：编写一段兼容性代码，用来获取任意标签的文本内容**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a href="https://www.baidu.com" id="a">打开百度，你就知道！</a>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var a = document.getElementById("a");

    console.log(getInnerText(a));

    /*获取任意标签的内容*/
    function getInnerText(element) {
        // 判断浏览器是否支持textContent,如果支持，则使用textContent获取内容，否则使用innerText获取内容。
        if(typeof element.textContent == "undefined") {
            return element.innerText;
        } else {
            return element.textContent;
        }
    }
</script>
</body>
</html>
123456789101112131415161718192021222324252627
```

谷歌浏览器：

![image-20201021141646565](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5625fecb6b7f6a41bff0c12549576cacpng.jpg)

火狐浏览器：

![image-20201021141729927](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1f6c0336fa9dfa70031185dc0d735d0cpng.jpg)

IE5-IE11浏览器：

![image-20201021141805607](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6b62b8280af507e2dc5f3d4f75bde5d5png.jpg)

#### 4.3.3、改变 HTML 的值

##### 4.3.3.1、方法介绍

| 方法 | 描述 |
| :-- | :-- |
| 元素节点.innerText = *new text content* | 改变元素的 inner Text。 |
| 元素节点.innerHTML = *new html content* | 改变元素的 inner HTML。 |
| 元素节点.属性 = *new value* | 改变 HTML 元素的属性值。 |
| 元素节点.setAttribute(*attribute*, *value*) | 改变 HTML 元素的属性值。 |
| 元素节点.style.样式 = *new style* | 改变 HTML 元素的行内样式值。 |

##### 4.3.3.2、方法演示

**需求描述：创建一个按钮，然后改变按钮的文本内容**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn">我是按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.getElementById("btn");
    btn.innerText = "我是JavaScript的按钮";
    console.log(btn);
</script>
</body>
</html>
1234567891011121314151617
```

![image-20201019142137016](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/44fc62891cb9423b75bbd8d07af314f3png.jpg)

**需求描述：创建一个div，然后在div中插入一个h1标题**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box = document.getElementById("box");
    box.innerHTML = "<h1>我是Box中的大标题</h1>";
    console.log(box);
</script>
</body>
</html>
1234567891011121314151617
```

![image-20201019152023559](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/3a35a1d142f41830af6077f280af5ac4png.jpg)

\*\*需求描述：创建一个超链接，默认为空，使用JavaScript代码设置href属性为`https://www.baidu.com` \*\*

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a id="a" href="">打开百度，你就知道！</a>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var a = document.getElementById("a");
    a.href="https://www.baidu.com";
    console.log(a);
</script>
</body>
</html>
1234567891011121314151617
```

![image-20201019152337340](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/06474806435e6d9c2b545df02b976898png.jpg)

\*\*需求描述：创建一个超链接，默认为空，使用JavaScript代码设置href属性为`https://www.baidu.com` \*\*

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a id="a" href="">打开百度，你就知道！</a>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var a = document.getElementById("a");
    a.setAttribute("href", "https://www.baidu.com");
    console.log(a);
</script>
</body>
</html>
1234567891011121314151617
```

![image-20201019152509296](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5ae3f151d960d3337859b7a4f1cfc495png.jpg)

**需求描述：创建一个正方形div，默认颜色为红色，使用JavaScript代码改变为绿色**

> 注意：如果CSS的样式名中含有-，这种名称在JS中是不合法的比如background-color，需要将这种样式名修改为驼峰命名法，去掉-，然后将-后的字母大写，我们通过style属性设置的样式都是行内样式，同样的获取也是行内样式，而行内样式有较高的优先级，所以通过JS修改的样式往往会立即显示，但是如果在样式中写了!important，则此时样式会有最高的优先级，即使通过JS也不能覆盖该样式，此时将会导致JS修改样式失效，所以尽量不要为样式添加!important

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div style="width: 100px;height: 100px;background: red;" id="box"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box = document.getElementById("box");
    box.style.background = "green";
    console.log(box);
</script>
</body>
</html>
1234567891011121314151617
```

![image-20201019152811146](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d716ba68cec1b96ef23a6d64daa2d546png.jpg)

**拓展知识1：**

修改节点的内容除了常用的innerHTML和innerText之外，还有insertAdjacentHTML和insertAdjacentText方法，可以在指定的地方插入内容。insertAdjacentText方法与insertAdjacentHTML方法类似，只不过是插入纯文本，参数相同。

语法说明：

```javascript
object.insertAdjacentHTML(where,html);
object.insertAdjacentText(where,text)
12
```

参数说明：

+   where：
    
    +   beforeBegin：插入到开始标签的前面
    +   beforeEnd：插入到结束标签的前面
    +   afterBegin：插入到开始标签的后面
    +   afterEnd：插入到结束标签的后面
    
    ![img](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/4987c6bf7685908a4079f5d898441533png.jpg)
    
+   html：一段html代码
    
+   text：一段文本值
    

注意事项：

1.  这两个方法必须等文档加载好后才能执行，否则会出错。
2.  insertAdjacentText只能插入普通文本，insertAdjacentHTML插入html代码。
3.  使用insertAdjacentHTML方法插入script脚本文件时，必须在script元素上定义defer属性。
4.  使用insertAdjacentHTML方法插入html代码后，页面上的元素集合将发生变化。
5.  insertAdjacentHTML方法不适用于单个的空的元素标签(如img，input等)。

案例演示：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="insert">
    <p>你是我的小丫小苹果</p>
</div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var div = document.getElementById("insert");
    div.insertAdjacentHTML('beforeBegin', '你是我的小丫小苹果');
</script>
</body>
</html>
123456789101112131415161718
```

![image-20201020115614268](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/33f1ec01ebf20a5fd352e7e16a1ab9eapng.jpg)

**拓展知识2：编写一段兼容性代码，用来设置任意标签的文本内容**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a href="https://www.baidu.com" id="a">打开百度，你就知道！</a>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var a = document.getElementById("a");
    
    setInnerText(a, "你要打开百度吗？");

    console.log(getInnerText(a));

    /*获取任意标签的内容*/
    function getInnerText(element) {
        // 判断浏览器是否支持textContent,如果支持，则使用textContent获取内容，否则使用innerText获取内容。
        if (typeof element.textContent == "undefined") {
            return element.innerText;
        } else {
            return element.textContent;
        }
    }

    /*设置任意标签的内容*/
    function setInnerText(element, text) {
        // 判断浏览器是否支持textContent,如果支持，则使用textContent设置内容，否则使用innerText设置内容。
        if (typeof element.textContent == "undefined") {
            return element.innerText = text;
        } else {
            return element.textContent = text;
        }
    }
</script>
</body>
</html>
123456789101112131415161718192021222324252627282930313233343536373839
```

谷歌浏览器：

![image-20201021142036915](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1b39084b6cab6f5c4731ccfaea7c3f65png.jpg)

火狐浏览器：

![image-20201021142051365](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/a7681362bf89757d9949588a92921cebpng.jpg)

IE5-IE11浏览器：

![image-20201021142124568](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/4d898369cb1cf66629379349907d45f7png.jpg)

#### 4.3.4、修改 HTML 元素

##### 4.3.4.1、方法介绍

| 方法 | 描述 |
| :-- | :-- |
| document.createElement(*element*) | 创建 HTML 元素节点。 |
| document.createAttribute(*attribute*) | 创建 HTML 属性节点。 |
| document.createTextNode(*text*) | 创建 HTML 文本节点。 |
| 元素节点.removeChild(*element*) | 删除 HTML 元素。 |
| 元素节点.appendChild(*element*) | 添加 HTML 元素。 |
| 元素节点.replaceChild(*element*) | 替换 HTML 元素。 |
| 元素节点.insertBefore(*element*) | 在指定的子节点前面插入新的子节点。 |

##### 4.3.4.2、方法演示

**案例演示1：创建一个ul列表，然后在该列表中追加4个li标签**

第一种方法：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var ul = document.createElement("ul");

    var li1 = document.createElement("li");
    var text1 = document.createTextNode("列表项1");
    li1.appendChild(text1);
    ul.appendChild(li1);

    var li2 = document.createElement("li");
    var text2 = document.createTextNode("列表项2");
    li2.appendChild(text2);
    ul.appendChild(li2);

    var li3 = document.createElement("li");
    var text3 = document.createTextNode("列表项3");
    li3.appendChild(text3);
    ul.appendChild(li3);

    var li4 = document.createElement("li");
    var text4 = document.createTextNode("列表项4");
    li4.appendChild(text4);
    ul.appendChild(li4);

    document.getElementsByTagName("body")[0].appendChild(ul);
</script>
</body>
</html>
123456789101112131415161718192021222324252627282930313233343536
```

![image-20201020111240435](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/79125523465c4df24a6d335e5b326617png.jpg)

第二种方法：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var ul = document.createElement("ul");

    var li1 = document.createElement("li");
    li1.innerHTML = "列表项1";
    ul.appendChild(li1);

    var li2 = document.createElement("li");
    li2.innerHTML = "列表项2";
    ul.appendChild(li2);

    var li3 = document.createElement("li");
    li3.innerHTML = "列表项3";
    ul.appendChild(li3);

    var li4 = document.createElement("li");
    li4.innerHTML = "列表项4";
    ul.appendChild(li4);

    document.getElementsByTagName("body")[0].appendChild(ul);
</script>
</body>
</html>
1234567891011121314151617181920212223242526272829303132
```

![image-20201020111408190](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6464946d36ebd398d032e41a15abdb62png.jpg)

第三种方法：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var ul = document.createElement("ul");

    var li1 = "<li>列表项1</li>";
    var li2 = "<li>列表项2</li>";
    var li3 = "<li>列表项3</li>";
    var li4 = "<li>列表项4</li>";
    ul.innerHTML = li1 + li2 + li3 + li4;

    document.getElementsByTagName("body")[0].appendChild(ul);
</script>
</body>
</html>
12345678910111213141516171819202122
```

![image-20201020111719891](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/f61591aac03b3db2ce59513373690da6png.jpg)

**案例演示2：创建一个ul列表，里边有四个li子元素，删除第一个li，替换最后一个li**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<ul id="ul">
    <li id="first">列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    <li id="last">列表项4</li>
</ul>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var ul = document.getElementById("ul");
    var first = document.getElementById("first");
    var last = document.getElementById("last");

    /*删除第一个*/
    ul.removeChild(first);

    /*替换最后一个*/
    var replaceLi = document.createElement("li");
    replaceLi.innerHTML = "列表4的替换";
    ul.replaceChild(replaceLi, last);
</script>
</body>
</html>
123456789101112131415161718192021222324252627282930
```

![image-20201020113211173](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/14e7183e78aacad88328b86dfcbe7347png.jpg)

**案例演示3：创建一个ul列表，里边有四个li子元素，在第一个li前边插入一个id为zero的li**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<ul id="ul">
    <li id="first">列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    <li>列表项4</li>
</ul>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var ul = document.getElementById("ul");
    var first = document.getElementById("first");

    var zero = document.createElement("li");
    zero.innerHTML = "列表0的新增";
    
    ul.insertBefore(zero, first);
</script>
</body>
</html>
1234567891011121314151617181920212223242526
```

![image-20201020115016443](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0e03e49938caf9f74d72f996948f7e76png.jpg)

**拓展知识：**

动态判断、添加、删除、切换样式，支持IE5-IE11，谷歌浏览器、火狐浏览器等

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        .b1 {
            width: 100px;
            height: 100px;
            background-color: red;
        }

        .b2 {
            width: 300px;
            height: 300px;
            background-color: yellow;
        }
    </style>
</head>
<body>
<button id="btn0">判断b2样式</button>
<button id="btn1">添加b2样式</button>
<button id="btn2">删除b2样式</button>
<button id="btn3">切换b2样式</button>

<br>
<br>

<div id="box" class="b1"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn0 = document.getElementById("btn0");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var box = document.getElementById("box");

    btn0.onclick = function () {
        alert(hasClass(box, "b2"));
    };

    btn1.onclick = function () {
        addClass(box, "b2");
    };

    btn2.onclick = function () {
        removeClass(box, "b2");
    };

    btn3.onclick = function () {
        toggleClass(box, "b2");
    };

    /*
     * 判断一个元素中是否含有指定的class属性值
     * 如果有该class，则返回true，没有则返回false
     */
    function hasClass(obj, cn) {
        var reg = new RegExp("\\b" + cn + "\\b");
        return reg.test(obj.className);
    }

    /*
     * 向一个元素中添加指定的class属性值
     * 参数:
     * 	obj 要添加class属性的元素
     *  cn 要添加的class值
     */
    function addClass(obj, cn) {
        // 检查obj中是否含有cn
        if (!hasClass(obj, cn)) {
            obj.className += " " + cn;
        }
    }

    /*
     * 删除一个元素中的指定的class属性
     */
    function removeClass(obj, cn) {
        var reg = new RegExp("\\b" + cn + "\\b");
        obj.className = obj.className.replace(reg, "");
    }

    /*
     * toggleClass可以用来切换一个类
     * 	如果元素中具有该类，则删除
     * 	如果元素中没有该类，则添加
     */
    function toggleClass(obj, cn) {
        // 判断obj中是否含有cn
        if (hasClass(obj, cn)) {
            // 存在，则删除
            removeClass(obj, cn);
        } else {
            // 没有，则添加
            addClass(obj, cn);
        }
    }
</script>
</body>
</html>
123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102
```

![image-20201022124939559](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7c9c1f3fbfe9688adaf743791ed42f48png.jpg)

#### 4.3.5、查找 HTML 父子

##### 4.3.5.1、方法介绍

| 方法 | 描述 |
| --- | --- |
| 元素节点.parentNode | 返回元素的父节点。 |
| 元素节点.parentElement | 返回元素的父元素。 |
| 元素节点.childNodes | 返回元素的一个子节点的数组（包含空白文本Text节点）。 |
| 元素节点.children | 返回元素的一个子元素的集合（不包含空白文本Text节点）。 |
| 元素节点.firstChild | 返回元素的第一个子节点（包含空白文本Text节点）。 |
| 元素节点.firstElementChild | 返回元素的第一个子元素（不包含空白文本Text节点）。 |
| 元素节点.lastChild | 返回元素的最后一个子节点（包含空白文本Text节点）。 |
| 元素节点.lastElementChild | 返回元素的最后一个子元素（不包含空白文本Text节点）。 |
| 元素节点.previousSibling | 返回某个元素紧接之前节点（包含空白文本Text节点）。 |
| 元素节点.previousElementSibling | 返回指定元素的前一个兄弟元素（相同节点树层中的前一个元素节点）。 |
| 元素节点.nextSibling | 返回某个元素紧接之后节点（包含空白文本Text节点）。 |
| 元素节点.nextElementSibling | 返回指定元素的后一个兄弟元素（相同节点树层中的下一个元素节点）。 |

##### 4.3.5.2、方法演示

**案例演示：**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box">
    <ul id="ul">
        <li><a href="https://www.baidu.com">我是超链接1</a></li>
        <li id="two"><a href="https://www.baidu.com">我是超链接2</a></li>
        <li><a href="https://www.baidu.com">我是超链接3</a></li>
        <li><a href="https://www.baidu.com">我是超链接4</a></li>
    </ul>
</div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box = document.getElementById("box");
    var ul = document.getElementById("ul");
    var two = document.getElementById("two");

    console.log(ul.parentNode);
    console.log(ul.parentElement);
    console.log("===============");

    console.log(box.childNodes);
    console.log(box.children);
    console.log("===============");

    console.log(ul.firstChild);
    console.log(ul.firstElementChild);
    console.log(ul.lastChild);
    console.log(ul.lastElementChild);
    console.log("===============");

    console.log(two.previousSibling);
    console.log(two.previousElementSibling);
    console.log(two.nextSibling);
    console.log(two.nextElementSibling);
</script>
</body>
</html>
12345678910111213141516171819202122232425262728293031323334353637383940414243
```

![image-20201020202807593](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/553e7c9123e4ba806981bb30a187e4f6png.jpg)

**兼容性方法：**

```javascript
/*获取任意一个父级元素的第一个子元素*/
function getfirstElementChild(element) {
	if(element.firstElementChild) {
		return element.firstElementChild;
	} else {
		var node = element.firstChild;
		while(node && node.nodeType != 1) {
			node = node.nextSibling;
		}
		return node;
	}
}

/*获取任意一个父级元素的最后一个子元素*/
function getLastElementChild(element) {
	if(element.lastElementChild) {
		return element.lastElementChild;
	} else {
		var node = element.lastChild;
		while(node && node.nodeType != 1) {
			node = node.previousSibling;
		}
		return node;
	}
}

/*获取任意一个子元素的前一个兄弟元素*/
function getPreviousElementSibling(element) {
	if(element.previousElementSibling) {
		return element.previousElementSibling;
	} else {
		var node = element.previousSibling;
		while(node && node.nodeType != 1) {
			node = node.previousSibling;
		}
		return node;
	}
}

/*获取任意一个子元素的后一个兄弟元素*/
function getNextElementSibling(element) {
	if(element.nextElementSibling) {
		return element.nextElementSibling;
	} else {
		var node = element.nextSibling;
		while(node && node.nodeType != 1) {
			node = node.nextSibling;
		}
		return node;
	}
}
123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051
```

**案例演示：**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="container">
    <p>前面的P标签</p>
    <b>加粗文本</b>
    <a href="https://www.baidu.com" id="a">百度一下</a>
    <i>斜体文本</i>
    <p>最后的P标签</p>
</div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    /*第一个子元素*/
    var firstNode = getfirstElementChild(document.getElementById("container"));
    console.log(firstNode.innerHTML);
    /*最后一个子元素*/
    var lastNode = getLastElementChild(document.getElementById("container"));
    console.log(lastNode.innerHTML);
    /*指定元素的前一个子元素*/
    var node1 = getPreviousElementSibling(document.getElementById("a"));
    console.log(node1.innerHTML);
    /*指定元素的后一个子元素*/
    var node2 = getNextElementSibling(document.getElementById("a"));
    console.log(node2.innerHTML);

    /*获取任意一个父级元素的第一个子元素*/
    function getfirstElementChild(element) {
        if (element.firstElementChild) {
            return element.firstElementChild;
        } else {
            var node = element.firstChild;
            while (node && node.nodeType != 1) {
                node = node.nextSibling;
            }
            return node;
        }
    }

    /*获取任意一个父级元素的最后一个子元素*/
    function getLastElementChild(element) {
        if (element.lastElementChild) {
            return element.lastElementChild;
        } else {
            var node = element.lastChild;
            while (node && node.nodeType != 1) {
                node = node.previousSibling;
            }
            return node;
        }
    }

    /*获取任意一个子元素的前一个兄弟元素*/
    function getPreviousElementSibling(element) {
        if (element.previousElementSibling) {
            return element.previousElementSibling;
        } else {
            var node = element.previousSibling;
            while (node && node.nodeType != 1) {
                node = node.previousSibling;
            }
            return node;
        }
    }

    /*获取任意一个子元素的后一个兄弟元素*/
    function getNextElementSibling(element) {
        if (element.nextElementSibling) {
            return element.nextElementSibling;
        } else {
            var node = element.nextSibling;
            while (node && node.nodeType != 1) {
                node = node.nextSibling;
            }
            return node;
        }
    }
</script>
</body>
</html>
123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384
```

谷歌浏览器：

![image-20201021144241079](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/da2b68fbe36cbd687cd34626f5fc2801png.jpg)

火狐浏览器：

![image-20201021144301183](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/c8a72f3ccbf1d6daf29799186215688epng.jpg)

IE5-IE11浏览器：

![image-20201021144609631](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/9dbcf8c2c620bc0db2d12380484c7fb6png.jpg)

### 4.4、DOM文档事件

#### 4.4.1、事件概述

HTML事件可以触发浏览器中的行为，比方说当用户点击某个 HTML 元素时启动一段 JavaScript。

#### 4.4.2、窗口事件

由窗口触发该事件 (同样适用于 <body> 标签)：

| 属性 | 描述 |
| :-- | :-- |
| onblur | 当窗口失去焦点时运行脚本。 |
| onfocus | 当窗口获得焦点时运行脚本。 |
| onload | 当文档加载之后运行脚本。 |
| onresize | 当调整窗口大小时运行脚本。 |
| onstorage | 当 Web Storage 区域更新时（存储空间中的数据发生变化时）运行脚本。 |

**案例演示1：当窗口失去焦点时，输出“窗口失去焦点”**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    window.onblur = function () {
        console.log("窗口失去焦点");
    };
</script>
</body>
</html>
12345678910111213141516
```

![image-20201021081411240](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/064ba8b665ef89f2a81236e78f406195png.jpg)

**案例演示2：当窗口获取焦点时，输出“窗口获取焦点”**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    window.onfocus = function () {
        console.log("窗口获取焦点");
    };
</script>
</body>
</html>
12345678910111213141516
```

![image-20201021081456060](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/c5e7b5e9b28aca810c8ec56229a16ebbpng.jpg)

**案例演示3：当页面文档加载完成后，输出"Hello, World"**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    window.onload = function () {
        console.log("Hello,World");
    };
</script>
</body>
</html>
12345678910111213141516
```

![image-20201019153100531](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6077826d206619790162f563afcc305dpng.jpg)

**案例演示4：当调整窗口大小时，输出"窗口大小正在改变"**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    window.onresize = function () {
        console.log("窗口大小正在改变");
    };
</script>
</body>
</html>
12345678910111213141516
```

![image-20201019153423408](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/f61650c54f7c63d08f434a7cfe37c411png.jpg)

#### 4.4.3、表单事件

表单事件在HTML表单中触发 (适用于所有 HTML 元素，但该HTML元素需在form表单内)：

| 属性 | 描述 |
| :-- | :-- |
| onblur | 当元素失去焦点时运行脚本。 |
| onfocus | 当元素获得焦点时运行脚本。 |
| onchange | 当元素改变时运行脚本。 |
| oninput | 当元素获得用户输入时运行脚本。 |
| oninvalid | 当元素无效时运行脚本。 |
| onselect | 当选取元素时运行脚本。 |
| onsubmit | 当提交表单时运行脚本。 |

**案例演示1：当文本框获取焦点，文本框背景为红色，当文本框失去焦点，文本框背景为黄色**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form>
    <input type="text" id="text">
</form>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var textInput = document.getElementById("text");

    /* 当文本框获取焦点，文本框背景为红色 */
    textInput.onfocus = function () {
        this.style.background = "red";
    };

    /* 当文本框失去焦点，文本框背景为绿色 */
    textInput.onblur = function () {
        this.style.background = "green";
    };
</script>
</body>
</html>
123456789101112131415161718192021222324252627
```

> 注意：这里为什么要用this，你不用this也可以，就直接`textInput.style.background = "red";`也不是不可以的，但是方法的调用规则就是谁调用this，this就指向谁，这样我们就可以简化代码了

**案例演示2：当文本框内容改变时，鼠标离开文本框，自动将文本框的内容输出到控制台**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form>
    <input type="text" id="text">
</form>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var textInput = document.getElementById("text");

    /* 当文本框内容改变时，鼠标离开文本框，自动将文本框的内容输出到控制台 */
    textInput.onchange = function () {
        console.log(this.value);
    };
</script>
</body>
</html>
12345678910111213141516171819202122
```

![image-20201019155326750](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/13674ea093b936454f1cf73aea58dd9fpng.jpg)

**案例演示3：当文本框内容改变时，立即将改变的内容输出到控制台**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form>
    <input type="text" id="text">
</form>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var textInput = document.getElementById("text");

    /* 当文本框内容改变时，立即将改变的内容输出到控制台 */
    textInput.oninput = function () {
        console.log(this.value);
    };
</script>
</body>
</html>
12345678910111213141516171819202122
```

![image-20201021111352033](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/939583633be6f6c2e026b03d250ea165png.jpg)

**案例演示4：如果单击“submit”，则不填写文本字段，将发生警报消息**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form>
    <input type="text" id="text" required>
    <input type="submit" value="submit">
</form>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var textInput = document.getElementById("text");

    /* 如果单击“submit”，则不填写文本字段，将发生警报消息 */
    textInput.oninvalid = function () {
        console.log("请您完善表单内容！");
    };
</script>
</body>
</html>
1234567891011121314151617181920212223
```

![image-20201021111647136](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/c6c6365eb6b3e976aa0563ca62747b81png.jpg)

**案例演示5：当选中文本框的内容时，输出“您已经选择了文本框内容！”**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form>
    <input type="text" id="text">
</form>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var textInput = document.getElementById("text");

    /* 当选中文本框的内容时，输出“您已经选择了文本框内容！” */
    textInput.onselect = function () {
        console.log("您已经选择了文本框内容！");
    };
</script>
</body>
</html>
12345678910111213141516171819202122
```

![image-20201021112207508](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/944bb5be34a9a50bb8f09fd959bf1c62png.jpg)

**案例演示6：当提交表单的时候，在控制台输出“表单提交”**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<form id="myform">
    <input type="submit" id="submit">
</form>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var myform = document.getElementById("myform");

    /* 当提交表单的时候，在控制台输出“表单提交” */
    myform.onsubmit = function () {
        console.log("表单提交");
        return false;/* 用来阻止表单提交的，你不写它会跳转请求 */
    };
</script>
</body>
</html>
1234567891011121314151617181920212223
```

![image-20201021112810436](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/b28be9f643716df8f45ad2b0c0434bcepng.jpg)

#### 4.4.4、键盘事件

通过键盘触发事件，类似用户的行为：

| 属性 | 描述 |
| :-- | :-- |
| onkeydown | 当按下按键时运行脚本。 |
| onkeyup | 当松开按键时运行脚本。 |
| onkeypress | 当按下并松开按键时运行脚本。 |

**案例演示1：当键盘按下判断当前的按键是不是 a ，如果是就输出true，否则输出false**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    /* 当键盘按下判断当前的按键是不是 a ，如果是就输出true，否则输出false */
    window.onkeydown = function (event) {
        /* 解决兼容性问题 */
        event = event || window.event;

        if (event.keyCode == 65) {
            console.log("true");
        } else {
            console.log("false");
        }
    };
</script>
</body>
</html>
123456789101112131415161718192021222324
```

![image-20201019160028364](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0a3bcc59693c82ad888d03865916cafepng.jpg)

**案例演示2：使div可以根据不同的方向键向不同的方向移动**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box" style="width: 100px;height: 100px;background: red;position: absolute;"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box = document.getElementById("box");

    //为document绑定一个按键按下的事件
    document.onkeydown = function (event) {
        event = event || window.event;

        // 定义移动速度
        var speed = 10;

        // 选择移动方向
        switch (event.keyCode) {
            case 37:
                box.style.left = box.offsetLeft - speed + "px";
                break;
            case 39:
                box.style.left = box.offsetLeft + speed + "px";
                break;
            case 38:
                box.style.top = box.offsetTop - speed + "px";
                break;
            case 40:
                box.style.top = box.offsetTop + speed + "px";
                break;
        }
    };
</script>
</body>
</html>
123456789101112131415161718192021222324252627282930313233343536373839
```

![image-20201021121141325](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/34178209db51c6c1e7d1eded2ec9ef69png.jpg)

**拓展知识：**

当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数。

Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标的状态。

在IE8中，响应函数被触发时，浏览器不会传递事件对象，在IE8及以下的浏览器中，是将事件对象作为window对象的属性保存的。

解决事件对象的兼容性问题：`event = event || window.event;`

**键鼠属性：**

| 属性 | 描述 |
| :-- | :-- |
| [ctrlKey](https://www.w3school.com.cn/jsref/event_ctrlkey.asp) | 返回当事件被触发时，“CTRL” 键是否被按下。 |
| [altKey](https://www.w3school.com.cn/jsref/event_altkey.asp) | 返回当事件被触发时，“ALT” 是否被按下。 |
| [shiftKey](https://www.w3school.com.cn/jsref/event_shiftkey.asp) | 返回当事件被触发时，“SHIFT” 键是否被按下。 |
| [clientX](https://www.w3school.com.cn/jsref/event_clientx.asp) | 返回当事件被触发时，鼠标指针的水平坐标。 |
| [clientY](https://www.w3school.com.cn/jsref/event_clienty.asp) | 返回当事件被触发时，鼠标指针的垂直坐标。 |
| [screenX](https://www.w3school.com.cn/jsref/event_screenx.asp) | 返回当某个事件被触发时，鼠标指针的水平坐标。 |
| [screenY](https://www.w3school.com.cn/jsref/event_screeny.asp) | 返回当某个事件被触发时，鼠标指针的垂直坐标。 |

#### 4.4.5、鼠标事件

通过鼠标触发事件，类似用户的行为：

| 属性 | 描述 |
| :-- | :-- |
| onclick | 当单击鼠标时运行脚本。 |
| ondblclick | 当双击鼠标时运行脚本。 |
| onmousedown | 当按下鼠标按钮时运行脚本。 |
| onmouseup | 当松开鼠标按钮时运行脚本。 |
| onmousemove | 当鼠标指针移动时运行脚本。 |
| onmouseover | 当鼠标指针移至元素之上时运行脚本，不可以阻止冒泡。 |
| onmouseout | 当鼠标指针移出元素时运行脚本，不可以阻止冒泡。 |
| onmouseenter | 当鼠标指针移至元素之上时运行脚本，可以阻止冒泡。 |
| onmouseleave | 当鼠标指针移出元素时运行脚本，可以阻止冒泡。 |
| onmousewheel | 当转动鼠标滚轮时运行脚本。 |
| onscroll | 当滚动元素的滚动条时运行脚本。 |

**案例演示1：创建一个正方形div，默认颜色为黑色，当鼠标移入div，背景颜色变为红色，当鼠标移出div，背景颜色变为绿色**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box" style="width: 100px;height: 100px;background: black;"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box = document.getElementById("box");

    /* 当鼠标移入div，背景颜色变为红色 */
    box.onmouseenter = function () {
        this.style.background = "red";
    };

    /* 当鼠标移出div，背景颜色变为绿色 */
    box.onmouseleave = function () {
        this.style.background = "green";
    };
</script>
</body>
</html>
12345678910111213141516171819202122232425
```

![image-20201021121332681](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2c58c2e12bccf378a66f067210093169png.jpg)

**案例演示2：编写一个通用的拖拽元素函数，创建两个div，进行拖拽演示，要求兼容IE8、火狐、谷歌等主流浏览器**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div id="box1" style="width: 100px;height: 100px;background: red;position: absolute;"></div>
<div id="box2" style="width: 100px;height: 100px;background: green;position: absolute;"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");

    drag(box1);
    drag(box2);

    /*
     * 提取一个专门用来设置拖拽的函数
     * 参数：开启拖拽的元素
     */
    function drag(obj) {
        //当鼠标在被拖拽元素上按下时，开始拖拽
        obj.onmousedown = function (event) {
            // 解决事件的兼容性问题
            event = event || window.event;

            // 设置obj捕获所有鼠标按下的事件
            /**
             * setCapture()：
             * 只有IE支持，但是在火狐中调用时不会报错，
             * 而如果使用chrome调用，它也会报错
             */
            obj.setCapture && obj.setCapture();

            // obj的偏移量 鼠标.clentX - 元素.offsetLeft
            // obj的偏移量 鼠标.clentY - 元素.offsetTop
            var ol = event.clientX - obj.offsetLeft;
            var ot = event.clientY - obj.offsetTop;

            // 为document绑定一个鼠标移动事件
            document.onmousemove = function (event) {
                // 解决事件的兼容性问题
                event = event || window.event;
                // 当鼠标移动时被拖拽元素跟随鼠标移动
                // 获取鼠标的坐标
                var left = event.clientX - ol;
                var top = event.clientY - ot;
                // 修改obj的位置
                obj.style.left = left + "px";
                obj.style.top = top + "px";
            };

            // 为document绑定一个鼠标松开事件
            document.onmouseup = function () {
                // 取消document的onmousemove事件
                document.onmousemove = null;
                // 取消document的onmouseup事件
                document.onmouseup = null;
                // 当鼠标松开时，取消对事件的捕获
                obj.releaseCapture && obj.releaseCapture();
            };

            /*
             * 当我们拖拽一个网页中的内容时，浏览器会默认去搜索引擎中搜索内容，
             * 此时会导致拖拽功能的异常，这个是浏览器提供的默认行为，
             * 如果不希望发生这个行为，则可以通过return false来取消默认行为，
             * 但是这招对IE8不起作用
             */
            return false;
        };
    }
</script>
</body>
</html>
12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667686970717273747576
```

![image-20201021120652857](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/92e3f22e4e05aa113adef8a6318f0fc3png.jpg)

#### 4.4.6、媒体事件

通过视频（videos），图像（images）或音频（audio） 触发该事件。

| 属性 | 描述 |
| :-- | :-- |
| onabort | 当发生中止事件时运行脚本。 |
| oncanplay | 当媒介能够开始播放但可能因缓冲而需要停止时运行脚本。 |
| oncanplaythrough | 当媒介能够无需因缓冲而停止即可播放至结尾时运行脚本。 |
| ondurationchange | 当媒介长度改变时运行脚本。 |
| onemptied | 当媒介资源元素突然为空时（网络错误、加载错误等）运行脚本。 |
| onended | 当媒介已抵达结尾时运行脚本。 |
| onerror | 当在元素加载期间发生错误时运行脚本。 |
| onloadeddata | 当加载媒介数据时运行脚本。 |
| onloadedmetadata | 当媒介元素的持续时间以及其它媒介数据已加载时运行脚本。 |
| onloadstart | 当浏览器开始加载媒介数据时运行脚本。 |
| onpause | 当媒介数据暂停时运行脚本。 |
| onplay | 当媒介数据将要开始播放时运行脚本。 |
| onplaying | 当媒介数据已开始播放时运行脚本。 |
| onprogress | 当浏览器正在取媒介数据时运行脚本。 |
| onratechange | 当媒介数据的播放速率改变时运行脚本。 |
| onreadystatechange | 当就绪状态（ready-state）改变时运行脚本。 |
| onseeked | 当媒介元素的定位属性不再为真且定位已结束时运行脚本。 |
| onseeking | 当媒介元素的定位属性为真且定位已开始时运行脚本。 |
| onstalled | 当取回媒介数据过程中（延迟）存在错误时运行脚本。 |
| onsuspend | 当浏览器已在取媒介数据但在取回整个媒介文件之前停止时运行脚本。 |
| ontimeupdate | 当媒介改变其播放位置时运行脚本。 |
| onvolumechange | 当媒介改变音量亦或当音量被设置为静音时运行脚本。 |
| onwaiting | 当媒介已停止播放但打算继续播放时运行脚本。 |

#### 4.4.7、其它事件

| 属性 | 描述 |
| :-- | :-- |
| onshow | 当 <menu> 元素在上下文显示时触发。 |
| ontoggle | 当用户打开或关闭 <details> 元素时触发。 |

#### 4.4.8、事件冒泡

事件的冒泡（Bubble）：所谓的冒泡指的就是事件的向上传导，当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发，在开发中大部分情况冒泡都是有用的，如果不希望发生事件冒泡可以通过事件对象来取消冒泡。

**案例演示1：创建两个div，叠放在一起，分别绑定单击事件，点击最里边的div，会触发两个div的单击事件**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        #div1 {
            width: 200px;
            height: 200px;
            background: pink;
        }

        #div2 {
            width: 100px;
            height: 100px;
            background: coral;
        }
    </style>
</head>
<body>
<div id="div1">
    我是DIV1
    <div id="div2">
        我是DIV2
    </div>
</div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    // 为div1绑定单击事件
    div1.onclick = function () {
        console.log("div1 的单击事件触发了！");
    };

    // 为div2绑定单击事件
    div2.onclick = function () {
        console.log("div2 的单击事件触发了！");
    };
</script>
</body>
</html>
1234567891011121314151617181920212223242526272829303132333435363738394041424344
```

![image-20201021135641651](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6607f17a8cda893806cf840537f0196apng.jpg)

**案例演示2：创建两个div，叠放在一起，分别绑定单击事件，点击最里边的div，不会触发两个div的单击事件，只会触发自己的单击事件，这时候我们可以取消事件冒泡**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        #div1 {
            width: 200px;
            height: 200px;
            background: pink;
        }

        #div2 {
            width: 100px;
            height: 100px;
            background: coral;
        }
    </style>
</head>
<body>
<div id="div1">
    我是DIV1
    <div id="div2">
        我是DIV2
    </div>
</div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    // 为div1绑定单击事件
    div1.onclick = function () {
        console.log("div1 的单击事件触发了！");
        stopBubble();
    };

    // 为div2绑定单击事件
    div2.onclick = function () {
        console.log("div2 的单击事件触发了！");
        stopBubble();
    };

    // 取消事件冒泡
    function stopBubble(event) {
        // 如果提供了事件对象，则这是一个非IE浏览器
        if (event && event.stopPropagation) {
            // 因此它支持W3C的stopPropagation()方法
            event.stopPropagation();
        } else {
            // 否则，我们需要使用IE的方式来取消事件冒泡
            window.event.cancelBubble = true;
        }
    }
</script>
</body>
</html>
12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758
```

![image-20201021140430458](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5fd82af2542677e3203fad39008d448fpng.jpg)

**案例演示3：当点击a标签的时候，阻止a标签的默认跳转事件，采用事件阻止**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        #div1 {
            width: 200px;
            height: 200px;
            background: pink;
        }

        #div2 {
            width: 100px;
            height: 100px;
            background: coral;
        }
    </style>
</head>
<body>
<a href="https://www.baidu.com" id="a">打开百度，你就知道！</a>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var a = document.getElementById("a");

    // 为a绑定单击事件
    a.onclick = function () {
        stopDefault();
    };

    // 阻止浏览器的默认行为
    function stopDefault(event) {
        if (event && event.preventDefault) {
            // 阻止默认浏览器动作(W3C)
            event.preventDefault();
        } else {
            // IE中阻止函数器默认动作的方式
            window.event.returnValue = false;
        }
        return false;
    }
</script>
</body>
</html>
123456789101112131415161718192021222324252627282930313233343536373839404142434445
```

![image-20201021140928214](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/affa3a0f4e63394f1b7f35ad260eeb99png.jpg)

#### 4.4.9、事件委派

我们希望只绑定一次事件，即可应用到多个的元素上，即使元素是后添加的，我们可以尝试将其绑定给元素的共同的祖先元素，也就是事件的委派。事件的委派，是指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应函数来处理事件。事件委派是利用了事件冒泡，通过委派可以减少事件绑定的次数，提高程序的性能。

**案例演示：为ul列表中的所有a标签都绑定单击事件**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<ul id="u1">
    <li><a href="javascript:;" class="link">超链接一</a></li>
    <li><a href="javascript:;" class="link">超链接二</a></li>
    <li><a href="javascript:;" class="link">超链接三</a></li>
</ul>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var u1 = document.getElementById("u1");

    // 为ul绑定一个单击响应函数
    u1.onclick = function (event) {
        event = event || window.event;
        // 如果触发事件的对象是我们期望的元素，则执行，否则不执行
        if (event.target.className == "link") {
            console.log("我是ul的单击响应函数");
        }
    };
</script>
</body>
</html>
12345678910111213141516171819202122232425262728
```

![image-20201021134924509](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/56cb581f5d9f0b3858b6673e0378c5f1png.jpg)

#### 4.4.10、事件绑定

我们以前绑定事件代码只能一个事件绑定一个函数，那我们要是想一个事件对应多个函数，并且不存在兼容性的问题该如何解决呢？

接下来，我会直接提供两个已经编写好的事件绑定和事件解绑的兼容性代码，如下：

```javascript
/*为元素绑定事件兼容性代码*/
function addEventListener(element, type, fn) {
	if(element.addEventListener) {
		element.addEventListener(type, fn, false);
	} else if(element.attachEvent) {
		element.attachEvent("on" + type, fn);
	} else {
		element["on" + type] = fn;
	}
}

/*为元素解绑事件兼容性代码*/
function removeEventListener(element, type, fnName) {
	if(element.removeEventListener) {
		element.removeEventListener(type, fnName, false);
	} else if(element.detachEvent) {
		element.detachEvent("on" + type, fnName);
	} else {
		element["on" + type] = null;
	}
}
123456789101112131415161718192021
```

**案例演示：为按钮1的单击事件绑定两个函数，然后点击按钮2取消按钮1的单机事件绑定函数f1**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn1">按钮1</button>
<button id="btn2">按钮2</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    function f1() {
        console.log("output1 ...");
    };

    function f2() {
        console.log("output2 ...");
    };

    // 为按钮1的单击事件绑定两个函数
    addEventListener(document.getElementById("btn1"), "click", f1);
    addEventListener(document.getElementById("btn1"), "click", f2);

    // 点击按钮2取消按钮1的单机事件绑定函数f1
    document.getElementById("btn2").onclick = function () {
        removeEventListener(document.getElementById("btn1"), "click", f1);
    };

    /*为元素绑定事件兼容性代码*/
    function addEventListener(element, type, fn) {
        if (element.addEventListener) {
            element.addEventListener(type, fn, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, fn);
        } else {
            element["on" + type] = fn;
        }
    }

    /*为元素解绑事件兼容性代码*/
    function removeEventListener(element, type, fnName) {
        if (element.removeEventListener) {
            element.removeEventListener(type, fnName, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, fnName);
        } else {
            element["on" + type] = null;
        }
    }
</script>
</body>
</html>
1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253
```

谷歌浏览器：

![image-20201021143905794](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/c960454081fd9259344d761869fce2a3png.jpg)

火狐浏览器：

![image-20201021143929547](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/babf7469b9a0c8b32f8b3170546150e1png.jpg)

IE8-IE11浏览器：

![image-20201021144005993](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0fc997b64a39e73676088635bfe070capng.jpg)

#### 4.4.11、事件传播

事件的传播：关于事件的传播网景公司和微软公司有不同的理解

微软公司认为事件应该是由内向外传播，也就是当事件触发时，应该先触发当前元素上的事件，然后再向当前元素的祖先元素上传播，也就说事件应该在冒泡阶段执行。

网景公司认为事件应该是由外向内传播的，也就是当前事件触发时，应该先触发当前元素的最外层的祖先元素的事件，然后在向内传播给后代元素。

W3C综合了两个公司的方案，将事件传播分成了三个阶段：

1.  捕获阶段：在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件
2.  目标阶段：事件捕获到目标元素，捕获结束开始在目标元素上触发事件
3.  冒泡阶段：事件从目标元素向它的祖先元素传递，依次触发祖先元素上的事件

![image-20201021145200137](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6164895a36bbfb67ed179ceb5bf9d6e7png.jpg)

> 注意：如果希望在捕获阶段就触发事件，可以将addEventListener()的第三个参数设置为true，一般情况下我们不会希望在捕获阶段触发事件，所以这个参数一般都是false，并且注意，IE8及以下的浏览器中没有捕获阶段，我们可以使用`event.stopPropagation();`取消事件传播。

## 第五章 JavaScript BOM

### 5.1、BOM概述

浏览器对象模型（BOM）使 JavaScript 有能力与浏览器"对话"。

浏览器对象模型（**B**rowser **O**bject **M**odel (BOM)）尚无正式标准。

由于现代浏览器已经（几乎）实现了 JavaScript 交互性方面的相同方法和属性，因此常被认为是BOM的方法和属性。

浏览器对象模型（BOM）可以使我们通过JS来操作浏览器，在BOM中为我们提供了一组对象，用来完成对浏览器的操作，常见的BOM对象如下：

+   Window：代表的是整个浏览器的窗口，同时window也是网页中的全局对象
+   Navigator：代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器
+   Location：代表当前浏览器的地址栏信息，通过Location可以获取地址栏信息，或者操作浏览器跳转页面
+   History：代表浏览器的历史记录，可以通过该对象来操作浏览器的历史记录，由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页，而且该操作只在当次访问时有效
+   Screen：代表用户的屏幕的信息，通过该对象可以获取到用户的显示器的相关的信息

这些BOM对象在浏览器中都是作为window对象的属性保存的，可以通过window对象来使用，也可以直接使用。

### 5.2、Window对象

#### 5.2.1、弹出框

**JavaScript 有三种类型的弹出框：警告框、确认框和提示框。**

##### 5.2.1.1、警告框

如果要确保信息传递给用户，通常会使用警告框。当警告框弹出时，用户将需要单击“确定”来继续。

**语法**

```javascript
window.alert("sometext");
1
```

> 注意：window.alert() 方法可以不带 window 前缀来写。

**实例**

```javascript
alert("我是一个警告框！");
1
```

##### 5.2.1.2、确认框

如果您希望用户验证或接受某个东西，则通常使用“确认”框。

当确认框弹出时，用户将不得不单击“确定”或“取消”来继续进行。

如果用户单击“确定”，该框返回 true。如果用户单击“取消”，该框返回 false。

**语法**

```javascript
window.confirm("sometext");
1
```

> 注意：window.confirm() 方法可以不带 window 前缀来编写。

**实例**

```javascript
var r = confirm("请按按钮");
if (r == true) {
    x = "您按了确认！";
} else {
    x = "您按了取消！";
}
123456
```

##### 5.2.1.3、提示框

如果您希望用户在进入页面前输入值，通常会使用提示框。

当提示框弹出时，用户将不得不输入值后单击“确定”或点击“取消”来继续进行。

如果用户单击“确定”，该框返回输入值。如果用户单击“取消”，该框返回 NULL。

**语法**

```javascript
window.prompt("sometext","defaultText");
1
```

window.prompt() 方法可以不带 window 前缀来编写。

**实例**

```javascript
var person = prompt("请输入您的姓名", "比尔盖茨");
if (person != null) {
    console.log(person);
}
1234
```

#### 5.2.2、定时事件

**JavaScript 可以在时间间隔内执行，这就是所谓的定时事件（ Timing Events）。**

window 对象允许以指定的时间间隔执行代码，这些时间间隔称为定时事件。

通过 JavaScript 使用的有两个关键的方法：

+   setTimeout(*function*, *milliseconds*)
    
    在等待指定的毫秒数后执行函数。
    
+   setInterval(*function*, *milliseconds*)
    
    等同于 setTimeout()，但持续重复执行该函数。
    

setTimeout() 和 setInterval() 都属于 window 对象的方法。

##### 5.2.2.1、延时器

**setTimeout() 方法：延时器**

```javascript
window.setTimeout(function, milliseconds);
1
```

> 注意：window.setTimeout() 方法可以不带 window 前缀来编写。

+   第一个参数是要执行的函数。
+   第二个参数指示执行之前的毫秒数。

**案例演示：单击按钮，等待 3 秒，然后控制台会输出 "Hello"**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn">按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.getElementById("btn");

    btn.onclick = function () {
        // 创建延时器
        var timer = setTimeout(function () {
            console.log("Hello");
        }, 3000);
        
        // 清除延时器
        // clearTimeout(timer);        
    };
</script>
</body>
</html>
12345678910111213141516171819202122232425
```

##### 5.2.2.2、定时器

**setInterval() 方法：定时器**

setInterval() 方法在每个给定的时间间隔重复给定的函数。

```javascript
window.setInterval(function, milliseconds);
1
```

> 注意：window.setInterval() 方法可以不带 window 前缀来写。

+   第一个参数是要执行的函数。
+   第二个参数每个执行之间的时间间隔的长度。

**案例演示：单击按钮，每隔一秒向控制台输出 "Hello"**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<button id="btn">按钮</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var btn = document.getElementById("btn");

    btn.onclick = function () {
        // 创建定时器
        var timer = setInterval(function () {
            console.log("Hello");
        }, 1000);

        // 清除定时器
        // clearInterval(timer);
    };
</script>
</body>
</html>
12345678910111213141516171819202122232425
```

**拓展知识：**

做一个通用移动函数来实现小汽车（黑色方块）移动的效果

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        /*控制器样式*/
        .controller {
            width: 600px;
            height: 50px;
            line-height: 50px;
        }

        .controller button {
            outline: none;
            border: none;
            margin: 0px;
            padding: 0px;
            width: 200px;
            height: 50px;
            font-size: 16px;
            line-height: 50px;
            text-align: center;
            background-color: #E9E9E9;
            cursor: pointer;
            float: left;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            border: 2px solid #F0F0F0;
        }

        .controller button:hover {
            background-color: #F9F9F9;
        }


        /*公路样式*/
        .road {
            width: 100%;
            height: 100px;
            position: relative;
            margin-top: 50px;
            background: #3DB1FF;
            opacity: .90;
        }

        .road800 {
            width: 800px;
            height: 100px;
            background: pink;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 1000;
            opacity: .75;
        }

        .road1200 {
            width: 1200px;
            height: 100px;
            background: orange;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 500;
        }


        /*小汽车样式*/
        div#car {
            width: 135px;
            height: 100px;
            display: block;
            background: black;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 1500;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            /*border: 1px solid #F0F0F0;*/
        }
    </style>
</head>
<body>
<div class="controller">
    <button id="btn1">移动到800PX</button>
    <button id="btn2">移动到1200PX</button>
    <button id="btn3">回家</button>
</div>

<div class="road">
    <div class="road800"></div>
    <div class="road1200"></div>
    <div id="car"></div>
</div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    document.getElementById("btn1").onclick = function () {
        move(document.getElementById("car"), 800);
    };

    document.getElementById("btn2").onclick = function () {
        move(document.getElementById("car"), 1200);
    };

    document.getElementById("btn3").onclick = function () {
        move(document.getElementById("car"), 0);
    };

    /*移动函数*/
    function move(element, target) {
        // 先清理定时器
        clearInterval(element.timeId);
        // 一会要清理定时器(只产生一个定时器)
        element.timeId = setInterval(function () {
            // 获取对象当前的位置
            var current = element.offsetLeft;
            // 每次移动多少像素
            var step = 10;
            // 判断是往正方向走还是往相反方向走
            step = current < target ? step : -step;
            // 每次移动后的距离
            current += step;
            // 判断当前移动后的位置是否到达目标位置
            if (Math.abs(target - current) > Math.abs(step)) {
                element.style.left = current + "px";
            } else {
                // 清理定时器
                clearInterval(element.timeId);
                element.style.left = target + "px";
            }
        }, 20);
    }
</script>
</body>
</html>
123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102103104105106107108109110111112113114115116117118119120121122123124125126127128129130131132133134135136137138139140
```

![image-20201022093955689](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2d621d83b8486ad5a65ef96484555083png.jpg)

#### 5.2.3、常用窗口属性

两个属性可用用于确定浏览器窗口的尺寸。

这两个属性都以像素返回尺寸：

+   window.innerHeight - 浏览器窗口的内高度（以像素计）
+   window.innerWidth - 浏览器窗口的内宽度（以像素计）

浏览器窗口（浏览器视口）不包括工具栏和滚动条。

对于 Internet Explorer 8, 7, 6, 5：

+   document.documentElement.clientHeight
+   document.documentElement.clientWidth

或

+   document.body.clientHeight
+   document.body.clientWidth

一个实用的 JavaScript 解决方案（包括所有浏览器）：该例显示浏览器窗口的高度和宽度（不包括工具栏和滚动条）

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    var h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    console.log(w);
    console.log(h);
</script>
</body>
</html>
1234567891011121314151617181920212223
```

#### 5.2.4、其它窗口方法

+   **window.open() ：打开新的窗口**
    
    语法介绍：
    
    ```javascript
    window.open(URL,name,specs,replace);
    1
    ```
    
    参数介绍：
    
    ![image-20201022094734710](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/49dda761b483586c97140150f4c6aaefpng.jpg)
    
    案例演示：
    
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    <button onclick="openWin()">打开窗口</button>
    
    <!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
    <script>
        function openWin() {
            myWindow = window.open('', '', 'width=200,height=100');
            myWindow.document.write("<p>这是新建窗口</p>");
        }
    </script>
    </body>
    </html>
    123456789101112131415161718
    ```
    
+   **window.close() ：关闭当前窗口**
    
    语法介绍：
    
    ```javascript
    window.close();
    1
    ```
    
    案例演示：
    
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    <button onclick="openWin()">打开窗口</button>
    <button onclick="closeWin()">关闭窗口</button>
    
    <!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
    <script>
        function openWin() {
            myWindow = window.open('', '', 'width=200,height=100');
            myWindow.document.write("<p>这是新建窗口</p>");
        }
    
        function closeWin() {
            myWindow.close();
        }
    </script>
    </body>
    </html>
    1234567891011121314151617181920212223
    ```
    
+   **window.moveTo() ：移动当前窗口**
    
    语法介绍：
    
    ```javascript
    window.moveTo(x,y);
    1
    ```
    
    案例演示：
    
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    <button onclick="openWin()">打开窗口</button>
    <button onclick="moveWin()">移动窗口</button>
    
    <!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
    <script>
        function openWin() {
            myWindow = window.open('', '', 'width=200,height=100');
            myWindow.document.write("<p>这是新建窗口</p>");
        }
    
        function moveWin() {
            myWindow.moveTo(300, 300);
            myWindow.focus();
        }
    </script>
    </body>
    </html>
    123456789101112131415161718192021222324
    ```
    
+   **window.resizeTo() ：调整当前窗口**
    
    语法介绍：
    
    ```javascript
    window.resizeTo(width,height);
    1
    ```
    
    案例演示：
    
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    <button onclick="openWin()">打开窗口</button>
    <button onclick="resizeWin()">调整窗口</button>
    
    <!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
    <script>
        function openWin() {
            myWindow = window.open('', '', 'width=200,height=100');
            myWindow.document.write("<p>这是新建窗口</p>");
        }
    
        function resizeWin() {
            myWindow.resizeTo(300, 300);
            myWindow.focus();
        }
    </script>
    </body>
    </html>
    123456789101112131415161718192021222324
    ```
    

### 5.3、Navigator对象

Navigator代表的当前浏览器的信息，通过该对象可以来识别不同的浏览器，由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了，一般我们只会使用userAgent来判断浏览器的信息，userAgent是一个字符串，这个字符串中包含有用来描述浏览器信息的内容，不同的浏览器会有不同的userAgent，如下代码：

```javascript
var ua = navigator.userAgent;
console.log(ua);
12
```

谷歌浏览器：

+   Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36

火狐浏览器：

+   Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:81.0) Gecko/20100101 Firefox/81.0

IE11浏览器：

+   Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko

IE10浏览器：

+   Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)

IE9浏览器：

+   Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)

IE8浏览器：

+   Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)

IE7浏览器：

+   Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)

于是乎，我们就可以实现对浏览器类型的判断：

```javascript
var ua = navigator.userAgent;
if (/firefox/i.test(ua)) {
    alert("你是火狐浏览器");
} else if (/chrome/i.test(ua)) {
    alert("你是谷歌浏览器");
} else if (/msie/i.test(ua)) {
    alert("你是IE5-IE10浏览器");
} else if ("ActiveXObject" in window) {
    alert("你是IE11浏览器");
}
12345678910
```

> 注意：在IE11中已经将微软和IE相关的标识都已经去除了，所以我们基本已经不能通过UserAgent来识别一个浏览器是否是IE了，如果通过UserAgent不能判断，还可以通过一些浏览器中特有的对象，来判断浏览器的信息，比如：ActiveXObject

### 5.4、Location对象

Location对象中封装了浏览器的地址栏的信息，如果直接打印location，则可以获取到地址栏的信息（当前页面的完整路径）

#### 5.4.1、常用属性

常用属性：

```javascript
console.log(location);          //输出location对象
console.log(location.href);     //输出当前地址的全路径地址
console.log(location.origin);   //输出当前地址的来源
console.log(location.protocol); //输出当前地址的协议
console.log(location.hostname); //输出当前地址的主机名
console.log(location.host);     //输出当前地址的主机
console.log(location.port);     //输出当前地址的端口号
console.log(location.pathname); //输出当前地址的路径部分
console.log(location.search);   //输出当前地址的?后边的参数部分
123456789
```

![image-20201022115026894](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6a37d8a97ddbbd0425f93a63a67f3572png.jpg)

修改地址：

```javascript
location = "https://www.baidu.com";
1
```

```javascript
location.href = "https://www.baidu.com";
1
```

#### 5.4.2、常用方法

assign()：用来跳转到其它的页面，作用和直接修改location一样

```javascript
location.assign("https://www.baidu.com");
1
```

reload()：用于重新加载当前页面，作用和刷新按钮一样，如果在方法中传递一个true，作为参数，则会强制清空缓存刷新页面

```javascript
location.reload(true);
1
```

replace()：可以使用一个新的页面替换当前页面，调用完毕也会跳转页面，它不会生成历史记录，不能使用回退按钮回退

```javascript
location.replace("https://www.baidu.com");
1
```

### 5.5、History对象

History对象可以用来操作浏览器向前或向后翻页

#### 5.5.1、常用属性

```javascript
console.log(history);           //输出history对象
console.log(history.length);    //可以获取到当成访问的链接数量
12
```

![image-20201022114945012](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/4bf7f5847d83c85eb2672cee5a393f5epng.jpg)

#### 5.5.2、常用方法

back()：可以回退到上一个页面，作用和浏览器的回退按钮一样

```javascript
history.back();
1
```

forward()：可以跳转到下一个页面，作用和浏览器的前进按钮一样

```javascript
history.forward();
1
```

go()：可以用来跳转到指定的页面，它需要一个整数作为参数

+   1：表示向前跳转一个页面，相当于forward()
+   2：表示向前跳转两个页面
+   \-1：表示向后跳转一个页面，相当于back()
+   \-2：表示向后跳转两个页面

```javascript
history.go(-2);
1
```

### 5.6、Screen对象

Screen 对象包含有关客户端显示屏幕的信息。

> 注意：没有应用于 screen 对象的公开标准，不过所有浏览器都支持该对象。

#### 5.6.1、Screen对象描述

每个 Window 对象的 screen 属性都引用一个 Screen 对象。Screen 对象中存放着有关显示浏览器屏幕的信息。JavaScript 程序将利用这些信息来优化它们的输出，以达到用户的显示要求。例如，一个程序可以根据显示器的尺寸选择使用大图像还是使用小图像，它还可以根据显示器的颜色深度选择使用 16 位色还是使用 8 位色的图形。另外，JavaScript 程序还能根据有关屏幕尺寸的信息将新的浏览器窗口定位在屏幕中间。

#### 5.6.2、Screen对象属性

| 属性 | 描述 |
| :-- | :-- |
| [availHeight](https://www.w3school.com.cn/jsref/prop_screen_availheight.asp) | 返回显示屏幕的高度 (除 Windows 任务栏之外)。 |
| [availWidth](https://www.w3school.com.cn/jsref/prop_screen_availwidth.asp) | 返回显示屏幕的宽度 (除 Windows 任务栏之外)。 |
| [bufferDepth](https://www.w3school.com.cn/jsref/prop_screen_bufferdepth.asp) | 设置或返回调色板的比特深度。 |
| [colorDepth](https://www.w3school.com.cn/jsref/prop_screen_colordepth.asp) | 返回目标设备或缓冲器上的调色板的比特深度。 |
| [deviceXDPI](https://www.w3school.com.cn/jsref/prop_screen_devicexdpi.asp) | 返回显示屏幕的每英寸水平点数。 |
| [deviceYDPI](https://www.w3school.com.cn/jsref/prop_screen_deviceydpi.asp) | 返回显示屏幕的每英寸垂直点数。 |
| [fontSmoothingEnabled](https://www.w3school.com.cn/jsref/prop_screen_fontsmoothingenabled.asp) | 返回用户是否在显示控制面板中启用了字体平滑。 |
| [height](https://www.w3school.com.cn/jsref/prop_screen_height.asp) | 返回显示屏幕的高度。 |
| [logicalXDPI](https://www.w3school.com.cn/jsref/prop_screen_logicalxdpi.asp) | 返回显示屏幕每英寸的水平方向的常规点数。 |
| [logicalYDPI](https://www.w3school.com.cn/jsref/prop_screen_logicalydpi.asp) | 返回显示屏幕每英寸的垂直方向的常规点数。 |
| [pixelDepth](https://www.w3school.com.cn/jsref/prop_screen_pixeldepth.asp) | 返回显示屏幕的颜色分辨率（比特每像素）。 |
| [updateInterval](https://www.w3school.com.cn/jsref/prop_screen_updateinterval.asp) | 设置或返回屏幕的刷新率。 |
| [width](https://www.w3school.com.cn/jsref/prop_screen_width.asp) | 返回显示器屏幕的宽度。 |

## 第六章 JavaScript高级语法

### 6.1、Exception

#### 6.1.1、异常概述

在ES3之前JavaScript代码执行的过程中，一旦出现错误，整个JavaScript代码都会停止执行，这样就显的代码非常的不健壮。

在Java或C#等一些高级语言中，都提供了异常处理机制，可以处理出现的异常，而不会停止整个应用程序。

从ES3开始，JavaScript也提供了类似的异常处理机制，从而让JavaScript代码变的更健壮，即使执行的过程中出现了异常，也可以让程序具有了一部分的异常恢复能力。

当错误发生时，JavaScript 提供了错误信息的内置 error 对象。

error 对象提供两个有用的属性：`name` 和 `message` 。

**Error 对象属性**

| 属性 | 描述 |
| :-- | :-- |
| name | 设置或返回错误名 |
| message | 设置或返回错误消息（一条字符串） |

**Error Name Values**

error 的 name 属性可返回六个不同的值：

| 错误名 | 描述 |
| :-- | :-- |
| EvalError | 已在 eval() 函数中发生的错误 |
| RangeError | 已发生超出数字范围的错误 |
| ReferenceError | 已发生非法引用 |
| SyntaxError | 已发生语法错误 |
| TypeError | 已发生类型错误 |
| URIError | 在 encodeURI() 中已发生的错误 |

#### 6.1.2、异常捕捉

ES3开始引入了 try-catch 语句，是 JavaScript 中处理异常的标准方式。

语法格式：

```javascript
try {
    // 可能发生异常的代码
} catch (error) {
    // 发生错误执行的代码
} finally {
    // 无论是否出错都会执行的代码
}
1234567
```

在 try…catch 中，try 中一旦出现错误则其它语句不能执行，如果不出现错误则 catch 中的语句不会执行。

Javascript 参考其它编程语言，也提供了一种 finally 语句：不管 try 中的语句有没有错误，在最后都会执行 finally 中的语句。也就是说，try 中语句不发生错误执行完毕后会执行 finally 中的语句，try 中的语句发生错误，则执行 catch中的语句，catch 中的语句执行完毕后也会执行 finally 中的语句。

案例演示：

```javascript
try {
    console.log(a);
    console.log("a未定义肯定报错，你看不见我");
} catch (error) {
    // 发生错误执行的代码
    console.log(error);
} finally {
    // 无论是否出错都会执行的代码
    console.log("finally 执行了 ...")
}
12345678910
```

![image-20201023080345639](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7facf9acb18045277df77a26a828fbe2png.jpg)

在JavaScript中，如果添加了 finally 语句，则 catch 语句可以省略。但是如果没有 catch 语句，则一旦发生错误就无法捕获这个错误，所以在执行完 finally 中的语句后，程序就会立即停止了。所以，在实际使用中，最好一直带着 catch 语句。如果你写了 catch 语句，则finally 语句也是可以省略的。

#### 6.1.3、异常演示

##### 6.1.3.1、Eval 错误

EvalError 指示 eval() 函数中的错误。更新版本的 JavaScript 不会抛出任何 EvalError，请使用 SyntaxError 代替。

案例演示：

```javascript
try {
    eval("alert('Hello)");   // 缺少 ' 会产生错误
} catch (error) {
    console.log(error)
}
12345
```

![image-20201023081303304](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/72d07d83f841d79d99cedac91b4df4fdpng.jpg)

##### 6.1.3.2、范围错误

RangeError 会在您使用了合法值的范围之外的数字时抛出。

案例演示：您不能将数字的有效位数设置为 500。

```javascript
var num = 1;
try {
    num.toPrecision(500);   // 数无法拥有 500 个有效数
} catch (error) {
    console.log(error)
}
123456
```

![image-20201023081001501](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0ce7048d29c3e4afdce6beb083479ef8png.jpg)

##### 6.1.3.3、引用错误

假如您使用（引用）了尚未声明的变量，则 ReferenceError 会被抛出：

案例演示：

```javascript
var x;
try {
    x = y + 1;   // y 无法被引用（使用）
} catch (error) {
    console.log(error)
}
123456
```

![image-20201023081145369](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/99038a2b5cc51bdccb00d6276d141482png.jpg)

##### 6.1.3.4、语法错误

假如您计算带语法错误的代码，会 SyntaxError 被抛出：

案例演示：

```javascript
try {
    eval("alert('Hello)");   // 缺少 ' 会产生错误
} catch (error) {
    console.log(error)
}
12345
```

![image-20201023081303304](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/72d07d83f841d79d99cedac91b4df4fdpng.jpg)

##### 6.1.3.5、类型错误

假如您使用的值不在期望值的范围之内，则 TypeError 被抛出：

案例演示：

```javascript
var num = 1;
try {
    num.toUpperCase();   // 您无法将数字转换为大写
} catch (error) {
    console.log(error)
}
123456
```

![image-20201023081357388](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/21c8b870dda04de9b5ad0bbc039dff40png.jpg)

##### 6.1.3.6、URI 错误

假如您在 URI 函数中使用非法字符，则 URIError 被抛出：

案例演示：

```javascript
try {
    decodeURI("%%%");   // 您无法对这些百分号进行 URI 编码
} catch (error) {
    console.log(error)
}
12345
```

![image-20201023081458426](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/316d1495d4bf1ddc337e540f221e4ccdpng.jpg)

#### 6.1.4、异常抛出

在大部分的代码执行过程中，都是出现错误的时候，由浏览器(javascript引擎)抛出异常，然后程序或者停止执行或被try…catch 捕获。

然而有时候我们在检测到一些不合理的情况发生的时候也可以主动抛出错误，请使用 throw 关键字抛出来主动抛出异常。

注意事项：

1.  thow后面就是我们要抛出的异常对象，在以前的时候都是出现错误的时候浏览器抛出异常对象，只是现在是我们自己主动抛出的异常对象。
2.  只要有异常对象抛出，不管是浏览器抛出的，还是代码主动抛出，都会让程序停止执行。如果想让程序继续执行，则有也可以用try…catch来捕获。
3.  每一个错误类型都可以传入一个参数，表示实际的错误信息。
4.  我们可以在适当的时候抛出任何我们想抛出的异常类型。`throw new SyntaxError("语法错误...");`

##### 6.1.4.1、主动抛出内置异常

```javascript
/*该函数接收一个数字，返回它的平方。*/
function foo(num) {
    if (typeof num == "number") {
        return num * num;
    } else {
        throw new TypeError("您输入的是一个非法数字！")
    }
}

console.log(foo(4));
console.log(foo("abc"));
1234567891011
```

![image-20201023082421480](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/a3425b73f0f2962ae92c205e999599a0png.jpg)

##### 6.1.4.2、主动抛出自定义异常

我们不仅仅可以抛出js内置的错误类型的对象，也可以自定义错误类型，然后抛出自定义错误类型的对象。

如果要自定义错误类型，只需要继承任何一个自定义错误类型都可以，一般直接继承Error即可。

```javascript
/*自定义错误*/
function MyError(message) {
    this.message = "注意：这是自定义的错误"
    this.name = "自定义错误";
}
MyError.prototype = new Error();

try {
    throw new MyError("注意：这是自定义错误类型")
} catch (error) {
    console.log(error.message)
}
123456789101112
```

![image-20201023082719743](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/af54c6e23dcfa75340d0f5ea5389b644png.jpg)

### 6.2、JSON

#### 6.2.1、JSON概述

JSON：JavaScript Object Notation（JavaScript 对象标记法），它是一种存储和交换数据的语法。

当数据在浏览器与服务器之间进行交换时，这些数据只能是文本，JSON 属于文本并且我们能够把任何 JavaScript 对象转换为 JSON，然后将 JSON 发送到服务器。我们也能把从服务器接收到的任何 JSON 转换为 JavaScript 对象。以这样的方式，我们能够把数据作为 JavaScript 对象来处理，无需复杂的解析和转译。

#### 6.2.2、JSON语法

在json中，每一个数据项，都是由一个键值对（或者说是名值对）组成的，但是键必须是字符串，且由双引号包围，而值必须是以下数据类型之一：

+   字符串（在 JSON 中，字符串值必须由双引号编写）
+   数字
+   对象（JSON 对象）
+   数组
+   布尔
+   null

JSON 的值不可以是以下数据类型之一：

+   函数
+   日期
+   undefined

因为 JSON 语法由 JavaScript 对象标记法衍生而来，所以很少需要其它额外的软件来处理 JavaScript 中的 JSON。

通过 JavaScript，您能够创建对象并向其分配数据，就像这样：

```javascript
var person = {"name": "zhangsan", "age": 62, "city": "BeiJing"};
console.log(person);
12
```

![image-20201023091704109](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/168dd4a28080cbbb3fc6a7a6047b3fa4png.jpg)

#### 6.2.3、JSON数据类型

##### 6.2.3.1、JSON 字符串

JSON 中的字符串必须用双引号包围。

```json
{"name": "John"}
1
```

##### 6.2.3.2、JSON 数字

JSON 中的数字必须是整数或浮点数。

```json
{"age": 30}
1
```

##### 6.2.3.3、JSON 对象

JSON 中的值可以是对象，JSON 中作为值的对象必须遵守与 JSON 对象相同的规则。

```json
{
    "employee": {"name": "Bill Gates", "age": 62, "city": "Seattle"}
}
123
```

##### 6.2.3.4、JSON 数组

JSON 中的值可以是数组。

```json
{
    "employees": ["Bill", "Steve", "David"]
}
123
```

##### 6.2.3.5、JSON 布尔

JSON 中的值可以是 true/false。

```json
{"sale": true}
1
```

##### 6.2.3.6、JSON null

JSON 中的值可以是 null。

```json
{"middlename": null}
1
```

#### 6.2.4、JSON字符串转JS对象

JSON.parse()：可以将以JSON字符串转换为JS对象，它需要一个JSON字符串作为参数，会将该字符串转换为JS对象并返回

案例演示：

```javascript
var jsonStr = '{"name":"孙悟空","age":18,"gender":"男"}';
var obj = JSON.parse(jsonStr);
console.log(obj);
123
```

![image-20201023093124404](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/3a5562ae1ca1db8bb45b7c1909a161bapng.jpg)

> 注意 ：JSON这个对象在IE7及以下的浏览器中不支持，所以在这些浏览器中调用时会报错

#### 6.2.5、JS对象转JSON字符串

JSON.stringify()：可以将一个JS对象转换为JSON字符串，需要一个js对象作为参数，会返回一个JSON字符串

案例演示：

```javascript
var obj = {name: "猪八戒", age: 28, gender: "男"};
var jsonStr = JSON.stringify(obj);
console.log(jsonStr);
123
```

![image-20201023093346336](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/4dacbb96cb970485f6793527c93b0160png.jpg)

> 注意 ：JSON这个对象在IE7及以下的浏览器中不支持，所以在这些浏览器中调用时会报错

### 6.3、AJAX

#### 6.3.1、AJAX概述

传统的web交互是用户触发一个http请求服务器，然后服务器收到之后，在做出响应到用户，并且返回一个新的页面，每当服务器处理客户端提交的请求时，客户都只能空闲等待，并且哪怕只是一次很小的交互、只需从服务器端得到很简单的一个数据，都要返回一个完整的HTML页，而用户每次都要浪费时间和带宽去重新读取整个页面。这个做法浪费了许多带宽，由于每次应用的交互都需要向服务器发送请求，应用的响应时间就依赖于服务器的响应时间，这导致了用户界面的响应比本地应用慢得多。

AJAX 的出现,刚好解决了传统方法的缺陷，AJAX 是一种用于创建快速动态网页的技术，通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新，这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

#### 6.3.2、AJAX的XMLHttpRequest对象

**AJAX 的核心是 XMLHttpRequest 对象。** 所有现代浏览器都支持 XMLHttpRequest 对象。

XMLHttpRequest 对象用于幕后同服务器交换数据，这意味着可以更新网页的部分，而不需要重新加载整个页面。

所有现代浏览器（Chrom、IE7+、Firefox、Safari 以及 Opera）都有内建的 XMLHttpRequest 对象。

创建 XMLHttpRequest 的语法是：

```javascript
variable = new XMLHttpRequest();
1
```

老版本的 Internet Explorer（IE5 和 IE6）使用 ActiveX 对象：

```javascript
variable = new ActiveXObject("Microsoft.XMLHTTP");
1
```

为了应对所有浏览器，包括 IE5 和 IE6，请检查浏览器是否支持 XMLHttpRequest 对象。如果支持，创建 XMLHttpRequest 对象，如果不支持，则创建 ActiveX 对象：

```javascript
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
1234567
```

但是需要注意的是，出于安全原因，现代浏览器不允许跨域访问，这意味着尝试加载的网页和 XML 文件都必须位于相同服务器上。

#### 6.3.3、AJAX的XMLHttpRequest对象方法

| 方法 | 描述 |
| :-- | :-- |
| new XMLHttpRequest() | 创建新的 XMLHttpRequest 对象 |
| abort() | 取消当前请求 |
| getAllResponseHeaders() | 返回头部信息 |
| getResponseHeader() | 返回特定的头部信息 |
| open(*method*, *url*, *async*, *user*, *psw*) | 规定请求method：请求类型 GET 或 POST  
url：文件位置  
async：true（异步）或 false（同步）  
user：可选的用户名称  
psw：可选的密码 |
| send() | 将请求发送到服务器，用于 GET 请求 |
| send(*string*) | 将请求发送到服务器，用于 POST 请求 |
| setRequestHeader() | 向要发送的报头添加标签/值对 |

#### 6.3.4、AJAX的XMLHttpRequest对象属性

| 属性 | 描述 |
| :-- | :-- |
| onreadystatechange | 定义当 readyState 属性发生变化时被调用的函数 |
| readyState | 保存 XMLHttpRequest 的状态。  
0：请求未初始化  
1：服务器连接已建立  
2：请求已收到  
3：正在处理请求  
4：请求已完成且响应已就绪 |
| responseText | 以字符串返回响应数据 |
| responseXML | 以 XML 数据返回响应数据 |
| status | 返回请求的状态号  
200: "OK"  
403: "Forbidden"  
404: "Not Found"  
如需完整列表请访问 [Http 消息参考手册](https://www.w3school.com.cn/tags/ref_httpmessages.asp) |
| statusText | 返回状态文本（比如 “OK” 或 “Not Found”） |

#### 6.3.5、AJAX的GET请求

工程结构：

![image-20201023095114457](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/cbccdc02807b348ef9bbfd5ce8d3d55fpng.jpg)

users.json

```json
[
  {"name":"孙悟空","age":18,"gender":"男"},
  {"name":"猪八戒","age":19,"gender":"男"},
  {"name":"唐僧","age":20,"gender":"男"},
  {"name":"沙和尚","age":21,"gender":"男"}
]
123456
```

index.html

```javascript
//步骤一：创建异步对象
var ajax = new XMLHttpRequest();
//步骤二：设置请求的url参数，参数一是请求的类型，参数二是请求的url
ajax.open("get", "users.json");
//步骤三：发送请求
ajax.send();
//步骤四：注册事件 onreadystatechange 状态改变就会调用
ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
        //步骤五：如果能够进到这个判断，说明数据完美的回来了，并且请求的页面是存在的
        console.log(ajax.responseText);//输入响应的内容
    }
};
12345678910111213
```

控制台：

![image-20201023095301891](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/a487ff1087c8bef29db3cb5676141b77png.jpg)

#### 6.3.6、AJAX的POST请求

工程结构：

![image-20201023095114457](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/cbccdc02807b348ef9bbfd5ce8d3d55fpng.jpg)

users.json

```json
[
  {"name":"孙悟空","age":18,"gender":"男"},
  {"name":"猪八戒","age":19,"gender":"男"},
  {"name":"唐僧","age":20,"gender":"男"},
  {"name":"沙和尚","age":21,"gender":"男"}
]
123456
```

index.html

```javascript
//步骤一：创建异步对象
var ajax = new XMLHttpRequest();
//步骤二：设置请求的类型及url，注意：post请求一定要添加请求头才行不然会报错
ajax.open("post", "users.json");
ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//步骤三：发送请求
ajax.send();
//步骤四：注册事件 onreadystatechange 状态改变就会调用
ajax.onreadystatechange = function () {
    //步骤五：如果能够进到这个判断，说明数据完美的回来了，并且请求的页面是存在的
    if (ajax.readyState == 4 && ajax.status == 200) {
        console.log(ajax.responseText);//输入响应的内容
    }
};
1234567891011121314
```

控制台：

![image-20201023095301891](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/a487ff1087c8bef29db3cb5676141b77png.jpg)

#### 6.3.7、AJAX的请求整合

工程结构：

![image-20201023095114457](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/cbccdc02807b348ef9bbfd5ce8d3d55fpng.jpg)

users.json

```json
[
  {"name":"孙悟空","age":18,"gender":"男"},
  {"name":"猪八戒","age":19,"gender":"男"},
  {"name":"唐僧","age":20,"gender":"男"},
  {"name":"沙和尚","age":21,"gender":"男"}
]
123456
```

index.html

```javascript
var Ajax = {
    get: function (url, fn) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                fn.call(this, xhr.responseText);
            }
        };
        xhr.send();
    },
    post: function (url, data, fn) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                fn.call(this, xhr.responseText);
            }
        };
        xhr.send(data);
    }
};

// 演示GET请求
Ajax.get("users.json", function (response) {
    console.log(response);
});

// 演示POST请求
Ajax.post("users.json", "", function (response) {
    console.log(response);
});
123456789101112131415161718192021222324252627282930313233
```

控制台：

![image-20201023100152816](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/346a42bbc065826971536ba16658e8e2png.jpg)

### 6.4、Cookie

#### 6.4.1、Cookie概述

Cookie 是一些数据，存储于你电脑上的文本文件中，当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息，Cookie 的作用就是用于解决 “如何记录客户端的用户信息”：

+   当用户访问 web 页面时，它的名字可以记录在 cookie 中。
+   在用户下一次访问该页面时，可以在 cookie 中读取用户访问记录。

Cookie 以名/值对形式存储，如下所示：

```auto
username=zhangsan
1
```

当浏览器从服务器上请求 web 页面时， 属于该页面的 cookie 会被添加到该请求中，服务端通过这种方式来获取用户的信息。

JavaScript 可以使用 **document.cookie** 属性来创建 、读取、及删除 Cookie。

#### 6.4.2、Cookie创建

JavaScript 中，创建 cookie 如下所示：

```javascript
document.cookie = "username=zhangsan";
1
```

您还可以为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除。

```javascript
document.cookie = "username=zhangsan; expires=Thu, 18 Dec 2043 12:00:00 GMT";
1
```

您可以使用 path 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面。

```javascript
document.cookie = "username=zhangsan; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
1
```

#### 6.4.3、Cookie读取

JavaScript 中，读取 cookie 如下所示：

document.cookie 将以字符串的方式返回所有的 cookie，类型格式： cookie1=value; cookie2=value; cookie3=value;

```javascript
document.cookie = "username=zhangsan";
var cookies = document.cookie;
console.log(cookies);
123
```

![image-20201023124113003](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/bbd9e9a121d568158fa38a42ec84d257png.jpg)

#### 6.4.4、Cookie修改

JavaScript 中，修改 cookie 如下所示：

使用 document.cookie 将旧的 cookie 将被覆盖就是修改。

```javascript
document.cookie = "username=zhangsan";
document.cookie = "username=lisi";
var cookies = document.cookie;
console.log(cookies);
1234
```

![image-20201023124645689](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/ad35eb4323cb381b998e18c86c47ffaapng.jpg)

#### 6.4.5、Cookie删除

JavaScript 中，删除 cookie 如下所示：

删除 cookie 非常简单，您只需要设置 expires 参数为以前的时间即可，如下所示，设置为 Thu, 01 Jan 1970 00:00:00 GMT:

```javascript
document.cookie = "username=zhangsan";
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
var cookies = document.cookie;
console.log(cookies);
1234
```

![image-20201023124936436](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/8b91eb9f41682b690fb26517b7e383b0png.jpg)

#### 6.4.6、Cookie值设置函数

```javascript
/**
 * Cookie值设置函数
 * @param cname     cookie名称
 * @param cvalue    cookie值
 * @param exdays    过期天数
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
123456789101112
```

#### 6.4.7、Cookie值获取函数

```javascript
/**
 * Cookie值获取函数
 * @param cname     cookie名称
 * @returns {string}
 */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
1234567891011121314
```

### 6.5、WebStorage

#### 6.5.1、WebStorage概述

WebStorage是HTML5中本地存储的解决方案之一，在HTML5的WebStorage概念引入之前除去IE User Data、Flash Cookie、Google Gears等看名字就不靠谱的解决方案，浏览器兼容的本地存储方案只有使用Cookie。有同学可能会问，既然有了Cookie本地存储，为什么还要引入WebStorage的概念？那就要说一说Cookie的缺陷了：

1.  数据大小：作为存储容器，Cookie的大小限制在4KB左右这是非常坑爹的，尤其对于现在复杂的业务逻辑需求，4KB的容量除了存储一些配置字段还简单单值信息，对于绝大部分开发者来说真的不知指望什么了。
2.  安全性问题：由于在HTTP请求中的Cookie是明文传递的（HTTPS不是），带来的安全性问题还是很大的。
3.  网络负担：我们知道Cookie会被附加在每个HTTP请求中，在HttpRequest和HttpResponse的header中都是要被传输的，所以无形中增加了一些不必要的流量损失。

虽然WebStorage是HTML5新增的本地存储解决方案之一，但并不是为了取代Cookie而制定的标准，Cookie作为HTTP协议的一部分用来处理客户端和服务器通信是不可或缺的，session正是依赖于实现的客户端状态保持。WebStorage的意图在于解决本来不应该Cookie做，却不得不用Cookie的本地存储的应用场景。

#### 6.5.2、WebStorage分类

Web Storage又分为两种： sessionStorage 和localStorage ，即这两个是Storage的一个实例。从字面意思就可以很清楚的看出来，sessionStorage将数据保存在session中，浏览器关闭也就没了；而localStorage则一直将数据保存在客户端本地； 不管是sessionStorage，还是localStorage，使用的API都相同。

localStorage和sessionStorage只能存储字符串类型，对于复杂的对象可以使用ECMAScript提供的JSON对象的stringify和parse来处理，低版本IE可以使用[json2.js](https://github.com/douglascrockford/JSON-js/blob/master/json2.js)

#### 6.5.3、localStorage方法

**对象介绍：**

localStorage在本地永久性存储数据，除非显式将其删除或清空。

**常见方法：**

+   保存单个数据：localStorage.setItem(key,value);
+   读取单个数据：localStorage.getItem(key);
+   删除单个数据：localStorage.removeItem(key);
+   删除所有数据：localStorage.clear();
+   获取某个索引的key：localStorage.key(index);

**案例演示：**

```javascript
// 保存数据
localStorage.setItem("username", "zhangsan");

// 读取单个数据
console.log(localStorage.getItem("username"));
console.log("===============");

// 删除单个数据
localStorage.removeItem("username");
console.log(localStorage.getItem("username"));
console.log("===============");

// 保存两个数据
localStorage.setItem("age", 18);
localStorage.setItem("sex", "男");
console.log("age=" + localStorage.getItem("age"));
console.log("sex=" + localStorage.getItem("sex"));
console.log("===============");

// 使用for-in循环来迭代localStorage中的键值对、属性和方法：
for (var key in localStorage) {
    console.log(key + "=" + localStorage[key]);
}
console.log("===============");

// 使用for循环来迭代localStorage中的键值对：
for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    console.log(key + "=" + value);
}
console.log("===============");

// 删除所有数据
localStorage.clear();
1234567891011121314151617181920212223242526272829303132333435
```

**控制台：**

![image-20201023220221557](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/38946de81e0d1034b0dca830db2fc692png.jpg)

#### 6.5.4、sessionStorage方法

**对象介绍：**

sessionStorage对象存储特定于某个对话的数据，也就是它的生命周期为当前窗口或标签页，一旦窗口或标签页被永久关闭了，那么所有通过sessionStorage存储的数据也就被清空了。存储在sessionStorage中的数据可以跨越页面刷新而存在，同时如果浏览器支持，浏览器崩溃并重启之后依然可以使用（注意：Firefox和Weblit都支持，IE则不行）。

因为sessionStorage对象绑定于某个服务器会话，所以当文件在本地运行的时候是不可用的。存储在sessionStorage中的数据只能由最初给对象存储数据的页面访问到，所以对多页面应用有限制。

不同浏览器写入数据方法略有不同。Firefox和Webkit实现了同步写入，所以添加到存储空间中的数据是立刻被提交的。而IE的实现则是异步写入数据，所以在设置数据和将数据实际写入磁盘之间可能有一些延迟。

**常见方法：**

+   保存单个数据：sessionStorage.setItem(key,value);
+   读取单个数据：sessionStorage.getItem(key);
+   删除单个数据：sessionStorage.removeItem(key);
+   删除所有数据：sessionStorage.clear();
+   获取某个索引的key：sessionStorage.key(index);

**案例演示：**

```javascript
// 保存数据
sessionStorage.setItem("username", "zhangsan");

// 读取单个数据
console.log(sessionStorage.getItem("username"));
console.log("===============");

// 删除单个数据
sessionStorage.removeItem("username");
console.log(sessionStorage.getItem("username"));
console.log("===============");

// 保存两个数据
sessionStorage.setItem("age", 18);
sessionStorage.setItem("sex", "男");
console.log("age=" + sessionStorage.getItem("age"));
console.log("sex=" + sessionStorage.getItem("sex"));
console.log("===============");

// 使用for-in循环来迭代sessionStorage中的键值对、属性和方法：
for (var key in sessionStorage) {
    console.log(key + "=" + sessionStorage[key]);
}
console.log("===============");

// 使用for循环来迭代sessionStorage中的键值对：
for (var i = 0; i < sessionStorage.length; i++) {
    var key = sessionStorage.key(i);
    var value = sessionStorage.getItem(key);
    console.log(key + "=" + value);
}
console.log("===============");

// 删除所有数据
sessionStorage.clear();
1234567891011121314151617181920212223242526272829303132333435
```

**控制台：**

![image-20201023220326391](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/c4d0f1bb7713653559254c2a76e40b57png.jpg)

### 6.6、Closure

#### 6.6.1、闭包引入

**需求信息：点击某个按钮，提示"点击的是第n个按钮"**

第一种解决方法：将btn所对应的下标保存在btn上

```javascript
var btns = document.getElementsByTagName('button');

//将btn所对应的下标保存在btn上
for (var i = 0, length = btns.length; i < length; i++) {
    var btn = btns[i];
    btn.index = i;
    btn.onclick = function () {
        alert('第' + (this.index + 1) + '个');
    }
}
12345678910
```

第二种解决方法：利用闭包延长局部变量的生命周期

```javascript
var btns = document.getElementsByTagName('button');

// 利用闭包延长局部变量的生命周期
for (var i = 0, length = btns.length; i < length; i++) {
    (function (j) {
        var btn = btns[j];
        btn.onclick = function () {
            alert('第' + (j + 1) + '个');
        }
    })(i);
}
1234567891011
```

#### 6.6.2、闭包概念

+   **如何产生闭包?**
    +   当一个嵌套的内部(子)函数引用了嵌套的外部(父)函数的变量(函数)时，就产生了闭包
+   **什么才是闭包？**
    +   理解一：闭包是嵌套的内部函数(绝大部分人认为)
    +   理解二：包含被引用变量(函数)的对象(极少部分人认为)
+   **闭包的作用？**
    +   它的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中

#### 6.6.3、闭包演示

```javascript
function fun1() {
    var a = 2;
    function subFun() {
        a++;
        console.log(a);
    }
    return subFun;
}

var f1 = fun1();
f1();
f1();
console.log("===============");

function fun2() {
    var a = 2;
    function subFun() {
        a--;
        console.log(a);
    }
    return subFun;
}

var f2 = fun2();
f2();
f2();
console.log("===============");
123456789101112131415161718192021222324252627
```

![image-20201023225902988](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/15cc33b9fc2644390db71bf8a602228bpng.jpg)

#### 6.6.4、闭包生命周期

生命周期：

1.  产生：在嵌套内部函数定义执行完时就产生了(不是在调用)
2.  死亡：在嵌套的内部函数成为垃圾对象时就死亡了

演示说明：

```javascript
function fn1() {
    //此时闭包就已经产生了(函数提升, 内部函数对象已经创建了)
    var a = 2;

    function fn2() {
        a++;
        console.log(a);
    }

    return fn2;
}

var f = fn1();
f(); // 3
f(); // 4
f = null; //闭包死亡(包含闭包的函数对象成为垃圾对象)
12345678910111213141516
```

#### 6.6.5、闭包应用

**闭包应用：** 定义JS模块

+   具有特定功能的js文件
+   将所有的数据和功能都封装在一个函数内部(私有的)
+   只向外暴露一个包含n个方法的对象或函数
+   模块的使用者，只需要通过模块暴露的对象调用方法来实现对应的功能

**案例演示：**

第一种格式：myModule.js

```javascript
function myModule() {
    //私有数据
    var msg = 'Hello, World';

    //操作数据的函数
    function doSomething() {
        console.log('doSomething() ' + msg.toUpperCase());
    }

    function doOtherthing() {
        console.log('doOtherthing() ' + msg.toLowerCase());
    }

    //向外暴露对象(给外部使用的方法)
    return {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }
}
12345678910111213141516171819
```

第一种使用：index.html

```javascript
var module = myModule();
module.doSomething();
module.doOtherthing();
123
```

![image-20201023231502831](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0dcf96f794b27fbf81ed792774d04427png.jpg)

第二种格式：myModule.js

```javascript
(function (window) {
    //私有数据
    var msg = 'Hello, World';

    //操作数据的函数
    function doSomething() {
        console.log('doSomething() ' + msg.toUpperCase());
    }

    function doOtherthing() {
        console.log('doOtherthing() ' + msg.toLowerCase());
    }

    //向外暴露对象(给外部使用的方法)
    window.myModule = {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }
})(window);
12345678910111213141516171819
```

第二种使用：index.html

```javascript
myModule.doSomething();
myModule.doOtherthing();
12
```

![image-20201023231821301](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/f8778f45222f1481269564ebd07cd66dpng.jpg)

## 第七章 JavaScript新特性

### 7.1、ECMAScript6新特性

#### 7.1.1、let 关键字

let 关键字用来声明变量，使用 let 声明的变量有几个特点：

+   不允许重复声明
+   块儿级作用域
+   不存在变量提升
+   不影响作用域链

> 注意：以后声明变量使用 let 就对了

**案例演示：创建四个div，单机每一个div让其变色**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        .item {
            width: 100px;
            height: 50px;
            border: solid 1px rgb(42, 156, 156);
            float: left;
            margin-right: 10px;
        }
    </style>
</head>
<body>
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>
<div class="item"></div>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script>
    // 获取div元素对象
    let items = document.getElementsByClassName('item');

    // 遍历并绑定事件
    for (let i = 0; i < items.length; i++) {
        items[i].onclick = function () {
            // 以前的做法：this.style.background = "pink";
            items[i].style.background = "pink";
        };
    }
</script>
</body>
</html>
123456789101112131415161718192021222324252627282930313233343536
```

![image-20201025151025642](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/512fdaff0ee049e1084d254b2a791c3cpng.jpg)

#### 7.1.2、const 关键字

const 关键字用来声明常量，const 声明有以下特点：

+   不允许重复声明
+   块儿级作用域
+   声明必须赋初始值
+   值不允许修改
+   标识符一般为大写

> 注意：声明对象类型使用 const，非对象类型声明选择 let

```javascript
// 声明常量
const MAX = 100;
console.log(MAX);

// 对于数组和对象的元素修改, 不算做对常量的修改, 不会报错
const TEAM1 = [1, 2, 3, 4];
const TEAM2 = [1, 2, 3, 4];
// 但是不能修改地址指向
// TEAM2 = TEAM1;
123456789
```

#### 7.1.3、变量的解构赋值

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值。

> 注意：频繁使用对象方法、数组元素，就可以使用解构赋值形式

**数组的解构赋值：**

```javascript
//数组的解构赋值
const arr = ["张学友", "刘德华", "黎明", "郭富城"];
let [zhang, liu, li, guo] = arr;
console.log(zhang);
console.log(liu);
console.log(li);
console.log(guo);
1234567
```

![image-20201025152604811](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/24f3d37fe6e76afb54524ef81f49a2cdpng.jpg)

**简单对象的解构赋值：**

```javascript
//对象的解构赋值
const lin = {
    name: "林志颖",
    tags: ["车手", "歌手", "小旋风", "演员"]
};
let {name, tags} = lin;
console.log(name);
console.log(tags);
12345678
```

![image-20201025152700504](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0a16977f1ff383a4d3fee94b13f96094png.jpg)

**复杂对象的解构赋值:**

```javascript
//复杂对象的解构赋值
let wangfei = {
    name: "王菲",
    age: 18,
    songs: ["红豆", "流年", "暧昧"],
    history: [
        {name: "窦唯"},
        {name: "李亚鹏"},
        {name: "谢霆锋"}
    ]
};
let {name, age, songs: [one, two, three], history: [first, second, third]} = wangfei;
console.log(name);
console.log(age);
console.log(one);
console.log(two);
console.log(three);
console.log(first);
console.log(second);
console.log(third);
1234567891011121314151617181920
```

![image-20201025152830276](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1228a8df723338aeda205fc79dd42134png.jpg)

#### 7.1.4、模板字符串

模板字符串（template string）是增强版的字符串，用反引号（\`）标识，特点：

+   字符串中可以出现换行符
+   可以使用 ${xxx} 形式输出变量

> 注意：当遇到字符串与变量拼接的情况使用模板字符串

**字符串中可以出现换行符：**

```javascript
//定义字符串
let str = `<ul>
               <li>沈腾</li>
               <li>玛丽</li>
               <li>魏翔</li>
               <li>艾伦</li>
           </ul>`;
console.log(str);
12345678
```

![image-20201025153705017](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/48b38244fb68fc870a837433c62cb32bpng.jpg)

**变量拼接:**

```javascript
//变量拼接
let name = '小可爱';
let result = `欢迎${name}访问我的文章`;
console.log(result);
1234
```

![image-20201025153746643](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/ecfdc6a7af1b5da1cf550381bccc5c8apng.jpg)

#### 7.1.5、简化对象写法

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法，这样的书写更加简洁。

> 注意：对象简写形式简化了代码，所以以后用简写就对了

```javascript
let name = "张三";
let age = 18;
let speak = function () {
    console.log(this.name);
};

//属性和方法简写
let person = {
    name,
    age,
    speak
};

console.log(person.name);
console.log(person.age);
person.speak();
12345678910111213141516
```

![image-20201025154304885](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6fc6ebead05126f203d02efafdabc87cpng.jpg)

#### 7.1.6、箭头函数

ES6 允许使用「箭头」（=>）定义函数，通用写法如下：

```javascript
let fn = (arg1, arg2, arg3) => {
    return arg1 + arg2 + arg3;
}
123
```

箭头函数的注意点：

+   如果形参只有一个，则小括号可以省略
+   函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果
+   箭头函数 this 指向声明时所在作用域下 this 的值，箭头函数不会更改 this 指向，用来指定回调函数会非常合适
+   箭头函数不能作为构造函数实例化
+   不能使用 arguments 实参

**省略小括号的情况：**

```javascript
let fn = num => {
    return num * 10;
};
123
```

**省略花括号的情况：**

```javascript
let fn = score => score * 20;
1
```

**this 指向声明时所在作用域中 this 的值：**

```javascript
// this 指向声明时所在作用域中 this 的值
let fn = () => {
    console.log(this);
}
fn();

let school = {
    name: "张三",
    getName() {
        let subFun = () => {
            console.log(this);
        }
        subFun();
    }
};
school.getName();
12345678910111213141516
```

![image-20201025155420505](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/65b2cb8951fc3d51027701bbdf61d112png.jpg)

#### 7.1.7、rest 参数

ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments 参数。

> 注意：rest 参数非常适合不定个数参数函数的场景

```javascript
// 作用与 arguments 类似
function add(...args) {
    console.log(args);
}
add(1, 2, 3, 4, 5);

// rest 参数必须是最后一个形参
function minus(a, b, ...args) {
    console.log(a, b, args);
}
minus(100, 1, 2, 3, 4, 5, 19);
1234567891011
```

![image-20201025160054563](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2d73b922309634af435f7df77145c979png.jpg)

#### 7.1.8、spread 扩展运算符

扩展运算符（spread）也是三个点（…），它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列，对数组进行解包。

**展开数组：**

```javascript
// 展开数组
let tfboys = ["德玛西亚之力", "德玛西亚之翼", "德玛西亚皇子"];
function fn() {
    console.log(arguments);
}
fn(...tfboys);
123456
```

![image-20201025161321223](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1e782c3083108830f368cba71c1e9368png.jpg)

**展开对象：**

```javascript
// 展开对象
let skillOne = {
    q: "致命打击"
};
let skillTwo = {
    w: "勇气"
};
let skillThree = {
    e: "审判"
};
let skillFour = {
    r: "德玛西亚正义"
};
let gailun = {...skillOne, ...skillTwo, ...skillThree, ...skillFour};
console.log(gailun);
123456789101112131415
```

![image-20201025161335012](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/ce03e28491fe9ce26429335b2a0a7202png.jpg)

#### 7.1.9、Symbol类型

##### 7.1.9.1、Symbol的使用

ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值，它是 JavaScript 语言的第七种数据类型，是一种类似于字符串的数据类型，Symbol 特点如下：

+   Symbol 的值是唯一的，用来解决命名冲突的问题
+   Symbol 值不能与其它数据进行运算
+   Symbol 定义的对象属性不能使用 for…in 循环遍 历 ，但是可以使用 Reflect.ownKeys 来获取对象的所有键名

```javascript
//创建 Symbol
let s1 = Symbol();
console.log(s1);
console.log(typeof s1);

//添加标识的 Symbol
let s2 = Symbol("张三");
let s2_2 = Symbol("张三");
console.log(s2);
console.log(s2_2);
console.log(s2 === s2_2);

//使用 Symbol for 定义
let s3 = Symbol.for("张三");
let s3_2 = Symbol.for("张三");
console.log(s3);
console.log(s3_2);
console.log(s3 === s3_2);

//在方法中使用 Symbol
let game = {
    name: "狼人杀",
    [Symbol('say')]: function () {
        console.log("我可以发言")
    },
    [Symbol('zibao')]: function () {
        console.log('我可以自爆');
    }
};
console.log(game);
123456789101112131415161718192021222324252627282930
```

![image-20201025173541630](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2600511cb9df354e5c72d3316719a1c9png.jpg)

> 注意：遇到唯一性的场景时要想到 Symbol

##### 7.1.9.2、Symbol内置值

除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法。

可以称这些方法为魔术方法，因为它们会在特定的场景下自动执行。

| 内置值 | 描述 |
| --- | --- |
| Symbol.hasInstance | 当其它对象使用 instanceof 运算符，判断是否为该对象的实例时，会调用这个方法 |
| Symbol.isConcatSpreadable | 对象的 Symbol.isConcatSpreadable 属性等于的是一个布尔值，表示该对象用于 Array.prototype.concat()时， 是否可以展开 |
| Symbol.species | 创建衍生对象时，会使用该属性 |
| Symbol.match | 当执行 str.match(myObject) 时，如果该属性存在，会调用它，返回该方法的返回值 |
| Symbol.replace | 当该对象被 str.replace(myObject)方法调用时，会返回该方法的返回值 |
| Symbol.search | 当该对象被 str.search (myObject)方法调用时，会返回该方法的返回值 |
| Symbol.split | 当该对象被 str.split(myObject)方法调用时，会返回该方法的返回值 |
| Symbol.iterator | 当对象进行 for…of 循环时，会调用 Symbol.iterator 方法， 返回该对象的默认遍历器 |
| Symbol.toPrimitive | 当对象被转为原始类型的值时，会调用这个方法，返 回该对象对应的原始类型值 |
| Symbol. toStringTag | 当对象上面调用 toString 方法时，返回该方法的返 回值 |
| Symbol. unscopables | 当对象指定了使用 with 关键字时，哪些属性会被 with 环境排除 |

**Symbol.hasInstance演示：**

```javascript
class Person {
    static [Symbol.hasInstance](param) {
        console.log("我被用来检测类型了");
    }
}
let o = {};
console.log(o instanceof Person);
1234567
```

![image-20201025173815146](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/41717ed7896872bc61f65beffcf2c2dapng.jpg)

**Symbol.isConcatSpreadable演示：**

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr2[Symbol.isConcatSpreadable] = true;
console.log(arr1.concat(arr2));

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
arr4[Symbol.isConcatSpreadable] = false;
console.log(arr3.concat(arr4));
123456789
```

![image-20201025174006835](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/e079e005a131be2683c6f92ae6d728ccpng.jpg)

#### 7.1.10、迭代器

遍历器（Iterator）就是一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作。ES6 创造了一种新的遍历命令 for…of 循环，Iterator 接口主要供 for…of 消费，原生具备 iterator 接口的数据：

+   Array
+   Arguments
+   Set
+   Map
+   String
+   TypedArray
+   NodeList

> 注意：需要自定义遍历数据的时候，要想到迭代器

工作原理：

1.  创建一个指针对象，指向当前数据结构的起始位置
2.  第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员
3.  接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员
4.  每调用 next 方法返回一个包含 value 和 done 属性的对象

**案例演示：遍历数组**

```javascript
//声明一个数组
const xiyou = ["唐僧", "孙悟空", "猪八戒", "沙僧"];
//使用 for...of 遍历数组
for (let v of xiyou) {
    console.log(v);
}
console.log("===============");

//获取迭代器对象
let iterator = xiyou[Symbol.iterator]();
//调用对象的next方法
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
12345678910111213141516
```

![image-20201025174729990](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0c55263632985fa8ee872268e2407206png.jpg)

**案例演示：自定义遍历数据**

```javascript
//声明一个对象
const banji = {
    name: "五班",
    stus: [
        "张三",
        "李四",
        "王五",
        "小六"
    ],
    [Symbol.iterator]() {
        //索引变量
        let index = 0;
        let _this = this;
        return {
            next: function () {
                if (index < _this.stus.length) {
                    const result = {value: _this.stus[index], done: false};
                    //下标自增
                    index++;
                    //返回结果
                    return result;
                } else {
                    return {value: undefined, done: true};
                }
            }
        };
    }
}

//遍历这个对象
for (let v of banji) {
    console.log(v);
}
123456789101112131415161718192021222324252627282930313233
```

![image-20201025181339376](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5d29be05a55f709ee949e215994b6babpng.jpg)

#### 7.1.11、生成器

生成器函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。

##### 7.1.11.1、生成器函数使用

代码说明：

+   \* 的位置没有限制
+   生成器函数返回的结果是迭代器对象，调用迭代器对象的 next 方法可以得到 yield 语句后的值
+   yield 相当于函数的暂停标记，也可以认为是函数的分隔符，每调用一次 next 方法，执行一段代码
+   next 方法可以传递实参，作为 yield 语句的返回值

```javascript
function * gen() {
    /*代码1开始执行*/
    console.log("代码1执行了");
    yield "一只没有耳朵";
    /*代码2开始执行*/
    console.log("代码2执行了");
    yield "一只没有尾巴";
    /*代码3开始执行*/
    console.log("代码3执行了");
    return "真奇怪";
}

let iterator = gen();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log("===============");

//遍历
for (let v of gen()) {
    console.log(v);
}
12345678910111213141516171819202122
```

![image-20201025194703172](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/82b6ab06a1bcf8b351c11d96933c3878png.jpg)

##### 7.1.11.2、生成器函数参数

```javascript
function * gen(arg) {
    console.log(arg);
    let one = yield 111;
    console.log(one);
    let two = yield 222;
    console.log(two);
    let three = yield 333;
    console.log(three);
}

//执行获取迭代器对象
let iterator = gen('AAA');
console.log(iterator.next());

//next方法可以传入实参
console.log(iterator.next('BBB'));
console.log(iterator.next('CCC'));
console.log(iterator.next('DDD'));
123456789101112131415161718
```

![image-20201025194822072](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6c2223d28ff80d1352e21c0c5ae861c9png.jpg)

##### 7.1.11.3、生成器函数实例

**案例演示：1s后控制台输出 111，2s后输出 222，3s后输出 333**

```javascript
function one() {
    setTimeout(() => {
        console.log(111);
        iterator.next();
    }, 1000)
}

function two() {
    setTimeout(() => {
        console.log(222);
        iterator.next();
    }, 2000)
}

function three() {
    setTimeout(() => {
        console.log(333);
        iterator.next();
    }, 3000)
}

function * gen() {
    yield one();
    yield two();
    yield three();
}

//调用生成器函数
let iterator = gen();
iterator.next();
123456789101112131415161718192021222324252627282930
```

![image-20201025200627574](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5f81e8fdfbcd85e80cb18d108c1b7a5fpng.jpg)

**案例演示：模拟获取 ，用户数据 ，订单数据 ，商品数据**

```javascript
function getUsers() {
    setTimeout(() => {
        let data = "用户数据";
        iterator.next(data);
    }, 1000);
}

function getOrders() {
    setTimeout(() => {
        let data = "订单数据";
        iterator.next(data);
    }, 1000);
}

function getGoods() {
    setTimeout(() => {
        let data = "商品数据";
        iterator.next(data);
    }, 1000);
}

function * gen() {
    let users = yield getUsers();
    console.log(users);
    let orders = yield getOrders();
    console.log(orders);
    let goods = yield getGoods();
    console.log(goods);
}

//调用生成器函数
let iterator = gen();
iterator.next();
123456789101112131415161718192021222324252627282930313233
```

![image-20201025201231357](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/c4c755a149149e55ac2db291505d942fpng.jpg)

#### 7.1.12、Promise

Promise 是 ES6 引入的异步编程的新解决方案，语法上 Promise 是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。

##### 7.1.12.1、Promise基本使用

```javascript
//实例化 Promise 对象
const p = new Promise(function (resolve, reject) {
    setTimeout(function () {

        // 成功调用resolve()处理
        let data = "数据读取成功";
        resolve(data);

        // 失败调用reject()处理
        let err = "数据读取失败";
        reject(err);

    }, 1000);
});

//调用 promise 对象的 then 方法
p.then(function (value) {
    console.log(value);
}, function (reason) {
    console.error(reason);
});
123456789101112131415161718192021
```

##### 7.1.12.2、Promise案例演示

**案例演示：**

```javascript
// 接口地址: https://api.apiopen.top/getJoke
const p = new Promise((resolve, reject) => {
    //1. 创建对象
    const xhr = new XMLHttpRequest();
    //2. 初始化
    xhr.open("GET", "https://api.apiopen.top/getJoke");
    //3. 发送
    xhr.send();
    //4. 绑定事件, 处理响应结果
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            //判断响应状态码 200-299
            if (xhr.status >= 200 && xhr.status < 300) {
                //表示成功
                resolve(xhr.response);
            } else {
                //如果失败
                reject(xhr.status);
            }
        }
    }
});

//指定回调
p.then(function (value) {
    console.log(value);
}, function (reason) {
    console.error(reason);
});
1234567891011121314151617181920212223242526272829
```

![image-20201025203323920](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/10b3ed62c4b36bcae451d656fbe83c1bpng.jpg)

##### 7.1.12.3、Promise-then方法

调用 then 方法，then 方法的返回结果是 Promise 对象，对象状态由回调函数的执行结果决定，如果回调函数中返回的结果是 非 promise 类型的属性，状态为成功，返回值为对象的成功的值

```javascript
//创建 promise 对象
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("用户数据");
    }, 1000)
});

//链式调用+箭头函数
p.then(value => {
    console.log(value);
    return value;
}).then(value => {
    console.log(value);
});
1234567891011121314
```

![image-20201025203756949](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/cad72e4d932720341b31a76b8dffa616png.jpg)

##### 7.1.12.4、Promise-catch方法

如果只想处理错误状态，我们可以使用 catch 方法

```javascript
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        //设置 p 对象的状态为失败, 并设置失败的值
        reject("出错啦!");
    }, 1000);
});

p.catch(function (reason) {
    console.error(reason);
});
12345678910
```

![image-20201025203944781](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7b7de624255b4848a91b7aa635661b2apng.jpg)

#### 7.1.13、Set

ES6 提供了新的数据结构 Set（集合）。它类似于数组，但成员的值都是唯一的，集合实现了 iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历，集合的属性和方法：

+   size：返回集合的元素个数
+   add()：增加一个新元素，返回当前集合
+   delete()：删除元素，返回 boolean 值
+   has()：检测集合中是否包含某个元素，返回 boolean 值
+   clear()：清空集合，返回 undefined

```javascript
//创建一个空集合
let s = new Set();
//创建一个非空集合
let s1 = new Set([1, 2, 3, 1, 2, 3]);
//集合属性与方法
//返回集合的元素个数
console.log(s1.size);
//添加新元素
console.log(s1.add(4));
//删除元素
console.log(s1.delete(1));
//检测是否存在某个值
console.log(s1.has(2));
//清空集合
console.log(s1.clear());
123456789101112131415
```

![image-20201025204233138](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/e7aded1b0eba0d1e9fad8cbb254d9457png.jpg)

#### 7.1.14、Map

ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键” 的范围不限于字符串，各种类型的值（包括对象）都可以当作键。Map 也实现了 iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历。Map 的属性和方法：

+   size：返回 Map 的元素个数
+   set()：增加一个新元素，返回当前 Map
+   get()：返回键名对象的键值
+   has()：检测 Map 中是否包含某个元素，返回 boolean 值
+   clear()：清空集合，返回 undefined

```javascript
//创建一个空 map
let m = new Map();
//创建一个非空 map
let m2 = new Map([
    ["name", "张三"],
    ["gender", "女"]
]);
//属性和方法
//获取映射元素的个数
console.log(m2.size);
//添加映射值
console.log(m2.set("age", 6));
//获取映射值
console.log(m2.get("age"));
//检测是否有该映射
console.log(m2.has("age"));
//清除
console.log(m2.clear());
123456789101112131415161718
```

![image-20201025204631735](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0ea101fac959721208c17d2400c26818png.jpg)

#### 7.1.15、class 类

ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过 class 关键字，可以定义类。基本上，ES6 的 class 可以看作只是 一个语法糖，它的绝大部分功能，ES5 都可以做到，新的 class 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已，它的一些如下：

+   class：声明类
+   constructor：定义构造函数初始化
+   extends：继承父类
+   super：调用父级构造方法
+   static：定义静态方法和属性

```javascript
//父类
class Phone {
    //构造方法
    constructor(brand, color, price) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }

    //对象方法
    call() {
        console.log("我可以打电话!!!")
    }
}

//子类
class SmartPhone extends Phone {
    constructor(brand, color, price, screen, pixel) {
        super(brand, color, price);
        this.screen = screen;
        this.pixel = pixel;
    }

    //子类方法
    photo() {
        console.log("我可以拍照!!");
    }

    playGame() {
        console.log("我可以玩游戏!!");
    }

    //方法重写
    call() {
        console.log("我可以进行视频通话!!");
    }

    //静态方法
    static run() {
        console.log("我可以运行程序")
    }

    static connect() {
        console.log("我可以建立连接")
    }
}

//实例化对象
const Nokia = new Phone("诺基亚", "灰色", 230);
const iPhone6s = new SmartPhone("苹果", "白色", 6088, "4.7inch", "500w");
//调用子类方法
iPhone6s.playGame();
//调用重写方法
iPhone6s.call();
//调用静态方法
SmartPhone.run();
1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556
```

![image-20201025205027699](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/dfc1ba59f0267af22d9d248bd2edd445png.jpg)

#### 7.1.16、数值扩展

##### 7.1.16.1、二进制和八进制

ES6 新增了二进制和八进制的表示方法

```javascript
let b = 0b1010//二进制
let o = 0o777;//八进制
let d = 100;//十进制
let x = 0xff;//十六进制
console.log(b);
console.log(o);
console.log(d);
console.log(x);
12345678
```

![image-20201025205402446](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/ccc7cd161549663cdf4bafdd52a9c307png.jpg)

##### 7.1.16.2、Number.EPSILON

Number.EPSILON：它是 JavaScript 表示的最小精度，EPSILON 属性的值接近于 2.2204460492503130808472633361816E-16

```javascript
function equal(a, b) {
    if (Math.abs(a - b) < Number.EPSILON) {
        return true;
    } else {
        return false;
    }
}
console.log(0.1 + 0.2 === 0.3);
console.log(equal(0.1 + 0.2, 0.3));
123456789
```

![image-20201025205537398](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/c48ec81356d20d9a36f11249e0bddf2cpng.jpg)

##### 7.1.16.3、Number.isFinite

Number.isFinite：检测一个数值是否为有限数

```javascript
console.log(Number.isFinite(100));
console.log(Number.isFinite(100 / 0));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
1234
```

![image-20201025205822198](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/700881da740dae3550ee10b2d8804b09png.jpg)

##### 7.1.16.4、Number.isNaN

Number.isNaN：检测一个数值是否为 NaN

```javascript
console.log(Number.isNaN(123));
1
```

![image-20201025205950242](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/ed985f04e3adc9bc0ebb073303e52cb7png.jpg)

##### 7.1.16.5、Number.parseInt

Number.parseInt：将一个字符串转换为整数

```javascript
console.log(Number.parseInt("123abc"));
1
```

![image-20201025210139403](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/cc4cb863732bbb713b8d6668bc826360png.jpg)

##### 7.1.16.6、Number.parseFloat

Number.parseFloat：将一个字符串转换为浮点数

```javascript
console.log(Number.parseFloat("3.1415926神奇"));
1
```

![image-20201025210334463](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/4a38d721c2c462b021332cde3fdec64cpng.jpg)

##### 7.1.16.7、Number.isInteger

Number.isInteger：判断一个数是否为整数

```javascript
console.log(Number.isInteger(5));
console.log(Number.isInteger(2.5));
12
```

![image-20201025210435568](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/472c378a9d22d5e40850f78847b339adpng.jpg)

##### 7.1.16.8、Math.trunc

Math.trunc：将数字的小数部分抹掉

```javascript
console.log(Math.trunc(3.5));
1
```

![image-20201025210605825](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/c29bdc7c86e00ab61eff7207ac0b80d2png.jpg)

##### 7.1.16.9、Math.sign

Math.sign：判断一个数到底为正数、负数、还是零

```javascript
console.log(Math.sign(100));
console.log(Math.sign(0));
console.log(Math.sign(-20000));
123
```

![image-20201025210642315](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2de28a25bff42fbbb48df8957b4e23a4png.jpg)

#### 7.1.17、对象扩展

ES6 新增了一些 Object 对象的方法，例如：

+   Object.is：比较两个值是否严格相等，与『===』行为基本一致（+0 与 NaN）
+   Object.assign：对象的合并，将源对象的所有可枚举属性，复制到目标对象
+   \_\_proto\_\_、setPrototypeOf、 setPrototypeOf可以直接设置对象的原型

##### 7.1.17.1、Object.is

Object.is：判断两个值是否完全相等

```javascript
console.log(Object.is(120, 120));// ===
console.log(Object.is(NaN, NaN));// ===
console.log(NaN === NaN);// ===
123
```

![image-20201025211007712](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/b7351c47540ae436bd9ecb084c023d81png.jpg)

##### 7.1.17.2、Object.assign

Object.assign：对象的合并，后边的对象会把前边对象的相同属性和方法覆盖，没有的属性和方法会合并

```javascript
const config1 = {
    host: "localhost",
    port: 3306,
    name: "zhangsan",
    pass: "root",
    test1: "test1"
};
const config2 = {
    host: "127.0.0.1",
    port: 3309,
    name: "lisi",
    pass: "root",
    test2: "test2"
}
console.log(Object.assign(config1, config2));
123456789101112131415
```

![image-20201025221354637](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2079626380f79d522ce0eefc65b7acd3png.jpg)

##### 7.1.17.3、设置原型对象

+   Object.setPrototypeOf：设置原型对象
+   Object.getPrototypeof：获取原型对象

```javascript
const school = {
    name: "MySchool"
};
const cities = {
    xiaoqu: ["北京", "上海", "深圳"]
};
Object.setPrototypeOf(school, cities);
console.log(Object.getPrototypeOf(school));
console.log(school);
123456789
```

![image-20201025221735850](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/cedb01995ff451109f52119b94d7d29fpng.jpg)

#### 7.1.18、模块化

模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来。

##### 7.1.18.1、模块化的好处

+   防止命名冲突
+   代码复用
+   高维护性

##### 7.1.18.2、模块化的产品

CommonJS => NodeJS、Browserify

AMD => requireJS

CMD => seaJS

##### 7.1.18.3、模块化的语法

模块功能主要由两个命令构成：export 和 import。

+   export 命令用于规定模块的对外接口
+   import 命令用于输入其它模块提供的功能

##### 7.1.18.4、模块化的暴露

m1.js

```javascript
//方式一：分别暴露
export let school = "华北理工大学";

export function study() {
    console.log("我们要学习！");
}
123456
```

m2.js

```javascript
//方式二：统一暴露
let school = "华北理工大学";

function findJob() {
    console.log("我们要找工作！");
}

export {school, findJob};
12345678
```

m3.js

```javascript
//方式三：默认暴露
export default {
    school: "华北理工大学",
    change: function () {
        console.log("我们要改变自己！");
    }
}
1234567
```

##### 7.1.18.5、模块化的导入

index.html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script type="module">
    // 引入 m1.js 模块内容
    import * as m1 from "./m1.js";
    // 引入 m2.js 模块内容
    import * as m2 from "./m2.js";
    // 引入 m3.js 模块内容
    import * as m3 from "./m3.js";
     
    m1.study();
    m2.findJob();
    m3.default.change();
</script>
</body>
</html>
1234567891011121314151617181920212223
```

![image-20201025230535531](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/9359e2ec49b806026d716a81dda2ed32png.jpg)

##### 7.1.18.6、解构赋值形式

index.html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script type="module">
    // 引入 m1.js 模块内容
    import {school, study} from "./m1.js";
    // 引入 m2.js 模块内容
    import {school as s, findJob} from "./m2.js";
    // 引入 m3.js 模块内容
    import {default as m3} from "./m3.js";

    console.log(school);
    study();

    console.log(s);
    findJob();

    console.log(m3);
    m3.change();
</script>
</body>
</html>
12345678910111213141516171819202122232425262728
```

![image-20201025230758535](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/bacbf27db5e60a71a37e55a1d82b1264png.jpg)

> 注意：针对默认暴露还可以直接 `import m3 from "./m3.js"`

#### 7.1.19、浅拷贝和深拷贝

如何区分深拷贝与浅拷贝，简单点来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝；如果B没变，那就是深拷贝，深拷贝与浅拷贝的概念只存在于引用数据类型。

##### 7.1.19.1、浅拷贝

```javascript
var obj1 = {
    name: "张三",
    age: 20,
    speak: function () {
        console.log("我是" + this.name);
    }
};

var obj2 = obj1;

// 当修改obj2的属性和方法的时候，obj1相应的属性和方法也会改变
obj2.name = "李四";
console.log(obj1);
console.log(obj2);
1234567891011121314
```

![image-20201026083921606](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/bee35f58afe298e6cf3c012965c09d3cpng.jpg)

##### 7.1.19.2、深拷贝

###### 7.1.19.2.1、自带的

**Array：slice()、concat()、Array.from()、… 操作符：只能实现一维数组的深拷贝**

slice()方法演示：

```javascript
var arr1 = [1, 2, 3, 4];
var arr2 = arr1.slice();
arr2[0] = 200;
console.log(arr1);
console.log(arr2);
12345
```

![image-20201026084619174](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/488c2e352a382c6126ff8de5a5b896e2png.jpg)

concat()方法演示：

```javascript
var arr1 = [1, 2, 3, 4];
var arr2 = arr1.concat();
arr2[0] = 200;
console.log(arr1);
console.log(arr2);
12345
```

![image-20201026084557933](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/a7532b25cf6f78195c8541d1df9c3519png.jpg)

Array.from()方法演示：

```javascript
var arr1 = [1, 2, 3, 4];
var arr2 = Array.from(arr1);
arr2[0] = 200;
console.log(arr1);
console.log(arr2);
12345
```

![image-20201026084704745](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d959133035bbc2abfa02385159138cdbpng.jpg)

… 操作符演示：

```javascript
var arr1 = [1, 2, 3, 4];
var arr2 = [...arr1];
arr2[0] = 200;
console.log(arr1);
console.log(arr2);
12345
```

![image-20201026084831695](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2026747f7a1a86acd386bce79a4d0132png.jpg)

**Object：Object.assign()、… 操作符：只能实现一维对象的深拷贝**

Object.assign()方法演示：

```javascript
var obj1 = {
    name: "张三",
    age: 20,
    speak: function () {
        console.log("我是" + this.name);
    }
};

var obj2 = Object.assign({}, obj1);

// 当修改obj2的属性和方法的时候，obj1相应的属性和方法不会改变
obj2.name = "李四";
console.log(obj1);
console.log(obj2);
1234567891011121314
```

![image-20201026085247516](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/3b4c16fb3f910f3c989cd84cd2ce95a8png.jpg)

… 操作符演示：

```javascript
var obj1 = {
    name: "张三",
    age: 20,
    speak: function () {
        console.log("我是" + this.name);
    }
};

var obj2 = {
    ...obj1
};

// 当修改obj2的属性和方法的时候，obj1相应的属性和方法不会改变
obj2.name = "李四";
console.log(obj1);
console.log(obj2);
12345678910111213141516
```

![image-20201026085337223](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/46fe46f619ce70eade16623c2b43b350png.jpg)

**JSON.parse(JSON.stringify(obj))：可实现多维对象的深拷贝，但会忽略 `undefined` 、 `任意的函数` 、`Symbol 值`**

```javascript
var obj1 = {
    name: "张三",
    age: 20,
    birthday: {
        year: 1997,
        month: 12,
        day: 5
    },
    speak: function () {
        console.log("我是" + this.name);
    }
};

var obj2 = JSON.parse(JSON.stringify(obj1));

// 当修改obj2的属性和方法的时候，obj1相应的属性和方法不会改变
obj2.name = "李四";
console.log(obj1);
console.log(obj2);
12345678910111213141516171819
```

![image-20201026085639830](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d6e9c5b9168b5eb14bcbf0f462689517png.jpg)

> 注意：进行`JSON.stringify()`序列化的过程中，`undefined、任意的函数以及 symbol 值`，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时），由上面可知，JS 提供的自有方法并不能彻底解决Array、Object的深拷贝问题，因此我们应该自己实现。

###### 7.1.19.2.2、通用版

```javascript
var obj1 = {
    name: "张三",
    age: 20,
    birthday: {
        year: 1997,
        month: 12,
        day: 5
    },
    speak: function () {
        console.log("我是" + this.name);
    }
};

var obj2 = deepClone(obj1);

// 当修改obj2的属性和方法的时候，obj1相应的属性和方法不会改变
obj2.name = "李四";
console.log(obj1);
console.log(obj2);

/**
 * 深拷贝通用方法
 * @param obj   需要拷贝的对象
 * @param has
 * @returns {any|RegExp|Date}
 */
function deepClone(obj, has = new WeakMap()) {
    // 类型检查
    if (obj == null) return obj;
    if (obj instanceof Date) return obj;
    if (obj instanceof RegExp) return obj;
    if (!(typeof obj == "object")) return obj;

    // 构造对象
    const newObj = new obj.constructor;

    // 防止自引用导致的死循环
    if (has.get(obj)) return has.get(obj);
    has.set(obj, newObj);

    // 循环遍历属性及方法
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key]);
        }
    }

    // 返回对象
    return newObj;
}
1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950
```

![image-20201026090711359](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/e68c190ec1edb64a214bd288867a92b8png.jpg)

### 7.2、ECMAScript7新特性

#### 7.2.1、数组方法扩展

Array.prototype.includes：此方法用来检测数组中是否包含某个元素，返回布尔类型值

```javascript
const mingzhu = ["西游记", "红楼梦", "三国演义", "水浒传"];
console.log(mingzhu.includes("西游记"));
12
```

![image-20201026091832177](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/e4b400d870b3e5976b40776871c2f78dpng.jpg)

#### 7.2.2、幂运算

`**` 操作符的作用和 `Math.pow` 的作用是一样，请看代码：

```javascript
console.log(2 ** 10);
console.log(Math.pow(2, 10));
12
```

![image-20201026091938745](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7b803e38577da21fa70bac44bab7d0cbpng.jpg)

### 7.3、ECMAScript8新特性

#### 7.3.1、async 函数

async 函数的语法：

```javascript
async function fn(){
    
}
123
```

async 函数的返回值：

1.  返回的结果不是一个 Promise 类型的对象，返回的结果就是成功 Promise 对象
2.  返回的结果如果是一个 Promise 对象，具体需要看执行resolve方法还是reject方法
3.  抛出错误，返回的结果是一个失败的 Promise

async 函数的演示：

```javascript
//async 函数
async function fn() {
    return new Promise((resolve, reject) => {
        resolve('成功的数据');
        // reject("失败的错误");
    });
}

const result = fn();

//调用 then 方法
result.then(value => {
    console.log(value);
}, reason => {
    console.warn(reason);
});
12345678910111213141516
```

![image-20201026092543097](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/088d9c432c73c8f865c9ca77f5d12093png.jpg)

#### 7.3.2、await 表达式

async 和 await 两种语法结合可以让异步代码像同步代码一样

await 表达式的注意事项：

1.  await 必须写在 async 函数中
2.  await 右侧的表达式一般为 promise 对象
3.  await 返回的是 promise 成功的值
4.  await 的 promise 失败了, 就会抛出异常, 需要通过 try…catch 捕获处理

await 表达式的语法演示：

```javascript
//创建 promise 对象
const p = new Promise((resolve, reject) => {
    resolve("用户数据");
    //reject("失败啦!");
})

//await 要放在 async 函数中.
async function fun() {
    try {
        let result = await p;
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

//调用函数
fun();
123456789101112131415161718
```

![image-20201026093209030](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/cab3c52c81154dca5014c01658e9cc2dpng.jpg)

await 表达式的案例演示：async与await封装AJAX请求

```javascript
// 发送 AJAX 请求, 返回的结果是 Promise 对象
function sendAJAX(url) {
    return new Promise((resolve, reject) => {
        //1. 创建对象
        const x = new XMLHttpRequest();
        //2. 初始化
        x.open('GET', url);
        //3. 发送
        x.send();
        //4. 事件绑定
        x.onreadystatechange = function () {
            if (x.readyState === 4) {
                if (x.status >= 200 && x.status < 300) {
                    resolve(x.response);//成功
                } else {
                    reject(x.status);//失败
                }
            }
        }
    })
}


// async 与 await 测试
async function fun() {
    //发送 AJAX 请求 1
    let joke = await sendAJAX("https://api.apiopen.top/getJoke");
    //发送 AJAX 请求 2
    let tianqi = await sendAJAX('https://www.tianqiapi.com/api/?version=v1&city=%E5%8C%97%E4%BA%AC&appid=23941491&appsecret=TXoD5e8P')

    console.log(joke);
    console.error(tianqi);//为了区别数据，我这里用红色的error输出
}

// 调用函数
fun();
123456789101112131415161718192021222324252627282930313233343536
```

![image-20201026093545830](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6e06f57e3d9ffd50f214cb305f8097eapng.jpg)

#### 7.3.3、对象方法拓展

+   Object.keys()方法返回一个给定对象的所有可枚举键值的数组
+   Object.values()方法返回一个给定对象的所有可枚举属性值的数组
+   Object.entries()方法返回一个给定对象自身可遍历属性 \[key,value\] 的数组

```javascript
//声明对象
const person = {
    name: "张三",
    age: 20
};

//获取对象所有的键
console.log(Object.keys(person));
//获取对象所有的值
console.log(Object.values(person));
//获取对象所有的键值对数组
console.log(Object.entries(person));
//创建 Map
const m = new Map(Object.entries(person));
console.log(m.get("name"));
123456789101112131415
```

![image-20201026094205153](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/a5d826c3965016751008b2924b70fca1png.jpg)

Object.getOwnPropertyDescriptors方法返回指定对象所有自身属性的描述对象

```javascript
//声明对象
const person = {
    name: "张三",
    age: 20
};
//对象属性的描述对象
console.log(Object.getOwnPropertyDescriptors(person));

//声明对象
const obj = Object.create(null, {
    name: {
        //设置值
        value: "李四",
        //属性特性
        writable: true,
        configurable: true,
        enumerable: true
    },
    age: {
        //设置值
        value: 21,
        //属性特性
        writable: true,
        configurable: true,
        enumerable: true
    }
});
//对象属性的描述对象
console.log(Object.getOwnPropertyDescriptors(obj));
1234567891011121314151617181920212223242526272829
```

![image-20201026094408076](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/e6b85a1740fbc2eb03955bf2ba080a3fpng.jpg)

### 7.4、ECMAScript9新特性

#### 7.4.1、对象拓展

Rest 参数与 spread 扩展运算符在 ES6 中已经引入，不过 ES6 中只针对于数组，在 ES9 中为对象提供了像数组一样的 rest 参数和扩展运算符

##### 7.4.1.1、对象展开

```javascript
function connect({host, port, ...user}) {
    console.log(host);
    console.log(port);
    console.log(user);
}

connect({
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    type: 'master'
});
12345678910111213
```

![image-20201026123314827](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6f70fb67fbdfadbe56aaaf13e0799dedpng.jpg)

##### 7.4.1.2、对象合并

```javascript
const skillOne = {
    q: '天音波'
};

const skillTwo = {
    w: '金钟罩'
};

const skillThree = {
    e: '天雷破'
};

const skillFour = {
    r: '猛龙摆尾'
};

const mangseng = {...skillOne, ...skillTwo, ...skillThree, ...skillFour};
console.log(mangseng);
123456789101112131415161718
```

![image-20201026123443198](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d65410dd66d3727b1a690e7d61a8a5a8png.jpg)

#### 7.4.2、正则表达式拓展

##### 7.4.2.1、命名捕获分组

ES9 允许命名捕获组使用符号 `?<name>` ，这样获取捕获结果可读性更强。使用数组下标不好吗？的确不好，因为如果一旦你想要获取的元素一旦增加，数组下标就改变了，所以建议使用命名捕获分组

```javascript
let str = '<a href="https://www.baidu.com">打开百度，你就知道！</a>';
const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/;
const result = reg.exec(str);
console.log(result.groups.url);
console.log(result.groups.text);
12345
```

![image-20201026124054368](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6c9a8bfa256fe71c2f0d0629bc8b1dc4png.jpg)

##### 7.4.2.2、正向断言

ES9 支持正向断言，通过对匹配结果后面的内容进行判断，对匹配进行筛选。

```javascript
//声明字符串
let str = "订单编号开始123456789订单编号结束";
//正向断言
const reg = /\d+(?=订单编号结束)/;//也就是说数字的后边一定要跟着 订单编号结束
const result = reg.exec(str);
console.log(result);
123456
```

![image-20201026124911298](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/901a91377384cca7d83fb234e2432dddpng.jpg)

##### 7.4.2.3、反向断言

ES9 支持反向断言，通过对匹配结果前面的内容进行判断，对匹配进行筛选。

```javascript
//声明字符串
let str = "订单编号开始123456789订单编号结束";
//正向断言
const reg = /(?<=订单编号开始)\d+/;//也就是说数字的前边一定要跟着 订单编号开始
const result = reg.exec(str);
console.log(result);
123456
```

![image-20201026125048460](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/79203ce660148589149bd46d57bc82e7png.jpg)

##### 7.4.2.4、dotAll模式

正则表达式中点 `.` 匹配除回车外的任何单字符，标记 `s` 改变这种行为，允许行终止符出现，也就是dotAll模式

```javascript
let str = `
<ul>
     <li>
         <a>肖生克的救赎</a>
         <p>上映日期: 1994-09-10</p>
         </li>
     <li>
         <a>阿甘正传</a>
         <p>上映日期: 1994-07-06</p>
     </li>
</ul>`;

//声明正则
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs;

// 执行匹配
let result;
let data = [];
while (result = reg.exec(str)) {
    data.push({title: result[1], time: result[2]});
}

//输出结果
console.log(data);
123456789101112131415161718192021222324
```

![image-20201026125632778](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/b53c674755a70742dba710cf665704a4png.jpg)

### 7.5、ECMAScript10新特性

#### 7.5.1、对象方法拓展

`Object.fromEntries()`方法是`Object.entries()`的逆操作，用于将一个键值对数组转为对象。

```javascript
//ES6：Map
//ES10：Object.fromEntries
const m = new Map();
m.set("name", "张三");
m.set("age", 20);
const result = Object.fromEntries(m);
console.log(result);

//ES8：Object.entries
const arr = Object.entries(result);
console.log(arr);
1234567891011
```

![image-20201026130157037](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d48a76ed23116b708c4f981eb78a7882png.jpg)

#### 7.5.2、字符串方法拓展

```javascript
let str = "   iloveyou   ";
console.log(str.trimStart());//只去除前边的空格
console.log(str.trimEnd());//只去除后边的空格
123
```

![image-20201026130328997](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/790e8e8f6cee6031b61ad4d8762b2e36png.jpg)

#### 7.5.3、数组方法拓展

flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回，说白了就是将多维数组转化为低维数组。

```javascript
const arr1 = [1, 2, 3, 4, [5, 6]];
console.log(arr1.flat());
const arr2 = [1, 2, 3, 4, [5, 6, [7, 8, 9]]];
console.log(arr2.flat());
console.log(arr2.flat(1));//参数为深度是一个数字
console.log(arr2.flat(2));//参数为深度是一个数字
123456
```

![image-20201026130807695](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/f6fa39cb6ab22812eb68f2fdbfa10f9epng.jpg)

flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。

```javascript
var arr1 = [1, 2, 3, 4];
console.log(arr1.map(x => x * 2));

var arr2 = [1, 2, 3, 4];
console.log(arr2.flatMap(x => x * 2));
12345
```

![image-20201026133203754](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/cadf335ff6e759694db79ae9a5a7f195png.jpg)

#### 7.5.4、Symbol属性拓展

Symbol.prototype.description用来读取Symbol的描述值

```javascript
//创建 Symbol
let s = Symbol("张三");
console.log(s.description);
123
```

![image-20201026133827612](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6db57b0e7952571ecd179da2be48dffdpng.jpg)

### 7.6、ECMAScript11新特性

#### 7.6.1、class 私有属性

私有属性只能在class中访问

```javascript
class Person {
    //公有属性
    name;
    //私有属性
    #age;
    #weight;

    //构造方法
    constructor(name, age, weight) {
        this.name = name;
        this.#age = age;
        this.#weight = weight;
    }

    //普通方法
    intro() {
        console.log(this.name);
        console.log(this.#age);
        console.log(this.#weight);
    }
}

//实例化
const girl = new Person("小可爱", 18, "45kg");
girl.intro();
12345678910111213141516171819202122232425
```

![image-20201026134454658](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/476c3e65f081998666524ca565d50105png.jpg)

#### 7.6.2、Promise.allSettled

该Promise.allSettled()方法返回一个在所有给定的promise都已经fulfilled或rejected后的promise，并带有一个对象数组，每个对象表示对应的promise结果。当您有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个promise的结果时，通常使用它。

相比之下，Promise.all() 更适合彼此相互依赖或者在其中任何一个reject时立即结束。

```javascript
//声明两个promise对象
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("商品数据 - 1");
    }, 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("商品数据 - 2");
        reject("出错啦!");
    }, 1000);
});

//调用 allsettled 方法
const result1 = Promise.allSettled([p1, p2]);
console.log(result1);

//调用 all 方法
const result2 = Promise.all([p1, p2]);
console.log(result2);
123456789101112131415161718192021
```

![image-20201026135411075](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/348983b6d2dd9cee6148b53381c0ff56png.jpg)

#### 7.6.3、字符串方法扩展

`String.prototype.matchAll()` 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。

```javascript
let str =
`<ul>
    <li>
        <a>肖生克的救赎</a>
        <p>上映日期: 1994-09-10</p>
    </li>
    <li>
        <a>阿甘正传</a>
        <p>上映日期: 1994-07-06</p>
    </li>
</ul>`;

//声明正则
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/sg;

//调用方法
const result = str.matchAll(reg);
for (let v of result) {
    console.log(v);
}
1234567891011121314151617181920
```

![image-20201026140033825](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7132a44e609c8c4ff8af51496bb1604epng.jpg)

#### 7.6.4、可选链操作符

当我们要使用传进来的一个属性值的时候，我们不知道这个属性值到底有没有传，我们可以使用&&运算符一级一级判断，就像这样 `const dbHost = config && config.db && config.db.host;`但是这样会显得很麻烦，所以在ES11 中就提供了可选链操作符，它就简化了代码，变成了这样 `const dbHost = config?.db?.host;` 另一方面，即使用户没有传入这个属性，我们用了也不会报错，而是undefined

```javascript
function connect(config) {
    // const dbHost = config && config.db && config.db.host;
    const dbHost = config?.db?.host;
    console.log(dbHost);
}

connect({
    db: {
        host: "192.168.1.100",
        username: "root"
    },
    cache: {
        host: "192.168.1.200",
        username: "admin"
    }
})
12345678910111213141516
```

![image-20201026140226072](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/cde165918da7d6fb379450e291e7be3fpng.jpg)

#### 7.6.5、动态 import

以前我们import 导入模块是在一开始的时候就全部导入了，这样在模块很多的时候，会显得网页速度加载很慢，在ES11中就提供了一种动态import，案例演示如下：

m1.js

```javascript
//分别暴露
export let school = "华北理工大学";

export function study() {
    console.log("我们要学习！");
}
123456
```

index.html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<button id="btn">点击我，加载m1.js模块</button>

<!-- 在这里写JavaScript代码，因为JavaScript是由上到下执行的 -->
<script type="module">
    const btn = document.getElementById("btn");

    btn.onclick = function(){
        import("./m1.js").then(module => {
            module.study();
        });
    };
</script>
</body>
</html>
```

![image-20201026141550755](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/75036bf35c65291685a9e8f5a9375060png.jpg)

#### 7.6.6、BigInt类型

`BigInt`数据类型的目的是比`Number`数据类型支持的范围更大的整数值。在对大整数执行数学运算时，以任意精度表示整数的能力尤为重要。使用`BigInt`，整数溢出将不再是问题。

此外，可以安全地使用更加准确时间戳，大整数ID等，而无需使用变通方法。 它就是JS 第二个数字数据类型，也将是 JS 第8种基本数据类型：

+   Boolean
+   Null
+   Undefined
+   Number
+   BigInt
+   String
+   Symbol
+   Object

对于学过其它语言的程序员来说，JS中缺少显式整数类型常常令人困惑。许多编程语言支持多种数字类型，如浮点型、双精度型、整数型和双精度型，但JS却不是这样。在JS中，按照[IEEE 754-2008](https://en.wikipedia.org/wiki/IEEE_754-2008_revision)标准的定义，所有数字都以[双精度64位浮点](http://en.wikipedia.org/wiki/Double_precision_floating-point_format)格式表示。

在此标准下，无法精确表示的非常大的整数将自动四舍五入。确切地说，JS 中的`Number`类型只能安全地表示`-9007199254740991 (-(2^53-1))` 和`9007199254740991(2^53-1)`之间的整数，任何超出此范围的整数值都可能失去精度。

如何定义BigInt？需要在数字的后边加上一个n，例如;

```javascript
let n = 521n;
1
```

我们接下来演示一下，大整数运算的效果：

```javascript
let max = Number.MAX_SAFE_INTEGER;

console.log(max);
console.log(max + 1);
console.log(max + 2);

console.log(BigInt(max));
console.log(BigInt(max) + BigInt(1));
console.log(BigInt(max) + BigInt(2));
123456789
```

![image-20201026142137794](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/adf2085a5e10d8eae1a637f590056773png.jpg)

#### 7.6.7、globalThis

全局属性 `globalThis` 包含全局的 `this` 值，类似于全局对象（global object）。

```javascript
console.log(globalThis);
1
```

![image-20201026142439716](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5428e94503fb80d4f0f452b9c29aa0d5png.jpg)
