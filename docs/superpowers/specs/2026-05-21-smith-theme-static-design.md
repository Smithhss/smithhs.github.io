# smith-theme-static 设计文档

**日期：** 2026-05-21
**项目：** smith-theme-static — hexo-theme-smith 的独立静态资源 npm 包
**状态：** 已批准，待实施

---

## 背景

`hexo-theme-smith` 当前通过 CDN 加载 `anzhiyu-theme-static` npm 包中的静态资源（icon font、APlayer、GSAP 等）。为实现主题完全去 anzhiyu 化并支持公开发布，需将这些资源 fork 为独立的 `smith-theme-static` 包，并重命名 icon font 品牌标识。

---

## 目标

1. 创建 `smith-theme-static` npm 包，完全替代 `anzhiyu-theme-static` 依赖
2. 将 icon font 从 `anzhiyufont` / `anzhiyu-icon-*` 全面重命名为 `smithfont` / `smith-icon-*`
3. 合并 `anzhiyu-blog-static` 中的 APlayer.min.js，消除第二个 anzhiyu 包依赖
4. 发布到 npm，通过 elemecdn CDN 可达

---

## 不在本次范围

- `hexo-theme-smith` 主题代码内的重命名（属于项目 B）
- `rightmenu.js`、`accesskey.js` 等文件中的 `var(--anzhiyu-*)` CSS 变量引用（项目 B 完成后发 `1.1.0` 补丁）
- npm 包的持续维护计划

---

## 仓库与包信息

| 字段 | 值 |
|------|-----|
| GitHub | `Smithhss/smith-theme-static`（fork 自 `anzhiyu-c/anzhiyu-theme-static`） |
| npm 包名 | `smith-theme-static` |
| 初始版本 | `1.0.0` |
| License | GPL-3.0（保留原作者署名，fork 性质） |
| CDN URL 格式 | `https://npm.elemecdn.com/smith-theme-static@1.0.0/<file>` |

---

## 文件修改清单

### 1. Icon font 文件重命名

| 原文件 | 新文件 |
|--------|--------|
| `icon/anzhiyu.ttf` | `icon/smith.ttf` |
| `icon/anzhiyu.woff2` | `icon/smith.woff2` |
| `icon/anzhiyu.eot`（如存在） | `icon/smith.eot` |
| `icon/anzhiyu.svg`（如存在） | `icon/smith.svg` |

> 字体二进制内容不变，仅重命名文件。

### 2. `icon/ali_iconfont_css.css` 内容修改

```diff
- @font-face {
-   font-family: "anzhiyufont";
-   src: url('./anzhiyu.eot');
-   src: url('./anzhiyu.eot?#iefix') format('embedded-opentype'),
-        url('./anzhiyu.woff2') format('woff2'),
-        url('./anzhiyu.ttf') format('truetype'),
-        url('./anzhiyu.svg#anzhiyu') format('svg');
- }
- .anzhiyufont {
-   font-family: "anzhiyufont";
- }
- .anzhiyufont::before {
-   font-family: "anzhiyufont" !important;
- }
- .anzhiyu-icon-xxx::before { content: "\eXXX"; }

+ @font-face {
+   font-family: "smithfont";
+   src: url('./smith.eot');
+   src: url('./smith.eot?#iefix') format('embedded-opentype'),
+        url('./smith.woff2') format('woff2'),
+        url('./smith.ttf') format('truetype'),
+        url('./smith.svg#smith') format('svg');
+ }
+ .smithfont {
+   font-family: "smithfont";
+ }
+ .smithfont::before {
+   font-family: "smithfont" !important;
+ }
+ .smith-icon-xxx::before { content: "\eXXX"; }
```

sed 命令：
```bash
sed -i \
  's/anzhiyufont/smithfont/g; \
   s/anzhiyu-icon-/smith-icon-/g; \
   s/anzhiyu\.ttf/smith.ttf/g; \
   s/anzhiyu\.woff2/smith.woff2/g; \
   s/anzhiyu\.eot/smith.eot/g; \
   s/anzhiyu\.svg/smith.svg/g' \
  icon/ali_iconfont_css.css
```

### 3. `js/APlayer.min.js` 合并

从 `anzhiyu-blog-static@1.0.1` 复制 `js/APlayer.min.js` 到本包 `js/` 目录，消除对第二个 anzhiyu 包的依赖。

### 4. `package.json` 更新

```json
{
  "name": "smith-theme-static",
  "version": "1.0.0",
  "description": "Static assets for hexo-theme-smith",
  "keywords": ["hexo", "theme", "smith", "hexo-theme-smith"],
  "author": "Smith <saressmith@outlook.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/Smithhss/smith-theme-static.git"
  },
  "bugs": {
    "url": "https://github.com/Smithhss/smith-theme-static/issues"
  },
  "homepage": "https://github.com/Smithhss/smith-theme-static",
  "license": "GPL-3.0"
}
```

### 5. `README.md` 更新

- 标题改为 `smith-theme-static`
- 注明 fork 自 `anzhiyu-c/anzhiyu-theme-static`，保留原作者署名（GPL-3.0 要求）

---

## 发布流程

```
Step 1: GitHub fork anzhiyu-c/anzhiyu-theme-static → Smithhss/smith-theme-static
Step 2: git clone git@github.com:Smithhss/smith-theme-static.git ~/develop/smith-theme-static
Step 3: 字体文件重命名（mv）
Step 4: icon CSS sed 批量替换
Step 5: 合并 APlayer.min.js
Step 6: 更新 package.json、README.md
Step 7: git commit & push
Step 8: npm login && npm publish --access public
Step 9: 验证 CDN 可达（elemecdn 同步约 5-30 分钟）
Step 10: git tag v1.0.0 && git push --tags
```

---

## 验收标准

- [ ] `npm info smith-theme-static` 返回版本 `1.0.0`
- [ ] `https://npm.elemecdn.com/smith-theme-static@1.0.0/icon/ali_iconfont_css.css` 返回 200
- [ ] CSS 中不含任何 `anzhiyufont` / `anzhiyu-icon-` 字样
- [ ] icon 字体文件名为 `smith.ttf` / `smith.woff2`

---

## 后续（项目 B）

`smith-theme-static@1.0.0` 发布后，`hexo-theme-smith` 执行：
1. `plugins.yml` 全部 CDN 引用替换为 `smith-theme-static`
2. `function.styl` 字体类名 `.anzhiyufont` → `.smithfont`
3. 所有 pug 模板 `anzhiyu-icon-*` → `smith-icon-*`，`anzhiyufont` → `smithfont`
4. `--anzhiyu-*` CSS 变量全量重命名
5. JS 全局对象 `anzhiyu` → `smith`
