# Repository Status Report

**Up-to-date**
- Website code under `themes/comma/website/` reflects current production version.
- Release metadata through COMMA.005 is complete.
- Documentation in `README.md` files refreshed July 2025.

**Needs Work**
- Legacy folders `comma-website-v1` and `comma-website_v1` have been removed; `comma-website_v2` contains the current theme.
- Upcoming release COMMA.006 requires metadata.

**Recommendations**
- Remove empty folders or move to an archive branch.
- Align website folder naming to use hyphen consistently.
- Expand SEO content and blog drafts for better search visibility.

**Empty or Placeholder Directories**
No empty COMMA folders remain.

## Website Assets Overview

There are 32 JavaScript modules under `themes/website-v1/assets`. Prior to
this update only four of them had automated tests. Additional Jest tests now
cover `details-modal.js` and `pubsub.js`, but most modules remain untested.

Attempting to run `npm run build` followed by `npx webpack-bundle-analyzer
dist/assets/bundle-stats.json` failed in this environment because webpack and its
dependencies were not installed. Bundle size information could therefore not be
generated.
