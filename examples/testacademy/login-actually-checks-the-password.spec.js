# Prove the Login Really Checks the Password — TestAcademy

**Topic:** Forms and validation  
**Framework:** Playwright  
**Exercise:** [Prove the login really checks the password](https://testacademy.dev/problems/login-actually-checks-the-password)

## Goal

Prove both required behaviours for the Nimbus login page:

1. Valid credentials (`demo@nimbus.app` / `secure123`) sign the user in and show the welcome message.
2. An incorrect password is rejected and displays the login error.

Testing only the happy path is not enough: an application that accepts any password would still pass a happy-path-only test.

## Playwright tests

```js
import { test, expect } from '@playwright/test';

test('signs in with valid credentials', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Email').fill('demo@nimbus.app');
  await page.getByLabel('Password').fill('secure123');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.getByTestId('welcome-message'))
    .toContainText('Welcome back, Alex');
});

test('rejects an incorrect password', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Email').fill('demo@nimbus.app');
  await page.getByLabel('Password').fill('wrong-password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page.getByTestId('login-error')).toBeVisible();
});
```

## Why both tests matter

- The valid-credentials test checks that the expected user can sign in.
- The invalid-credentials test checks that a wrong password does not get accepted and that a clear error is displayed.
- Together, the tests cover both a successful login and an important negative/security case.

## What I learned

A happy-path test alone cannot prove authentication works correctly. Negative tests are necessary to check that invalid input is rejected. A useful test suite checks both what should happen and what must not happen.

## Scope and reproducibility

This is a documented exercise from TestAcademy's hosted Nimbus practice application. The tests are provided as learning examples and are not included in this repository's default Playwright suite because the hosted app and its root route are supplied by the exercise environment.
