import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBfHdkMrUPL0OryERQfx473EOM5B58yX3I",
  authDomain: "crwn-db-9ed97.firebaseapp.com",
  projectId: "crwn-db-9ed97",
  storageBucket: "crwn-db-9ed97.appspot.com",
  messagingSenderId: "279600664434",
  appId: "1:279600664434:web:62249445dc5e71f1a2d7eb",
  measurementId: "G-DPJ3DHC0BW",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

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
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
