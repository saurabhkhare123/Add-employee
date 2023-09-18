import { $ } from '@wdio/globals'
//const faker = require('faker');
//import basicDetail from '../PrefilledData/prefilledData';

class BasicDetails {

    get getOrg(){
        return $('span=Org');
    }

    get pendingDocuments(){
        return $('[routerlink="/org/documents/employee/pending-verification"]')
    }

    get newEmployee(){
        return $('[routerlink="../addemployee"]');
    }

    get firstname() {
        return $('[formcontrolname="firstName"]');
    }

    get lastName() {
        return $('[formcontrolname="lastName"]');
    }
    get displayName() {
        return $('[formcontrolname="displayName"]');
    }

    get genderDropDown() {
       return $('[formcontrolname="gender"]')

    }
    get genderDropDownOption(){
        return $$('div[class = "ng-option ng-star-inserted"]')[1];
    }

    get dateOfBirth() {
        return $('[formcontrolname="dateOfBirth"]');
    }

    get todayDateOFBirth(){
        return $('.today-date-highlight');
    }

    get mobileNumber(){
        return $('[formcontrolname="mobilePhone"]');
    }

    get workerTypeDropDown(){
        return $$('[formcontrolname="workerType"]')[0];
    }

    get workerTypeOption(){
        return $$('div[class="ng-option ng-option-child ng-star-inserted"]')[2];
    }

    get dateOfJoining(){
        return $('[formcontrolname="dateJoined"]');
    }

    get continueButton(){
        return $('button=Continue')
    }

    

    async addEmployeeWizard() {
        try {

            await this.getOrg.click();
        } catch (error) {
            console.error('Error clicking on the "Org" element:', error);
        }

        await this.pendingDocuments.waitForDisplayed({ timeout: 50000 });
        (await this.pendingDocuments).moveTo();
        const addNew = await this.newEmployee;
        await addNew.click();
    }


    async fillDetails(){
        await this.firstname.setValue("Raj")
        await this.lastName.setValue("kumar")
        await this.displayName.setValue("Raj Kumar")
        await this.genderDropDown.click()
        await this.genderDropDownOption.click()
        await this.dateOfBirth.click()
        await this.todayDateOFBirth.click()
        await this.workerTypeDropDown.click()
        await this.workerTypeOption.click();
        await this.continueButton.click()
        //assertion to wait for the element to load before taking further actions
        await this.dateOfJoining.waitForDisplayed({timeout:40000})

  
      }
}

export default new BasicDetails;
