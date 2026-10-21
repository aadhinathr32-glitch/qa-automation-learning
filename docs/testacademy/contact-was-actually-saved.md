# Prove a Contact Was Actually Saved — TestAcademy

**Topic:** Waiting & flakiness  
**Level:** 3  
**Framework:** Playwright  
**Exercise:** [Prove a contact was actually saved](https://testacademy.dev/problems/contact-save-isnt-just-a-toast)

## Goal

Create a new PipelineHQ contact named Ada Lovelace. The test must verify both the persistent result and the feedback shown to the user.

## Playwright test

```js
import { test, expect } from '@playwright/test';

test('creates a contact and confirms the save', async ({ page }) => {
  await page.goto('/');

  // Arrange: fill in the new contact
  await page.getByTestId('add-contact-button').click();
  await page.getByTestId('contact-name-input').fill('Ada Lovelace');
  await page.getByTestId('contact-email-input').fill('ada@analytical.engine');
  await page.getByTestId('contact-company-input').fill('Analytical Engine');

  // Act: save the contact
  await page.getByTestId('save-contact').click();

  // Assert 1: the saved contact appears in the table
  const adaRow = page.getByTestId('contact-row')
    .filter({ hasText: 'Ada Lovelace' });

  await expect(adaRow).toBeVisible();
  await expect(adaRow).toContainText('ada@analytical.engine');
  await expect(adaRow).toContainText('Analytical Engine');

  // Assert 2: the app confirms the save
  await expect(page.getByTestId('toast')).toBeVisible();
});
```

## Why both assertions matter

- The row assertion verifies that the contact was actually added to the table.
- Checking the email and company helps confirm that the saved row contains the submitted data, not just the name.
- The toast assertion verifies that the app also gives the user confirmation.
- A toast alone is insufficient: the app could display success feedback without persisting the contact.

## Avoid fixed sleeps

The test does not use an arbitrary `waitForTimeout()`. Playwright's web-first assertions wait for the expected state, making the test more resilient to short delays.

## What I learned

For save operations, verify both the persistent outcome and the user-facing confirmation. Test the state that matters rather than relying on a success message or a fixed delay alone.

## Scope and reproducibility

This is a learning example for TestAcademy's hosted PipelineHQ practice app. It is kept outside the default Playwright test suite because the hosted app and its root route are provided by the exercise environment. The code is documented from the completed exercise and has not been independently run in this repository's CI.
