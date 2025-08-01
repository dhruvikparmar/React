// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsioWJCG-D8jkdQD18uImyH5N5unfalMc",
  authDomain: "login-signup-ad3e4.firebaseapp.com",
  projectId: "login-signup-ad3e4",
  storageBucket: "login-signup-ad3e4.firebasestorage.app",
  messagingSenderId: "897730805343",
  appId: "1:897730805343:web:003eb67ddffe07883625ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };