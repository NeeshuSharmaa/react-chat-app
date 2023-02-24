import React, { useState } from "react";
import { useEffect } from "react";
import Chats from "./Chats";
import Sidebar from "./Sidebar";

export default function Home({ users, currentUser }) {
  const [currentUserInfo, setCurrentUserInfo] = useState(null);
  useEffect(() => {
    setCurrentUserInfo(users.find((user) => user.email == currentUser));
  }, [currentUser]);

  return (
    <div className="home">
      <Sidebar
        users={users}
        currentUser={currentUser}
        currentUserInfo={currentUserInfo}
      />
      <Chats />
    </div>
  );
}
