import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  async expectLoggedIn() {
    await expect(
      this.page.locator('text=Logged in as')
    ).toBeVisible();
  }
}