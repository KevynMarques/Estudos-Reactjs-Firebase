import { Fragment } from "react";
import {Routes, Route } from "react-router-dom";
import { Page1 } from "../Pages/Page1";
import  {UserLogadoGoogle} from "../Components/LogedGoogle"
import {UserLogadoEmail} from "../Components/LogedEmail"
import { Outlet } from 'react-router-dom';
import { authLoginContext } from '../services/AuthLogin'
import { useContext } from "react";
import { Navigate } from 'react-router-dom';



export default () => {

 const RotaPrivadaGoogle  = () =>{
 const {signed} = useContext (authLoginContext); 

if(signed) {
 return <Outlet /> 
}else {
  return <Navigate to="/" />
}}
                                                              
const RotaPrivaEmail = () =>{
  const {signedEmail} = useContext (authLoginContext); 
 
 if(signedEmail) {
  return <Outlet /> 
 }else {
   return <Navigate to="/" />
 }}
                

  return (
    <Fragment>
        <Routes >
          <Route path="/" element={<Page1 />} /> 

          <Route path="/AuthGoogle" element={<RotaPrivadaGoogle />}>
              <Route path="/AuthGoogle" element={<UserLogadoGoogle />} />
          </Route>    

          <Route path="/AuthEmail" element={<RotaPrivaEmail />}>
              <Route path="/AuthEmail" element={<UserLogadoEmail />} />
          </Route>    


        </Routes>
    </Fragment>
  );
}