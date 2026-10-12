
import { test, expect } from '../fixtures/api-fixtures.js';

test('authenticated user can access their profile', async ({
  api,
  authToken
}) => {
  const response = await api.get(
    'https://dummyjson.com/auth/me',
    {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }
  );

  expect(response.status()).toBe(200);

  const user = await response.json();

  expect(user.username).toBe('emilys');
});

test('invalid token is rejected', async ({ api }) => {
  const response = await api.get(
    'https://dummyjson.com/auth/me',
    {
      headers: {
        Authorization: 'Bearer invalid-token-123'
      }
    }
  );

  expect(response.status()).toBe(401);
});
