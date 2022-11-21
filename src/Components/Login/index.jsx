import React from "react";
import { useContext, useState } from "react";
import { authGoogleContext } from "../../services/AuthGoogle";
import { RegisterContext } from "../Register";
import { Navigate } from "react-router-dom";
import {
BoxHome, BoxLogin, ButtomLogin,
InputDeLogin, LoginGoogle,
RememberPassword,TextLogin,
TextTittle, Registration
} from "./style";

export const Login = () => {
const { signIn, signed } = useContext(authGoogleContext);
const {TelaCadastro} = useContext(RegisterContext); 


  async function StartGoogle() {
    await signIn();
  };


  const [registro, setRegistro] = useState(LoginOrRegister);


  function LoginOrRegister() {
    return (<>
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
      <Registration onClick={() => {
        setRegistro(TelaCadastro)
      }}>
        Cadastre-se
      </Registration>
      <LoginGoogle onClick={StartGoogle}>Entrar com Google
      </LoginGoogle></>)
  }
 
  if (!signed) {
    return (
      <BoxHome>
        <TextTittle>
          Plataforma de Apontamento
        </TextTittle>
        <BoxLogin>
          {registro}
        </BoxLogin>
      </BoxHome>

    )
  } else {
    return <Navigate to="/Page2" />
  }

};

