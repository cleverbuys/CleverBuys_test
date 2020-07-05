import actionsFunction from "./generated/StateActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import stateApi from "../../api/stateApi";
 
 actionsFunction.loadstateList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return stateApi
     .getstateList()
     .then(list => {
       dispatch(actionsFunction.loadstateSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
