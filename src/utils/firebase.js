// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ9AyjRaDJUPZcmWH2cwfWrKPZCNjExx0",
  authDomain: "netflixgpt-d704a.firebaseapp.com",
  projectId: "netflixgpt-d704a",
  storageBucket: "netflixgpt-d704a.firebasestorage.app",
  messagingSenderId: "781925299209",
  appId: "1:781925299209:web:80fa08aa5f82a55611b4d8",
  measurementId: "G-1MKE5ZPJ00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
