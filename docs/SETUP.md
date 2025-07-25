# Prosjektoppsett

Denne guiden viser hvordan du klargjør utviklingsmiljøet lokalt.

## 1. ✅ Forutsetninger
- macOS, Linux eller WSL anbefales
- Git
- Node.js 18.20.8
- pnpm 8.15.4
- [mise](https://github.com/jdx/mise) som verktøyhåndtering

## 2. 📦 Installer mise
Kjør installasjonsskriptet:
```bash
curl https://mise.run | sh
```

Følg beskjedene for å legge mise i `PATH`.

## 3. 💾 Hent repoet
```bash
git clone <REPO-URL>
cd nesheim-vatten
```
## 4. 🛠 Installer verktøyversjoner
Kjør `mise install` for å hente Node.js og pnpm definert i `.tool-versions`:
```bash
mise install
```



## 5. 📥 Installer avhengigheter
```bash
pnpm install
```

## 6. ✅ Valider oppsettet
Kjør linters og tester for å bekrefte at alt fungerer:
```bash
pnpm run lint
pnpm test
```
