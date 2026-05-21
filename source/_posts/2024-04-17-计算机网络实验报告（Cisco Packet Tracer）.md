---
title: 计算机网络实验报告（Cisco Packet Tracer）
date: 2024-04-17 06:54:40
tags: Cisco Packet Tracer
categories: Programming
cover: 'https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/CiscoPacketTracer.jpg'
---

 

#### 文章目录

+   [Cisco Packet Tracer简介](#Cisco_Packet_Tracer_8)
+   +   +   +   [1、直接连接两台 PC 构建 LAN](#1_PC__LAN_24)
            +   [2、用交换机构建 LAN](#2_LAN_36)
            +   [3.交换机接口地址列表](#3_80)
            +   [4.生成树协议（Spanning Tree Protocol）](#4Spanning_Tree_Protocol_88)
            +   [5.路由器配置初步](#5_105)
            +   [6.静态路由](#6_248)
            +   [7.动态路由 RIP](#7_RIP_280)
            +   [8.虚拟局域网 VLAN](#8_VLAN_319)
            +   [10、虚拟局域网管理 VTP](#10_VTP_472)
            +   [11、VLAN 间的通信](#11VLAN__587)
            +   [12、DHCP、DNS及Web服务器简单配置](#12DHCPDNSWeb_622)
+   [总结](#_643)

* * *

## Cisco Packet [Tracer](https://so.csdn.net/so/search?q=Tracer&spm=1001.2101.3001.7020)简介

**简介**：Cisco Packet Tracer是Cisco公司发布的一个辅助学习工具，为学习思科网络课程的初学者去设计、配置、排除网络故障提供了网络模拟环境。用户可以在软件的图形用户界面上直接使用拖曳方法建立网络拓扑，并可提供数据包在网络中行进的详细处理过程，观察网络实时运行情况。可以学习IOS的配置、锻炼故障排查能力。

> 名词解释：  
> DHCP 动态主机控制协议  
> subnet Mask 子网掩码  
> default Gateway (默认路由)默认网关  
> router路由器  
> switches 交换机  
> hubs 集线器  
> wireless Devices 无线设备  
> WAN emulation 仿真广域网

* * *

##### 1、直接连接两台 PC 构建 LAN

（1）将两台 PC 直接连接构成一个网络。注意：直接连接需使用交叉线。  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/31f455a05534bbad4b2349e1050852c6png.jpg)  
（2）进行两台 PC 的基本网络配置，只需要配置 IP 地址即可，然后相互 ping 通即成功。  
配置：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/402bf4f1780a02cac3e945508059d0dcpng.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/50f00931355390f4e01011b81a9d8a4fpng.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0375bec482e7e0374acbbe24137b32a4png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/aa449d2b2249142ac35bbb22abe3f6e3png.jpg)  
打开【PC中 >> Desktop >> Commond prompt】  
![1](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0880d08795ba88f4884ca5e716187b93png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/26fcf22690bb60f8f5169310b432bca5png.jpg)

##### 2、用交换机构建 LAN

构建如下拓扑结构的局域网：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/6b9c055cd68ac34a7be33992daad8951png.jpg)

各PC的基本网络配置如下表：

| pc | IP | 子网掩码 |
| --- | --- | --- |
| PC0 | 192.168.1.1 | 255.255.255.0 |
| PC1 | 192.168.1.2 | 255.255.255.0 |
| PC2 | 192.168.2.1 | 255.255.255.0 |
| PC3 | 192.168.2.2 | 255.255.255.0 |

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d92c8c16677550957acaf393dc0c3e78png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/497412937c3759f3c9f2519b5ea0f092png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/334baffa68f6ca12ef2dd86ec769ff43png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/9381e6b9ba277c54646c95221d774e98png.jpg)  
**问题：**  
（1）PC0能否 ping 通 PC1、PC2、PC3 ？

> 答：PC0能ping通PC1，但不能ping通PC2、PC3。

（2）PC3能否 ping 通 PC0、PC1、PC2？为什么？

> 答：PC3能ping通PC2，但不能ping通PC0、PC1。

（3）将 4 台 PC 的掩码都改为 255.255.0.0 ，它们相互能 ping 通吗？为什么？

> 答：相互之间能ping通。  
> 如果掩码为255.255.255.0，PC0、PC1和PC2、PC3不是同一局域网，他们之间不能互通。  
> 而掩码改为255.255.0.0，他们之间属于同一局域网下，可以互通。

（4）使用二层交换机连接的网络需要配置网关吗？为什么？

> 答：需要。在二层交换机中，配置网关尤为重要，因为其与相连的自bai治系统可以向核心系统通告可达信息。

试一试：

（1）集线器 Hub 是工作在物理层的多接口设备，它与交换机的区别是什么？

> 答：集线器Hub是工作在物理层，而交换机则是工作在物理层和数据链路层。两种工作的区域不同。

##### 3.交换机接口地址列表

二层交换机是一种即插即用的多接口设备，它对于收到的帧有 3 种处理方式：广播、转发和丢弃（请弄清楚何时进行何种操作）。那么，要转发成功，则交换机中必须要有接口地址列表即 MAC 表，该表是交换机通过学习自动得到的！

仍然构建上图的拓扑结构，并配置各计算机的 IP 在同一个一个子网，使用工具栏中的放大镜点击某交换机如左边的 Switch3，选择 MAC Table，可以看到最初交换机的 MAC 表是空的，也即它不知道该怎样转发帧（那么它将如何处理？），用 PC0 访问（ping）PC1 后，再查看该交换机的 MAC 表，现在有相应的记录，请思考如何得来。随着网络通信的增加，各交换机都将生成自己完整的 MAC 表，此时交换机的交换速度就是最快的！  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/9fcedbe9802a590cfd7ab80fd5f6dfcfpng.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/534cc524b8e63287bc4cc9ad0190ef4apng.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/70313d803bdacbf9474677c06694bf79png.jpg)

##### 4.生成树协议（Spanning Tree Protocol）

交换机在目的地址未知或接收到广播帧时是要进行广播的。如果交换机之间存在回路/环路，那么就会产生广播循环风暴，从而严重影响网络性能。  
而交换机中运行的 STP 协议能避免交换机之间发生广播循环风暴。  
只使用交换机，构建如下拓扑：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7db1f125e0b4fe2a2bebc492b73154b0png.jpg)  
这是初始时的状态。我们可以看到交换机之间有回路，这会造成广播帧循环传送即形成广播风暴，严重影响网络性能。  
随后，交换机将自动通过生成树协议（STP）对多余的线路进行自动阻塞（Blocking），以形成一棵以 Switch4 为根（具体哪个是根交换机有相关的策略）的具有唯一路径树即生成树！  
经过一段时间，随着 STP 协议成功构建了生成树后，Switch5 的两个接口当前物理上是连接的，但逻辑上是不通的，处于Blocking状态（桔色）如下图所示：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/15cc9d198b11d6e59a87cc95bfb6c7aepng.jpg)  
在网络运行期间，假设某个时候 Switch3与 Switch4 之间的物理连接出现问题（将 Switch3 与 Switch4 的连线剪掉），则该生成树将自动发生变化。Switch5 上方先前 Blocking 的那个接口现在活动了（绿色），但下方那个接口仍处于 Blocking 状态（桔色）。如下图所示：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/930df32279e17b81ecfcde69f332938cpng.jpg)  
**注意**：  
交换机的 STP 协议即生成树协议始终自动保证交换机之间不会出现回路，从而形成广播风暴。  
**秘籍：**  
使用 CPT 的 Simulation 即模拟方式可非常清楚看到这个过程！

##### 5.路由器配置初步

我们模拟重庆交通大学和重庆大学两个学校的连接，构建如下拓扑：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/be41ee34aec43b28b05b156c73fa6730png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/b9aa3663c578674ba67e65ca12b18b6cpng.jpg)

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0e5a640fdf4aa2f998a4579fb3661353png.jpg)

> 原因在于默认的2621XM路由器端口不够用，我们需要在设备互连前要添加所需的路由器模块（添加模块时注意要关闭电源）。我们为 Router 0添加NM－4E模块  
> ![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/3214750ab9cdf4e3e4299b05007f3425png.jpg)  
> 可以连接，接着在配置里启用端口即可  
> ![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/9421ee94b0c91fe1f33358108e8f8e3dpng.jpg)  
> 因为两路由器之间不能通过双绞线连接，我们添加广域网接口

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/35eb07b2cef9783a3daf07252842be31png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/bbeac54201f7435dbca6d02627aa7a08png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/061bfe2dfefeaf3c1e86d1d5d7a909d9png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/a366a163ba1f2b9f99b72adcbbc6b0b6png.jpg)

**说明一**  
交通大学与重庆大学显然是两个不同的子网。在不同子网间通信需通过路由器。

路由器的每个接口下至少是一个子网，图中我们简单的规划了 3 个子网：

左边路由器是交通大学的，其下使用交换机连接交通大学的网络，分配网络号 192.168.1.0/24，该路由器接口也是交通大学网络的网关，分配 IP 为 192.168.1.1  
右边路由器是重庆大学的，其下使用交换机连接重庆大学的网络，分配网络号 192.168.3.0/24，该路由器接口也是重庆大学网络的网关，分配 IP 为 192.168.3.1  
两个路由器之间使用广域网接口相连，也是一个子网，分配网络号 192.168.2.0/24  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/8737faf44586587c5dc69435ce16e85fpng.jpg)

**说明二**  
现实中，交通大学和重庆大学的连接是远程的。该连接要么通过路由器的光纤接口，要么通过广域网接口即所谓的 serial 口（如拓扑图所示）进行，一般不会通过双绞线连接（为什么？）。  
下面我们以通过路由器的广域网口连接为例来进行相关配置。请注意：我们选用的路由器默认没有广域网模块（名称为 WIC-1T 等），需要关闭路由器后添加，然后再开机启动。  
**说明三**  
在模拟的广域网连接中需注意 DCE 和 DTE 端（连线时线路上有提示，带一个时钟标志的是 DCE 端。有关 DCE 和 DTE 的概念请查阅相关资料。），在 DCE 端需配置时钟频率 64000  
**说明四**  
路由器有多种命令行配置模式，每种模式对应不同的提示符及相应的权限。  
请留意在正确的模式下输入配置相关的命令。

> User mode：用户模式  
> Privileged mode：特权模式  
> Global configuration mode：全局配置模式  
> Interface mode：接口配置模式  
> Subinterface mode：子接口配置模式

**说明五**  
在现实中，对新的路由器，显然不能远程进行配置，我们必须在现场通过笔记本的串口与路由器的 console 接口连接并进行初次的配置（注意设置比特率为9600）后，才能通过网络远程进行配置。这也是上图左上画出笔记本连接的用意。  
**说明六**  
在路由器的 CLI 界面中，可看到路由器刚启动成功后，因为无任何配置，将会提示是否进行对话配置（Would you like to enter the initial configuration dialog?），因其步骤繁多，请选择 NO  
比如A大学路由器的初步配置可以如下：

**注意**  
在我们的实验中可不进行如下的配置，但在现实中为了安全，以下的登录及特权密码等配置是必须的，否则每个人都可操作你的路由器或交换机！

> Router>en // 从普通模式进入特权模式  
> Router#conf t // 进入全局配置模式  
> Router(config)#interface FastEthernet0/0  
> Router(config-if)#ip address 192.168.1.1 255.255.255.0  
> Router(config-if)#no shutdown  
> Router(config-if)#exit  
> Router(config)#line vty 0 4 //可支持0-4共5个终端同时登录  
> Router(config-line)#password xianlu // 远程登录密码  
> Router(config-line)#login  
> Router(config-line)#exit  
> Router(config)#enable password xianlu // 特权模式密码 Router(config)#^Z //退出

拓扑图中路由器各接口配置数据如下：

交通大学 Router0 以太网口 192.168.1.1 255.255.255.0  
交通大学 Router0 广域网口 192.168.2.1 255.255.255.0  
重庆大学 Router1 以太网口 192.168.3.1 255.255.255.0  
重庆大学 Router1 广域网口 192.168.2.2 255.255.255.0

拓扑图中各 PC 配置数据如下：

交通大学 PC6 192.168.1.2 255.255.255.0 192.168.1.1  
交通大学 PC7 192.168.1.3 255.255.255.0 192.168.1.1  
重庆大学 PC8 192.168.3.2 255.255.255.0 192.168.3.1  
重庆大学 PC9 192.168.3.3 255.255.255.0 192.168.3.1

交通大学路由器基本配置如下：  
以太网口：

> Router>enable // 从普通模式进入特权模式  
> Router#configure terminal // 进入全局配置模式  
> Router(config)#interface f0/0 // 进入配置以太网口模式  
> Router(config-if)#ip  
> address 192.168.1.1 255.255.255.0 // 配置该接口的 IP  
> Router(config-if)#no  
> shutdown // 激活接口  
> Router(config-if)#^z // 直接退到特权模式  
> Router#  
> ![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/3fcf9cea4e0e50eb49e25d6ad06f65bapng.jpg)

广域网口：

> Router>en // 从普通模式进入特权模式  
> Router#conf t // 进入全局配置模式  
> Router(config)#int s0/0 // 进入配置广域网口模式  
> Router(config-if)#ip address192.168.2.1 255.255.255.0 //配置该接口的 IP  
> Router(config-if)#clock rate 64000 // 其为 DCE 端，配置时钟频率 Router(config-if)#no shutdown // 激活接口  
> Router(config-if)#^z // 直接退到特权模式  
> Router#  
> ![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/2ba0223af4a93ac7fc35ec8ce871b341png.jpg)

重庆大学路由器基本配置如下：

以太网口：

> Router>en // 从普通模式进入特权模式  
> Router#conf t // 进入全局配置模式  
> Router(config)#int f0/0 // 进入配置以太网口模式  
> Router(config-if)#ip address  
> 192.168.3.1 255.255.255.0 // 配置该接口的 IP  
> Router(config-if)#no shutdown // 激活接口  
> Router(config-if)#^z // 直接退到特权模式 Router#  
> ![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5044f055ca75f55375d85218191e4541png.jpg)

广域网口：

> Router>en // 从普通模式进入特权模式  
> Router#conf t // 进入全局配置模式  
> Router(config)#int s0/0 // 进入配置广域网口模式  
> Router(config-if)#ip address192.168.2.2 255.255.255.0 //配置该接口的 IP  
> Router(config-if)#no shutdown // 激活接口  
> Router(config-if)#^z // 直接退到特权模式  
> Router#  
> ![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/9c7410a166faca88ee055ce3e4f5a445png.jpg)

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/aa7ece23cb4c3f694ca9ae44470562f6png.jpg)

