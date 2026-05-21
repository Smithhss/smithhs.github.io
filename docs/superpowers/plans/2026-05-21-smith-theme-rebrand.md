# hexo-theme-smith 全量去 anzhiyu 化 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 `themes/smith/` 内所有 anzhiyu 品牌标识替换为 smith，生成可公开发布的独立 hexo 主题。

**Architecture:** 分 9 个独立任务，按依赖顺序执行：CDN 配置 → CSS/字体 → 模板 → JS → 验证。每个任务完成后立即 `hexo generate` 验证无报错，再提交。所有替换均使用 `sed` 批量处理，不手动编辑。

**Tech Stack:** Hexo 7.3.0, Stylus, Pug, bash sed, npm

**工作目录：** `~/develop/project/Blog/`
**主题目录：** `~/develop/project/Blog/themes/smith/`

---

## 文件变更总览

| 文件/目录 | 操作 | 说明 |
|-----------|------|------|
| `themes/smith/plugins.yml` | 修改 | CDN 包名替换 |
| `themes/smith/source/css/_global/function.styl` | 修改 | 字体类定义 |
| `themes/smith/source/css/_global/index.styl` | 修改 | @extend 引用 |
| `themes/smith/layout/**/*.pug` | 批量修改 | 图标类名 |
| `themes/smith/source/js/utils.js` | 修改 | JS 全局对象 |
| `themes/smith/source/js/main.js` | 修改 | JS 变量和调用 |
| `themes/smith/source/js/anzhiyu/` | 重命名→`smith/` | JS 子目录 |
| `themes/smith/scripts/events/cdn.js` | 修改 | 路径引用 |
| `themes/smith/source/js/anzhiyu/*.js` | 修改 | JS 内容替换 |
| `themes/smith/source/js/search/*.js` | 修改 | JS 内容替换 |
| `themes/smith/source/css/**` (70 文件) | 批量修改 | CSS 变量 |
| `_config.smith.yml` | 修改 | 配置变量引用 |
| `themes/smith/package.json` | 修改 | 主题元数据 |

---

## Task 1: plugins.yml — CDN 包名替换

**Files:**
- Modify: `themes/smith/plugins.yml`

- [ ] **Step 1: 替换 anzhiyu-theme-static → smith-theme-static**

```bash
cd ~/develop/project/Blog/themes/smith
sed -i 's/name: anzhiyu-theme-static/name: smith-theme-static/g' plugins.yml
```

- [ ] **Step 2: 替换 anzhiyu-blog-static → smith-theme-static**

```bash
sed -i 's/name: anzhiyu-blog-static/name: smith-theme-static/g' plugins.yml
```

- [ ] **Step 3: 统一版本号为 1.0.0（仅针对刚替换的两个包）**

原 anzhiyu-theme-static 各条目版本不一（1.0.0、1.1.10、1.1.9 等），全部改为 smith-theme-static@1.0.0：

```bash
# 先备份
cp plugins.yml plugins.yml.bak
```

用 Python 精确替换（避免 sed 多行匹配复杂度）：

```bash
python3 << 'PYEOF'
import re

with open('plugins.yml', 'r') as f:
    content = f.read()

# 替换 smith-theme-static 后面紧跟的 version 行（各种版本号 → 1.0.0）
# 匹配模式：name: smith-theme-static\n  file: xxx\n  version: X.X.X
def replace_version(m):
    return m.group(0).rsplit('\n', 1)[0] + '\n  version: 1.0.0'

pattern = r'(  name: smith-theme-static\n  file: [^\n]+\n)  version: \d+\.\d+\.\d+'
content = re.sub(pattern, replace_version, content)

with open('plugins.yml', 'w') as f:
    f.write(content)

print("done")
PYEOF
```

- [ ] **Step 4: 验证替换结果**

```bash
grep -A3 "name: smith-theme-static" plugins.yml | head -20
echo "=== 确认无 anzhiyu-theme-static 残留 ==="
grep "anzhiyu-theme-static\|anzhiyu-blog-static" plugins.yml | wc -l
echo "=== hexo-anzhiyu-music 保留 ==="
grep "hexo-anzhiyu-music" plugins.yml
```

Expected:
- smith-theme-static 各条目 version 均为 `1.0.0`
- anzhiyu-theme-static / anzhiyu-blog-static 行数为 `0`
- hexo-anzhiyu-music 仍存在

- [ ] **Step 5: hexo generate 验证**

```bash
cd ~/develop/project/Blog && npx hexo generate 2>&1 | grep -E "ERROR|INFO.*files"
```

Expected: `INFO  2XX files generated`，无 ERROR

- [ ] **Step 6: 删除备份文件，提交**

```bash
cd ~/develop/project/Blog/themes/smith && rm -f plugins.yml.bak
cd ~/develop/project/Blog
git add themes/smith/plugins.yml
git commit -m "feat(smith): replace anzhiyu CDN packages with smith-theme-static"
```

---

## Task 2: 字体类重命名（function.styl + index.styl）

**Files:**
- Modify: `themes/smith/source/css/_global/function.styl`
- Modify: `themes/smith/source/css/_global/index.styl`

- [ ] **Step 1: 替换 function.styl 中的字体类定义**

```bash
cd ~/develop/project/Blog/themes/smith
sed -i 's/anzhiyufont/smithfont/g' source/css/_global/function.styl
```

- [ ] **Step 2: 替换 index.styl 中的 @extend 引用**

```bash
sed -i 's/@extend \.anzhiyufont/@extend .smithfont/g' source/css/_global/index.styl
```

- [ ] **Step 3: 验证**

```bash
grep "anzhiyufont\|smithfont" source/css/_global/function.styl source/css/_global/index.styl
```

Expected:
- `function.styl` 中只出现 `smithfont`，无 `anzhiyufont`
- `index.styl` 中 `@extend .smithfont` 存在，无 `@extend .anzhiyufont`

- [ ] **Step 4: hexo generate 验证**

```bash
cd ~/develop/project/Blog && npx hexo generate 2>&1 | grep -E "ERROR|INFO.*files"
```

Expected: 无 ERROR

- [ ] **Step 5: 提交**

```bash
git add themes/smith/source/css/_global/function.styl themes/smith/source/css/_global/index.styl
git commit -m "feat(smith): rename font class anzhiyufont → smithfont"
```

---

## Task 3: pug 模板批量替换

**Files:**
- Modify: `themes/smith/layout/**/*.pug`（所有 pug 文件）

- [ ] **Step 1: 替换所有 pug 文件中的 anzhiyufont → smithfont**

```bash
cd ~/develop/project/Blog/themes/smith
find layout/ -name "*.pug" | xargs sed -i 's/anzhiyufont/smithfont/g'
```

- [ ] **Step 2: 替换所有 pug 文件中的 anzhiyu-icon- → smith-icon-**

```bash
find layout/ -name "*.pug" | xargs sed -i 's/anzhiyu-icon-/smith-icon-/g'
```

- [ ] **Step 3: 验证**

```bash
echo "=== anzhiyufont 残留（应为 0）==="
grep -r "anzhiyufont" layout/ | wc -l
echo "=== anzhiyu-icon- 残留（应为 0）==="
grep -r "anzhiyu-icon-" layout/ | wc -l
echo "=== smithfont 确认存在 ==="
grep -r "smithfont" layout/ | wc -l
echo "=== smith-icon- 确认存在 ==="
grep -r "smith-icon-" layout/ | wc -l
```

Expected: 前两项为 `0`，后两项 > `0`

- [ ] **Step 4: hexo generate 验证**

```bash
cd ~/develop/project/Blog && npx hexo generate 2>&1 | grep -E "ERROR|INFO.*files"
```

Expected: 无 ERROR

- [ ] **Step 5: 验证生成 HTML 中图标类名**

