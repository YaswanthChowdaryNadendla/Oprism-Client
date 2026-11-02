const { PNG } = require('D:/Portfolio/node_modules/pngjs');
const fs = require('fs');

const buffer = fs.readFileSync('D:/Oprism/src/assets/oprism-reference-logo.png');
const src = PNG.sync.read(buffer);

// 1. Create a transparent PNG of the crystal prism (y=15 to y=140)
// 2. Create a clean high-res transparent PNG of the wordmark (y=140 to y=190)

console.log('Original image:', src.width, 'x', src.height);

// Let's create an image with transparent background for the entire logo (prism + wordmark)
const logoTransparent = new PNG({ width: src.width, height: 188 });

for (let y = 0; y < 188; y++) {
  for (let x = 0; x < src.width; x++) {
    const srcIdx = (y * src.width + x) * 4;
    const dstIdx = (y * src.width + x) * 4;

    const r = src.data[srcIdx];
    const g = src.data[srcIdx+1];
    const b = src.data[srcIdx+2];

    // Background gradient check:
    // Notice in background, r, g, b follow the blue gradient.
    // Near top (y=0..100), background is between #2a4e9c and #2d90cd.
    // Triangle has sharp edges.
    // Wordmark has color ~ #323192 (dark indigo)
    logoTransparent.data[dstIdx] = r;
    logoTransparent.data[dstIdx+1] = g;
    logoTransparent.data[dstIdx+2] = b;
    logoTransparent.data[dstIdx+3] = 255;
  }
}

fs.writeFileSync('D:/Oprism/src/assets/logo_clean.png', PNG.sync.write(logoTransparent));
console.log('Saved logo_clean.png');
