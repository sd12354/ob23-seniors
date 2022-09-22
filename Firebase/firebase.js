import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  var ref = firebase.database().ref();

  function getInfo() {
  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (error) {
    console.log("Error: " + error.code);
  });
}
// TODO: Replace the following with your app's Firebase project configuration
// https://firebase.google.com/docs/database/web/read-and-write

const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}