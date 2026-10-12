
import { test, expect } from '../fixtures/api-fixtures.js';

test('login returns an authentication token', async ({ api }) => {
  const response = await api.post('https://dummyjson.com/auth/login', {
    data: {
      username: 'emilys',
      password: 'emilyspass'
    }
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.accessToken).toBeTruthy();

  console.log('PASS: Authentication token received');
});

test('authentication token accesses protected user data', async ({ api }) => {
  // First, authenticate.
  const loginResponse = await api.post(
    'https://dummyjson.com/auth/login',
    {
      data: {
        username: 'emilys',
        password: 'emilyspass'
      }
    }
  );

  expect(loginResponse.status()).toBe(200);

  const loginData = await loginResponse.json();
  const token = loginData.accessToken;

  // Use the token to access protected data.
  const response = await api.get(
    'https://dummyjson.com/auth/me',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  expect(response.status()).toBe(200);

  const user = await response.json();

  expect(user.username).toBe('emilys');

  console.log('PASS: Protected user data accessed');
});
