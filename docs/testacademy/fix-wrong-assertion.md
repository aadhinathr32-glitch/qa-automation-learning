# Fix the Wrong Assertion — TestAcademy

**Topic:** Forms and validation  
**Framework:** Playwright  
**Exercise:** [Fix the wrong assertion](https://testacademy.dev/problems/fix-login-wrong-assertion?framework=playwright)

## Scenario

The test submits the Nimbus sign-in form with an intentionally incorrect password. The test was checking the wrong outcome instead of verifying that the login attempt is rejected.

The exercise specifies that the error message uses `data-testid="login-error"`.

## Correct assertion

```js
await expect(page.getByTestId('login-error')).toBeVisible();
```

## Full test from the exercise

```js
import { test, expect } from '@playwright/test';

test('a wrong password is rejected', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Email').fill('demo@nimbus.app');
  await page.getByLabel('Password').fill('wrong-password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  // A wrong password should show an error, not sign in.
  await expect(page.getByTestId('login-error')).toBeVisible();
});
```

## Why this assertion is correct

- The test deliberately enters an incorrect password.
- The expected behaviour is that authentication is rejected and an error message appears.
- `getByTestId('login-error')` targets the error message identified by the practice app.
- `toBeVisible()` verifies the expected user-facing outcome instead of asserting an incorrect success state.

## What I learned

An assertion must describe the expected behaviour for the scenario being tested. When testing invalid credentials, assert that the login is rejected and the error is shown. Do not weaken or remove the assertion just to make a test pass.

## Scope and reproducibility

This is a documented exercise from TestAcademy's hosted Nimbus practice application. The code is included as a learning reference and is not part of this repository's default Playwright suite because the hosted app and its root route are provided by the exercise environment.
