import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";   // ✅ agar tumhari global CSS file hai

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>   {/* ✅ recommended: debugging ke liye */}
    <App />
  </React.StrictMode>
);
