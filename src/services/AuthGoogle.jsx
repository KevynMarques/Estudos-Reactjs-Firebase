import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "./firababseConfig";
import { createContext } from 'react';
import { useState } from "react";
import { useEffect } from 'react';
const provider = new GoogleAuthProvider();


export const authGoogleContext = createContext({})

export const AuthGoogleProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
  });

  const singIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        sessionStorage.setItem("@AuthFirebase:Token", token)
        setUser(user);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  return (
    <authGoogleContext.Provider
     value={{ singIn, singed: !!user }}>
      {children}
    </authGoogleContext.Provider> 
  )
}
