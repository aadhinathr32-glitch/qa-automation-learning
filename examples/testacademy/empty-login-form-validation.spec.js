import { test, expect } from '@playwright/test';

test('shows validation errors for an empty form', async ({ page }) => {
  // Arrange: Open the login page.
  await page.goto('/');

  // Act: Submit the form without entering any details.
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Assert: Both required fields show validation errors.
  await expect(page.getByTestId('email-error')).toBeVisible();
  await expect(page.getByTestId('password-error')).toBeVisible();
});
