import React, { useEffect, useState } from "react";
import "./feed.css";
import axios from "axios";
import { Post } from "../post/Post";

import { Share } from "../share/Share";
import { Posts } from "../../components/jsdummydata";

export const Feed = ({ username }) => {
  const [postdata, setPostdata] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = username
        ? await axios.get("/post/profile/" + username)
        : await axios.get("/post/timeline/626a400249d8bc6fc592903a");
      console.log("res", res);
      setPostdata(res.data);
    };
    getData();
  }, [username]);

  return (
    <div className="feed">
      <Share />
      {postdata.map((e) => {
        return <Post post={e} key={e._id} />;
      })}
    </div>
  );
};
