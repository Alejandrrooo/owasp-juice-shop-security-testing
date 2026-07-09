import { test, expect } from '@playwright/test';
import { goToRegister } from '../helpers/goToRegister';
import { generateUser } from '../utils/dataGenerator';
import { doRegistration } from '../helpers/doRegister';
import { doLogin } from '../helpers/login';
import { addProduct } from '../helpers/addProduct';

test ('addProductToCart', async ({page}) =>{
    const user = generateUser();

    await goToRegister(page);
    await doRegistration(page,user);
    await doLogin(page,user);

    const {basketCount} = await addProduct(page,'Apple Juice (1000ml)');

    await expect(basketCount).toBeVisible();
    await expect(basketCount).not.toHaveText('0')
})