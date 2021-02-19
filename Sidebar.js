import React from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Sidebarchat from "./Sidebarchat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            {" "}
            <ChatIcon />
          </IconButton>{" "}
          <IconButton>
            {" "}
            <DonutLargeIcon />
          </IconButton>{" "}
          <IconButton>
            {" "}
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_searchbar">
        <div className="sidebar_searchContainer">
          <SearchIcon />
          <input type="text" placeholder="Search whatsapp"></input>
        </div>
      </div>
      <div className="sidebar_chats">
        <Sidebarchat />
      </div>
    </div>
  );
}

export default Sidebar;
