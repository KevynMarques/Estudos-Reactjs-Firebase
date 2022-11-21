import React from "react";
import Router from "./Routers/router";
import { GlobalStyle } from "./GlobalStyle";
import { AuthGoogleProvider } from "./services/AuthGoogle";
import Register from "./Components/Register";



function App() {
  return (
    <Register>
    <AuthGoogleProvider>
    <Router/> 
    <GlobalStyle/>
    </AuthGoogleProvider>
    </Register>
  )
}

export default App;
