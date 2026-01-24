import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  async isLoggedIn() {
    return this.page.locator('text=Logged in as').isVisible();
  }
}