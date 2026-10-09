
import { test, expect } from '@playwright/test';

const baseURL = 'https://jsonplaceholder.typicode.com';

test('GET request with invalid user ID', async ({ request }) => {
  const response = await request.get(`${baseURL}/users/9999`);

  expect(response.status()).toBe(404);

  console.log('PASS: Invalid user ID returns 404');
});

test('POST request with incomplete user data', async ({ request }) => {
  const response = await request.post(`${baseURL}/users`, {
    data: {
      name: 'Aadhi'
    }
  });

  // JSONPlaceholder simulates successful creation
  // even when some fields are missing.
  expect(response.status()).toBe(201);

  const user = await response.json();

  expect(user.name).toBe('Aadhi');
  expect(user.email).toBeUndefined();

  console.log('PASS: Incomplete payload response validated');
});
