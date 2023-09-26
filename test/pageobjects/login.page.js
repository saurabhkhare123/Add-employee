//import { $,$$} from '@wdio/globals';
//import Page from './page.js';
const Page = require ('./page.js');
class LoginPage extends Page {
    get inputEmail() {
        return $('#email');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('.btn');
    }

    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.loginButton.click();
        const loginOptions = await $$('.ps-2');
        await loginOptions[2].click();
        await this.passwordInput.setValue(password);
        await browser.pause(9000);
        await this.loginButton.click();
    }

    open() {
        return super.open();
    }
}

module.exports= LoginPage;
