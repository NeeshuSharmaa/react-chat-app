import React from "react";

export default function UsersList() {
  return (
    <div className="userslist-outer-div">
      <header className="userlist-header">
        <span className="userlist-logo">Connact</span>
        <div className="userlist-header-inner-div">
          <div className="current-user-div">
            <img src="" alt="#" />
            <span className="current-user">Neeya</span>
          </div>
          <button className="logout">Logout</button>
        </div>
      </header>
      <div className="userlist-inner-div">
        <div className="user">
          <img src="" alt="" />
          <div className="user-info">
            <div className="user-name">Neeya</div>
            <div className="user-recent-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
          <span className="text-time-date">2/2/23</span>
        </div>
      </div>
    </div>
  );
}
