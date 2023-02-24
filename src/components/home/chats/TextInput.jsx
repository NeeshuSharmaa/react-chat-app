import React from "react";

export default function TextInput() {
  return (
    <div className="text-input">
      <div>
        <input type="text" placeholder="Type message here ..." />
        <div>
          <img className="send-btn" src="icons/send.png" alt="send" />
        </div>
      </div>
    </div>
  );
}
