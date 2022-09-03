import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnY0oxNWtlFQ3QxgnBG224Y4kqXRTmXXk",
  authDomain: "restaurantweb-c944f.firebaseapp.com",
  projectId: "restaurantweb-c944f",
  storageBucket: "restaurantweb-c944f.appspot.com",
  messagingSenderId: "983343581680",
  appId: "1:983343581680:web:2b972f7ea44cd7876eb535",
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
