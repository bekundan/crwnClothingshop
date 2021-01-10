import ShopData from "./shop.data";

const INTIAL_STATE = {
  collections: ShopData,
};

const shopReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
