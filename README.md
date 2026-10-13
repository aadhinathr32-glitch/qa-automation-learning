# qa-automation-learning
My journey learning QA automation with JavaScript, Playwright, API testing, and test automation frameworks.

## Testing Fundamentals

This section documents the core testing concepts I'm learning as part of my QA automation journey.

### Types of Testing by Scope

| Testing Type | Purpose | Example |
|---|---|---|
| Unit Testing | Tests an individual function or component in isolation. | Verify a discount calculation function. |
| Integration Testing | Verifies that multiple components work together. | Verify that saving a contact creates the expected database record. |
| API Testing | Tests server endpoints directly without using a browser. | Send a POST request and validate the response status and JSON body. |
| End-to-End (E2E) Testing | Validates a complete user journey through the application. | Log in through the browser and verify dashboard navigation. |

### Types of Testing by Purpose

- **Smoke Testing:** Checks whether the application's critical functionality works after a build or deployment.
- **Regression Testing:** Verifies that existing functionality continues to work after changes.
- **Acceptance Testing:** Checks whether a feature satisfies its business requirements.

### Choosing the Right Test Level

Prefer the cheapest test level that can reliably detect the defect.

For example, if a calculation defect can be caught by a unit test, a browser-based end-to-end test is usually unnecessarily expensive. E2E tests are valuable for critical user journeys that require several parts of the application to work together.

### Key Learning

Automated tests verify defined expectations. Choosing the appropriate testing level helps make a test suite faster, more reliable, and easier to maintain.