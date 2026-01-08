import { test, expect } from '@playwright/test';

test.describe('DocVisu Test Suite', () => {

test('TC 01 - SKT site', async ({ page }) => {
  await page.goto('http://skt.test.local/en/login');

  // Click the get started link.
 // await page.getByRole('link', { name: 'Get started' }).click();
  
});

test('TC 02 -  Verify successfully Login or not', async ({ page }) => {
  await page.goto('http://skt.test.local/en/login');

  await page
  .locator('app-login-page ui5-dialog input')
  .first()
  .fill('nahida');


  await page.locator('[name="password"]').fill('1234');
  //await page.pause();

 await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();
 //await page.getByRole('button', { name: 'Login' }).click();

});


test('TC 03 - Verify DocVisu site is visible', async ({ page }) => {

  await page.goto('http://skt.test.local/en/login');

  await page
  .locator('app-login-page ui5-dialog input')
  .first()
  .fill('nahida');


  await page.locator('[name="password"]').fill('1234');
  //await page.pause();

 await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();
 //await page.getByRole('button', { name: 'Login' }).click();

 
await page.locator('#DocVisu > ui5-card > a').click();


});



test('TC 04 - Verify clicking settings button', async ({ page }) => {
  await page.goto('http://skt.test.local/en/login');

  await page
  .locator('app-login-page ui5-dialog input')
  .first()
  .fill('nahida');


  await page.locator('[name="password"]').fill('1234');
  //await page.pause();

await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();
//await page.getByRole('button', { name: 'Login' }).click();


await page.locator('#DocVisu > ui5-card > a').click();
await page.locator('.ui5-sn-item-text').click();

});

test('TC 05 - Verify clicking Directory Structure', async ({ page }) => {
  await page.goto('http://skt.test.local/en/login');

  await page
  .locator('app-login-page ui5-dialog input')
  .first()
  .fill('nahida');


  await page.locator('[name="password"]').fill('1234');
  //await page.pause();

await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();

await page.locator('#DocVisu > ui5-card > a').click();
await page.locator('.ui5-sn-item-text').click();
await page.getByRole('tab', { name: 'Directory Structure', exact: true }).click();
await page.waitForTimeout(2000);

});

test('TC 06 - Verify clicking new button and pop should be opened', async ({ page }) => {
  await page.goto('http://skt.test.local/en/login');

  await page
  .locator('app-login-page ui5-dialog input')
  .first()
  .fill('nahida');


  await page.locator('[name="password"]').fill('1234');
  //await page.pause();

await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();
//await page.getByRole('button', { name: 'Login' }).click();


await page.locator('#DocVisu > ui5-card > a').click();
await page.locator('.ui5-sn-item-text').click();
await page.getByRole('tab', { name: 'Directory Structure', exact: true }).click();
await page.waitForTimeout(2000);

await page.locator('#newButton').click();

//Assertion
await expect(page.locator('#addGroupDialog > ui5-dialog')).toBeVisible();

});


})










