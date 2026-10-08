import { test, expect } from '@playwright/test';

test('verify Playwright homepage', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);

});