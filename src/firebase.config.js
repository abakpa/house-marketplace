import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAioqIi9Q-1Cvx2tXfsy_ouC2s9kXLGzg",
  authDomain: "house-marketplace-app-ea3ae.firebaseapp.com",
  projectId: "house-marketplace-app-ea3ae",
  storageBucket: "house-marketplace-app-ea3ae.appspot.com",
  messagingSenderId: "357278389712",
  appId: "1:357278389712:web:8a403c3034dc3bac4ed5d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
