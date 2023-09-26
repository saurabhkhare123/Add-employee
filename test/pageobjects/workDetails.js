//import {expect as expectWDIO} from '@wdio/globals'
const expectChai = require('chai').expect
//import { $,$$} from '@wdio/globals';
class workDetails {

    get onboardingEnabled() {
        return $('label[for="checkbox2"]');
    }
    get onboardingFlow() {
        return $('[formcontrolname="onboardFlowId"]')
    }
    get onBoardingFlowOptions() {
        return $$('[class="text-primary ng-star-inserted"]');
    }
    get isAttendanceDisabled() {
        return $('[for="isAttendanceDisabled"]');
    }
    get continueButton() {
        return $$('.btn')[1]
    }

    get toasterMessage() {
        return $(".toast-container")
    }

    get successMessage() {
        return $('h4=Success!')
    }

    get enablePayroll() {
        return $('label[for="toggle-switch"]')
    }

    get skipStepButton() {
        return $('button=Skip this Step')
    }
    async withoutOnboardingGroup() {
        await this.onboardingEnabled.waitForDisplayed({ timeout: 50000 });
        await this.onboardingEnabled.click();
        await this.continueButton.click();
        await this.toasterMessage.waitForDisplayed({ timeout: 50000 });
        expectChai(await this.successMessage.isDisplayed()).to.be.true;

        // Assertion to check when the toaster message will be removed
        await this.toasterMessage.waitForDisplayed({ reverse: true, timeout: 50000 });
    }

    async withOnboardingGroup() {
        await this.onboardingFlow.click();
        await this.onBoardingFlowOptions[1].click()
        await this.isAttendanceDisabled.click();
        await this.continueButton.click();
        await this.toasterMessage.waitForDisplayed({ timeout: 50000 });


    }
    async skipStep() {
        await this.enablePayroll.waitForDisplayed({ timeout: 50000 });
        await this.skipStepButton.click();
    }

}

module.exports = workDetails;