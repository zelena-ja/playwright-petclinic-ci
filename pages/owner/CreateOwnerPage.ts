import test from '@playwright/test';
import { Page } from 'playwright';
import { BasePage } from '../BasePage';

export class CreateOwnerPage extends BasePage{
    constructor(page: Page) {
      super(page);
    }  

    firstNameField() {
      let element;
      test.step(`Find locator by id: #firstName`, async () =>{
        element = this.page.locator('#firstName');
      });
      return element;
    }

    lastNameField() {
      let element;
      test.step(`Find locator by id: #lastName`, async ()=>{
        element = this.page.locator('#lastName');
      });
      return element;
    }

    addressField() {
      let element;
      test.step('Find locator by id: #address', async () =>{
        element = this.page.locator('#address');
      });

      return element;
    }

    cityField() {
      let element;
      test.step('Find locator by id: #city', async () =>{
        element = this.page.locator('#city');
      });
      return element;
    }

    telephoneField() {
      let element;
      test.step('Find locator by id: #telephone', async () =>{
        element = this.page.locator('#telephone');
      });
      return element;
    }

    addOwnerButton(){
      let element;
      test.step('Find locator by className: .addOwner', async () =>{
        element = this.page.locator('.addOwner');
      });
      return element; 
    }
  }
