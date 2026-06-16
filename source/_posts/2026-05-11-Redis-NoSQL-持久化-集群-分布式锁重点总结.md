---
title: Redis-NoSQL-持久化-集群-分布式锁重点总结
date: 2026-05-11 22:03:10
tags:
  - 微服务
  - SpringCloud
  - 后端
categories: 编程开发
cover: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80'
---



# Redis · NoSQL · 缓存 · 持久化 · 集群 · 分布式锁 · 重点总结

> 整理自：`Redis.doc` + `Redis分布式锁.md`

---

## 一、NoSQL 与 Redis 概述

### 1.1 NoSQL 概念

| 项目 | 说明 |
|------|------|
| **全称** | Not Only SQL（不仅仅是 SQL），泛指**非关系型数据库** |
| **本质** | 关系型数据库的功能阉割版本，减少不常用功能换取**极致性能** |
| **诞生原因** | 高性能查询需求 + 应用规模扩大（横向扩展集群） |

### 1.2 四种 NoSQL 数据库类型

| 类型 | 代表产品 | 适用场景 |
|------|---------|---------|
| **键值（Key-Value）** | **Redis**、Memcached | 用户信息、会话、购物车 |
| 面向文档 | MongoDB、ES | 日志、分析 |
| 列存储 | HBASE | 日志、博客平台 |
| 图数据库 | Neo4J | 社交网络拓扑分析 |

### 1.3 关系型 vs 非关系型对比

| 对比项 | RDBMS（关系型） | NoSQL（非关系型） |
|--------|----------------|------------------|
| 数据结构 | 高度组织化、结构化 | 灵活、无预定义模式 |
| 查询语言 | SQL 标准 | 无声明性查询语言 |
| 事务 | **ACID 严格一致性** | 弱事务、**最终一致性** |
| 性能 | 单机性能有限 | **高性能、高可用、可伸缩** |
| 理论基础 | ACID | **CAP 定理**（一致性/可用性/容错性） |

### 1.4 Redis 简介

| 项目 | 说明 |
|------|------|
| **全称** | REmote DIctionary Server（远程字典服务器） |
| **本质** | 开源、ANSI C 编写的 Key-Value **内存数据库** |
| **读写性能** | 读 **110000 次/秒**，写 **81000 次/秒** |
| **特性** | 原子性、支持多数据类型、**持久化**、主从复制、过期时间、事务、消息订阅 |
| **应用场景** | 数据缓存、会话缓存、排行榜/计数器、消息队列 |

---

## 二、Redis 单线程模型

### 2.1 为什么 Redis 快（⭐ 面试必考）

| 原因 | 说明 |
|------|------|
| **纯内存操作** | 数据在内存中读写，比磁盘 IO 快几个数量级 |
| **单线程** | **不需要线程上下文切换开销**（约 1500ns/次） |
| **无锁竞争** | 单线程不存在线程安全问题 |
| **IO 多路复用** | 单线程高效处理多个连接请求 |

### 2.2 单线程缺点

> 无法发挥多核 CPU 性能，但可以**单机开多个 Redis 实例**来弥补。

### 2.3 数据库结构

| 项目 | 说明 |
|------|------|
| 默认数据库数 | **16 个**（0~15） |
| 默认使用 | 0 号库 |
| 切换数据库 | `select 数据库编号` |
| 统一密码 | 16 个库共用同一个密码 |

---

## 三、五大数据类型（⭐ 天天问）

### 3.1 数据类型概览

| 类型 | 结构 | 类比 Java |
|------|------|----------|
| **string** | 字符串 | `Map<String, String>` |
| **list** | 列表（双向链表） | `Map<String, List<String>>` |
| **hash** | 哈希表 | `Map<String, Map<String, String>>` |
| **set** | 无序集合（唯一） | `Map<String, Set<String>>` |
| **zset / sortset** | 有序集合（带权重） | 有排序的 Set |

### 3.2 通用命令速查

