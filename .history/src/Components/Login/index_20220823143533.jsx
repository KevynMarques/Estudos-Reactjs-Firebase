import React from "react"; 
import { authConfig } from "../../Auth/config";
import { BoxHome, BoxLogin, ButtomLogin, InputDeLogin, Remember, TextLogin, TextRemember} from "./style";






export const Login =()=>{
  return (
    <BoxHome>
    <BoxLogin> 
       <TextLogin><p></p></TextLogin>
       <InputDeLogin type="email" id="email" name="email" placeholder="DigiteSeuEmail@hotmail.com.br" />
       <TextLogin><p>Senha</p></TextLogin>
       <InputDeLogin type="text" id="password" name="password"  placeholder="****************************"/>
      <Remember />
      <TextRemember><p>Lembrar-me neste dispositivo</p></TextRemember>
     <ButtomLogin>
      <p>LOGIN</p>
     </ButtomLogin>
    </BoxLogin>
    </BoxHome>
  )
}