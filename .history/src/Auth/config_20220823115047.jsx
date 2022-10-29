import * as firebase from 'firebase/app'; 
import 'firebase/auth'; 

export const authConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.,
  projectId: process.env.,
  storageBucket: "apontamentosquad.appspot.com",
  messagingSenderId: "847218838706",
})