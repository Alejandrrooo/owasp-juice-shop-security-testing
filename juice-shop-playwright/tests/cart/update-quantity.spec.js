import { test, expect } from '@playwright/test';
import { goToRegister } from '../helpers/goToRegister';
import { generateUser } from '../utils/dataGenerator';
import { doRegistration } from '../helpers/doRegister';
import { doLogin } from '../helpers/login';
import { addProduct } from '../helpers/addProduct';
 
test('updateQuantityinCart', async ({ page }) => {
    const user = generateUser();
 
    await goToRegister(page);
    await doRegistration(page, user);
    await doLogin(page, user);
 
    const { productRow } = await addProduct(page, 'Apple Juice (1000ml)');
 
    const plusButton = productRow.getByRole('button').nth(1);
    await plusButton.click();
 
    await expect(
        productRow.locator('.mat-column-quantity').getByText('2')
    ).toBeVisible();
});