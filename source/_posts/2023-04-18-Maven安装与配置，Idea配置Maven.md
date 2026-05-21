---
title: Maven安装与配置，Idea配置Maven
date: 2022-04-18 15:31:00
tags: Maven
categories: 技术分享
cover: 'https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/Maven.jpg'
---


#### 文章目录

+   [一、下载Maven](#Maven_2)
+   [二、安装](#_9)
+   [三、配置环境变量](#_13)
+   [四、配置settings文件](#settings_38)
+   [五、idea配置](#idea_109)

  
maven安装之前要先安装jdk，请确保你的系统已经安装了jdk环境。


## 一、下载Maven

选择你需要的maven版本下载：[官网下载传送门](http://maven.apache.org/download.cgi)

我使用的是3.6.1版本：[maven-3.6.1-bin.zip](https://archive.apache.org/dist/maven/maven-3/3.6.1/binaries/)  


![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/3e4be3b6a81d582fde5ef774a0ab08c8png.jpg)

## 二、安装

把下载好的maven压缩包解压到一个没有中文，空格或其他特殊字符的[文件夹](https://so.csdn.net/so/search?q=%E6%96%87%E4%BB%B6%E5%A4%B9&spm=1001.2101.3001.7020)，如：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/794e30dc6fd233da7c5dd6d2eb8b25dapng.jpg)

## 三、配置[环境变量](https://so.csdn.net/so/search?q=%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F&spm=1001.2101.3001.7020)

1.右键此电脑->属性->高级[系统设置](https://so.csdn.net/so/search?q=%E7%B3%BB%E7%BB%9F%E8%AE%BE%E7%BD%AE&spm=1001.2101.3001.7020)\->环境变量

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/bc8f37214066344d6f5ae98e8d59cec2png.jpg)  
找到系统变量这一栏，点击新建。

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/95c17a80ea0557da205440adcbfd729cpng.jpg)

2.新建系统变量MAVEN\_HOME  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5a41d2620ecef80fccba14002b3f1fa1png.jpg)  
3.编辑系统变量Path，添加变量值%MAVEN\_HOME%\\bin

```auto
%MAVEN_HOME%\bin
1
```

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6c64ebe2551e9b35935021912e2bb062png.jpg)

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/ddd789558ded247504a6e070040fe392png.jpg)

4.验证安装是否成功，win+R运行cmd，输入mvn -v，如图所示则配置成功  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6f2437729cd43a3fdc9d993cc4297637png.jpg)

## 四、配置settings文件

1.在Maven安装目录conf目录下找到settings.xml配置文件，右键选择一种文本编辑器打开，我这里使用Notepad++打开  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/58c80dc72977f695196bd34d5bfebcdapng.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/77170e78aecd2887a311337f754e2494png.jpg)

2.修改本地仓库地址  
（1）在maven安装目录下新建本地仓库文件夹maven\_repository  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/728e5727fc03ad2e0323f8ee5ec14ec1png.jpg)  
（2）修改默认本地仓库地址  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/8a5379b7c44f944bc85db9739ce3d426png.jpg)  
3.配置私服，因为中央仓库在国外导致下载jar包很慢或者失败，所以我们改为国内的服务器，下面三个选择一个就可以了。

【阿里云】

```auto
<mirror>
  <id>aliyunmaven</id>
  <mirrorOf>*</mirrorOf>
  <name>阿里云公共仓库</name>
  <url>https://maven.aliyun.com/repository/public</url>
</mirror>
123456
```

【网易】

```auto
<mirror>
    <id>nexus-163</id>
    <mirrorOf>*</mirrorOf>
    <name>Nexus 163</name>
    <url>http://mirrors.163.com/maven/repository/maven-public/</url>
</mirror>
123456
```

【腾讯云】

```auto
<mirror>
    <id>nexus-tencentyun</id>
    <mirrorOf>*</mirrorOf>
    <name>Nexus tencentyun</name>
    <url>http://mirrors.cloud.tencent.com/nexus/repository/maven-public/</url>
</mirror> 
123456
```

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2f1425c104493d7ae61207f214754650png.jpg)

将镜像复制到两个mirrors标签之间  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/46e4524f946a4fefa75fb91cea5e5b6fpng.jpg)

4.配置jdk，也要夹在两个profiles标签之间

```auto
<!-- java1.8版本 --> 
<profile>
      <id>jdk-1.8</id>
      <activation>
	    <activeByDefault>true</activeByDefault>
        <jdk>1.8</jdk>
      </activation>

      <properties>
        <maven.compiler.source>1.8</maven.compiler.source>
		<maven.compiler.target>1.8</maven.compiler.target>
		<maven.compiler.compilerVersion>1.8</maven.compiler.compilerVersion>
      </properties>
</profile>

123456789101112131415
```

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/1eef1dcf0620279721a525f5dfddd7f3png.jpg)

5.配置完成。win+r 运行cmd，输入mvn help:system测试，Maven会自动下载缺省的或者更新的各种配置文件和依赖到本地仓库中，如果出现build success，说明你的maven已经配置成功了。  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/25d5e5e250d22f636c707e56f183becapng.jpg)

## 五、idea配置

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/68d1a0b5549cdc7209ee259298570ce3png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/577fc3223328fe67c53ce92f964649ddpng.jpg)