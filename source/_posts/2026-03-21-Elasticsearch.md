---
title: Elasticsearch
date: 2026-03-21 09:53:38
tags:
  - 技术分享
categories: 技术分享
cover: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80'
---





你好！很高兴为你解释 **Elasticsearch**（简称 ES）。

为了让你彻底理解，我会分三个部分来讲：
1.  **一句话定义**（它是什么）
2.  **通俗类比**（它是怎么工作的）
3.  **真实案例**（它在生活中哪里用到了）

### 1. 一句话定义

**Elasticsearch 是一个分布式的、超快的“搜索引擎”兼“数据分析工具”。**

它专门用来处理海量数据，让你能在几毫秒内，从几亿条数据中找到你想要的内容，并且还能对这些数据进行统计和分析。

> **注意**：它虽然名字里有"Search"，但它不仅仅是搜索，还能做日志分析、数据监控等。

---

### 2. 通俗易懂的原理解析

为了理解 ES，我们需要解决两个问题：**它为什么快？** 和 **它怎么存数据？**

#### 类比一：为什么它搜得这么快？（核心：倒排索引）

想象你面前有 **1 万本书**，你想找到所有包含“苹果”这个词的书。

*   **传统数据库（如 MySQL）的做法：**
    像是一个勤勤恳恳的图书管理员。他必须从第 1 本书的第 1 页开始读，一直读到第 1 万本书的最后一页。如果发现“苹果”就记下来。
    *   *缺点：* 数据量一大，速度极慢。

*   **Elasticsearch 的做法：**
    它像是书后面自带的 **“索引页”**。
    它预先建立了一个字典：
    *   “苹果” -> 出现在：书 1, 书 50, 书 998...
    *   “香蕉” -> 出现在：书 2, 书 33...
    当你搜“苹果”时，它直接查这个字典，瞬间告诉你结果，完全不需要去翻书。
    *   *专业术语：* 这叫 **倒排索引 (Inverted Index)**。

#### 类比二：它怎么存海量数据？（核心：集群与分片）

想象你要开一家 **超级巨大的超市**，货物多到一家店放不下。

*   **集群 (Cluster)**：就是你的 **连锁超市集团**。
*   **节点 (Node)**：就是其中的 **每一家分店**。
*   **索引 (Index)**：就是超市里的 **商品分类区**（比如“家电区”、“食品区”）。在 ES 里，相似的数据放在一起叫一个索引（类似于数据库里的“表”）。
*   **文档 (Document)**：就是 **具体的某一件商品**（比如一台具体的 iPhone 15）。在 ES 里，数据是以 JSON 格式存储的，非常灵活，不需要像传统数据库那样先定死表格结构。
*   **分片 (Shard)**：因为“家电区”太大了，一家分店摆不下。于是你把“家电区”切开，**冰箱放 A 店，电视放 B 店，手机放 C 店**。这就是分片。
    *   *好处：* 顾客买手机，直接去 C 店找，不用跑遍所有店。多台机器一起干活，速度飞快。

---

### 3. 真实生活中的案例

为了让你更有体感，我们看三个最常见的场景：

#### 案例 1：电商网站搜索（淘宝/京东）

**场景**：你在淘宝搜索框输入 **“红色 连衣裙 夏季”**。

*   **如果没有 ES**：
    系统要去数据库里遍历几亿个商品，一个个比对标题和描述。你可能需要转圈圈等 10 秒钟，甚至系统直接崩溃。
*   **有了 ES**：
    1.  **分词**：ES 把你的搜索词拆成“红色”、“连衣裙”、“夏季”。
    2.  **匹配**：利用倒排索引，瞬间找到同时包含这三个词的商品 ID。
    3.  **排序**：根据销量、价格、好评率进行打分排序。
    4.  **结果**：在 **0.1 秒** 内，给你展示最相关的商品列表。
    5.  **高亮**：搜索结果里，“红色”、“连衣裙”这些字会被标红显示（这也是 ES 的功能）。

#### 案例 2：网站日志分析（ELK 栈）

**场景**：你是某游戏公司的运维工程师。凌晨 3 点，游戏服务器突然变卡，玩家投诉。

*   **问题**：服务器每秒产生几万条日志，存在硬盘里有几个 TB 那么大。你需要找到报错的那一行。
*   **传统方法**：登录服务器，用 `grep` 命令一行行搜，或者把日志下载下来用 Excel 打开（根本打不开）。耗时几小时。
*   **有了 ES (配合 Logstash, Kibana)**：
    1.  日志实时被收集并写入 ES。
    2.  你在 Kibana（ES 的可视化界面）上输入 `status: 500` 或 `error: timeout`。
    3.  **ES 在几秒内** 从几亿条日志中筛选出所有报错记录。
    4.  你还能直接看到报错时间的 **曲线图**，定位到具体是哪台服务器在什么时间点出了问题。

