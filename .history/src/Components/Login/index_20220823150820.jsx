import React from "react"; 
import { authConfig } from "../../Auth/config";
import { BoxHome, BoxLogin, ButtomLogin, InputDeLogin, Remember, RememberPassword, TextLogin, TextRemember, TextTittle} from "./style";





export const Login =()=>{
  return (
    <BoxHome> 
      <TextTittle>
        Plataforma de Apontamento
      </TextTittle>
        
    <BoxLogin> 
       <TextLogin>Usuario</TextLogin>
       <InputDeLogin type="email" id="email" name="email" placeholder="DigiteSeuEmail@hotmail.com.br" />
       <TextLogin>Senha</TextLogin>
       <InputDeLogin type="text" id="password" name="password"  placeholder="****************************"/>
      <Remember />
      <TextRemember>Lembrar-me neste dispositivo</TextRemember>
     <ButtomLogin>
      LOGIN
     </ButtomLogin>
    </BoxLogin>
      <RememberPassword>
        Esqueci a senha
      </RememberPassword>
    </BoxHome>
  )
}