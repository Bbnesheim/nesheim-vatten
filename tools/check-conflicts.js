const { execSync } = require('child_process');
try {
  const result = execSync("git grep -n '^<<<<<<< '", { stdio: 'pipe' }).toString();
  if (result.trim()) {
    console.error('Merge conflict markers found:\n' + result);
    process.exit(1);
  }
} catch (e) {
  // git grep exits with 1 when no matches are found
}
