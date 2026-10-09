
import { test, expect } from '@playwright/test';

test('POST request creates a user', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/users',
    {
      data: {
        name: 'Aadhi',
        username: 'aadhi',
        email: 'aadhi@example.com'
      }
    }
  );

  expect(response.status()).toBe(201);

  const user = await response.json();

  expect(user.name).toBe('Aadhi');
  expect(user.username).toBe('aadhi');
  expect(user.email).toBe('aadhi@example.com');

  console.log('PASS: User created successfully');
});
