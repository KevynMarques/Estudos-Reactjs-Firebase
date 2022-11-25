import React from "react";
import { useContext } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { authGoogleContext } from "../../services/AuthGoogle";
import { Navigate } from "react-router-dom";
import { Register } from "../Register";
import { getAuth } from "firebase/auth";
import { app } from "../../services/firababseConfig";
import { CustomContext } from "../../services/CustomContext";
import {
BoxHome, BoxLogin, ButtomLogin,
InputDeLogin, LoginGoogle,
RememberPassword,TextLogin,
TextTittle, Registration
} from "./style";


export const Login = () => {
const auth = getAuth(app);
const { signIn, signed } = useContext(authGoogleContext);
const  {setTelaCadastro} = useContext(CustomContext); 
const {email, setEmail, password, setPassword} = useContext(CustomContext); 
    
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    function LoginEmail (e) {
      e.preventDefault(); 
      signInWithEmailAndPassword(email, password);
    }
  
    if (error) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      );
    }
    if (loading) {
      return <p>Loading...</p>;
    }
    if (user) {
      return (
        <div>
          <p>Signed In User:{user.email}</p>
        </div>
      );
    }


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
      <InputDeLogin 
      onChange={(e) => setEmail(e.target.value)}
      type="email" 
      value={email}
      id="email" name="email"
      placeholder="seuEmail@hotmail.com.br" />
      <TextLogin>Senha</TextLogin>
      <InputDeLogin 
      onChange={(e) => setPassword(e.target.value)}
      type="password"
       id="password" 
       value={password}
       name="password"
        placeholder="***************" />
      <ButtomLogin onClick={LoginEmail}>
        ENTRAR
      </ButtomLogin>
      <RememberPassword>
        Esqueci minha senha
      </RememberPassword>
      <Registration onClick={() => {setTelaCadastro(<Register />)}}> 
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

