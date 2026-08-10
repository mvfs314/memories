---
title: ☁️ Mar da Neblina
---
## 🌿 O Bioma

### Conceito

Um gigantesco mar de nuvens e neblina, formado por ilhas flutuantes e estruturas suspensas em diferentes alturas.

O jogador explora o céu utilizando plataformas, correntes de vento e caminhos escondidos pela névoa. Grandes nuvens de tempestade produzem raios que podem eletrizar a [[Luva de remover pelos]], permitindo atrair e repelir objetos e interagir com elementos do ambiente.

Conforme avança, a neblina se torna cada vez mais densa e a luz diminui, culminando em regiões de escuridão que só podem ser exploradas completamente após adquirir a habilidade de [[Visão no escuro]].

### Atmosfera

Mágica, grandiosa e dinâmica, como um oceano suspenso acima do mundo.

As áreas abertas são iluminadas e tranquilas, enquanto a neblina cria regiões de mistério e baixa visibilidade. Tempestades surgem entre as ilhas, trazendo raios, vento e mudanças repentinas na iluminação do ambiente.

A combinação de nuvens, eletricidade, vento, neblina e escuridão cria um bioma em constante transformação, transmitindo uma sensação de aventura e descoberta.

Mesmo nas regiões mais escuras e tempestuosas, o ambiente deve permanecer fantástico e encantador, sem assumir uma atmosfera de terror.

---

## 🗺️ Estrutura do Mundo

### Áreas

- Ilha da Neblina
- Caminhos do vento
- Campos de tempestade
- Abismo da neblina
- Coração da tempestade

### Conexões

**Entrada:** 

**Saída:** 

## **Conexões internas**

---

## 🎮 Mecânicas

### Exploração

A exploração é baseada na verticalidade, vento e eletricidade.

O jogador atravessa ilhas flutuantes utilizando plataformas e correntes de vento para alcançar diferentes alturas. Durante as tempestades, pode posicionar a [[Luva de remover pelos]] sob os raios para carregá-la eletricamente.

Com a luva carregada, o jogador pode atrair e repelir objetos eletricamente condutores, criando plataformas, movimentando estruturas e abrindo novos caminhos.

A [[Visão no escuro]] permite explorar completamente as regiões onde a neblina e a ausência de luz impedem a visibilidade.

### Obstáculos

- Nuvens de tempestade
- Descargas elétricas
- Correntes de vento
- Neblina densa
- Regiões escuras
- Quedas
- Plataformas móveis

### Puzzles

A definir.

### Inimigos

A definir.

### Encontros especiais

A definir.

### Habilidades

**Necessárias:**
- Movimentação básica
- [[Luva de remover pelos]]
- [[Visão no escuro]]


**Obtidas:**
- [[Visão no escuro]]

---

## 📈 Progressão
### Início

O jogador chega às ilhas flutuantes e aprende a lidar com plataformas, correntes de vento e a neblina, explorando as primeiras áreas do bioma.

### Desenvolvimento

As tempestades começam a aparecer, para que se use a eletrização da luva e a manipulação de objetos. A neblina se torna mais densa e a dificuldade de enxergar aumenta. Nesse momento, o jogador recupera a memória de Miguel, relacionada ao momento em que ele permaneceu ao seu lado enquanto sua visão estava embaçada.

### Clímax

O jogador alcança as regiões mais profundas da neblina, onde a ausência de luz impede o avanço. Após aprender a [[Visão no escuro]], passa a enxergar caminhos e áreas que antes estavam ocultos.

### Conclusão

Com a nova habilidade, o jogador retorna às regiões escuras e completa a exploração do bioma, encontrando caminhos e áreas que anteriormente permaneciam inacessíveis.

### Backtracking

O reino pode possuir áreas que se tornam acessíveis posteriormente através de novas habilidades.

---

## 🐈 Gatos

### Gatos presentes

A definir.
### Interações

A definir.


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
    <img src="_imagens/mardaneblina/mardaneblina1.png" alt="">
    <img src="_imagens/mardaneblina/mardaneblina2.png" alt="">
    <img src="_imagens/mardaneblina/mardaneblina3.png" alt="">
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

