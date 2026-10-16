# Fix the Wrong Expected Count — TestAcademy

**Topic:** State across pages  
**Level:** 1  
**Framework:** Playwright  
**Exercise:** [Fix the wrong expected count](https://testacademy.dev/problems/fix-badge-expected-value)

## Goal

Add one product to the Terra Supply cart and verify that the cart badge reads `1`. The failing test expected `2`, even though only one product was added. Correct the expected value without removing the assertion.

## Playwright test

```js
import { test, expect } from '@playwright/test';

test('adding one product makes the badge read 1', async ({ page }) => {
  // Arrange: Open the Terra Supply store.
  await page.goto('/');

  // Act: Add one product to the cart.
  await page.getByTestId('add-to-cart').first().click();

  // Assert: The cart badge shows exactly one item.
  await expect(page.getByTestId('cart-count')).toHaveText('1');
});
```

## Why this is correct

- The test adds exactly one product.
- The cart badge is expected to display `1`, not `2`.
- The assertion remains in place, so the test still verifies the application's behaviour.

## What I learned

A failing test does not always mean the application is broken. Check the scenario and expected result before changing the code. Correct the assertion's expected value rather than deleting or weakening the assertion.

## Scope and reproducibility

This is a learning example for TestAcademy's hosted Terra Supply practice app. It is stored outside the default Playwright suite because the hosted app and its root route are provided by the exercise environment. The code is documented from the completed exercise and has not been independently run in this repository's CI.
