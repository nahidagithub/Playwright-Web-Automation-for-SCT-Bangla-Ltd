import { test, expect } from '@playwright/test';

test.describe('DocVisu Test Suite', () => {

test('TC 01 - SKT site', async ({ page }) => {
  await page.goto('http://skt.test.local/en/login');

  // Click the get started link.
 // await page.getByRole('link', { name: 'Get started' }).click();
  
});

test('TC 02 -  Verify successfully Login or not', async ({ page }) => {
  await page.goto('http://skt.test.local/en/login');
  await page.locator('ui5-dialog input[name="username"]').fill('nahida');

  await page.locator('[name="password"]').fill('1234');
  //await page.pause();

 await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();
 //await page.getByRole('button', { name: 'Login' }).click();

});


test('TC 03 - Verify DocVisu site is visible', async ({ page }) => {

  await page.goto('http://skt.test.local/en/login');
  await page.locator('ui5-dialog input[name="username"]').fill('nahida');



  await page.locator('[name="password"]').fill('1234');
  //await page.pause();

 await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();
 //await page.getByRole('button', { name: 'Login' }).click();


await page.locator('#DocVisu > ui5-card > a').click();


});



test('TC 04 - Verify clicking settings button', async ({ page }) => {
  await page.goto('http://skt.test.local/en/login');
  await page.locator('ui5-dialog input[name="username"]').fill('nahida');

  await page.locator('[name="password"]').fill('1234');
  //await page.pause();

await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();
//await page.getByRole('button', { name: 'Login' }).click();


await page.locator('#DocVisu > ui5-card > a').click();
await page.locator('.ui5-sn-item-text').click();

});

test('TC 05 - Verify clicking Directory Structure', async ({ page }) => {
  await page.goto('http://skt.test.local/en/login');
  await page.locator('ui5-dialog input[name="username"]').fill('nahida');
 
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
  await page.locator('ui5-dialog input[name="username"]').fill('nahida');

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

test('TC 07 - Verify creating new Directory structure', async ({ page }) => {
  await page.goto('http://skt.test.local/en/login');
  await page.locator('ui5-dialog input[name="username"]').fill('nahida');

await page.locator('[name="password"]').fill('1234');
  //await page.pause();

await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();
//await page.getByRole('button', { name: 'Login' }).click();


await page.locator('#DocVisu > ui5-card > a').click();
await page.locator('.ui5-sn-item-text').click();
await page.getByRole('tab', { name: 'Directory Structure', exact: true }).click();
await page.waitForTimeout(2000);

await page.locator('#newButton').click();

await page
  .locator('#addGroupDialog ui5-dialog')
  .locator('ui5-label:has-text("Structure Name")')
  .locator('xpath=following-sibling::ui5-input')
  .locator('input')
  .fill('Test Structure');

await page
  .locator('#addGroupDialog')
  .locator('ui5-dialog')
  .getByRole('button', { name: 'Save', exact: true })
  .click();

//Assertion
await expect(
  page.getByText('Test Structure', { exact: true }).first()
).toBeVisible();

});

test('TC 08 - Verify new document section creating', async ({ page }) => {

  await page.goto('http://skt.test.local/en/login');
  await page.locator('ui5-dialog input[name="username"]').fill('nahida');


await page.locator('[name="password"]').fill('1234');
  //await page.pause();

await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();
//await page.getByRole('button', { name: 'Login' }).click();


await page.locator('#DocVisu > ui5-card > a').click();
await page.locator('.ui5-sn-item-text').click();


await page.getByRole('tab', { name: 'Document Section', exact: true }).click();
await page.locator('#newButton').click();


 await page
  .locator('ui5-label:has-text("Section Name")')
  .locator('xpath=following-sibling::ui5-input')
  .locator('input')
  .fill('Parts');

await page
  .locator('#directoryStructureComboBox')
  .locator('input')
  .fill('Test Structure');

 await page.locator('#saveButtonUserGroup').click();
 await page.waitForTimeout(2000)

 //Assertion
await expect(page.locator('ui5-dialog[open]')).toHaveCount(0);

});

test('TC 09 - Verify clicking any section from the screen', async ({ page }) => {

  await page.goto('http://skt.test.local/en/login');
  await page.locator('ui5-dialog input[name="username"]').fill('nahida');


  await page.locator('[name="password"]').fill('1234');
  //await page.pause();

 await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();
 //await page.getByRole('button', { name: 'Login' }).click();

await page.locator('#DocVisu > ui5-card > a').click();
await page.getByText('Parts', { exact: true }).click();

});

test('TC 10 - Verify clicking New button and pop up model open', async ({ page }) => {

  await page.goto('http://skt.test.local/en/login');
  await page.locator('ui5-dialog input[name="username"]').fill('nahida');


  await page.locator('[name="password"]').fill('1234');
  //await page.pause();

 await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();
 //await page.getByRole('button', { name: 'Login' }).click();

await page.locator('#DocVisu > ui5-card > a').click();
await page.getByText('Parts', { exact: true }).click();
await page.locator('#newButton').click();

//Assertion
await expect(
  page.locator('ui5-dialog[open]')
).toBeVisible();

});

test('TC 11 - Verify creating new record in the screen', async ({ page }) => {

  await page.goto('http://skt.test.local/en/login');
  await page.locator('ui5-dialog input[name="username"]').fill('nahida');

await page.locator('[name="password"]').fill('1234');
  //await page.pause();

 await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();
 //await page.getByRole('button', { name: 'Login' }).click();

await page.locator('#DocVisu > ui5-card > a').click();
await page.getByText('Parts', { exact: true }).click();
await page.locator('#newButton').click();


await page
  .locator('ui5-dialog[open]')
  .locator('ui5-label:text-is("Name")')
  .locator('~ ui5-input')
  .locator('input')
  .fill('machine');

  /*
await page
  .locator('ui5-dialog[open]')
  .getByRole('textbox')
  .nth(1)
  .fill('NewDocument');
 */
await page.waitForTimeout(2000)
await page.locator('ui5-dialog[open] #saveButton').click();

});

test('TC 12 - Verify clicking any record from the screen', async ({ page }) => {

  await page.goto('http://skt.test.local/en/login');
  await page.locator('ui5-dialog input[name="username"]').fill('nahida');

/*
  await page
  .locator('app-login-page ui5-dialog input')
  .first()
  .fill('nahida');
*/

await page.locator('[name="password"]').fill('1234');
  //await page.pause();

await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();

await page.locator('#DocVisu > ui5-card > a').click();
await page.getByText('Parts', { exact: true }).click();

await page
  .locator(
    '.AnalyticalTable_trActive_n66fk_179 div[role="gridcell"][data-column-id-cell="name"]'
  )
  .click();
  await page.waitForTimeout(2000)

//Assertion
await expect(
  page.locator('ui5-illustrated-message')
).toBeVisible();

});


test('TC 13 - Verify clicking any record from the screen', async ({ page }) => {

await page.goto('http://skt.test.local/en/login');
await page.locator('ui5-dialog input[name="username"]').fill('nahida');


await page.locator('[name="password"]').fill('1234');
  //await page.pause();

await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();

await page.locator('#DocVisu > ui5-card > a').click();
await page.getByText('Parts', { exact: true }).click();

await page
  .locator(
    '.AnalyticalTable_trActive_n66fk_179 div[role="gridcell"][data-column-id-cell="name"]'
  )
  .click();

await page.locator('ui5-button[icon="overflow"]').click();

//Assertion
await expect(
  page.locator('ui5-menu').getByText('New Folder')
).toBeVisible();

});


test('TC 14 - Verify clicking new folder button and pop should be opened', async ({ page }) => {

await page.goto('http://skt.test.local/en/login');
await page.locator('ui5-dialog input[name="username"]').fill('nahida');


await page.locator('[name="password"]').fill('1234');
  //await page.pause();

await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();

await page.locator('#DocVisu > ui5-card > a').click();
await page.getByText('Parts', { exact: true }).click();

await page
  .locator(
    '.AnalyticalTable_trActive_n66fk_179 div[role="gridcell"][data-column-id-cell="name"]'
  )
  .click();

await page.locator('ui5-button[icon="overflow"]').click();

await page.locator('ui5-menu-item[icon="add-folder"]', {
  hasText: 'New Folder'
}).click();

//Assertion
await expect(
  page.locator('ui5-dialog#isNewFolderDialogOpen')
).toBeVisible();

});


test('TC 15 - Verify adding new folder', async ({ page }) => {

await page.goto('http://skt.test.local/en/login');
await page.locator('ui5-dialog input[name="username"]').fill('nahida');


await page.locator('[name="password"]').fill('1234');
  //await page.pause();

await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();

await page.locator('#DocVisu > ui5-card > a').click();
await page.getByText('Parts', { exact: true }).click();

await page
  .locator(
    '.AnalyticalTable_trActive_n66fk_179 div[role="gridcell"][data-column-id-cell="name"]'
  )
  .click();

await page.locator('ui5-button[icon="overflow"]').click();

await page.locator('ui5-menu-item[icon="add-folder"]', {
  hasText: 'New Folder'
}).click();

await page.locator('ui5-dialog#isNewFolderDialogOpen ui5-input input#inner')
  .fill('MyNewFolder');
await page.waitForTimeout(2000)

await page
  .locator('#isNewFolderDialogOpen')
  .locator('ui5-button#saveButton')
  .click();

  //Assertion
await expect(
  page.locator('ui5-dialog#isNewFolderDialogOpen')
).toBeHidden();

});

test.only('TC 16 - Verify clicking three dot button', async ({ page }) => {

await page.goto('http://skt.test.local/en/login');
await page.locator('ui5-dialog input[name="username"]').fill('nahida');


await page.locator('[name="password"]').fill('1234');
  //await page.pause();

await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();

await page.locator('#DocVisu > ui5-card > a').click();
await page.getByText('Parts', { exact: true }).click();

await page
  .locator(
    '.AnalyticalTable_trActive_n66fk_179 div[role="gridcell"][data-column-id-cell="name"]'
  )
  .click();
/*
await page.locator('ui5-button[icon="overflow"]').click();

await page.locator('ui5-menu-item[icon="add-folder"]', {
  hasText: 'New Folder'
}).click();

await page.locator('ui5-dialog#isNewFolderDialogOpen ui5-input input#inner')
  .fill('MyNewFolder');
await page.waitForTimeout(2000)

await page
  .locator('#isNewFolderDialogOpen')
  .locator('ui5-button#saveButton')
  .click();
*/
await page.locator(
  'ui5-button#menu-23754237540\\.D23754 button[title="More"]'
).click();

await page.waitForTimeout(2000)
});

test.only('TC 16 - Verify adding new file', async ({ page }) => {

await page.goto('http://skt.test.local/en/login');
await page.locator('ui5-dialog input[name="username"]').fill('nahida');
await page.locator('[name="password"]').fill('1234');
  //await page.pause();

await page.locator('ui5-dialog.dialog-container').getByRole('button', { name: 'Login', exact: true }).click();

await page.locator('#DocVisu > ui5-card > a').click();
await page.getByText('Parts', { exact: true }).click();

await page
  .locator(
    '.AnalyticalTable_trActive_n66fk_179 div[role="gridcell"][data-column-id-cell="name"]'
  )
  .click();
/*
await page.locator('ui5-button[icon="overflow"]').click();

await page.locator('ui5-menu-item[icon="add-folder"]', {
  hasText: 'New Folder'
}).click();

await page.locator('ui5-dialog#isNewFolderDialogOpen ui5-input input#inner')
  .fill('MyNewFolder');
await page.waitForTimeout(2000)

await page
  .locator('#isNewFolderDialogOpen')
  .locator('ui5-button#saveButton')
  .click();
*/
await page.locator(
  'ui5-button#menu-23754237540\\.D23754 button[title="More"]'
).click();

await page.waitForTimeout(2000)
});


})










