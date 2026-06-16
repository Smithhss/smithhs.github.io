# Batch A: 清理 + 修复 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 彻底清除 anzhiyu 残留引用、修复图片不显示、修复生活页 404

**Architecture:** 分 3 个独立任务：P1 发布 npm 包并替换 CDN URL，P2 替换失效的 lazyload CDN，P3 修改菜单配置路径

**Tech Stack:** npm, Hexo 7.3.0, pug, YAML, vanilla-lazyload

---

## 文件结构

| 文件 | 操作 | 职责 |
|------|------|------|
| `_config.smith.yml` | 修改 | CDN URL 替换、菜单路径修复 |
| `layout/includes/smith/log-js.pug` | 修改 | 控制台文字和 CDN 替换 |
| `layout/includes/third-party/runtime/runtime-js.pug` | 修改 | 注释文字替换 |
| `scripts/events/merge_config.js` | 修改 | SVG 文件名替换 |
| `source/json/music.json` | 修改 | 音乐 CDN URL 替换 |
| `plugins.yml` | 修改 | lazyload CDN 替换 |

---

### Task 1: 发布 smith npm 包

**Files:**
- 无代码文件，操作 npm registry

- [ ] **Step 1: 下载 anzhiyu-blog 包内容**

```bash
mkdir -p /tmp/smith-npm/smith-blog
cd /tmp/smith-npm
curl -sL "https://registry.npmmirror.com/anzhiyu-blog/-/anzhiyu-blog-2.2.3.tgz" | tar xz
mv package smith-blog
```

- [ ] **Step 2: 重命名 badge SVG 文件（安知鱼→史先森）**

```bash
cd /tmp/smith-npm/smith-blog/img/badge/
# 列出文件确认
ls -la
# 重命名包含"安知鱼"的文件
# 注意：文件名含中文，需要确认实际文件名后执行
```

- [ ] **Step 3: 修改 SVG 内容中的安知鱼文字**

```bash
# 检查 SVG 文件内容是否包含"安知鱼"
grep -rl "安知鱼" /tmp/smith-npm/smith-blog/img/badge/*.svg
# 如有，sed 替换为"史先森"
```

- [ ] **Step 4: 发布 smith-blog@1.0.0**

```bash
cd /tmp/smith-npm/smith-blog
# 创建 package.json
cat > package.json << 'EOF'
{
  "name": "smith-blog",
  "version": "1.0.0",
  "description": "Smith blog static assets",
  "author": "Smith",
  "license": "MIT"
}
EOF
npm publish
```

- [ ] **Step 5: 下载并发布 smith-blog-static@1.0.0**

```bash
mkdir -p /tmp/smith-npm/smith-blog-static
cd /tmp/smith-npm
curl -sL "https://registry.npmmirror.com/anzhiyu-blog-static/-/anzhiyu-blog-static-1.0.4.tgz" | tar xz
mv package smith-blog-static
cd smith-blog-static
cat > package.json << 'EOF'
{
  "name": "smith-blog-static",
  "version": "1.0.0",
  "description": "Smith blog static resources",
  "author": "Smith",
  "license": "MIT"
}
EOF
npm publish
```

- [ ] **Step 6: 下载并发布 smith-music@1.0.0**

```bash
mkdir -p /tmp/smith-npm/smith-music
cd /tmp/smith-npm
curl -sL "https://registry.npmmirror.com/anzhiyu-music/-/anzhiyu-music-1.0.4.tgz" | tar xz
mv package smith-music
cd smith-music
cat > package.json << 'EOF'
{
  "name": "smith-music",
  "version": "1.0.0",
  "description": "Smith music resources",
  "author": "Smith",
  "license": "MIT"
}
EOF
npm publish
```

- [ ] **Step 7: 验证包已发布**

```bash
npm view smith-blog versions
npm view smith-blog-static versions
npm view smith-music versions
```

Expected: 每个命令输出 `1.0.0`

