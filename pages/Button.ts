import { Page, Locator } from '@playwright/test';

export class Button{

    readonly page: Page;
    readonly doubleClickBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        this.doubleClickBtn = page.locator("//button[text()='Double Click Me']");
    }

    async doubleClickAction() {
        await this.doubleClickBtn.dblclick();
    }
}