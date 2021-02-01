// import ShopData from "./shop.data";

//import the shop action fro the fire base
import ShopActionType from "./shop.type";

const INTIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionType.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
