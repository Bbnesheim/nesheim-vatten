# Kom i gang med utviklingsmiljøet

Denne guiden beskriver de grunnleggende stegene for å få prosjektet opp å kjøre lokalt.

## 1. Installer mise

[mise](https://github.com/jdx/mise) håndterer verktøyversjoner definert i `.tool-versions`.
Installer med:

```bash
curl https://mise.run | sh
```

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

## 4. Start utviklingsserveren

```bash
pnpm dev
# eller npm run dev
```

Dette vil starte en lokal server slik at du kan se nettsiden i nettleseren.

## 5. Kjør testene

```bash
pnpm test
# eller npm test
```

Alle tester bør kjøres uten feil.
