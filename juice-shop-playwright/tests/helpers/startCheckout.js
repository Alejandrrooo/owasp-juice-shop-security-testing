import {getRandomProduct} from '../helpers/getRandomProduct'
import {addProduct} from '../helpers/addProduct'
import { expect } from '@playwright/test';

export async function startCheckout(page) {
    const productName = await getRandomProduct(page)
    const {productRow} = await addProduct (page,productName)

    await expect(productRow).toBeVisible();

    const checkoutButton = page.locator('#checkoutButton')
    await checkoutButton.click()

    await page.waitForURL('**/#/address/select', { timeout: 10000 })

    return {productName, productRow}
}