```bash
grep -o "anzhiyufont\|anzhiyu-icon-" public/index.html | wc -l
```

Expected: `0`

- [ ] **Step 6: 提交**

```bash
cd ~/develop/project/Blog
git add themes/smith/layout/
git commit -m "feat(smith): rename pug icon classes anzhiyufont/anzhiyu-icon-* → smithfont/smith-icon-*"
```

---

## Task 4: utils.js 全量替换

**Files:**
- Modify: `themes/smith/source/js/utils.js`

- [ ] **Step 1: 替换 utils.js 中所有 anzhiyu 字样**

```bash
cd ~/develop/project/Blog/themes/smith
sed -i \
  's/const anzhiyu = {/const smith = {/g; \
   s/const anzhiyuPopupManager = {/const smithPopupManager = {/g; \
   s/anzhiyuPopupManager\./smithPopupManager./g; \
   s/anzhiyu\./smith./g' \
  source/js/utils.js
```

- [ ] **Step 2: 验证**

```bash
echo "=== anzhiyu 字样残留（应为 0）==="
grep -c "anzhiyu" source/js/utils.js
echo "=== smith 对象定义确认 ==="
head -3 source/js/utils.js
grep -c "const smith = {" source/js/utils.js
```

Expected:
- anzhiyu 残留为 `0`
- 首行为 `const smith = {`

- [ ] **Step 3: hexo generate 验证**

```bash
cd ~/develop/project/Blog && npx hexo generate 2>&1 | grep -E "ERROR|INFO.*files"
```

Expected: 无 ERROR

- [ ] **Step 4: 提交**

```bash
git add themes/smith/source/js/utils.js
git commit -m "feat(smith): rename JS global object anzhiyu → smith in utils.js"
```

---

## Task 5: main.js 全量替换

**Files:**
- Modify: `themes/smith/source/js/main.js`

- [ ] **Step 1: 替换 main.js 中所有 anzhiyu 字样**

```bash
cd ~/develop/project/Blog/themes/smith
sed -i \
  's/var anzhiyu_/var smith_/g; \
   s/anzhiyu_musicFirst/smith_musicFirst/g; \
   s/anzhiyu_keyboard/smith_keyboard/g; \
   s/anzhiyu_musicPlaying/smith_musicPlaying/g; \
   s/anzhiyu_intype/smith_intype/g; \
   s/anzhiyu_keyUpEvent_timeoutId/smith_keyUpEvent_timeoutId/g; \
   s/anzhiyu_keyUpShiftDelayEvent_timeoutId/smith_keyUpShiftDelayEvent_timeoutId/g; \
   s/anzhiyu\./smith./g; \
   s/anzhiyufont/smithfont/g; \
   s/anzhiyu-icon-/smith-icon-/g' \
  source/js/main.js
```

- [ ] **Step 2: 验证**

```bash
echo "=== anzhiyu 字样残留（应为 0）==="
grep -c "anzhiyu" source/js/main.js
echo "=== smith 变量确认 ==="
grep "var smith_" source/js/main.js | head -5
```

Expected: anzhiyu 残留为 `0`

- [ ] **Step 3: hexo generate 验证**

```bash
cd ~/develop/project/Blog && npx hexo generate 2>&1 | grep -E "ERROR|INFO.*files"
```

Expected: 无 ERROR

- [ ] **Step 4: 提交**

```bash
git add themes/smith/source/js/main.js
git commit -m "feat(smith): rename anzhiyu vars/calls → smith in main.js"
```

---

## Task 6: JS 子目录重命名 + 其余 JS 文件替换

**Files:**
- Rename: `themes/smith/source/js/anzhiyu/` → `themes/smith/source/js/smith/`
- Modify: `themes/smith/scripts/events/cdn.js`
- Modify: `themes/smith/source/js/search/local-search.js`
- Modify: `themes/smith/source/js/search/algolia.js`
- Modify: `themes/smith/source/js/tw_cn.js`

