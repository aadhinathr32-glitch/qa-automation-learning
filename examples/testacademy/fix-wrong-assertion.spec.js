import { test, expect } from '@playwright/test';

test('a wrong password is rejected', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Email').fill('demo@nimbus.app');
  await page.getByLabel('Password').fill('wrong-password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Invalid credentials should display an error instead of signing in.
  await expect(page.getByTestId('login-error')).toBeVisible();
});
