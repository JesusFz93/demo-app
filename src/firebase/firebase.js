// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjAeU66Xug3sgs2U6UahbReC2y9Zoi1xo",
  authDomain: "movies-app-ec58a.firebaseapp.com",
  projectId: "movies-app-ec58a",
  storageBucket: "movies-app-ec58a.appspot.com",
  messagingSenderId: "356628163642",
  appId: "1:356628163642:web:d5900eb8dd358f7dd91903",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
