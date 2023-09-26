const LoginPage = require('../pageobjects/login.page.js')
const fillbasicDetails = require('../pageobjects/basicDetails.js');
const BasicDetail = require('../models/basicDetails.model.js');
const JobDetail = require('../pageobjects/jobDetails.js')
const WorkDetail = require('../pageobjects/workDetails.js')
const { expect } = require('chai');
//Converting json data to string objects
const fs = require('fs')
let preDetails = JSON.parse(fs.readFileSync('test/prefilledData/prefilledData.json'))


describe('My Login application-Smoke', async () => {

   it('should login with valid credentials-Smoke', async () => {
      let logpage = new LoginPage()
      await logpage.open()
      await logpage.login('hulk11@simha.in', 'hulk11@simha.in')
      await $('span=Org').waitForDisplayed({ timeout: 50000 });

   })
   it('Verify if user is able to open Add Employee wizard and fill basic details-Smoke', async () => {

      let fillDetails = new fillbasicDetails();
      await fillDetails.addEmployeeWizard()
      let basicDetails = new BasicDetail(preDetails[1])
      await fillDetails.fillDetails(basicDetails);


   })

   it('Verify if after filling all the required basic details, user is able to move to "Job details" tab-Smoke', async () => {
      let fillDetails = new fillbasicDetails();
      await fillDetails.jobDetails();
      expect(await $('[formcontrolname="dateJoined"]').waitForDisplayed({ timeout: 40000 })).to.be.true;
   })

   it('Verify if user is able to fill Job details and move to "Work Details" tab-Smoke', async () => {
      let fillDetails = new JobDetail();
      await fillDetails.fillJobDetails();
      expect(await $('label[for="checkbox2"]').waitForDisplayed({ timeout: 50000 })).to.be.true;
   })

   it('Verify if user is able to add employee with onboarding group and having attendance tracking disabled', async () => {
      let workDetails = new WorkDetail();
      await workDetails.withOnboardingGroup();
      expect(await $('h4=Success!').isDisplayed()).to.be.true;

   })

   xit('Verify if user is able to add employee without assigning onboarding gorup and having attendace tracking enabled-Smoke', async () => {
     let workDetails = new WorkDetail();
     await workDetails.withoutOnboardingGroup();
     expect(await $('h4=Success!').isDisplayed()).to.be.true;
   })


})

