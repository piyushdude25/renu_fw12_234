import React from "react";
import "./share.css";
import profile from "../images/profile.jpg";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import RoomIcon from "@mui/icons-material/Room";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

export const Share = () => {
  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="sharetop">
          <img src={profile} className="sharetopimg" alt=""></img>
          <input
            type="text"
            placeholder="what's in your mind"
            className="shareinput"
          ></input>
        </div>
        <hr className="sharehr" />
        <div className="sharebottom">
          <div className="shreoptions">
            <div className="shareoption">
              <PermMediaIcon className="shareicon" />
              <span className="shareoptiontext">photo or videos</span>
            </div>
          </div>
          <div className="shreoptions">
            <div className="shareoption">
              <LabelImportantIcon className="shareicon" />
              <span className="shareoptiontext">Tag</span>
            </div>
          </div>
          <div className="shreoptions">
            <div className="shareoption">
              <RoomIcon className="shareicon" />
              <span className="shareoptiontext">Location</span>
            </div>
          </div>
          <div className="shreoptions">
            <div className="shareoption">
              <InsertEmoticonIcon className="shareicon" />
              <span className="shareoptiontext">Feelings</span>
            </div>
          </div>
          <button className="sharebutton">share</button>
        </div>
      </div>
    </div>
  );
};