- [ ] **Step 8: 清理临时文件**

```bash
rm -rf /tmp/smith-npm
```

---

### Task 2: 替换 _config.smith.yml 中的 CDN URL 和文字

**Files:**
- Modify: `_config.smith.yml`

- [ ] **Step 1: 替换 anzhiyu-blog CDN URL**

```bash
cd F:/Develop/project/Blog
# anzhiyu-blog@1.1.6 → smith-blog@1.0.0
sed -i 's/anzhiyu-blog@1\.1\.6/smith-blog@1.0.0/g' _config.smith.yml
# anzhiyu-blog@2.0.4 → smith-blog@1.0.0
sed -i 's/anzhiyu-blog@2\.0\.4/smith-blog@1.0.0/g' _config.smith.yml
# anzhiyu-blog@2.1.5 → smith-blog@1.0.0
sed -i 's/anzhiyu-blog@2\.1\.5/smith-blog@1.0.0/g' _config.smith.yml
# anzhiyu-blog@2.2.0 → smith-blog@1.0.0
sed -i 's/anzhiyu-blog@2\.2\.0/smith-blog@1.0.0/g' _config.smith.yml
```

- [ ] **Step 2: 替换 anzhiyu-blog-static CDN URL**

```bash
sed -i 's/anzhiyu-blog-static@1\.0\.4/smith-blog-static@1.0.0/g' _config.smith.yml
```

- [ ] **Step 3: 替换安知鱼文字为史先森**

```bash
sed -i 's/安知鱼/史先森/g' _config.smith.yml
```

- [ ] **Step 4: 修复生活页路径（P3）**

```bash
# 将 /categories/生活日常/ 改为 /categories/随笔/
sed -i 's|/categories/生活日常/|/categories/随笔/|g' _config.smith.yml
```

- [ ] **Step 5: 验证替换结果**

```bash
grep -c "anzhiyu" _config.smith.yml
```

Expected: 0（仅注释中的可能保留）

- [ ] **Step 6: Commit**

```bash
git add _config.smith.yml
git commit -m "fix: replace anzhiyu CDN URLs with smith, fix 生活页 404"
```

---

### Task 3: 替换 log-js.pug 中的文字和 CDN

**Files:**
- Modify: `layout/includes/smith/log-js.pug`

- [ ] **Step 1: 替换安知鱼文字**

```bash
cd F:/Develop/project/Blog/themes/smith
sed -i 's/安知鱼/史先森/g' layout/includes/smith/log-js.pug
```

- [ ] **Step 2: 替换 CDN URL**

```bash
sed -i 's/anzhiyu-blog@1\.1\.6/smith-blog@1.0.0/g' layout/includes/smith/log-js.pug
```

- [ ] **Step 3: 验证**

```bash
grep -c "anzhiyu\|安知鱼" layout/includes/smith/log-js.pug
```

Expected: 0

- [ ] **Step 4: Commit**

```bash
git add layout/includes/smith/log-js.pug
git commit -m "fix: replace anzhiyu text and CDN in log-js.pug"
```

---

### Task 4: 替换其他文件中的 anzhiyu 引用

**Files:**
- Modify: `layout/includes/third-party/runtime/runtime-js.pug`
- Modify: `scripts/events/merge_config.js`

- [ ] **Step 1: 替换 runtime-js.pug 注释**

```bash
cd F:/Develop/project/Blog/themes/smith
sed -i 's/安知鱼/史先森/g' layout/includes/third-party/runtime/runtime-js.pug
```

- [ ] **Step 2: 替换 merge_config.js 中的 SVG 文件名**

```bash
sed -i 's/安知鱼/史先森/g' scripts/events/merge_config.js
sed -i 's/anzhiyu-blog@2\.0\.4/smith-blog@1.0.0/g' scripts/events/merge_config.js
```

- [ ] **Step 3: 验证**

```bash
grep -c "安知鱼" layout/includes/third-party/runtime/runtime-js.pug scripts/events/merge_config.js
```

