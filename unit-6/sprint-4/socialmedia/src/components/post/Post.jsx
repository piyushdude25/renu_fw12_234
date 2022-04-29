import React, { useEffect, useState } from "react";
import "./post.css";
import axios from "axios";
import profile from "../images/profile.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import postimg from "../images/postimg.jpg";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [islike, setIslike] = useState(true);
  const [user, setUser] = useState({});
  console.log("user", user);
  console.log("post", post);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`/user/${post.userId}`);
      console.log("res", res.data);
      setUser(res.data);
    };
    getData();
  }, [post.userId]);
  const handleliked = () => {
    setLike(islike ? like + 1 : like - 1);
    setIslike(!islike);
  };

  return (
    <div className="post">
      <div className="postwrapper">
        <div className="posttop">
          <div className="posttopleft">
            <Link to={`/profile/${post.userId}`}>
              {" "}
              <img src={profile} className="profileimg" alt="profile"></img>
            </Link>
            <span className="postusername">{user.name}</span>
            <span className="postdate">{format(post.createdAt)}</span>
          </div>
          <div className="posttopright">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">{post.desc}</span>
          <br />
          <img src={post.img} alt="" className="postimg" />
        </div>
        <div className="postbottom">
          <div className="postbottomleft">
            <span>
              {" "}
              <ThumbUpIcon
                style={{ color: "yellow" }}
                className="postthumb"
                onClick={handleliked}
              />
            </span>{" "}
            <span>
              <FavoriteIcon style={{ color: "red" }} className="postheart" />
            </span>
            <span className="postlikecounter">{like} people liked it</span>
          </div>
          <div className="postbottomright">
            <span className="postcommenttext">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
