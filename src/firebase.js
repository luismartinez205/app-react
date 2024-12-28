// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP-6Hl5ExVI-uK7w-pb09rhkItFov7ZTI",
  authDomain: "prueba-reaxt.firebaseapp.com",
  projectId: "prueba-reaxt",
  storageBucket: "prueba-reaxt.firebasestorage.app",
  messagingSenderId: "1087569359701",
  appId: "1:1087569359701:web:17a18666a072a38f6cf5dc",
  measurementId: "G-Y1JSPRT0SJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);