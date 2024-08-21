 
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth,SignInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyATfObK4RNbYqSmdEOVzFGMo2SbU73ayFA",
    authDomain: "fireblog-8688d.firebaseapp.com",
    projectId: "fireblog-8688d",
    storageBucket: "fireblog-8688d.appspot.com",
    messagingSenderId: "40844135752",
    appId: "1:40844135752:web:079587826d7743e52eb77d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth= getAuth(app);

  const nav= document.querySelector("#navigation")
  const admin= document.querySelector(".admin")

  function AdminLogin(){
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;
    SignInWithEmailAndPassword()
  }

  const submit= document.querySelector("#submit");
  submit.addEventListener('click',AdminLogin)

  