# Smith 主题改造实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 smithhs.cn 博客从 anzhiyu 主题深度改造为 smith 专属主题，建立个人视觉身份并完善内容与功能配置。

**Architecture:** 复制 `themes/anzhiyu/` → `themes/smith/` 作为独立起点，修改根配置切换主题，然后在 `_config.smith.yml` 和 `themes/smith/source/css/` 中完成配色、字体、个人品牌、功能清理、内容整理五个阶段的改造。

**Tech Stack:** Hexo 7.3.0, npm, anzhiyu 1.7.1（作为 smith 基础）, 腾讯云 COS（图床，PicGo 上传）

---

## 文件变更总览

| 操作 | 文件 |
|------|------|
| 新建 | `themes/smith/`（从 anzhiyu 复制） |
| 新建 | `_config.smith.yml`（从 `_config.anzhiyu.yml` 复制） |
| 修改 | `_config.yml` — theme 字段 |
| 修改 | `_config.smith.yml` — 配色、字体、home_top、功能清理 |
| 修改 | `themes/smith/_config.yml` — name 字段 |
| 修改 | `themes/smith/source/css/_extra/anzhiyu/custom.css` — 字体引入、颜色变量覆盖 |
| 修改 | `source/_posts/Redis实战篇.md` — 补 front-matter date，重命名文件 |
| 修改 | `source/_posts/*.md`（批量）— 统一 categories 值 |
| 核查 | `source/_data/album.yml`, `link.yml`, `essay.yml` |
| 修改 | `source/about/index.md` — 重写个人介绍 |

---

## Task 1: 初始化 git 仓库

**Files:**
- 在 `~/develop/project/Blog/` 初始化 git

- [ ] **Step 1: 初始化 git**

```bash
cd ~/develop/project/Blog
git init
```

- [ ] **Step 2: 创建 .gitignore**

```bash
cat > .gitignore << 'EOF'
node_modules/
public/
.deploy_git/
db.json
*.bak
EOF
```

- [ ] **Step 3: 初始提交**

```bash
git add .
git commit -m "chore: initial commit - blog source before smith theme"
```

Expected: 输出 `root-commit`，无报错

---

## Task 2: 搭建 smith 主题骨架

**Files:**
- 新建 `themes/smith/`
- 新建 `_config.smith.yml`
- 修改 `_config.yml`
- 修改 `themes/smith/_config.yml`

- [ ] **Step 1: 复制 anzhiyu 主题目录**

```bash
cp -r ~/develop/project/Blog/themes/anzhiyu ~/develop/project/Blog/themes/smith
```

Expected: `ls ~/develop/project/Blog/themes/` 输出 `anzhiyu  smith`

- [ ] **Step 2: 修改 smith 主题内部 _config.yml 的 name 字段**

打开 `themes/smith/_config.yml`，找到 `name:` 字段，改为：

```yaml
name: smith
```

（若文件中无此字段，在文件顶部添加 `name: smith`）

- [ ] **Step 3: 复制主题配置文件**

```bash
cp ~/develop/project/Blog/_config.anzhiyu.yml ~/develop/project/Blog/_config.smith.yml
```

- [ ] **Step 4: 切换根配置到 smith 主题**

打开 `_config.yml`，找到：

```yaml
theme: anzhiyu
```

改为：

```yaml
theme: smith
```

- [ ] **Step 5: 验证构建**

```bash
cd ~/develop/project/Blog
npx hexo clean && npx hexo generate 2>&1 | tail -5
```

Expected: 输出 `INFO  241 files generated` 或类似行数，无 ERROR

- [ ] **Step 6: 提交**

```bash
git add themes/smith/ _config.smith.yml _config.yml
git commit -m "feat: add smith theme skeleton from anzhiyu"
```

---

## Task 3: 配色方案更新

**Files:**
- 修改 `_config.smith.yml` — `theme_color` 节

- [ ] **Step 1: 确认当前 theme_color 节位置**

```bash
grep -n "theme_color" ~/develop/project/Blog/_config.smith.yml
```

Expected: 输出行号，如 `633:theme_color:`

- [ ] **Step 2: 替换 theme_color 节**

打开 `_config.smith.yml`，找到 `theme_color:` 节（约第 633 行），将整个节替换为：

