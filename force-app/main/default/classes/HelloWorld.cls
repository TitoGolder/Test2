public with sharing class HelloWorld {
    @AuraEnabled
    public static List<Contact> getContactAccounts(Id recordId) {
        list<Account> accs=[select id, (select id, name from Contacts) from Account where id=:recordId];
        return accs[0].contacts;
    }
}