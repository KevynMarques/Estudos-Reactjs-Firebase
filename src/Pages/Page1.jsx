import React from "react";
import { useContext } from "react";
import { CustomContext } from "../services/CustomContext";

export const Page1 = () => {
   const  {telaCadastro} = useContext(CustomContext); 
   return (
   <> 
   {telaCadastro}
   </>
   )}