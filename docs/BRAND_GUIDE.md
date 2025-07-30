# Nesheim & Vatten Brand Guide

## Intro / Purpose
This guide documents the visual identity of **Nesheim & Vatten Consulting** as implemented on `nesheimvatten.no`. All values are sourced from the repository Shopify theme files under `themes/`.

## Logo
Logos are stored in `docs/brand-assets/logo/`.

- Use `Full Logo.svg` as the primary logo and `Square Logo.svg` when space is limited.
- Maintain at least 24&nbsp;px clear space around the logo.
- Minimum recommended logo height is 40&nbsp;px.
- Two color versions exist: dark (#303232) and blue (#5f70b1). Use the white version on dark backgrounds.

## Color Palette
The theme defines several color schemes. Core brand colors are extracted from `config/settings_data.json`:

| Name       | Hex       | RGB            | Usage                             |
|------------|-----------|----------------|-----------------------------------|
| Primary    | `#2346b6` | `35 70 182`    | Buttons and highlights            |
| Secondary  | `#323230` | `50 50 48`     | Dark backgrounds                  |
| Accent     | `#5f70b1` | `95 112 177`   | Links and secondary buttons       |
| Text       | `#303232` | `48 50 50`     | Main text                         |
| Background | `#ffffff` | `255 255 255`  | Page background                   |

## Typography
Font information is defined via the theme `type_header_font` and `type_body_font` settings.

| Element      | Font family                                   | Weight | Example size |
|--------------|-----------------------------------------------|--------|--------------|
| Headings     | `Futura`, `Arial`, sans-serif                 | 400    | `h1` 3.3–4.4rem |
| Body text    | `Ubuntu`, `Arial`, sans-serif                 | 400    | `1.5rem`       |

Heading scale is set to 110% and body scale to 100%. Approximate sizes:

```
H1: 3.3rem (4.4rem on desktop)
H2: 2.2rem (2.64rem on desktop)
H3: 1.87rem (1.98rem on desktop)
H4: 1.65rem
H5: 1.32rem (1.43rem on desktop)
H6: 1rem
Body: 1.5rem
```

## UI Components
Key component styles use CSS custom properties from `theme.liquid`.

### Button
```css
.button {
  background-color: rgba(var(--color-button), var(--alpha-button-background));
  color: rgb(var(--color-button-text));
  border-radius: var(--buttons-radius);
  padding: 0 3rem;
  min-height: calc(4.5rem + var(--buttons-border-width) * 2);
}
.button:hover::after {
  box-shadow: 0 0 0 calc(var(--buttons-border-width) + 1px)
      rgba(var(--color-button), var(--alpha-button-background));
}
```

### Link
```css
.link {
  text-decoration: underline;
  color: rgb(var(--color-link));
}
```

### Input
```css
.field__input {
  background-color: rgb(var(--color-background));
  color: rgb(var(--color-foreground));
  border-radius: var(--inputs-radius);
  box-shadow: 0 0 0 var(--inputs-border-width)
      rgba(var(--color-foreground), var(--inputs-border-opacity));
}
```

### Card
```css
.card {
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-horizontal-offset) var(--shadow-vertical-offset)
      var(--shadow-blur-radius) rgba(var(--color-shadow), var(--shadow-opacity));
  background: rgb(var(--color-background));
}
```

## Iconography & Images
Use simple line icons in the same color as body text. Images should have a neutral tone and maintain sufficient contrast.

## Tone-of-Voice
Communication should be professional and concise with an action-oriented focus. Avoid jargon and excessive emojis.

## Design Tokens
Tokens defined in `styles/modules/tokens.css`:
```css
:root {
  --color-primary: #2346b6;
  --color-secondary: #323230;
  --color-accent: #5f70b1;
  --color-text: #303232;
  --color-background: #ffffff;
  --font-heading: 'Futura', Arial, sans-serif;
  --font-body: 'Ubuntu', Arial, sans-serif;
}
```
