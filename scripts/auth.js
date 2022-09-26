  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup, signOut} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
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
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  })



document.getElementById("submit").addEventListener("click", (e) => {
  document.getElementById("vote").style.display = "none"
})

// Vote
var president = document.getElementById('president');
var presidentSelected = select.options[select.selectedIndex].value;
var vicePresident = document.getElementById('vicePresident');
var vicePresidentSelected = select.options[select.selectedIndex].value;
var secretary = document.getElementById('secretary');
var secretarySelected = select.options[select.selectedIndex].value;
var acoordinator = document.getElementById('acoordinator');
var acoordinatorSelected = select.options[select.selectedIndex].value;



function update() {

}

function remove() {

}