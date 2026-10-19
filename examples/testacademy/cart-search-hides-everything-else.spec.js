import { test, expect } from '@playwright/test';

test('search narrows the product catalog', async ({ page }) => {
  // Arrange: Open the store.
  await page.goto('/');

  // Act: Search for products containing "tent".
  await page.getByTestId('search-input').fill('tent');

  // Assert: Exactly one product remains.
  const productCards = page.getByTestId('product-card');
  await expect(productCards).toHaveCount(1);

  // Assert: The matching product is Alpine Tent 2P.
  await expect(productCards.first()).toContainText('Alpine Tent 2P');
});