| 命令 | 说明 |
|------|------|
| `keys *` | 获取当前库所有 key |
| `del key` | 删除 key |
| `exists key` | 判断 key 是否存在 |
| `expire key 10` | 设置 key 过期时间（**秒**） |
| `pexpire key 1000` | 设置 key 过期时间（**毫秒**） |
| `ttl key` | 查看剩余过期时间（-1 永不过期，-2 已过期） |
| `persist key` | 删除过期时间（永久保存） |
| `type key` | 查看 key 类型 |
| `move key 1` | 将 key 移动到 1 号库 |
| `flushdb` | 清空**当前库** |
| `flushall` | 清空**所有库** |
| `dbsize` | 查看当前库 key 数量 |

### 3.3 String 命令

| 命令 | 说明 |
|------|------|
| `set key value` | 存值 |
| `get key` | 取值 |
| `getset key newvalue` | 设值返回旧值 |
| `mset k1 v1 k2 v2` | 批量设置 |
| `mget k1 k2` | 批量获取 |
| **`setnx key value`** | **不存在才插入（分布式锁基础）** |
| `incr key` / `decr key` | 递增/递减 1 |
| `incrby key 10` / `decrby key 10` | 递增/递减 N |
| `strlen key` | 长度 |
| `getrange key 0 -1` | 字符串分段（0 -1 表示全部） |
| `append key value` | 追加 |

### 3.4 List 命令（双向链表）

| 命令 | 说明 |
|------|------|
| `lpush key v1 v2` | 左插入 |
| `rpush key v1 v2` | 右插入 |
| `lrange key 0 -1` | 取出所有元素 |
| `lpop key` | 弹出左侧元素（**消费后消失**） |
| `rpop key` | 弹出右侧元素 |
| `lindex key 2` | 取指定索引值 |
| `llen key` | 长度 |
| `lrem key count value` | 删除（count>0 头到尾；count<0 尾到头；count=0 全删） |
| `lset key index value` | 索引设值 |
| `ltrim key 0 4` | 修剪，只保留指定区间 |
| `linsert key before/after pivot value` | 在指定元素前/后插入 |
| `rpoplpush list1 list2` | list1 末尾弹出，插入 list2 头部 |

### 3.5 Hash 命令（Map of Map）

| 命令 | 说明 |
|------|------|
| `hset key field value` | 设置字段值 |
| `hget key field` | 获取字段值 |
| `hmset key f1 v1 f2 v2` | 批量设置 |
| `hmget key f1 f2` | 批量获取 |
| `hgetall key` | 获取所有字段+值 |
| `hexists key field` | 判断字段是否存在 |
| `hdel key field` | 删除字段 |
| `hsetnx key field value` | 字段不存在才设置 |
| `hincrby key field 1` | 字段值递增 |
| `hkeys key` / `hvals key` | 只取所有字段名/字段值 |
| `hlen key` | 字段个数 |

### 3.6 Set 命令（无序、唯一）

| 命令 | 说明 |
|------|------|
| `sadd key v1 v2` | 添加元素 |
| `smembers key` | 返回所有成员 |
| `srem key v1 v2` | 移除指定元素 |
| `scard key` | 元素个数 |
| `spop key` | **随机弹出一个**元素（消费后消失） |
| `sismember key v` | 判断元素是否在集合 |
| `srandmember key count` | 随机获取 count 个元素（不消费） |
| `sdiff k1 k2` / `sinter` / `sunion` | 差集 / 交集 / 并集 |

### 3.7 ZSet 命令（带权重排序）

| 命令 | 说明 |
|------|------|
| `zadd key score value` | 添加元素并设置分数 |
| `zrange key 0 -1 withscores` | 分数**升序**返回所有元素 |
| `zrevrange key 0 -1 withscores` | 分数**降序**返回所有元素 |
| `zrangebyscore key 10 25 withscores` | 取指定分数范围 |
| `zrangebyscore key 10 25 limit 1 2` | 分页 |
| `zincrby key 1 value` | 元素分数 +1 |
| `zscore key value` | 获取指定元素的分数 |
| `zrem key v1 v2` | 删除元素 |
| `zcard key` | 元素个数 |
| `zcount key 10 25` | 指定分数范围的元素个数 |

