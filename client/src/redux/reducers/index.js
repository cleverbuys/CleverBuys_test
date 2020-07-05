import { combineReducers } from "redux";

// START IMPORT REDUCERS
import HomeReducer from "./HomeReducer";
import BrandsEditReducer from "./BrandsEditReducer";
import BrandsListReducer from "./BrandsListReducer";
import DealerBrandsEditReducer from "./DealerBrandsEditReducer";
import DealerBrandsListReducer from "./DealerBrandsListReducer";
import DealershipEditReducer from "./DealershipEditReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	HomeReducer,
	BrandsEditReducer,
	BrandsListReducer,
	DealerBrandsEditReducer,
	DealerBrandsListReducer,
	DealershipEditReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
