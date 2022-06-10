import test from '@playwright/test';
import { Page } from 'playwright';
import { BasePage } from '../BasePage';

export class ManageOwnersPage extends BasePage{
    constructor(page: Page) {
        super(page);
    }

    ownerList(){
        let element;
        test.step(`Find locator by sccSelector: .petOwner a`, async () =>{
            element = this.page.locator('.petOwner a');
        });
        return element;
    }
    
    ownerName(name: string){
        let element;
        test.step(`Find locator by sccSelector: ${'text=' + name}`, async () =>{
            element = this.page.locator('text=' + name);
        });
        return element;
    }
}