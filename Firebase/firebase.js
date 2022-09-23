// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF0bywyCCquXm4xIiznCIUtOWyQP-n_6A",
  authDomain: "ob23-79bf7.firebaseapp.com",
  projectId: "ob23-79bf7",
  storageBucket: "ob23-79bf7.appspot.com",
  messagingSenderId: "4160114273",
  appId: "1:4160114273:web:b9d602275a1872471ae420",
  measurementId: "G-E14JPZZTT4"
};

firebase.initializeApp(config);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var database = firebase.database();
