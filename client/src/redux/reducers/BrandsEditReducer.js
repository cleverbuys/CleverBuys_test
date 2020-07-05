// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  brands: {}
};

// Reducer
export default function brandsEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_BRANDS_SUCCESS:
      return { ...state, brands: action.payload };
    case types.UPDATE_BRANDS_SUCCESS:
      return { ...state, brands: action.payload };
    case types.GET_BRANDS_SUCCESS:
      return { ...state, brands: action.payload };
    case types.FINDBYBRANDS_DEALERSHIP_SUCCESS:
      return { ...state, listDealership: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}