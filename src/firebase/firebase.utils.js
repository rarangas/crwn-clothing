import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "crwn-db-3a2f9",
    storageBucket: "crwn-db-3a2f9.appspot.com",
    messagingSenderId: "54032510474",
    appId: "",
    measurementId: ""
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;