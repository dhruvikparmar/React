// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFVUcCVOvFqXEBU2Iz_7DeK5vo5UUb5uE",
  authDomain: "task-manager-285a9.firebaseapp.com",
  projectId: "task-manager-285a9",
  storageBucket: "task-manager-285a9.firebasestorage.app",
  messagingSenderId: "939285987478",
  appId: "1:939285987478:web:638434889dd949397b82b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth , db };