# Prove the Login Really Checks the Password — TestAcademy

**Topic:** Forms and validation  
**Framework:** Playwright  
**Exercise:** [Prove the login really checks the password](https://testacademy.dev/problems/login-actually-checks-the-password)

## What the exercise requires

The suite must prove both of these behaviours:

1. Valid credentials (`demo@nimbus.app` / `secure123`) sign the user in.
2. A wrong password is rejected and shows an error message.

The exercise warns that a test checking only the happy path can miss a serious bug: login accepting any password.

## Test code

The two tests are saved in [`examples/testacademy/login-actually-checks-the-password.spec.js`](../../examples/testacademy/login-actually-checks-the-password.spec.js).

- The valid-login test checks the `welcome-message` test ID contains `Welcome back, Alex`.
- The invalid-login test checks that the `login-error` test ID becomes visible.

## What I learned

Test both successful and unsuccessful authentication. Positive tests verify that valid users can proceed; negative tests verify that invalid credentials are rejected. Both are needed to build confidence in login behaviour.

## Scope and reproducibility

This is a documented exercise from TestAcademy's hosted Nimbus practice application. The tests are kept outside the default Playwright suite because the hosted app and its root route are provided by the exercise environment.
