import React from "react";
import Router from "./Routers/router";
import { GlobalStyle } from "./GlobalStyle";
import { AuthGoogleProvider } from "./services/AuthGoogle";



function App() {
  return (
    <AuthGoogleProvider>
    <Router/> 
    <GlobalStyle/>
    </AuthGoogleProvider>
  )
}

export default App;