```yaml
theme_color:
  enable: true
  main: "#4f7cff"
  dark_main: "#ffd166"
  paginator: "#4f7cff"
  text_selection: "#4f7cff33"
  link_color: "var(--anzhiyu-fontcolor)"
  meta_color: "var(--anzhiyu-fontcolor)"
  hr_color: "#4f7cff23"
  code_foreground: "#fff"
  code_background: "var(--anzhiyu-code-stress)"
  toc_color: "#4f7cff"
  scrollbar_color: "var(--anzhiyu-scrollbar)"
  meta_theme_color_light: "#fafaf8"
  meta_theme_color_dark: "#18171d"
```

- [ ] **Step 3: 同步更新 snackbar 背景色**

找到 `snackbar:` 节，将 `bg_light` 改为：

```yaml
snackbar:
  enable: true
  position: top-center
  bg_light: "#4f7cff"
  bg_dark: "#1f1f1f"
```

- [ ] **Step 4: 验证构建**

```bash
cd ~/develop/project/Blog && npx hexo generate 2>&1 | grep -E "ERROR|INFO.*files"
```

Expected: 只有 INFO 行，无 ERROR

- [ ] **Step 5: 提交**

```bash
git add _config.smith.yml
git commit -m "feat(smith): update theme color to smith brand palette"
```

---

## Task 4: 字体引入（霞鹜文楷）

**Files:**
- 修改 `themes/smith/source/css/_extra/anzhiyu/custom.css`

- [ ] **Step 1: 在 custom.css 顶部添加字体引入和覆盖**

打开 `themes/smith/source/css/_extra/anzhiyu/custom.css`，在文件最顶部插入：

```css
/* ===== Smith Theme Font ===== */
@import url('https://npm.elemecdn.com/lxgw-wenkai-screen-webfont@1.1.0/style.css');

:root {
  --smith-font-body: 'LXGW WenKai Screen', 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

body {
  font-family: var(--smith-font-body) !important;
}

/* 背景微暖白 */
:root {
  --anzhiyu-background: #fafaf8;
}

[data-theme="light"] body {
  background-color: #fafaf8;
}
```

- [ ] **Step 2: 验证构建**

```bash
cd ~/develop/project/Blog && npx hexo generate 2>&1 | grep -E "ERROR|INFO.*files"
```

Expected: 无 ERROR

- [ ] **Step 3: 提交**

```bash
git add themes/smith/source/css/_extra/anzhiyu/custom.css
git commit -m "feat(smith): add LXGW WenKai font and warm background"
```

---

## Task 5: 首页 Banner 与快捷分类

**Files:**
- 修改 `_config.smith.yml` — `home_top` 节

- [ ] **Step 1: 找到 home_top 节位置**

```bash
grep -n "home_top:" ~/develop/project/Blog/_config.smith.yml
```

- [ ] **Step 2: 替换 home_top 节**

找到 `home_top:` 节，将 title/subTitle/siteText/category 替换为：

```yaml
home_top:
  enable: true
  timemode: date
  title: Smith
  subTitle: Build things. Write things. Own things.
  siteText: smithhs.cn
  category:
    - name: Code
      path: /categories/编程开发/
      shadow: var(--anzhiyu-shadow-blue)
      class: blue
      icon: anzhiyu-icon-dove
    - name: 生活
      path: /categories/生活日常/
      shadow: var(--anzhiyu-shadow-green)
      class: green
      icon: anzhiyu-icon-book
    - name: 随笔
      path: /categories/随笔/
      shadow: var(--anzhiyu-shadow-yellow)
      class: yellow
      icon: anzhiyu-icon-lightbulb
  default_descr: 再怎么看我也不知道怎么描述它的啦！
  swiper:
    enable: false
  banner:
    tips: 最新开源
    title: Comment-wall
    image: https://alandodo-1315761622.cos.ap-beijing.myqcloud.com/blog/x130.jpg
    link: https://github.com/Smithhss/Comment-wall
```

- [ ] **Step 3: 验证**

```bash
cd ~/develop/project/Blog && npx hexo generate 2>&1 | grep -E "ERROR|INFO.*files"
```

Expected: 无 ERROR

- [ ] **Step 4: 提交**

```bash
git add _config.smith.yml
git commit -m "feat(smith): update home_top banner and categories"
```

