import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Component/Home";
import Aboutus from "./Component/Aboutus";
import Contact from "./Component/Contact"
import Menu from "./Component/Menu";
import Login from "./Component/Login";
import Layout from "./Component/Layout";   

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="contact" element={<Contact />} />
          <Route path="menu" element={<Menu />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
