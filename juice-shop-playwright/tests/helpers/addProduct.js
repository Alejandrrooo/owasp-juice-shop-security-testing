export async function addProduct(page,user){
        const appleJuiceCard = page
        .locator('mat-card')
        .filter({ has: page.locator('[alt= "Apple Juice (1000ml)"]')});

    await appleJuiceCard.getByRole('button', { name: 'Add to Basket'}).click();

    const basketCount = page.locator('.fa-layers-counter');
}