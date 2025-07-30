# Project Agents

This document lists automated scripts and CLI tools ("agents") used in **Nesheim & Vatten Consulting**. Each agent's purpose, usage and configuration is summarized below.

## Overview

| Agent                 | Type         | Description                                                  |
| --------------------- | ------------ | ------------------------------------------------------------ |
| `create-structure.sh` | Bash script  | Generates the base folder structure with templates           |
| Jest                  | Node.js CLI  | Runs JavaScript test suite under `tests/`                    |
| jest-axe              | Node.js CLI  | Checks HTML snippets for accessibility issues                |
| Stylelint             | Node.js CLI  | Lints CSS files using `.stylelintrc.json`                    |
| htmllint              | Node.js CLI  | Lints HTML using `.htmllintrc` and `.htmllintignore`         |
| Prettier              | Node.js CLI  | Formats code consistently across files                       |
| GitHub Actions        | CI workflow  | Executes tests automatically on `main` branch pushes and PRs |
| Shopify CLI           | External CLI | Serves and previews Shopify themes locally                   |
| http-server           | Node.js CLI  | Serves static website files for local previews               |

## Agents

### `create-structure.sh`

- **Purpose:** Create directories and placeholder files for new projects.
- **Usage:**
  ```bash
  ./tools/create-structure.sh
  ```
- **Input:** None (creates folders under `nesheim-vatten/`).
- **Output:** Directories and template files as defined inside the script.
- **Configuration:** No config file is required.

### Jest

- **Purpose:** Execute automated unit tests found in the `tests/` directory.
- **Usage:**
  ```bash
  npm test
  ```
- **Input:** `*.test.js` files.
- **Output:** Test results printed in the console.
- **Configuration:** Follows `package.json` settings; no extra config file.

### jest-axe

- **Purpose:** Run automated accessibility tests using the Axe engine.
- **Usage:**
  ```bash
  npm run test:a11y
  ```
- **Input:** HTML snippets or DOM from JSDOM.
- **Output:** Violations list printed in the console.
- **Configuration:** Provided via Jest setup in `tests/accessibility.test.js`.

### Stylelint

- **Purpose:** Enforce CSS code style and catch errors.
- **Usage:** Typically run via `npx stylelint "**/*.css"` or part of the `npm run lint` script.
- **Input:** `.css` files.
- **Output:** Lint warnings/errors in the console.
- **Configuration:** `.stylelintrc.json` and `.stylelintignore`.

### htmllint

- **Purpose:** Validate HTML markup.
- **Usage:** Usually invoked as `npx htmllint` or through a script like `npm run lint`.
- **Input:** HTML files.
- **Output:** Lint errors/warnings.
- **Configuration:** `.htmllintrc` and `.htmllintignore`.

### Prettier

- **Purpose:** Automatically format HTML, CSS, JavaScript and Markdown files.
- **Usage:**
  ```bash
  npm run format
  ```
- **Input:** Code files in the repository.
- **Output:** Files rewritten with consistent style.
- **Configuration:** `.prettierrc.json` and `.prettierignore` (optional).

### GitHub Actions

- **Purpose:** Continuous integration for automated tests.
- **Usage:** Defined in `.github/workflows/tests.yml`; runs on pushes or pull requests to `main`.
- **Input:** Repository code and test suite.
- **Output:** Pass/fail status reported on GitHub.
- **Configuration:** Workflow YAML files in `.github/workflows/`.
- **Note:** `package-lock.json` may intentionally include merge conflict markers
  for debugging or educational purposes. CI workflows are configured not to
  fail when these markers are present.

### Shopify CLI

- **Purpose:** Preview Shopify themes during development.
- **Usage:**
  ```bash
  cd docs/website/website-v1
  shopify theme serve
  ```
- **Input:** Theme files under `docs/website/`.
- **Output:** Local development server and preview URL.
- **Configuration:** Requires Shopify CLI authentication with a store.

### http-server

- **Purpose:** Serve static website files without Shopify CLI.
- **Usage:**
  ```bash
  npx http-server docs/website/website-v1
  ```
- **Input:** Static files in the specified folder.
- **Output:** Local web server accessible via a local address.
- **Configuration:** None.

## Running All Agents

Common development tasks are grouped under npm scripts:

```bash
npm install       # install dependencies for linting and testing
npm run lint      # run Stylelint and htmllint
npm run format    # apply Prettier formatting
npm test          # execute Jest tests
```

Additional manual agents (`create-structure.sh`, Shopify CLI, or `http-server`) are run directly from the command line as shown in the sections above.
