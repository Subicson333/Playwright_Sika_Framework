import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(public page: Page) {}

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async enterUsername(username: string) {
    await this.page.getByLabel('Username').fill(username);
  }

  async enterPassword(password: string) {
    await this.page.getByLabel('Password').fill(password);
  }

  async clickLogin() {
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async expectSecureAreaVisible() {
    await expect(this.page.getByText('Secure Area')).toBeVisible();
  }
}
