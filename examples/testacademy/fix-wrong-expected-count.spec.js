import { test, expect } from '@playwright/test';

test('adding one product makes the badge read 1', async ({ page }) => {
  // Arrange: Open the Terra Supply store.
  await page.goto('/');

  // Act: Add one product to the cart.
  await page.getByTestId('add-to-cart').first().click();

  // Assert: The cart badge shows exactly one item.
  await expect(page.getByTestId('cart-count')).toHaveText('1');
});
