import { Page, Locator } from '@playwright/test';

export class TextBox {

    readonly page: Page;
    readonly fullName: Locator;
    readonly email: Locator;
    readonly currentAddress: Locator;
    readonly submitBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        this.fullName = page.locator("//input[@id='userName']");
        this.email = page.locator("//input[@id='userEmail']");
        this.currentAddress = page.locator("//textarea[@id='currentAddress']");
        this.submitBtn = page.locator("//button[@id='submit']");
    }

    async fillForm(name: string, mail: string, address: string) {
        await this.fullName.fill(name);
        await this.email.fill(mail);
        await this.currentAddress.fill(address);
        await this.submitBtn.click();
    }
}