import React, { useEffect, useState } from "react";

import { Avatar } from "@mui/material";
// import './SideBarChat.css'

const SideBarChat = ({ messages }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="sidebarChat">
      <Avatar src="" />
      <div className="sidebarChat_info">
        <h2>Dev Help</h2>
        <p>messages[messages.length-1]?messages</p>
      </div>
    </div>
  );
};
export default SideBarChat;
