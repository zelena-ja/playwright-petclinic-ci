import { EditOwnerPage } from './owner/EditOwnerPage';
import { CreateOwnerPage } from './owner/CreateOwnerPage';
import { OwnerDetailsPage } from './owner/OwnerDetailsPage';
import { ManageOwnersPage } from './owner/ManageOwnersPage';
import { Page } from 'playwright';
import { MenuComponent } from '../components/MenuComponent';
import { CreatePetPage } from './pet/CreatePetPage';
import { EditPetPage } from './pet/EditPetPage';

export class Pages{
    readonly page: Page;

    constructor(page: Page) {
      this.page = page;
    }

    menu(){
        return new MenuComponent(this.page);
    }

    createOwner(){
        return new CreateOwnerPage(this.page);
    }

    editOwner(){
        return new EditOwnerPage(this.page);
    }

    ownerDetails(){
        return new OwnerDetailsPage(this.page);
    }

    manageOwners(){
        return new ManageOwnersPage(this.page);
    }

    createPet(){
        return new CreatePetPage(this.page);
    }

    editPet(){
        return new EditPetPage(this.page);
    }
}