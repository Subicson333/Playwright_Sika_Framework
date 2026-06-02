import { When, Then } from '@cucumber/cucumber';
import { PlaywrightWrapper } from '../utils/wrapper';
import { LoginPage } from '../pages/Login.page';
import { expect } from '@playwright/test';

When('I navigate to https://the-internet.herokuapp.com/login', async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When('I enter {string} in the Username field', async function (username: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.enterUsername(username);
});

When('I enter {string} in the Password field', async function (password: string) {
  const loginPage = new LoginPage(this.page);
  await loginPage.enterPassword(password);
});

When('I click the {string} button', async function (buttonName: string) {
  // Assuming the only button we need to click is the Login button
  const loginPage = new LoginPage(this.page);
  await loginPage.clickLogin();
});

Then('I should see {string}', async function (expectedText: string) {
  await expect(this.page.getByText(expectedText)).toBeVisible();
});
