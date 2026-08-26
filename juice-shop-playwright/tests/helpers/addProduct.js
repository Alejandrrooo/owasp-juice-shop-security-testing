import { expect } from '@playwright/test';

export async function addProduct(page, productName) {
    const productCard = page
        .locator('mat-card')
        .filter({ has: page.locator(`[alt="${productName}"]`) });

    await productCard.getByRole('button', { name: 'Add to Basket' }).click();

    const basketCount = page.locator('.fa-layers-counter');
    await basketCount.click();

    // Esperar a que el carrito cargue
    await page.waitForURL('**/basket', { timeout: 10000 })
   
    const productRow = page
        .locator('mat-row')
        .filter({ hasText: productName });

    await expect(productRow).toBeVisible({ timeout: 10000 })

    return { basketCount, productRow };
}