import { test, expect, BrowserContext } from '@playwright/test';
import { Pages } from '../../pages/Pages';

test.describe('Check owner functionality', () => { 
    let page;
    let pages: Pages;
    let context: BrowserContext;

    test.beforeAll(async ({ browser  }) => {
        const context = await browser.newContext({ recordVideo: { dir: 'videos/' } });
        await context.tracing.start({ screenshots: true, snapshots: true });
        page = await context.newPage();
        pages = new Pages(page);
        await page.goto('https://client.sana-commerce.dev/'); 
        await context.tracing.stop({ path: 'home_trace.zip' });
    });

    test.skip('Home', async ()=>{
        expect(await page.screenshot()).toMatchSnapshot('home.png');
    });

    test.skip('Create owner', async ()=>{
        await pages.menu().ownerTab().click(); 
        await pages.menu().addOwnerTab().click();  
        expect(await page.screenshot()).toMatchSnapshot('create-owner.png');
    });

    test.skip('Owner list', async () => {
        await context.tracing.start({ screenshots: true, snapshots: true });
        await pages.menu().ownerTab().click(); 
        await pages.menu().ownerList().click(); 
        await context.tracing.stop({ path: 'owner_list_trace.zip' });
        expect(await page.screenshot()).toMatchSnapshot('owner-list.png');
    });

    test.skip('Owner details', async () => {
        await context.tracing.start({ screenshots: true, snapshots: true });
        await pages.menu().ownerTab().click(); 
        await pages.menu().ownerList().click();
        await pages.manageOwners().ownerName('name surname').first().click();
        await page.waitForTimeout(5000);  
        await context.tracing.stop({ path: 'owner_details_trace.zip' });
        expect(await page.screenshot()).toMatchSnapshot('owner-details.png');
    });

    test.skip('Edit owner', async () => {
        await context.tracing.start({ screenshots: true, snapshots: true });
        await pages.menu().ownerTab().click(); 
        await pages.menu().ownerList().click();
        await pages.manageOwners().ownerName('name surname').first().click();
        await page.waitForTimeout(5000);  
        await pages.ownerDetails().editOwnerButton().click();
        await page.waitForTimeout(5000);
        await context.tracing.stop({ path: 'edit_owner_trace.zip' });
        expect(await page.screenshot()).toMatchSnapshot('edit-owner.png');
    });
});