import { BasePage } from '../pages/BasePage';
import { Page } from '@playwright/test';

export class SauceDemoProductsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async verifyProductVisible(): Promise<void> {
    await this.page.getByText('Products').first().waitFor({ state: 'visible' });
  }
}
