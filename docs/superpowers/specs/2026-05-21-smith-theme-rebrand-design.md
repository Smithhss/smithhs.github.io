# hexo-theme-smith 全量去 anzhiyu 化设计文档

**日期：** 2026-05-21
**项目：** hexo-theme-smith 代码层 anzhiyu → smith 全量重命名
**依赖：** smith-theme-static@1.0.0 已发布（项目 A 完成）
**状态：** 已批准，待实施

---

## 背景

`themes/smith/` 目前是 anzhiyu 主题的深度魔改版，内部所有标识符（CSS 变量、JS 对象、class 名、CDN 包名）仍保留 anzhiyu 命名。本次将所有 anzhiyu 品牌标识替换为 smith，实现真正可公开发布的独立主题。

---

## 改动范围

| 类型 | 文件/范围 | 数量 |
|------|-----------|------|
| CDN 包引用 | `plugins.yml` | 12 处 |
| 字体类定义 | `function.styl` | 4 处 |
| pug 模板类名 | `layout/**/*.pug` | 175 行 |
| JS 全局对象 | `utils.js`（`const anzhiyu`）、`main.js` | 全文件 |
| CSS 变量 | `source/css/**` 70 个文件 | `--anzhiyu-*` → `--smith-*` |
| 主题配置变量引用 | `_config.smith.yml` | 8 处 |
| 主题元数据 | `themes/smith/package.json` | 1 个文件 |

---

## 不在本次范围

- `hexo-anzhiyu-music` 插件（功能性第三方包，非品牌标识，保留不动）
- `rightmenu.js`、`accesskey.js` 等文件内部的 `var(--anzhiyu-*)` 运行时引用（CSS 变量重命名后自动生效）
- anzhiyu 原作者在 img/ 目录的图片资源（anzhiyu 品牌图片，属于静态资源，不影响主题功能）

---

## 详细改动说明

### 1. plugins.yml — CDN 包名替换

| 原包名 | 新包名 | 版本 | 涉及文件 |
|--------|--------|------|---------|
| `anzhiyu-theme-static` | `smith-theme-static` | `1.0.0` | icon CSS、JS 资源等 9 处 |
| `anzhiyu-blog-static` | `smith-theme-static` | `1.0.0` | `js/APlayer.min.js`（已合并入 smith-theme-static） |

`hexo-anzhiyu-music` 保留。

### 2. function.styl — 字体类定义

```diff
- .anzhiyufont
-   font-family: "anzhiyufont";
- .anzhiyufont::before
-   font-family: "anzhiyufont" !important;

+ .smithfont
+   font-family: "smithfont";
+ .smithfont::before
+   font-family: "smithfont" !important;
```

同时更新 `index.styl` 中的 `@extend .anzhiyufont` → `@extend .smithfont`。

### 3. pug 模板 — 图标类名替换

- `anzhiyufont` → `smithfont`（字体类）
- `anzhiyu-icon-` → `smith-icon-`（图标前缀）

sed 批量替换，覆盖 `layout/` 目录所有 `.pug` 文件。

### 4. JS — 对象和变量重命名

`utils.js`：
- `const anzhiyu = {` → `const smith = {`
- `const anzhiyuPopupManager = {` → `const smithPopupManager = {`
- 文件内所有 `anzhiyu.` 方法调用（作为对象名）→ `smith.`
- 所有 `anzhiyuPopupManager.` → `smithPopupManager.`

`main.js`：
- `var anzhiyu_musicFirst` 等全局变量 → `var smith_musicFirst`
- `anzhiyu.` 方法调用 → `smith.`
- 字符串字面量中的 `anzhiyufont anzhiyu-icon-` → `smithfont smith-icon-`

其他 JS 文件（`people.js`、`comment_barrage.js` 等）：
- sed 全量替换 `anzhiyu` 字样

### 5. CSS 变量 — 全量重命名

70 个文件中的 `--anzhiyu-` 前缀统一改为 `--smith-`：
- Stylus 文件（`.styl`）：变量定义和引用
- CSS 文件（`.css`）：变量引用

使用 sed 批量替换：
```bash
find source/css/ -name "*.styl" -o -name "*.css" | xargs sed -i 's/--anzhiyu-/--smith-/g'
```

### 6. `_config.smith.yml` — 配置中的变量引用

8 处 `var(--anzhiyu-*)` → `var(--smith-*)`，使用 sed：
```bash
sed -i 's/var(--anzhiyu-/var(--smith-/g' _config.smith.yml
```

### 7. `themes/smith/package.json` — 元数据

```json
{
  "name": "hexo-theme-smith",
  "version": "1.0.0",
  "description": "A Card UI Design theme for Hexo, built by Smith",
  "keywords": ["hexo", "theme", "smith"],
  "author": "Smith <saressmith@outlook.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/Smithhss/hexo-theme-smith.git"
  },
  "license": "GPL-3.0"
}
```

---

## 验收标准

- [ ] `hexo clean && hexo generate` 无 ERROR，文件数与改前一致（约 240+）
- [ ] 生成的 HTML/CSS 中 `--anzhiyu-` 字样为 0
- [ ] 生成的 HTML 中 `anzhiyufont` / `anzhiyu-icon-` 字样为 0
- [ ] `grep -r "anzhiyu" themes/smith/` 仅剩 `hexo-anzhiyu-music` 相关行（保留项）
- [ ] 首页视觉效果与改前一致

---

## 执行顺序

```
Step 1: plugins.yml CDN 替换
Step 2: function.styl + index.styl 字体类重命名
Step 3: pug 模板批量替换
Step 4: utils.js 全量替换
Step 5: main.js 全量替换
Step 6: 其他 JS 文件批量替换
Step 7: CSS 变量批量替换（70 个文件）
Step 8: _config.smith.yml 变量引用替换
Step 9: themes/smith/package.json 更新
Step 10: hexo generate 验证 + git commit
```
