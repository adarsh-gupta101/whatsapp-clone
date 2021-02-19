import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  MicNoneOutlined,
} from "@material-ui/icons";
import axios from "./axios";
import React, { useState } from "react";

import "./Chat.css";

function Chat({ messages }) {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/messages/new", {
      message: input,
      name: "username",
      timestamp: "Just now",
      received: true,
    });
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((message) => {
          return (
            <p
              className={`chat__message ${message.received && "chat_reciever"}`}
            >
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">{message.timestamp}</span>
            </p>
          );
        })}
      </div>

      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicNoneOutlined />
      </div>
    </div>
  );
}

export default Chat;
