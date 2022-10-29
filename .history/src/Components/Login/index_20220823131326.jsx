import React from "react"; 
import { authConfig } from "../../Auth/config";
import { BoxHome, BoxLogin, InputEmail,
InputSenha, Password, TextLogin, User } from "./style";



export const Login =()=>{
  return (
    <BoxHome>
    <BoxLogin> 
       <TextLogin>Senha</TextLogin>
       <InputEmail type="email" id="email" name="email" />
        
       <Password>Senha</Password>
       <InputSenha type="text" id="password" name="password" />

    </BoxLogin>
    </BoxHome>
  )
}