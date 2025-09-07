import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from  './Component/Navbar';
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact"
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
   <BrowserRouter>
     <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path ="/aboutus" element={<Aboutus/>} />
        <Route path ="/contact" element={<Contact/>} />
        <Route path ="/login" element={<Login/>}  />
        <Route path ="/menu" element={<Menu/>} />
      </Routes>
   </BrowserRouter>
  );
};

export default App;


