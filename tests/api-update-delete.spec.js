
import { test, expect } from '@playwright/test';

const baseURL = 'https://jsonplaceholder.typicode.com';

test('PUT request updates a user', async ({ request }) => {
  const response = await request.put(`${baseURL}/users/1`, {
    data: {
      id: 1,
      name: 'Aadhi Updated',
      username: 'aadhi_updated',
      email: 'aadhi.updated@example.com'
    }
  });

  expect(response.status()).toBe(200);

  const user = await response.json();

  expect(user.id).toBe(1);
  expect(user.name).toBe('Aadhi Updated');
  expect(user.username).toBe('aadhi_updated');

  console.log('PASS: User updated successfully');
});

test('DELETE request removes a user', async ({ request }) => {
  const response = await request.delete(`${baseURL}/users/1`);

  expect(response.status()).toBe(200);

  console.log('PASS: User delete request successful');
});
