import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  async open() {
    await super.open('/login');
  }

  async login(email: string, password: string) {
    await this.page.locator('[data-qa="login-email"]').fill(email);
    await this.page.locator('[data-qa="login-password"]').fill(password);
    await this.page.locator('[data-qa="login-button"]').click();
  }
}