#### 案例 3：智能联想与自动补全

**场景**：你在百度或谷歌搜索框，刚输入“埃隆”，还没输完，下拉框就提示“埃隆马斯克”、“埃隆马斯克简历”。

*   **原理**：
    ES 有一种特殊的结构叫 **Completion Suggester**。
    它预先存好了所有热门搜索词的前缀。当你输入前几个字，它立刻匹配出最可能的完整词。这需要极高的读取速度，只有 ES 能胜任。

---

### 4. 总结：Elasticsearch vs 传统数据库 (MySQL)

很多人会问：*“我有了 MySQL，为什么还要 ES？”*

| 特性 | MySQL (传统数据库) | Elasticsearch (搜索引擎) |
| :--- | :--- | :--- |
| **核心强项** | **存** 和 **事务** (比如银行转账，不能出错) | **搜** 和 **分析** (比如找商品，要快且模糊匹配) |
| **模糊搜索** | 很慢 (`like '%keyword%'` 会导致全表扫描) | 极快 (倒排索引) |
| **数据结构** | 严格 (必须先建表，定好字段类型) | 灵活 (JSON 格式，随时加字段) |
| **海量数据** | 数据量太大时，查询性能下降明显 | 天生分布式，数据越多，加机器即可，性能依然稳 |
| **典型用途** | 订单系统、用户账户、库存管理 | 站内搜索、日志分析、推荐系统 |

### 一句话总结

如果把 **MySQL** 比作 **会计的账本**（严谨、存钱、不能错）；
那么 **Elasticsearch** 就是 **图书馆的检索目录**（灵活、找书、要超快）。

在现代互联网架构中，通常是 **MySQL 负责存数据，ES 负责搜数据**，两者配合使用。



在 Java 中使用 Elasticsearch（ES）主要有 **两种主流方式**，取决于你的项目架构：

1.  **Spring Data Elasticsearch**（推荐）：如果你使用的是 **Spring Boot** 项目，这是最简单、最快捷的方式，类似操作 MySQL 的 JPA。
2.  **Official Java API Client**（官方原生客户端）：如果你不使用 Spring，或者需要更底层、更灵活的控制，使用 ES 官方提供的 Java 客户端。

> **⚠️ 重要提示：版本对应关系**
> Elasticsearch 的版本更新很快，**Java 客户端的版本必须与 ES 服务端的版本尽量保持一致**，否则会出现连接错误或功能不兼容。
> *   ES 7.x -> 对应 Spring Data ES 4.x
> *   ES 8.x -> 对应 Spring Data ES 5.x (Spring Boot 3.x)

下面我以 **ES 8.x + Spring Boot 3.x** 为例，为你详细演示这两种方法。

---

### 方法一：Spring Data Elasticsearch（最常用，开发效率高）

这种方式把 ES 当作数据库一样操作，通过定义“实体类”和“接口”来完成增删改查。

#### 1. 引入依赖 (Maven)
在 `pom.xml` 中添加：
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-elasticsearch</artifactId>
</dependency>
```

#### 2. 配置连接 (application.yml)
ES 8.x 默认开启了安全认证（账号密码）和 SSL。为了演示方便，如果是本地测试，可以在 ES 配置中关闭安全，或者在 Java 中配置证书。
*这里假设你已配置好连接信息：*
```yaml
spring:
  elasticsearch:
    uris: http://localhost:9200
    username: elastic
    password: 你的密码
    # 如果是自签名证书，可能需要配置 ssl 验证，生产环境建议开启
```

#### 3. 定义实体类 (Document)
创建一个 Java 类，映射到 ES 的索引（Index）。
```java
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

@Document(indexName = "products") // 对应 ES 中的索引名
public class Product {
    
    @Id // 对应 ES 的 _id
    private String id;

    @Field(type = FieldType.Text, analyzer = "ik_max_word") // 使用 IK 分词器
    private String title;

    @Field(type = FieldType.Double)
    private Double price;

    @Field(type = FieldType.Keyword) // 不分词，用于精确匹配
    private String category;

    // Getter, Setter, 构造方法 省略...
}
```

#### 4. 定义 Repository 接口
继承 `ElasticsearchRepository`，无需写实现类，Spring 会自动生成。
```java
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import java.util.List;

public interface ProductRepository extends ElasticsearchRepository<Product, String> {
    
    // 方法命名查询：类似 MySQL
    List<Product> findByTitleContaining(String keyword);
    
