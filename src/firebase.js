// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCmR_vZ-DzczjLyHZ7X8lCdA0uzFMs6p90",
    authDomain: "clone-app-badf5.firebaseapp.com",
    projectId: "clone-app-badf5",
    storageBucket: "clone-app-badf5.appspot.com",
    messagingSenderId: "945801259260",
    appId: "1:945801259260:web:d5ede1eef61c80922f4f79",
    measurementId: "G-9WVT3PL30S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };