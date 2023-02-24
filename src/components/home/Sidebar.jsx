import React, { useRef } from "react";
import Navbar from "./sidebar/Navbar";
import User from "./sidebar/SidebarUser";

export default function Sidebar({ users, currentUser, currentUserInfo }) {
  const searchUser = useRef();

  return (
    <div className="sidebar">
      <Navbar searchUser={searchUser} currentUserInfo={currentUserInfo} />
      {users &&
        users.map((user) => (
          <User
            key={user.email}
            currentUser={currentUser}
            user={user}
            userEmail={user.email}
          />
        ))}
    </div>
  );
}
