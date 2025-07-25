# Nesheim & Vatten Brand Guide

## 1. Intro / Purpose
Dette dokumentet beskriver kjerneelementer i merkevaren **Nesheim & Vatten Consulting**. Informasjonen er basert på eksisterende filer i repoet. Nettstedet `nesheimvatten.no` kunne ikke hentes pga. nettverksbegrensninger.

## 2. Logo
Logoer ligger under `docs/brand-assets/logo/`:
- **Full Logo** (`Full Logo.svg`)
- **Square Logo** (`Square Logo.svg`)

**Clear-space:** min. 24&nbsp;px rundt logoen.

**Minst størrelser:** 40&nbsp;px høyde anbefales.

Logoen finnes i mørk (#303232) og blå (#5f70b1) versjon. Bruk hvit logo på mørke bakgrunner.

## 3. Fargepalett

| Navn | Hex | RGB | Bruk |
|------|-----|-----|------|
| Primær | `#5f70b1` | `95 112 177` | Hovedknapper, lenker |
| Sekundær | `#2f3132` | `47 49 50` | Header/footer bakgrunn |
| Tekst | `#303232` | `48 50 50` | Primær tekst |
| Aksent | `#d62828`* | `214 40 40` | Fremheving |
| Bakgrunn | `#fdf0d5`* | `253 240 213` | Sidebakgrunn |

(*Aksent og bakgrunn hentet fra tidligere utgave.)

## 4. Typografi

| Element | Fontfamilie | Vekter | Line-height |
|---------|-------------|-------|-------------|
| Overskrifter | `Inter`, `Arial`, sans-serif | 700 | 1.2 |
| Brødtekst | `Inter`, `Arial`, sans-serif | 400 | 1.6 |

Størrelseshierarki (px):
```
H1: 32
H2: 28
H3: 24
H4: 20
H5: 18
H6: 16
Body: 16
Small: 14
```

## 5. UI-komponenter
- **Knapp:** bakgrunn `#5f70b1`, tekst hvit, radius 4&nbsp;px.
- **Hover:** mørkere nyanse (`#4c5a8f`).
- **Disabled:** gråtonet bakgrunn `#2f3132` med 40&nbsp;% opasitet.
- **Lenke:** farge `#5f70b1`; hover underline.
- **Input-felt:** 1&nbsp;px border `#303232`, radius 4&nbsp;px.
- **Kort:** hvit bakgrunn, skygge `0 2px 4px rgba(0,0,0,0.1)`.

### Eksempel (CSS)
```css
.button {
  background: var(--color-primary);
  color: #fff;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}
.button:hover { background: #4c5a8f; }
.button:disabled { background: rgba(47,49,50,0.4); }
```

## 6. Ikoner og bilder
- Enkle linjeikoner i samme farger som teksten.
- Bilder med nøytral tone, god kontrast til tekst.

## 7. Tone-of-voice
- Profesjonell og konsis.
- Fokus på klar, handlingsorientert tekst.
- Unngå sjargong og for mange emojis.

## 8. Design tokens

Tokens ligger i `styles/tokens.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
:root {
  --color-primary: #5f70b1;
  --color-secondary: #2f3132;
  --color-text: #303232;
  --color-accent: #d62828;
  --color-background: #fdf0d5;
  --font-heading: 'Inter', Arial, sans-serif;
  --font-body: 'Inter', Arial, sans-serif;
}
```

### Eksempel `tailwind.config.js`
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#5f70b1',
        secondary: '#2f3132',
        text: '#303232',
        accent: '#d62828',
        background: '#fdf0d5',
      },
      fontFamily: {
        heading: ['Inter', 'Arial', 'sans-serif'],
        body: ['Inter', 'Arial', 'sans-serif'],
      }
    }
  }
};
```

## Åpent / trenger avklaringer
- Direkte data fra `nesheimvatten.no` kunne ikke hentes (nettverksblokkering).
- Fargene er derfor basert på tidligere brand guide og logo-SVG.
- Typografien er antatt `Inter` ettersom den brukes i repoet.
