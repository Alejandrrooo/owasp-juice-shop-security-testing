import { test, expect } from '@playwright/test';
import { goToRegister } from '../helpers/goToRegister';
import { generateUser } from '../utils/dataGenerator';
import { doRegistration} from '../helpers/doRegister';

test ('login', async ({page}) =>{
    const user = generateUser();

    await goToRegister(page);
    await doRegistration(page,user);

    const enter_email = page.locator('#email');
    await enter_email.fill(user.email);

    const enter_password = page.locator('#password');
    await enter_password.fill('Test123!!');

    const click_login = page.locator('#loginButton');
    await click_login.click();

    const password_incorrect = page.getByText('Invalid email or password.');
    await expect(password_incorrect).toBeVisible();

})

