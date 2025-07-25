# Repository Health Report

## Inventar
- `package.json`, `package-lock.json`, `package.backup.json`
- `.tool-versions`, `.nvmrc`
- `.github/workflows/ci.yml`
- Lint konfigurasjon: `.prettierrc.json`, `.stylelintrc.json`, `.stylelintignore`, `.htmllintrc`, `.htmllintignore`
- Dokumentasjon under `docs/`
- Klientmapper under `clients/`
- Design tokens i `styles/tokens.css`
- Tester i `tests/`
- Scripts i `tools/`

## Validering
### package.json
- Filen er gyldig JSON og inkluderer `lint`, `format` og `format:check`-script.
- `stylelint` og øvrige verktøy ligger i `devDependencies`.

### Lint/Test/Build-scripts
- `npm install` fungerer etter at `package.json` ble rettet.
- `npm run lint` kjører både CSS og HTML linting.
- Jest tester ligger under `tests/` og kan kjøres med `npm test` etter at avhengigheter er installert.

### CI-workflows
- `.github/workflows/ci.yml` kjører `npm run lint`, `npm run format:check` og `npm test`. Node-versjon 20 i CI avviker fortsatt fra `.nvmrc` (18.20.8).

### Prettier/Stylelint/Htmllint
- Prettier-konfig finnes i `.prettierrc.json`.
- Stylelint-konfig og ignore-fil finnes.
- Htmllint-konfig og ignore-fil finnes.

### Node/pnpm-versjon
- `.nvmrc` og `.tool-versions` spesifiserer Node 18.20.8 og pnpm 8.15.4【F:.tool-versions†L1-L2】【F:.nvmrc†L1-L1】.
- CI bruker Node 20.

- Dokumentasjonen i `docs/` er oppdatert og `SETUP.md` er ryddet for merge-rester.
- `docs/README.md`, `AGENTS.md`, `ARCHITECTURE.md`, `BRAND_GUIDE.md` finnes.

### Design Tokens
- `styles/tokens.css` samsvarer med tokenlisten i `docs/BRAND_GUIDE.md`【F:styles/tokens.css†L1-L15】【F:docs/BRAND_GUIDE.md†L98-L110】.

## Repo Health Score
- **Infrastruktur:** 80/100 – avhengigheter og scripts er på plass, men Node-versjoner spriker fortsatt.
- **CI:** 80/100 – workflow kjører lint, format og test, men bruker Node 20.
- **Lint/Test:** 80/100 – alle nødvendige script finnes og fungerer.
- **Docs:** 85/100 – dokumentasjonen er oppdatert og konsistent. SETUP og ARCHITECTURE beskriver nå SEO-prosessen og hvor sidemaler ligger.
- **Design tokens:** 90/100 – tokens og dokumentasjon samsvarer.

**Total score:** 83/100

## Identifiserte konflikter/mergeproblemer
- Ingen kjente konflikter etter siste opprydding.

## Risiko / Teknisk gjeld
- CI benytter Node 20 i stedet for 18.20.8 som spesifisert i `.nvmrc`.
- Dokumentasjonen er forbedret og oppdatert.


## Task Status
- T001: Done

