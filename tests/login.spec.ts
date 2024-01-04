import { test, expect} from '@playwright/test';
import common from '../common.json';
import { loginSelectors } from '../pageObjects/login/selectors';

test.beforeEach(async ({ page }) => {
  await page.goto(`${process.env.URL}`);
});

test.describe('@Login', () => {
  test('validate entering invalid email will not enable login button', async ({ page }) => {
    const emails = [
      'test@',
      'test@test',
      'test@test.',
    ]
    const emailFild = page.locator(loginSelectors.email);

    for (const item of emails) {
      await emailFild.fill(item);
      await expect(page.getByRole('button', { name: 'Login' })).toBeDisabled();
    }
  });
});
