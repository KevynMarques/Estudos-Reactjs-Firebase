import React from 'react'
import { useState } from 'react';
import { TextLogin, InputDeLogin, ButtomLogin, Forms,BoxHome,BoxLogin,TextTittle} from '../Login/style'; 
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { CustomContext } from "../../services/CustomContext"
import { useContext } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from '../../services/FirebaseConfig';
import { Voltar } from './Style';
import { Login } from '../Login';
import { useEffect } from 'react';


export const  Register = () => {
const auth = getAuth(app);
const [email, setEmail] = useState('')
const [password, setPassword] = useState('') 
const {setTelaCadastro} = useContext(CustomContext); 

const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error,
] = useCreateUserWithEmailAndPassword(auth);

 function CadastrarUser(e) {
  e.preventDefault(); 
  createUserWithEmailAndPassword(email, password); 
   return CadastroOK(); 
 } 


function CadastroOK () {
  if(error) {
    alert(error.message)
  } else { 
    setTelaCadastro(<Login />)
    alert('Cadastrado com suceso')
  }
}
 
  return ( 
    <BoxHome>
    <TextTittle>
      Plataforma de Apontamento
    </TextTittle>
    <BoxLogin> 
    <Forms>
      <TextLogin> Novo usuario</TextLogin>
      <InputDeLogin
      type="email" 
      id="email" name="email" 
      placeholder="Digite Seu Email" 
      onChange={(e)  => setEmail(e.target.value)}
       />
      <br></br>
        
      <TextLogin>Senha</TextLogin>
      <InputDeLogin 
      type="password"
      id="password" 
      name="password" 
      placeholder="Digita sua Senha"  
      onChange={(e) => setPassword(e.target.value)}
      />
      <ButtomLogin onClick={CadastrarUser} > 
        Cadastrar
      </ButtomLogin> 
      </Forms> 
        <Voltar onClick={()=>{
          setTelaCadastro(<Login />)
        }}>
         Voltar
        </Voltar>
    </BoxLogin>
  </BoxHome>

)};

  
  