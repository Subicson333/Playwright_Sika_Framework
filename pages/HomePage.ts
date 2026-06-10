import { Page, expect } from '@playwright/test';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async assertCrmSfaVisible(): Promise<void> {
    await expect(this.page.getByLabel('CRM/SFA')).toBeVisible();
  }

  async clickCrmSfa(): Promise<void> {
    await this.page.getByLabel('CRM/SFA').click();
  }

async clickCrmSfaLink(): Promise<void> {
    await this.page.getByLabel('CRM/SFA').click();
  }

async clickCreateLeadInShortcuts(): Promise<void> {
    await this.page.getByLabel('Create Lead').click();
  }
}
