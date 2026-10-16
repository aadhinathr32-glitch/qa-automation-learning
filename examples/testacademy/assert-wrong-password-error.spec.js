import { test, expect } from '@playwright/test';

test('a wrong password shows an error', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Email').fill('demo@nimbus.app');
  await page.getByLabel('Password').fill('wrong-password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Assert that the error appears.
  await expect(page.getByTestId('login-error')).toBeVisible();
});
