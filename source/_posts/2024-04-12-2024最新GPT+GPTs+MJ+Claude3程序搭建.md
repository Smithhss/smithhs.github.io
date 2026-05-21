---
title: 最新GPT+GPTs+MJ+Claude3程序搭建
date: 2024-04-12 20:04:00
tags: GPT
categories: Programming
cover: 'https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/v2-540fc0af6b556b67535db82197d91050_1440w.jpg'
---

本期教程搭建的程序集齐了市场上超火的AI功能
* 1.GPT-3.5
* 2.GPT-4.0 ( 最新版 )
* 3.GPTs ( 联网、数据分析、文生图等超多插件功能)
* 4.Claude-3 ( sonnet、opus 2个版本都有 ) 
* 5.Midjourney 超强Ai绘图
* 6.DALL-E 绘图
* 7.suno 音乐模型（创作歌曲）

# 准备
1.云服务器
2.支持GPT+GPTs+MJ+Claude3的key密钥
3.资料包

## 1.云服务器
因内地服务器备案流程复杂，这里选择无需备案的香港服务器
推荐：香草云，性价比高，安全稳定，本人常用
> 网址：https://www.xiangcaoyun.com/
香港1核2g即可
注意：购买云服务器，一定要选择CentOS系统，版本选择默认的就行
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/image.png)

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/m_0dc7fb131be11c157ebeacf8db7eac85_r.png)

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/m_85d50c546c2cc49cf4441d01130e7f09_r.png)

## 2.支持ChatGPT+Midjourney的服务的秘钥
> 中转key获取网站：https://openai-hk.com/
如果打不开，可以试试下面的备用的
https://tw.openai-hk.com/
https://open-hk.com/

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/m_b6cd56403a82ac739c907e9895303ece_r.png)


## 3.准备的资料
安装FinalShell软件

> 下载链接：https://www.hostbuf.com/t/988.html

资料包
> 下载链接：https://share.weiyun.com/rZy0yeND

将docker-compose.yml用记事本（其他编辑软件都可）打开，需要修改4个值，如下图框中的4处
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/image%20(1).png)
修改好后，ctrl+s保存即可


# 开始搭建
## 1. 打开软件，点击箭头所示按钮
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/m_b6cd56403a82ac739c907e9895303ece_r.png)
## 2. 会跳出个窗口，接着点击箭头所示按钮，点击SSH链接
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/m_9fec8924c7cf8141027e5592ae65b620_r.png)
## 3. 把红框里的内容填进去
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/m_f8c509e0846832fe2cfd8c1b44c07062_r.png)
## 4. 填完后，这里会记录，双击打开它
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/m_e5d82c0c1b2d992cd5e06fc93c673f5b_r.png)
## 5. 即可链接成功
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/image%20(2).png)

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/image%20(3).png)
## 6.安装docker
```
curl -fsSL https://get.docker.com -o get-docker.sh
```
> 如果docker安装失败，可以看这个教程：https://www.yuque.com/zeejk/dvbgxk/vdu2br1ia3e6yl3y?singleDoc# 

## 7. 列出下载的内容
```
ls
```
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/m_28caf423b7fa46dffd43ee20359aec9c_r.png)
有这个说明下载成功

## 8.安装docker，这一步安装过程有点久，5-20分钟左右
```
sh get-docker.sh
```
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/m_5b493591be268bae726565f742acf95e_r.png)
如上图所示，即说明安装成功
## 9. 运行Docker服务
```
systemctl start docker
```
## 10. 检查docker服务运行状态
```
systemctl status docker
```
当出现active (running)… 即说明安装成功
## 11.执行下面的指令，防止服务器重启打不开网页
```
systemctl enable docker
```
到这一步，Docker即可安装成功
## 12.安装Ai程序
```
sh ./deploy.sh
```

出现这个，说明程序已经安装完成
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/image%20(4).png)

# 绑定域名
域名购买网站：
西部数码：https://www.west.cn/

