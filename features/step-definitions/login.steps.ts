import { Given, When, Then } from '@cucumber/cucumber';
import { SauceDemoLoginPage } from '../../pages/SauceDemoLogin.page';
import { expect } from '@playwright/test';

interface CustomWorld {
  page: any;
  loginPage?: SauceDemoLoginPage;
}

Given('navigate to saucedemo.com', async function (this: CustomWorld) {
  this.loginPage = new SauceDemoLoginPage(this.page);
  await this.loginPage.navigate();
});

When('type {string} in the username field', async function (this: CustomWorld, username: string) {
  if (!this.loginPage) throw new Error('Login page not initialized');
  await this.loginPage.enterUsername(username);
});

When('type {string} in the password field', async function (this: CustomWorld, password: string) {
  if (!this.loginPage) throw new Error('Login page not initialized');
  await this.loginPage.enterPassword(password);
});

When('click on the login button', async function (this: CustomWorld) {
  if (!this.loginPage) throw new Error('Login page not initialized');
  await this.loginPage.clickLogin();
});

Then('should catalog page displayed', async function (this: CustomWorld) {
  if (!this.loginPage) throw new Error('Login page not initialized');
  await this.loginPage.verifyCatalogPage();
});
