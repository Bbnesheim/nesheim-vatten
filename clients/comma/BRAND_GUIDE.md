# BRAND_GUIDE.md – COMMA

## 1. Logo og bruk
- Logo-filer ligger under `brand-assets/logo/`.
- Anbefalt plassering i nettsiden: `website/comma-website_v2/assets/`.
- Hold minst 24 px klaring rundt logoen for god lesbarhet.
- Negativ/positiv bruk avhenger av fremtidig design; ingen fargeversjoner definert.

## 2. Fargepalett
Prosjektet inneholder ingen egendefinerte farger. Siden bruker standard hvit bakgrunn og svart tekst.

```scss
body {
    font-family: 'Inter', Arial, sans-serif;
    margin: 0;
    padding: 2rem;
}
```

- Primær: ikke definert
- Sekundær: ikke definert
- Bakgrunn: `#ffffff`
- Tekst: `#000000`
- Aksent: ikke definert

## 3. Typografi
- Fontfamilie: `Inter, Arial, sans-serif`【F:clients/comma/website/comma-website_v2/assets/base.css†L240-L248】
- Ingen eksplisitte størrelser for overskrifter eller brødtekst utover nettleserens standardverdier.

```css
body {
    font-family: 'Inter', Arial, sans-serif;
}
```

## 4. Komponentstil
- Ingen knapper eller input-felt er implementert ennå.
- Nettstedet består kun av en overskrift og et avsnitt.

## 5. Bildebruk og media
- Logoen er lagret som `brand-assets/logo/comma-logo.svg`. Ingen øvrige bilder eller media ligger i repoet.

## 6. Layout og spacing
- `body` har `padding: 2rem` som eneste spacing-regel.
- Ingen grid- eller flex-system er tatt i bruk.
- Ingen definerte breakpoints for mobil/tablet/desktop.

## 7. Ikoner og grafiske elementer
- Ingen ikonsett eller andre grafiske elementer finnes i kodebasen.
