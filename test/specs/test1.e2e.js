import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import BasicDetails from '../pageobjects/basicDetails.js'
import jobDetails from '../pageobjects/jobDetails.js'
import workDetails from '../pageobjects/workDetails.js'

describe('Add Employee', () => {
    it('Verify if user is able to login into Keka', async () => {
        await LoginPage.open()
        await LoginPage.login('hulk11@simha.in', 'hulk11@simha.in')
        await $('span=Org').waitForDisplayed({ timeout: 50000 });
      
    })

    it('Verify if user is able to open "Add Employee" wizard' , async() => {
        await BasicDetails.addEmployeeWizard();
    })

   it('Verify if user is able to fill Basic details of Employee in Add Emplyee Wizard', async() =>{
        await BasicDetails.fillDetails()
        
    })

    it('Verify if user is able to fill job details', async()=>{
        await jobDetails.fillJobDetails()
        
    })

    it('Verify if user is able to add employee to the system', async() => {
        await workDetails.fillDetails();
        await workDetails.skipStep();
        await browser.pause(4000)
    })




    
})

