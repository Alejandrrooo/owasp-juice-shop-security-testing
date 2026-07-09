import { test, expect } from '@playwright/test';
import { goToRegister } from '../helpers/goToRegister';
import { generateUser } from '../utils/dataGenerator';
import { doRegistration } from '../helpers/doRegister';
import { doLogin } from '../helpers/login';
import { addProduct } from '../helpers/addProduct';
import { getRandomProduct } from '../helpers/getRandomProduct';

test('addProductAndStartCheckout', async ({ page }) => {
    const user = generateUser();

    await goToRegister(page);
    await doRegistration(page, user);
    await doLogin(page, user);

    const productName = await getRandomProduct(page);
    const { productRow } = await addProduct(page, productName);

    // confirmación de que el producto existe en el carrito
    await expect(productRow).toBeVisible();

    // pasar a checkout
    const checkoutButton = page.locator('#checkoutButton');
    await checkoutButton.click();

    // confirmación de que se llegó a la pantalla de dirección
    await expect(page.getByRole('heading', { name: 'Select an address' })).toBeVisible();
});