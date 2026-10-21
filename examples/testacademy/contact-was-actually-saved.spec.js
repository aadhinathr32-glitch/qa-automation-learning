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
