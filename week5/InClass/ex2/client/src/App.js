import React, { useState, useEffect } from "react";

import "./App.css";

import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import Pusher from "pusher-js";
import axios from "./components/axios";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";

function App() {
  const [messages, setMessages] = useState([]);
  // const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    axios.get("/messages/sync").then((res) => {
      setMessages(res.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("cd0c8e539d5f0329fa94", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("message");
    channel.bind("inserted", (data) => {
      setMessages([...messages], data);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  console.log(messages);
  return (
    <div className="App">
      <Login />
      {/* {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar messages={messages} />
          <Chat messages={messages} />
        </div>
      )} */}
    </div>
    // <h1>test</h1>
  );
}

export default App;
