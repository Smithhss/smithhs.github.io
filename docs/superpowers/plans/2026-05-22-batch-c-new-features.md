# Batch C: 新功能 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 添加看板娘（Live2D）和热搜功能

**Architecture:** P6 使用 pixi-live2d-display 集成 Live2D 看板娘；P7 新增热搜组件调用公开 API

**Tech Stack:** pixi-live2d-display, Live2D Cubism SDK, Hexo 7.3.0, pug, JavaScript

---

## 文件结构

| 文件 | 操作 | 职责 |
|------|------|------|
| `source/js/smith/live2d.js` | 新增 | Live2D 看板娘初始化和交互 |
| `source/css/_layout/live2d.styl` | 新增 | 看板娘样式 |
| `layout/includes/smith/live2d.pug` | 新增 | 看板娘 HTML 模板 |
| `source/js/smith/hot_search.js` | 新增 | 热搜组件逻辑 |
| `source/css/_layout/hot_search.styl` | 新增 | 热搜组件样式 |
| `layout/includes/smith/hot-search.pug` | 新增 | 热搜 HTML 模板 |
| `_config.smith.yml` | 修改 | 添加 live2d 和 hotSearch 配置段 |
| `plugins.yml` | 修改 | 添加 pixi-live2d-display CDN |

---

### Task 1: 集成 Live2D 看板娘

**Files:**
- Create: `source/js/smith/live2d.js`
- Create: `source/css/_layout/live2d.styl`
- Create: `layout/includes/smith/live2d.pug`
- Modify: `_config.smith.yml`
- Modify: `plugins.yml`

- [ ] **Step 1: 添加 pixi-live2d-display CDN 到 plugins.yml**

在 `plugins.yml` 中添加：
```yaml
  - name: pixi-live2d-display
    file: dist/cubism2.min.js
    version: 0.4.0
    CDN: jsdelivr
```

- [ ] **Step 2: 创建 live2d.js**

```javascript
// source/js/smith/live2d.js
(function () {
  const config = GLOBAL_CONFIG.live2d;
  if (!config || !config.enable) return;

  const loadLive2D = async () => {
    // 加载 PixiJS
    const pixiScript = document.createElement("script");
    pixiScript.src = "https://cdn.jsdelivr.net/npm/pixi.js@7.3.2/dist/pixi.min.js";
    document.head.appendChild(pixiScript);

    pixiScript.onload = async () => {
      // 加载 pixi-live2d-display
      const live2dScript = document.createElement("script");
      live2dScript.src = "https://cdn.jsdelivr.net/npm/pixi-live2d-display@0.4.0/dist/cubism2.min.js";
      document.head.appendChild(live2dScript);

      live2dScript.onload = () => {
        initLive2D();
      };
    };
  };

  const initLive2D = () => {
    const canvas = document.getElementById("live2d-canvas");
    if (!canvas) return;

    const app = new PIXI.Application({
      view: canvas,
      width: config.width || 300,
      height: config.height || 300,
      transparent: true,
    });

    const modelPath = config.model || "shizuku";
    const modelUrl = `https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display@v0.4.0/assets/${modelPath}/${modelPath}.model.json`;

    PIXI.live2d.Live2DModel.from(modelUrl).then((model) => {
      model.scale.set(config.scale || 0.15);
      model.x = config.x || 0;
      model.y = config.y || 0;
      app.stage.addChild(model);

      // 点击交互
      model.on("hit", (hitAreas) => {
        if (hitAreas.includes("body")) {
          model.motion("tap_body");
        }
      });
    });
  };

  // 页面加载后初始化
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadLive2D);
  } else {
    loadLive2D();
  }
})();
```

- [ ] **Step 3: 创建 live2d.styl**

```stylus
// source/css/_layout/live2d.styl
#live2d-container
  position: fixed
  bottom: 0
  right: 20px
  width: 300px
  height: 300px
  z-index: 100
  pointer-events: none

  #live2d-canvas
    width: 100%
    height: 100%
    pointer-events: auto
    cursor: pointer

  .live2d-toggle
    position: absolute
    top: -30px
    right: 10px
    width: 30px
    height: 30px
    border-radius: 50%
    background: var(--smith-main)
    color: #fff
    border: none
    cursor: pointer
    font-size: 14px
    display: flex
    align-items: center
    justify-content: center
    pointer-events: auto

@media screen and (max-width: 768px)
  #live2d-container
    width: 150px
    height: 150px
    right: 10px
```

