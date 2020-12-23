import firebase from "firebase";
require("firebase/auth");

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

// Initialize Firebase
const initializedFirebase = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfigs = {
  initializedFirebase,
  provider,
};
export default firebaseConfigs;
