const fs = require('fs');

fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist');
fs.copyFileSync('src/index.js', 'dist/index.js');
console.log('Build terminé : dist/index.js');
