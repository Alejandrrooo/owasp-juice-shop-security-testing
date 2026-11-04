import { test } from '@playwright/test';
import * as fs from 'fs';
import { goToRegister } from '../helpers/goToRegister';
import { generateUser } from './dataGenerator';
import { doRegistration } from '../helpers/doRegister';
import { doLogin } from '../helpers/login';
import { goToAddAddress } from '../helpers/goToAddAddress';

test('map elements', async ({ page }) => { 
const user = generateUser(); 
await goToRegister(page); 
await doRegistration(page, user); 
await doLogin(page, user); 
await goToAddAddress(page); 

await page.waitForLoadState('networkidle') 

let result = 'TYPE,TEXT,ID,NAME,PLACEHOLDER\n' 

// Buttons 
const buttons = page.getByRole('button') 
const buttonCount = await buttons.count() 
for (let i = 0; i < buttonCount; i++) { 
const text = (await buttons.nth(i).textContent())?.trim() 
const id = await buttons.nth(i).getAttribute('id') 
result += `BUTTON,"${text}","${id}",,\n` 
} 

// Inputs 
const inputs = page.getByRole('textbox') 
const inputCount = await inputs.count() 
for (let i = 0; i < inputCount; i++) { 
const id = await inputs.nth(i).getAttribute('id') 
const name = await inputs.nth(i).getAttribute('name') 
const placeholder = await inputs.nth(i).getAttribute('placeholder') 
result += `INPUT,,"${id}","${name}","${placeholder}"\n` 
} 

fs.writeFileSync('page-items.csv', result) 
console.log('Saved file: page-elements.csv')
}, 60000)