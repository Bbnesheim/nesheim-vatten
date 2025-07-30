let glob;
let sharp;

try {
  glob = require('glob');
} catch {
  console.error('The "glob" module is required. Install it with "npm install glob".');
  process.exit(1);
}

try {
  sharp = require('sharp');
} catch {
  console.error('The "sharp" module is required. Install it with "npm install sharp".');
  process.exit(1);
}

const files = glob.sync('clients/**/assets/**/*.{png,jpg,jpeg}', { nodir: true });

if (files.length === 0) {
  console.log('No image files found for optimization.');
  process.exit(0);
}

(async () => {
  for (const file of files) {
    const base = file.replace(/\.(png|jpe?g)$/i, '');
    try {
      await sharp(file).toFormat('webp').toFile(`${base}.webp`);
      await sharp(file).toFormat('avif').toFile(`${base}.avif`);
      console.log(`Optimized ${file}`);
    } catch (err) {
      console.error(`Failed to optimize ${file}:`, err);
    }
  }
})();
