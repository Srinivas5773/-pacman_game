const fs = require('fs');
const path = require('path');
const ROOT_DIR = path.resolve(__dirname, '..');
const SCAN_EXTENSIONS = ['.js', '.html', '.css', '.json', '.md'];
const EXCLUDE_DIRS = ['node_modules', '.git', 'coverage'];

function countLinesInFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8').split('\n').length;
  } catch (e) { return 0; }
}

function scanDir(dir, stats = { totalFiles: 0, totalLines: 0, byExtension: {} }) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (EXCLUDE_DIRS.includes(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath, stats);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (SCAN_EXTENSIONS.includes(ext) || entry.name === 'Dockerfile' || entry.name === 'Makefile') {
        const lines = countLinesInFile(fullPath);
        stats.totalFiles += 1;
        stats.totalLines += lines;
        stats.byExtension[ext || 'other'] = (stats.byExtension[ext || 'other'] || 0) + lines;
      }
    }
  }
  return stats;
}

const results = scanDir(ROOT_DIR);
console.log(`TOTAL PROJECT FILES: ${results.totalFiles}`);
console.log(`TOTAL LINES OF CODE: ${results.totalLines.toLocaleString()}`);
