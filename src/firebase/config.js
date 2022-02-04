import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMbDz75FhjhpVKs4uQWbxoVP9dDWRqasY",
  authDomain: "pf-dojo-manage.firebaseapp.com",
  projectId: "pf-dojo-manage",
  storageBucket: "pf-dojo-manage.appspot.com",
  messagingSenderId: "856428659338",
  appId: "1:856428659338:web:96c958d63b202dcc0a6373",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
