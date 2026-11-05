export async function goToLogin(page) {
  await page.goto('http://localhost:3000');

  await page.getByLabel('Close Welcome Banner')
  .click({ timeout: 5000 }).catch(() => {});

  await page.locator('.cdk-overlay-backdrop')
  .waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});

  await page.getByLabel('dismiss cookie message')
  .click({ timeout: 3000 }).catch(() => {});

  const account = page.getByLabel('Show/hide account menu');
  await account.click();

  const login = page.getByRole('menuitem', { name: 'Login' });
  await login.click();

}