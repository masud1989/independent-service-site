// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3tXpX78KFmPOsTJ46hJno-fY8OWZOYEI",
  authDomain: "indivisual-trainer.firebaseapp.com",
  projectId: "indivisual-trainer",
  storageBucket: "indivisual-trainer.appspot.com",
  messagingSenderId: "192756059339",
  appId: "1:192756059339:web:f68967edaea6dd29291f4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;

