// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// require('dotenv').config()
// console.log(process.env)
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.API_KEY,
    // authDomain: process.env.AUTH_DOMAIN,
    // projectId: process.env.PROJECT_ID,
    // storageBucket: process.env.STORAGE_BUCKET,
    // messagingSenderId: process.env.MESSAGING_SENDER_ID,
    // appId: process.env.APP_ID
    apiKey: "AIzaSyD_dSeSrm1mdm0MzW9-BX4Y1KXb3YllAA8",
    authDomain: "spice-house0.firebaseapp.com",
    projectId: "spice-house0",
    storageBucket: "spice-house0.appspot.com",
    messagingSenderId: "559736553583",
    appId: "1:559736553583:web:7eb0de1537eb011791cd9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;