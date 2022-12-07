import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBgMLaBok6VMzm5U-wE1Nl6OsT0Ay2IkGc",
  authDomain: "twitter-2a5d4.firebaseapp.com",
  projectId: "twitter-2a5d4",
  storageBucket: "twitter-2a5d4.appspot.com",
  messagingSenderId: "1025949559963",
  appId: "1:1025949559963:web:2ec3f3c8bcba50c9626a3e",
  measurementId: "G-BCZ5HEKFT5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };

export default db;
