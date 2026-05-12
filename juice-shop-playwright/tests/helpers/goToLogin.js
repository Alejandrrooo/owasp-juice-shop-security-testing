export async function goToLogin(page) {
  await page.goto('http://localhost:3000');

  const closePopup = page.getByLabel('Close Welcome Banner');
  if (await closePopup.isVisible()) {
    await closePopup.click();
  }

  const closeCookie = page.getByLabel('dismiss cookie message');
  if (await closeCookie.isVisible()) {
    await closeCookie.click();
  }

  const account = page.getByLabel('Show/hide account menu');
  await account.click();

  const login = page.getByRole('menuitem', { name: 'Login' });
  await login.click();

}