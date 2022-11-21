import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { TextLogin, InputDeLogin, ButtomLogin, Forms} from '../Login/style'; 
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { app } from '../../services/firababseConfig';

export const RegisterContext = createContext({})

export default function Register({ children }) {

const auth = getAuth(app);
const [email, setEmail] = useState(null)
const [password, setPassword] = useState(null) 

const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error,
] = useCreateUserWithEmailAndPassword(auth);

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

 function TelaCadastro() { 

   function CadastrarUser(e) {
    e.preventDefault(); 
    createUserWithEmailAndPassword(email, password); 
   }
  
    return (
        <Forms>
          <TextLogin> Novo usuario</TextLogin>
          <InputDeLogin
          type="email" 
          id="email" name="email" 
          placeholder="Digite Seu Email" 
         onChange={(e) => setEmail(e.target.value)}
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
          <ButtomLogin onClick={CadastrarUser}> 
            Cadastrar
          </ButtomLogin> 
          </Forms>)
}  

   return (
    <RegisterContext.Provider value={{TelaCadastro}} >
     {children}
    </RegisterContext.Provider>
   ); 
}; 