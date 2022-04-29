import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import profile from "../images/profile.jpg";
import "./topbar.css";
import { Link } from "react-router-dom";

export const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarleft">
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <span className="logo">LamamSocial</span>
        </Link>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
          <SearchIcon className="searchlogo" />
          <input
            type="text"
            placeholder="search for frends ,post or videos"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarright">
        <div className="topbarlinks">
          <span className="topbarlink">HomePage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbaricons">
          <div className="topbariconitem">
            <PersonIcon />
            <span className="topbariconBadge">1</span>
          </div>
          <div className="topbariconitem">
            <ChatBubbleOutlineIcon />
            <span className="topbariconBadge">2</span>
          </div>
          <div className="topbariconitem">
            <NotificationsNoneIcon />
            <span className="topbariconBadge">1</span>
          </div>
        </div>
        <img src={profile} alt="profi" className="topbarimage"></img>
      </div>
    </div>
  );
};
