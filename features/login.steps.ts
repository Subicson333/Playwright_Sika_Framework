import { Given, When, Then } from '@cucumber/cucumber';
import { InternetHerokuLoginPage } from '../pages/InternetHerokuLogin.page';

Given('I navigate to the login page', async function () {
  const loginPage = new InternetHerokuLoginPage(this.page);
  await loginPage.navigate();
});

When('I enter username {string}', async function (username: string) {
  const loginPage = new InternetHerokuLoginPage(this.page);
  await loginPage.enterUsername(username);
});

When('I enter password {string}', async function (password: string) {
  const loginPage = new InternetHerokuLoginPage(this.page);
  await loginPage.enterPassword(password);
});

When('I click the login button', async function () {
  const loginPage = new InternetHerokuLoginPage(this.page);
  await loginPage.clickLogin();
});

Then('I should see the secure area', async function () {
  const loginPage = new InternetHerokuLoginPage(this.page);
  await loginPage.expectSecureAreaVisible();
});