---

## 四、Redis 配置文件 redis.conf 重点

### 4.1 NETWORK（网络）

```conf
bind 0.0.0.0              # 监听 IP（不写则所有网络接口）
port 6379                 # 端口
timeout 300               # 客户端闲置超时（秒，0 关闭）
tcp-keepalive 300         # TCP 健康检测周期
```

### 4.2 GENERAL（通用）

```conf
daemonize yes             # ⚠️ 后台守护进程启动（重要）
pidfile /var/run/redis_6379.pid
loglevel notice           # debug/verbose/notice/warning
databases 16              # 数据库数量
```

### 4.3 SNAPSHOTTING（快照 RDB）⭐

```conf
save 900 1                # 900 秒内有 1 个 key 改变就保存
save 300 10               # 300 秒内有 10 个 key 改变就保存
save 60 10000             # 60 秒内有 10000 个 key 改变就保存
rdbcompression yes        # 启用压缩
dbfilename dump.rdb       # RDB 文件名
dir ./                    # 文件保存路径
```

### 4.4 SECURITY（安全）

```conf
requirepass yourPassword  # 设置访问密码
```

### 4.5 LIMITS（限制 & 淘汰策略）⭐

```conf
maxclients 10000          # 最大客户端连接数
maxmemory <bytes>         # 最大内存使用
maxmemory-policy noeviction
```

### 4.6 八种内存淘汰策略（⭐ 面试题）

| 策略 | 说明 |
|------|------|
| **`noeviction`** | **默认**，内存满返回错误，不淘汰 |
| **`allkeys-lru`** | 所有 key 中淘汰**最近最少使用** |
| `volatile-lru` | 只从设过期时间的 key 中淘汰 LRU |
| `allkeys-random` | 所有 key 随机淘汰 |
| `volatile-random` | 从过期 key 中随机淘汰 |
| `volatile-ttl` | 淘汰**最近将要过期**的 key |
| **`allkeys-lfu`** | 所有 key 中淘汰**使用频率最少**的 |
| `volatile-lfu` | 从过期 key 中淘汰 LFU |

### 4.7 LRU vs LFU 对比

| 算法 | 全称 | 思路 | 优点 | 缺点 |
|------|------|------|------|------|
| **LRU** | Least Recently Used（最近最久未使用） | 淘汰最久没访问的数据 | 容易实现 | 考虑不全面（只看时间） |
| **LFU** | Least Frequently Used（使用频率最少） | 淘汰使用频率最低的 | 考虑全面 | 耗费历史统计时间 |

---

## 五、过期删除策略（⭐ 必考）

### 5.1 三种删除策略对比

| 策略 | 思路 | 优点 | 缺点 |
|------|------|------|------|
| **惰性删除** | 取数据时检查是否过期，过期则删除 | **节省 CPU** | 内存可能堆积**冷数据** |
| **定时删除** | 设置 key 时启动定时器，到期立刻删 | **释放内存及时**，保证热点 key | **CPU 占用高**（每 key 一线程） |
| **定期删除** | 每隔一段时间扫描部分过期 key 删除 | **CPU 合理利用** | 可能出现**脏读** |

### 5.2 Redis 最终方案

> **Redis 实际采用 = 惰性删除 + 定期删除（折中方案）**

```java
// 简化版伪代码：惰性 + 定期
class RedisExpire {
    static Map<String, Object> redis = new HashMap<>();
    static Map<String, Long> expire = new HashMap<>();

    static {
        // 守护线程：每 10 秒扫描一次过期 key
        threadPool.submit(() -> {
            while (true) {
                Thread.sleep(10000);
                expire.forEach((k, v) -> {
                    if (System.currentTimeMillis() > v) {
                        redis.remove(k);
                    }
                });
            }
        });
    }

    public static Object get(String key) {
        // 惰性删除：取数据时检查
        if (expire.containsKey(key) && System.currentTimeMillis() > expire.get(key)) {
            redis.remove(key);
            expire.remove(key);
        }
        return redis.get(key);
    }
}
```

