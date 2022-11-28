import { createContext } from "react";
import { useState } from "react"; 
import { Login } from "../Components/Login";

export const CustomContext  = createContext(); 

export const CustomContextProvider = ({children}) =>{ 
const [telaCadastro, setTelaCadastro] = useState(<Login />)
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");
 


    return (
  <CustomContext.Provider value ={{
    telaCadastro, setTelaCadastro,loginEmail, setLoginEmail, loginPassword, setLoginPassword
  }}>
    {children}
  </CustomContext.Provider>
    );
}