---

## Task 6: 作者卡片与个人介绍

**Files:**
- 修改 `_config.smith.yml` — `author_status`、`aside.card_author` 节
- 修改 `source/about/index.md`

- [ ] **Step 1: 更新 author_status**

找到 `author_status:` 节，替换为：

```yaml
author_status:
  enable: true
  status: 💻
  alias: laptop
  fallback_src: https://github.githubassets.com/images/icons/emoji/unicode/1f4bb.png
  text: on Building
  skills:
    - 💻 后端开发 Java / Spring Cloud
    - 🌐 前端探索 React / TypeScript
    - 🤖 AI 工具深度用户
    - 🏠 智能家居折腾达人
    - 🔨 从设计到部署一条龙
    - 📝 偶尔写写博客记录生活
    - 🎵 听歌写代码双线并行
    - 🚀 脚踏实地行动派
```

- [ ] **Step 2: 更新侧边栏作者卡片描述**

找到 `aside:` → `card_author:` → `description:` 字段，替换为：

```yaml
    description: <div style="line-height:1.38;margin:0.6rem 0;text-align:justify;color:rgba(255, 255, 255, 0.8);">分享关于 <b style="color:#fff">Java、Spring Cloud、前端</b> 的技术文章与经验总结。</div><div style="line-height:1.38;margin:0.6rem 0;text-align:justify;color:rgba(255, 255, 255, 0.8);">也记录一些<b style="color:#fff">生活与思考</b>，欢迎常来坐坐。</div>
```

- [ ] **Step 3: 重写关于我页面**

打开 `source/about/index.md`，保留 front-matter，将正文内容替换为：

```markdown
---
title: 关于我
date: 2022-02-01 00:00:00
type: about
---

## Hi，我是 Smith 👋

一个喜欢折腾的后端工程师，主力技术栈是 **Java / Spring Cloud**，也在不断探索前端和 AI 方向。

## 技术方向

- **后端**：Java、Spring Boot、Spring Cloud、MySQL、Redis
- **前端**：正在学习 React、TypeScript
- **工具**：熟悉 Linux、Docker、Git，喜欢自动化一切重复的事

## 这个博客

从 2021 年开始记录学习笔记，内容涵盖后端开发、前端探索、工具折腾和生活随笔。

文章质量参差不齐，但都是真实的学习过程。

## 联系方式

- GitHub：[Smithhss](https://github.com/Smithhss)
- 邮箱：saressmith@outlook.com
```

- [ ] **Step 4: 验证构建**

```bash
cd ~/develop/project/Blog && npx hexo generate 2>&1 | grep -E "ERROR|INFO.*files"
```

- [ ] **Step 5: 提交**

```bash
git add _config.smith.yml source/about/index.md
git commit -m "feat(smith): update author card and about page"
```

---

## Task 7: 功能清理 — 关闭损坏项

**Files:**
- 修改 `_config.smith.yml` — AI 摘要、站点验证、分享按钮、nav 死链

- [ ] **Step 1: 关闭 AI 摘要**

找到 `post_head_ai_description:` 节，将 `enable:` 改为：

```yaml
post_head_ai_description:
  enable: false
```

（其余字段保留，只改 enable）

- [ ] **Step 2: 清空站点验证占位符**

找到 `site_verification:` 节，替换为：

```yaml
site_verification:
  # - name: google-site-verification
  #   content:
  # - name: baidu-site-verification
  #   content:
```

- [ ] **Step 3: 修复分享按钮**

找到 `sharejs:` 节，将 sites 改为：

```yaml
sharejs:
  enable: true
  sites: wechat,weibo,qq
```

- [ ] **Step 4: 清理 nav 导航死链**

找到 `nav:` → `menu:` → `title: 项目` 下的 item 列表，删除以下三项（保留 Github）：

```yaml
# 删除：
# - name: Robot
#   link: http://robot.onliu.cn/
# - name: Sale
#   link: http://res.onliu.cn
# - name: 资源共享
#   link: http://se.onliu.cn/
```

保留后结果：

```yaml
    - title: 项目
      item:
        - name: Github
          link: https://github.com/Smithhss
          icon: https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/GitHub.png
```

- [ ] **Step 5: 验证构建**

