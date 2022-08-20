// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoDsnJpWQaaoxZSQJdhPd_VSEetF6odmo",
  authDomain: "sunshine-project-5e05b.firebaseapp.com",
  projectId: "sunshine-project-5e05b",
  storageBucket: "sunshine-project-5e05b.appspot.com",
  messagingSenderId: "541546017411",
  appId: "1:541546017411:web:0849290df35e0ed8aee1b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;