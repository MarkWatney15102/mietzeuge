// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIFcAjYU5rLun13kh6C4qE3JKWHamAnnU",
  authDomain: "mietzeuge.firebaseapp.com",
  projectId: "mietzeuge",
  storageBucket: "mietzeuge.appspot.com",
  messagingSenderId: "835791573018",
  appId: "1:835791573018:web:606fe13fad7ff89fd9c1a3",
  measurementId: "G-D9BZHW7PQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
app.auth = getAuth();

const auth = getAuth();

export { app, auth };