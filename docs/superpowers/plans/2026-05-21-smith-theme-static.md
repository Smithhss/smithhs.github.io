# smith-theme-static Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 `anzhiyu-theme-static` fork 为 `smith-theme-static`，重命名 icon font（smithfont/smith-icon-*），合并 APlayer.min.js，发布到 npm。

**Architecture:** fork GitHub 仓库 → 本地修改（字体文件重命名 + CSS 替换 + package.json 更新）→ npm publish。字体文件实际为哈希命名（`font_2508400_xxx.woff2`），需整体重命名为 `smith.*`，并同步更新 CSS src 引用。

**Tech Stack:** npm, gh CLI, bash sed, Node.js（仅用于 npm publish）

---

## 文件变更总览

| 操作 | 路径 |
|------|------|
| 新建仓库 | `Smithhss/smith-theme-static`（GitHub fork） |
| 修改 | `icon/ali_iconfont_css.css` — font-family、src URL、class 名 |
| 重命名 | `icon/font_*.eot/.woff/.woff2/.ttf/.svg` → `icon/smith.eot/.woff/.woff2/.ttf/.svg` |
| 新增 | `js/APlayer.min.js`（从 anzhiyu-blog-static 获取） |
| 修改 | `package.json` — name、author、repo 等 |
| 修改 | `README.md` — 标题 + 原作者署名 |

---

## Task 1: Fork 并 clone 仓库

**Files:**
- 新建 `~/develop/smith-theme-static/`

- [ ] **Step 1: 用 gh CLI fork**

```bash
gh repo fork anzhiyu-c/anzhiyu-theme-static \
  --clone=false \
  --fork-name smith-theme-static \
  --org ""
```

Expected: 输出 `✓ Created fork Smithhss/smith-theme-static`

> 如果 gh 不支持 `--fork-name`（旧版本），在 GitHub 网页手动 fork 并重命名仓库为 `smith-theme-static`，再跳到 Step 2。

- [ ] **Step 2: clone 到本地**

```bash
cd ~/develop
git clone git@github.com:Smithhss/smith-theme-static.git
cd smith-theme-static
```

Expected: 目录 `~/develop/smith-theme-static/` 存在，`git status` 显示 `On branch main`（或 master）

- [ ] **Step 3: 确认 icon 目录实际文件**

```bash
ls ~/develop/smith-theme-static/icon/
```

Expected: 看到 `ali_iconfont_css.css` 和若干 `font_2508400_*.eot/.woff/.woff2/.ttf/.svg` 文件，记录实际文件名供后续步骤使用。

---

## Task 2: 重命名字体二进制文件

**Files:**
- 修改 `icon/` 目录中所有 `font_*.eot/.woff/.woff2/.ttf/.svg` 文件

- [ ] **Step 1: 批量重命名字体文件**

```bash
cd ~/develop/smith-theme-static/icon

# 每种格式单独重命名（glob 匹配哈希文件名）
for ext in eot woff woff2 ttf; do
  src=$(ls font_*.$ext 2>/dev/null | head -1)
  [ -n "$src" ] && mv "$src" "smith.$ext" && echo "renamed: $src → smith.$ext"
done

# svg 格式（文件名可能带查询参数，只看基础名）
src=$(ls font_*.svg 2>/dev/null | head -1)
[ -n "$src" ] && mv "$src" "smith.svg" && echo "renamed: $src → smith.svg"
```

Expected: 输出类似：
```
renamed: font_2508400_fpn9ui60u6q.woff2 → smith.woff2
renamed: font_2508400_fpn9ui60u6q.ttf → smith.ttf
```

- [ ] **Step 2: 确认旧文件已消除**

```bash
ls ~/develop/smith-theme-static/icon/
```

Expected: 只剩 `ali_iconfont_css.css` + `smith.eot` / `smith.woff` / `smith.woff2` / `smith.ttf` / `smith.svg`（格式依实际存在的为准），无 `font_*` 前缀文件。

---

## Task 3: 修改 icon CSS

**Files:**
- 修改 `icon/ali_iconfont_css.css`

- [ ] **Step 1: 替换 font-family 名称和 class 名**

```bash
cd ~/develop/smith-theme-static

sed -i \
  's/anzhiyufont/smithfont/g; s/anzhiyu-icon-/smith-icon-/g' \
  icon/ali_iconfont_css.css
```

- [ ] **Step 2: 替换 @font-face src 中的哈希文件名为 smith.***

