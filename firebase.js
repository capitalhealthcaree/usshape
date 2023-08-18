import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCpBNr90j-cwpy4VemT03i_-E878KrDnZE",
  authDomain: "usshape-1b139.firebaseapp.com",
  projectId: "usshape-1b139",
  storageBucket: "usshape-1b139.appspot.com",
  messagingSenderId: "176551571812",
  appId: "1:176551571812:web:3d5ef3a3edd95ab4b9ca71",
  measurementId: "G-CRRP9GTTY4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;
