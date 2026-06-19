  async assertUsernameVisible(): Promise<void> {
    await expect(this.page.getByLabel('Username')).toBeVisible();
  
async navigateToMainPage(url: string): Promise<void> {
    await this.page.goto(url);
  }
}
