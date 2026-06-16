# Batch B: 性能优化 + 音乐修复 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 优化主页加载速度、修复音乐馆播放功能

**Architecture:** P4 通过减少外部资源请求数和统一 CDN 域名优化性能；P5 替换失效的 APlayer CDN 和 Meting API

**Tech Stack:** Hexo 7.3.0, APlayer, MetingJS, vanilla-lazyload

---

## 文件结构

| 文件 | 操作 | 职责 |
|------|------|------|
| `plugins.yml` | 修改 | APlayer CDN 替换 |
| `_config.smith.yml` | 修改 | Meting API 替换、CDN 统一 |

---

### Task 1: 修复 APlayer CDN

**Files:**
- Modify: `plugins.yml`

- [ ] **Step 1: 查找当前 APlayer 配置**

```bash
cd F:/Develop/project/Blog/themes/smith
grep -n "aplayer" plugins.yml
```

- [ ] **Step 2: 替换 APlayer JS CDN**

```bash
sed -i 's|https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js|https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js|g' plugins.yml
```

- [ ] **Step 3: 替换 APlayer CSS CDN**

```bash
sed -i 's|https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.css|https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css|g' plugins.yml
```

- [ ] **Step 4: 验证**

```bash
grep "aplayer" plugins.yml
```

Expected: URL 显示 jsdelivr

- [ ] **Step 5: Commit**

```bash
git add plugins.yml
git commit -m "fix: replace broken APlayer CDN with jsdelivr"
```

---

### Task 2: 修复 Meting API

**Files:**
- Modify: `_config.smith.yml`

- [ ] **Step 1: 查找当前 Meting 配置**

```bash
cd F:/Develop/project/Blog
grep -n "meting" _config.smith.yml
```

- [ ] **Step 2: 替换 Meting JS CDN**

```bash
sed -i 's|https://npm.elemecdn.com/hexo-anzhiyu-music@1.0.1/assets/js/Meting2.min.js|https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js|g' _config.smith.yml
```

- [ ] **Step 3: 替换 Meting API 地址**

```bash
# 替换为可用的公共 Meting API
sed -i 's|https://meting.qjqq.cn/|https://api.injahow.cn/meting/|g' _config.smith.yml
```

- [ ] **Step 4: 验证**

```bash
grep "meting" _config.smith.yml
```

Expected: URL 显示 jsdelivr 和 api.injahow.cn

- [ ] **Step 5: Commit**

```bash
git add _config.smith.yml
git commit -m "fix: replace broken Meting CDN and API"
```

---

### Task 3: 主页性能优化 — 减少外部资源

**Files:**
- Modify: `_config.smith.yml`

- [ ] **Step 1: 分析当前外部资源**

```bash
cd F:/Develop/project/Blog
npx hexo clean && npx hexo generate
# 统计外部资源数量
grep -oE 'src="https?://[^"]*"' public/index.html | wc -l
```

- [ ] **Step 2: 检查 bu.dusays.com 图片用途**

```bash
grep "bu.dusays.com" _config.smith.yml | head -10
```

- [ ] **Step Step 3: 将 bu.dusays.com 图片迁移到腾讯 COS**

对于配置中的 `bu.dusays.com` 图片，如果用户有自己的 COS 图床，可以下载后重新上传到 `smith-1315833455.cos.ap-beijing.myqcloud.com`，然后替换 URL。

```bash
# 示例：替换某个 bu.dusays.com 图片为 COS 地址
# sed -i 's|https://bu.dusays.com/xxx|https://smith-1315833455.cos.ap-beijing.myqcloud.com/blog/xxx|g' _config.smith.yml
```

- [ ] **Step 4: 验证构建**

```bash
npx hexo clean && npx hexo generate
```

Expected: 243+ files, 无 ERROR

- [ ] **Step 5: Commit**

```bash
git add _config.smith.yml
git commit -m "perf: migrate external images to own COS for faster loading"
```

---

### Task 4: 构建验证

**Files:**
- 无

- [ ] **Step 1: 构建并测试音乐页面**

```bash
cd F:/Develop/project/Blog
npx hexo clean && npx hexo generate
npx hexo server -p 4004 &
sleep 3
curl -s http://localhost:4004/music/ | grep -o "aplayer\|meting" | head -5
```

Expected: 包含 aplayer 和 meting

- [ ] **Step 2: 部署**

```bash
npx hexo deploy
```
