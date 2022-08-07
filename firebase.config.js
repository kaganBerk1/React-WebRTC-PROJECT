import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId:process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };
/*   const firebaseConfig = {
    apiKey: "AIzaSyD6ugxSBLxd_NkzYBF45VVetwApatbc0oQ",
    authDomain: "webrtcreact-1afc2.firebaseapp.com",
    projectId: "webrtcreact-1afc2",
    storageBucket: "webrtcreact-1afc2.appspot.com",
    messagingSenderId: "553014629421",
    appId: "1:553014629421:web:2048ea9cea3afcf2f754a4",
    measurementId: "G-B6BV6BKV9C"
  }; */
  const app =initializeApp(firebaseConfig);

  export const auth= getAuth(app)