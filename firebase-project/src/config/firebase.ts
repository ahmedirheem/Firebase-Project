// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvRXCjb2hUuO9aj6cevpa76dIF1DdF1Wk",
    authDomain: "fir-project-2dfc4.firebaseapp.com",
    projectId: "fir-project-2dfc4",
    storageBucket: "fir-project-2dfc4.appspot.com",
    messagingSenderId: "296863170",
    appId: "1:296863170:web:7dd405bbccc35c399cc25b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)