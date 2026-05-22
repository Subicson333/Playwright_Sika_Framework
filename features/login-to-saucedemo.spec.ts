import { test } from '@playwright/test';
import { SauceDemoLoginPage } from '../pages/SauceDemoLogin.page';

test.describe('Login to SauceDemo', () => {
  test('Successful Login', async ({ page }) => {
    const loginPage = new SauceDemoLoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyCatalogPage();
  });
});
