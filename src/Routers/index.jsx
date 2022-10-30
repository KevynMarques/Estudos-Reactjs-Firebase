import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import { authGoogleContext } from '../services/AuthGoogle'
import { Navigate } from 'react-router-dom';


export const RotaPrivada  = () =>{
 const {signed} = useContext (authGoogleContext); 
 return signed ? <Outlet /> : <Navigate path="/" /> 
}
