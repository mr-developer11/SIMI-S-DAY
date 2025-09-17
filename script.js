// Neon Line Background
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lines = [];

function NeonLine() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 200;
  this.length = Math.random() * 100 + 50;
  this.width = Math.random() * 2 + 1;
  this.speed = Math.random() * 2 + 1;

  const neonColors = [
    '#ff00ff', '#00ffff', '#ffff00', '#00ff00', '#ff4081',
    '#00fffb', '#ff6ec7', '#aaff00', '#ff8c00', '#8a2be2'
  ];

  this.color = neonColors[Math.floor(Math.random() * neonColors.length)];

  this.draw = function () {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y - this.length);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.width;
    ctx.shadowBlur = 40;
    ctx.shadowColor = this.color;
    ctx.stroke();
  };

  this.update = function () {
    this.y -= this.speed;
    if (this.y < -this.length) {
      this.y = canvas.height + Math.random() * 200;
      this.x = Math.random() * canvas.width;
    }
    this.draw();
  };
}

function initLines() {
  lines = [];
  for (let i = 0; i < 100; i++) {
    lines.push(new NeonLine());
  }
}

function animateLines() {
  ctx.fillStyle = '#000000ff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  lines.forEach(line => line.update());
  requestAnimationFrame(animateLines);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initLines();
});

initLines();
animateLines();

// Floating Hearts & Balloons
const emojis = ['❤️', '🎈', '💖'];

function spawnEmoji() {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');

  emoji.style.left = Math.random() * 95 + 'vw';
  emoji.style.bottom = '0px';
  emoji.style.top = '';
  emoji.style.fontSize = (24 + Math.random() * 16) + 'px';
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.animationDuration = (5 + Math.random() * 5) + 's';

  document.body.appendChild(emoji);

  emoji.addEventListener('animationend', () => {
    emoji.remove();
  });
}

function startRisingEmojis() {
  setInterval(() => {
    const count = Math.floor(Math.random() * 2) + 1;
    for (let i = 0; i < count; i++) {
      spawnEmoji();
    }
  }, 700);
}

window.addEventListener('load', () => {
  startRisingEmojis();
});

// Continuous Fireworks Animation
function launchFireworks() {
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

  // Non-stop interval
  setInterval(function () {
    confetti(Object.assign({}, defaults, {
      particleCount: Math.floor(Math.random() * 50 + 50), // random 50-100 particles
      origin: {
        x: Math.random(),
        y: Math.random() * 0.3
      }
    }));
  }, 500); // 0.5 second por por notun burst
}

window.addEventListener('load', () => {
  launchFireworks();
});

