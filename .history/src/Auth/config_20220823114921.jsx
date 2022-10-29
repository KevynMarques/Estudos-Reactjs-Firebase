import * as firebase from 'firebase/app'; 
import 'firebase/auth'; 

export const authConfig = firebase.initializeApp({
  apiKey: process.env.REACT,
  authDomain: "apontamentosquad.firebaseapp.com",
  projectId: "apontamentosquad",
  storageBucket: "apontamentosquad.appspot.com",
  messagingSenderId: "847218838706",
})