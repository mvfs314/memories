---
title: 📦 Reino das Caixas de Papelão
---
## 🌿 O Bioma

### Conceito

Um reino medieval completo construído inteiramente com caixas de papelão.

A brincadeira com caixas é transformada pela imaginação em um verdadeiro reino, com portão de entrada, muralhas, cidadela, torres e um grande castelo no centro.

A fantasia não substitui o papelão — ela nasce dele. O jogador entra pelo grande portão e pode explorar a cidadela, as muralhas e as torres antes de chegar ao castelo central.

O castelo é o principal ponto do bioma e possui diferentes ambientes e níveis exploráveis.

### Atmosfera

Aventureira, lúdica e imaginativa.

O bioma deve transmitir a sensação de explorar um verdadeiro reino medieval, mas construído de forma improvisada e criativa durante uma brincadeira.

---

## 🗺️ Estrutura do Mundo

### Áreas

- Portão do reino
- Muralhas
- Torres de vigia
- Casas e ruas
- Praça central
- Castelo
- Torres do Castelo
- Salão principal
- Masmorras

### Conexões

**Entrada:** 

**Saída:** 

## **Conexões internas**

---

## 🎮 Mecânicas

### Exploração

A exploração acontece por diferentes níveis do reino.

O jogador percorre as ruas da cidadela, sobe pelas muralhas, atravessa torres e explora o interior do castelo.

A estrutura vertical permite caminhos alternativos e áreas que podem ser descobertas durante a exploração.

A exploração das estruturas de papelão é o principal elemento de gameplay.

Caixas empilhadas, abertas ou modificadas pela brincadeira formam plataformas, paredes, passagens, torres e outros elementos do cenário.

### Obstáculos

- Estruturas bloqueando caminhos
- Abismos entre construções
- Passagens estreitas
- Áreas verticais
- Caminhos que exigem habilidades específicas

### Puzzles

A definir.

### Inimigos

A definir.

### Encontros especiais

A definir.

### Habilidades

**Necessárias:**

A definir


**Obtidas:**

A definir

---

## 📈 Progressão

### Início

O jogador encontra o grande portão de entrada do reino e começa a explorar a cidadela.

### Desenvolvimento

A exploração se expande da cidadela para as muralhas, torres e diferentes áreas do reino.

O castelo, localizado no centro, torna-se progressivamente o principal objetivo visual da exploração.

### Clímax

A chegada e exploração do grande castelo.

### Conclusão

A definir.

### Backtracking

O reino pode possuir áreas que se tornam acessíveis posteriormente através de novas habilidades.

---

## 🐈 Gatos

### Gatos presentes


### Interações


---

## 👤 NPCs

### NPCs presentes

A definir.

### Participação

A definir.

### Interações

A definir.

---

## 🎒 Coletáveis

### 📸 Fotografias


### 👻 Ecos


### 🧸 Homenagens


---

## 🎨 Referências Visuais


<div class="simple-carousel">
  <div class="sc-track">
    <img src="_imagens/reinodascaixasdepapelão/reinocaixas1.png" alt="">
    <img src="_imagens/reinodascaixasdepapelão/reinocaixas2.png" alt="">
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

---
## 🎵 Referências Sonoras

A definir.

