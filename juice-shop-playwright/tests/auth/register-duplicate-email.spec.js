import { test, expect } from '@playwright/test';
import { goToRegister } from '../helpers/goToRegister';
import { generateUser } from '../utils/dataGenerator';
import { doRegistration} from '../helpers/doRegister';
import { error } from 'console';

test('duplicate email fails', async ({ page }) => {
  const user = generateUser();

  await goToRegister(page);
  await doRegistration(page, user);

  await goToRegister(page);
  await doRegistration(page, user);
  
  const errorMessage = page.locator('.error');
  await expect(errorMessage).toBeVisible();
  });