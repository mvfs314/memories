---
title: 🪟 Limiar das janelas
---
## 🌿 O Bioma

### Conceito

O Limiar das Janelas é um espaço formado por três ambientes que se intercalam através de janelas: uma grande paisagem natural, o interior de uma casa e uma região abstrata formada por fragmentos de memória.

O jogador começa explorando uma paisagem aberta e encontra uma janela suspensa aproximadamente na altura em que estaria em uma parede comum. Ao atravessá-la, surge dentro de uma casa.

Outras janelas levam para diferentes pontos do bioma, fazendo com que o jogador alterne constantemente entre os três ambientes.

Na parte mais avançada da região, várias janelas aparecem suspensas no cenário e precisam ser alcançadas utilizando uma pequena coberta como planador.

A memória é representada pelo ato de observar a paisagem pela janela ao lado dos gatos.

### Atmosfera

Contemplativa a e nostálgica.

A paisagem natural deve transmitir liberdade e tranquilidade, com inspiração na natureza brasileira, enquanto o interior da casa possui uma sensação mais íntima e acolhedora.

A região fragmentada é mais abstrata e silenciosa, utilizando elementos como peças de quebra-cabeça, negativos fotográficos e partes incompletas do cenário.

A alternância entre os três ambientes cria estranhamento e curiosidade, mas sem tornar o bioma sombrio.

O final deve transmitir calma, reforçando a importância de um momento simples compartilhado com os gatos.

---

## 🗺️ Estrutura do Mundo

### Áreas

- Horizonte das Janelas
- Casa Entre Lembranças
- Margem Fragmentada
- Travessia das Janelas Suspensas
- Janela da Contemplação

### Conexões

**Entrada:** 

**Saída:** 

## **Conexões internas**

---
## 🎮 Mecânicas

### Exploração

A exploração acontece através das janelas que conectam diferentes partes do bioma.

O jogador pode começar em uma paisagem, atravessar uma janela e surgir dentro da casa. Outra janela pode transportá-lo para a região fragmentada ou devolver o jogador para outro ponto da paisagem.

As conexões não obedecem à distância física entre os locais, fazendo com que o jogador precise compreender quais janelas levam para cada região.

Na parte mais aberta do bioma, o jogador utiliza o [[Paninho]] como planador para atravessar grandes espaços e alcançar janelas suspensas em diferentes alturas.

### Obstáculos

- Janelas localizadas em diferentes alturas
- Grandes espaços que precisam ser atravessados planando
- Correntes de vento que alteram a trajetória do jogador
- Janelas que levam para diferentes regiões
- Caminhos acessíveis apenas através de determinadas janelas
- Plataformas e passagens fragmentadas
- Trechos que exigem alternar entre os três ambientes
- Janelas suspensas que precisam ser alcançadas durante o voo

### Puzzles

A definir.

### Inimigos

A definir.

### Encontros especiais

A definir.

### Habilidades

**Necessárias:**
- [[Paninho]]


**Obtidas:**

A definir

---

## 📈 Progressão

### Início

O jogador entra em uma grande paisagem natural e encontra uma janela suspensa acima do chão.

Ao atravessá-la, surge inesperadamente dentro de uma casa, descobrindo que as janelas funcionam como passagens entre diferentes espaços.

### Desenvolvimento

Novas janelas passam a conectar a casa, a paisagem e a região fragmentada.

O jogador começa a utilizar essas conexões para alcançar áreas anteriormente inacessíveis e avançar pelo bioma.

A estrutura se torna progressivamente mais fantástica, com os três ambientes começando a se misturar.

### Clímax

O jogador chega a uma grande região aberta com diversas janelas suspensas em diferentes alturas.

Utilizando o [[Paninho]] como planador, precisa atravessar o espaço e alcançar as janelas enquanto alterna entre os três ambientes.

### Conclusão

O jogador retorna para uma bela paisagem onde existe apenas uma janela suspensa aproximadamente um metro acima do chão.

Ao contrário das anteriores, ela não funciona como passagem.

Os gatos aparecem ao lado do protagonista e todos permanecem diante da janela contemplando a paisagem.

A memória daquele momento é então recuperada.

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
    <img src="_Imagens/LimiarJanelas/LimiarJanelas1.png" alt="">
    <img src="_Imagens/LimiarJanelas/LimiarJanelas2.png" alt="">
    <img src="_Imagens/LimiarJanelas/LimiarJanelas3.png" alt="">
  </div>
  <button class="sc-btn sc-prev" aria-label="Anterior" type="button">‹</button>
  <button class="sc-btn sc-next" aria-label="Próxima" type="button">›</button>
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
  aspect-ratio: 16 / 9; /* fallback até o JS medir a 1ª imagem */
  transition: height 0.3s ease;
}
.sc-track {
  display: flex;
  height: 100%;
  transition: transform 0.4s ease;
}
.sc-track img {
  width: 100%;
  height: 100%;
  flex: 0 0 100%;
  display: block;
  object-fit: contain; /* preserva proporção, sem cortar */
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
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  line-height: 1;
  z-index: 5;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
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
  z-index: 5;
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
          if (img.naturalWidth) {
            root.style.height = (w * img.naturalHeight / img.naturalWidth) + "px";
          }
        }
        if (img.complete && img.naturalWidth) {
          apply();
        } else {
          img.addEventListener("load", apply, { once: true });
        }
      }

      function go(n) {
        i = (n + slides.length) % slides.length;
        track.style.transform = "translateX(-" + (i * 100) + "%)";
        dotsWrap.querySelectorAll(".sc-dot").forEach(function (d, idx) {
          d.classList.toggle("active", idx === i);
        });
        setHeight();
      }

      function bind(btn, handler) {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          handler();
        });
      }

      bind(prevBtn, function () { go(i - 1); });
      bind(nextBtn, function () { go(i + 1); });

      window.addEventListener("resize", setHeight);
      setHeight();
    });
  }

  // Quartz troca o conteúdo via SPA e dispara "nav" a cada navegação;
  // reexecuta a inicialização nesses casos também.
  document.addEventListener("DOMContentLoaded", initCarousels);
  document.addEventListener("nav", initCarousels);
  initCarousels();
})();
</script>

---
## 🎵 Referências Sonoras

A definir.