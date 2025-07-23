# Contribution Guide

Thank you for contributing to **Nesheim & Vatten Consulting**. This guide outlines the workflow we follow for new code and documentation changes.

## Branch Naming

- Start from the latest `main` branch.
- Prefix your branch with the type of work:
  - `feature/<client>-<short-task>` for new features.
  - `fix/<client>-<bug>` for bug fixes.
  - `docs/<topic>` for documentation improvements.
- Keep names short and use dashes to separate words.

Example:

```bash
git checkout -b feature/nome-ror-add-payment-flow
```

## Pull Request Flow

1. Ensure `npm install` has run and tests pass with `npm test`.
2. Check code style by running `npm run lint`.
3. Push your branch to the repository.
4. Open a Pull Request using `.github/PULL_REQUEST_TEMPLATE.md`.
5. Summarise your changes clearly and reference any relevant issues.
6. Request reviews from the team and respond to feedback directly in the PR.
7. Once approved, a maintainer will merge your changes.

## Code Formatting

- Use the existing style as a reference. JavaScript uses 2 spaces and CSS follows the Stylelint config.
- Run your editor's formatter or Prettier before committing.
- Keep commits focused, with descriptive messages in English.
- Test and lint before pushing.

## Communication Style

- Keep all discussion in English on the PR or issue threads.
- Be concise, helpful, and respectful.
- If you are unsure about something, ask questions in the PR comments.
- See our [Code of Conduct](.github/CODE_OF_CONDUCT.md) for behaviour guidelines.

We appreciate your contributions and look forward to collaborating!
