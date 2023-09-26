//import { browser } from '@wdio/globals'
const { browser } = require('@wdio/globals');
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open () {
        return browser.url(`https://login.kekastage.com/Account/Login?ReturnUrl=%2F`)
    }
}
module.exports = Page;