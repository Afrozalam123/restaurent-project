import React from 'react'
import Signin from "../Global.css/Signin.css"

const Signinpage = () => {
  return (
   <>
    <div className="signup-container">
  <div className="signup-card">
    <h1 className="signup-title">Create Account ✨</h1>
    <p className="signup-subtitle">Sign up to explore more</p>
     <form>
            <input 
              type="text" 
              placeholder="Enter your Name"
            />

            <input 
              type="email" 
              placeholder="Enter your Email"
            />

            <input 
              type="password" 
              placeholder="Create Password"
            />

            <input 
              type="password" 
              placeholder="Confirm Password"
            />

            <div className="terms-container">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>I agree to the Foodie <a href="/terms">Terms & Conditions</a> and <a href="/privacy">Privacy Policy</a></span>
              </label>
            </div>

            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>

          <div className="signin-link">
            Already have an account? <a href="/login">Sign In</a>
          </div>
        </div>
      </div>
  
 


   </> 
      
   
  )
}

export default Signinpage