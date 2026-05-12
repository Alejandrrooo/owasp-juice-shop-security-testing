import { test, expect } from '@playwright/test';
import { goToRegister } from '../helpers/goToRegister';
import { generateUser } from '../utils/dataGenerator';
import { doRegistration} from '../helpers/doRegister';

test ('logout', async ({page}) =>{
    const user = generateUser();

    await goToRegister(page);
    await doRegistration(page,user);

    const enter_email = page.locator('#email');
    await enter_email.fill(user.email);

    const enter_password = page.locator('#password');
    await enter_password.fill(user.password);

    const click_login = page.locator('#loginButton');
    await click_login.click();

    const click_account = page.getByLabel('Show/hide account menu');
    await click_account.click();

    const click_logout = page.getByLabel('Logout');
    await click_logout.click();

    const basket_disappears = page.getByLabel('Show the shopping cart');
    await expect(basket_disappears).not.toBeVisible();
    

})
