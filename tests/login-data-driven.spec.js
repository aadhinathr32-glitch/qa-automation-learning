
import { test, expect } from '@playwright/test';

const loginCases = [
  {
    username: 'admin',
    password: 'admin123',
    expected: 'success',
    description: 'valid credentials',
  },
  {
    username: 'admin',
    password: 'wrong123',
    expected: 'failure',
    description: 'incorrect password',
  },
  {
    username: '',
    password: 'admin123',
    expected: 'failure',
    description: 'empty username',
  },
];

for (const testCase of loginCases) {
  test(`Login: ${testCase.description}`, async ({ page }) => {
    // We will connect these tests to a practice login page next.
    expect(testCase.username === 'admin' &&
      testCase.password === 'admin123')
      .toBe(testCase.expected === 'success');
  });
}
