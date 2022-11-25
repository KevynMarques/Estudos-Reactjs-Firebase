import { createContext } from "react";
import { useState } from "react"; 
import { Login } from "../Components/Login";

export const CustomContext  = createContext(); 

export const CustomContextProvider = ({children}) =>{ 
const [telaCadastro, setTelaCadastro] = useState(<Login />)
 


    return (
  <CustomContext.Provider value ={{
    telaCadastro, setTelaCadastro, 
  }}>
    {children}
  </CustomContext.Provider>
    );
}