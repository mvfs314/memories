---
title: 🐟 Jardim dos peixes e penas
---
## 🌿 O Bioma

### Conceito

Um jardim exuberante onde peixes vivem tanto na água quanto no ar. Alguns nadam pelos lagos e riachos, enquanto outros atravessam o céu entre árvores e flores, como se estivessem nadando pelo ambiente.

O bioma é inspirado nas brincadeiras dos gatos com varinhas de brinquedo, especialmente aquelas com um pequeno peixe de tecido ou uma bolinha acompanhada de penas. Esses elementos ganham vida no cenário, transformando uma brincadeira cotidiana em um jardim fantástico onde os gatos podem perseguir, saltar e tentar alcançar os peixes voadores e as penas.

### Atmosfera

Mágica, colorida e aconchegante, com uma sensação constante de descoberta.

O contraste entre a maciez da lã, a fluidez da água suspensa e os perigos pontiagudos de agulhas, alfinetes e tesouras cria um ambiente fantástico e curioso.

As regiões superiores são mais iluminadas e acolhedoras, enquanto as áreas aquáticas ficam progressivamente mais profundas, silenciosas e escuras.

Apesar da presença de regiões escuras e do perigo de ficar sem ar, o bioma não deve transmitir terror ou tristeza. A sensação predominante é de aventura e encantamento, como se o jogador estivesse explorando um mundo impossível construído a partir de objetos cotidianos.

---

## 🗺️ Estrutura do Mundo

### Áreas

- Lago dos Peixes
- Bosque das Penas
- Vale dos Peixes Voadores
- Campo das Brincadeiras
- Lagoa das Varinhas

### Conexões

**Entrada:** 

**Saída:** 

## **Conexões internas**

---

## 🎮 Mecânicas

### Exploração

O jogador percorre jardins, árvores, canteiros e estruturas naturais, alternando entre áreas baixas e pontos elevados. O [[Peixinho]] pode ser utilizado como isca, atraindo criaturas para determinados pontos e abrindo caminhos ou permitindo resolver pequenos puzzles.

Alguns inimigos podem ser distraídos ou deslocados utilizando o peixinho como isca.

Folhas carregadas pelo vento podem servir como plataformas temporárias para alcançar áreas mais altas ou atravessar espaços.

### Obstáculos

- Criaturas atraídas pelo jogador
- Inimigos territoriais
- Puzzles de atração

### Puzzles

A definir.

### Inimigos

A definir.

### Encontros especiais

A definir.


### Habilidades

**Necessárias:**
- Movimentação básica
- [[Peixinho]]

**Obtidas:**
- [[Peixinho]]

---

## 📈 Progressão

### Início

O jogador entra no jardim e começa a explorar as áreas mais baixas, encontrando folhas que voam com o vento e podem ser utilizadas como plataformas.

### Desenvolvimento

A exploração se expande para diferentes áreas do jardim, combinando plataformas de folhas, correntes de vento e criaturas que podem ser atraídas pelo peixinho.

O jogador aprende a utilizar o [[Peixinho]], passando a utilizá-lo para distrair criaturas e solucionar pequenos desafios do ambiente.

### Clímax

A chegada à área central do jardim, onde o jogador precisa combinar as folhas móveis e o uso do peixinho para atravessar uma sequência maior de obstáculos.

### Conclusão

A definir.

### Backtracking

Novos caminhos podem ser acessados ao retornar a áreas anteriores após adquirir novas habilidades.

---

## 🐈 Gatos

### Gatos presentes    

A definir.
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
    <img src="_Imagens/JardimPeixesPenas/Jardim1.png" alt="">
    <img src="_Imagens/JardimPeixesPenas/Jardim2.png" alt="">
    <img src="_Imagens/JardimPeixesPenas/Jardim3.png" alt="">
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

