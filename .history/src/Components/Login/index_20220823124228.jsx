import React from "react"; 
import { authConfig } from "../../Auth/config";
import { BoxLogin } from "./style";
import { BoxHome } from "./style";
import { InputEmail } from "./style";

export const Login =()=>{
  return (
    <BoxHome>
    <BoxLogin> 
       <InputEmail type="email" id="email" name="email" />
    </BoxLogin>
    </BoxHome>
  )
}