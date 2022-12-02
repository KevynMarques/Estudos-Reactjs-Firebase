import React from "react";
import Router from "./Routers/router";
import { GlobalStyle } from "./GlobalStyle";
import { AuthLoginProvider } from "./services/AuthLogin";



function App() {
  return (
    <AuthLoginProvider>
    <Router/> 
    <GlobalStyle/>
    </AuthLoginProvider>
  )
}

export default App;
