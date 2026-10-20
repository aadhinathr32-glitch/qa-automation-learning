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
