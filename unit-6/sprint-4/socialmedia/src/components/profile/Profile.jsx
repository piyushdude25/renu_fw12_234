import React from "react";
import { useEffect, useState } from "react";
import "./profile.css";
import axios from "axios";
import { Topbar } from "../topbar/Topbar";
//import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Sidebar } from "../sidebar/Sidebar";
import { Feed } from "../feed/Feed";
import { Rightbar } from "../rightbar/Rightbar";
import profileimg from "../images/profile.jpg";
//import postimg from "../images/postimg.jpg";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const [user, setUser] = useState({});
  console.log("user", user);
  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`/profile/${id}`);
      console.log("resprofile", res.data);
      setUser(res.data);
    };
    getData();
  }, []);
  return (
    <>
      <Topbar />
      <div className="profile">
        {" "}
        <Sidebar />
        <div className="profileright">
          <div className="profilerighttop">
            <div className="profilecover">
              <img src={profileimg} alt="" className="profilecoverimg" />
              <img src={profileimg} alt="" className="profileuserimg" />
            </div>

            <div className="profileinfo">
              <h1 className="profilename"> {user.name}</h1>
              <span className="profiledesc">{user.desc}</span>
            </div>
          </div>
          <div className="profilerightbottom">
            <Feed name="renu" />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};
