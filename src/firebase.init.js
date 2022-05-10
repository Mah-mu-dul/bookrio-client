// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId

    apiKey: "AIzaSyDxFyOg3NFNxo84vcNHfwqcaszyHRGVS4E",
    authDomain: "warehouse-of-books.firebaseapp.com",
    projectId: "warehouse-of-books",
    storageBucket: "warehouse-of-books.appspot.com",
    messagingSenderId: "1079409436867",
    appId: "1:1079409436867:web:367a90d714f585be171a76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth