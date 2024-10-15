// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlb6qZzGa8mk7s62ooJ0EaNiAJJuQCVSM",
  authDomain: "auth-firebase-2b273.firebaseapp.com",
  projectId: "auth-firebase-2b273",
  storageBucket: "auth-firebase-2b273.appspot.com",
  messagingSenderId: "413249609970",
  appId: "1:413249609970:web:7656e96ef5626a7232306b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;