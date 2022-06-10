import test from '@playwright/test';
import { Page } from 'playwright';
import { BasePage } from '../BasePage';

export class CreatePetPage extends BasePage{
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

    birthDateField(){
        let element;
        test.step(`Find locator by sccSelector: input[name="birthDate"]`, async () =>{
            element = this.page.locator('input[name="birthDate"]');
        });
        return element;
    }

    typeDropDown(){
        let element;
        test.step(`Find locator by sccSelector: #type`, async () =>{
            element = this.page.locator('#type');
        });
        return element;
    }
    
    saveButton(){
        let element;
        test.step(`Find locator by sccSelector: .savePet`, async () =>{
            element = this.page.locator('.savePet');
        });
        return element;
    }
}