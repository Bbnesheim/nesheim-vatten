const { execSync } = require('child_process');
let result = '';
try {
  result = execSync("git grep -n '^<<<<<<< '", { stdio: 'pipe' }).toString();
} catch {
  // git grep exits with 1 when no matches are found
  result = '';
}

if (result.trim()) {
  console.error('Merge conflict markers found:\n' + result);
  process.exit(1);
} else {
  console.log('No merge conflicts found');
}
