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

async clickFindLeadsLink(): Promise<void> {
    await this.page.getByLabel('getByLabel(\'Find Leads\')').click();
  }

async enterFirstName(firstName: string): Promise<void> {
    await this.page.getByLabel('getByLabel(\'First Name\')').fill(firstName);
  }

async clickFindLeadsButton(): Promise<void> {
    await this.page.getByLabel('getByLabel(\'Find Leads\')').click();
  }

async clickFirstResultLead(): Promise<void> {
    await this.page.getByLabel('getByLabel(\'First Result Lead\')').click();
  }
}
