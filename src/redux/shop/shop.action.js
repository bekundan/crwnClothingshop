import ShopActionType from "./shop.type";

export const fetchCollectionsStart = () => ({
  type: ShopActionType.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionType.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    // const collectionRef = firestore.collection("collection");
    // dispatch(fetchCollectionsStart());
    // collectionRef
    //   .get()
    //   .then((snapshot) => {
    //     const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap));
    //   })
    //   .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};

//this is called async action which using of redux thunk
