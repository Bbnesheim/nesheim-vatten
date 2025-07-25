const fs = require('fs');
const { execSync } = require('child_process');

const rcPath = '.htmllintrc';
const cfg = JSON.parse(fs.readFileSync(rcPath, 'utf8'));
if (cfg.exclude) {
  // htmllint-cli does not support the "exclude" option directly
  delete cfg.exclude;
}
const tmpPath = '.htmllintrc.tmp';
fs.writeFileSync(tmpPath, JSON.stringify(cfg));
try {
  execSync(`npx htmllint --rc ${tmpPath} 'clients/**/*.html'`, { stdio: 'inherit' });
} finally {
  fs.unlinkSync(tmpPath);
}
