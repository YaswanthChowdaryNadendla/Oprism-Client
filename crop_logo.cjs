const { PNG } = require('D:/Portfolio/node_modules/pngjs');
const fs = require('fs');

const buffer = fs.readFileSync('D:/Oprism/src/assets/oprism-reference-logo.png');
const src = PNG.sync.read(buffer);

// Let's create a transparent PNG of the crystal prism
// Triangle apex: (108, 18)
// Left corner: (38, 134)
// Right corner: (177, 134)

// We can crop the exact logo region (0, 0 to 217, 192)
const cropped = new PNG({ width: 217, height: 188 });
PNG.bitblt(src, cropped, 0, 0, 217, 188, 0, 0);

fs.writeFileSync('D:/Oprism/src/assets/oprism-logo-full.png', PNG.sync.write(cropped));
fs.writeFileSync('D:/Oprism/public/oprism-logo-full.png', PNG.sync.write(cropped));

console.log('Saved oprism-logo-full.png');
