import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/database";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhI5TEy6f_J4DNqRohxlVcqHdOVEHIPZY",
  authDomain: "rising-theater-364218.firebaseapp.com",
  projectId: "rising-theater-364218",
  storageBucket: "rising-theater-364218.appspot.com",
  messagingSenderId: "1027786254505",
  appId: "1:1027786254505:web:3aa2d950fc1f7fc66e61b8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
