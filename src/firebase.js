// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMlP6GDQ2XmckvyCegctFIoj62Uo9Ja10",
    authDomain: "aves-mobile-web.firebaseapp.com",
    projectId: "aves-mobile-web",
    storageBucket: "aves-mobile-web.appspot.com",
    messagingSenderId: "242945443809",
    appId: "1:242945443809:web:5cb4212c2d5458b829b4a0",
    measurementId: "G-Y5PHWERD3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};
