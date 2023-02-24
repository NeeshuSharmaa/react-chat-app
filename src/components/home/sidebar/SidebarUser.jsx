import { doc, getFirestore, getDocs, collection } from "firebase/firestore";
import React from "react";

export default function SidebarUser({ user, userEmail, currentUser }) {
  return (
    <div className="user">
      <img className="user-img" src="icons/user.svg" alt="" />
      <div className="user-info">
        <div className="user-name">{user.userName}</div>
        <div className="user-recent-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </div>
      <span className="text-time-date">2/2/23</span>
    </div>
  );
}
