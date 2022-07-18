import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyAehfT1_jVCX4L0bCwGWETcindvWxb3rqI",
//     authDomain: "fir-app-fa326.firebaseapp.com",
//     projectId: "fir-app-fa326",
//     storageBucket: "fir-app-fa326.appspot.com",
//     messagingSenderId: "162245155714",
//     appId: "1:162245155714:web:658152cb32a06d218d8d9b"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

