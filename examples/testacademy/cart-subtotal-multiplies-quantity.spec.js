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
