import React from "react";
import { useContext, useState } from "react";
import { authGoogleContext } from "../../services/AuthGoogle";
import { Navigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firababseConfig";
import {
BoxHome, BoxLogin, ButtomLogin,
InputDeLogin, LoginGoogle,
RememberPassword, TextLogin,
TextTittle, Registration
} from "./style";

export const Login = () => {

const { signIn, signed } = useContext(authGoogleContext);
  async function StartGoogle() {
    await signIn();
  };

  const [registro, setRegistro] = useState(LoginOrRegister());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  
  function Registrando (e) {
    e.preventDefault(); 
    createUserWithEmailAndPassword(email, password); 
  }

  if(loading) {
    <p> carregando ... </p>
  }

  
  console.log(error); 

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
        setRegistro(Cadastro)
      }}>
        Cadastre-se
      </Registration>
      <LoginGoogle onClick={StartGoogle}>Entrar com Google
      </LoginGoogle></>)
  }

  function Cadastro() {
    return (<>
      <TextLogin> Novo usuario</TextLogin>
      <InputDeLogin
      type="email" 
      id="email" name="email" 
      placeholder="Digite Seu Email" 
      onChange={(e) => setEmail(e.target.value)} />
      <br></br>
        
      <TextLogin>Senha</TextLogin>
      <InputDeLogin 
      type="text"
      id="password" 
      name="password" 
      placeholder="Digita sua Senha"  
      onChange={(e) => setPassword(e.target.value)}/>
      <ButtomLogin onClick={Registrando}>
        Cadastrar
      </ButtomLogin> 
    </>)
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

