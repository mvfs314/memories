---
title: 🌆 Labirinto da procura
---
## 🌿 O Bioma

### Conceito

Um enorme labirinto formado por ruas, becos, muros, cercas e passagens estreitas, criado a partir da imaginação de uma criança durante uma brincadeira de procurar um gato perdido.

O jogador entra em uma região aparentemente comum, mas logo percebe que as ruas se transformam em um labirinto cada vez mais complexo. Caminhos se dividem, becos terminam em muros e diferentes rotas levam a partes desconhecidas do bairro.

A procura pela memória é representada pela exploração desse labirinto.

Ao longo do percurso, o jogador encontra pequenos sinais de que Karine passou por determinados lugares, mas nunca consegue vê-la diretamente. A sensação é de estar sempre chegando perto, sem saber exatamente onde ela está.

O labirinto eventualmente conduz o jogador para uma área mais escondida e apertada, onde a memória finalmente é encontrada.

### Atmosfera

Misteriosa, exploratória e inquietante.

O bioma deve transmitir a sensação de procurar alguém que desapareceu e não saber onde ela está, mas sem se tornar excessivamente sombrio ou assustador.

A atmosfera começa relativamente aberta e familiar, mas vai ficando mais fechada e confusa conforme o jogador avança pelo labirinto.

A descoberta da memória no final traz uma sensação de alívio e recompensa, encerrando a tensão da procura.

---

## 🗺️ Estrutura do Mundo

### Áreas

- Becos da Procura
- Praça dos Caminhos
- Bairro das Passagens
- Estacionamento Esquecido
- Esconderijo da memória

### Conexões

**Entrada:** 

**Saída:** 

## **Conexões internas**

---
## 🎮 Mecânicas

### Exploração

A exploração acontece por um grande labirinto formado por ruas, becos, muros, cercas e áreas escondidas.

O jogador percorre diferentes caminhos em busca de pistas que indiquem por onde Karine passou.

O labirinto possui múltiplas rotas e caminhos que se cruzam, fazendo com que o jogador precise observar o ambiente e memorizar pontos de referência para se orientar.

Algumas áreas podem ser acessadas por diferentes caminhos, permitindo que o jogador explore o labirinto de forma não linear.

A exploração de caminhos alternativos e a descoberta de novas pistas são os principais elementos de gameplay do bioma.

### Obstáculos

- Caminhos que terminam em becos sem saída
- Muros e cercas bloqueando passagens
- Ruas que levam a diferentes direções
- Passagens estreitas entre construções
- Áreas que exigem habilidades específicas
- Rotas que fazem o jogador retornar a regiões anteriores
- Caminhos ocultos atrás de elementos do cenário
- Trechos que dificultam a orientação do jogador

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

O jogador entra no labirinto e começa a procurar pela memória.

Os primeiros caminhos são relativamente simples, permitindo que o jogador compreenda a estrutura do local e encontre as primeiras pistas de que Karine passou por ali.

### Desenvolvimento

O labirinto se torna progressivamente mais complexo.

Novos caminhos, becos e áreas interligadas são descobertos, fazendo com que o jogador precise explorar diferentes regiões e retornar a locais já visitados.

As pistas encontradas ao longo do percurso indicam que memória está cada vez mais próxima, mas sua localização continua desconhecida.

### Clímax

O jogador chega à região mais escondida e difícil de alcançar do labirinto.

O espaço se torna mais fechado e as passagens mais estreitas, culminando na descoberta de um pequeno esconderijo onde a memória está.

### Conclusão

O jogador finalmente encontra escondida debaixo de um carro.

Após a longa procura, a tensão da exploração é substituída por uma sensação de alívio ao perceber que ela está bem.

A descoberta recupera a memória associada àquele momento.

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
    <img src="_Imagens/LabirintoProcura/Labirinto1.png" alt="">
    <img src="_Imagens/LabirintoProcura/Labirinto2.png" alt="">
    <img src="_Imagens/LabirintoProcura/Labirinto3.png" alt="">
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