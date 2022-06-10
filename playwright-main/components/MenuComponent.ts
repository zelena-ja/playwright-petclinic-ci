import test from '@playwright/test';
import { Page } from 'playwright';
import { BasePage } from '../pages/BasePage';

export class MenuComponent extends BasePage{
    constructor(page: Page) {
        super(page);
      }

    ownerTab(){
        let element;
        test.step('Find locator by className: .ownerTab', async () =>{
            element = this.page.locator('.ownerTab');
        });
        return element;
    }

    ownerList(){
        let element;
        test.step('Find locator by className: .open li:nth-child(1) span:nth-child(2)', async () =>{
            element = this.page.locator('.open li:nth-child(1) span:nth-child(2)');
        });
        return element;
    }
    
    addOwnerTab(){
        let element;
        test.step('Find locator by cssSelector: a[ng-reflect-router-link=\"/owners/add\"]', async () =>{
            element = this.page.locator('a[ng-reflect-router-link=\"/owners/add\"]');
        });
        return  element;
    }
}
    