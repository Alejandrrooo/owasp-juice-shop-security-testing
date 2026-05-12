 export async function doRegistration(page, user) {
  const emailInput = page.getByLabel('Email');
  await emailInput.fill(user.email);

  const passwordInput = page.locator('#passwordControl');
  await passwordInput.fill(user.password);

  const repeatPasswordInput = page.getByLabel('Field to confirm the password');
  await repeatPasswordInput.fill(user.password);

  const question = page.getByText(' Security Question ');
  await question.click();

  const selectAnswer5 = page.getByText(" Maternal grandmother's first name? ");
  await selectAnswer5.click();

  const answerInput = page.getByLabel('Field for the answer to the security question');
  await answerInput.fill('Angelica');

  const addPerson = page.getByText('person_add');
  await addPerson.click();

}