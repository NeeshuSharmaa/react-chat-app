import React from "react";

export default function ChatHeader() {
  return (
    <div className="chat-header">
      <div>
        <img className="user-img" src="icons/user.svg" />
        <span className="chat-person-name">User1</span>
      </div>
      <div>
        <img className="menu-v" src="icons/menu-v.png" alt="more"></img>
      </div>
    </div>
  );
}
