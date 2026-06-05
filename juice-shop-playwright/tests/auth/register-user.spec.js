import { test, expect } from '@playwright/test';
import { goToRegister } from '../helpers/goToRegister';
import { generateUser } from '../utils/dataGenerator';
import { doRegistration} from '../helpers/doRegister';
import { error } from 'console';

test ('register user', async ({page}) =>{
    const user = generateUser()

    await goToRegister(page)
    await doRegistration(page, user)

    console.log('email:', user.email)
    console.log('password:', user.password)
})
