import React from "react";
import { useContext } from "react";
import { authGoogleContext } from "../../services/AuthGoogle";
import { Navigate } from "react-router-dom";
import { CustomContext } from "../../services/CustomContext";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../../services/FirebaseConfig";
import {Register} from "../Register/index"
import { getFirestore, collection,addDoc,
} from "firebase/firestore";
import { getDocs } from "firebase/firestore";
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
    
const db = getFirestore(app);
const usersCollectionRef = collection(db, "users");

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

 

useEffect(()=>{

},[])

async function loginEnter () { 
  try {
    await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    ).then(async(data)=>{
      const uid = data.user.uid;
      const querySnapshot = await getDocs(usersCollectionRef);
      querySnapshot.forEach((doc) => {
        if(doc.id === uid){
          console.log(doc.data());
          
        }

      });

    }); 


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

