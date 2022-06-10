import test from '@playwright/test';
import { Page } from 'playwright';
import { BasePage } from '../BasePage';

export class OwnerDetailsPage extends BasePage{
    constructor(page: Page) {
        super(page);
      }

    petsList(){
        let element;
        test.step(`Find locator by sccSelector: app-pet-list`, async () =>{
            element = this.page.locator('app-pet-list');
        });
        return element;
    }

    addNewPetButton(){
        let element;
        test.step(`Find locator by sccSelector: .btn.btn-default.addNewPet`, async () =>{
            element = this.page.locator('.btn.btn-default.addNewPet');
        });
        return element;
    }

    editPetButton(){
        let element;
        test.step(`Find locator by sccSelector: app-pet-list .editPet`, async () =>{
            element = this.page.locator('app-pet-list .editPet');
        });
        return element;
    }

    deletePetButton(){
        let element;
        test.step(`Find locator by sccSelector: app-pet-list .deletePet`, async () =>{
            element = this.page.locator('app-pet-list .deletePet');
        });
        return element;
    }

    petNames(){
        let element;
        test.step(`Find locator by sccSelector: app-pet-list .petName`, async () =>{
            element = this.page.locator('app-pet-list .petName');
        });
        return element;
    }
    
    editOwnerButton(){
        let element;
        test.step(`Find locator by sccSelector: .editOwner`, async () =>{
            element = this.page.locator('.editOwner');
        });
        return element;
    }

    ownerAddressField(){
        let element;
        test.step(`Find locator by sccSelector: .ownerAddress`, async () =>{
            element = this.page.textContent('.ownerAddress');
        });
        return element;
    }
}