- [ ] **Step 1: 重命名 JS 子目录**

```bash
cd ~/develop/project/Blog/themes/smith
mv source/js/anzhiyu source/js/smith
```

- [ ] **Step 2: 更新 cdn.js 路径引用**

```bash
sed -i 's|js/anzhiyu/|js/smith/|g' scripts/events/cdn.js
```

- [ ] **Step 3: 替换 source/js/smith/ 下各文件内容**

```bash
find source/js/smith/ -name "*.js" | xargs sed -i \
  's/anzhiyu\./smith./g; s/anzhiyu-icon-/smith-icon-/g; s/anzhiyufont/smithfont/g; s/anzhiyu_/smith_/g'
```

- [ ] **Step 4: 替换 search/ 目录 JS 文件**

```bash
find source/js/search/ -name "*.js" | xargs sed -i \
  's/anzhiyu\./smith./g; s/anzhiyu-icon-/smith-icon-/g; s/anzhiyufont/smithfont/g'
```

- [ ] **Step 5: 替换 tw_cn.js**

```bash
sed -i 's/anzhiyu/smith/g' source/js/tw_cn.js
```

- [ ] **Step 6: 验证所有 JS 文件无 anzhiyu 残留**

```bash
echo "=== JS 目录中 anzhiyu 残留文件 ==="
grep -rl "anzhiyu" source/js/ scripts/
```

Expected: 无输出（0 个文件有 anzhiyu 字样）

- [ ] **Step 7: hexo generate 验证**

```bash
cd ~/develop/project/Blog && npx hexo generate 2>&1 | grep -E "ERROR|INFO.*files"
```

Expected: 无 ERROR

- [ ] **Step 8: 提交**

```bash
cd ~/develop/project/Blog
git add themes/smith/source/js/ themes/smith/scripts/events/cdn.js
git commit -m "feat(smith): rename js/anzhiyu/ → js/smith/, replace anzhiyu in all JS files"
```

---

## Task 7: CSS 变量全量重命名

**Files:**
- Modify: `themes/smith/source/css/**/*.styl`（46 个文件）
- Modify: `themes/smith/source/css/**/*.css`（29 个文件）

- [ ] **Step 1: 批量替换所有 CSS/Stylus 文件中的 --anzhiyu- → --smith-**

```bash
cd ~/develop/project/Blog/themes/smith
find source/css/ \( -name "*.styl" -o -name "*.css" \) | xargs sed -i 's/--anzhiyu-/--smith-/g'
```

- [ ] **Step 2: 验证 CSS 变量替换结果**

```bash
echo "=== --anzhiyu- 残留（应为 0）==="
grep -r "\-\-anzhiyu-" source/css/ | wc -l
echo "=== --smith- 确认存在 ==="
grep -r "\-\-smith-" source/css/ | wc -l
```

Expected: 前者为 `0`，后者 > `0`

- [ ] **Step 3: hexo generate 验证**

```bash
cd ~/develop/project/Blog && npx hexo generate 2>&1 | grep -E "ERROR|INFO.*files"
```

Expected: 无 ERROR

- [ ] **Step 4: 验证生成 CSS 中的变量名**

```bash
grep -c "\-\-anzhiyu-" ~/develop/project/Blog/public/css/index.css
grep -c "\-\-smith-" ~/develop/project/Blog/public/css/index.css
```

Expected: 前者为 `0`，后者为原来 `--anzhiyu-` 总数（约 100+）

- [ ] **Step 5: 提交**

```bash
cd ~/develop/project/Blog
git add themes/smith/source/css/
git commit -m "feat(smith): rename CSS variables --anzhiyu-* → --smith-* (70 files)"
```

---

## Task 8: _config.smith.yml + package.json 更新

**Files:**
- Modify: `_config.smith.yml`
- Modify: `themes/smith/package.json`

