import { test, expect } from '@playwright/test';

test('the status filter shows only customers', async ({ page }) => {
  await page.goto('/');

  // Arrange: select Customer status.
  await page.getByTestId('status-filter').selectOption('Customer');

  // Assert: exactly four contacts remain.
  const rows = page.getByTestId('contact-row');
  await expect(rows).toHaveCount(4);

  // Assert: every remaining row shows Customer status.
  for (let i = 0; i < 4; i++) {
    await expect(rows.nth(i)).toContainText('Customer');
  }
});
