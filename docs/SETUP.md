# Prosjektoppsett

Denne guiden viser hvordan du klargjør utviklingsmiljøet lokalt slik at du kan begynne å bidra med en gang.

## 1. ✅ Forutsetninger
- macOS, Linux eller WSL anbefales
- Git og SSH-nøkler konfigurert
- Node.js 20
- pnpm 8
- [mise](https://github.com/jdx/mise) for verktøyhåndtering

## 2. 📦 Installer mise
Kjør installasjonsskriptet:
```bash
curl https://mise.run | sh
```
Følg instruksjonene for å legge mise i `PATH`.

## 3. 🔁 Aktiver mise i shell
Legg til mise-hooks i ditt skall (bash, zsh eller fish) ved å kjøre kommandoen som vises etter installasjonen. For å unngå advarsler anbefales det også å aktivere idiomatisk setting for Node:
```bash
mise settings add idiomatic_version_file_enable_tools node
```

## 4. 💾 Hent repo og installer verktøy
```bash
git clone <REPO-URL>
cd nesheim-vatten
mise install
```
`mise install` leser `.tool-versions` og installerer riktige versjoner av Node og andre verktøy.

## 5. 📥 Installer avhengigheter
```bash
pnpm install
```
Evt. bruk `npm install` hvis du foretrekker npm.

## 6. 🛠️ Kjør utviklingsserver
```bash
pnpm dev
```
Dette starter eventuelle lokale servere definert i `package.json`.

## 7. 📝 Lint, test og build
Kjør kvalitetskontroll og bygg lokalt når nødvendig:
```bash
pnpm run lint
pnpm test
pnpm run build
```

## 8. ❗ Vanlige feil og løsninger
- **Feil Node-versjon:** Kjør `mise install` på nytt og start terminalen på nytt.
- **pnpm ikke funnet:** Sjekk at mise har installert pnpm og at den er i `PATH`.
- **Port opptatt ved `pnpm dev`:** Endre port i `.env` eller stopp prosessen som bruker porten.

Følger du disse stegene skal du være klar til å utvikle uten ytterligere hjelp.
