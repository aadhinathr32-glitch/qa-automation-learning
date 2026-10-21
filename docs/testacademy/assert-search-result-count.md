# Assert the Search Result Count — TestAcademy

**Topic:** Tables and lists  
**Level:** 2  
**Framework:** Playwright  
**Exercise:** [Assert the search result count](https://testacademy.dev/problems/fill-contact-count)

## Goal

Search the PipelineHQ contact list for `Maya` and prove that the table narrows to exactly one row. Checking only that “Maya Chen” appears is not enough: the search could leave other contacts visible and the test might still pass.

## Playwright test

```js
import { test, expect } from '@playwright/test';

test('search narrows the contact list', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Search contacts').fill('Maya');

  // Assert that exactly one contact row remains.
  await expect(page.getByTestId('contact-row')).toHaveCount(1);
});
```

## Why the count assertion matters

- `getByPlaceholder('Search contacts').fill('Maya')` enters the search term.
- `toHaveCount(1)` proves that exactly one contact row remains after filtering.
- An assertion that only checks for the matching person's name could pass even if the search did not remove other rows.

## What I learned

To prove that a search filters correctly, assert the number of matching rows—not just that a matching result is visible.

## Scope and reproducibility

This is a learning example for TestAcademy's hosted PipelineHQ practice app. It is kept outside the default Playwright test suite because the hosted app and its root route are provided by the exercise environment. The code is documented from the completed exercise and has not been independently run in this repository's CI.
```
