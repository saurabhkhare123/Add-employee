import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('#email');
    }

    get passwordInput () {
        return $('#password');
    }

    get loginButton () {
        return $('.btn');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.loginButton.click();
        let loginOptions = await $$('.ps-2');
        await loginOptions[2].click();
        await this.passwordInput.setValue(password);
        await browser.pause(9000);
        await this.loginButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

export default new LoginPage();
