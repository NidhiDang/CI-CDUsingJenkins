import { Page, Locator } from '@playwright/test';

export class CheckBox{

    readonly page: Page;
    readonly expandAllBtn: Locator;
    readonly homeCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;

        this.expandAllBtn = page.locator("//span[@class='rc-tree-switcher rc-tree-switcher_close']");
        this.homeCheckbox = page.locator("//span[@aria-label='Select Home']");
    }

    async selectHomeCheckbox() {
        await this.expandAllBtn.click();
        await this.homeCheckbox.check();
    }
}