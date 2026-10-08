import { test, expect } from '@playwright/test';

test('find and click Get Started', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    const getStartedLink = page.getByRole('link', {
        name: 'Get started'
    });

    await getStartedLink.click();

    await expect(
        page.getByRole('heading', { name: 'Installation' })
    ).toBeVisible();

});