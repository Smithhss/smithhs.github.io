# Smith 主题改造设计文档

**日期：** 2026-05-21  
**项目：** smithhs.cn 博客全面翻新 + smith 自定义主题  
**状态：** 已批准，待实施

---

## 背景

博客使用 Hexo 7.3.0 + anzhiyu 1.7.1，距离上次认真维护已三年。现存问题覆盖视觉、功能、内容、个人品牌四个维度，需要全面翻新。同时用户希望将主题彻底定制化，产出一个真正属于 smith 的主题，而非套用他人主题。

---

## 目标

1. 在 anzhiyu 基础上深度魔改，建立 `themes/smith/` 主题目录
2. 确立 smith 专属视觉身份（配色、字体、首页 slogan、快捷分类）
3. 清理无效配置，开启 local_search，保留其余现有功能
4. 整理文章分类和页面数据，消除内容空洞感
5. 评论系统（Twikoo）延后处理

---

## 方案选择

采用**方案二：新建 themes/smith 目录**。

理由：
- 原版 anzhiyu 保留，随时可切换对比
- 主题目录名即品牌名，身份感强
- 本地开发目标下不需要 fork 子模块等工程化成本

---

## 项目结构

```
Blog/
├── themes/
│   ├── anzhiyu/          ← 保留原版，不动
│   └── smith/            ← 从 anzhiyu 复制，独立开发
│       ├── _config.yml   ← name 改为 smith
│       ├── layout/       ← pug 模板
│       ├── source/
│       │   ├── css/      ← 主要样式改造区域
│       │   └── js/
│       └── ...
├── _config.yml           ← theme: smith
└── _config.smith.yml     ← 从 _config.anzhiyu.yml 复制重命名
```

---

## 实施阶段

### P1 — 搭起 smith 主题骨架

- 复制 `themes/anzhiyu/` → `themes/smith/`
- 修改 `themes/smith/_config.yml`：name 改为 smith
- 复制 `_config.anzhiyu.yml` → `_config.smith.yml`
- 修改根 `_config.yml`：`theme: anzhiyu` → `theme: smith`
- 执行 `npx hexo server` 确认本地可跑通

**验收：** `hexo server` 无报错，页面正常渲染

---

### P2 — 个人品牌与视觉身份

#### 配色方案

| 角色 | 值 | 说明 |
|------|-----|------|
| 主色 light | `#4f7cff` | 比原版更亮的蓝 |
| 主色 dark | `#ffd166` | 暖黄，夜间模式温和 |
| 背景 light | `#fafaf8` | 微暖白，减少刺眼 |
| 强调色 | `#ff6b6b` | 珊瑚红，标签/hover |
| 深色背景 | `#18171d` | 保持原值 |

#### 字体

| 用途 | 字体 |
|------|------|
| 正文 | LXGW WenKai（霞鹜文楷，CDN 引入） |
| 标题英文 | Playfair Display |
| 代码 | Consolas / Menlo（保留原值） |

#### 首页 Banner（home_top）

- `title`：`Smith`
- `subTitle`：`Build things. Write things. Own things.`
- `siteText`：`smithhs.cn`

#### 三个快捷分类

| 分类 | 路径 | 图标 | 颜色 |
|------|------|------|------|
| Code | `/categories/编程开发/` | `anzhiyu-icon-code` | 蓝 `var(--anzhiyu-shadow-blue)` |
| 生活 | `/categories/生活日常/` | `anzhiyu-icon-leaf` | 绿 `var(--anzhiyu-shadow-green)` |
| 随笔 | `/categories/随笔/` | `anzhiyu-icon-lightbulb` | 橙 `var(--anzhiyu-shadow-yellow)` |

#### 作者卡片

- `author_status.text`：`on Building`
- skills 标签重写为 smith 专属内容（技术向 + 个人向混合）
- 头像保留用户自己的 COS 链接

#### 个人介绍（aside card_author description）

重写为真实的 smith 个人介绍，突出技术方向和个人风格。

**验收：** `hexo server` 首页视觉风格明显区别于原 anzhiyu

---

### P3 — 功能完善与配置清理

#### 开启 local_search

```yaml
local_search:
  enable: true
  preload: true
```

#### 清理明确损坏/无效的配置

| 项目 | 操作 |
|------|------|
| `post_head_ai_description.key: xxxx` | `enable: false`，彻底关闭 |
| `site_verification` 中的 `xxx` 占位 | 清空所有 content 字段 |
| nav 导航死链（robot/res/se.onliu.cn） | 删除这三项 |
| `sharejs.sites` | 改为 `wechat,weibo,qq`，移除 facebook/twitter |
| `valine/waline/twikoo/artalk` | 保留配置项，均为未启用状态，不删除 |

#### 保留但不改动的功能

- universe 粒子效果（dark mode）
- greetingBox 欢迎语
- nav_music 左下角音乐
- pjax 无刷新跳转
- busuanzi 访问统计
- darkmode 自动切换
- lazyload 图片懒加载
- fancybox 图片灯箱
- translate 简繁转换
- readmode 阅读模式
- centerConsole 中控台
- diytitle 标签卖萌

**验收：** 搜索可用，首页无控制台报错，功能面板正常

---

### P4 — 内容整理

#### 文章规范化

- 无日期前缀的文件（如 `Redis实战篇.md`）补充 `YYYY-MM-DD-` 前缀
- 分类名统一：中英文混用改为统一中文（`Programming` → `编程开发`，`前端开发` 保留）
- 缺少 `cover` 字段的文章补充封面图（使用 PicGo 上传到 COS）

#### 页面数据核查

| 页面 | 文件 | 操作 |
|------|------|------|
| 相册 | `source/_data/album.yml` | 核查图片链接有效性 |
| 友链 | `source/_data/link.yml` | 核查友链存活状态 |
| 闲言碎语 | `source/_data/essay.yml` | 更新内容 |
| 关于我 | `source/about/index.md` | 重写个人介绍 |

**验收：** 所有页面有实质内容，图片链接无 404

---

### P5（后期）— Twikoo 评论

暂缓，等 P1-P4 完成后单独处理。

方案：Vercel 部署 Twikoo + MongoDB Atlas 免费套餐，零成本。

---

## 不在本次范围内

- PWA 配置
- 友情链接圈（friends_vue，需要后端）
- Analytics 接入（baidu/google）
- 文章内容本身的重写或删除

---

## 关键约束

- 博客项目目前无 git 仓库，建议 P1 完成后初始化 git
- 包管理器使用 npm（非 bun，博客项目独立于 new-api）
- 图床：PicGo + 腾讯云 COS（bucket: smith-1315833455，路径: blog/）
- 部署：`hexo deploy` → `git@github-blog:Smithhss/smithhs.github.io.git` main 分支
