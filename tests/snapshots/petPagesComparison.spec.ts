import { test, expect } from '@playwright/test';
import { Pages } from '../../pages/Pages';

test.describe('Check owner functionality', () => { 
    let page;
    let pages: Pages;

    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext({ recordVideo: { dir: 'videos/' } });
        page = await context.newPage();
        pages = new Pages(page);
        await page.goto('https://client.sana-commerce.dev/'); 
    });

    test.skip('Create pet', async ()=>{
        await pages.menu().ownerTab().click(); 
        await pages.menu().ownerList().click(); 
        await pages.manageOwners().ownerName('Elena Yasinskaya').click();
        await page.waitForTimeout(5000);
        await pages.ownerDetails().addNewPetButton().click();
        expect(await page.screenshot()).toMatchSnapshot('create-pet.png');
    });

    test.skip('Edit pet', async () => {
        await pages.menu().ownerTab().click(); 
        await pages.menu().ownerList().click(); 
        await pages.manageOwners().ownerName('Elena Yasinskaya').click();
        await page.waitForTimeout(5000);
        await pages.ownerDetails().editPetButton().first().click();
        await page.waitForTimeout(5000);
        expect(await page.screenshot()).toMatchSnapshot('edit-pet.png');
    });
});