至此，路由器基本的配置完成。  
**问题**  
现在交通大学内的各 PC 及网关相互能 ping 通，重庆大学也类似。但不能从交大的 PC ping 通重大的 PC，反之亦然，也即不能跨子网。为什么？

> 原因是在路由表中都没能够到达对方的路由路径，所以就无法ping通。

##### 6.静态路由

**静态路由**是非自适应性路由协议，是由网络管理人员手动配置的，不能够根据网络拓扑的变化而改变。 因此，静态路由简单高效，适用于结构非常简单的网络。

在当前这个简单的拓扑结构中我们可以使用静态路由，即直接告诉路由器到某网络该怎么走即可。

在前述路由器基本配置成功的情况下使用以下命令进行静态路由协议的配置：

交通大学路由器静态路由配置：

```c
Router>en   // 从普通模式进入特权模式
Router#conf t   // 进入全局配置模式
Router(config)#ip route 192.168.3.0 255.255.255.0 192.168.2.2   // 告诉交通大学路由器到 192.168.3.0 这个网络的下一跳是 192.168.2.2
Router(config)#exit   //退到特权模式
Router#show ip route    //查看路由表
12345
```

重庆大学路由器静态路由配置：

```c
Router>en   // 从普通模式进入特权模式
Router#conf t   // 进入全局配置模式
Router(config)#ip route 192.168.1.0 255.255.255.0 192.168.2.1   // 告诉重庆大学路由器到 192.168.1.0 这个网络的下一跳是 192.168.2.1
Router(config)#exit   //退到特权模式
Router#show ip route    //查看路由表
12345
```

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/a18e6c8869dd090403cd3d321f336fb5png.jpg)

