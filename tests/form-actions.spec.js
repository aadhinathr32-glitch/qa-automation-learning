
import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

test('fill and submit practice form', async ({ page }) => {
    const formPath = path.resolve('practice-form.html');

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

    // Verify the result
    await expect(page.locator('#result'))
        .toHaveText('Form submitted successfully');
});
