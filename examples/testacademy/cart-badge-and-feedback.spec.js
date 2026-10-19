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
