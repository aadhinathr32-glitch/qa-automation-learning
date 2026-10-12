
import { test, expect } from '../fixtures/api-fixtures.js';

test('GET post returns the correct response structure', async ({ api }) => {
  const response = await api.get('https://dummyjson.com/posts/1');

  expect(response.status()).toBe(200);

  const post = await response.json();

  // Validate required fields
  expect(post).toHaveProperty('id');
  expect(post).toHaveProperty('title');
  expect(post).toHaveProperty('userId');

  // Validate field types
  expect(typeof post.id).toBe('number');
  expect(typeof post.title).toBe('string');
  expect(typeof post.userId).toBe('number');

  // Validate actual values
  expect(post.id).toBe(1);
  expect(post.title.length).toBeGreaterThan(0);

  console.log('PASS: Post response structure validated');
});

test('GET post responds within the time limit', async ({ api }) => {
  const startTime = Date.now();

  const response = await api.get('https://dummyjson.com/posts/1');

  const responseTime = Date.now() - startTime;

  expect(response.status()).toBe(200);
  expect(responseTime).toBeLessThan(5000);

  console.log(`PASS: Response time ${responseTime} ms`);
});
