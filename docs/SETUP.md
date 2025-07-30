# Project Setup

This guide explains how to get the repository running locally. It merges information from the previous Norwegian and English setup guides.

## 1. Clone the repository

```bash
git clone <REPO-URL>
cd nesheim-vatten
```

Replace `<REPO-URL>` with the Git address of your fork or the upstream repository.

## 2. Install mise and tool versions

[mise](https://github.com/jdx/mise) manages the tool versions defined in `.tool-versions`.
Install it with:

```bash
curl https://mise.run | sh
```

Then install the tools specified for the project:

```bash
mise install
```

## 3. Install project dependencies

Use `pnpm` if available or fall back to `npm`:

```bash
pnpm install
# or
npm install
```

## 4. Build static assets

```bash
npm run build
```

This generates minified files in `dist/assets/` for the Shopify themes.

## 5. Start the development server

```bash
pnpm dev
# or
npm run dev
```

A local server will be started so you can preview the site in your browser.

## 6. Run the tests

```bash
pnpm test
# or
npm test
```

All tests should run without failures.

## 7. Preview the website

The `docs/website` folder contains Shopify theme files and static assets. You can preview them in one of two ways:

1. **With Shopify CLI** (recommended for Shopify work):
   ```bash
   cd docs/website/website-v1
   shopify theme serve
   ```
   This requires [Shopify CLI](https://shopify.dev/apps/tools/cli) and authentication with your store.
2. **With a simple static server** (for general HTML/CSS/JS preview):
   ```bash
   npx http-server docs/website/website-v1
   ```
   Then open the provided local address in your browser. Other theme versions live under `docs/website/` (e.g., `website-v2`, `website-v3`).

## 8. Optimise images

Run `npm run optimize:images` to create WebP and AVIF versions of image files under `clients/**/assets/`. You will see `Optimized <file>` for each processed image or `No image files found for optimization.` if none were found. If dependencies like `glob` or `sharp` are missing you will be prompted to install them.

## 9. SEO content and theme files

The "About us" and "Contact us" texts live in the Shopify theme under `clients/baattilsyn/website/website_v4/templates/` as `page.om-oss.json` and `page.contact.json`. Edit them directly in Git. Run `npm run lint` and `npm test` before committing. Linting excludes `.liquid` and `templates/*.json` via ignore files so the theme is unaffected. Run `eslint --fix` and `npm run format` to automatically fix and format files. Colours and tone are described in [`docs/BRAND_GUIDE.md`](BRAND_GUIDE.md).

## 10. Recommended caching setup

For fast load times, cache static files in `/assets/` for a long time. Configure your server or Shopify theme to serve JavaScript and CSS with a `Cache-Control` header of up to one year:

```
/assets/*.js  Cache-Control: public, max-age=31536000
/assets/*.css Cache-Control: public, max-age=31536000
```

Use file versioning or query parameters when files change so the browser fetches the updated versions.
