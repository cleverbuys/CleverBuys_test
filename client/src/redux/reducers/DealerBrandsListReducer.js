// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function dealerBrandsListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_DEALERBRANDS_SUCCESS:
      return { ...state, dealerbrands: action.payload };
    case types.LIST_DEALERBRANDS_SUCCESS:
      return { ...state, listDealerBrands: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}