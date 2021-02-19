import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import axios from "./axios.js";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  });
  useEffect(() => {
    const pusher = new Pusher("5d4983413980fea485ca", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("message");
    channel.bind("inserted", (newmsg) => {
      setMessages([...messages, newmsg]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  //
  return (
    <div className="app">
      {/*  <p>@adarshgupta</p> */}
      <div className="app_body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
