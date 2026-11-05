import { test, expect } from '@playwright/test';

test('home displays products and account button', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const items = page.locator('.item-name');
  await expect(items.first()).toBeVisible({ timeout: 15000 });

  const count = await items.count();
  console.log("Number of products found:", count);
  expect(count).toBeGreaterThan(0);

  const account = page.getByLabel('Show/hide account menu');
  await expect(account).toBeVisible();
});
//const element = page.getByText('Submit');