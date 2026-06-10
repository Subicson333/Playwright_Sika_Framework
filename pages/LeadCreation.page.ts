import { BasePage } from '../pages/BasePage';
import { Page } from '@playwright/test';

export class LeadCreationPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToLogin(): Promise<void> {
    await this.page.goto('https://leaftaps.com/opentaps/control/login');
  }

  async enterUsername(username: string): Promise<void> {
    await this.page.getByLabel('Username').fill(username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.page.getByLabel('Password').fill(password);
  }

async clickLoginButton(): Promise<void> {
    await this.page.getByLabel('getByLabel(\'Login\')').click();
  }
}
