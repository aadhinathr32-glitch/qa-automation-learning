# Assert the Cart Badge Updates — TestAcademy

**Topic:** State across pages  
**Level:** 1  
**Framework:** Playwright  
**Exercise:** [Assert the cart badge updates](https://testacademy.dev/problems/fill-cart-badge)

## Goal

The test already adds a product to the cart, but without an assertion it does not prove that the cart changed. Add an assertion that verifies the badge changes from `0` to `1`.

## Playwright test

```js
import { test, expect } from '@playwright/test';

test('adding a product updates the cart badge', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('add-to-cart').first().click();

  // Verify the cart badge changes from 0 to 1.
  await expect(page.getByTestId('cart-count')).toHaveText('1');
});
```

## Why the assertion matters

- The click performs the action, but does not prove its result.
- `getByTestId('cart-count')` locates the cart badge.
- `toHaveText('1')` verifies the expected outcome after adding one product.

## What I learned

The assertion is the test. Setup and actions prepare the scenario, but the assertion proves the expected behaviour and catches regressions.

## Scope and reproducibility

This is a learning example for TestAcademy's hosted Terra Supply practice app. It is stored outside the default Playwright test suite because the hosted app and its root route are provided by the exercise environment. This example has not been independently executed from this repository's CI.
