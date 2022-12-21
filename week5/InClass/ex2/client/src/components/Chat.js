import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  Mic,
} from "@mui/icons-material";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import MicIcon from "@mui/icons-material/Mic";

import axios from "./axios";
import { useStateValue } from "./StateProvider";
const Chat = ({ messages }) => {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/messages/new", {
      message: input,
      name: user.displayName,
      timestamp: new Date().toUTCString(),
      received: true,
    });
    setInput("");
  };
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={"linkimage"} />
        <div className="chat__headerInfo">
          <h3>Dev</h3>
          <p>Last seent at {messages[messages.length - 1]?.timestamp}</p>
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
        {messages.map((message) => (
          <p
            className={`chat__message ${
              message.name === user.displayName && "chat___tmp"
            }`}
          >
            <span className="chat__name">{message.name} </span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <Mic />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
};
export default Chat;
