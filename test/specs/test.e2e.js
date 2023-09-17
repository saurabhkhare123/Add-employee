import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('hulk11@simha.in', 'hulk11@simha.in')
        await browser.pause(2000);
    })

    it('Verify if user is able to login', async () => {
       
    })
})

