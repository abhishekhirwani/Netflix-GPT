// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKq5jWoaHkE5cG7iKrGsFmvbOQ5J352Dg",
  authDomain: "netflixgpt-6085a.firebaseapp.com",
  projectId: "netflixgpt-6085a",
  storageBucket: "netflixgpt-6085a.appspot.com",
  messagingSenderId: "911475291302",
  appId: "1:911475291302:web:199d67a282a72badfc3067",
  measurementId: "G-5S93EYBNRD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