查看路由表你可看到标记为 S 的一条路由，S 表示 Static 。  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/4004e9599c6d4f74a1c9d98c6f31c4bbpng.jpg)

至此，这些 PC 能全部相互 ping 通！

##### 7.动态路由 RIP

**动态路由协议**采用自适应路由算法，能够根据网络拓扑的变化而重新计算机最佳路由。

RIP 的全称是 Routing Information Protocol，是距离矢量路由的代表（目前虽然淘汰，但可作为我们学习的对象）。使用 RIP 协议只需要告诉路由器直接相连有哪些网络即可，然后 RIP 根据算法自动构建出路由表。

因为我们模拟的网络非常简单，因此不能同时使用静态和动态路由，否则看不出效果，所以我们需要把刚才配置的静态路由先清除掉。

清除静态路由配置：  
直接关闭路由器电源。相当于没有保存任何配置，然后各接口再按照前面基本配置所述重新配置 IP 等参数（推荐此方法，可以再熟悉一下接口的配置命令）；  
使用 no 命令清除静态路由。在全局配置模式下，交通大学路由器使用：no ip route 192.168.3.0 255.255.255.0 192.168.2.2，重庆大学路由器使用：no ip route 192.168.1.0 255.255.255.0 192.168.2.1 。相当于使用 no 命令把刚才配置的静态路由命令给取消。  
交通大学路由器 RIP 路由配置：

