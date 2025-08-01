// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmBU2hpfxweD104Z5iYswTPvNQF6mWNXk",
  authDomain: "test-project-b36b1.firebaseapp.com",
  projectId: "test-project-b36b1",
  storageBucket: "test-project-b36b1.firebasestorage.app",
  messagingSenderId: "484450625374",
  appId: "1:484450625374:web:6a1ff553a6758c048d11cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };