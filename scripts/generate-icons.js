const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = {
  'favicon.ico': 32,
  'icon.png': 32,
  'icon-192.png': 192,
  'icon-512.png': 512,
  'apple-icon.png': 180
};

async function generateIcons() {
  const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/icon.svg'));
  
  for (const [filename, size] of Object.entries(sizes)) {
    await sharp(svgBuffer)
      .resize(size, size)
      .toFile(path.join(__dirname, '../public', filename));
    
    console.log(`Generated ${filename}`);
  }
}

generateIcons().catch(console.error); 