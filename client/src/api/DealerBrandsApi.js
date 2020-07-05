import DealerBrandsApiGenerated from "./generated/DealerBrandsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class DealerBrandsApi extends DealerBrandsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get DealerBrands List
  static getDealerBrandsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/dealerbrandss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default DealerBrandsApi;