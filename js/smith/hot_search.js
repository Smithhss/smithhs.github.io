(function () {
  const config = GLOBAL_CONFIG.hotSearch;
  if (!config || !config.enable) return;

  const APIs = {
    bilibili: "https://api.codelife.cc/api/top/list?lang=cn&id=bilibili",
    weibo: "https://api.codelife.cc/api/top/list?lang=cn&id=KdYF6e9r",
    zhihu: "https://api.codelife.cc/api/top/list?lang=cn&id=zhihu",
  };

  const tabNames = {
    bilibili: "B站",
    weibo: "微博",
    zhihu: "知乎",
  };

  let currentTab = config.defaultTab || "bilibili";

  const renderTabs = () => {
    const enabledTabs = (config.tabs || ["bilibili", "weibo", "zhihu"]).filter(
      (tab) => APIs[tab]
    );
    return enabledTabs
      .map(
        (tab) =>
          `<button class="hot-search-tab ${tab === currentTab ? "active" : ""}" data-tab="${tab}">${tabNames[tab] || tab}</button>`
      )
      .join("");
  };

  const renderList = (data) => {
    if (!data || !data.data || !data.data.length) {
      return "<div class='hot-search-empty'>暂无数据，请稍后再试</div>";
    }
    return data.data
      .slice(0, config.limit || 15)
      .map(
        (item, index) => {
          const url = item.url || item.link || "#";
          const title = item.title || item.desc || item.name || "";
          const hot = item.hot || item.index || "";
          return `<a class="hot-search-item" href="${url}" target="_blank" rel="noopener">
            <span class="hot-search-rank ${index < 3 ? "top3" : ""}">${index + 1}</span>
            <span class="hot-search-title">${title}</span>
            ${hot ? `<span class="hot-search-count">${hot}</span>` : ""}
          </a>`;
        }
      )
      .join("");
  };

  const fetchHotList = async (tab) => {
    const container = document.getElementById("hot-search-list");
    if (!container) return;

    container.innerHTML = "<div class='hot-search-loading'>加载中...</div>";

    try {
      const url = APIs[tab];
      if (!url) {
        container.innerHTML = "<div class='hot-search-empty'>该平台暂不可用</div>";
        return;
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(url, {
        signal: controller.signal,
        mode: "cors",
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        container.innerHTML = "<div class='hot-search-empty'>暂无数据，请稍后再试</div>";
        return;
      }

      const data = await response.json();
      container.innerHTML = renderList(data);
    } catch (error) {
      container.innerHTML = "<div class='hot-search-empty'>网络异常，请稍后再试</div>";
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
