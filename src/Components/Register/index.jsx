import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { TextLogin, InputDeLogin, ButtomLogin, Forms,BoxHome,BoxLogin,TextTittle} from '../Login/style'; 
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { app } from '../../services/firababseConfig';
import { Navigate } from 'react-router-dom';

export const RegisterContext = createContext({})

export const  Register = () => {
const auth = getAuth(app);
const [email, setEmail] = useState('')
const [password, setPassword] = useState('') 

const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error,
] = useCreateUserWithEmailAndPassword(auth);

function CadastrarUser(e) {
  e.preventDefault(); 
  createUserWithEmailAndPassword(email, password);   
 } 


 function TESTE () {
  return <Navigate to="/" /> 
 }

if (loading) {
  return (
    <div>
      <p>Initialising User...</p>
    </div> 
  );
}
if (error) {
  return (
    <div>
      <p>Error: {error.message}</p>
    </div> 
  );
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
      <ButtomLogin onClick={TESTE} > 
        Cadastrar
      </ButtomLogin> 
      </Forms>
 
    </BoxLogin>
  </BoxHome>

)};

  
  