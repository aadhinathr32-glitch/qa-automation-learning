# Prove the Search Actually Filters — TestAcademy

**Topic:** Tables and lists  
**Level:** 2  
**Framework:** Playwright  
**Exercise:** [Prove the search actually filters](https://testacademy.dev/problems/contact-search-really-filters)

## Goal

Search PipelineHQ contacts for `Maya` and prove the table is genuinely filtered. Checking only that `Maya Chen` is present is insufficient because all eight contacts could still be displayed if search were ignored.

## Playwright test

```js
import { test, expect } from '@playwright/test';

test('search filters the contacts table', async ({ page }) => {
  // Arrange: Open the contacts page.
  await page.goto('/');

  // Act: Search for Maya.
  await page.getByPlaceholder('Search contacts').fill('Maya');

  // Assert: Only the matching contact remains.
  const contactRows = page.getByTestId('contact-row');
  await expect(contactRows).toHaveCount(1);
  await expect(contactRows).toContainText('Maya Chen');
});
```

## Why both assertions matter

- `toHaveCount(1)` proves the table has narrowed to one row rather than still showing every contact.
- `toContainText('Maya Chen')` verifies that the remaining row is the expected match.
- Together, the assertions verify both the result and the filtering behaviour.

## What I learned

Asserting that a matching item is present does not prove filtering works. A robust test also verifies that non-matching items have disappeared.

## Scope and reproducibility

This is a learning example for TestAcademy's hosted PipelineHQ practice app. It is kept outside the default Playwright suite because the hosted app and its root route are provided by the exercise environment. The code is documented from the completed exercise and has not been independently run in this repository's CI.
