import React from "react";
import { useContext } from "react";
import { authGoogleContext } from "../../services/AuthGoogle";
import { Navigate } from "react-router-dom";
import { CustomContext } from "../../services/CustomContext";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../../services/FirebaseConfig";
import {Register} from "../Register/index"
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import {
BoxHome, BoxLogin, ButtomLogin,
InputDeLogin, LoginGoogle,
RememberPassword,TextLogin,
TextTittle, Registration
} from "./style";


export const Login = () => {

const { signIn, signed } = useContext(authGoogleContext);
const  {setTelaCadastro} = useContext(CustomContext); 
const {loginEmail, setLoginEmail, loginPassword, setLoginPassword} = useContext(CustomContext); 
    

  async function StartGoogle() {
    await signIn();
  };
  
  const auth = getAuth(app); 

const [user, setUser] = useState({});


useEffect(()=>{
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
},[])


async function loginEnter () {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user._tokenResponse.email);
    } catch (error) {
      console.log(error.message);
    }
  };

 
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
      <ButtomLogin onClick={loginEnter}>
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

