import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Menu from "./pages/Menu";
import Login from "./pages/Login"; // tumhara custom login component

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Sirf custom login route */}
        <Route path="/login" element={<Login />} />

        {/* App Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/menu" element={<Menu />} />

        {/* Agar koi galat url dale to /login par bhej do */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




























// first wala process//


// import React from "react";
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Component/Navbar";
// import Home from "./pages/Home";
// import Aboutus from "./pages/Aboutus";
// import Menu from "./pages/Menu";
// import Login from "./pages/Login";
// import Signin from "./pages/Signin";

// function App() {
//   return (
//      <BrowserRouter>
//        <header>
//       <SignedOut>
//         <SignInButton />
//       </SignedOut>
//       <SignedIn>
//         <UserButton />
//       </SignedIn>
   
         
   
//       <Navbar />

//       <Routes>
//         <Route path="/home" element={<Home/>} />
//         <Route path="/aboutus" element={<Aboutus />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signin"element={<Signin/>}/>
//       </Routes>
//        </header>
//         </BrowserRouter>
//   );
    
     
// }

// export default App;
