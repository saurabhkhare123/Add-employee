import { $ } from '@wdio/globals'
//const faker = require('faker');
import basicDetail from '../PrefilledData/prefilledData';

class BasicDetails {
    get firstname() {
        return $('[formcontrolname="firstName"]');
    }

    get lastName() {
        return $('[formcontrolname="lastName"]');
    }
    get displayName() {
        return $('[formcontrolname="displayName"]');
    }

    get gender() {

        return $('[formcontrolname="gender"]').$$('.ng-option ng-star-inserted')[1];
    }

    get dateOfBirth() {
        return $('[formcontrolname="dateOfBirth"]').$('.today-date-highlight');
    }

    async addEmployeeWizard() {
        try {

            await $('span=Org').click();
        } catch (error) {
            console.error('Error clicking on the "Org" element:', error);
        }

        await $('[routerlink="/org/documents/employee/pending-verification"]').waitForDisplayed({ timeout: 50000 });
        (await $('[routerlink="/org/documents/employee/pending-verification"]')).moveTo();
        const addNew = await $('[routerlink="../addemployee"]')
        await addNew.click();
    }
/** 
    async fillDetails() {
        await $('[formcontrolname="firstName"]').setValue("Ronit");
        await $('[formcontrolname="lastName"]').setValue("Roy");
        await $('[formcontrolname="displayName"]').setValue("Ronit Roy");
        await $('[formcontrolname="gender"]').click();
        await $('span=Male').click();
        await $('[formcontrolname="email"]').setValue("bharat67@simha.in");
        await $('[formcontrolname="dateOfBirth"]').click();
        await $('.today-date-highlight').click();
        await $('[formcontrolname="mobilePhone"]').setValue("96433597354");
        await $('[formcontrolname="workerType"]').click();
        await $('span=Contract').click();
        await $('[formcontrolname="numberSeriesId"]').click();
        await $('span=Kspl').click();
        await $('button=Continue').click();
        await $('[formcontrolname="dateJoined"]').waitForDisplayed({ timeout: 50000 });
    }*/

    async fillDetails(){
        await this.firstname.setValue(basicDetail.firstname)
  
      }
}

export default new BasicDetails;
