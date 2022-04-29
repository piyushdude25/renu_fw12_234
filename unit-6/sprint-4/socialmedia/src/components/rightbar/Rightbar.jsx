import React from "react";
import "./rightbar.css";
import birthday from "../images/birthday.jpg";
//import profile from "../images/profile.jpg";
import { Users } from "../jsdummydata";
import { Online } from "../online/Online";

export const Rightbar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdaycontainer">
          <img src={birthday} className="birthdayimg" alt="birthday"></img>
          <span className="birthdaytext">
            {" "}
            <b>Renu</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src={birthday} alt="" className="rightbarad"></img>
        <h4 className="rightbartitle"> Online Friends</h4>
        <ul className="rightbarfriendlist">
          {" "}
          {Users.map((e) => {
            return <Online data={e} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbartitle">User information</h4>
        <div className="rightbarinfo">
          <div className="rightbarinfoiten">
            <span className="rightbarinfokey">city</span>
            <span className="rightbarinfovalue">Ranchi</span>
          </div>
          <div className="rightbarinfoiten">
            <span className="rightbarinfokey">From:</span>
            <span className="rightbarinfovalue">Hazaribagh</span>
          </div>
          <div className="rightbarinfoiten">
            <span className="rightbarinfokey">Relationship</span>
            <span className="rightbarinfovalue">Signle</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        {profile ? <ProfileRightbar /> : <HomeRightBar />}
      </div>
    </div>
  );
};
