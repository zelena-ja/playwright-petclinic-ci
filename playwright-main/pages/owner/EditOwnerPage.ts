import test from '@playwright/test';
import { Page } from 'playwright';
import { BasePage } from '../BasePage';

export class EditOwnerPage extends BasePage{
    constructor(page: Page) {
        super(page);
      }

    addressField(){
        let input;
        test.step(`Find locator by id: #address`, async () =>{
            input = this.page.locator('#address');
        });
        test.step('Remove old text in the field.', async () =>{
            input.click({ clickCount: 3 });
            this.page.keyboard.press('Delete');
        });
        return input;
    }

    uploadButton(){
        let element;
        test.step(`Find locator by className: .updateOwner`, async () =>{
            element = this.page.locator('.updateOwner');
        });
        return element;
    }
}