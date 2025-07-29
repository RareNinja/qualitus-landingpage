// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvm4PvM-ofRo5klkgno0DGkvPiAzpSbYw",
    authDomain: "qualitup-c3932.firebaseapp.com",
    projectId: "qualitup-c3932",
    storageBucket: "qualitup-c3932.firebasestorage.app",
    messagingSenderId: "50403888499",
    appId: "1:50403888499:web:1102f48331535eebbf8906",
    measurementId: "G-NTGYWZMDT8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only on client side
let analytics = null;
if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
}

// Initialize Firestore
const db = getFirestore(app);

export { app, analytics, db };