Expected: 0

- [ ] **Step 4: Commit**

```bash
git add layout/includes/third-party/runtime/runtime-js.pug scripts/events/merge_config.js
git commit -m "fix: replace anzhiyu references in runtime-js and merge_config"
```

---

### Task 5: 替换 music.json CDN URL

**Files:**
- Modify: `source/json/music.json`

- [ ] **Step 1: 替换所有 anzhiyu-music URL**

```bash
cd F:/Develop/project/Blog/themes/smith
sed -i 's/anzhiyu-music@1\.0\.[0-9]*/smith-music@1.0.0/g' source/json/music.json
sed -i 's/anzhiyu-music-jay@1\.0\.[0-9]*/smith-music@1.0.0/g' source/json/music.json
```

- [ ] **Step 2: 验证**

```bash
grep -c "anzhiyu" source/json/music.json
```

Expected: 0

- [ ] **Step 3: Commit**

```bash
git add source/json/music.json
git commit -m "fix: replace anzhiyu-music CDN URLs with smith-music"
```

---

### Task 6: 修复 vanilla-lazyload CDN（P2）

**Files:**
- Modify: `plugins.yml`

- [ ] **Step 1: 查找当前 lazyload CDN 配置**

```bash
cd F:/Develop/project/Blog/themes/smith
grep -n "lazyload" plugins.yml
```

- [ ] **Step 2: 替换为 jsdelivr CDN**

```bash
sed -i 's|https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/vanilla-lazyload/17.3.1/lazyload.iife.min.js|https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.8.5/dist/lazyload.min.js|g' plugins.yml
```

- [ ] **Step 3: 验证**

```bash
grep "lazyload" plugins.yml
```

Expected: URL 显示 jsdelivr

- [ ] **Step 4: Commit**

```bash
git add plugins.yml
git commit -m "fix: replace broken lazyload CDN with jsdelivr"
```

---

### Task 7: 清理配置中的残留 anzhiyu 引用

**Files:**
- Modify: `_config.smith.yml`

- [ ] **Step 1: 检查剩余 anzhiyu 引用**

```bash
cd F:/Develop/project/Blog
grep -n "anzhiyu" _config.smith.yml
```

- [ ] **Step 2: 替换注释中的 anzhiyu GitHub 链接**

```bash
sed -i 's|github.com/anzhiyu-c/hexo-theme-anzhiyu|github.com/Smithhss/hexo-theme-smith|g' _config.smith.yml
sed -i 's|github.com/anzhiyu-c|github.com/Smithhss|g' _config.smith.yml
```

- [ ] **Step 3: 替换图标类名**

```bash
sed -i 's/anzhiyu-icon-/smith-icon-/g' _config.smith.yml
```

- [ ] **Step 4: 验证**

```bash
grep -c "anzhiyu" _config.smith.yml
```

Expected: 仅 `plugins.yml` 中的 `hexo-anzhiyu-music` 保留

- [ ] **Step 5: Commit**

```bash
git add _config.smith.yml
git commit -m "fix: clean remaining anzhiyu references in config"
```

---

### Task 8: 构建验证

**Files:**
- 无

- [ ] **Step 1: 清理并构建**

```bash
cd F:/Develop/project/Blog
npx hexo clean && npx hexo generate
```

Expected: 243+ files generated, 无 ERROR

- [ ] **Step 2: 验证图片加载**

```bash
npx hexo server -p 4003 &
sleep 3
curl -s http://localhost:4003/2021/05/17/2021-05-17-Java学习/ | grep -o "data-lazy-src" | wc -l
```

Expected: 图片数量 > 0

- [ ] **Step 3: 验证无 anzhiyu 残留**

```bash
grep -r "anzhiyu" public/ --include="*.html" | grep -v "hexo-anzhiyu-music" | wc -l
```

Expected: 0

- [ ] **Step 4: 部署**

```bash
npx hexo deploy
```
