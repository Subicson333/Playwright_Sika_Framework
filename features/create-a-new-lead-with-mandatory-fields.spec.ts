import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login.page';
import { HomePage } from '../pages/HomePage';
import { CreateLeadPage } from '../pages/CreateLeadPage';
import { ViewLeadPage } from '../pages/ViewLeadPage';

test('Create a new lead with mandatory fields', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.enterUsername("DemoCSR2");
    await loginPage.enterPassword("crmsfa");
    await loginPage.clickLogin();
    const homePage = new HomePage(page);
    await homePage.clickCrmSfaLink();
    await homePage.clickCreateLeadInShortcuts();
    const createLeadPage = new CreateLeadPage(page);
    await createLeadPage.enterCompanyName("Qeagle");
    await createLeadPage.enterFirstName("Arjun");
    await createLeadPage.enterLastName("Kumar");
    await createLeadPage.clickCreateLeadButton();
    const viewLeadPage = new ViewLeadPage(page);
    await viewLeadPage.expectViewLeadVisible();
});
