import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAoA8qXa28J3oLFKXUiW92hUzjgkabCmX8",
  authDomain: "iced-db.firebaseapp.com",
  databaseURL: "https://iced-db.firebaseio.com",
  projectId: "iced-db",
  storageBucket: "iced-db.appspot.com",
  messagingSenderId: "219996714987",
  appId: "1:219996714987:web:dd438358e2baf65c1f4bae"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
