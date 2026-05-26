import { PlaywrightWrapper } from '../utils/wrapper';
import { createLogger } from '../utils/logger';

const logger = createLogger('login-page-steps');

export class LoginPage {
  private wrapper: PlaywrightWrapper;

  constructor(wrapper: PlaywrightWrapper) {
    this.wrapper = wrapper;
  }

  async navigateTo(): Promise<void> {
    logger.info('Navigating to login page');
    await this.wrapper.navigateTo('https://the-internet.herokuapp.com/login');
  }

  async enterUsername(username: string): Promise<void> {
    logger.info(`Entering username: ${username}`);
    await this.wrapper.page.getByLabel('Username').fill(username);
  }

  async enterPassword(password: string): Promise<void> {
    logger.info(`Entering password: ${password}`);
    await this.wrapper.page.getByLabel('Password').fill(password);
  }

  async clickLoginButton(): Promise<void> {
    logger.info('Clicking login button');
    await this.wrapper.page.getByRole('button', { name: 'Login' }).click();
  }

  async isSecureAreaVisible(): Promise<boolean> {
    logger.info('Checking if secure area is visible');
    return await this.wrapper.page.getByText('Secure Area').isVisible();
  }
}