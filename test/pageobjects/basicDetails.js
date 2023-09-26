//import { $,$$ } from '@wdio/globals'
//const faker = require('faker');
//import basicDetail from '../PrefilledData/prefilledData';
const basicDetail = require ('../PrefilledData/prefilledData')

class BasicDetails {

    get getOrg(){return $('span=Org');}
    get pendingDocuments(){return $('[routerlink="/org/documents/employee/pending-verification"]') }
    get newEmployee(){return $('[routerlink="../addemployee"]'); }
    get firstname() {return $('[formcontrolname="firstName"]');}
    get lastName() {return $('[formcontrolname="lastName"]');}
    get displayName() {return $('[formcontrolname="displayName"]');}
    get genderDropDown() {return $('[formcontrolname="gender"]')}
    get genderDropDownOption(){ return $$('div[class = "ng-option ng-star-inserted"]')[1];}
    get dateOfBirth() {return $('[formcontrolname="dateOfBirth"]');}
    get todayDateOFBirth(){return $('.today-date-highlight');}
    get mobileNumber(){return $('[formcontrolname="mobilePhone"]');}
    get email(){ return $('[formcontrolname="email"]');}
    get workerTypeDropDown(){return $$('[formcontrolname="workerType"]')[0];}
    get workerTypeOption(){return $$('div[class="ng-option ng-option-child ng-star-inserted"]')[2];}
    get dateOfJoining(){return $('[formcontrolname="dateJoined"]');}
    get continueButton(){ return $('button=Continue')}
    get dangerText(){return $('text-danger')}
    

    async addEmployeeWizard() {
      
        await this.getOrg.click();
        await this.pendingDocuments.waitForDisplayed({ timeout: 50000 });
        (await this.pendingDocuments).moveTo();
        const addNew = await this.newEmployee;
        await addNew.click();
    }


    async fillDetails(args){
       console.log(args);

        await (await this.firstname).setValue(args.firstName)
        await (await this.lastName).setValue(args.lastName)
        await (await this.displayName).setValue(args.displayName)
        await (await this.mobileNumber).setValue(args.mobileNumber)
        await (await this.email).setValue(args.email)
        await this.genderDropDown.click();
        await this.genderDropDownOption.click()
        await this.dateOfBirth.click()
        await this.todayDateOFBirth.click()
        await this.workerTypeDropDown.click()
        await this.workerTypeOption.click();
        await this.continueButton.click()
        
      }

      async jobDetails(){
        await this.continueButton.click()
      }

}

module.exports=BasicDetails;


