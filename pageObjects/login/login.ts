import { expect, chromium } from '@playwright/test';
import { loginSelectors } from './selectors';
import common from '../../common.json';

export class LoginPage {
  static async login({ page }, username: string) {
    await page.goto(`${process.env.URL}`);
    const emailFild = await page.locator(loginSelectors.email);
    await emailFild.fill(username);
    await page.getByRole('button', { name: 'Login' }).click();

    const passwordField = await page.locator(loginSelectors.password);
    await passwordField.fill(common.password);
    await page.locator(loginSelectors.loginSubmit).click();
    await expect(page.locator(loginSelectors.email)).toHaveCount(0); //logged in successfully
  }
}

module.exports = {
  LoginPage,
};
