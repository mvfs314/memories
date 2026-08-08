<div class="simple-carousel">
  <div class="sc-track">
    <img src=![[MardaNeblina1.png]] alt="">
  </div>
  <button class="sc-btn sc-prev" aria-label="Anterior">‹</button>
  <button class="sc-btn sc-next" aria-label="Próxima">›</button>
  <div class="sc-dots"></div>
</div>

<style>
.simple-carousel {
  position: relative;
  max-width: 700px;
  margin: 1.5rem auto;
  overflow: hidden;
  border-radius: 12px;
  background: var(--light, #1115);
}
.sc-track {
  display: flex;
  transition: transform 0.4s ease;
}
.sc-track img {
  width: 100%;
  flex: 0 0 100%;
  display: block;
  object-fit: cover;
  max-height: 480px;
  margin: 0;
}
.sc-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.45);
  color: #fff;
  border: none;
  font-size: 1.8rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  line-height: 1;
}
.sc-prev { left: 10px; }
.sc-next { right: 10px; }
.sc-btn:hover { background: rgba(0,0,0,0.7); }
.sc-dots {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 6px;
}
.sc-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  cursor: pointer;
}
.sc-dot.active { background: #fff; }
</style>

<script>
(function () {
  document.querySelectorAll(".simple-carousel").forEach(function (root) {
    if (root.dataset.scInit) return;
    root.dataset.scInit = "1";

    var track = root.querySelector(".sc-track");
    var slides = root.querySelectorAll(".sc-track img");
    var dotsWrap = root.querySelector(".sc-dots");
    var i = 0;

    slides.forEach(function (_, idx) {
      var dot = document.createElement("div");
      dot.className = "sc-dot" + (idx === 0 ? " active" : "");
      dot.addEventListener("click", function () { go(idx); });
      dotsWrap.appendChild(dot);
    });

    function go(n) {
      i = (n + slides.length) % slides.length;
      track.style.transform = "translateX(-" + (i * 100) + "%)";
      dotsWrap.querySelectorAll(".sc-dot").forEach(function (d, idx) {
        d.classList.toggle("active", idx === i);
      });
    }

    root.querySelector(".sc-prev").addEventListener("click", function () { go(i - 1); });
    root.querySelector(".sc-next").addEventListener("click", function () { go(i + 1); });
  });
})();
</script>


![[MardaNeblina1.png]]