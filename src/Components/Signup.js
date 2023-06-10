import React, { useState } from "react";
import "../CSS/signup.css";
import logo from "../Images/logo.png";
import SignupForm from "./SignupForm";

const Signup = () => {

  
  return (
    <div>
      <div className="formcover"></div>
      <div className="container">
        <img src={logo} alt="chatgpt logo" id="logo" />
        <p className="welcome">Welcome to ChatGPT</p>
        <div className="btns">
          <button type="button" className="btn btn-primary custom-btn">
            Login
          </button>
          <button
            className="btn btn-primary custom-btn"
            type="submit"
            
          >
            Signup
          </button>
        </div>
      </div>
 
    </div>
  );
};

export default Signup;
