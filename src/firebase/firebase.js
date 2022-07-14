// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAehfT1_jVCX4L0bCwGWETcindvWxb3rqI",
    authDomain: "fir-app-fa326.firebaseapp.com",
    projectId: "fir-app-fa326",
    storageBucket: "fir-app-fa326.appspot.com",
    messagingSenderId: "162245155714",
    appId: "1:162245155714:web:658152cb32a06d218d8d9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);