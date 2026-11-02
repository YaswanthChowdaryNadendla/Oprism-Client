const { PNG } = require('D:/Portfolio/node_modules/pngjs');
const fs = require('fs');

const buffer = fs.readFileSync('D:/Oprism/src/assets/oprism-reference-logo.png');
const src = PNG.sync.read(buffer);

// y: 140 to 192
const yStart = 140;
const yEnd = 192;
const height = yEnd - yStart;

const wordmarkPng = new PNG({ width: src.width, height: height });

for (let y = yStart; y < yEnd; y++) {
  for (let x = 0; x < src.width; x++) {
    const srcIdx = (y * src.width + x) * 4;
    const dstIdx = ((y - yStart) * src.width + x) * 4;

    const r = src.data[srcIdx];
    const g = src.data[srcIdx+1];
    const b = src.data[srcIdx+2];

    // Background is light blue, text is dark indigo (#323192)
    // We can compute the text alpha based on luminosity difference:
    // When text is dark (#323192), luminance is ~60
    // When background is light (#cde5f7), luminance is ~220
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    
    // Background color at y:
    // Let's sample background at edge x=5
    const bgIdx = (y * src.width + 5) * 4;
    const bgLum = 0.299 * src.data[bgIdx] + 0.587 * src.data[bgIdx+1] + 0.114 * src.data[bgIdx+2];

    const contrast = bgLum - lum;
    if (contrast > 20) {
      const alpha = Math.min(255, Math.max(0, Math.round((contrast / (bgLum - 50)) * 255)));
      wordmarkPng.data[dstIdx] = 50;   // #323192
      wordmarkPng.data[dstIdx+1] = 49;
      wordmarkPng.data[dstIdx+2] = 146;
      wordmarkPng.data[dstIdx+3] = alpha;
    } else {
      wordmarkPng.data[dstIdx] = 0;
      wordmarkPng.data[dstIdx+1] = 0;
      wordmarkPng.data[dstIdx+2] = 0;
      wordmarkPng.data[dstIdx+3] = 0;
    }
  }
}

fs.writeFileSync('D:/Oprism/src/assets/wordmark-original.png', PNG.sync.write(wordmarkPng));
fs.writeFileSync('D:/Oprism/public/wordmark-original.png', PNG.sync.write(wordmarkPng));
console.log('Saved wordmark-original.png');
