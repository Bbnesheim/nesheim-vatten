# Båttilsyn.no Brand Guide

Dette dokumentet beskriver retningslinjer for profil og design for nettsiden **baattilsyn.no**. Bruken av maritime farger, typografi og grafiske elementer skal bidra til en helhetlig og gjenkjennelig identitet.

## 🎨 Fargepalett

| Navn | Hex | Bruksområde |
|-----|-----|-------------|
| **Marineblå** | `#002B45` | Primærfarge, bakgrunner, overskrifter |
| **Himmelblå** | `#59AEDD` | Sekundærfarge, lenker, fremhevede felter |
| **Havgrå** | `#A9B6C1` | Nøytral farge, tekst eller elementer |
| **Båt-hvit** | `#F4F7F9` | Bakgrunnsfarge |
| **Signalrød** | `#E63946` | Aksenter og call-to-action |

## 🖋 Typografi

- **Overskrifter:** `Montserrat`, bold
- **Brødtekst:** `Open Sans` eller `Roboto`
- **Fallback:** `sans-serif`

## 🧭 Logo‑retningslinjer

- Bruk logoen på hvit eller marineblå bakgrunn
- Minst **24&nbsp;px** fri sone rundt logoen
- Filformat: **SVG** (foretrukket) eller høyoppløselig **PNG**

## 🌊 Stilretning

- Uttrykk: *maritim minimalisme*
- Bilder: båthavn, vannflater og tauverk
- Ikoner: enkle, strekbaserte ikoner i blåtoner
- Former: avrundede hjørner (4–8&nbsp;px) og myke skygger

## 💻 Implementeringsklar kode

```css
:root {
  --color-primary: #002B45;
  --color-secondary: #59AEDD;
  --color-accent: #E63946;
  --color-neutral: #A9B6C1;
  --color-background: #F4F7F9;

  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Open Sans', sans-serif;
}
```

Variablene over kan benyttes direkte i `styles/theme.css` eller i en Tailwind-konfigurasjon.
