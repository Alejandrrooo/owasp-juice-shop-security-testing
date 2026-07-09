export async function getRandomProduct(page) {
    const allCards = page.locator('mat-card');
    const count = await allCards.count();

    const availableProducts = [];

    for (let i = 0; i < count; i++) {
        const card = allCards.nth(i);

        const ribbon = card.locator('.ribbon');
        const hasRibbon = (await ribbon.count()) > 0;

        const isSoldOut = hasRibbon && (await ribbon.innerText()).includes('Sold Out');

        if (!isSoldOut) {
            const name = await card.locator('img').getAttribute('alt');
            availableProducts.push(name);
        }
    }

    const randomIndex = Math.floor(Math.random() * availableProducts.length);
    return availableProducts[randomIndex];
}