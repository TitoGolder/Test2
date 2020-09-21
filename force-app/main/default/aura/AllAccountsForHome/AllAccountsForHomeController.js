({
	initialise: function(component, event, helper) {
		var action = component.get("c.getAllAccounts");
		action.setCallback(this, function(accounts) {
			component.set("v.accounts", accounts.getReturnValue());
		});
		$A.enqueueAction(action);
	},
	handleShowPopover: function(component, event, helper) {
		component.set("v.showPopover", event.currentTarget.dataset.recordid);
	},
	handleHidePopover: function(component, event, helper) {
		component.set("v.showPopover", null);
	},
	handleClick: function(cmp, event, helper) {
		event.preventDefault();
		cmp.find("navService").navigate({
			type: "standard__recordPage",
			attributes: {
				recordId: event.currentTarget.dataset.recordid,
				actionName: "view"
			}
		});
	}
});