import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class LwcContactForAccount extends NavigationMixin(LightningElement) {
    @api contact;
    handleClick(event) {
        event.preventDefault();
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.contact.Id,
                actionName: "view"
            },
        });
    }
}