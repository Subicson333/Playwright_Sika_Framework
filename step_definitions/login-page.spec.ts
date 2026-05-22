import { When, Then } from '@cucumber/cucumber';
import { PlaywrightWrapper } from '../utils/wrapper';
import { createLogger } from '../utils/logger';
import { LoginPage } from '../pages/LoginPage.page';

const logger = createLogger('login-page-steps');

const getWrapper = (world: any): PlaywrightWrapper => new PlaywrightWrapper(world.page, world.context);
const getLoginPage = (world: any): LoginPage => new LoginPage(getWrapper(world));

When('I navigate to the login page', async (world: any) => {
  await getWrapper(world).page.goto('https://the-internet.herokuapp.com/login');
});

When('I enter {string} in the Username field', async (world: any, username: string) => {
  await getLoginPage(world).enterUsername(username);
});

When('I enter {string} in the Password field', async (world: any, password: string) => {
  await getLoginPage(world).enterPassword(password);
});

When('I click the Login button', async (world: any) => {
  await getLoginPage(world).clickLoginButton();
});

Then('I should see the Secure Area', async (world: any) => {
  await expect(getLoginPage(world).secureAreaText).toBeVisible();
});