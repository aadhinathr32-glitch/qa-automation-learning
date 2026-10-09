
import { test, expect } from '@playwright/test';

const {
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require('../utils/api-helper');

test('GET user using helper', async ({ request }) => {
  const response = await getUser(request, 1);

  expect(response.status()).toBe(200);

  const user = await response.json();
  expect(user.id).toBe(1);
  expect(user.name).toBe('Leanne Graham');
});

test('POST user using helper', async ({ request }) => {
  const response = await createUser(request, {
    name: 'Aadhi',
    username: 'aadhi',
    email: 'aadhi@example.com'
  });

  expect(response.status()).toBe(201);

  const user = await response.json();
  expect(user.name).toBe('Aadhi');
});

test('PUT user using helper', async ({ request }) => {
  const response = await updateUser(request, 1, {
    id: 1,
    name: 'Aadhi Updated'
  });

  expect(response.status()).toBe(200);

  const user = await response.json();
  expect(user.name).toBe('Aadhi Updated');
});

test('DELETE user using helper', async ({ request }) => {
  const response = await deleteUser(request, 1);

  expect(response.status()).toBe(200);
});
