import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AllAccountsForHomeApexController.getAllAccounts';

export default class LwcAllAccountsForHome extends LightningElement {
    @wire(getAllAccounts) accounts;
}