import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../Global.css/Login.css";

const Login = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (c) => {
    c.preventDefault();
    console.log("Phone:", phone);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back 👋</h1>
        <p className="login-subtitle">Login to continue</p>

        <form onSubmit={handleSubmit} className="login-form">
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={setPhone}
            placeholder="Enter your mobile number"
            inputStyle={{
              
              width: "100%",
              height: "50px",
              borderRadius: "10px",
              fontSize: "16px",
              border: "1px solid black",
            }}
            buttonStyle={{ border: "none", background: "transparent" }}
            dropdownStyle={{ maxHeight: "200px" }}
          />
          <button id="otp-btn" type="submit">
            Send OTP
          </button>
        </form>

        <div className="divider"><span>or</span></div>

        <div className="auth-option">
          <button className="btn-email">
            <i className="fa-regular fa-envelope"></i> Continue with E-mail
          </button>
          <button className="btn-gmail">
            <i className="fa-brands fa-google"></i> Continue with Google
          </button>
          <div>
             <Link to="/signin">
             <article className="art-sign">Sign in</article>
            </Link>
          </div>
        </div>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default Login;
