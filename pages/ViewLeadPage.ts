import { Page, expect } from '@playwright/test';

export class ViewLeadPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async assertViewLeadVisible(): Promise<void> {
    await expect(this.page.getByLabel('View Lead')).toBeVisible();
  }
}
