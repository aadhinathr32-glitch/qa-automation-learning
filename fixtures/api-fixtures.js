
import { test as base, request } from '@playwright/test';

export const test = base.extend({
  api: async ({}, use) => {
    const api = await request.newContext({
      baseURL: 'https://jsonplaceholder.typicode.com',
      extraHTTPHeaders: {
        'Accept': 'application/json'
      }
    });

    await use(api);

    await api.dispose();
  }
});

export { expect } from '@playwright/test';
