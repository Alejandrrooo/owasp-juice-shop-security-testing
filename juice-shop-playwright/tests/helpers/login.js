export async function doLogin(page,user){

    const enter_email = page.locator('#email');
    await enter_email.fill(user.email);

    const enter_password = page.locator('#password');
    await enter_password.fill(user.password);

    const click_login = page.locator('#loginButton');
    await click_login.click();
}