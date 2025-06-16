import { imageSources } from './images.js';

const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

function resize() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.setTransform(1, 0, 0, 1, 0, 0); 
  ctx.scale(dpr, dpr);
}

export function setParticlesWithPokemonImage(src) {
  particles.length = 0;
  const img = new Image();
  img.src = src;
  img.onload = () => {
    for(let i = 0; i < NUM_PARTICLES; i++) {
      particles.push(new Particle(img));
    }
  };
}


window.addEventListener('resize', resize);
resize();

class Particle {
  constructor(image) {
    this.image = image;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = 30 + Math.random() * 50;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x + this.size > canvas.width) this.vx = -this.vx;
    if (this.y < 0 || this.y + this.size > canvas.height) this.vy = -this.vy;
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
  }
}

const particles = [];
const images = [];
const NUM_PARTICLES = 50;

let loadedCount = 0;
imageSources.forEach(src => {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    loadedCount++;
    if (loadedCount === imageSources.length) {
      start();
    }
  };
  images.push(img);
});

function start() {
  for (let i = 0; i < NUM_PARTICLES; i++) {
    const img = images[Math.floor(Math.random() * images.length)];
    particles.push(new Particle(img));
  }
  requestAnimationFrame(animate);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

export function addParticleImage(src) {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    particles.push(new Particle(img));
  };
}
