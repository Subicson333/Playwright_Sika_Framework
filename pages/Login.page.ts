  async assertUsernameVisible(): Promise<void> {
    await expect(this.page.getByLabel('Username')).toBeVisible();
  }