- [ ] **Step 4: 创建 live2d.pug**

```pug
// layout/includes/smith/live2d.pug
if theme.live2d && theme.live2d.enable
  #live2d-container
    canvas#live2d-canvas
    button.live2d-toggle(title="切换看板娘") 🎭
  script(data-pjax src=url_for(theme.asset.live2d_js || "/js/smith/live2d.js"))
```

- [ ] **Step 5: 添加配置到 _config.smith.yml**

```yaml
# Live2D 看板娘
live2d:
  enable: true
  model: shizuku
  width: 300
  height: 300
  scale: 0.15
  x: 0
  y: 0
```

- [ ] **Step 6: 在布局中引入 live2d.pug**

在 `layout/includes/additional-js.pug` 末尾添加：
```pug
include smith/live2d.pug
```

- [ ] **Step 7: 验证构建**

```bash
cd F:/Develop/project/Blog
npx hexo clean && npx hexo generate
```

Expected: 无 ERROR

- [ ] **Step 8: Commit**

```bash
git add source/js/smith/live2d.js source/css/_layout/live2d.styl layout/includes/smith/live2d.pug _config.smith.yml plugins.yml layout/includes/additional-js.pug
git commit -m "feat: add Live2D mascot (shizuku) to blog"
```

---

### Task 2: 添加热搜功能

**Files:**
- Create: `source/js/smith/hot_search.js`
- Create: `source/css/_layout/hot_search.styl`
- Create: `layout/includes/smith/hot-search.pug`
- Modify: `_config.smith.yml`

- [ ] **Step 1: 创建 hot_search.js**

```javascript
// source/js/smith/hot_search.js
(function () {
  const config = GLOBAL_CONFIG.hotSearch;
  if (!config || !config.enable) return;

  const APIs = {
    bilibili: "https://api.vvhan.com/api/hotlist/bili",
    weibo: "https://api.vvhan.com/api/hotlist/wbHot",
    zhihu: "https://api.vvhan.com/api/hotlist/zhihu",
    github: "https://api.vvhan.com/api/hotlist/github",
  };

  const tabNames = {
    bilibili: "B站",
    weibo: "微博",
    zhihu: "知乎",
    github: "GitHub",
  };

  let currentTab = config.defaultTab || "bilibili";

  const renderTabs = () => {
    const enabledTabs = config.tabs || ["bilibili", "weibo", "zhihu"];
    return enabledTabs
      .map(
        (tab) =>
          `<button class="hot-search-tab ${tab === currentTab ? "active" : ""}" data-tab="${tab}">${tabNames[tab] || tab}</button>`
      )
      .join("");
  };

  const renderList = (data) => {
    if (!data || !data.data) return "<div class='hot-search-empty'>暂无数据</div>";
    return data.data
      .slice(0, config.limit || 15)
      .map(
        (item, index) =>
          `<a class="hot-search-item" href="${item.url || "#"}" target="_blank" rel="noopener">
            <span class="hot-search-rank ${index < 3 ? "top3" : ""}">${index + 1}</span>
            <span class="hot-search-title">${item.title || item.desc || ""}</span>
            ${item.hot ? `<span class="hot-search-count">${item.hot}</span>` : ""}
          </a>`
      )
      .join("");
  };

  const fetchHotList = async (tab) => {
    const container = document.getElementById("hot-search-list");
    if (!container) return;

    container.innerHTML = "<div class='hot-search-loading'>加载中...</div>";

    try {
      const url = APIs[tab];
      if (!url) return;

      const response = await fetch(url);
      const data = await response.json();
      container.innerHTML = renderList(data);
    } catch (error) {
      container.innerHTML = "<div class='hot-search-empty'>加载失败</div>";
    }
  };

  const init = () => {
    const container = document.getElementById("hot-search-container");
    if (!container) return;

    // 渲染 Tab
    const tabContainer = document.getElementById("hot-search-tabs");
    if (tabContainer) {
      tabContainer.innerHTML = renderTabs();
      tabContainer.addEventListener("click", (e) => {
        const tab = e.target.dataset.tab;
        if (tab && tab !== currentTab) {
          currentTab = tab;
          tabContainer.querySelectorAll(".hot-search-tab").forEach((t) => t.classList.remove("active"));
          e.target.classList.add("active");
          fetchHotList(tab);
        }
      });
    }

    // 加载默认 Tab 数据
    fetchHotList(currentTab);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
```

