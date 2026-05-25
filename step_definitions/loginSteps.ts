import { When, Then } from '@cucumber/cucumber';
import { PlaywrightWrapper } from '../utils/wrapper';
import { createLogger } from '../utils/logger';
import { LoginPage } from './loginPage';

const logger = createLogger('login-steps');

let loginPage: LoginPage;

When('I navigate to {string}', async (url: string) => {
  loginPage = new LoginPage(new PlaywrightWrapper(this.page, this.context));
  await loginPage.navigateTo();
});

When('I enter {string} in the {string} field', async (value: string, field: string) => {
  if (field === 'Username') {
    await loginPage.enterUsername(value);
  } else if (field === 'Password') {
    await loginPage.enterPassword(value);
  }
});

When('I click the {string} button', async (button: string) => {
  if (button === 'Login') {
    await loginPage.clickLoginButton();
  }
});

Then('I should see {string}', async (text: string) => {
  if (text === 'Secure Area') {
    expect(await loginPage.isSecureAreaVisible()).toBe(true);
  }
});