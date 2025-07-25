# Project Setup

This guide explains how to clone the repository, install dependencies, and run the project locally.

## 1. Clone the repository

```bash
git clone <REPO-URL>
cd nesheim-vatten
```

Replace `<REPO-URL>` with the Git address of your fork or the upstream repository.

## 2. Install Node dependencies

Install Node.js (v18 or later is recommended) and run:

```bash
npm install
```

This installs the packages listed in `package.json` which are mainly used for the Jest test suite.

## 3. Run the tests

To verify everything works, execute:

```bash
npm test
```

## 4. Preview the website

The `docs/website` folder contains Shopify theme files and static assets. You can preview the theme in one of two ways:

1. **With Shopify CLI** (recommended for Shopify work):
   ```bash
   cd docs/website/website-v1
   shopify theme serve
   ```
   This requires [Shopify CLI](https://shopify.dev/apps/tools/cli) to be installed and authenticated with your store.

2. **With a simple static server** (for general HTML/CSS/JS preview):
   ```bash
   npx http-server docs/website/website-v1
   ```
   Then open the provided local address in your browser.

Feel free to explore the other theme versions under `docs/website/` (e.g., `website-v2`, `website-v3`).

