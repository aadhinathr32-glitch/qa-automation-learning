
import { test as base, request, expect } from '@playwright/test';
import { config } from '../utils/config.js';

export const test = base.extend({
  api: async ({}, use) => {
    const api = await request.newContext({
      baseURL: config.apiBaseUrl,
      extraHTTPHeaders: {
        Accept: 'application/json'
      }
    });

    try {
      await use(api);
    } finally {
      await api.dispose();
    }
  },

  authToken: async ({ api }, use) => {
    const response = await api.post(
      'https://dummyjson.com/auth/login',
      {
        data: {
          username: 'emilys',
          password: 'emilyspass'
        }
      }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.accessToken).toBeTruthy();

    await use(body.accessToken);
  }
});

export { expect };
