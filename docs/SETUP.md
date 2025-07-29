# Kom i gang med utviklingsmiljøet

Denne guiden beskriver de grunnleggende stegene for å få prosjektet opp å kjøre lokalt.

## 1. Installer mise

[mise](https://github.com/jdx/mise) håndterer verktøyversjoner definert i `.tool-versions`.
Installer med:

```bash
curl https://mise.run | sh
```

Installer prosjektets avhengigheter:
```bash
npm install
```

Start utviklingsserveren:
```bash
npm run dev
Start et nytt terminalvindu eller følg installerens instruksjoner for å laste inn `mise`.

## 2. Installer definerte verktøy

Kjør `mise install` for å hente Node.js og pnpm i riktig versjon:

```bash
mise install
```

## 3. Installer prosjektavhengigheter

```bash
pnpm install
# eller npm install
```
## 4. Bygg statiske filer

```bash
npm run build
```

Dette genererer minifiserte filer i `dist/assets/` som brukes av malene.


## 5. Start utviklingsserveren

```bash
pnpm dev
# eller npm run dev
```

Dette vil starte en lokal server slik at du kan se nettsiden i nettleseren.

## 6. Kjør testene

```bash
pnpm test
# eller npm test
```

Alle tester bør kjøres uten feil.

## Optimaliser bilder

Kommandoen `npm run optimize:images` bruker Sharp til å lage WebP- og AVIF-versjoner av alle bildefiler under `clients/**/assets/`. Filene plasseres i samme mappe som originalen.

## SEO-innhold og temafiler

Tekstene for "Om oss" og "Kontakt oss" ligger i Shopify-temaet under `clients/baattilsyn/website/website_v4/templates/` som `page.om-oss.json` og `page.contact.json`.
Filene følger Shopifys JSON-struktur og inneholder også meta-felter for tittel og beskrivelse. Rediger dem direkte i git.

Kjør `npm run lint` og `npm test` før du committer. Linting ekskluderer `.liquid` og `templates/*.json` via ignore-filene slik at temaet ikke påvirkes. Fargepalett og tone beskrives i [`docs/BRAND_GUIDE.md`](BRAND_GUIDE.md).
