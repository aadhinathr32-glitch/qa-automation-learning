import { test, expect } from '@playwright/test';

test('search narrows the contact list', async ({ page }) => {
  await page.goto('/');

  await page.getByPlaceholder('Search contacts').fill('Maya');

  // The app marks each contact row with data-testid="contact-row".
  await expect(page.getByTestId('contact-row')).toHaveCount(1);
});
