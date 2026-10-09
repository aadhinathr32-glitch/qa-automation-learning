
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
  }
});

export { expect };
