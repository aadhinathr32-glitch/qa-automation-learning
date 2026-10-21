import { test, expect } from '@playwright/test';

test('search narrows the contact list', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Search contacts').fill('Maya');

  // Assert that exactly one contact row remains.
  await expect(page.getByTestId('contact-row')).toHaveCount(1);
});
