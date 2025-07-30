const glob = require('glob');
const sharp = require('sharp');

const files = glob.sync('clients/**/assets/**/*.{png,jpg,jpeg}', { nodir: true });

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
