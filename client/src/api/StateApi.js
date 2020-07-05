import StateApiGenerated from "./generated/StateApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class StateApi extends StateApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get State List
  static getStateList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/states")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default StateApi;