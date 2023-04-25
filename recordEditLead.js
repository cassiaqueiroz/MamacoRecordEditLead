({
    show: function(component, event, helper) {
        
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title: "Success!",
            message: "The Lead has been created successfully."
        });
        toastEvent.fire();
        $A.get('e.force:refreshView').fire();

    }
})
