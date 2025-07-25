# Contributing to Nesheim & Vatten Consulting

We welcome contributions! This guide explains our workflow.

## Branch strategy
- Base all work on `main`.
- Create feature branches using `feature/<short-description>` or bug fixes using `fix/<short-description>`.
- Keep each branch focused on a single change.

## Pull Request process
1. Rebase your branch on the latest `main` before opening the PR.
2. Use clear, imperative commit messages.
3. Push your branch and open a PR.
4. Request review from a project maintainer.
5. At least one approval is required before merging.
6. Prefer squash merging through GitHub.

## Local checks
Install dependencies and run linters and tests before opening a PR:

```bash
npm install
npm run lint
npm test
```

Thank you for contributing!
