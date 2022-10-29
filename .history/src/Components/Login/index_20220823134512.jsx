import React from "react"; 
import { authConfig } from "../../Auth/config";
import { BoxHome, BoxLogin, InputDeLogin, TextLogin} from "./style";
InputDeLogin



export const Login =()=>{
  return (
    <BoxHome>
    <BoxLogin> 
       <TextLogin>Usuario</TextLogin>
       <InputEmail type="email" id="email" name="email" placeholder="digiteSeuEmail@hotmail.com.br" />
        
       <TextLogin>Senha</TextLogin>
       <InputSenha type="text" id="password" name="password"  placeholder="******************"/>

    </BoxLogin>
    </BoxHome>
  )
}