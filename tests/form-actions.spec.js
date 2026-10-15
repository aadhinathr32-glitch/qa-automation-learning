import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Load the local practice form before every test.
test.beforeEach(async ({ page }) => {
  const formPath = path.resolve('tests/practice-form.html');
  await page.goto(pathToFileURL(formPath).href);
});

test('submits the practice form with valid details', async ({ page }) => {
  await page.locator('#fname').fill('Aadhi');
  await page.locator('#email').fill('aadhi@example.com');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#result'))
    .toHaveText('Form submitted successfully!');
});

test('shows an error when the form is incomplete', async ({ page }) => {
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#result'))
    .toHaveText('Please complete all fields');
});

test('shows an error when the email is missing', async ({ page }) => {
  await page.locator('#fname').fill('Aadhi');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#result'))
    .toHaveText('Please complete all fields');
});
