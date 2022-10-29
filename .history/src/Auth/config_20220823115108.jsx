import * as firebase from 'firebase/app'; 
import 'firebase/auth'; 

export const authConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.,
  messagingSenderId:process.env.,
})