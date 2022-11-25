import React from "react";
import Router from "./Routers/router";
import { GlobalStyle } from "./GlobalStyle";
import { AuthGoogleProvider } from "./services/AuthGoogle";
import { CustomContextProvider } from "./services/CustomContext";



function App() {
  return (
    <CustomContextProvider>
    <AuthGoogleProvider>
    <Router/> 
    <GlobalStyle/>
    </AuthGoogleProvider>
    </CustomContextProvider>
  )
}

export default App;
