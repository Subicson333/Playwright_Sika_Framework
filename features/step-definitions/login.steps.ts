import { Given, When, Then } from '@cucumber/cucumber';
import { SauceDemoLoginPage } from '../../pages/SauceDemoLogin.page';
import { SauceDemoProductsPage } from '../../pages/SauceDemoProducts.page';
import { Page } from '@playwright/test';

interface CustomWorld {
  page: Page;
}

declare const world: CustomWorld;

Given('user navigates to SauceDemo login page', async function () {
  await this.page.goto('https://www.saucedemo.com');
});

When('user enters username {string}', async function (username: string) {
  const loginPage = new SauceDemoLoginPage(this.page);
  await loginPage.enterUsername(username);
});

When('user enters password {string}', async function (password: string) {
  const loginPage = new SauceDemoLoginPage(this.page);
  await loginPage.enterPassword(password);
});

When('user clicks on login button', async function () {
  const loginPage = new SauceDemoLoginPage(this.page);
  await loginPage.clickLogin();
});

Then('user should see the product page', async function () {
  const productsPage = new SauceDemoProductsPage(this.page);
  await productsPage.verifyProductVisible();
});
