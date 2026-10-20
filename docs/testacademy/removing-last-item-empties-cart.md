# Removing an Item Has to Remove It — TestAcademy

**Topic:** State across pages  
**Level:** 2  
**Framework:** Playwright  
**Exercise:** [Removing an item has to remove it](https://testacademy.dev/problems/removing-the-last-item-empties-the-cart)

## Goal

Add one product to the Terra Supply cart, open the cart, remove the item, and prove that the cart is genuinely empty. The test must catch a regression where clicking Remove silently does nothing.

## Playwright test

```js
import { test, expect } from '@playwright/test';

test('removing the last item empties the cart', async ({ page }) => {
  // Arrange: Open the shop and add one product.
  await page.goto('/');
  await page.getByTestId('add-to-cart').first().click();

  // Act: Open the cart and remove the item.
  await page.getByTestId('cart-link').click();
  await page.getByTestId('remove-item').click();

  // Assert: The cart is genuinely empty.
  await expect(page.getByTestId('cart-item')).toHaveCount(0);
  await expect(page.getByTestId('empty-cart')).toBeVisible();
});
```

## Why both assertions matter

- `toHaveCount(0)` verifies that no cart item remains.
- `toBeVisible()` verifies that the app displays its empty-cart state.
- Together, these checks make the test less likely to pass if the remove action does nothing or leaves a misleading UI state.

## What I learned

A test can appear to exercise a delete action without actually proving deletion. Assert the resulting state, not merely that the button was clicked.

## Scope and reproducibility

This is a learning example for TestAcademy's hosted Terra Supply practice app. It is kept outside the default Playwright suite because the hosted app and its root route are provided by the exercise environment. The code is documented from the completed exercise and has not been independently run in this repository's CI.
