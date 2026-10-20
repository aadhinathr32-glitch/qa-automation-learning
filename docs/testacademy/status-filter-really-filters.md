# Prove the Status Filter Filters — TestAcademy

**Topic:** Tables and lists  
**Level:** 2  
**Framework:** Playwright  
**Exercise:** [Prove the status filter filters](https://testacademy.dev/problems/status-filter-really-filters)

## Goal

Filter PipelineHQ contacts to `Customer` and prove the table really narrows. The exercise states that eight seeded contacts include four Customers. Checking only that a Customer badge is visible would still pass if the filter were ignored.

## Playwright test

```js
import { test, expect } from '@playwright/test';

test('the status filter shows only customers', async ({ page }) => {
  await page.goto('/');

  // Arrange: select Customer status.
  await page.getByTestId('status-filter').selectOption('Customer');

  // Assert: exactly four contacts remain.
  const rows = page.getByTestId('contact-row');
  await expect(rows).toHaveCount(4);

  // Assert: every remaining row shows Customer status.
  for (let i = 0; i < 4; i++) {
    await expect(rows.nth(i)).toContainText('Customer');
  }
});
```

## Why both assertions matter

- `toHaveCount(4)` checks that the table narrowed from eight contacts to the four expected Customers.
- The loop verifies that each remaining row contains the `Customer` status.
- Together, these checks catch a filter that is ignored or leaves non-Customer contacts visible.

## What I learned

When testing a filter, count the expected rows and verify their contents. A single matching badge does not prove that non-matching rows disappeared.

## Scope and reproducibility

This is a learning example for TestAcademy's hosted PipelineHQ practice app. It is kept outside the default Playwright test suite because the hosted app and its root route are provided by the exercise environment. The code is documented from the completed exercise and has not been independently run in this repository's CI.
