import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc } from "firebase/firestore";

import { Link, useNavigate } from "react-router-dom";

export default function SignupPage({ colRef, users, setUsers }) {
  const navigate = useNavigate();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const auth = getAuth();
  const [error, setError] = useState(null);

  const signupHandler = (e) => {
    e.preventDefault();
    var userName = name.current.value;
    var userEmail = email.current.value;
    var userPassword = password.current.value;
    console.log(userEmail, userPassword);
    const newUser = {
      email: userEmail,
      password: userPassword,
      userName: userName,
    };

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((cred) => {
        console.log("new user signed up", cred.user);
        addDoc(colRef, newUser)
          .then(() => {
            setUsers([...users, newUser]);
            console.log("addDoc:", newUser);
          })
          .catch((err) => {
            setError(err.message);
            console.log("addDoc error:", err.message);
          });
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(err.message);
        console.log("signup error:", err.message);
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
        <h1>SignUp </h1>
        <input
          type="text"
          ref={name}
          className="form-input"
          placeholder="Name"
        />
        <input
          type="email"
          id="email"
          ref={email}
          className="form-input"
          placeholder="Email"
          onClick={() => setError(null)}
        />

        <input
          type="password"
          id="Password"
          ref={password}
          className="form-input"
          placeholder="Password"
          onClick={() => setError(null)}
        />
        <button className="submit-btn" onClick={signupHandler}>
          Submit
        </button>
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
