import { Page } from 'playwright';

export class BasePage{
    readonly page: Page;

    constructor(page: Page) {
      this.page = page;
    }
}