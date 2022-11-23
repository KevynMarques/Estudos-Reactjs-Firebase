import React from "react";
import { useContext } from "react";
import { authGoogleContext } from "../../services/AuthGoogle";
import { Navigate } from "react-router-dom";
import {
BoxHome, BoxLogin, ButtomLogin,
InputDeLogin, LoginGoogle,
RememberPassword,TextLogin,
TextTittle, Registration
} from "./style";

export const Login = () => {
const { signIn, signed } = useContext(authGoogleContext);


  async function StartGoogle() {
    await signIn();
  };

 
  if (!signed) {
    return (
      <BoxHome>
        <TextTittle>
          Plataforma de Apontamento
        </TextTittle>
        <BoxLogin>
        <TextLogin>Usuario</TextLogin>
      <InputDeLogin type="email" 
      id="email" name="email"
       placeholder="SeuEmail@hotmail.com.br" />
      <TextLogin>Senha</TextLogin>
      <InputDeLogin type="text"
       id="password" 
       name="password"
        placeholder="***************" />
      <ButtomLogin>
        ENTRAR
      </ButtomLogin>
      <RememberPassword>
        Esqueci minha senha
      </RememberPassword>
      <Registration onClick={() => {<Navigate to="/Page3"/>
      }}> 
        Cadastre-se
      </Registration>
      <LoginGoogle onClick={StartGoogle}>Entrar com Google
      </LoginGoogle>
        </BoxLogin>
      </BoxHome>

    )
  } else {
    return <Navigate to="/Page2" />
  }

};

