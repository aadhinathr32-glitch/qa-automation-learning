# Fix the Wrong Selector — TestAcademy

**Topic:** Playwright locators  
**Exercise:** [Fix the wrong selector](https://testacademy.dev/problems/fix-search-wrong-selector)

## Scenario

The test searches the PipelineHQ Contacts page for `Maya` and expects the filtered contact list to contain one row. The original locator used `contact-line`, which does not match an element in the practice application, so the assertion times out.

## Corrected selector

The exercise states that each contact row uses `data-testid="contact-row"`. The corrected assertion is:

```js
await expect(page.getByTestId('contact-row')).toHaveCount(1);
```

The full test shown in the exercise is:

```js
import { test, expect } from '@playwright/test';

test('search narrows the contact list', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Search contacts').fill('Maya');

  await expect(page.getByTestId('contact-row')).toHaveCount(1);
});
```

## Why this fixes the problem

- `getByTestId('contact-row')` targets the row elements identified by the application's test ID.
- The assertion checks the behaviour that matters: after searching for Maya, exactly one matching row remains.
- The fix changes the incorrect locator without weakening or removing the assertion.

## What I learned

A test can execute without testing the intended behaviour if it targets the wrong element. Before changing a failing test, inspect the DOM and confirm that the locator matches the element the test is supposed to verify.

## Scope and reproducibility

This is a documented exercise from TestAcademy's hosted practice application. The code is included as a learning reference; it is **not part of this repository's default Playwright suite**, because the hosted application and its root route are provided by the exercise environment.
