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
- Filen har ugyldig JSON pga ekstra komma etter `lint:html` og `jsdom`【F:package.json†L10-L25】.
- Mangler `lint`- og `format`-script som dokumentasjonen refererer til.
- `stylelint` mangler i `devDependencies`.

### Lint/Test/Build-scripts
- `npm install` feiler fordi `package.json` er ugyldig【36185a†L1-L21】.
- `npm run lint` finnes ikke. `lint:css` og `lint:html` finnes, men krever `stylelint` og `htmllint-cli`.
- Jest tester ligger under `tests/` og kan kjøres med `npm test` etter at avhengigheter er installert.

### CI-workflows
- `.github/workflows/ci.yml` kjører `npm run lint` og `npm test`, men siste steg mangler sluttsymbol (filen er kort men gyldig). Node-versjon 20 i CI avviker fra `.nvmrc` (18.20.8).

### Prettier/Stylelint/Htmllint
- Prettier-konfig finnes i `.prettierrc.json`.
- Stylelint-konfig og ignore-fil finnes.
- Htmllint-konfig og ignore-fil finnes.

### Node/pnpm-versjon
- `.nvmrc` og `.tool-versions` spesifiserer Node 18.20.8 og pnpm 8.15.4【F:.tool-versions†L1-L2】【F:.nvmrc†L1-L1】.
- CI bruker Node 20.

### Dokumentasjon
- Flere dokumenter i `docs/`. `SETUP.md` inneholder rester fra tidligere merge med linjene `codex/add-.nvmrc-and-update-setup-documentation` og `=======`【F:docs/SETUP.md†L9-L24】.
- `docs/README.md`, `AGENTS.md`, `ARCHITECTURE.md`, `BRAND_GUIDE.md` finnes.

### Design Tokens
- `styles/tokens.css` samsvarer med tokenlisten i `docs/BRAND_GUIDE.md`【F:styles/tokens.css†L1-L15】【F:docs/BRAND_GUIDE.md†L98-L110】.

## Repo Health Score
- **Infrastruktur:** 65/100 – grunnleggende filer finnes, men Node-versjoner spriker og `package.json` er ugyldig.
- **CI:** 70/100 – enkel workflow, men avhenger av manglende `npm run lint` og feil Node-versjon.
- **Lint/Test:** 50/100 – tester finnes men kan ikke kjøres før `package.json` fikses; linter mangler script.
- **Docs:** 60/100 – mange dokumenter, men `SETUP.md` har feil og ingen overordnet doc som binder alt sammen.
- **Design tokens:** 90/100 – tokens og dokumentasjon samsvarer.

**Total score:** 67/100

## Identifiserte konflikter/mergeproblemer
- `docs/SETUP.md` inneholder overflødige linjer som sannsynligvis stammer fra en merge.

## Risiko / Teknisk gjeld
- Ugyldig `package.json` blokkerer installasjon og CI.
- Manglende `lint`/`format`-script gjør at CI feiler.
- Node-versjon i CI (20) er ikke i synk med `.nvmrc` (18.20.8).
- Dokumentasjonen har små avvik og kan forvirre nye bidragsytere.


## Task Status
- T001: Done

