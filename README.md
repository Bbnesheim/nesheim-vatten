# COMMA. Repository

This repository contains all brand assets, artist materials and platform code for **COMMA.**, an independent electronic music label. It is maintained by the COMMA. team in collaboration with Nesheim & Vatten Consulting.

## Purpose
- Centralise documentation for marketing, design and releases
- Provide source code for comma-records.com and related integrations
- Track tasks and planning for upcoming releases

## Key Folders
- `clients/comma/artists/` – artist profiles and EPKs
- `clients/comma/brand-assets/` – logos, fonts and style guides
- `clients/comma/content/` – blog posts and newsletter drafts
- `clients/comma/platforms/` – integrations with Shopify and social channels
- `clients/comma/releases/` – release metadata and assets
- `docs/` – internal guidelines and changelogs
- `apps/next/` – minimal Next.js demo for Båttilsyn

## Roadmap Overview
Current focus is on launching the next website iteration and finalising release COMMA.006. See `clients/comma/strategy/` for detailed plans.

## Installation
```bash
npm install
```

## Development
```bash
npm run lint:js
npm run lint
eslint --fix
npm run format
npm test
```
Local previews are served via Shopify CLI or any static server from the `themes/comma/website/` folder.

## Team
This repository is primarily maintained by the COMMA. label crew with support from Nesheim & Vatten Consulting for technical operations.

## Contributing
Please read [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) before submitting pull requests.

## License
MIT – see [LICENSE](LICENSE).
