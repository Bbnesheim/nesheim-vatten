# Prosjektoppsett

Denne guiden forklarer hvordan du setter opp prosjektet lokalt fra bunnen av.

## 1. Forutsetninger
- macOS, Linux eller WSL
- Git
- Node.js 20.10.0
- pnpm 8.15.4
- [mise](https://github.com/jdx/mise) for verktøyversjoner

## 2. Installer mise
Kjør installasjonsskriptet:
```bash
curl https://mise.run | sh
```
Følg instruksjonene som vises for å legge mise i `PATH`.

## 3. Aktiver mise i shell
Legg til aktiveringslinjen i `~/.bashrc` (eller tilsvarende):
```bash
eval "$(~/.local/bin/mise activate bash)"
```
Aktiver også idiomatisk filhåndtering:
```bash
mise settings add idiomatic_version_file_enable_tools node pnpm
```

## 4. Klon repoet og installer verktøy
```bash
git clone <REPO-URL>
cd nesheim-vatten
mise install
```
Dette leser `.tool-versions` og installerer riktige Node- og pnpm-versjoner.

## 5. Installer Node-avhengigheter
```bash
pnpm install
```

## 6. Start utviklingsserver
```bash
pnpm dev
```

## 7. Kør lint, test og build
```bash
pnpm run lint
pnpm test
pnpm run build
```

## 8. Vanlige feil og løsninger
- **pnpm: command not found** – kjør `mise install` på nytt for å sikre at pnpm ligger i `PATH`.
- **Feil Node-versjon** – kontroller at `mise` er aktivert og kjør `mise install`.
- **Tester som feiler** – prøv `pnpm install` for å sikre at alle pakker er installert.
