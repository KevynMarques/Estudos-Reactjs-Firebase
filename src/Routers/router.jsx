import { Fragment } from "react";
import {Routes, Route } from "react-router-dom";
import { RotaPrivadaGoogle } from ".";
import { Page1 } from "../Pages/Page1";
import { Page2 } from "../Pages/Page2";
import Page3 from "../Pages/Page3";

export default () => {
  
  return (
    <Fragment>
        <Routes >
          <Route path="/" element={<Page1 />} /> 

          <Route path="/Page2" element={<RotaPrivadaGoogle />}>
            <Route path="/Page2" element={<Page2 />} />
          </Route>   

        </Routes>
    </Fragment>
  );
}