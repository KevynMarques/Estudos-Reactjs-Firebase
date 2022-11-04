import React from "react";
import { useState } from "react";
import { BoxHome } from "../Login/style";
import { InconName, TextName } from "./style";


export const UserLogado = ()=>{

   const Name = sessionStorage.getItem('@AuthFirebase:user')
   const key  = JSON.parse(Name); 

 
   function firstLetters(str) {
    const names = str.split(' ')
    let initials = ''

    for (let index = 0; index < names.length; index++) {
      initials += `${names[index][0]}`
    }
    return  initials; 
  }
  

  const [nameUser, setNameUser] = useState (firstLetters(key.displayName)); 

 
    
   return ( 
     <BoxHome>
      <InconName>
        <TextName>
           {nameUser}
        </TextName>
      </InconName>
    </BoxHome>
   );
}