    List<Product> findByPriceLessThan(Double price);
}
```

#### 5. 在 Service 中使用
```java
@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    // 1. 新增/修改 (save 方法如果 id 存在则更新，不存在则新增)
    public void saveProduct(Product product) {
        repository.save(product);
    }

    // 2. 搜索
    public List<Product> search(String keyword) {
        return repository.findByTitleContaining(keyword);
    }
    
    // 3. 删除
    public void deleteProduct(String id) {
        repository.deleteById(id);
    }
}
```

**优点**：代码极少，开发快，适合常规业务。
**缺点**：复杂查询（如聚合、复杂评分）支持不够灵活。

---

### 方法二：Official Java API Client（更灵活，功能全）

如果你需要写复杂的查询语句（比如多条件组合、聚合分析、高亮显示），官方客户端更合适。ES 8.x 推出了新的类型安全客户端。

#### 1. 引入依赖
```xml
<dependency>
    <groupId>co.elastic.clients</groupId>
    <artifactId>elasticsearch-java</artifactId>
    <version>8.11.0</version> <!-- 版本号需与 ES 服务端一致 -->
</dependency>
```

#### 2. 初始化客户端
```java
import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.transport.rest_client.RestClientTransport;
import org.apache.http.HttpHost;
import org.elasticsearch.client.RestClient;

// 创建底层 REST 客户端
RestClient restClient = RestClient.builder(
        new HttpHost("localhost", 9200, "http")).build();

// 创建传输层
Transport transport = new RestClientTransport(restClient, new JacksonJsonpMapper());

// 创建 API 客户端
ElasticsearchClient esClient = new ElasticsearchClient(transport);
```

#### 3. 索引文档 (写入数据)
```java
Product product = new Product();
product.setId("1001");
product.setTitle("iPhone 15 Pro");
product.setPrice(8999.0);

// 索引请求
IndexRequest<Product> indexRequest = new IndexRequest.Builder<Product>()
        .index("products")
        .id(product.getId())
        .document(product)
        .build();

// 执行
esClient.index(indexRequest);
```

#### 4. 复杂搜索 (查询数据)
这是原生客户端最强大的地方，可以构建非常复杂的 DSL 查询。
```java
import co.elastic.clients.elasticsearch.SearchRequest;
import co.elastic.clients.elasticsearch.SearchResponse;
import co.elastic.clients.elasticsearch._types.query_dsl.Query;

// 构建查询：价格小于 9000 且 标题包含 "iPhone"
SearchRequest searchRequest = new SearchRequest.Builder()
        .index("products")
        .query(q -> q
            .bool(b -> b
                .must(m -> m.match(t -> t.field("title").query("iPhone")))
                .filter(f -> f.range(r -> r.field("price").lt(JsonData.of(9000))))
            )
        )
        .build();

// 执行搜索
SearchResponse<Product> response = esClient.search(searchRequest, Product.class);

// 获取结果
List<Product> products = response.hits().hits().stream()
        .map(hit -> hit.source())
        .collect(Collectors.toList());
```

**优点**：功能最全，支持所有 ES 特性（聚合、高亮、脚本等），性能微调空间大。
**缺点**：代码量大，学习曲线稍陡峭。

---

### 总结：我该选哪种？

| 场景 | 推荐方案 | 理由 |
| :--- | :--- | :--- |
| **简单的增删改查** | **Spring Data ES** | 像操作 MySQL 一样简单，代码少，维护方便。 |
| **复杂的搜索业务** | **Java API Client** | 需要自定义评分、聚合统计、高亮显示时，原生客户端更灵活。 |
| **非 Spring 项目** | **Java API Client** | 没有 Spring 容器支持，只能用原生客户端。 |
| **混合使用** | **两者结合** | 很多公司会在 Spring Boot 项目中，简单查询用 Repository，复杂查询注入 `ElasticsearchOperations` 或原生 Client。 |

### 避坑指南（新手必看）

1.  **分词器问题**：ES 默认的分词器对中文支持不好（会把“中国”拆成“中”、“国”）。在中国使用，通常需要在 ES 服务器安装 **IK 分词器**，并在 Java 实体类中指定 `analyzer = "ik_max_word"`。
2.  **版本对齐**：再次强调，`spring-boot-starter-data-elasticsearch` 的版本必须和你的 ES 服务器版本兼容。如果连不上，首先查版本兼容性矩阵。
3.  **连接超时**：如果数据量大，写入或查询可能耗时，记得在配置中适当增加 `socket-timeout` 和 `connect-timeout`。
4.  **SSL 证书**：ES 8.x 默认开启 HTTPS。本地开发如果嫌麻烦，可以在 `elasticsearch.yml` 中关闭安全配置（`xpack.security.enabled: false`），但**生产环境千万不要关闭**。

希望这份指南能帮你顺利在 Java 项目中用上 Elasticsearch！如果有具体的代码报错，欢迎继续提问。


