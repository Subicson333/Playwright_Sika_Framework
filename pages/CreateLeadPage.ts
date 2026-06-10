import { Page, expect } from '@playwright/test';

export class CreateLeadPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async assertCompanyNameVisible(): Promise<void> {
    await expect(this.page.getByLabel('Company Name')).toBeVisible();
  }

  async enterCompanyName(companyName: string): Promise<void> {
    await this.page.getByLabel('enterCompanyName').fill(companyName);
  }

  async enterFirstName(firstName: string): Promise<void> {
    await this.page.getByLabel('enterFirstName').fill(firstName);
  }

  async enterLastName(lastName: string): Promise<void> {
    await this.page.getByLabel('enterLastName').fill(lastName);
  }

  async enterDepartmentName(departmentName: string): Promise<void> {
    await this.page.getByLabel('enterDepartmentName').fill(departmentName);
  }

  async enterEmailAddress(email: string): Promise<void> {
    await this.page.getByLabel('enterEmailAddress').fill(email);
  }

  async submitCreateLead(): Promise<void> {
    await this.page.getByLabel('Create Lead').click();
  }

async clickCreateLeadButton(): Promise<void> {
    await this.page.getByLabel('Create Lead').click();
  }
}
