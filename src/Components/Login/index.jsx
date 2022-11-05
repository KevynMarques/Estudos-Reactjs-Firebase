import React from "react"; 
import { useContext } from "react";
import { authGoogleContext } from "../../services/AuthGoogle";
import { Navigate } from "react-router-dom";
import { BoxHome, BoxLogin, ButtomLogin, InputDeLogin,LoginGoogle,
 Remember, RememberPassword, TextLogin, TextRemember, TextTittle} from "./style";


 

export const Login =()=>{

  const {singIn, signed} = useContext(authGoogleContext); 

   async function StartGoogle () {
        await singIn(); 
  };  


  
   
if(!signed){
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
   
   <RememberPassword>
      Esqueci minha senha
    </RememberPassword>
    <LoginGoogle onClick={StartGoogle}>Entrar com Google</LoginGoogle>
  </BoxLogin>
  </BoxHome> 
  
  )
} else {
   return <Navigate to="/Page2"/>
}   

}; 

// COMMIT
