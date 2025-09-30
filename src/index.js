import React from "react";
import ReactDOM from "react-dom/client";
// import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";

// const PUBLISHABLE_KEY = "pk_test_cmFyZS1tdWxsZXQtMjUuY2xlcmsuYWNjb3VudHMuZGV2JA"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <App />
  // </ClerkProvider>
);
