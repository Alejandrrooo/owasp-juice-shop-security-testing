import { startCheckout } from './startCheckout';
import { expect } from '@playwright/test';

export async function goToAddAddress(page) {
    await startCheckout(page);

    await page.waitForURL('**/#/address/select', { timeout: 10000 })
    
    await page.waitForSelector('button:has-text("Add New Address")', { timeout: 10000 })
    const new_address_button = page.locator('button:has-text("Add New Address")')
    await new_address_button.click()
}