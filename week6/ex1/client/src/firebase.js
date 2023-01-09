import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/database";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCT7svyOQ9VJ5cYiXSpIcqowIoLO-RpkWM",
  authDomain: "clone-5a3fa.firebaseapp.com",
  projectId: "clone-5a3fa",
  storageBucket: "clone-5a3fa.appspot.com",
  messagingSenderId: "35445865058",
  appId: "1:35445865058:web:876ea4a93f2aad929faf3b",
  measurementId: "G-NL1S8GWLLK"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, storage,provider };
export default db;

