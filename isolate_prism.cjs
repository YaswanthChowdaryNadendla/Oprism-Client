const { PNG } = require('D:/Portfolio/node_modules/pngjs');
const fs = require('fs');

const buffer = fs.readFileSync('D:/Oprism/src/assets/oprism-reference-logo.png');
const src = PNG.sync.read(buffer);

// Triangle vertices:
const x1 = 108, y1 = 17;
const x2 = 38, y2 = 134;
const x3 = 177, y3 = 134;

function sign(p1x, p1y, p2x, p2y, p3x, p3y) {
  return (p1x - p3x) * (p2y - p3y) - (p2x - p3x) * (p1y - p3y);
}

function pointInTriangle(px, py) {
  const d1 = sign(px, py, x1, y1, x2, y2);
  const d2 = sign(px, py, x2, y2, x3, y3);
  const d3 = sign(px, py, x3, y3, x1, y1);

  const has_neg = (d1 < 0) || (d2 < 0) || (d3 < 0);
  const has_pos = (d1 > 0) || (d2 > 0) || (d3 > 0);

  return !(has_neg && has_pos);
}

const prismPng = new PNG({ width: src.width, height: 145 });

for (let y = 0; y < 145; y++) {
  for (let x = 0; x < src.width; x++) {
    const srcIdx = (y * src.width + x) * 4;
    const dstIdx = (y * src.width + x) * 4;

    if (pointInTriangle(x, y)) {
      prismPng.data[dstIdx] = src.data[srcIdx];
      prismPng.data[dstIdx+1] = src.data[srcIdx+1];
      prismPng.data[dstIdx+2] = src.data[srcIdx+2];
      prismPng.data[dstIdx+3] = 255;
    } else {
      prismPng.data[dstIdx] = 0;
      prismPng.data[dstIdx+1] = 0;
      prismPng.data[dstIdx+2] = 0;
      prismPng.data[dstIdx+3] = 0;
    }
  }
}

fs.writeFileSync('D:/Oprism/src/assets/prism-crystal.png', PNG.sync.write(prismPng));
fs.writeFileSync('D:/Oprism/public/prism-crystal.png', PNG.sync.write(prismPng));

console.log('Saved prism-crystal.png with transparent background');
