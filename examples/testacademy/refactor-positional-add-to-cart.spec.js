import { test, expect } from '@playwright/test';

test('adding a product updates the cart badge', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('add-to-cart').click();

  await expect(page.getByTestId('cart-count')).toHaveText('1');
});