```c
Router>en   // 从普通模式进入特权模式
Router#conf t   // 进入全局配置模式
Router(config)#router rip   // 启用 RIP 路由协议，注意是 router 命令
Router(config-router)#network 192.168.1.0   // 网络 192.168.1.0 与我直连
Router(config-router)#network 192.168.2.0   // 网络 192.168.2.0 与我直连
Router(config-router)#^z   //直接退到特权模式
Router#show ip route    //查看路由表
1234567
```

重庆大学路由器 RIP 路由配置：

```c
Router>en   // 从普通模式进入特权模式
Router#conf t   // 进入全局配置模式
Router(config)#router rip   // 启用RIP路由协议，注意是 router 命令
Router(config-router)#network 192.168.3.0   // 网络 192.168.3.0 与我直连
Router(config-router)#network 192.168.2.0   // 网络 192.168.2.0 与我直连
Router(config-router)#^z   //直接退到特权模式
Router#show ip route    //查看路由表
1234567
```

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/9a31ff0a0ca5802653ccae6588049a83png.jpg)

查看路由表你可看到标记为 R 的一条路由，R 表示 RIP 。

至此，这些 PC 也能全部相互 ping 通！

##### 8.虚拟局域网 VLAN

在实际网络中（如我校的网络），你可看到路由器一般位于网络的边界，而内部几乎全部使用交换机连接。

