// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function brandsListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_BRANDS_SUCCESS:
      return { ...state, brands: action.payload };
    case types.LIST_BRANDS_SUCCESS:
      return { ...state, listBrands: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}