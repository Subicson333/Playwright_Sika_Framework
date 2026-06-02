import { test } from '@playwright/test';
import { LoginPage } from '../pages/Login.page';

test.describe('Login to the Internet Herokuapp', () => {
  test('Navigate to secure page after successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.enterUsername('tomsmith');
    await loginPage.enterPassword('SuperSecretPassword!');
    await loginPage.clickLogin();
    await loginPage.expectSecureAreaVisible();
  });
});
