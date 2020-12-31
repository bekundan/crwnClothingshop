// this is the root reducer where we combine all of the reducer

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
