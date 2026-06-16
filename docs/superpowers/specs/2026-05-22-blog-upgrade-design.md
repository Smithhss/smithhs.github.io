# 博客升级设计文档

> 日期：2026-05-22
> 主题：smith 博客全面升级 — 清理 + 修复 + 性能 + 新功能

## 背景

博客基于 Hexo 7.3.0 + smith 主题（从 anzhiyu 重命名而来），当前存在以下问题：
 anzhiyu 残留引用 60 处、图片不显示、页面 404、CDN 不可靠、主页加载慢、缺少新功能。

本次升级分 3 个批次执行，按依赖关系排序。

---

## 批次 A：清理 + 修复

### P1: anzhiyu→smith 彻底替换

**目标：** 主题中不再有任何 anzhiyu 相关引用。

**npm 包发布：**

| 原包 | 新包 | 内容 |
|------|------|------|
| `anzhiyu-blog@1.1.6` | `smith-blog@1.0.0` | 二维码、badge SVG（安知鱼→史先森）、动图 |
| `anzhiyu-blog-static@1.0.4` | `smith-blog-static@1.0.0` | 头像图片 |
| `anzhiyu-music@1.0.1~1.0.4` | `smith-music@1.0.0` | 周杰伦音乐文件 |

**代码替换（60 处）：**

| 文件 | 改动 |
|------|------|
| `_config.smith.yml` | CDN URL `anzhiyu-blog@` → `smith-blog@`，`anzhiyu-blog-static@` → `smith-blog-static@`，安知鱼→史先森 |
| `log-js.pug` | 文字"安知鱼"→"史先森"，CDN URL 改 smith |
| `runtime-js.pug` | 注释中安知鱼→史先森 |
| `merge_config.js` | SVG 文件名安知鱼→史先森 |
| `plugins.yml` | `hexo-anzhiyu-music` 保留不改（npm 包名） |
| `music.json` | CDN URL `anzhiyu-music@` → `smith-music@` |

**不改的项：**
- `plugins.yml` 中 `hexo-anzhiyu-music` — npm 包名不可改
- 已注释掉的配置行 — 保留原样

---

### P2: 文章图片不显示

**根因：** `vanilla-lazyload` CDN（`lf3-cdn-tos.bytecdntp.com`）返回 404，懒加载库加载失败，所有图片停留在占位符状态。

**修复：** 替换 CDN 源为 jsdelivr：
```
旧：https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/vanilla-lazyload/17.3.1/lazyload.iife.min.js
新：https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.8.5/dist/lazyload.min.js
```

**影响文件：** `plugins.yml` 或 `_config.smith.yml` 中的 CDN 配置

---

### P3: 生活页 404

**根因：** 菜单配置 `/categories/生活日常/`，但文章分类中无此分类（只有编程开发 64 篇、技术分享 11 篇、随笔 4 篇）。

**修复：** `_config.smith.yml` 中将路径改为 `/categories/随笔/`

---

## 批次 B：性能优化 + 音乐修复

### P4: 主页加载慢优化

**根因：** 主页加载 79 个外部资源，来自 10+ 个 CDN 域名，DNS 查询和连接开销大。

**外部资源分布：**
- `bu.dusays.com` — 25 个（第三方图片）
- `smith-1315833455.cos.ap-beijing.myqcloud.com` — 20 个
- `npm.elemecdn.com` — 10 个
- `cdn.cbd.int` — 7 个
- 其他 6 个 CDN 域名

**优化方案：**
1. 将分散的 CDN 统一到可靠源（jsdelivr / cbd）
2. 对非首屏资源延迟加载
3. 减少第三方图片数量（bu.dusays.com 的 25 个图片）
4. 合并小文件，减少请求数

---

### P5: 音乐馆为空

**根因（两个 CDN 都挂了）：**
- APlayer JS：`lf6-cdn-tos.bytecdntp.com` 返回 404
- Meting API：`meting.qjqq.cn` 返回 522（超时）

**修复方案：**
1. APlayer 替换为 jsdelivr CDN：
   ```
   旧：https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js
   新：https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js
   ```
2. Meting API 替换为可用的公共 API 或自建

---

## 批次 C：新功能

### P6: 看板娘（Live2D）

**方案：** 集成 `pixi-live2d-display`，模型用 `shizuku`（轻量、可爱），放在页面右下角。

**实现：**
- 添加 live2d 相关 JS/CSS 到主题
- 在 `_config.smith.yml` 中添加 `live2d` 配置段
- 支持开关、模型选择、位置调整
- 右下角悬浮显示，支持点击交互

---

### P7: 热搜功能

**数据源：** Bilibili、微博、知乎（GitHub 后续扩展）

**方案：** 新增热搜面板组件，调用公开热搜 API。

**实现：**
- 新增 `hot_search.js` 组件
- 在 `_config.smith.yml` 中添加 `hotSearch` 配置段
- 展示位置：侧边栏卡片或首页独立区块
- 支持 Tab 切换不同平台热搜
- 后续可扩展 GitHub trending

---

## 实施顺序

```
批次 A（清理+修复）
├── P1: anzhiyu→smith npm 包发布 + 代码替换
├── P2: vanilla-lazyload CDN 替换
└── P3: 生活页路径修复

批次 B（性能+配置）
├── P4: 主页 CDN 优化
└── P5: 音乐馆 APlayer + Meting API 修复

批次 C（新功能）
├── P6: 看板娘 live2d 集成
└── P7: 热搜组件开发
```

每个批次独立可部署，完成后 `hexo generate && hexo deploy` 验证。
