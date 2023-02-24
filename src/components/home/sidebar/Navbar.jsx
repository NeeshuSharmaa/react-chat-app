import { getAuth, signOut } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ searchUser, currentUserInfo }) {
  const navigate = useNavigate();
  const auth = getAuth();

  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("user signed out");
        navigate("/login");
      })
      .catch((err) => console.log("signout error:", err.message));
  };
  return (
    <nav className="nav-sidebar">
      <div>
        <div className="current-user-div">
          <img className="currentuser-img" src="icons/user.svg" alt="#" />
          {currentUserInfo && (
            <span className="current-user">{currentUserInfo.userName}</span>
          )}
        </div>
        <div>
          <button className="logout" onClick={logoutHandler}>
            Logout
          </button>
          <img className="menu-v" src="icons/menu-v.png" alt="menu" />
        </div>
      </div>
      <input
        type="text"
        className="search-user"
        ref={searchUser}
        placeholder="Find a user"
      />
      <hr />
    </nav>
  );
}
