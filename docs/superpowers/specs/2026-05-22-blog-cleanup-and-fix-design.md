# 2026-05-22 博客全面清理与修复设计文档

## 背景

smithhs.cn 博客在从 anzhiyu 主题改造为 smith 主题过程中，残留大量原作者信息、失效 CDN 链接、未配置的默认封面图等问题，导致部分功能不可用、文章图片加载失败。

## 问题清单

| 编号 | 问题 | 根因 |
|------|------|------|
| 1 | anzhiyu 残留信息（注释 + 活跃代码） | 主题改造不彻底 |
| 2 | bytecdntp CDN 残留 | 该 CDN 已不可用 |
| 3 | 按钮/交互失效（设置、更多推荐等） | JS 运行时错误阻断后续事件注册 |
| 4 | 部分文章点击死循环或 404 | 文章路径/文件异常 |
| 5 | 部分文章无封面图 | `default_cover` 未配置 |
| 6 | 图片加载慢 | 第三方外链失效或 CDN 路径远 |
| 7 | npm 包需检查 | smith-blog/smith-blog-static/smith-music |
| 8 | 需要默认封面图资源 | smith-blog 包中未准备 |

## 修复方案（批次制）

### 批次 1：anzhiyu + bytecdntp 清理

**文件清单：**

| 文件 | 改动 |
|------|------|
| `_config.smith.yml` | badge 中 AnZhiYu→Smith；`visitor@anheyu.com`→新邮箱；注释中 anzhiyu→smith |
| `themes/smith/scripts/events/merge_config.js` | shields URL 版本修复；message 文案；gptName；注释 |
| `themes/smith/sw-rules.js` | cacheName；bytecdntp→jsdelivr 域名 |
| `themes/smith/_config.yml` | siteText；注释中 anzhiyu→smith |
| `themes/smith/plugins.yml` | `hexo-anzhiyu-music`→`hexo-smith-music` |
| `themes/smith/scripts/events/404.js` | 注释 |
| `themes/smith/scripts/events/cdn.js` | 注释 |
| `themes/smith/scripts/filters/post_lazyload.js` | 注释 |
| `themes/smith/scripts/helpers/aside_archives.js` | 注释 |
| `themes/smith/scripts/helpers/aside_categories.js` | 注释 |
| `themes/smith/scripts/helpers/page.js` | 注释 |
| `themes/smith/scripts/helpers/related_post.js` | 注释 |
| `themes/smith/scripts/tag/gallery.js` | 注释 |
| `themes/smith/scripts/tag/hide.js` | 注释 |
| `themes/smith/scripts/tag/label.js` | 注释 |
| `themes/smith/scripts/tag/mermaid.js` | 注释 |
| `themes/anzhiyu/` | 整个目录删除 |

### 批次 2：JS 交互修复

- 在 `hexo server` 下打开浏览器控制台，定位 JS 运行时错误
- 修复 main.js/utils.js 中导致事件注册中断的错误
- 验证：设置按钮、更多推荐按钮、热搜、看板娘

### 批次 3：死链文章修复

- 扫描所有文章的 cover 和内容中图片链接
- 失效外链图片替换为可用 CDN 地址（smith-blog 包）
- 无法修复的文章删除，并列出清单告知用户

### 批次 4：默认封面图

- 在 smith-blog npm 包中新增 `img/cover/` 目录，放入 5-8 张通用封面图
- `_config.smith.yml` 中启用 `default_cover` 指向 CDN 地址
- publish 新版本 smith-blog 包

## 验收标准

- smithhs.cn 所有页面无 console 报错
- 设置按钮、更多推荐按钮可点击
- 热搜、看板娘正常显示
- 文章列表所有封面图正常加载
- 无 anzhiyu/安知鱼/anheyu 用户可见文字
- 所有 CDN 链接使用 jsdelivr/elemecdn/cdn.cbd.int（无 bytecdntp）
