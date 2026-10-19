# The Cart Badge Lies — TestAcademy

**Topic:** State across pages  
**Level:** 2  
**Framework:** Playwright  
**Exercise:** [The cart badge lies](https://testacademy.dev/problems/cart-badge-and-feedback)

## Goal

Add a product to the Terra Supply cart and prove both observable outcomes required by the exercise:

1. The cart badge changes from `0` to `1`.
2. A confirmation toast appears.

These are separate behaviours, so the test should assert both rather than checking only the badge.

## Playwright test

```js
import { test, expect } from '@playwright/test';

test('adding a product updates the cart badge and confirms it', async ({ page }) => {
  // Arrange: Open the store and confirm the cart starts empty.
  await page.goto('/');
  await expect(page.getByTestId('cart-count')).toHaveText('0');

  // Act: Add the first product to the cart.
  await page.getByTestId('add-to-cart').first().click();

  // Assert: The cart badge updates.
  await expect(page.getByTestId('cart-count')).toHaveText('1');

  // Assert: A confirmation toast appears.
  await expect(page.getByTestId('toast')).toBeVisible();
});
```

## Why both assertions matter

- The initial assertion confirms the cart starts at `0`.
- The next assertion checks that adding one product changes the badge to `1`.
- The toast assertion checks that the user receives confirmation.
- Checking only one outcome could miss a regression in the other.

## What I learned

One action can produce several observable effects. A strong test asserts every user-visible result that matters, not only the most convenient one.

## Scope and reproducibility

This is a learning example for TestAcademy's hosted Terra Supply practice app. It is kept outside the default Playwright suite because the hosted app and its root route are provided by the exercise environment. The code is documented from the completed exercise and has not been independently run in this repository's CI.
