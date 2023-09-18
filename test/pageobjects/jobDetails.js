import { $ } from '@wdio/globals'

class JobDetailsPage {
    /**
    * define selectors using getter methods
    **/
    get dateJoined() {
        return $('[formcontrolname="dateJoined"]');
    }

    get todaysDate() {
        return $('.today-date-highlight');
    }

    get jobTitle() {
        return $('[formcontrolname="jobTitleId"]')
    }

    get selectJobtitle() {
        return $$("ng-option ng-star-inserted")[1]
    }

    get legalEntity() {
        return $('[formcontrolname="legalEntityId"]')
    }

    get buinsessUnit() {
        return $('[formcontrolname="businessUnitId"]')
    }

    get location() {
        return $('[formcontrolname="locationId"]')
    }
    get department() {
        return $('[formcontrolname="departmentId"]')
    }

    get selectOptions() {
        return $$(".ng-option")[0];
    }

    get searchManager() {
        return $$('.form-control')[2]
    }

    get reportingManager() {
        return $('span=Saurabh Kumar')
    }

    get continueButton() {
        return $('button=Continue')
    }



    /** 
        async fillJobDetails() {
    
          await this.dateJoined.click();
          await this.todaysDate.click();
          await this.jobTitle.click();
          await this.selectOptions.click();
          await $('[formcontrolname="timeType"]').click();
          await $('span[title="Full Time"]').click();
          
          // Dealing with dynamic dropdown
          const RM = await $$('.form-control');
          await RM[2].setValue("saur");
          await $("span=Saurabh Kumar").waitForDisplayed({ timeout: 50000 });
          await $("span=Saurabh Kumar").click();
      
          await $('[formcontrolname="legalEntityId"]').click();
          await $('span=sdfgfdg').click();
          await $('[formcontrolname="businessUnitId"]').click();
          await $('span=Fire nation1').click();
          await $('[formcontrolname="departmentId"]').click();
          await $('span=Navy').click();
          await $('[formcontrolname="locationId"]').click();
          await $('span=Indore').click();
      
          // Moving to the next page
          await $('button=Continue').click();
        } */
    async fillJobDetails() {
        await this.dateJoined.click();
        await this.todaysDate.click();
        await this.jobTitle.click();
        await this.selectOptions.click();

        //Dealing with dynamic dropdown
        await this.searchManager.setValue("saur");
        await this.reportingManager.waitForDisplayed({ timeout: 50000 });
        await this.reportingManager.click()
        
        await this.legalEntity.click();
        await this.selectOptions.click();
        await this.buinsessUnit.click();
        await this.selectOptions.click();
        await this.location.click()
        await this.selectOptions.click()
        await this.department.click();
        await this.selectOptions.click()
        await this.continueButton.click();


    }
}

export default new JobDetailsPage;
