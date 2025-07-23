# Contribution Guide

Thank you for taking the time to contribute to **Nesheim & Vatten Consulting**. This document outlines our workflow and expectations so that collaborating is smooth for everyone.

## Branch Naming

- Work from the latest `main` branch.
- Name branches based on the purpose:
  - `feature/<client-name>-<task>` for new features.
  - `fix/<client-name>-<bug-description>` for bug fixes.
  - `docs/<topic>` for documentation updates.
- Keep names short and descriptive. Example:

```bash
git checkout -b feature/nome-ror-add-payment-flow
```

## Pull Request Flow

1. Ensure your branch builds and tests run successfully.
2. Push your branch to your fork or the main repository.
3. Open a Pull Request using `.github/PULL_REQUEST_TEMPLATE.md`.
4. Provide a clear summary and reference any related issues.
5. Request review from the appropriate team members.
6. Address feedback promptly and keep communication on the PR thread.
7. Squash or rebase as needed to maintain a clean history before merging.

## Code Formatting

- Use the existing style in the repository as a guide (2-space indentation for JavaScript).
- Run Prettier or your editor's formatter before committing.
- Keep commits focused and include useful commit messages.
- Ensure `npm test` passes; add tests for new functionality when possible.

## Communication Style

- Be concise, courteous, and welcoming.
- Discussions should remain professional and constructive.
- Use GitHub issues and PR comments for questions or clarifications.
- Refer to our [Code of Conduct](.github/CODE_OF_CONDUCT.md) for community behavior standards.

We appreciate your contributions!
