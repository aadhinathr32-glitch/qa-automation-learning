
import dotenv from 'dotenv';

dotenv.config();

const apiBaseUrl = process.env.API_BASE_URL;

if (!apiBaseUrl) {
  throw new Error('API_BASE_URL is not configured');
}

export const config = {
  apiBaseUrl
};
