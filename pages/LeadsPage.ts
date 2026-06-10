import { Page, expect } from '@playwright/test';

export class LeadsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async assertCreateLeadVisible(): Promise<void> {
    await expect(this.page.getByLabel('Create Lead')).toBeVisible();
  }

  async clickCreateLead(): Promise<void> {
    await this.page.getByLabel('Create Lead').click();
  }
}