```bash
# 替换 .eot 引用（含 ?t= 时间戳参数）
sed -i "s|url('./font_[^']*\.eot[^']*')|url('./smith.eot')|g" icon/ali_iconfont_css.css
# 替换双引号形式
sed -i 's|url("./font_[^"]*\.eot[^"]*")|url("./smith.eot")|g' icon/ali_iconfont_css.css

# woff2
sed -i "s|url('./font_[^']*\.woff2[^']*')|url('./smith.woff2')|g" icon/ali_iconfont_css.css
sed -i 's|url("./font_[^"]*\.woff2[^"]*")|url("./smith.woff2")|g' icon/ali_iconfont_css.css

# woff
sed -i "s|url('./font_[^']*\.woff[^']*')|url('./smith.woff')|g" icon/ali_iconfont_css.css
sed -i 's|url("./font_[^"]*\.woff[^"]*")|url("./smith.woff")|g' icon/ali_iconfont_css.css

# ttf
sed -i "s|url('./font_[^']*\.ttf[^']*')|url('./smith.ttf')|g" icon/ali_iconfont_css.css
sed -i 's|url("./font_[^"]*\.ttf[^"]*")|url("./smith.ttf")|g' icon/ali_iconfont_css.css

# svg（含 #anzhiyufont anchor）
sed -i "s|url('./font_[^']*\.svg[^']*')|url('./smith.svg#smith')|g" icon/ali_iconfont_css.css
sed -i 's|url("./font_[^"]*\.svg[^"]*")|url("./smith.svg#smith")|g' icon/ali_iconfont_css.css
```

- [ ] **Step 3: 验证替换结果**

```bash
# 不应再有任何 anzhiyu 字样
grep -c "anzhiyu" ~/develop/smith-theme-static/icon/ali_iconfont_css.css

# 应包含 smithfont 和 smith-icon-
grep "font-family" ~/develop/smith-theme-static/icon/ali_iconfont_css.css | head -3
grep "smith-icon-" ~/develop/smith-theme-static/icon/ali_iconfont_css.css | head -3
grep "url(" ~/develop/smith-theme-static/icon/ali_iconfont_css.css | head -5
```

Expected:
- `grep -c "anzhiyu"` 输出 `0`
- font-family 含 `"smithfont"`
- icon 类名含 `smith-icon-`
- url() 中只有 `smith.woff2` 等，无哈希文件名

---

## Task 4: 合并 APlayer.min.js

**Files:**
- 新增 `js/APlayer.min.js`

- [ ] **Step 1: 从 CDN 下载 APlayer.min.js**

```bash
curl -sL "https://npm.elemecdn.com/anzhiyu-blog-static@1.0.1/js/APlayer.min.js" \
  -o ~/develop/smith-theme-static/js/APlayer.min.js
```

Expected: 文件存在且非空

```bash
ls -lh ~/develop/smith-theme-static/js/APlayer.min.js
```

Expected: 文件大小约 30-60KB

---

## Task 5: 更新 package.json

**Files:**
- 修改 `package.json`

- [ ] **Step 1: 覆盖写入新 package.json**

```bash
cat > ~/develop/smith-theme-static/package.json << 'EOF'
{
  "name": "smith-theme-static",
  "version": "1.0.0",
  "description": "Static assets for hexo-theme-smith",
  "main": "package.json",
  "keywords": [
    "hexo",
    "theme",
    "smith",
    "hexo-theme-smith"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/Smithhss/smith-theme-static.git"
  },
  "bugs": {
    "url": "https://github.com/Smithhss/smith-theme-static/issues"
  },
  "homepage": "https://github.com/Smithhss/smith-theme-static",
  "author": "Smith <saressmith@outlook.com>",
  "license": "GPL-3.0"
}
EOF
```

- [ ] **Step 2: 验证**

```bash
cat ~/develop/smith-theme-static/package.json | grep -E "name|version|author"
```

Expected:
```
"name": "smith-theme-static",
"version": "1.0.0",
"author": "Smith <saressmith@outlook.com>",
```

---

## Task 6: 更新 README.md

**Files:**
- 修改 `README.md`

- [ ] **Step 1: 覆盖写入新 README**

