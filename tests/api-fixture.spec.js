
import { test, expect } from '../fixtures/api-fixtures.js';

test('GET user using shared API fixture', async ({ api }) => {
  const response = await api.get('/users/1');

  expect(response.status()).toBe(200);

  const user = await response.json();

  expect(user.id).toBe(1);
  expect(user.name).toBe('Leanne Graham');
  expect(user.email).toContain('@');

  console.log('PASS: User validated using API fixture');
});

test('GET posts using shared API fixture', async ({ api }) => {
  const response = await api.get('/posts/1');

  expect(response.status()).toBe(200);

  const post = await response.json();

  expect(post.id).toBe(1);
  expect(post.title).toBeTruthy();

  console.log('PASS: Post validated using API fixture');
});
