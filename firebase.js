import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwE52MFEpbobsB7dqbf6okBYQ4kWVvgQI",
  authDomain: "vexcode-docs.firebaseapp.com",
  projectId: "vexcode-docs",
  storageBucket: "vexcode-docs.appspot.com",
  messagingSenderId: "495707750027",
  appId: "1:495707750027:web:7baf9602ba8231a8b7de8e"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()

export {db};