/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN DealershipActionsGenerated.js PLEASE EDIT ../DealershipActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import DealershipApi from "../../../api/DealershipApi";

let actionsFunction = {

  //CRUD METHODS

  // Create dealership
  createDealership: function(dealership) {
    return function(dispatch) {
      return DealershipApi
        .createDealership(dealership)
        .then(dealership => {
          dispatch(actionsFunction.createDealershipSuccess(dealership));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createDealershipSuccess: function(dealership) {
    return { type: types.CREATE_DEALERSHIP_SUCCESS, payload: dealership };
  },


  // Delete dealership
  deleteDealership: function(id) {
    return function(dispatch) {
      return DealershipApi
        .deleteDealership(id)
        .then(dealership => {
          dispatch(actionsFunction.deleteDealershipSuccess(dealership));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteDealershipSuccess: function(dealership) {
    return { type: types.DELETE_DEALERSHIP_SUCCESS, payload: dealership };
  },


  // Find by brands
  findBybrands: function(key) {
    return function(dispatch) {
      return DealershipApi
        .findBybrands(key)
        .then(item => {
          dispatch(actionsFunction.findBybrandsSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBybrandsSuccess: function(item) {
    return { type: types.FINDBYBRANDS_DEALERSHIP_SUCCESS, payload: item };
  },


  // Get dealership
  loadDealership: function(id) {
    return function(dispatch) {
      return DealershipApi
        .getOneDealership(id)
        .then(dealership => {
          dispatch(actionsFunction.loadDealershipSuccess(dealership));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadDealershipSuccess: function(dealership) {
    return { type: types.GET_DEALERSHIP_SUCCESS, payload: dealership };
  },

  // Load  list
  loadDealershipList: function() {
    return function(dispatch) {
      return DealershipApi
        .getDealershipList()
        .then(list => {
          dispatch(actionsFunction.loadDealershipListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadDealershipListSuccess: function(list) {
    return { type: types.LIST_DEALERSHIP_SUCCESS, payload: list };
  },

	
  // Save dealership
  saveDealership: function(dealership) {
    return function(dispatch) {
      return DealershipApi
        .saveDealership(dealership)
        .then(dealership => {
          dispatch(actionsFunction.saveDealershipSuccess(dealership));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveDealershipSuccess: function(dealership) {
    return { type: types.UPDATE_DEALERSHIP_SUCCESS, payload: dealership };
  },


};

export default actionsFunction;