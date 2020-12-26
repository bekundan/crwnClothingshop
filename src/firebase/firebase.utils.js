import firebase from "firebase/app";
// for storege
import "firebase/firestore";
//for thr auth
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBvZSTxFSCQg4q4S_pHSCyuYOhBo_dzQ0U",
  authDomain: "crwn-db22.firebaseapp.com",
  projectId: "crwn-db22",
  storageBucket: "crwn-db22.appspot.com",
  messagingSenderId: "39161171738",
  appId: "1:39161171738:web:bb4e2581d18798a5e6e6a3",
  measurementId: "G-5M6CMS9BBN",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestone = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
