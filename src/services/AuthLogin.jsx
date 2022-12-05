import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "./FirebaseConfig";
import { createContext } from 'react';
import { useState } from "react";
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { getFirestore, collection,addDoc,
} from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useContext } from 'react';
import { CustomContext } from './CustomContext';

const provider = new GoogleAuthProvider();
export const authLoginContext = createContext({})



export const AuthLoginProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  const [userOBJ, setUserOBJ] = useState(null)
  const auth = getAuth(app);
  const db = getFirestore(app);
 const usersCollectionRef = collection(db, "users");
 const {loginEmail,loginPassword} = useContext(CustomContext)



 //------------------------------------------- LOGIN COM CONTA GOOGLE -----------------------------------------------// 


  useEffect(() => {
    const loadStorageData = () => {
      const storageUser = sessionStorage.getItem("@AuthFirebase:user");
      const storageToken = sessionStorage.getItem("@AuthFirebase:token");
      if (storageToken && storageUser) {
        setUser(storageUser);
      }
    };
    loadStorageData();
  },);

  const signIn = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        sessionStorage.setItem("@AuthFirebase:token", token);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  function signOut() {
    setUser(null);
    sessionStorage.clear();
    return <Navigate to="/" />;
  }

  function signOutEmail() {
    setUserEmail(null);
    sessionStorage.clear();
    return <Navigate to="/" />;
  }


   //-------------------------------------- LOGIN COM EMAIL E SENHA ----------------------------------  // 

   useEffect(() => {
    const loadStorageData = () => {
      const storageUser = sessionStorage.getItem("@AuthEmailPassword:dadosUser");
      const storageToken = sessionStorage.getItem("@AuthEmailPassword:token");
      if (storageToken && storageUser) {
        setUserEmail(storageUser);
      }
    };
    loadStorageData();
  },);

   useEffect(()=>{
    onAuthStateChanged(auth, (currentUser) => {
      setUserOBJ(currentUser);
    });
  },[])
  
  
  async function loginEnter () { 
    try {
      await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      ).then(async(data)=>{
        const uid = data.user.uid;
        const querySnapshot = await getDocs(usersCollectionRef);
        querySnapshot.forEach((doc) => {
          if(doc.id === uid){
           const dadosUser = doc.data(); 
           setUserEmail(dadosUser);
           sessionStorage.setItem("@AuthEmailPassword:dadosUser", JSON.stringify(dadosUser))
           sessionStorage.setItem("@AuthEmailPassword:token", JSON.stringify(uid))
          }
  
        });
  
      }); 
  
  
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <authLoginContext.Provider value={{
       signIn,
       signed: !!user,
       signOut, loginEnter
    , signedEmail: !!userEmail,
      signOutEmail }}>
      {children}
    </authLoginContext.Provider>
  )
}