```bash
cd ~/develop/project/Blog && npx hexo generate 2>&1 | grep -E "ERROR|INFO.*files"
```

- [ ] **Step 6: 提交**

```bash
git add _config.smith.yml
git commit -m "fix(smith): disable broken AI summary, clean dead nav links"
```

---

## Task 8: 开启本地搜索

**Files:**
- 修改 `_config.smith.yml` — `local_search` 节
- 安装 hexo-generator-searchdb 插件

- [ ] **Step 1: 安装搜索插件**

```bash
cd ~/develop/project/Blog
npm install hexo-generator-searchdb --save
```

Expected: 输出 `added N packages`，无 WARN/ERROR

- [ ] **Step 2: 开启 local_search**

找到 `local_search:` 节，替换为：

```yaml
local_search:
  enable: true
  preload: true
  CDN:
```

- [ ] **Step 3: 验证搜索索引生成**

```bash
cd ~/develop/project/Blog && npx hexo generate 2>&1 | grep -E "search|ERROR|INFO.*files"
```

Expected: 构建成功，`public/` 下出现 `search.xml` 或 `search.json`：

```bash
ls ~/develop/project/Blog/public/ | grep search
```

- [ ] **Step 4: 提交**

```bash
git add _config.smith.yml package.json package-lock.json
git commit -m "feat(smith): enable local search"
```

---

## Task 9: 文章分类统一

**Files:**
- 批量修改 `source/_posts/*.md` — categories 字段

现有分类映射关系：

| 原分类 | 改为 | 涉及文章数 |
|--------|------|-----------|
| `Programming` | `编程开发` | ~58 篇 |
| `Front` | `编程开发` | ~4 篇 |
| `Learning` | `编程开发` | ~1 篇 |
| `技术分享` | `技术分享` | 保留不变 |
| `Blog` | `随笔` | ~3 篇 |
| `个人分享` | `随笔` | ~1 篇 |
| `生活日常` | `生活日常` | 保留不变 |

- [ ] **Step 1: 批量替换 Programming → 编程开发**

```bash
cd ~/develop/project/Blog
sed -i 's/^categories: Programming$/categories: 编程开发/' source/_posts/*.md
```

- [ ] **Step 2: 批量替换 Front → 编程开发**

```bash
sed -i 's/^categories: Front$/categories: 编程开发/' source/_posts/*.md
```

- [ ] **Step 3: 批量替换 Learning → 编程开发**

```bash
sed -i 's/^categories: Learning$/categories: 编程开发/' source/_posts/*.md
```

- [ ] **Step 4: 批量替换 Blog → 随笔**

```bash
sed -i 's/^categories: Blog$/categories: 随笔/' source/_posts/*.md
```

- [ ] **Step 5: 批量替换 个人分享 → 随笔**

```bash
sed -i 's/^categories: 个人分享$/categories: 随笔/' source/_posts/*.md
```

- [ ] **Step 6: 验证替换结果**

```bash
grep "^categories:" ~/develop/project/Blog/source/_posts/*.md | awk -F: '{print $3}' | sort | uniq -c | sort -rn
```

Expected：只剩下 `编程开发`、`技术分享`、`随笔`、`生活日常` 等中文分类，无英文分类残留

- [ ] **Step 7: 验证构建**

```bash
cd ~/develop/project/Blog && npx hexo generate 2>&1 | grep -E "ERROR|INFO.*files"
```

- [ ] **Step 8: 提交**

```bash
git add source/_posts/
git commit -m "fix(content): unify post categories to Chinese"
```

---

## Task 10: Redis 文章补全 front-matter

**Files:**
- 修改/重命名 `source/_posts/Redis实战篇.md`

- [ ] **Step 1: 查看当前内容**

```bash
head -5 ~/develop/project/Blog/source/_posts/Redis实战篇.md
```

Expected: 文件无 front-matter（直接从正文 `# 实战篇Redis` 开始）

- [ ] **Step 2: 添加 front-matter**

在文件最顶部插入以下内容（在 `# 实战篇Redis` 之前）：

```markdown
---
title: Redis 实战篇
date: 2025-02-17 13:22:36
tags:
  - Redis
  - 后端
categories: 编程开发
---

```

- [ ] **Step 3: 重命名文件添加日期前缀**

