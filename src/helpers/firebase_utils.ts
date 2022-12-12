// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVZP_-wZVOpLQEt_s7vdVA1-bBvF3P9Mk",
  authDomain: "mediahub-afeef.firebaseapp.com",
  projectId: "mediahub-afeef",
  storageBucket: "mediahub-afeef.appspot.com",
  messagingSenderId: "701132154233",
  appId: "1:701132154233:web:95b6bf3761c0aa6b5bbba8",
  measurementId: "G-HT7JLRCEXK",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase packages
export const auth = getAuth(app);
export const db = getFirestore(app);

/// All helping functions are sotred here after
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Firebase authentication helper
 */
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName || "";
      const email = result.user.email || "";
      const profilepic = result.user.photoURL || "";
      // storeing to the local storage
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilepic", profilepic);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};