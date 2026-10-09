import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  await page.goto(
    'https://practicetestautomation.com/practice-test-login/'
  );

  await page.locator('#username').fill('student');
  await page.locator('#password').fill('Password123');

  await page.locator('#submit').click();

  await expect(page).toHaveURL(/logged-in-successfully/);
  await expect(
    page.getByRole('heading', { name: 'Logged In Successfully' })
  ).toBeVisible();

  console.log('PASS: Successful login verified');
});

test('login with incorrect password', async ({ page }) => {
  await page.goto(
    'https://practicetestautomation.com/practice-test-login/'
  );

  await page.locator('#username').fill('student');
  await page.locator('#password').fill('WrongPassword');

  await page.locator('#submit').click();

  await expect(page.locator('#error')).toBeVisible();
  await expect(page.locator('#error')).toContainText(
    /Your password is invalid/
  );

  console.log('PASS: Invalid password error verified');
});