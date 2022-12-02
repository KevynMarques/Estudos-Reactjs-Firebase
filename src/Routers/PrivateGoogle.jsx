import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import { authLoginContext } from '../services/AuthLogin'
import { Navigate } from 'react-router-dom';


export const RotaPrivadaGoogle  = () =>{
 const {signed} = useContext (authLoginContext); 

if(signed) {
 return <Outlet /> 
}else {
  return <Navigate to="/" />
}}
                                                              

