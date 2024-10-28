const startDate = new Date("2021-06-11T19:00:00");
let blurLevel = 20;
let reasonIndex = 0;

const reasons = [
  "Você me faz sorrir todos os dias 😊",
  "Seu carinho me traz paz 🕊️",
  "Adoro como você cuida de mim 🥰",
  "Seu sorriso ilumina meus dias ☀️",
  "Eu amo compartilhar a vida ao seu lado 💑",
  "Você é a pessoa mais incrível que já conheci 🌟",
  "Seu abraço é o melhor lugar do mundo 🌍",
  "Você me inspira a ser uma pessoa melhor 🌈",
  "Eu amo cada momento que passo com você ❤️",
  "Você é a minha pessoa favorita 🥇",
  "Eu amo cada detalhe seu 💖",
  "Você é o amor da minha vida 💕",
  "Você é a minha melhor amiga 👫",
  "Você é o meu porto seguro 🏠",
  "Eu amo a sua companhia 🎈",
  "Você é o meu maior presente 🎁",
  "Eu amo a forma como você me faz feliz 🌻",
  "Eu amo tudo em você, e em nós 💞",
];

function updateTimeTogether() {
  const now = new Date();
  const diffTime = Math.abs(now - startDate);

  const years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  const days = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  document.getElementById(
    "time-together"
  ).textContent = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos ❤️`;

  setTimeout(updateTimeTogether, 1000);
}

document.body.addEventListener("click", () => {
  if (blurLevel > 0) {
    blurLevel -= 2;
    document.getElementById(
      "hidden-message"
    ).style.filter = `blur(${blurLevel}px)`;
    createHeart();
  } else {
    revealReason();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";

  // Adiciona tamanhos aleatórios
  const sizes = ["small", "medium", "large"];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  heart.classList.add(randomSize);

  // Adiciona velocidades aleatórias
  const speeds = ["slow", "normal", "fast"];
  const randomSpeed = speeds[Math.floor(Math.random() * speeds.length)];
  heart.classList.add(randomSpeed);

  // Posição horizontal aleatória com margem das bordas
  const leftPosition = 10 + Math.random() * 80; // Mantém entre 10% e 90% da largura
  heart.style.left = `${leftPosition}vw`;

  document.body.appendChild(heart);

  // Remove o coração após a animação terminar
  setTimeout(() => {
    heart.remove();
  }, 6000); // Tempo suficiente para a animação mais longa (6s)
}

function revealReason() {
  if (reasonIndex < reasons.length) {
    const reasonItem = document.createElement("li");
    reasonItem.textContent = reasons[reasonIndex++];
    document.getElementById("reasons-list").appendChild(reasonItem);
    setTimeout(() => (reasonItem.style.opacity = 1), 100);
  } else {
    alert("Esses são apenas alguns dos muitos motivos pelos quais te amo! 💖");
  }
}

updateTimeTogether();
