import { createContext } from "react";
import { useState } from "react"; 
import { Login } from "../Components/Login";

export const CustomContext  = createContext(); 

export const CustomContextProvider = ({children}) =>{ 
const [telaCadastro, setTelaCadastro] = useState(<Login />)
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
 


    return (
  <CustomContext.Provider value ={{
    telaCadastro, setTelaCadastro,email, setEmail, password, setPassword
  }}>
    {children}
  </CustomContext.Provider>
    );
}