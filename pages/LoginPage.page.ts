import { BasePage } from '../pages/BasePage';

export class LoginPage extends BasePage {
  private usernameInput = this.page.getByLabel('Username');
  private passwordInput = this.page.getByLabel('Password');
  private loginButton = this.page.getByRole('button', { name: 'Login' });
  private secureAreaText = this.page.getByText('Secure Area');

  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async isSecureAreaVisible() {
    return await this.secureAreaText.isVisible();
  }
}