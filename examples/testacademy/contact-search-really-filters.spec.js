import { test, expect } from '@playwright/test';

test('search filters the contacts table', async ({ page }) => {
  // Arrange: Open the contacts page.
  await page.goto('/');

  // Act: Search for Maya.
  await page.getByPlaceholder('Search contacts').fill('Maya');

  // Assert: Only the matching contact remains.
  const contactRows = page.getByTestId('contact-row');
  await expect(contactRows).toHaveCount(1);
  await expect(contactRows).toContainText('Maya Chen');
});