```bash
mv ~/develop/project/Blog/source/_posts/Redis实战篇.md \
   ~/develop/project/Blog/source/_posts/2025-02-17-Redis实战篇.md
```

- [ ] **Step 4: 验证构建**

```bash
cd ~/develop/project/Blog && npx hexo generate 2>&1 | grep -E "ERROR|INFO.*files"
```

- [ ] **Step 5: 提交**

```bash
git add source/_posts/
git commit -m "fix(content): add front-matter and date prefix to Redis post"
```

---

## Task 11: 核查页面数据文件

**Files:**
- 核查 `source/_data/album.yml`、`link.yml`、`essay.yml`

- [ ] **Step 1: 检查相册图片链接（抽查）**

```bash
grep "^    - " ~/develop/project/Blog/source/_data/album.yml | head -5
```

用 curl 验证封面图片是否可访问：

```bash
curl -s -o /dev/null -w "%{http_code}" https://alandodo-1315761622.cos.ap-beijing.myqcloud.com/blog/x152.jpg
curl -s -o /dev/null -w "%{http_code}" https://alandodo-1315761622.cos.ap-beijing.myqcloud.com/blog/x157.jpg
```

Expected: `200`（若返回 403/404 说明图片已失效，需更新对应 cover/top_background 链接）

- [ ] **Step 2: 检查友链**

```bash
grep "link:" ~/develop/project/Blog/source/_data/link.yml | head -10
```

对不确定的友链，用 curl 快速验证：

```bash
curl -s -o /dev/null -w "%{http_code}" https://blog.zhheo.com/ 
```

Expected: `200` 或 `301`（重定向也算有效）

- [ ] **Step 3: 检查 essay 数据**

```bash
head -30 ~/develop/project/Blog/source/_data/essay.yml
```

确认内容是否过时，若需要更新则手动编辑该文件添加新内容（格式参考现有条目）。

- [ ] **Step 4: 构建验证**

```bash
cd ~/develop/project/Blog && npx hexo generate 2>&1 | grep -E "ERROR|INFO.*files"
```

- [ ] **Step 5: 提交（若有修改）**

```bash
git add source/_data/
git commit -m "fix(content): update data files - album/link/essay"
```

---

## Task 12: 最终完整验证

- [ ] **Step 1: 全量清理构建**

```bash
cd ~/develop/project/Blog && npx hexo clean && npx hexo generate
```

Expected: 输出 `INFO  X files generated`，无任何 ERROR 或 WARN

- [ ] **Step 2: 验证关键页面生成**

```bash
ls ~/develop/project/Blog/public/ | grep -E "index|about|categories|tags|archives"
grep -r "Smith" ~/develop/project/Blog/public/index.html | head -3
grep -r "4f7cff" ~/develop/project/Blog/public/css/ 2>/dev/null | head -3
```

Expected:
- 首页存在
- index.html 包含 "Smith" 字样
- 生成的 CSS 中包含新的主色 `4f7cff`

- [ ] **Step 3: 验证搜索索引**

```bash
ls ~/develop/project/Blog/public/ | grep search
```

Expected: `search.xml` 或 `search.json` 存在

- [ ] **Step 4: 验证分类页面**

```bash
ls ~/develop/project/Blog/public/categories/
```

Expected: 出现 `编程开发/`、`生活日常/`、`随笔/`、`技术分享/`，无英文分类目录

- [ ] **Step 5: 最终提交**

```bash
git add .
git commit -m "chore: final verification - smith theme complete P1-P4"
```

---

## 后续（P5，暂缓）

Twikoo 评论系统，待 P1-P4 完成后单独处理：
- 注册 MongoDB Atlas 免费集群
- Vercel 部署 Twikoo，获取 envId
- `_config.smith.yml` 设置 `comments.use: Twikoo` 和 `twikoo.envId`

---

## 执行顺序

```
Task 1 (git init)
  → Task 2 (smith 骨架)
    → Task 3 (配色)
    → Task 4 (字体)
    → Task 5 (首页 banner)
    → Task 6 (作者卡片)
    → Task 7 (功能清理)
    → Task 8 (搜索)
  → Task 9 (分类统一)
  → Task 10 (Redis 文章)
  → Task 11 (数据文件核查)
  → Task 12 (最终验证)
```

Task 3-8 之间无严格依赖，可按顺序逐一执行。
