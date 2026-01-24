import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://automationexercise.com',
    headless: true,
    screenshot: 'only-on-failure',
  },
});