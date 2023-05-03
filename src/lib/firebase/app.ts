// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAo1IBnX5ujhtqF8Awtjn3JSff9ojcIgRI",
    authDomain: "music-soc-network.firebaseapp.com",
    projectId: "music-soc-network",
    storageBucket: "music-soc-network.appspot.com",
    messagingSenderId: "324843366934",
    appId: "1:324843366934:web:6e0a868ff8ec3b1f6ee337",
    measurementId: "G-ZGLPG59FKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)