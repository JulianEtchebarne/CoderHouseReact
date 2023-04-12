// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHfa-Vh657YnyrnaPZnbjMwlRrr1VPAa4",
  authDomain: "coderhousereact-a0520.firebaseapp.com",
  projectId: "coderhousereact-a0520",
  storageBucket: "coderhousereact-a0520.appspot.com",
  messagingSenderId: "395894192473",
  appId: "1:395894192473:web:757739ff06327812ddb448",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
