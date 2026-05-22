(function () {
  const config = GLOBAL_CONFIG.live2d;
  if (!config || !config.enable) return;

  const loadLive2D = async () => {
    const pixiScript = document.createElement("script");
    pixiScript.src = "https://cdn.jsdelivr.net/npm/pixi.js@7.3.2/dist/pixi.min.js";
    document.head.appendChild(pixiScript);

    pixiScript.onload = async () => {
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

      model.on("hit", (hitAreas) => {
        if (hitAreas.includes("body")) {
          model.motion("tap_body");
        }
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadLive2D);
  } else {
    loadLive2D();
  }
})();
