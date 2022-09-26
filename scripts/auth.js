  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup, signOut} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
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
    measurementId: "G-E14JPZZTT4",
    databaseURL: "https://ob23-79bf7-default-rtdb.firebaseio.com/",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider(app);
  const auth = getAuth(app);
  const database = getDatabase(app);
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  login.addEventListener("click", (e) => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      login.style.display = "none"
      localStorage.setItem("email", user.email)
      console.log(user.email)
      document.getElementById("top").innerHTML = "Welcome " + user.email + " !"
      vote.style.display = "block"
      signOut.style.display = "block"
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  })



document.getElementById("submit").addEventListener("click", (e) => {
  document.getElementById("vote").style.display = "none"
  var email = "dobsdesigns432@gmail.com";
  var president = document.getElementById('president').value;
  var vicePresident = document.getElementById('vicePresident').value;
  var secretary = document.getElementById('secretary').value;
  var acoordinator = document.getElementById('acoordinator').value;
    const db = getDatabase();
    set(ref(db, 'canidates'), {
      email: email,
      president: president,
      vicePresident: vicePresident,
      secretary: secretary,
      acoordinator: acoordinator,
    });


})

// Vote




function update() {

}

function remove() {

}