import { test, expect } from '@playwright/test';
import { TextBox } from '../pages/TextBox';
import { Button } from '../pages/Button';
import { CheckBox } from '../pages/checkBox';

//test case for tesxt box
test('Fill Text Box Form', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box');

    const textBox = new TextBox(page);
    await textBox.fillForm('Nidhi', 'nidhi@test.com', 'Punjab');
});



test('Select Checkbox', async ({ page }) => {


    await page.goto('https://demoqa.com/checkbox');
    
    const checkbox = new CheckBox(page);
    await checkbox.selectHomeCheckbox();
});

//test case for button

test('Double Click Button', async ({ page }) => {


    await page.goto('https://demoqa.com/buttons')
     
    const button = new Button(page);
    await button.doubleClickAction();
});