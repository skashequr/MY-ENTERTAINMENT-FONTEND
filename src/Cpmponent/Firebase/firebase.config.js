// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyCyC5KNr9HxNgm3AaxDt9zHQrK-2VNl63I",

  authDomain: "my-entertainment-3b33a.firebaseapp.com",

  projectId: "my-entertainment-3b33a",

  storageBucket: "my-entertainment-3b33a.appspot.com",

  messagingSenderId: "97941146457",

  appId: "1:97941146457:web:7327b37fa56f49e1735a48",

  measurementId: "G-CBT1Y0FXH6"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);