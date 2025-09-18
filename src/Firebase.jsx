// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCV-MNzhtgmfy3d5wEHqWC8mnLAeq6wvcY",
  authDomain: "foodieexpress-3faae.firebaseapp.com",
  projectId: "foodieexpress-3faae",
  storageBucket: "foodieexpress-3faae.firebasestorage.app",
  messagingSenderId: "120186950787",
  appId: "1:120186950787:web:eaf31eac7a2d119e42b7b6",
  measurementId: "G-Q4KTYKMYRG"
};


// Firebase init
export const app = initializeApp(firebaseConfig);

// Firestore & Auth export
export const db = getFirestore(app);
export const auth = getAuth(app);