import { test, expect, firefox, chromium } from '@playwright/test';
import { Pages } from '../pages/Pages';

test.describe('Check owner functionality', () => {  
    let page;
    let pages: Pages;

    test.beforeAll(async ({  }) => {
        //const browser = await chromium.connect({ timeout: 0, wsEndpoint: 'ws://localhost:4444/playwright/chromium?headless=false&enableVideo=true&enableVNC=true' });
        const browser = await firefox.launch();
        const context = await browser.newContext({ recordVideo: { dir: 'videos/' } });
        page = await context.newPage();
        pages = new Pages(page);
    });

    test.beforeEach(async () => {   
        await test.step('Open "Home" page: https://client.sana-commerce.dev/', async () => {
            await page.goto('https://client.sana-commerce.dev/');  
        });
        await test.step(`Click on the "Owner" menu item`, async ()=>{
            await pages.menu().ownerTab().click(); 
        });
    });

   test('Create owner', async ()=>{
        await test.step(`Click on the "Add" owner menu item}`, async () => {
            await pages.menu().addOwnerTab().click();  
        });
        await test.step(`Input the owner first name: dorothy`, async () => {
            await pages.createOwner().firstNameField().fill('dorothy');
        });
        await test.step(`Input the owner last name: graham`, async () => {
            await pages.createOwner().lastNameField().fill('graham');
        });
        await test.step(`Input the owner address: green street 1`, async () => {
            await pages.createOwner().addressField().fill('green street 1');
        });
        await test.step(`Input the owner city: summerfield`, async () => {
            await pages.createOwner().cityField().fill('summerfield');
        });
        await test.step(`Input the owner phone: 0123456789`, async () => {
            await pages.createOwner().telephoneField().fill('0123456789');
        });
        await test.step(`Click on the "Add Owner" button`, async () => {
            await pages.createOwner().addOwnerButton().click();
        });
        
        await test.step(`Verify that last owner in the list contains "dorothy graham"`, async () => {
            expect (await pages.manageOwners().ownerList().last().textContent()).toBe('dorothy graham');
        });
    });

    test('Update owner', async () => {
        await test.step(`Click on the "All" owner menu item`, async () => {
            await pages.menu().ownerList().click(); 
        });
        await test.step(`Select owner with a name "name surname"`, async () => {
            await pages.manageOwners().ownerName('name surname').first().click();
            await page.waitForTimeout(5000); 
        });
        await test.step(`Click on "EditOwner" button`, async () => {
            await pages.ownerDetails().editOwnerButton().click();
            await page.waitForTimeout(5000);
        });
        await test.step(`Change the current address to "red street 10"`, async () => {
            await pages.editOwner().addressField().fill("red street 10");
        });
        await test.step(`Click on "Upload" button`, async () => {
            await pages.editOwner().uploadButton().click();
            await page.waitForTimeout(5000);
        });

        await test.step(`Verify that the addres of owner was changed to "red street 10"`, async () => {
            expect (await pages.ownerDetails().ownerAddressField()).toBe("red street 10");
        });
    });
});