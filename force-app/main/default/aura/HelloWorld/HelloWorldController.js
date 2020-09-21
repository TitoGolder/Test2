({
    doInit: function(component, event, helper) {
        var action=component.get("c.getContactAccounts");
        action.setParams({
            recordId: component.get("v.recordId")
        });
        action.setCallback(this,function(response){
            component.set("v.contacts", response.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})