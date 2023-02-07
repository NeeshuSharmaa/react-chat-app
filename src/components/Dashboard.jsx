import React from "react";
import Chats from "./Chats";
import UsersList from "./UsersList";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <UsersList />
      <Chats />
    </div>
  );
}
