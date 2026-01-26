import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { testUser } from '../fixtures/user';

test('User can log in with valid credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.open();
  await loginPage.login(testUser.email, testUser.password);

  await homePage.expectLoggedIn();
})