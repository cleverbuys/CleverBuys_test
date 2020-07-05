import actionsFunction from "./generated/DealershipActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import dealershipApi from "../../api/dealershipApi";
 
 actionsFunction.loaddealershipList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return dealershipApi
     .getdealershipList()
     .then(list => {
       dispatch(actionsFunction.loaddealershipSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
