import React from "react";
import "./sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SwitchVideoIcon from "@mui/icons-material/SwitchVideo";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import MenuBookIcon from "@mui/icons-material/MenuBook";
//import profile from "../images/profile.jpg";
import { Users } from "../jsdummydata";
import { Closefriends } from "../closefriends/Closefriends";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        {" "}
        <ul className="sidebarlist">
          <li className="sidebarlistitem">
            <RssFeedIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Feed</span>
          </li>
          <li className="sidebarlistitem">
            <ChatBubbleIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">chats</span>
          </li>
          <li className="sidebarlistitem">
            <SwitchVideoIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">videos</span>
          </li>
          <li className="sidebarlistitem">
            <GroupIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Groups</span>
          </li>
          <li className="sidebarlistitem">
            <BookmarkIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Bookmarks</span>
          </li>
          <li className="sidebarlistitem">
            <HelpOutlineIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Questions</span>
          </li>{" "}
          <li className="sidebarlistitem">
            <WorkOutlineIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Jobs</span>
          </li>{" "}
          <li className="sidebarlistitem">
            <EventIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Events</span>
          </li>{" "}
          <li className="sidebarlistitem">
            <MenuBookIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Courses</span>
          </li>
        </ul>
        <button className="sidebarbutton">show more</button>
        <hr className="sidebarhr" />
        <ul className="sidebarfriendlist">
          {Users.map((e) => {
            return <Closefriends data={e} />;
          })}
        </ul>
      </div>
    </div>
  );
};
