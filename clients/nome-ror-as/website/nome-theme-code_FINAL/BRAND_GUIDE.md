# BRAND_GUIDE.md – Nomeror.no

## 1. Logo og bruk

- Logoen ligger i `/assets/Hvit.svg`.
- Standard bredde styres av `logo_width` i `config/settings_data.json` (140&nbsp;px).
- Hold minst 24&nbsp;px klaring rundt logoen.
- Bruk den hvite varianten på mørke bakgrunner, og farget versjon på lyse.

## 2. Fargepalett

Fargene hentes fra `config/settings_data.json` (color scheme `scheme-1`).

| Navn                   | HEX       | Bruk                         |
| ---------------------- | --------- | ---------------------------- |
| Bakgrunn               | `#ffffff` | Standard bakgrunnsfarge      |
| Tekst                  | `#000000` | Primær tekstfarge            |
| Primær (knapp)         | `#276da8` | Knapper og lenker            |
| Primær på lys bakgrunn | `#c9e3ef` | Tekst på primærknapper       |
| Skygge                 | `#121212` | Skygger og kontrastelementer |

Eksempel på CSS-variabler:

```scss
--color-primary: #276da8;
--color-secondary: #c9e3ef;
--color-background: #ffffff;
--color-text: #000000;
--color-shadow: #121212;
```
