import { Page, expect } from '@playwright/test';

export class CrmSfaPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async assertLeadsVisible(): Promise<void> {
    await expect(this.page.getByLabel('Leads')).toBeVisible();
  }

  async assertCrmSfaVisible(): Promise<void> {
    await expect(this.page.getByLabel('CRM/SFA')).toBeVisible();
  }

  async clickLeads(): Promise<void> {
    await this.page.getByLabel('Leads').click();
  }
}
