// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-C5wUKtZwtqjh9TWnbB0fcm2Wd6gqY2c",
  authDomain: "authentication-3aa40.firebaseapp.com",
  projectId: "authentication-3aa40",
  storageBucket: "authentication-3aa40.firebasestorage.app",
  messagingSenderId: "561453264565",
  appId: "1:561453264565:web:3a25b6f008119a746898fc",
  measurementId: "G-X342J9Y0LK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;