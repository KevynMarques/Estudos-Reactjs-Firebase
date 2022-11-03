import React from "react";
import { useState } from "react";


export const UserLogado = ()=>{
 
  const teste = localStorage.getItem('email'); 
  const teste2 = JSON.parse(teste); 
  console.log(teste2); 


 const [nameUser, setNameUser] = useState ('Qualquer coisa'); 
   return(
     <h1 > {nameUser} </h1>
   );
}