前面我们分析过，交换机连接的是同一个子网！ 显然，在这样一个大型规模的子网中进行广播甚至产生广播风暴将严重影响网络性能甚至瘫痪。

另外我们也已经知道，其实学校是划分了 N 多个子网的，那么这些交换机连接的就绝不是一个子网！这样矛盾的事情该如何解释呢？我们实际上使用了支持 VLAN 的交换机！而前述的交换机只是普通的 2 层交换机（或者我们把它当作 2 层交换机在使用。

VLAN（Virtual Local Area Network）即虚拟局域网。通过划分 VLAN，我们可以把一个物理网络划分为多个逻辑网段即多个子网。

划分 VLAN 后可以杜绝网络广播风暴，增强网络的安全性，便于进行统一管理等。

构建拓扑：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/e21e87adb7be3a3c2c687b4f2644b980png.jpg)

Cisco 2960 交换机是支持 VLAN 的交换机，共有 24 个 100M 和 2 个 1000M 以太网口。默认所有的接口都在 VLAN 1 中，故此时连接上来的计算机都处于同一 VLAN，可以进行通信。

下面我们就该交换机的 24 个 100M 接口分为 3 个部分，划分到 3 个不同的 VLAN 中，id 号分别设为 10、20、30，且设置别名（computer、communication、electronic）以利于区分和管理。

交换机 VLAN 配置：

```c
Switch>en
Switch#conf t
Switch(config)#vlan 10    // 创建 id 为 10 的 VLAN（缺省的，交换机所有接口都属于VLAN 1，不能使用）
Switch(config-vlan)#name computer    // 设置 VLAN 的别名
Switch(config-vlan)#exit
Switch(config)#int vlan 10    // 该 VLAN 为一个子网，设置其 IP，作为该子网网关
Switch(config-if)#ip address 192.168.0.1 255.255.255.0
Switch(config-if)#exit
Switch(config)#vlan 20    // 创建 id 为 20 的 VLAN
Switch(config-vlan)#name communication    //设置别名
Switch(config-vlan)#exit
Switch(config)#int vlan 20
Switch(config-if)#ip addr 192.168.1.1 255.255.255.0
Switch(config-if)#exit
Switch(config)#vlan 30    // 创建 id 为 20 的 VLAN
Switch(config-vlan)#name electronic    // 设置别名
Switch(config-vlan)#exit
Switch(config)#int vlan 30
Switch(config-if)#ip add 192.168.2.1 255.255.255.0
Switch(config-if)#exit
Switch(config)#int range f0/1-8    // 成组配置接口（1-8）
Switch(config-if-range)#switchport mode access    // 设置为存取模式
Switch(config-if-range)#switchport access vlan 10    // 划归到 VLAN 10 中
Switch(config-if-range)#exit
Switch(config)#int range f0/9-16
Switch(config-if-range)#switchport mode access
Switch(config-if-range)#switchport access vlan 20
Switch(config-if-range)#exit
Switch(config)#int range f0/17-24
Switch(config-if-range)#switchport mode access
Switch(config-if-range)#switchport access vlan 30
Switch(config-if-range)#^Z
Switch#show vlan // 查看 VLAN 的划分情况
123456789101112131415161718192021222324252627282930313233
```

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/325611b8c0c7dac0a49d21a58a159b1bpng.jpg)

