import { test, expect } from '@playwright/test';
import { goToRegister } from '../helpers/goToRegister';
import { generateUser } from '../utils/dataGenerator';
import { doRegistration } from '../helpers/doRegister';
import { doLogin } from '../helpers/login';
import { addProduct } from '../helpers/addProduct';
 
test('removeProductFromCart', async ({ page }) => {
    const user = generateUser();
 
    await goToRegister(page);
    await doRegistration(page, user);
    await doLogin(page, user);
 
    const { productRow } = await addProduct(page, 'Apple Juice (1000ml)');
 
    const deleteButton = productRow.locator('.mat-column-remove button');
    await deleteButton.click();
 
    await expect(productRow).not.toBeVisible();
    await expect(page.locator('mat-row')).toHaveCount(0);
});