import { Page, expect } from '@playwright/test';

export class ViewLeadPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async assertViewLeadVisible(): Promise<void> {
    await expect(this.page.getByLabel('View Lead')).toBeVisible();
  }

async expectViewLeadVisible(): Promise<void> {
    await expect(this.page.getByLabel('View Lead')).toBeVisible();
  }

async clickEditButton(): Promise<void> {
    await this.page.getByLabel('getByLabel(\'Edit\')').click();
  }

async enterFirstName(firstName: string): Promise<void> {
    await this.page.getByLabel('getByLabel(\'First Name\')').fill(firstName);
  }

async enterLastName(lastName: string): Promise<void> {
    await this.page.getByLabel('getByLabel(\'Last Name\')').fill(lastName);
  }

async enterCompanyName(companyName: string): Promise<void> {
    await this.page.getByLabel('getByLabel(\'Company Name\')').fill(companyName);
  }

async clickUpdateButton(): Promise<void> {
    await this.page.getByLabel('getByLabel(\'Update\')').click();
  }

async assertFirstNameEquals(expectedFirstName: string): Promise<void> {
    await expect(this.page.getByLabel('getByLabel(\'First Name\')')).toHaveText(expectedFirstName);
  }

async assertLastNameEquals(expectedLastName: string): Promise<void> {
    await expect(this.page.getByLabel('getByLabel(\'Last Name\')')).toHaveText(expectedLastName);
  }
}