至此，在该交换机上我们就划分了 3 个 VLAN（不包括缺省的 VLAN 1）。  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/0d79314a54046e194f3b6683e1e37485png.jpg)

各 VLAN 下 PC 的网络配置及连接的交换机接口如下表：

| 机器名 | 连接的接口 | 所属VLAN | IP | 子网掩码 | 网关 |
| --- | --- | --- | --- | --- | --- |
| PC0 | F0/1 | VLAN 10 | 192.168.0.2 | 255.255.255.0 | 192.168.0.1 |
| PC1 | F0/2 | VLAN 10 | 192.168.0.3 | 255.255.255.0 | 192.168.0.1 |
| PC2 | F0/17 | VLAN 30 | 192.168.2.2 | 255.255.255.0 | 192.168.2.1 |
| PC3 | F0/9 | VLAN 20 | 192.168.1.2 | 255.255.255.0 | 192.168.1.1 |
| PC4 | F0/10 | VLAN 20 | 192.168.1.3 | 255.255.255.0 | 192.168.1.1 |
| PC5 | F0/18 | VLAN 30 | 192.168.2.3 | 255.255.255.0 | 192.168.2.1 |
| PC6 | F0/19 | VLAN 30 | 192.168.2.4 | 255.255.255.0 | 192.168.2.1 |

此时可以使用 ping 命令进行测试，你会发现只有在同一 VLAN 中的 PC 才能通信，且广播也局限于该 VLAN。

用P0pingP6，不通  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/59a5751c3d0231f2898d45e71fd14ef8png.jpg)  
用P0pingP1，通了  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/43d7b96d374d04c8b32081556a5a8eb4png.jpg)

✎ 思考

分析一下当前为何不同 VLAN 中的 PC 不能通信？网关在此起什么作用？我们的网关又在何处？如何发起广播测试？

> 答：vlan有划分网络的作用，同一个vlan中的端口可以不通过路由器直接通信，而不同vlan之间则需要路由器进行路由，网关是用来进行协议转换的。不同的网段之间需要通信一定需要网关。如果要发起广播测试，那么就要引入三层设备。

##### 10、虚拟局域网管理 VTP

前一个实验我们在交换机上进行了 VLAN 的规划和划分。但在实际应用中，我们绝不允许在这些支持VLAN的交换机上进行随意的 VLAN 划分，如此将造成管理混乱！VLAN的划分必须得到统一的规划和管理，这就需要 VTP 协议。

VTP（VLAN Trunk Protocol）即 VLAN 中继协议。VTP 通过 ISL 帧或 Cisco 私有 DTP 帧（可查阅相关资料了解）保持 VLAN 配置统一性，也被称为虚拟局域网干道协议，它是思科私有协议。 VTP 统一管理、增加、删除、调整VLAN，自动地将信息向网络中其它的交换机广播。

此外，VTP 减小了那些可能导致安全问题的配置，只要在 VTP Server 做相应设置，VTP Client 会自动学习 VTP Server 上的 VLAN 信息。

为演示 VTP，重新构建如下拓扑结构：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/c2be83789b5eb4df9fd2fb4e0b3a435dpng.jpg)

> **注意**： 作为干线，两个 2960 交换机和核心的 3560 交换机应该使用 Gbit 口相连。这虽然不是必须，但现实中这样连接性能最好。  
> 3560 交换机是网络中的核心交换机，我们将其作为 VTP Server，VTP 域及 VLAN 将在其上创建和管理。 两个 2960  
> 交换机是是局域网中的汇聚层/接入层交换机，将作为 VTP Client，可决定加入的 VTP 域和 VLAN。

目前该网络都属于 VLAN 1，也即这些 PC 是可以相互通信的。前面说过，无论对于性能、管理还是安全等而言，现实中我们必须进行 VLAN 划分。

现在我们的要求是：新建两个 VLAN，然后让 PC0 和 PC1 属于 VLAN 2，PC1 和 PC3 属于 VLAN 3。

我们将在核心交换机 3560上进行如下工作：

