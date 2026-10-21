# The Subtotal Forgets the Quantity — TestAcademy

**Topic:** State across pages  
**Level:** 3  
**Framework:** Playwright  
**Exercise:** [The subtotal forgets the quantity](https://testacademy.dev/problems/cart-subtotal-counts-quantity)

## Goal

Add the Trail Runner Backpack ($89) to the Terra Supply cart, increase its quantity to three, and prove that the subtotal is $267.

The important test-design detail is to use a quantity greater than one. If the test leaves the quantity at one, a subtotal calculation that ignores quantity can still appear correct.

## Playwright test

```js
import { test, expect } from '@playwright/test';

test('subtotal multiplies price by quantity', async ({ page }) => {
  // Arrange: open the shop and add the backpack
  await page.goto('/');
  await page.getByTestId('add-to-cart').first().click();
  await page.getByTestId('cart-link').click();

  // Act: increase quantity from 1 to 3
  await page.getByTestId('qty-increase').click();
  await page.getByTestId('qty-increase').click();

  // Assert: quantity is 3 and subtotal is $267
  await expect(page.getByTestId('item-qty')).toHaveText('3');
  await expect(page.getByTestId('cart-subtotal')).toContainText('267');
});
```

## Why this test data matters

- The backpack costs $89 each.
- Increasing the quantity from one to three means the expected subtotal is $89 × 3 = $267.
- Asserting both the quantity and subtotal helps expose a bug where the subtotal charges for only one item.

## What I learned

Test data should make a defect visible. A quantity of one cannot distinguish between a correct multiplication calculation and a subtotal that simply repeats the unit price.

## Scope and reproducibility

This is a learning example for TestAcademy's hosted Terra Supply practice app. It is kept outside the default Playwright test suite because the hosted app and its root route are provided by the exercise environment. The code is documented from the completed exercise and has not been independently run in this repository's CI.
