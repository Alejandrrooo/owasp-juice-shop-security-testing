import { goToLogin } from "./goToLogin";

export async function goToRegister(page) {
    await goToLogin(page);

    const register = page.locator('#newCustomerLink a');
    await register.click()
    
}