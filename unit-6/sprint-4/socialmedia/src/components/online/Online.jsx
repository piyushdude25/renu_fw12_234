import React from "react";
import "./online.css";
export const Online = ({ data }) => {
  return (
    <li className="rightbarfriendlistitem">
      <div className="profileimagecontainer">
        <img src={data.profilepicture} alt="" className="rightbarprofile" />
        <span className="rightbaronline"></span>
      </div>
      <span className="rightbarusername">{data.username}</span>
    </li>
  );
};
