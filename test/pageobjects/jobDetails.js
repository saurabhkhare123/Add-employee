import { $ } from '@wdio/globals'

class JobDetailsPage {
    async fillJobDetails() {

     /**
     * define selectors using getter methods
     **/
     

      await $('[formcontrolname="dateJoined"]').click();
      await $('.today-date-highlight').click();
      await $('[formcontrolname="jobTitleId"]').click();
      await $('span=Police').click();
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
    }
  }
  
export default new JobDetailsPage;
  