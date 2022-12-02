import { createContext } from "react";
import { useState } from "react"; 
import { Login } from "../Components/Login";

export const CustomContext  = createContext(); 

export const CustomContextProvider = ({children}) =>{ 
const [telaCadastro, setTelaCadastro] = useState(<Login />)
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");
const [user, setUser] = useState({});
 


    return (
  <CustomContext.Provider value ={{
    telaCadastro, setTelaCadastro,loginEmail,
     setLoginEmail, loginPassword, setLoginPassword, setUser, user
  }}>
    {children}
  </CustomContext.Provider>
    );
}