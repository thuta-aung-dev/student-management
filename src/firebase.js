// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlEbpUnNjqCoIUYeF-1ArrqMwpFhwGXTE",
  authDomain: "clothing-crud.firebaseapp.com",
  projectId: "clothing-crud",
  storageBucket: "clothing-crud.firebasestorage.app",
  messagingSenderId: "576921324985",
  appId: "1:576921324985:web:9895540197fe208478ba68",
  measurementId: "G-5XNRFY2X0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;