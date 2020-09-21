public with sharing class AllAccountsForHomeApexController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts() {
        return [
            select 
                id, 
                name, 
                (select id, name, title, phone, email from Contacts) 
            from Account 
            order by name
        ];
    }
}