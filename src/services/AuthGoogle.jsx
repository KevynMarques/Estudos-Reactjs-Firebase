import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "./FirebaseConfig";
import { createContext } from 'react';
import { useState } from "react";
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';



const provider = new GoogleAuthProvider();
export const authGoogleContext = createContext({})


export const AuthGoogleProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const auth = getAuth(app);                                                                                                                                                                                                                                                                                                                                                                                                                            
  
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

  function signOut () {
     setUser(null); 
     sessionStorage.clear(); 
     return <Navigate to="/"/>; 
  } 

  return (
    <authGoogleContext.Provider value={{ signIn, signed: !!user, signOut}}>
      {children}
    </authGoogleContext.Provider> 
  )
}