- [ ] **Step 1: 替换 _config.smith.yml 中的 var(--anzhiyu- 引用**

```bash
cd ~/develop/project/Blog
sed -i 's/var(--anzhiyu-/var(--smith-/g' _config.smith.yml
```

- [ ] **Step 2: 验证 _config.smith.yml**

```bash
grep "var(--anzhiyu-" _config.smith.yml | wc -l
grep "var(--smith-" _config.smith.yml | head -5
```

Expected: 前者为 `0`，后者显示 8 处 smith 变量引用

- [ ] **Step 3: 覆盖写入 themes/smith/package.json**

```bash
cat > ~/develop/project/Blog/themes/smith/package.json << 'EOF'
{
  "name": "hexo-theme-smith",
  "version": "1.0.0",
  "description": "A Card UI Design theme for Hexo, built by Smith",
  "main": "package.json",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "hexo",
    "theme",
    "smith",
    "hexo-theme-smith",
    "Card UI Design"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/Smithhss/hexo-theme-smith.git"
  },
  "bugs": {
    "url": "https://github.com/Smithhss/hexo-theme-smith/issues"
  },
  "dependencies": {
    "hexo-renderer-stylus": "^3.0.0",
    "hexo-renderer-pug": "^3.0.0"
  },
  "homepage": "https://github.com/Smithhss/hexo-theme-smith",
  "author": "Smith <saressmith@outlook.com>",
  "license": "GPL-3.0"
}
EOF
```

- [ ] **Step 4: 验证 package.json**

```bash
grep -E '"name"|"author"' ~/develop/project/Blog/themes/smith/package.json
```

Expected:
```
"name": "hexo-theme-smith",
"author": "Smith <saressmith@outlook.com>",
```

- [ ] **Step 5: 提交**

```bash
cd ~/develop/project/Blog
git add _config.smith.yml themes/smith/package.json
git commit -m "feat(smith): update _config vars and package.json metadata"
```

---

## Task 9: 全量验证

- [ ] **Step 1: 全量清理构建**

```bash
cd ~/develop/project/Blog && npx hexo clean && npx hexo generate 2>&1 | tail -3
```

Expected: `INFO  2XX files generated`，无 ERROR

- [ ] **Step 2: 验证 themes/smith/ 中 anzhiyu 残留只剩 hexo-anzhiyu-music**

```bash
grep -r "anzhiyu" ~/develop/project/Blog/themes/smith/ --include="*.js" --include="*.styl" --include="*.css" --include="*.pug" --include="*.json" --include="*.yml" | grep -v "hexo-anzhiyu-music"
```

Expected: 无输出（0 行残留）

- [ ] **Step 3: 验证生成产物**

```bash
echo "=== HTML 中 anzhiyufont（应为 0）==="
grep -c "anzhiyufont" ~/develop/project/Blog/public/index.html || echo "0"
echo "=== CSS 中 --anzhiyu-（应为 0）==="
grep -c "\-\-anzhiyu-" ~/develop/project/Blog/public/css/index.css || echo "0"
echo "=== smithfont 确认 ==="
grep -c "smithfont" ~/develop/project/Blog/public/css/index.css
echo "=== --smith- 确认 ==="
grep -c "\-\-smith-" ~/develop/project/Blog/public/css/index.css
```

Expected: 前两项为 `0`，后两项 > `0`

- [ ] **Step 4: 最终提交**

```bash
cd ~/develop/project/Blog
git add -A
git status --short
git commit -m "chore: final verification - hexo-theme-smith rebrand complete" --allow-empty
```

---

## 执行顺序

```
Task 1 (plugins.yml)
  → Task 2 (字体类 CSS)
  → Task 3 (pug 模板)
  → Task 4 (utils.js)
  → Task 5 (main.js)
  → Task 6 (JS 子目录 + 其余 JS)
  → Task 7 (CSS 变量 70 文件)
  → Task 8 (_config.smith.yml + package.json)
  → Task 9 (全量验证)
```

每个 Task 之间有 `hexo generate` 验证关卡，任何 ERROR 立即停止排查。
