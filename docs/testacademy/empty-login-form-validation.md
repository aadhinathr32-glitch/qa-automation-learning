# Prove the Empty Form Is Validated — TestAcademy

**Topic:** Forms and validation  
**Level:** 1  
**Framework:** Playwright  
**Exercise:** [Prove the empty form is validated](https://testacademy.dev/problems/empty-login-form-shows-errors)

## Goal

Submit the Nimbus login form while both fields are empty, then verify that the user is shown validation errors for both required fields.

## Playwright test

```js
import { test, expect } from '@playwright/test';

test('shows validation errors for an empty form', async ({ page }) => {
  // Arrange: Open the login page.
  await page.goto('/');

  // Act: Submit the form without entering any details.
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Assert: Both required fields show validation errors.
  await expect(page.getByTestId('email-error')).toBeVisible();
  await expect(page.getByTestId('password-error')).toBeVisible();
});
```

## Why these assertions matter

- The test submits the form with both fields empty.
- The email assertion checks that the email validation message is visible.
- The password assertion checks that the password validation message is visible.
- If either message stops appearing, the test fails and exposes the regression.

## What I learned

Validation is behaviour and needs explicit assertions. Testing an empty form checks that required-field errors appear instead of assuming the application handles invalid input correctly.

## Scope and reproducibility

This is a learning example for TestAcademy's hosted Nimbus practice app. It is kept outside the default Playwright test suite because the hosted app and its root route are provided by the exercise environment. The code is documented from the completed exercise and has not been independently run in this repository's CI.
