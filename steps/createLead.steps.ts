import { Given, When, Then } from '@cucumber/cucumber';
import { PlaywrightWrapper } from '../utils/wrapper';
import { LeadCreationPage } from '../pages/LeadCreation.page';

// The custom World provides `page` and `wrapper` instances.

Given('I navigate to {string}', async function (url: string) {
  // Direct navigation using Playwright page instance
  await this.page.goto(url);
});

When('I type {string} into {string}', async function (value: string, label: string) {
  await this.page.getByLabel(label).fill(value);
});

Then('the login should be successful', async function () {
  // Placeholder for post‑login verification; can be expanded as needed.
  // Example: await expect(this.page).toHaveURL(/.*/home/);
});
