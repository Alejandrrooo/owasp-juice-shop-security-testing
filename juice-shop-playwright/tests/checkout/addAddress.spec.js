import { test, expect } from '@playwright/test';
import { goToRegister } from '../helpers/goToRegister';
import { generateUser } from '../utils/dataGenerator';
import { doRegistration } from '../helpers/doRegister';
import { doLogin } from '../helpers/login';
import { goToAddAddress } from '../helpers/goToAddAddress';

test('addNewAddress', async ({ page }) => {
    const user = generateUser();
    
    await goToRegister(page);
    await doRegistration(page, user);
    await doLogin(page, user);
    await goToAddAddress(page);

    const countryInput = page.getByPlaceholder('Please provide a country.')
    await countryInput.fill('United States')

    const userNameInput = page.getByPlaceholder('Please provide a name')
    await userNameInput.fill('Test User')

    const phoneInput = page.getByPlaceholder('Please provide a mobile number.')
    await phoneInput.fill('1234567890')

    const zipCodeInput = page.getByPlaceholder('Please provide a ZIP code.')
    await zipCodeInput.fill('12345')

    const addressInput = page.getByPlaceholder('Please provide an address.')
    await addressInput.fill('123 Test St')

    const cityInput = page.getByPlaceholder('Please provide a city.')
    await cityInput.fill('Test City')

    const stateInput = page.getByPlaceholder('Please provide a state.')
    await stateInput.fill('Test State')

    await page.locator('#submitButton').click()

    await expect(page.getByText('Test User')).toBeVisible({ timeout: 5000 })


})