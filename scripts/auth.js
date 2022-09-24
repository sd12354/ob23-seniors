  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
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
  const provider = new GoogleAuthProvider(app);
  const auth = getAuth(app);

  login.addEventListener("click", (e) => {
    signInWithRedirect(auth, provider);

    getRedirectResult(auth)
      .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

    // The signed-in user info.
      const user = result.user;
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