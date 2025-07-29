# Performance Review

Guidelines for keeping the COMMA site fast and efficient.

## Lighthouse Audit

- [ ] Run Google Lighthouse in Chrome DevTools after major changes
- [ ] Aim for scores above 90 in all categories

## Mobile Responsiveness

- [ ] Test across common breakpoints (320px, 768px, 1024px)
- [ ] Verify tap targets are easily accessible

## Image & Web Font Optimization

- [ ] Compress large images using modern formats (WebP, AVIF)
- [ ] Limit custom font weights and ensure fonts are preloaded when necessary

## Unused Assets

Periodically review loaded scripts and stylesheets to remove anything not in use.

## Automated Lighthouse Checks

The repository includes a GitHub Actions workflow that runs
[Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) on each push and
pull request. The workflow serves the staged theme build and fails if any
category score falls below **90**. Review the `Lighthouse CI` job under the
Actions tab for detailed results.
