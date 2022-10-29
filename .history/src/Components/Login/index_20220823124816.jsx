import React from "react"; 
import { authConfig } from "../../Auth/config";
import { BoxHome, BoxLogin, InputEmail, User } from "./style";


export const Login =()=>{
  return (
    <BoxHome>
    <BoxLogin> 
       <User for="email"
       <InputEmail type="email" id="email" name="email" />
    </BoxLogin>
    </BoxHome>
  )
}