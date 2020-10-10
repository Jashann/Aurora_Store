import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBr8LjoxLy4HVMsPGKGQ51SENxww_UMYnQ",
  authDomain: "aurora-store-a408a.firebaseapp.com",
  databaseURL: "https://aurora-store-a408a.firebaseio.com",
  projectId: "aurora-store-a408a",
  storageBucket: "aurora-store-a408a.appspot.com",
  messagingSenderId: "805013228349",
  appId: "1:805013228349:web:2bf44071b59c28b6a25354",
  measurementId: "G-W73TFHG51X",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const db = firebase.firestore();

export const providerGoogle = new firebase.auth.GoogleAuthProvider();
