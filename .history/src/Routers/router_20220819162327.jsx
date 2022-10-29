import { BrowserRouter, Routes, Route } from "react-router-dom";



export default () => {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path="/" element={<Page1 />} /> 
      <Route path="/Page2" element={<Page2 />} /> 
      <Route path="/Page3" element={<Page3 /> } /> 
      <Route path="/Page4" element={<Page4 /> } /> 
      <Route path="/Page5" element={<Page5 /> } /> 
      <Route path="/Page6" element={<Page6 /> } /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}