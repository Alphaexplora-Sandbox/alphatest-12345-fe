import { expect, test } from '@playwright/test';

test.describe('alphatest-12345-frontend deployment', () => {
  test('serves its entry page', async ({ page }) => {
    const response = await page.goto('/');

    expect(response?.ok()).toBeTruthy();
    await expect(page.locator('body')).toBeVisible();
  });
});