```c
设置为 server 模式，VTP 域为 cqjtu
新建 VLAN 2，网络号 192.168.1.0/24，网关 192.168.1.1
新建 VLAN 3，网络号 192.168.2.0/24，网关 192.168.2.1
123
```

3560 VTP Server 配置：

```c
Switch>en
Switch#conf t
Switch(config)#hostname 3560    // 更改交换机名称（可选）
3560(config)#vtp domain cqjtu   // 设置 VTP 域名称为 cqjtu
3560(config)#vtp mode server    // 设置其为 VTP 服务器模式
3560(config)#vlan 2             // 新建VLAN 2
3560(config-vlan)#name computer // 设置 VLAN 2 的别名（可选）
3560(config-vlan)#exit
3560(config)#vlan 3             // 再建 VLAN 3
3560(config-vlan)#name communication    //设置 VLAN 2 的别名（可选）
3560(config-vlan)#exit
3560(config)#int vlan 2    // 配置接口 VLAN 2，它将是该子网（左边）的网关
3560(config-if)#ip address 192.168.1.1 255.255.255.0
3560(config-if)#exit
3560(config)#int vlan 3    // 配置接口 VLAN 3，它将是该子网（右边）的网关
3560(config-if)#ip address 192.168.2.1 255.255.255.0
12345678910111213141516
```

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/fd825df7ff52a3dd9d550b5fd5f76c33png.jpg)

我们将在左边交换机 2960A 上进行如下工作：

> 加入名为 cqjtu 的 VTP 域 配置与核心交换机 3560 连接的千兆接口 g0/1 为 trunk 模式 将接口 f0/1 划分到  
> VLAN 2 中 将接口 f0/2 划分到 VLAN 3 中

2960A（左边） VTP Client 配置：

```c
Switch>en
Switch#conf t
Switch(config)#hostname 2960A    // 更改交换机名称（可选）
2960A(config)#vtp domain cqjtu   // 加入名为 cqjtu 的 VTP 域
2960A(config)#vtp mode client    // 设置模式为 VTP 客户
2960A(config)#int g0/1    // 配置与核心交换机 3560 连接的 g0/1 千兆接口
2960A(config-if)#switchport mode trunk    // 设置该接口为中继（trunk）模式
2960A(config-if)#switchport trunk allowed vlan all  // 允许为所有的 VLAN 中继
2960A(config-if)#exit
2960A(config)#int f0/1    // 配置接口 1
2960A(config-if)#switchport mode access    // 设置该接口为正常访问模式
2960A(config-if)#switchport access vlan 2  // 将接口划分到 VLAN 2
2960A(config-if)#exit
2960A(config)#int f0/2    // 配置接口 2
2960A(config-if)#switchport mode access    // 设置该接口为正常访问模式
2960A(config-if)#switchport access vlan 3  // 将接口划分到 VLAN 3
12345678910111213141516
```

我们将在右边交换机 2960B 上进行同样的工作：

> 加入名为 cqjtu VTP 域 配置与核心交换机 3560 连接的千兆接口 g0/1 为 trunk 模式 将接口 f0/1 划分到  
> VLAN 2 中 将接口 f0/2 划分到 VLAN 3 中

2960B（右边） VTP Client 配置：

```c
Switch>en
Switch#conf t
Switch(config)#hostname 2960B    // 更改交换机名称（可选）
2960B(config)#vtp domain cqjtu   // 加入名为 cqjtu 的 VTP 域
2960B(config)#vtp mode client    // 设置模式为 VTP 客户
2960B(config)#int g0/1    // 配置与核心交换机 3560 连接的 g0/1 千兆接口
2960B(config-if)#switchport mode trunk    // 设置该接口为中继（trunk）模式
2960B(config-if)#switchport trunk allowed vlan all  // 允许为所有的 VLAN 中继
2960B(config-if)#exit
2960B(config)#int f0/1    // 配置接口 1
2960B(config-if)#switchport mode access    // 设置该接口为正常访问模式
2960B(config-if)#switchport access vlan 2  // 将接口划分到 VLAN 2
2960B(config-if)#exit
2960B(config)#int f0/2    // 配置接口 2
2960B(config-if)#switchport mode access    // 设置该接口为正常访问模式
2960B(config-if)#switchport access vlan 3  // 将接口划分到 VLAN 3
12345678910111213141516
```

![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/5abc570febdced048ef6feab28809926png.jpg)

至此，各交换机配置完毕。

