# Prosjektoppsett

Denne guiden viser hvordan du klargjør utviklingsmiljøet lokalt.

## 1. ✅ Forutsetninger
- macOS, Linux eller WSL anbefales
- Git
- Node.js 20.10.0
- [mise](https://github.com/jdx/mise) som verktøyhåndtering

## 2. 📦 Installer mise
Kjør installasjonsskriptet:
```bash
curl https://mise.run | sh
```

Følg beskjedene for å legge mise i `PATH`.

## 3. 💾 Hent repoet og aktiver versjoner
```bash
git clone <REPO-URL>
cd nesheim-vatten
mise use -g node@20.10.0
```

Dette oppretter passende globale versjonslenker. Alternativt henter mise automatisk verdier fra `.tool-versions`.

## 4. 📥 Installer avhengigheter
```bash
npm install
```

## 5. ✅ Valider oppsettet
Kjør linters og tester for å bekrefte at alt fungerer:
```bash
npm run lint
npm test
```
