# QA Automation Learning

A hands-on portfolio documenting my progress toward becoming a QA Automation Engineer, using JavaScript, Playwright, API testing, and CI.

> I use this repository to practise, document what I learn, and build a foundation for maintainable automated tests. Learning exercises are kept separate from the main test suite when they depend on an external practice application.

## What I'm learning

- **Testing fundamentals** — test levels, regression, smoke, and meaningful assertions
- **JavaScript for test automation** — functions, objects, arrays, async/await, and modules
- **Playwright UI testing** — locators, actions, assertions, forms, fixtures, and browser automation
- **API testing** — HTTP requests, response assertions, negative cases, authentication, and schema validation
- **Test design** — data-driven tests, reusable helpers, fixtures, and configuration
- **Quality engineering workflow** — Git, readable documentation, and CI with GitHub Actions

## Repository guide

| Path | What's inside |
|---|---|
| `tests/` | Playwright UI and API practice tests |
| `fixtures/` | Reusable Playwright test fixtures |
| `utils/` | Shared helpers and configuration |
| `docs/` | Learning notes and documented external exercises |
| `examples/testacademy/` | Playwright code for TestAcademy exercises (kept outside the default test suite) |
| `lesson*.js` | JavaScript learning exercises |
| `.github/workflows/` | GitHub Actions workflow |
| `playwright.config.js` | Playwright test-runner configuration |

## Getting started

### Requirements

- Node.js (LTS recommended)
- npm

### Install dependencies

```bash
npm ci
npx playwright install
```

### Run the tests

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/locators.spec.js
```

Open the HTML report after a test run:

```bash
npx playwright show-report
```

Some API tests may require environment configuration. Check the relevant test and configuration before running them; never commit real credentials or tokens. Use `.env.example` as a guide for environment variables.

## Learning notes

- [Fix the wrong selector — TestAcademy locator exercise](docs/testacademy/fix-wrong-selector.md)
- [Fix the wrong assertion — TestAcademy forms and validation exercise](docs/testacademy/fix-wrong-assertion.md)
- [Prove the login checks the password — TestAcademy exercise](docs/testacademy/login-actually-checks-the-password.md)
- [Replace the positional selector — TestAcademy locator exercise](docs/testacademy/refactor-positional-add-to-cart.md)
- [Assert the cart badge updates — TestAcademy assertion exercise](docs/testacademy/assert-cart-badge-updates.md)
- [Prove the empty login form is validated — TestAcademy exercise](docs/testacademy/empty-login-form-validation.md)
- [Assert the wrong-password error — TestAcademy exercise](docs/testacademy/assert-wrong-password-error.md)
- [Fix the wrong expected count — TestAcademy exercise](docs/testacademy/fix-wrong-expected-count.md)

### Exercise code

- [Fix the wrong selector — Playwright code](examples/testacademy/fix-wrong-selector.spec.js)
- [Fix the wrong assertion — Playwright code](examples/testacademy/fix-wrong-assertion.spec.js)
- [Prove the login checks the password — Playwright tests](examples/testacademy/login-actually-checks-the-password.spec.js)
- [Replace the positional selector — Playwright code](examples/testacademy/refactor-positional-add-to-cart.spec.js)
- [Assert the cart badge updates — Playwright code](examples/testacademy/assert-cart-badge-updates.spec.js)
- [Prove the empty login form is validated — Playwright code](examples/testacademy/empty-login-form-validation.spec.js)
- [Assert the wrong-password error — Playwright code](examples/testacademy/assert-wrong-password-error.spec.js)
- [Fix the wrong expected count — Playwright code](examples/testacademy/fix-wrong-expected-count.spec.js)

## How I approach testing

1. Understand the behaviour the test is meant to protect.
2. Choose a locator and assertion that actually verify that behaviour.
3. Keep tests independent and avoid arbitrary sleeps.
4. Investigate failures rather than weakening assertions just to make a test pass.
5. Document the reason behind a decision, not only the code.

## Roadmap

- [x] Start a JavaScript and Playwright learning repository
- [x] Practise UI locators and assertions
- [x] Explore API testing, fixtures, and reusable helpers
- [ ] Deepen JavaScript async/await and debugging skills
- [ ] Improve test isolation and flaky-test diagnosis
- [ ] Add a focused, end-to-end portfolio project
- [ ] Review CI results and publish clear project documentation

This roadmap reflects an ongoing learning process; check the linked code and GitHub Actions results for the current state.

## About

I'm documenting my progress through practical exercises and small projects. The goal is to understand why tests work, what they verify, and how to keep them reliable—not just to collect passing test runs.
