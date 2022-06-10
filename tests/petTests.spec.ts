import { test, expect, firefox, chromium } from '@playwright/test';
import { Pages } from '../pages/Pages';

test.describe('Check pet functionality', ()=>{
    let page;
    let pages: Pages;

    test.beforeAll(async ({  }) => {
        //const browser = await firefox.connect({ timeout: 0, wsEndpoint: 'ws://localhost:4444/playwright/firefox?headless=false&enableVideo=true&enableVNC=true' });
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
        await test.step(`Click on the "All" owner menu item`, async () => {
            await pages.menu().ownerList().click(); 
        });
        await test.step(`Select owner with a name "Elena Yasinskaya"`, async () => {
            await pages.manageOwners().ownerName('Elena Yasinskaya').click();
            await page.waitForTimeout(5000);
        });
    });

    test('Create pet', async () => {
        let petsCount;
        await test.step(`Remember the number of pets in the list`, async () => {
            petsCount = await pages.ownerDetails().petsList().count();
        });
        await test.step(`Click on the "Add new pet" buuton`, async () => {
            await pages.ownerDetails().addNewPetButton().click();
        });
        await test.step(`Input the name "tuzya" of pet in the field`, async () => {
            await pages.createPet().nameField().fill('tuzya');
        });
        await test.step(`Select the pet birth date "2021/09/08"`, async () => {
            await pages.createPet().birthDateField().fill('2021/09/08');
        });
        await test.step(`Select the pet type "dog"`, async () => {
            await pages.createPet().typeDropDown().selectOption([{label: 'dog'}, {value: '1: Object'}, {index: 2}]);
        });
        await test.step(`Click on the "Save" button`, async () => {
            await pages.createPet().saveButton().click();
            await page.waitForTimeout(5000);
        });

        await test.step(`Verify that the count of pets increased to 1`, async () => {
            expect (await pages.ownerDetails().petsList().count() == (petsCount + 1));
        });
    });

    test('Edit pet', async () => {
        await test.step(`Select the first pet in the list and click on "Edit" button`, async () => {
            await pages.ownerDetails().editPetButton().first().click();
            await page.waitForTimeout(5000);
        });
        await test.step(`Change the pet name to "jim"`, async () => {
            await pages.editPet().nameField().fill('jim');
        });
        await test.step(`Click on the "Update" button`, async () => {
            await pages.editPet().updateButton().click();
            await page.waitForTimeout(5000);
        });

        await test.step(`Verify that the pet name was changed to "jim"`, async () => {
            expect ((await pages.ownerDetails().petNames().elementHandles()).find(e => e.innerText.toString() == 'jim'));
        });
    });

    test('Delete pet', async () => {
        let petsCount;
        await test.step(`Remember the number of pets in the list`, async () => {
            petsCount = await pages.ownerDetails().petsList().count();
        });
        await test.step(`Select the first pet in the list and click on the "Delete" button`, async () => {
            await pages.ownerDetails().deletePetButton().first().click();
            await page.waitForTimeout(5000);
        });

        await test.step(`Verify that the count of pets decreased to 1`, async () => {
            expect (await pages.ownerDetails().petsList().count() == petsCount - 1);
        });
    });
});