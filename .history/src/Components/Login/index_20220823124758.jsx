import React from "react"; 
import { authConfig } from "../../Auth/config";
import { BoxHome, BoxLogin, InputEmail, User } from "./style";
InputEmail


export const Login =()=>{
  return (
    <BoxHome>
    <BoxLogin> 
       <InputEmail type="email" id="email" name="email" />
    </BoxLogin>
    </BoxHome>
  )
}