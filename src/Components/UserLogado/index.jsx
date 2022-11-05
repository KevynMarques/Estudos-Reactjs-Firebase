import React from "react";
import { useState, useContext } from "react";
import { BoxHome } from "../Login/style";
import { authGoogleContext } from "../../services/AuthGoogle";
import { InconName, TextName,LogOut, ButtonLogOut,
Account} from "./style";


export const UserLogado = ()=>{
   const {signOut} = useContext(authGoogleContext); 
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
  const [logOut, setLogOut] = useState(''); 
 

   return ( 
     <BoxHome>
      <InconName>
        <TextName>
           {nameUser}
        </TextName>
      </InconName> 
      <LogOut> 
        <Account>
          Account
        </Account>
        <ButtonLogOut onClick={()=>{signOut()}}>
          Log Out
        </ButtonLogOut>
      </LogOut>
    </BoxHome>
   );
}