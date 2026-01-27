import { BasePage } from "./BasePage";
import { User } from "../data/user";

export class LoginPage extends BasePage {
  async open() {
    await super.open('/login');
  }

  async login(user: User) {
    await this.page.locator('[data-qa="login-email"]').fill(user.email);
    await this.page.locator('[data-qa="login-password"]').fill(user.password);
    await this.page.locator('[data-qa="login-button"]').click();
  }

  async getLoginError() {
    return this.page.locator('[text()="Your email or password is incorrect!"]');
  }
}