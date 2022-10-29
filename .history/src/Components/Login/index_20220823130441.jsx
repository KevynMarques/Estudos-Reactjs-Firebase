import React from "react"; 
import { authConfig } from "../../Auth/config";
import { BoxHome, BoxLogin, InputEmail, InputSenha, User } from "./style";
Paw


export const Login =()=>{
  return (
    <BoxHome>
    <BoxLogin> 
       <User for="email">Usuario</User>
       <InputEmail type="email" id="email" name="email" />
    </BoxLogin>
    </BoxHome>
  )
}