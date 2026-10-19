# Prove the Search Hides the Rest — TestAcademy

**Topic:** Locators  
**Level:** 2  
**Framework:** Playwright  
**Exercise:** [Prove the search hides the rest](https://testacademy.dev/problems/cart-search-hides-everything-else)

## Goal

Search the Terra Supply catalog for `tent` and prove that the list is genuinely filtered. The exercise says there are eight products and exactly one matches `tent`. Merely asserting that Alpine Tent 2P is visible would still pass if all eight products remained on screen.

## Playwright test

```js
import { test, expect } from '@playwright/test';

test('search narrows the product catalog', async ({ page }) => {
  // Arrange: Open the store.
  await page.goto('/');

  // Act: Search for products containing "tent".
  await page.getByTestId('search-input').fill('tent');

  // Assert: Exactly one product remains.
  const productCards = page.getByTestId('product-card');
  await expect(productCards).toHaveCount(1);

  // Assert: The matching product is Alpine Tent 2P.
  await expect(productCards.first()).toContainText('Alpine Tent 2P');
});
```

## Why both assertions matter

- `toHaveCount(1)` proves the other seven product cards are no longer shown.
- `toContainText('Alpine Tent 2P')` verifies the remaining product is the expected match.
- Checking only the matching product's visibility would not prove that search filters the rest of the catalog.

## What I learned

Finding the item you searched for proves nothing about filtering by itself. Verify that non-matching results disappear as well.

## Scope and reproducibility

This is a learning example for TestAcademy's hosted Terra Supply practice app. It is kept outside the default Playwright suite because the hosted app and its root route are provided by the exercise environment. The code is documented from the completed exercise and has not been independently run in this repository's CI.
