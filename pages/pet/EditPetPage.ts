import test from '@playwright/test';
import { Page } from 'playwright';
import { BasePage } from '../BasePage';

export class EditPetPage extends BasePage{
    constructor(page: Page) {
        super(page);
      }

    nameField(){
        let element;
        test.step(`Find locator by sccSelector: #name`, async () =>{
            element = this.page.locator('#name');
        });
        return element;
    } 

    updateButton(){
        let element;
        test.step(`Find locator by sccSelector: .updatePet`, async () =>{
            element = this.page.locator('.updatePet');
        });
        return element;
    }
}