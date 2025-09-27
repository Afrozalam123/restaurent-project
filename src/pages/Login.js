import React, { useState } from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "../Global.css/Login.css"
const Login = () => {

  const [phone,setPhone]= useState("")
  return (
    <div>
      <div className='Box'>
        <div className='Box1'>
          <div className='Box-cnt'>
            <h1>login</h1>
            <form >
              <PhoneInput
              country={"in|"}
              value={phone}
              onChange={setPhone}
              placeholder='please Enter a mobile number'
              className="PHONE"
              inputStyle={{ width: "100%", height: "45px", borderRadius: "8px"
                
               }}
              buttonStyle={{ border: "none", background: "transparent" }}
              dropdownStyle={{ maxHeight: "150px" }}
            />
            <button id='otp-btn'>Send OTP</button>
            </form>
             <div className='divider'>
            <span>or</span>
          </div>
          <div className='auth-option'>
           <button className='btn-email'>Continue with E-mail</button>
            <i class="fa-regular fa-envelope"></i>
           <button className='btn-gmail'>Continue with Google</button>
           <i class="fa-brands fa-google"></i>
          </div>
            <div className='foter'>
            <h1>New to FooDIE?<span>Create Account</span></h1>
           </div>
          </div>
          </div>
          </div>
        </div>
     
   
  )
}

export default Login