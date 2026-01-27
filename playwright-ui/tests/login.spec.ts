import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { testUser, invalidPasswordUser } from '../data/testUser';

test('User can log in with valid credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.open();
  await loginPage.login(testUser);

  await homePage.expectLoggedIn();
})

test('User cannot login with invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.open();
  await loginPage.login(invalidPasswordUser);

  await loginPage.getLoginError();
})