- [ ] **Step 2: 创建 hot_search.styl**

```stylus
// source/css/_layout/hot_search.styl
#hot-search-container
  background: var(--smith-secondbg)
  border-radius: 12px
  padding: 16px
  margin-bottom: 16px
  border: var(--style-border-always)

.hot-search-header
  display: flex
  align-items: center
  margin-bottom: 12px

  .hot-search-title
    font-size: 16px
    font-weight: bold
    color: var(--font-color)

#hot-search-tabs
  display: flex
  gap: 8px
  margin-left: auto

  .hot-search-tab
    padding: 4px 10px
    border-radius: 6px
    border: none
    background: transparent
    color: var(--font-color)
    cursor: pointer
    font-size: 13px
    transition: all 0.3s

    &.active
      background: var(--smith-main)
      color: #fff

    &:hover:not(.active)
      background: var(--smith-card-bg)

#hot-search-list
  max-height: 400px
  overflow-y: auto

.hot-search-item
  display: flex
  align-items: center
  padding: 8px 4px
  text-decoration: none
  color: var(--font-color)
  border-radius: 6px
  transition: background 0.2s

  &:hover
    background: var(--smith-card-bg)

.hot-search-rank
  width: 24px
  height: 24px
  border-radius: 6px
  display: flex
  align-items: center
  justify-content: center
  font-size: 12px
  font-weight: bold
  margin-right: 10px
  background: var(--smith-card-bg)
  color: var(--font-color)

  &.top3
    background: var(--smith-main)
    color: #fff

.hot-search-title
  flex: 1
  font-size: 14px
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap

.hot-search-count
  font-size: 12px
  color: var(--smith-lighttext)
  margin-left: 8px

.hot-search-loading,
.hot-search-empty
  text-align: center
  padding: 20px
  color: var(--smith-lighttext)
  font-size: 14px
```

- [ ] **Step 3: 创建 hot-search.pug**

```pug
// layout/includes/smith/hot-search.pug
if theme.hotSearch && theme.hotSearch.enable
  #hot-search-container
    .hot-search-header
      .hot-search-title 🔥 热搜
      #hot-search-tabs
    #hot-search-list
      .hot-search-loading 加载中...
  script(data-pjax src=url_for(theme.asset.hot_search_js || "/js/smith/hot_search.js"))
```

- [ ] **Step 4: 添加配置到 _config.smith.yml**

```yaml
# 热搜功能
hotSearch:
  enable: true
  defaultTab: bilibili
  tabs:
    - bilibili
    - weibo
    - zhihu
  limit: 15
```

- [ ] **Step 5: 在侧边栏引入热搜组件**

在 `layout/includes/aside.pug` 中合适位置添加：
```pug
include smith/hot-search.pug
```

- [ ] **Step 6: 验证构建**

```bash
cd F:/Develop/project/Blog
npx hexo clean && npx hexo generate
```

Expected: 无 ERROR

- [ ] **Step 7: Commit**

```bash
git add source/js/smith/hot_search.js source/css/_layout/hot_search.styl layout/includes/smith/hot-search.pug _config.smith.yml layout/includes/aside.pug
git commit -m "feat: add hot search component (bilibili, weibo, zhihu)"
```

---

### Task 3: 构建验证和部署

**Files:**
- 无

- [ ] **Step 1: 完整构建**

```bash
cd F:/Develop/project/Blog
npx hexo clean && npx hexo generate
```

Expected: 245+ files, 无 ERROR

- [ ] **Step 2: 本地预览**

```bash
npx hexo server -p 4005 &
sleep 3
# 验证看板娘
curl -s http://localhost:4005/ | grep -o "live2d" | head -1
# 验证热搜
curl -s http://localhost:4005/ | grep -o "hot-search" | head -1
```

Expected: 两个命令都有输出

- [ ] **Step 3: 部署**

```bash
npx hexo deploy
```
