import { test, expect } from '@playwright/test';
import { goToRegister } from '../helpers/goToRegister';
import { generateUser } from '../utils/dataGenerator';
import { doRegistration } from '../helpers/doRegister';
import { doLogin } from '../helpers/login';
import { startCheckout } from '../helpers/startCheckout';

test('addNewAddress', async ({ page }) => {
    const user = generateUser();
    
    await goToRegister(page);
    await doRegistration(page, user);
    await doLogin(page, user);
    await startCheckout(page); 

    const new_address_button = page.getByRole('button', {name:'Add New Address'})
    await expect(new_address_button).toBeVisible()({ timeout: 10000 })
    await new_address_button.click()

   

})