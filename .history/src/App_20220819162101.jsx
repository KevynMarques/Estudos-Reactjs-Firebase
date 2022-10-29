import React from "react";
import  {PageHome}  from "./Pages/Page1";
import { Page2 } from "./Pages/Page2";
import {BrowserRouter as  Router, Route, Routes} from 'react-router-dom'; 


function App() {
  return (
    <Router >
        <Route path="/Home" exect component={<PageHome />} />
    </Router>
  );
}

export default App;
