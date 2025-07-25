# Nesheim & Vatten Consulting

_Crafting brand, sales, design and online store solutions with clarity and impact._

## About

Nesheim & Vatten delivers strategic consulting and creative services covering:

- **Brand strategy & visual identity**
- **Sales enablement & funnels**
- **Graphic design & digital assets**
- **Website building & e‑commerce setup**

## Repository Structure

- `clients/` – project files per client
- `docs/` – brand assets, case studies and marketing material
- `tools/` – automation scripts
- `templates/` – reusable templates
- `tests/` – automated tests
- `archive/` – outdated or archived resources


## Installation

```bash
npm install
```

## Development

Run linters and tests with:

```bash
npm run lint
npm run format
npm test
```
To preview the website locally, run:
```bash
npm run dev
```

## Verktøy og versjonshåndtering

### Node-versjonshåndtering

Dette prosjektet bruker `.nvmrc` til å spesifisere Node-versjon (18.20.8).

For utviklere som bruker [`mise`](https://github.com/jdx/mise), anbefales det å kjøre følgende én gang for å unngå advarsler:

```bash
mise settings add idiomatic_version_file_enable_tools node
```

## Contributing

## License

This project is licensed under the [MIT License](LICENSE).

Additional information about automation tools is available in [docs/AGENTS.md](docs/AGENTS.md).
Release notes can be found in [docs/CHANGELOG.md](docs/CHANGELOG.md).
