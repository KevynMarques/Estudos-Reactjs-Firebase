import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import { authGoogleContext } from '../services/AuthGoogle'
import { Navigate } from 'react-router-dom';


export const RotaPrivada  = () =>{
 const {singed} = useContext (authGoogleContext); 
 return singed ? <Outlet /> : <Navigate path="/" /> 
}