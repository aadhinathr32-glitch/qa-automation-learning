# The Cart Makes Four Promises — TestAcademy

**Topic:** State across pages  
**Level:** 2  
**Framework:** Playwright  
**Exercise:** [The cart makes four promises](https://testacademy.dev/problems/cart-keeps-every-promise)

## Goal

Add the Trail Runner Backpack to the Terra Supply cart, change its quantity, then remove it. The test proves all four user-visible behaviours from the exercise:

1. The cart badge counts the item.
2. A confirmation message appears after adding it.
3. The subtotal doubles when the quantity changes to two.
4. Removing the item leaves the cart empty.

## Playwright test

```js
import { test, expect } from '@playwright/test';

test('the cart handles an item end to end', async ({ page }) => {
  // Arrange: open the shop and confirm the cart starts empty
  await page.goto('/');
  await expect(page.getByTestId('cart-count')).toHaveText('0');

  // Act 1: add the Trail Runner Backpack
  await page.getByTestId('add-to-cart').first().click();

  // Assert 1: the cart badge updates
  await expect(page.getByTestId('cart-count')).toHaveText('1');

  // Assert 2: the confirmation toast appears
  await expect(page.getByTestId('toast')).toBeVisible();

  // Act 2: open the cart and increase quantity to 2
  await page.getByTestId('cart-link').click();
  await page.getByTestId('qty-increase').click();

  // Assert 3: quantity is 2 and subtotal is twice the $89 price
  await expect(page.getByTestId('item-qty')).toHaveText('2');
  await expect(page.getByTestId('cart-subtotal')).toContainText('178');

  // Act 3: remove the item
  await page.getByTestId('remove-item').click();

  // Assert 4: the cart is genuinely empty
  await expect(page.getByTestId('empty-cart')).toBeVisible();
  await expect(page.getByTestId('cart-item')).toHaveCount(0);
});
```

## Why this test is stronger

- It checks multiple user-visible promises rather than only one outcome.
- It verifies the quantity and subtotal together, catching a subtotal calculation that ignores quantity.
- It checks both the empty-cart message and the absence of cart items after removal.

## What I learned

A single user journey can contain several independent behaviours. Test each important promise so a regression in one part cannot hide behind another passing assertion.

## Scope and reproducibility

This is a learning example for TestAcademy's hosted Terra Supply practice app. It is kept outside the default Playwright test suite because the hosted app and its root route are provided by the exercise environment. The code is recorded from the completed exercise and has not been independently run in this repository's CI.
