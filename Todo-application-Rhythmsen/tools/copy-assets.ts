import fs from 'fs';
import path from 'path';

const srcDir = path.join(__dirname, '../../src/assets/locales');
const destDir = path.join(__dirname, '../../public/locales');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);

files.forEach((file) => {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, file);
  fs.copyFileSync(srcPath, destPath);
});