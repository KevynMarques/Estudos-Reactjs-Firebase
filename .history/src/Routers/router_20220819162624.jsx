import { BrowserRouter, Routes, Route } from "react-router-dom";
import P



export default () => {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path="/" element={<Page1 />} /> 
      <Route path="/Page2" element={<Page2 />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}