import { BasePage } from '../pages/BasePage';
import { Page, expect } from '@playwright/test';

export class SauceDemoLoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com');
  }

  async enterUsername(username: string): Promise<void> {
    await this.page.getByLabel('username field').fill(username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.page.getByLabel('password field').fill(password);
  }

  async clickLogin(): Promise<void> {
    await this.page.getByRole('button', { name: 'login' }).click();
  }

  async verifyCatalogPage(): Promise<void> {
    await expect(this.page.getByText('catalog page')).toBeVisible();
  }

  async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}
