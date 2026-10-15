# Replace the Positional Selector — TestAcademy

**Topic:** Locators  
**Level:** 3  
**Framework:** Playwright  
**Exercise:** [Replace the positional selector](https://testacademy.dev/problems/refactor-positional-add-to-cart)

## Goal

Refactor a test that clicks a product button using a positional selector such as `.product-card:nth-child(1)`. Positional selectors are fragile because changing the layout can make the test click a different element.

The exercise provides a stable `data-testid="add-to-cart"` handle. Keep the assertion just as strong.

## Playwright test

```js
import { test, expect } from '@playwright/test';

test('adding a product updates the cart badge', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('add-to-cart').click();

  await expect(page.getByTestId('cart-count')).toHaveText('1');
});
```

## Why this is better

- `getByTestId('add-to-cart')` identifies the intended action by a stable test ID rather than by element position.
- The test still verifies the behaviour: after adding a product, the cart badge must display `1`.
- The test avoids a positional selector, so it is less likely to break when product cards are reordered or the layout changes.

## What I learned

A good refactor improves how a test finds an element without weakening what the test proves. Prefer stable locators such as test IDs over selectors that depend on DOM position.

## Scope and reproducibility

This is a learning example for TestAcademy's hosted Terra Supply practice app. It is stored outside the default Playwright test suite because the hosted app and its root route are provided by the exercise environment. The example is documented from the completed exercise; it has not been run against the hosted app from this repository's CI.