---

## 六、Redis 持久化（⭐ 必考）

### 6.1 RDB（Redis DataBase）

| 项目 | 说明 |
|------|------|
| **原理** | 在指定时间间隔将内存数据**快照**写入磁盘（fork 子进程） |
| **文件** | `dump.rdb` |
| **触发** | `save 900 1` 配置 / 手动 `save`、`bgsave` / `flushall`（产生空文件） |
| **优点** | 备份文件小、恢复快、性能高（主进程无 IO） |
| **缺点** | **最后一次持久化后数据可能丢失** |
| **关闭** | 配置 `save ""` |

### 6.2 AOF（Append Only File）

| 项目 | 说明 |
|------|------|
| **原理** | **以日志形式记录每个写操作**（追加文件） |
| **文件** | `appendonly.aof` |
| **启动** | 配置 `appendonly yes` |
| **修复** | `redis-check-aof --fix appendonly.aof` |
| **优点** | **数据完整性高**、可读 |
| **缺点** | 文件大、性能较 RDB 差 |

### 6.3 AOF 三种同步策略

| 策略 | 说明 | 性能/安全 |
|------|------|----------|
| `appendfsync always` | 每次写操作立即同步 | 慢 / 最安全 |
| **`appendfsync everysec`** | **每秒同步一次（默认推荐）** | 折衷 |
| `appendfsync no` | 由操作系统决定何时同步 | 快 / 不安全 |

### 6.4 RDB vs AOF 选型（⭐）

| 场景 | 推荐方案 |
|------|---------|
| 只做缓存 | **仅 RDB** |
| 用户登录 session | RDB + AOF |
| 极致性能 | 关闭 RDB + 关闭 AOF |
| 极致安全 | RDB + AOF(always) |
| **默认推荐** | **RDB + AOF（everysec）** |

> ⚠️ **同时开启两种**：Redis 重启时**优先加载 AOF**（数据更完整）。

---

## 七、主从复制 Master/Slave

### 7.1 概念

| 项目 | 说明 |
|------|------|
| **目的** | **读写分离**（主写从读）、**容灾恢复** |
| **原则** | "**配从不配主**"，从机配置主机即可 |
| **架构** | Master 以写为主，Slave 以读为从 |

### 7.2 配置命令

```bash
# 在从机上执行
slaveof 127.0.0.1 6379

# 查看主从关系
info replication

# 解除从机身份，自己变主机
slaveof no one
```

### 7.3 三种架构

| 架构 | 特点 |
|------|------|
| **一主二仆** | 1 主 + 2 从（基础） |
| **薪火相传** | 上一个 Slave 是下一个 Slave 的 Master，减轻主机压力，但延迟增大 |
| **反客为主** | `SLAVEOF no one` 手动让从机升级为主机 |

### 7.4 复制原理

| 类型 | 触发时机 |
|------|---------|
| **全量复制** | Slave 连接 Master 时，**首次全量同步** |
| **增量复制** | Slave 同步后，Master 持续传送新的写操作 |

### 7.5 一主二仆问题验证（⭐ 面试题）

| 问题 | 答案 |
|------|------|
| Slave 从切入点还是从头开始复制？ | **从头开始**（全量复制） |
| 从机能写吗？ | **不能** |
| 主机 shutdown 后，从机会上位吗？ | **原地待命** |
| 主机回来后，能继续工作吗？ | **依然是主机** |

---

## 八、哨兵模式（Sentinel）

### 8.1 概念

> **反客为主的自动版**：后台监控主机，故障时自动将从库转为主库（基于投票）。

### 8.2 配置

```conf
# sentinel.conf
sentinel monitor host6379 127.0.0.1 6379 1
# 最后的 1 表示主机挂掉后至少几个 Sentinel 同意才能切换主机
```

```bash
# 启动哨兵
./redis-sentinel ../conf/sentinel.conf
```

### 8.3 主机回归问题

> 原主机恢复后会**变为从机**（因为它的数据已经不完整了），**不会双主冲突**。

---

## 九、Redis 集群（Cluster）⭐

