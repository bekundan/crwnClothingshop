import firebase from "firebase/app";
// for storege
import "@firebase/firestore";
//for thr auth
import "firebase/auth";

//config the firebase
const config = {
  apiKey: "AIzaSyBvZSTxFSCQg4q4S_pHSCyuYOhBo_dzQ0U",
  authDomain: "crwn-db22.firebaseapp.com",
  databaseURL: "https://crwn-db22-default-rtdb.firebaseio.com",
  projectId: "crwn-db22",
  storageBucket: "crwn-db22.appspot.com",
  messagingSenderId: "39161171738",
  appId: "1:39161171738:web:bb4e2581d18798a5e6e6a3",
  measurementId: "G-5M6CMS9BBN",
};

//there we store the user data in firebase storage
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating Users", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
//moving shop data to firebase
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
