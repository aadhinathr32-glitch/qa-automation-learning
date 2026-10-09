
import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Test 1: Verify that a completed form submits successfully
test('fill and submit practice form', async ({ page }) => {
    const formPath = path.resolve('tests/practice-form.html');

    await page.goto(pathToFileURL(formPath).href);

    // Fill the first name
    const firstName = page.locator('#fname');

    await firstName.fill('Aadhi');

    await expect(firstName).toHaveValue('Aadhi');

    // Select a country
    const country = page.locator('#country');

    await country.selectOption('india');

    await expect(country).toHaveValue('india');

    // Submit the form
    await page.locator('#submit').click();

    // Verify the success message
    await expect(page.locator('#result'))
        .toHaveText('Form submitted successfully');
});

// Test 2: Verify that an incomplete form displays an error
test('show error when form is incomplete', async ({ page }) => {
    const formPath = path.resolve('tests/practice-form.html');

    await page.goto(pathToFileURL(formPath).href);

    // Leave both fields empty and submit
    await page.locator('#submit').click();

    // Verify the error message
    await expect(page.locator('#result'))
        .toHaveText('Please complete all fields');
});

// Test 3: Verify that the form rejects a missing country
test('show error when country is missing', async ({ page }) => {
    const formPath = path.resolve('tests/practice-form.html');

    await page.goto(pathToFileURL(formPath).href);

    // Enter a name but leave the country unselected
    await page.locator('#fname').fill('Aadhi');

    await page.locator('#submit').click();

    // Verify the error message
    await expect(page.locator('#result'))
        .toHaveText('Please complete all fields');
});
