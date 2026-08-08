---
title: ❄️ Bosque do Inverno Silencioso
---
## 🌿 O Bioma

### Conceito

Um bosque coberto pela neve, representando uma memória de um período de inverno compartilhado pelo protagonista e pelos gatos.

Logo no início do bioma, o jogador recupera a memória relacionada ao paninho. Ao reviver esse momento, recebe o [[Paninho]] como item utilizável.

O bosque é construído ao redor da progressão do frio.

As primeiras áreas são relativamente seguras. Conforme o jogador avança, encontra regiões cada vez mais expostas ao frio, tornando o uso do paninho essencial para continuar.

### Atmosfera

Fria, silenciosa e contemplativa, mas acolhedora.

A neve cobre o ambiente e reduz os sons do mundo. O contraste entre o frio do bosque e o calor proporcionado pelo paninho reforça a sensação de conforto associada à memória.

---

## 🗺️ Estrutura do Mundo

### Áreas

- Entrada do Bosque
- Clareira Nevada
- Trilha das Árvores
- Encosta Congelada
- Coração do Bosque

### Conexões

**Entrada:** 

**Saída:** 

## **Conexões internas**

---

## 🎮 Mecânicas

### Exploração

O jogador atravessa um bosque progressivamente mais frio.

Após recuperar a memória no início da área, recebe o [[Paninho]] e passa a utilizá-lo para se aquecer durante a exploração.

O desafio está em administrar o calor enquanto procura caminhos seguros para avançar.

### Obstáculos

- Áreas expostas ao frio intenso
- Nevascas
- Regiões muito distantes de pontos seguros
- Caminhos onde o jogador precisa administrar o calor
- Trechos em que permanecer exposto por muito tempo se torna perigoso

### Puzzles

A definir.

### Inimigos

A definir.

### Encontros especiais

A definir.


### Habilidades

**Necessárias:**
- Movimentação básica
- [[Paninho]]

**Obtidas:**
- [[Paninho]]

---

## 📈 Progressão

### Início

O jogador entra no bosque e percebe imediatamente a mudança de ambiente causada pelo inverno.

A memória é recuperada logo no início para obter o [[Paninho]] como item de calor/aquecimento.

A neve, o silêncio e a presença dos gatos estabelecem a identidade do bioma.

### Desenvolvimento

Com o [[Paninho]] em mãos, o jogador consegue avançar para regiões mais frias do bosque.

O ambiente passa gradualmente a exigir maior atenção ao gerenciamento do calor.

### Clímax

O jogador chega à região mais profunda do bosque, onde precisa utilizar o paninho de maneira cuidadosa para completar a travessia.

### Conclusão

Após atravessar o bosque, o jogador segue para o próximo fragmento de memória.

O [[Paninho]] permanece em seu inventário e poderá ter novas funções posteriormente.

### Backtracking

Novos caminhos podem ser acessados ao retornar a áreas anteriores após adquirir novas habilidades.

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
    <img src="_Imagens/BosquedoInvernoSilencioso/Bosque1.png" alt="">
    <img src="_Imagens/BosquedoInvernoSilencioso/Bosque2.png" alt="">
    <img src="_Imagens/BosquedoInvernoSilencioso/Bosque3.png" alt="">
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

