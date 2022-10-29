import * as firebase from 'firebase/app'; 
import 'firebase/auth'; 

export const authConfig = firebase.initializeApp({
  apiKey: "AIzaSyAD5kuAARykYuvI6Q14HG_GOXNly60eMjA",
  authDomain: "apontamentosquad.firebaseapp.com",
  projectId: "apontamentosquad",
  storageBucket: "apontamentosquad.appspot.com",
  messagingSenderId: "847218838706",
})