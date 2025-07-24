# Båttilsyn.no Brand Guide

Dette dokumentet gir en helhetlig oversikt over visuell profil og
implementering for **baattilsyn.no**. Følg retningslinjene nedenfor når du
utvikler design- og kodeløsninger.

## 🎨 Fargepalett

| Navn | Hex | Bruksområde |
|------|-----|-------------|
| **Marineblå** | `#002B45` | Primærfarge, header, footer |
| **Himmelblå** | `#59AEDD` | Sekundærfarge, lenker, knapper |
| **Havgrå** | `#A9B6C1` | Nøytrale elementer, sekundær tekst |
| **Båt-hvit** | `#F4F7F9` | Bakgrunner |
| **Signalrød** | `#E63946` | Aksenter og CTA-elementer |

## 🖋 Typografi

- **Overskrifter:** `Montserrat`, 700
- **Brødtekst:** `Open Sans`, 400
- **Fallback:** `Arial`, `sans-serif`

Importer via Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
```

Eksempel på bruk i CSS:

```css
body {
  font-family: 'Open Sans', Arial, sans-serif;
}
h1, h2, h3, h4 {
  font-family: 'Montserrat', Arial, sans-serif;
}
```

## 🧭 Logo-retningslinjer

- Bruk alltid logoen i **SVG**-format på web.
- Minimum 24&nbsp;px luft rundt logoen.
- Mørk bakgrunn: hvit logo. Lys bakgrunn: marineblå logo.
- Plasseres øverst til venstre på siden og i e‑poster.

## 🧱 Ikoner og grafiske elementer

- Enkle strekikoner i blåtoner.
- Unngå fylte symboler med mange detaljer.
- Ikonsett kan hentes fra [Tabler Icons](https://tabler.io/icons).

## 🧑‍💻 Kodeimplementering

```css
:root {
  --color-primary: #002B45;
  --color-secondary: #59AEDD;
  --color-neutral: #A9B6C1;
  --color-background: #F4F7F9;
  --color-accent: #E63946;

  --font-heading: 'Montserrat', Arial, sans-serif;
  --font-body: 'Open Sans', Arial, sans-serif;
}
```

Tailwind eksempel:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#002B45',
        secondary: '#59AEDD',
        neutral: '#A9B6C1',
        background: '#F4F7F9',
        accent: '#E63946',
      },
      fontFamily: {
        heading: ['Montserrat', 'Arial', 'sans-serif'],
        body: ['Open Sans', 'Arial', 'sans-serif'],
      },
    }
  }
};
```

Tips for React/Next.js:
- Importer Google Fonts i `_app.js` eller `layout.js`.
- Definer CSS-variabler globalt med `createGlobalStyle` (styled-components) eller i din CSS-fil.

## 📸 Bildebruk og stil

- Motiv: kystmiljøer, båthavner, tauverk og sjø.
- Hold bakgrunner rolige med god kontrast til tekst.
- Blanding av lyse og mørke bilder gir dynamikk.

## ✅ Designprinsipper

- Maritim minimalisme med rene linjer.
- Myke skygger og runde hjørner (4–8&nbsp;px).
- Rikelig med luft mellom seksjoner.
- Grid-basert layout (12 kolonner eller CSS Grid) for struktur.

## 📁 Struktur

Dette dokumentet er organisert i seksjoner med klare overskrifter,
punktlister og kodeeksempler for rask referanse. Hold designfilene under
`clients/baattilsyn/design/` og nettsideressurser under
`clients/baattilsyn/website/`.
