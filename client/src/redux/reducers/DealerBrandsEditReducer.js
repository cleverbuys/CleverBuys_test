// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  dealerbrands: {}
};

// Reducer
export default function dealerBrandsEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_DEALERBRANDS_SUCCESS:
      return { ...state, dealerbrands: action.payload };
    case types.UPDATE_DEALERBRANDS_SUCCESS:
      return { ...state, dealerbrands: action.payload };
    case types.GET_DEALERBRANDS_SUCCESS:
      return { ...state, dealerbrands: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}