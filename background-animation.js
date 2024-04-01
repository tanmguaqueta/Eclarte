// JavaScript para el fondo de animación
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const colors = ['#4B0082', '#6a0dad', '#8A2BE2']; // Colores del fondo
const particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.size = Math.random() * 2 + 1;
  }
  
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }
  
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  while (particles.length < 100) {
    particles.push(new Particle());
  }
  for (const particle of particles) {
    particle.update();
    particle.draw();
  }
  requestAnimationFrame(loop);
}

loop();