### 9.1 中心化 vs 去中心化

| 类型 | 特点 | 缺点 |
|------|------|------|
| **中心化** | 所有节点有一个主节点（路由） | 中心挂了，服务挂了 |
| **去中心化** | 每个节点自己路由 | Redis Cluster 采用此架构 |

### 9.2 哈希槽（Hash Slot）⭐

| 项目 | 说明 |
|------|------|
| **槽数** | **16384 个**（固定） |
| **分配算法** | `crc16(key) % 16384` 计算槽号 |
| **分配方式** | Redis 自动将槽均匀分到各节点 |

### 9.3 执行流程

```
客户端发送 set key value 命令到任意节点
    ↓
节点计算 crc16(key) % 16384 = 槽号
    ↓
如果槽号在本节点 → 直接执行
如果槽号在其他节点 → 重定向到对应节点
```

### 9.4 集群搭建（6 节点）

> **3 主 3 从架构**：每个主节点配 1 个从节点，保证高可用。

```conf
# Redis-7000.conf（其他节点同理修改端口）
bind 0.0.0.0
port 7000
daemonize yes
appendonly yes                              # 启用 AOF
cluster-enabled yes                         # 启用集群
cluster-config-file nodes-7000.conf         # 集群配置文件（自动生成）
cluster-node-timeout 5000                   # 集群超时
```

```bash
# 创建集群（--cluster-replicas 1 表示主从比 1:1）
redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 \
                          127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 \
                          --cluster-replicas 1

# 连接集群（-c 必加）
redis-cli -c -h 127.0.0.1 -p 7000
```

### 9.5 集群容错规则

| 情况 | 结果 |
|------|------|
| 主节点宕机，从节点存在 | **从节点自动上位** |
| **某主从对都挂了** | **整个集群不可用**（缺槽） |

---

## 十、Redis 分布式锁（⭐ 必考）

### 10.1 为什么需要分布式锁

| 问题 | 说明 |
|------|------|
| 单机锁的局限 | `synchronized`/`Lock` 只能控制**单 JVM** 内的线程 |
| 分布式场景 | 多个服务实例操作共享资源（库存、订单 ID） |
| 典型场景 | 秒杀超卖、分布式任务重复执行 |

### 10.2 分布式锁五大要求

| 特性 | 说明 |
|------|------|
| **互斥性** | 同一时间只有一个实例获取锁 |
| **安全性** | 锁只能被持有者释放，不能被其他实例释放 |
| **防死锁** | 持有者崩溃后锁能自动释放 |
| **可用性** | 获取/释放高效，不成为性能瓶颈 |
| **容错性** | Redis 节点宕机时锁机制仍能工作 |

### 10.3 核心命令：SET NX PX

```bash
SET lock:stock client1 NX PX 30000
```

| 参数 | 作用 | 解决问题 |
|------|------|---------|
| **`NX`**（Not Exist） | 只有 key 不存在才设置成功 | 保证**互斥性** |
| **`PX 30000`** | 设置过期时间 30 秒（毫秒） | 解决**死锁问题** |
| **client1**（值） | 客户端唯一标识（UUID） | 保证**安全性**（防误删） |

### 10.4 三大坑与解决方案（⭐）

#### 坑1：锁过期了任务未执行完

> **场景**：锁过期 30 秒，任务执行 40 秒 → 锁自动释放，其他客户端获取到锁 → 两个客户端同时操作

**解决方案**：**锁续命**（Redisson 的 Watch Dog 看门狗机制）

```java
// 守护线程每隔过期时间的 1/3 检查并续命
ScheduledFuture<?> future = executor.scheduleAtFixedRate(() -> {
    String script = "if redis.call('GET', KEYS[1]) == ARGV[1] " +
                    "then return redis.call('PEXPIRE', KEYS[1], ARGV[2]) else return 0 end";
    jedis.eval(script, ..., Arrays.asList(clientId, String.valueOf(expireTime)));
}, 0, expireTime / 3, TimeUnit.MILLISECONDS);
```

#### 坑2：释放锁的原子性问题

