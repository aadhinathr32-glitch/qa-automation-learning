import { test, expect } from '@playwright/test';

test('practice different locators', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    // 1. Role locator
    const getStarted = page.getByRole('link', {
        name: 'Get started'
    });

    await expect(getStarted).toBeVisible();

    // 2. Text locator
    const playwrightText = page.getByText('Playwright');

    await expect(playwrightText.first()).toBeVisible();

});