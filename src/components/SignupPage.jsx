import React from "react";

import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="login-page">
      <div>
        <img className="login-page-img" src="/image1.jpg" />
      </div>

      <div className="log-container-1">
        <h1>SignUp </h1>
        <input
          type="text"
          id="email"
          className="form-input"
          placeholder="Email"
        ></input>

        <input
          type="password"
          id="Password"
          className="form-input"
          placeholder="Password"
        ></input>
        <button className="submit-btn">Submit</button>
        <div className="registered-or-not">
          <span>Already registered?</span>
          <Link to="/login"> Login Here</Link>
        </div>
        <div className="log-container-2">
          <img className="log-icons" src="icons/google.svg" alt="google" />
          <img className="log-icons" src="icons/twitter.svg" alt="twitter" />
          <img className="log-icons" src="icons/github.svg" alt="github" />
        </div>
      </div>
    </div>
  );
}