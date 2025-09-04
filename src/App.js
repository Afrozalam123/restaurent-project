import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./Component/Aboutus";
import Contact from "./Component/Contact"
import Menu from "./Component/Menu";
import Login from "./Component/Login";
import Navbar from "./Component/Navbar"  

const App = () => {
  return (
   <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path ="/aboutus" element={<Aboutus/>} />
        <Route path ="/contact" element={<Contact/>} />
        <Route path ="/login" element={<Login/>}  />
        <Route path ="/menu" element={<Menu/>} />
      </Routes>
   </BrowserRouter>
  );
};

export default App;


