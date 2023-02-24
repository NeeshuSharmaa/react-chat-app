import React from "react";
import ChatHeader from "./chats/ChatHeader";
import TextInput from "./chats/TextInput";
import TextsSpace from "./chats/TextsSpace";

export default function Chats() {
  return (
    <div className="chats">
      <ChatHeader />

      <TextsSpace />
      <TextInput />
    </div>
  );
}
