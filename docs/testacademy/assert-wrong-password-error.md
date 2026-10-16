# Assert the Wrong-Password Error — TestAcademy

**Topic:** Forms and validation  
**Level:** 1  
**Framework:** Playwright  
**Exercise:** [Assert the wrong-password error](https://testacademy.dev/problems/fill-login-error)

## Goal

Sign in with a deliberately incorrect password and assert that the Nimbus login page shows an error message. The valid practice credentials shown by the exercise are `demo@nimbus.app` / `secure123`; this test intentionally uses a wrong password.

## Playwright test

```js
import { test, expect } from '@playwright/test';

test('a wrong password shows an error', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Email').fill('demo@nimbus.app');
  await page.getByLabel('Password').fill('wrong-password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Assert that the error appears.
  await expect(page.getByTestId('login-error')).toBeVisible();
});
```

## Why this assertion matters

- The test submits deliberately invalid credentials.
- `getByTestId('login-error')` targets the error message identified by the practice app.
- `toBeVisible()` proves the user receives feedback that the login failed; merely checking that the page did not crash would not prove this behaviour.

## What I learned

Negative-path tests should assert the expected rejection or error message. A test needs to prove the application responds correctly to invalid input, not just perform the action.

## Scope and reproducibility

This is a learning example for TestAcademy's hosted Nimbus practice app. It is kept outside the default Playwright test suite because the hosted app and its root route are provided by the exercise environment. The code is documented from the completed exercise and has not been independently run in this repository's CI.
