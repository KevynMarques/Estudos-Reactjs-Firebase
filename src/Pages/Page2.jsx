import React from "react"
import { UserLogadoGoogle } from "../Components/LogedGoogle"
import {LogedEmail} from "../Components/LogedEmail"
import { useContext } from "react"
import { authLoginContext } from "../services/AuthLogin"



export const Page2 = ()=>{ 
 return <UserLogadoGoogle />
}