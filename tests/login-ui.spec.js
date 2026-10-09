import { test, expect } from '@playwright/test';

test('verify login page elements', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Verify the page title
  await expect(page).toHaveTitle(/Practice Test Automation/);

  // Verify the username field is visible
  await expect(page.locator('#username')).toBeVisible();

  // Verify the password field is visible
  await expect(page.locator('#password')).toBeVisible();

  // Verify the submit button is visible
  await expect(page.locator('#submit')).toBeVisible();
});