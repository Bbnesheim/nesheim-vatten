# baattilsyn.no

Dette prosjektet inneholder alle filer til nettsiden **baattilsyn.no**.
Versjon 2 av nettstedet ligger i mappen `website/baattilsyn.no/` og består av
rene HTML-sider. Den tidligere utgaven ligger i `website/baattilsyn-website-v1/`.

```
clients/baattilsyn/
├── contracts/
├── deliverables/
├── design/
├── meetings/
├── strategy/
└── website/
    ├── baattilsyn.no/            # gjeldende nettside (website_v2)
    └── baattilsyn-website-v1/    # tidligere versjon
```

## Lokalt oppsett

Installer avhengigheter og start en enkel server for forhåndsvisning:

```bash
npm install         # første gang
npx http-server website/baattilsyn.no
```

## Innhold i `website/baattilsyn.no`

- `index.html`
- `tjenester.html`
- `kontakt-oss.html`
