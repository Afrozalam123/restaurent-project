import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />   {/* ✅ Navbar ko yahan self-closing likhna hai */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
