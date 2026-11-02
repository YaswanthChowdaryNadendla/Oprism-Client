const { PNG } = require('D:/Portfolio/node_modules/pngjs');
const fs = require('fs');

const buffer = fs.readFileSync('D:/Oprism/src/assets/wordmark-original.png');
const png = PNG.sync.read(buffer);

console.log('Wordmark dimensions:', png.width, png.height);

// Let's create an embedded data URI SVG or crisp SVG mask using the exact image
const base64 = buffer.toString('base64');
const dataUri = 'data:image/png;base64,' + base64;

// Save an SVG that embeds this high-fidelity image as a vector mask
const svg = `<svg viewBox="0 0 ${png.width} ${png.height}" xmlns="http://www.w3.org/2000/svg">
  <image href="${dataUri}" width="${png.width}" height="${png.height}" />
</svg>`;

fs.writeFileSync('D:/Oprism/src/assets/wordmark-exact.svg', svg);
console.log('Saved wordmark-exact.svg');
