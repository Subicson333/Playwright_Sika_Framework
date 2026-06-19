import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login.page';
import { HomePage } from '../pages/HomePage';

test('Successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToMainPage("http://leaftaps.com/opentaps/control/main");
    await loginPage.enterUsername("DemoCSR2");
    await loginPage.enterPassword("crmsfa");
    await loginPage.clickLogin();
    const homePage = new HomePage(page);
    await homePage.expectCrmSfaVisible();
});
