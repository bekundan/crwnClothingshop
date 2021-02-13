//takeEvery listen every action and the specific type
import { takeEvery, call, put, all } from "redux-saga/effects";
import ShopActionType from "./shop.type";
import {
  firestore,
  convertCollectionsSnapShotToMap,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.action";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collection");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapShotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeEvery(ShopActionType.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
