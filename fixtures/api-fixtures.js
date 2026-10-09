
import { test as base, request, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.API_BASE_URL;

if (!baseURL) {
  throw new Error('API_BASE_URL is missing from the .env file');
}

export const test = base.extend({
  api: async ({}, use) => {
    const api = await request.newContext({
      baseURL,
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
