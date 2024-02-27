// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh8YgMY7VU8UCVZrOrsybmsTElCUvnrSU",
  authDomain: "personalportfolio-c20b2.firebaseapp.com",
  projectId: "personalportfolio-c20b2",
  storageBucket: "personalportfolio-c20b2.appspot.com",
  messagingSenderId: "112152602736",
  appId: "1:112152602736:web:228a9384f7544d8a0cecb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;