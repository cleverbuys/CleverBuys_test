import actionsFunction from "./generated/BrandsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import brandsApi from "../../api/brandsApi";
 
 actionsFunction.loadbrandsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return brandsApi
     .getbrandsList()
     .then(list => {
       dispatch(actionsFunction.loadbrandsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
