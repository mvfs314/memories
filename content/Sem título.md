<div class="simple-carousel">
  <div class="sc-track">
    <img src="_Imagens/LimiarJanelas/LimiarJanelas1.png" alt="">
    <img src="_Imagens/LimiarJanelas/LimiarJanelas2.png" alt="">
    <img src="_Imagens/LimiarJanelas/LimiarJanelas3.png" alt="">
  </div>
  <button class="sc-btn sc-prev" aria-label="Anterior" type="button">‹</button>
  <button class="sc-btn sc-next" aria-label="Próxima" type="button">›</button>
  <div class="sc-dots"></div>
</div>
<style>
.simple-carousel { position: relative; max-width: 700px; margin: 1.5rem auto; overflow: hidden; border-radius: 12px; background: var(--light, #1115); aspect-ratio: 16 / 9; transition: height 0.3s ease; }
.sc-track { display: flex; height: 100%; transition: transform 0.4s ease; }
.sc-track img { width: 100%; height: 100%; flex: 0 0 100%; display: block; object-fit: contain; margin: 0; }
.sc-btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.45); color: #fff; border: none; font-size: 1.8rem; width: 44px; height: 44px; border-radius: 50%; cursor: pointer; line-height: 1; z-index: 5; touch-action: manipulation; -webkit-tap-highlight-color: transparent; }
.sc-prev { left: 10px; }
.sc-next { right: 10px; }
.sc-btn:hover { background: rgba(0,0,0,0.7); }
.sc-dots { position: absolute; bottom: 10px; left: 0; right: 0; display: flex; justify-content: center; gap: 6px; z-index: 5; }
.sc-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.5); cursor: pointer; }
.sc-dot.active { background: #fff; }
</style>
<script>
(function () {
  function initCarousels() {
    document.querySelectorAll(".simple-carousel").forEach(function (root) {
      if (root.dataset.scInit) return;
      root.dataset.scInit = "1";
      var track = root.querySelector(".sc-track");
      var slides = root.querySelectorAll(".sc-track img");
      var dotsWrap = root.querySelector(".sc-dots");
      var prevBtn = root.querySelector(".sc-prev");
      var nextBtn = root.querySelector(".sc-next");
      var i = 0;
      slides.forEach(function (_, idx) {
        var dot = document.createElement("div");
        dot.className = "sc-dot" + (idx === 0 ? " active" : "");
        dot.addEventListener("click", function () { go(idx); });
        dotsWrap.appendChild(dot);
      });
      function setHeight() {
        var img = slides[i];
        function apply() {
          var w = root.clientWidth;
          if (img.naturalWidth) { root.style.height = (w * img.naturalHeight / img.naturalWidth) + "px"; }
        }
        if (img.complete && img.naturalWidth) { apply(); } else { img.addEventListener("load", apply, { once: true }); }
      }
      function go(n) {
        i = (n + slides.length) % slides.length;
        track.style.transform = "translateX(-" + (i * 100) + "%)";
        dotsWrap.querySelectorAll(".sc-dot").forEach(function (d, idx) { d.classList.toggle("active", idx === i); });
        setHeight();
      }
      function bind(btn, handler) {
        btn.addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); handler(); });
      }
      bind(prevBtn, function () { go(i - 1); });
      bind(nextBtn, function () { go(i + 1); });
      window.addEventListener("resize", setHeight);
      setHeight();
    });
  }
  document.addEventListener("DOMContentLoaded", initCarousels);
  document.addEventListener("nav", initCarousels);
  initCarousels();
})();
</script>