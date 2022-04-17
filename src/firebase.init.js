// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDknM_n-MNut83VxGwhFlFXW5FAQ4TnpZE",
  authDomain: "indivusual-it-trainer.firebaseapp.com",
  projectId: "indivusual-it-trainer",
  storageBucket: "indivusual-it-trainer.appspot.com",
  messagingSenderId: "730554845692",
  appId: "1:730554845692:web:8a04a98b2aad5b08f08a79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

