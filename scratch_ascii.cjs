const { PNG } = require('D:/Portfolio/node_modules/pngjs');
const fs = require('fs');
const buffer = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/brain/c7587f10-fb7c-4aaa-9ed5-82778c9ea0e7/.user_uploaded/media_1793612374758_f4642ccc.png');
const png = PNG.sync.read(buffer);

for (let y = 142; y < 192; y++) {
  let line = '';
  for (let x = 0; x < png.width; x++) {
    const idx = (y * png.width + x) * 4;
    const r = png.data[idx];
    const g = png.data[idx+1];
    const b = png.data[idx+2];
    // Dark indigo text pixels: r ~ 50, g ~ 49, b ~ 146
    if (r < 95 && g < 95 && b > 115) {
      line += '#';
    } else {
      line += ' ';
    }
  }
  console.log(y.toString().padStart(3, ' ') + ': ' + line);
}
