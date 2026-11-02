const { PNG } = require('D:/Portfolio/node_modules/pngjs');
const fs = require('fs');
const buffer = fs.readFileSync('C:/Users/ADMIN/.gemini/antigravity/brain/c7587f10-fb7c-4aaa-9ed5-82778c9ea0e7/.user_uploaded/media_1793612374758_f4642ccc.png');
const png = PNG.sync.read(buffer);

console.log('Image dimensions:', png.width, png.height);

for (let y = 0; y < png.height; y += 4) {
  let darkIndigo = 0;
  for (let x = 0; x < png.width; x++) {
    const idx = (y * png.width + x) * 4;
    const r = png.data[idx];
    const g = png.data[idx+1];
    const b = png.data[idx+2];
    if (r < 90 && g < 90 && b > 110) {
      darkIndigo++;
    }
  }
  if (darkIndigo > 0) {
    console.log('y=' + y + ': dark indigo pixels=' + darkIndigo);
  }
}
