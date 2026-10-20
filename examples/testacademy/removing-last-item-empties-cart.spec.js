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
