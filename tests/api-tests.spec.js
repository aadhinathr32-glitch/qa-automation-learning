
import { test, expect } from '@playwright/test';

test('GET request returns a user', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  // Check the HTTP status code
  expect(response.status()).toBe(200);

  // Read the response body as JSON
  const user = await response.json();

  // Validate the response data
  expect(user.id).toBe(1);
  expect(user.name).toBeTruthy();
  expect(user.email).toContain('@');

  console.log('PASS: User API response validated');
});

test('GET request for missing user returns 404', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/9999'
  );

  expect(response.status()).toBe(404);

  console.log('PASS: Missing user returns 404');
});
