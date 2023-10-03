// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfVzd-nleGbEUtkBkgimedJ4SzufSOyWI",
  authDomain: "user-email-pass-auth-eb68d.firebaseapp.com",
  projectId: "user-email-pass-auth-eb68d",
  storageBucket: "user-email-pass-auth-eb68d.appspot.com",
  messagingSenderId: "647194742407",
  appId: "1:647194742407:web:ac9c1a2289a28b3712f222"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;