> **场景**：直接用 `DEL` 释放 → 锁刚好过期 → 别人获取了新锁 → 你的 `DEL` 误删了别人的锁

**解决方案**：**Lua 脚本保证"判断+删除"原子性**

```lua
-- 释放锁的 Lua 脚本（先判断再删除，作为整体执行）
if redis.call("GET", KEYS[1]) == ARGV[1] then
    return redis.call("DEL", KEYS[1])
else
    return 0
end
```

```java
String script = "if redis.call('GET', KEYS[1]) == ARGV[1] " +
                "then return redis.call('DEL', KEYS[1]) else return 0 end";
jedis.eval(script, Collections.singletonList(lockKey), Collections.singletonList(clientId));
```

#### 坑3：Redis 集群下锁丢失

> **场景**：Redis 主从异步复制 → 主节点设置锁后宕机 → 从节点升主 → 新主节点没有该锁 → 其他客户端可重新获取

**解决方案**：
| 方案 | 说明 |
|------|------|
| 接受风险 | 主从切换概率低，多数业务可容忍极低概率锁丢失 |
| **Redlock 算法** | 多个独立 Redis 节点（≥3 个），多数节点设置成功才算获取锁。**适合极端安全场景** |

### 10.5 完整实现代码

```java
public class RedisLock {

    /** 获取锁 */
    public static boolean tryLock(Jedis jedis, String lockKey, String clientId, long expireTime) {
        String result = jedis.set(lockKey, clientId, "NX", "PX", expireTime);
        return "OK".equals(result);
    }

    /** 启动锁续命线程 */
    public static ScheduledFuture<?> startRenewThread(Jedis jedis, String lockKey,
                                                      String clientId, long expireTime) {
        ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);
        return executor.scheduleAtFixedRate(() -> {
            String script = "if redis.call('GET', KEYS[1]) == ARGV[1] " +
                            "then return redis.call('PEXPIRE', KEYS[1], ARGV[2]) else return 0 end";
            Long result = jedis.eval(script, Collections.singletonList(lockKey),
                                     Arrays.asList(clientId, String.valueOf(expireTime)));
            if (result != 1) executor.shutdown();
        }, 0, expireTime / 3, TimeUnit.MILLISECONDS);
    }

    /** 释放锁（Lua 脚本保证原子性） */
    public static boolean releaseLock(Jedis jedis, String lockKey, String clientId,
                                      ScheduledFuture<?> renewFuture) {
        if (renewFuture != null) renewFuture.cancel(true);
        String script = "if redis.call('GET', KEYS[1]) == ARGV[1] " +
                        "then return redis.call('DEL', KEYS[1]) else return 0 end";
        Long result = (Long) jedis.eval(script,
                Collections.singletonList(lockKey),
                Collections.singletonList(clientId));
        return result == 1;
    }

    // 使用示例
    public static void main(String[] args) {
        Jedis jedis = new Jedis("localhost", 6379);
        String lockKey = "lock:stock";
        String clientId = UUID.randomUUID().toString();
        long expireTime = 30000;

        ScheduledFuture<?> renewFuture = null;
        try {
            if (!tryLock(jedis, lockKey, clientId, expireTime)) {
                System.out.println("获取锁失败");
                return;
            }
            renewFuture = startRenewThread(jedis, lockKey, clientId, expireTime);

            // 执行业务（如扣减库存）
            executeBusinessLogic();

        } finally {
            releaseLock(jedis, lockKey, clientId, renewFuture);
            jedis.close();
        }
    }
}
```

### 10.6 Redisson（生产环境推荐）⭐

> **原生实现**适合理解原理，**生产环境用 Redisson**（已封装看门狗、Lua 脚本、可重入、公平锁等）。

