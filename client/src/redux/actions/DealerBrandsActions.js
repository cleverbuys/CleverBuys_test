import actionsFunction from "./generated/DealerBrandsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import dealerBrandsApi from "../../api/dealerBrandsApi";
 
 actionsFunction.loaddealerBrandsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return dealerBrandsApi
     .getdealerBrandsList()
     .then(list => {
       dispatch(actionsFunction.loaddealerBrandsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
