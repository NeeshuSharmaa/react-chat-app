import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const auth = getAuth();
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState();
  const loginHandler = (e) => {
    e.preventDefault();

    var userEmail = email.current.value;
    var userPassword = password.current.value;
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((cred) => {
        console.log("user logged in", cred.user);
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(err.message);
        console.log("Login error:", err.message);
      });

    userEmail = "";
    userPassword = "";
  };
  return (
    <div className="login-page">
      {/* <div className="login-img-div">
        <img className="login-page-img" src="/image1.jpg" />
      </div> */}

      <div className="log-container-1">
        {error && (
          <div className="login-error">
            <img src="icons/info.svg" />
            <span>{error}</span>
          </div>
        )}
        <h1>LogIn </h1>
        <input
          type="text"
          id="email"
          ref={email}
          className="form-input"
          placeholder="Email"
        ></input>

        <input
          type="password"
          id="Password"
          ref={password}
          className="form-input"
          placeholder="Password"
        ></input>
        <button className="submit-btn" onClick={loginHandler}>
          Submit
        </button>
        <div className="registered-or-not">
          <span>Not registered?</span>
          <Link to="/"> Sign Up Here</Link>
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
