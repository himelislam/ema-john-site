// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCczzlOowrtsmUFVkuAP0oGcMgT2LLML6g",
  authDomain: "ema-jhon-site-bba71.firebaseapp.com",
  projectId: "ema-jhon-site-bba71",
  storageBucket: "ema-jhon-site-bba71.appspot.com",
  messagingSenderId: "328940276979",
  appId: "1:328940276979:web:33596a2a0ea2c1831bfb86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;