```bash
cat > ~/develop/smith-theme-static/README.md << 'EOF'
# smith-theme-static

Static assets (icon font, APlayer, GSAP, etc.) for [hexo-theme-smith](https://github.com/Smithhss/hexo-theme-smith).

## CDN

```
https://npm.elemecdn.com/smith-theme-static@1.0.0/<file>
```

## Attribution

This package is forked from [anzhiyu-theme-static](https://github.com/anzhiyu-c/anzhiyu-theme-static) by [anzhiyu-c](https://github.com/anzhiyu-c), licensed under GPL-3.0.

## License

GPL-3.0
EOF
```

---

## Task 7: Commit 并 push

**Files:**
- 所有修改的文件

- [ ] **Step 1: 确认变更清单**

```bash
cd ~/develop/smith-theme-static && git status --short
```

Expected: 看到 `M icon/ali_iconfont_css.css`、各字体文件的 rename、`M package.json`、`M README.md`、`A js/APlayer.min.js`

- [ ] **Step 2: 暂存并提交**

```bash
cd ~/develop/smith-theme-static
git add -A
git commit -m "feat: rebrand to smith-theme-static v1.0.0

- rename icon font: anzhiyufont → smithfont
- rename icon classes: anzhiyu-icon-* → smith-icon-*
- rename font files: font_*.{ttf,woff2,...} → smith.{ttf,woff2,...}
- add js/APlayer.min.js from anzhiyu-blog-static
- update package.json and README"
```

- [ ] **Step 3: push 到 GitHub**

```bash
git push origin HEAD
```

Expected: 推送成功，无报错

---

## Task 8: npm publish

- [ ] **Step 1: 确认 npm 登录状态**

```bash
npm whoami
```

Expected: 输出你的 npm 用户名（非 `anzhiyu`）

- [ ] **Step 2: 发布**

```bash
cd ~/develop/smith-theme-static
npm publish --access public
```

Expected: 输出 `npm notice Publishing to https://registry.npmjs.org/` 和 `+ smith-theme-static@1.0.0`

- [ ] **Step 3: 验证 npm 注册成功**

```bash
npm info smith-theme-static version
```

Expected: 输出 `1.0.0`

---

## Task 9: 打 tag 并等待 CDN 同步

- [ ] **Step 1: 打 git tag**

```bash
cd ~/develop/smith-theme-static
git tag v1.0.0
git push origin v1.0.0
```

- [ ] **Step 2: 等待 elemecdn 同步（约 5-30 分钟）后验证**

```bash
# 轮询直到返回 200
until curl -s -o /dev/null -w "%{http_code}" \
  "https://npm.elemecdn.com/smith-theme-static@1.0.0/icon/ali_iconfont_css.css" \
  | grep -q "200"; do
  echo "waiting for CDN sync..."; sleep 30
done
echo "CDN ready!"
```

- [ ] **Step 3: 验证 icon CSS 内容**

```bash
curl -sL "https://npm.elemecdn.com/smith-theme-static@1.0.0/icon/ali_iconfont_css.css" \
  | grep -E "font-family|smithfont|smith-icon-" | head -5
```

Expected: 输出包含 `smithfont`，无 `anzhiyufont`

- [ ] **Step 4: 最终验收清单**

```bash
echo "=== npm 版本 ===" && npm info smith-theme-static version
echo "=== CDN icon CSS ===" && curl -s -o /dev/null -w "%{http_code}\n" \
  "https://npm.elemecdn.com/smith-theme-static@1.0.0/icon/ali_iconfont_css.css"
echo "=== anzhiyu 字样检查 ===" && \
  curl -sL "https://npm.elemecdn.com/smith-theme-static@1.0.0/icon/ali_iconfont_css.css" \
  | grep -c "anzhiyu" || echo "0"
echo "=== 字体文件名 ===" && \
  curl -sL "https://npm.elemecdn.com/smith-theme-static@1.0.0/icon/ali_iconfont_css.css" \
  | grep "url(" | head -3
```

Expected:
```
=== npm 版本 ===
1.0.0
=== CDN icon CSS ===
200
=== anzhiyu 字样检查 ===
0
=== 字体文件名 ===
  src: url('./smith.woff2') format('woff2'),
  src: url('./smith.ttf') format('truetype'),
```

---

## 执行顺序

```
Task 1 (fork & clone)
  → Task 2 (字体文件重命名)
  → Task 3 (icon CSS 修改)
  → Task 4 (合并 APlayer.min.js)
  → Task 5 (package.json)
  → Task 6 (README.md)
  → Task 7 (commit & push)
  → Task 8 (npm publish)
  → Task 9 (tag + CDN 验证)
```
