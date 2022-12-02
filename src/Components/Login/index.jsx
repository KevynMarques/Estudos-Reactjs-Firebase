import React from "react";
import { useContext } from "react";
import { authLoginContext } from "../../services/AuthLogin";
import { Navigate } from "react-router-dom";
import { CustomContext } from "../../services/CustomContext";
import {Register} from "../Register/index"
import {
BoxHome, BoxLogin, ButtomLogin,
InputDeLogin, LoginGoogle,
RememberPassword,TextLogin,
TextTittle, Registration
} from "./style";

export const Login = () => {

const { signIn, signed, loginEnter } = useContext(authLoginContext);
const {loginEmail, setLoginEmail, loginPassword,
   setLoginPassword, setTelaCadastro } = useContext(CustomContext); 


  async function StartGoogle() {
    await signIn();
  }; 

  async function StartEmail() {
    await loginEnter(); 
  }

  if (!signed) { 

    return ( 
      <BoxHome>
        <TextTittle>
          Plataforma de Estudos Reactjs
        </TextTittle>
        <BoxLogin>
        <TextLogin>Usuario</TextLogin>
      <InputDeLogin 
      onChange={(e) => setLoginEmail(e.target.value)}
      type="email" 
      value={loginEmail}
      id="email" name="email"
      placeholder="seuEmail@hotmail.com.br" />
      <TextLogin>Senha</TextLogin>
      <InputDeLogin 
      onChange={(e) => setLoginPassword(e.target.value)}
      type="password"
       id="password" 
       value={loginPassword}
       name="password"
        placeholder="***************" />
      <ButtomLogin onClick={StartEmail}>
        ENTRAR
      </ButtomLogin>
      <RememberPassword>
        Esqueci minha senha
      </RememberPassword>
      <Registration onClick={()=>{
      setTelaCadastro(<Register />)
      }} > 
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

