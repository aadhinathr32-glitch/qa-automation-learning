
import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Run this setup before every test
test.beforeEach(async ({ page }) => {
    const formPath = path.resolve('tests/practice-form.html');

    await page.goto(pathToFileURL(formPath).href);
});

// Test 1: Successful form submission
test('fill and submit practice form', async ({ page }) => {
    const firstName = page.locator('#fname');

    await firstName.fill('Aadhi');
    await expect(firstName).toHaveValue('Aadhi');

    const country = page.locator('#country');

    await country.selectOption('india');
    await expect(country).toHaveValue('india');

    await page.locator('#submit').click();

    await expect(page.locator('#result'))
        .toHaveText('Form submitted successfully');
});

// Test 2: Empty form
test('show error when form is incomplete', async ({ page }) => {
    await page.locator('#submit').click();

    await expect(page.locator('#result'))
        .toHaveText('Please complete all fields');
});

// Test 3: Country missing
test('show error when country is missing', async ({ page }) => {
    await page.locator('#fname').fill('Aadhi');git status

    await page.locator('#submit').click();

    await expect(page.locator('#result'))
        .toHaveText('Please complete all fields');
});
