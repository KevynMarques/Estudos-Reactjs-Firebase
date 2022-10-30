import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RotaPrivada } from ".";
import { Page1 } from "../Pages/Page1";
import { Page2 } from "../Pages/Page2";



export default () => {
  return (
    <Fragment>
    <BrowserRouter >
    <Routes >
      <Route path="/" element={<Page1 />} /> 
      <Route path="/Page2" element={<RotaPrivada />}>
      <Route path="/Page2" element={<Page2 />} /> 
      </Route>
    </Routes>
    </BrowserRouter>
    </Fragment>
  );
}