> 秘籍  
> 此时在 3 个交换机的特权模式下，都可使用show vtp status命令查看 VTP 状态，使用show vlan命令查看 VLAN 状态

各 PC 连接的交换机和接口以及网络配置如下：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d4ac452039bc9b49c4207a16d8355467png.jpg)

至此，VTP 配置完成。同 VLAN 可以 ping 通，而不同 VLAN 不行（即使在同一交换机下，如从 PC0 到 PC1），且能够方便的统一规划和管理。

> 试一试  
> 使用 PC0（192.168.1.2） ping PC1（192.168.2.2） 的结果如何？使用 PC0 ping PC2 的结果如何？想想为什么？  
> *PC0 pingPC1不能通,因为不属于同一vlan，  
> PC0pingPC2可以通，因为PC0和PC2属于同一vlan下*

##### 11、VLAN 间的通信

VTP 只是给我们划分和管理 VLAN 提供了方便，由上面的测试得知，目前我们仍然不能在 VLAN 间通信。

因为默认的，VLAN 间是不允许进行通信，此时我们需要所谓的独臂路由器在 VLAN 间为其进行转发！

我们使用的核心交换机 3560 是个 3 层交换机，可工作在网络层，也称路由交换机，即具有路由功能，能进行这种转发操作。

3560 交换机配置：

```c
3560>en
3560#conf t
3560(config)#int g0/1    // 配置连接左边 2960A 交换机的接口
3560(config-if)#switchport trunk encapsulation dot1q    // 封装 VLAN 协议
3560(config-if)#switchport mode trunk     // 设置为中继模式
3560(config-if)#switchport trunk allowed vlan all     // 在所有 VLAN 间转发
3560(config-if)#exit
3560(config)#int g0/2    // 配置连接右边 2960B 交换机的接口
3560(config-if)#switchport trunk encapsulation dot1q    //封装 VLAN 协议
3560(config-if)#switchport mode trunk     // 设置为中继模式
3560(config-if)#switchport trunk allowed vlan all     // 在所有 VLAN 间转发
3560(config-if)#exit
3560(config)#ip routing    // 启用路由转发功能
12345678910111213
```

至此，各 VLAN 中的 PC 可以正常通信。

> 试一试 现在再使用 PC0（192.168.1.2） ping PC1（192.168.2.2） 的结果如何？使用 PC0 ping PC2 的结果如何？  
> 答：都可以ping通。

独臂路由的缺陷

> 当使用 CPT 的模拟方式进行上面的测试时（ PC0 ping PC1），你会非常清楚的看到 ICMP 包全部都由3560交换机在转发，非常容易形成瓶颈。现实中，我们一般不使用这种方式，而是真正使用其三层转发功能，即"一次路由多次交换"，请查阅相关资料。

##### 12、DHCP、DNS及Web服务器简单配置

1、动态主机配置 DHCP、域名解析 DNS 以及 Web 服务在日常应用中作用巨大，我们构建如下简单的拓扑来进行练习。  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/545c4c9aaa1e4d45e9e79a2e0b378e7epng.jpg)  
该拓扑中，服务器及客户机都连在同一交换机上。为简单起见，服务器 Server-PT 同时作为 DHCP、DNS 以及 Web 服务器，各客户机无需配置，将自动获取网络配置。

点击 CPT 拓扑图中的 Server 图标，设置其静态 IP 地址为 19.89.6.4/24，然后选择 Service 进行如下相关配置：  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7c89e9cb993fd8433e21b99da1afac47png.jpg)  
![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/bf899b29d40aa0d9244700dcff620815png.jpg)

> 试一试
> 
> 先查看各 PC，看看是否获得网络配置  
> ![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/c8e77ee1b8dc8e6540c83d14fba6ca39png.jpg)

> 因为我们在 DNS 服务器中把谷歌和百度的 IP 都设为了 19.89.6.4，即Server-PT，所以，如果打开 PC0 的浏览器，输入 www.google.com 或者 www.baidu.com，我们都应该看到默认的 Server-PT 这个 Web 服务器的主页  
> ![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/7021b5d610347587a9ca300c83c5f181png.jpg)  
> ![](https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/d711e5e6797d87367512c679618d800apng.jpg)

* * *

## 总结

这次实验使我接触了一个全新的软件，从入门到可以简单的运用，使我获益良多，也让我掌握了许多计算机网络的协议，搞明白了计算机网络的基本原理。我的计算机网络实验就告一段落了，希望能够继续努力学习，对计算机网络有更加深刻的理解。