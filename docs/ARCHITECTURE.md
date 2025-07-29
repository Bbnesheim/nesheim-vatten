# Repository Architecture

This document explains the overall structure of the Nesheim & Vatten repository and how new projects should be organized.

## Folder overview

- `archive/` – archived or outdated resources kept for reference
- `clients/` – per-client project files (contracts, meetings, design, website, etc.)
- `docs/` – documentation, brand assets and marketing material
- `styles/` – global design tokens and CSS used across projects
- `templates/` – reusable templates such as proposals or invoices
- `tests/` – automated Jest test suite
- `tools/` – helper scripts like `create-structure.sh`

The `.github/` directory contains GitHub Actions workflows for linting and testing.

## Adding a new client or project

Client work is grouped under `clients/<client-name>/`. Each client folder normally contains these subfolders:

- `contracts/`
- `meetings/`
- `strategy/`
- `design/`
- `deliverables/`
- `website/`

A website project lives inside `clients/<client-name>/website/<project-name>` or simply in `website/` if there is only one site. You can run `./tools/create-structure.sh` to generate a basic directory tree.

## Technology stack

The repository primarily holds Shopify themes consisting of Liquid templates, JavaScript and CSS. Node.js is used for tooling and tests. There is no dedicated build step at the moment, but linters (Stylelint and htmllint) and a small Jest suite validate the code.

## Build, deploy & pipelines

Local development:

```bash
npm install
npm run lint
npm test
```

Websites can be previewed with Shopify CLI or any static server (see `docs/setup.md`). Continuous integration runs the same lint and test steps via GitHub Actions defined in `.github/workflows/ci.yml` whenever code is pushed or a pull request is opened on `main`.

## Writing tests

Unit tests live in the `tests/` directory and run with Jest using `jsdom` to simulate browser behaviour. Each theme script can be loaded inside a JSDOM environment and any required globals (like `debounce` or `fetchConfig`) should be mocked. Add new `*.test.js` files here and run `npm test` to execute the suite locally or via CI.

## SEO og innholdsstruktur

Innholdet for nettsidens kjernesider redigeres i Shopify-temaet `clients/baattilsyn/website/website_v4/`.
`page.om-oss.json` og `page.contact.json` inneholder tekst, bilder og meta-felter som brukes av søkemotorer.
Verktøyene Prettier, Stylelint og htmllint kjøres via `npm run lint` og ignorerer disse templatedirene slik at JSON- og Liquid-filer ikke blir endret automatisk.
Fargepaletten og tonen i teksten styres av [`docs/BRAND_GUIDE.md`](BRAND_GUIDE.md).
