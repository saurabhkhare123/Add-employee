import {expect} from '@wdio/globals'
import { expect as expectChai } from 'chai'
class workDetails{

    get onboardingEnabled(){
        return $('label[for="checkbox2"]');
    }
    get continueButton(){
        return $$('.btn')[1]
    }

    get toasterMessage(){
        return $(".toast-container")
    }

    get successMessage(){
        return $('h4=Success!')
    }

    get enablePayroll(){
        return $('label[for="toggle-switch"]')
    }

    get skipStepButton(){
        return $('button=Skip this Step')
    }
        async clickCheckboxAndSubmit() {
            await this.onboardingEnabled.waitForDisplayed({ timeout: 50000 });
            await this.onboardingEnabled.click();
            await this.continueButton.click();
            await this.toasterMessage.waitForDisplayed({ timeout: 50000 });
            expectChai(await this.successMessage.isDisplayed()).to.be.true;
        
            // Assertion to check when the toaster message will be removed
            await this.toasterMessage.waitForDisplayed({ reverse: true, timeout: 50000 });
          }
        
          async skipStep() {
            await this.enablePayroll.waitForDisplayed({ timeout: 50000 });
            await this.skipStepButton.click();
          }
    
}

export default new workDetails;