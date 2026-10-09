
import { test, expect } from '@playwright/test';

const baseURL = 'https://jsonplaceholder.typicode.com';

const userCases = [
  { id: 1, expectedName: 'Leanne Graham' },
  { id: 2, expectedName: 'Ervin Howell' },
  { id: 3, expectedName: 'Clementine Bauch' }
];

for (const userCase of userCases) {
  test(`GET user ${userCase.id}`, async ({ request }) => {
    const response = await request.get(
      `${baseURL}/users/${userCase.id}`
    );

    expect(response.status()).toBe(200);

    const user = await response.json();

    expect(user.id).toBe(userCase.id);
    expect(user.name).toBe(userCase.expectedName);
    expect(user.email).toContain('@');

    console.log(`PASS: User ${userCase.id} validated`);
  });
}
