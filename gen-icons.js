const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

function drawIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const r = size * 0.12;

  // Fondo verde oscuro
  ctx.fillStyle = '#0e1a12';
  roundRect(ctx, 0, 0, size, size, size * 0.22);
  ctx.fill();

  // Círculo central verde
  ctx.fillStyle = '#1a7a4a';
  ctx.beginPath();
  ctx.arc(size / 2, size * 0.45, size * 0.28, 0, Math.PI * 2);
  ctx.fill();

  // Hoja / mate estilizado
  ctx.fillStyle = '#ffffff';
  ctx.font = `bold ${size * 0.38}px serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('🧉', size / 2, size * 0.46);

  // Texto debajo
  ctx.fillStyle = '#7ecfa0';
  ctx.font = `${size * 0.11}px sans-serif`;
  ctx.fillText('mate', size / 2, size * 0.82);

  return canvas.toBuffer('image/png');
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

const dir = path.join(__dirname, 'icons');
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path.join(dir, 'icon-192.png'), drawIcon(192));
fs.writeFileSync(path.join(dir, 'icon-512.png'), drawIcon(512));
console.log('Íconos generados');
