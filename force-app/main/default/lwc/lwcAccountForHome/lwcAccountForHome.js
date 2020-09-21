import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class LwcAccountForHome extends NavigationMixin(LightningElement) {
    @api account;

    showContacts = false;

    handleClick(event) {
        event.preventDefault();
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.account.Id,
                actionName: "view"
            },
        });
    }

    togglePopover(event) {
        event.preventDefault();
        this.showContacts = !this.showContacts;
    }
}