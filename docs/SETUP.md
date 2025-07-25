# Prosjektoppsett

Denne guiden forklarer hvordan du setter opp prosjektet lokalt fra bunnen av.

## 1. Forutsetninger
- macOS, Linux eller WSL
- Git

## 2. Installer mise
Kjør installasjonsskriptet:
```bash
curl https://mise.run | sh
```
Følg instruksjonene som vises for å legge mise i `PATH`.

## 3. Aktiver mise i shell
Legg til aktiveringslinjen i `~/.bashrc` (eller tilsvarende):
```bash
```

```bash
npm install
```

```bash
```

## 8. Vanlige feil og løsninger
- **pnpm: command not found** – kjør `mise install` på nytt for å sikre at pnpm ligger i `PATH`.
- **Feil Node-versjon** – kontroller at `mise` er aktivert og kjør `mise install`.
- **Tester som feiler** – prøv `pnpm install` for å sikre at alle pakker er installert.
