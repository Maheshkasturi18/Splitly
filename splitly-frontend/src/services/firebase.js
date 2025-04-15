// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, TwitterAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAH6Uzcu8RMy8QSE7XgNuQMNHvr2SBTR7k",
    authDomain: "striply-ed6b6.firebaseapp.com",
    projectId: "striply-ed6b6",
    storageBucket: "striply-ed6b6.firebasestorage.app",
    messagingSenderId: "1007846236406",
    appId: "1:1007846236406:web:f24bf43d2887b48a1a4cd7",
    measurementId: "G-SF4FS0RKJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export { auth, googleProvider, twitterProvider, signInWithPopup };