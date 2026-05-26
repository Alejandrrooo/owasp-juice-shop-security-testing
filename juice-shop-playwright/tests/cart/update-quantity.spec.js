import { test, expect } from '@playwright/test';
import { goToRegister } from '../helpers/goToRegister';
import { generateUser } from '../utils/dataGenerator';
import { doRegistration} from '../helpers/doRegister';
import { doLogin} from '../helpers/login';

test ('updateQuantityinCart', async ({page}) =>{
    const user =generateUser()

    await goToRegister(page)
    await doRegistration(page,user)
    await doLogin(page,user)

    const appleJuiceCard = page
        .locator('mat-card')
        .filter({ has: page.locator('[alt= "Apple Juice (1000ml)"]')})

    await appleJuiceCard.getByRole('button', { name: 'Add to Basket'}).click();

    const basketCount = page.locator('.fa-layers-counter')
    await basketCount.click()

    const quantityInput = page
        .locator('.fa-plus-square')
        .filter({has: page.locator('[alt= "Apple Juice (1000ml)"]')})

    const appleJuiceRow = page
        .locator('mat-row')
        .filter({ hasText: 'Apple Juice (1000ml)' })

    const plusButton = appleJuiceRow.getByRole('button').nth(1);
    await plusButton.click()

    await expect(
        appleJuiceRow.locator('.mat-column-quantity').getByText('2')
    ).toBeVisible()

})