```java
// 1. 引入依赖
// <dependency>
//     <groupId>org.redisson</groupId>
//     <artifactId>redisson</artifactId>
// </dependency>

// 2. 初始化客户端
Config config = new Config();
config.useSingleServer().setAddress("redis://localhost:6379");
RedissonClient redisson = Redisson.create(config);

// 3. 获取并使用分布式锁
RLock lock = redisson.getLock("lock:stock");
try {
    // 最多等待 10 秒；获取后 30 秒自动过期
    boolean locked = lock.tryLock(10, 30, TimeUnit.SECONDS);
    if (locked) {
        // 执行业务（看门狗自动续命）
        executeTask();
    }
} catch (InterruptedException e) {
    e.printStackTrace();
} finally {
    // 只有持有锁时才释放
    if (lock.isHeldByCurrentThread()) {
        lock.unlock();
    }
}
redisson.shutdown();
```

### 10.7 Redisson 核心特性

| 特性 | 说明 |
|------|------|
| **看门狗（Watch Dog）** | 自动续命，无需手动管理 |
| **可重入锁** | 同一客户端可重复获取锁 |
| **公平锁** | 按请求顺序获取锁 |
| **Lua 原子性** | 内置保证释放锁原子操作 |
| **集群支持** | 支持单机、主从、哨兵、Cluster |

---

## 十一、缓存三大问题（⭐ 面试必考）

### 11.1 缓存穿透

| 项目 | 说明 |
|------|------|
| **现象** | 查询**不存在的数据**，Redis 没有 → 直接打到数据库 → 数据库压力大 |
| **场景** | 恶意攻击不断查询不存在的 ID |
| **解决方案** | ① 缓存空值（key + null + 短过期时间）<br>② **布隆过滤器**（提前判断 key 是否可能存在） |

### 11.2 缓存击穿

| 项目 | 说明 |
|------|------|
| **现象** | **热点 key 过期**瞬间，大量请求同时打到数据库 |
| **场景** | 某个商品被秒杀，恰好其缓存过期 |
| **解决方案** | ① 热点 key **永不过期**<br>② 加**互斥锁**：只让一个请求查数据库，其他等待 |

### 11.3 缓存雪崩

| 项目 | 说明 |
|------|------|
| **现象** | **大量 key 同时过期** 或 **Redis 宕机** → 大量请求打到数据库 → 数据库雪崩 |
| **解决方案** | ① 过期时间**加随机数**（避免同时过期）<br>② Redis **集群高可用**<br>③ **多级缓存**（本地缓存 + Redis）<br>④ **限流降级** |

### 11.4 三者对比速查

| 问题 | 触发条件 | 关键差异 | 核心解决 |
|------|---------|---------|---------|
| **穿透** | 查询**不存在**的数据 | 数据本身没有 | 布隆过滤器 / 缓存空值 |
| **击穿** | **某个热点 key**过期 | 单 key 问题 | 互斥锁 / 永不过期 |
| **雪崩** | **大量 key** 同时过期 | 多 key 集体问题 | 过期时间加随机数 / 集群 |

---

## 十二、综合速查

### Redis 五大数据类型选型

```
String  → 简单 KV、计数器、分布式锁
List    → 消息队列、最新N条数据
Hash    → 对象存储（如用户信息）
Set     → 标签、去重、共同好友
ZSet    → 排行榜、延时任务
```

### 持久化选型口诀

```
仅缓存       → RDB
重要数据     → RDB + AOF(everysec)
极致安全     → RDB + AOF(always)
极致性能     → 关闭两者
```

### 内存淘汰策略选型

```
无淘汰需求       → noeviction（默认）
缓存场景        → allkeys-lru / allkeys-lfu（推荐）
有过期+部分驻留 → volatile-lru / volatile-ttl
```

### 分布式锁三大坑速记

```
锁过期未完成 → 锁续命（Watch Dog）
释放原子性  → Lua 脚本（先判断再删除）
集群锁丢失  → Redlock 算法 / 接受风险
```

### Redis 高可用方案三层

```
① 主从复制       → 读写分离、容灾备份
② 哨兵 Sentinel  → 自动故障转移
③ Cluster 集群   → 数据分片 + 高可用
```

### 缓存三大问题口诀

```
穿透 → 不存在 → 布隆过滤器
击穿 → 单热点 → 互斥锁
雪崩 → 全过期 → 加随机时间
```
