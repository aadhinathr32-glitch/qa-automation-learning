import { test, expect } from '@playwright/test';

test('adding a product updates the cart badge', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('add-to-cart').first().click();

  // Verify the cart badge changes from 0 to 1.
  await expect(page.getByTestId('cart-count')).toHaveText('1');
});
