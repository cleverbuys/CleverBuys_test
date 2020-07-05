import BrandsApiGenerated from "./generated/BrandsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class BrandsApi extends BrandsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Brands List
  static getBrandsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/brandss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default BrandsApi;