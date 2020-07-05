// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  dealership: {}
};

// Reducer
export default function dealershipEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.GET_DEALERSHIP_SUCCESS:
      return { ...state, dealership: action.payload };
    case types.UPDATE_DEALERSHIP_SUCCESS:
      return { ...state, dealership: action.payload };
    case types.CREATE_DEALERSHIP_SUCCESS:
      return { ...state, dealership: action.payload };
    case types.LIST_BRANDS_SUCCESS:
      return { ...state, listBrands: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}