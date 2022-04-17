// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl3kq2lcCaYn3BKLpubq5uK9ycqA3Le6w",
  authDomain: "lens-king-96d37.firebaseapp.com",
  projectId: "lens-king-96d37",
  storageBucket: "lens-king-96d37.appspot.com",
  messagingSenderId: "561000019726",
  appId: "1:561000019726:web:1feb482192b79c806b895f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;