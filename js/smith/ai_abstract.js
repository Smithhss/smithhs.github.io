(function () {
  const {
    randomNum,
    basicWordCount,
    btnLink,
    key: AIKey,
    Referer: AIReferer,
    gptName,
    switchBtn,
    mode: initialMode,
  } = GLOBAL_CONFIG.postHeadAiDescription;

  const { title, postAI, pageFillDescription } = GLOBAL_CONFIG_SITE;

  let lastAiRandomIndex = -1;
  let animationRunning = true;
  let mode = initialMode;
  let refreshNum = 0;
  let prevParam;
  let audio = null;
  let isPaused = false;
  let summaryID = null;

  const post_ai = document.querySelector(".post-ai-description");
  const aiTitleRefreshIcon = post_ai.querySelector(".ai-title .smithfont.smith-icon-arrow-rotate-right");
  let aiReadAloudIcon = post_ai.querySelector(".smith-icon-circle-dot");
  const explanation = post_ai.querySelector(".ai-explanation");

  let aiStr = "";
  let aiStrLength = "";
  let delayInit = 600;
  let indexI = 0;
  let indexJ = 0;
  let timeouts = [];
  let elapsed = 0;

  const observer = createIntersectionObserver();
  const aiFunctions = [introduce, aiTitleRefreshIconClick, aiRecommend, aiGoHome];

  const aiBtnList = post_ai.querySelectorAll(".ai-btn-item");
  const filteredHeadings = Array.from(aiBtnList).filter(heading => heading.id !== "go-api-link");
  filteredHeadings.forEach((item, index) => {
    item.addEventListener("click", () => {
      aiFunctions[index]();
    });
  });

  document.getElementById("ai-tag").addEventListener("click", onAiTagClick);
  aiTitleRefreshIcon.addEventListener("click", onAiTitleRefreshIconClick);
  document.getElementById("go-api-link").addEventListener("click", () => {
    window.open(btnLink, "_blank");
  });
  aiReadAloudIcon.addEventListener("click", readAloud);

  async function readAloud() {
    smith.snackbarShow("自建 API 模式暂不支持语音朗读");
  }
  if (switchBtn) {
    document.getElementById("ai-Toggle").addEventListener("click", changeShowMode);
  }

  aiAbstract();
  showAiBtn();

  function createIntersectionObserver() {
    return new IntersectionObserver(
      entries => {
        let isVisible = entries[0].isIntersecting;
        animationRunning = isVisible;
        if (animationRunning) {
          delayInit = indexI === 0 ? 200 : 20;
          timeouts[1] = setTimeout(() => {
            if (indexJ) {
              indexI = 0;
              indexJ = 0;
            }
            if (indexI === 0) {
              explanation.innerHTML = aiStr.charAt(0);
            }
            requestAnimationFrame(animate);
          }, delayInit);
        }
      },
      { threshold: 0 }
    );
  }

  function animate(timestamp) {
    if (!animationRunning) {
      return;
    }
    if (!animate.start) animate.start = timestamp;
    elapsed = timestamp - animate.start;
    if (elapsed >= 20) {
      animate.start = timestamp;
      if (indexI < aiStrLength - 1) {
        let char = aiStr.charAt(indexI + 1);
        let delay = /[,.，。!?！？]/.test(char) ? 150 : 20;
        if (explanation.firstElementChild) {
          explanation.removeChild(explanation.firstElementChild);
        }
        explanation.innerHTML += char;
        let div = document.createElement("div");
        div.className = "ai-cursor";
        explanation.appendChild(div);
        indexI++;
        if (delay === 150) {
          post_ai.querySelector(".ai-explanation .ai-cursor").style.opacity = "0.2";
        }
        if (indexI === aiStrLength - 1) {
          observer.disconnect();
          explanation.removeChild(explanation.firstElementChild);
        }
        timeouts[0] = setTimeout(() => {
          requestAnimationFrame(animate);
        }, delay);
      }
    } else {
      requestAnimationFrame(animate);
    }
  }

  function clearTimeouts() {
    if (timeouts.length) {
      timeouts.forEach(item => {
        if (item) {
          clearTimeout(item);
        }
      });
    }
  }

  function startAI(str, df = true) {
    indexI = 0;
    indexJ = 1;
    clearTimeouts();
    animationRunning = false;
    elapsed = 0;
    observer.disconnect();
    explanation.innerHTML = df ? "生成中. . ." : "请等待. . .";
    aiStr = str;
    aiStrLength = aiStr.length;
    observer.observe(post_ai);
  }

  async function aiAbstract(num = basicWordCount) {
    if (mode === "api") {
      await aiAbstractAPI(num);
    } else {
      aiAbstractLocal();
    }
  }

  async function aiAbstractAPI(num) {
    indexI = 0;
    indexJ = 1;
    clearTimeouts();
    animationRunning = false;
    elapsed = 0;
    observer.disconnect();

    num = Math.max(10, Math.min(2000, num));
    const truncateDescription = (title + pageFillDescription).trim().substring(0, num);

    const requestBody = {
      model: "deepseek-v4-flash",
      messages: [
        {
          role: "system",
          content: "你是一个文章摘要生成助手。请用简洁的中文为以下文章生成摘要，100-200字左右。直接输出摘要内容，不要添加任何前缀或解释。"
        },
        {
          role: "user",
          content: truncateDescription
        }
      ],
      stream: false,
      max_tokens: 300,
      temperature: 0.7
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + AIKey,
      },
      body: JSON.stringify(requestBody),
    };
    console.info(truncateDescription.length);
    try {
      let animationInterval = null;
      let summary;
      if (animationInterval) clearInterval(animationInterval);
      animationInterval = setInterval(() => {
        const animationText = "生成中" + ".".repeat(indexJ);
        explanation.innerHTML = animationText;
        indexJ = (indexJ % 3) + 1;
      }, 500);
      const response = await fetch(AIReferer + "/v1/chat/completions", requestOptions);
      let result;
      if (response.status === 401) {
        result = { summary: "API Key 无效，请检查配置。" };
      } else if (response.status === 403) {
        result = { summary: "API 访问被拒绝，请检查 Referer 配置。" };
      } else if (!response.ok) {
        result = { summary: "API 请求失败: " + response.status };
      } else {
        result = await response.json();
      }

      if (result.choices && result.choices[0]) {
        summary = result.choices[0].message.content.trim();
        summaryID = "self-hosted";
      } else {
        summary = result.summary || "摘要获取失败，请检查 API 配置。";
      }

      setTimeout(() => {
        aiTitleRefreshIcon.style.opacity = "1";
      }, 300);
      if (summary) {
        startAI(summary);
      } else {
        startAI("摘要获取失败!!!请检查 API 服务是否正常!!!");
      }
      clearInterval(animationInterval);
    } catch (error) {
      console.error(error);
      explanation.innerHTML = "发生异常: " + error.message;
    }
  }

  function aiAbstractLocal() {
    const strArr = postAI.split(",").map(item => item.trim());
    if (strArr.length !== 1) {
      let randomIndex = Math.floor(Math.random() * strArr.length);
      while (randomIndex === lastAiRandomIndex) {
        randomIndex = Math.floor(Math.random() * strArr.length);
      }
      lastAiRandomIndex = randomIndex;
      startAI(strArr[randomIndex]);
    } else {
      startAI(strArr[0]);
    }
    setTimeout(() => {
      aiTitleRefreshIcon.style.opacity = "1";
    }, 600);
  }

  function aiRecommend() {
    indexI = 0;
    indexJ = 1;
    clearTimeouts();
    animationRunning = false;
    elapsed = 0;
    explanation.innerHTML = "生成中. . .";
    aiStr = "";
    aiStrLength = "";
    observer.disconnect();
    timeouts[2] = setTimeout(() => {
      explanation.innerHTML = recommendList();
    }, 600);
  }

  function recommendList() {
    let thumbnail = document.querySelectorAll(".relatedPosts-list a");
    if (!thumbnail.length) {
      const cardRecentPost = document.querySelector(".card-widget.card-recent-post");
      if (!cardRecentPost) return "";

      thumbnail = cardRecentPost.querySelectorAll(".aside-list-item a");

      let list = "";
      for (let i = 0; i < thumbnail.length; i++) {
        const item = thumbnail[i];
        list += `<div class="ai-recommend-item"><span class="index">${
          i + 1
        }：</span><a href="javascript:;" onclick="pjax.loadUrl('${item.href}')" title="${
          item.title
        }" data-pjax-state="">${item.title}</a></div>`;
      }

      return `很抱歉，无法找到类似的文章，你也可以看看本站最新发布的文章：<br /><div class="ai-recommend">${list}</div>`;
    }

    let list = "";
    for (let i = 0; i < thumbnail.length; i++) {
      const item = thumbnail[i];
      list += `<div class="ai-recommend-item"><span>推荐${
        i + 1
      }：</span><a href="javascript:;" onclick="pjax.loadUrl('${item.href}')" title="${
        item.title
      }" data-pjax-state="">${item.title}</a></div>`;
    }

    return `推荐文章：<br /><div class="ai-recommend">${list}</div>`;
  }

  function aiGoHome() {
    startAI("正在前往博客主页...", false);
    timeouts[2] = setTimeout(() => {
      if (window.pjax) {
        pjax.loadUrl("/");
      } else {
        location.href = location.origin;
      }
    }, 1000);
  }

  function introduce() {
    if (mode == "api") {
      startAI("我是文章辅助AI: Smith GPT，点击下方的按钮，让我生成本文简介、推荐相关文章等。");
    } else {
      startAI(`我是文章辅助AI: ${gptName} GPT，点击下方的按钮，让我生成本文简介、推荐相关文章等。`);
    }
  }

  function aiTitleRefreshIconClick() {
    aiTitleRefreshIcon.click();
  }

  function onAiTagClick() {
    if (mode === "api") {
      post_ai.querySelectorAll(".ai-btn-item").forEach(item => (item.style.display = "none"));
      document.getElementById("go-api-link").style.display = "block";
      startAI(
        "你好，我是本站摘要生成助理Smith GPT，是一个基于deepseek的生成式AI。我在这里只负责摘要的预生成和显示，你无法与我直接沟通。"
      );
    } else {
      post_ai.querySelectorAll(".ai-btn-item").forEach(item => (item.style.display = "block"));
      document.getElementById("go-api-link").style.display = "none";
      startAI(
        `你好，我是本站摘要生成助理${gptName} GPT，是一个基于GPT-4的生成式AI。我在这里只负责摘要的预生成和显示，你无法与我直接沟通。`
      );
    }
  }

  function onAiTitleRefreshIconClick() {
    const truncateDescription = (title + pageFillDescription).trim().substring(0, basicWordCount);

    aiTitleRefreshIcon.style.opacity = "0.2";
    aiTitleRefreshIcon.style.transitionDuration = "0.3s";
    aiTitleRefreshIcon.style.transform = "rotate(" + 360 * refreshNum + "deg)";
    if (truncateDescription.length <= basicWordCount) {
      let param = truncateDescription.length - Math.floor(Math.random() * randomNum);
      while (param === prevParam || truncateDescription.length - param === prevParam) {
        param = truncateDescription.length - Math.floor(Math.random() * randomNum);
      }
      prevParam = param;
      aiAbstract(param);
    } else {
      let value = Math.floor(Math.random() * randomNum) + basicWordCount;
      while (value === prevParam || truncateDescription.length - value === prevParam) {
        value = Math.floor(Math.random() * randomNum) + basicWordCount;
      }
      aiAbstract(value);
    }
    refreshNum++;
  }

  function changeShowMode() {
    mode = mode === "api" ? "local" : "api";
    if (mode === "api") {
      document.getElementById("ai-tag").innerHTML = "Smith GPT";

      aiReadAloudIcon.style.opacity = "1";
      aiReadAloudIcon.style.cursor = "pointer";
    } else {
      aiReadAloudIcon.style.opacity = "0";
      aiReadAloudIcon.style.cursor = "auto";
      if ((document.getElementById("go-api-link").style.display = "block")) {
        document.querySelectorAll(".ai-btn-item").forEach(item => (item.style.display = "block"));
        document.getElementById("go-api-link").style.display = "none";
      }
      document.getElementById("ai-tag").innerHTML = gptName + " GPT";
    }
    aiAbstract();
  }

  function showAiBtn() {
    if (mode === "api") {
      document.getElementById("ai-tag").innerHTML = "Smith GPT";
    } else {
      document.getElementById("ai-tag").innerHTML = gptName + " GPT";
    }
  }
})();
