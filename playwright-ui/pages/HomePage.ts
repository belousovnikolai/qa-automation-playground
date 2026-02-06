import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  isLoggedIn() {
    return this.page.locator('text=Logged in as');
  }
}