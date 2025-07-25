# baattilsyn.no

Denne mappen inneholder koden til nettsiden **baattilsyn.no**. Strukturen er forenklet slik at alt innhold samles i ett prosjekt.

```
clients/baattilsyn/
├── assets/        # Bilder, logoer og andre medier
├── components/    # React-komponenter (foreløpig tom)
├── pages/         # HTML-sider
├── styles/        # Globale stilark og temavariabler
├── docs/          # Denne README og brand guide
└── index.tsx      # Fremtidig React-innsteg
```

## Bygg og start lokalt

Installer avhengigheter og start et enkelt utviklingsmiljø:

```bash
npm install         # første gang
npm run dev         # starter lokal server av `pages/`-mappen
```

## Legge til nye sider eller bilder

- HTML-sider legges i `pages/` og refererer til ressurser med `../assets` eller `../styles`.
- Bilder, logoer og lignende lagres i `assets/`.
- Globale stiler defineres i `styles/` hvor `theme.css` beskriver farger og fonter.

## TODO

- Lage faktiske React-komponenter og bruke `index.tsx` som applikasjonsrot.
- Fjerne statiske HTML-sider når React-versjonen er klar.
