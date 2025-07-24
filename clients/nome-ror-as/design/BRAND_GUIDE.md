# Nomerør Brand Guide

## 1. Logo og bruksanvisning
- **Logo-stil:** Plasseres i øvre venstre hjørne på alle sider.
- **Minimumstørrelse:** Alltid minst 40&nbsp;px høyde for lesbarhet.
- **Trygg sone:** Hold ca. 10&nbsp;px margin til nærmeste element.
- **Farger:** Primærlogo i fullfarge mot hvit bakgrunn. Bruk hvit (negativ versjon) på mørke bakgrunner.

## 2. Fargepalett 🎨
- **Primærfarge:** `#0070C0` – hovedknapper, lenker og CTA.
- **Sekundærfarge:** `#005A9C` – hover-effekter og alternativer.
- **Aksentfarge:** `#FFA000` – visuelle høydepunkter og nødknotter.
- **Bakgrunnsfarge:** `#FFFFFF` – standard hvit layout.
- **Tekstfarge (primary):** `#333333` – hovedtekst.
- **Tekstfarge (secondary):** `#666666` – undertekster/beskrivende tekst.

## 3. Typografi
- **Overskrifter (H1–H3):** `Montserrat`, fet og moderne
  - H1: 36&nbsp;px / bold
  - H2: 30&nbsp;px / bold
  - H3: 24&nbsp;px / semibold
- **Brødtekst:** `Open Sans`, regular 16&nbsp;px / line-height&nbsp;1.6
- **Knapp-tekst:** `Open Sans` semibold 600, 14&nbsp;px / line-height&nbsp;1.5

## 4. Bildestil og grafiske elementer
- **Fotografi:** Naturnære bilder av rør- og vannutstyr i bruk. Toningen skal være nøytral/mild.
- **Ikoner:** Enkle, stiliserte ikoner i én farge (`#0070C0`).
- **Grafisk språk:** Runde former og minimal estetikk i skjemaer og bokser.

## 5. UI-elementer
### Knapper
```scss
.button {
  background-color: #0070C0;
  color: #FFFFFF;
  border-radius: 4px;
  padding: 12px 24px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
}
.button:hover {
  background-color: #005A9C;
}
```
