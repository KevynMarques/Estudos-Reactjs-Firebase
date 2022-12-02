import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import { authLoginContext } from '../services/AuthLogin'
import { Navigate } from 'react-router-dom';


export const RotaPrivadaEmail = () =>{
 const {signedEmail} = useContext (authLoginContext); 

if(signedEmail) {
 return <Outlet /> 
}else {
  return <Navigate to="/" />
}}
                                                              

