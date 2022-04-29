import React from "react";
import { Topbar } from "../topbar/Topbar";
//import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Sidebar } from "../sidebar/Sidebar";
import { Feed } from "../feed/Feed";
import { Rightbar } from "../rightbar/Rightbar";
import "./home.css";
//import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
export const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="homecontainer">
        <Sidebar  />
        <Feed  />
        <Rightbar  />
      </div>
    </div>
  );
};
