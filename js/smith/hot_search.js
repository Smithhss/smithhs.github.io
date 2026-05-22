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

    fetchHotList(currentTab);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
