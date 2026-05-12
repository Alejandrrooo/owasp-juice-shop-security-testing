import { test, expect } from '@playwright/test';
import { goToRegister } from '../helpers/goToRegister';
import { generateUser } from '../utils/dataGenerator';
import { doRegistration} from '../helpers/doRegister';
import { doLogin} from '../helpers/login';

test ('login', async ({page}) =>{
    const user = generateUser();

    await goToRegister(page);
    await doRegistration(page,user);
    await doLogin(page, user);

    const account = page.getByLabel('Show/hide account menu');
    await expect(account).toBeVisible();

    console.log('email:', user.email)
    console.log('password:', user.password)
})

