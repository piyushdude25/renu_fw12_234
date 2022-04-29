const express = require("express");
const bcrypt = require("bcrypt");

const port = process.env.PORT || 8080;
require("./db/connect");

const Register = require("./models/user");
const Post = require("./models/post");
const SECRET_KEY = "HJHJXHJASJDSJKKJSJKSDKJDSKJVJKD";
const app = express();
app.use(express.json());
//.......................users.......

app.post("/user/register", async (req, res) => {
  try {
    //generate hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);
    const newuser = new Register({
      name: req.body.name,
      email: req.body.email,
      password: hashedpassword,
    });
    //save users

    const user = await newuser.save();
    console.log(user);

    res.status(200).json(user);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post("/user/login", async (req, res) => {
  try {
    const user = await Register.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json("user does not exist");
    } else {
      const passcompare = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!passcompare) {
        return res.status(404).json("invalid user");
      }
      return res.status(200).json(user);
    }
  } catch (e) {
    console.log(e);
  }
});

app.get("/user/:id", async (req, res) => {
  const user = await Register.findOne({ _id: req.params.id });
  if (user) {
    return res.status(201).json(user);
  }
  return res.status(404).json("user does not exist");
});
app.put("/user/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (e) {
        return res.json(e);
      }
    }
    try {
      const user = await Register.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      console.log(user);
      return res.status(201).json("Account has been updated..");
    } catch (e) {
      return res.json(e);
    }
  } else {
    return res.status(403).json("you can't update data");
  }
});

app.delete("/user/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await Register.findByIdAndDelete({ _id: req.params.id });
      // console.log(user);

      return res.status(201).json("Account has been deleted successfully..");
    } catch (e) {
      return res.status(404).json(e);
    }
  } else {
    return res.status(403).json("you can't delete data");
  }
});

//profile/............................
app.get("/profile/:id", async (req, res) => {
  try {
    const profileuser = await Register.findById({ _id: req.params.id });

    res.status(200).json(profileuser);
  } catch (e) {
    res.status(401).json("not user");
  }
});

//follow................

app.put("/user/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await Register.findById(req.params.id);
      const currentuser = await Register.findById(req.body.userId);
      console.log("user", user);
      console.log("currentuser", currentuser);

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentuser.updateOne({ $push: { followings: req.body.userId } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you already follow this users");
      }
    } catch (e) {
      return res.status(404).json(e);
    }
  } else {
    return res.status(403).json("you can't follow users");
  }
}); //.......................................posts...................

app.post("/post", async (req, res) => {
  const newpost = new Post(req.body);
  try {
    const savepost = await newpost.save();
    res.status(201).json(savepost);
  } catch (e) {
    res.status(404).json(e);
  }
});

app.put("/post/:id", async (req, res) => {
  const newpost = await Post.findById({ _id: req.params.id });
  if (newpost.userId === req.body.userId) {
    await Post.updateOne({ $set: req.body });
    res.status(201).json("post update success");
  } else {
    res.status(404).json("not currect user");
  }
});
app.delete("/post/:id", async (req, res) => {
  const newpost = await Post.findById({ _id: req.params.id });
  if (newpost.userId === req.body.userId) {
    await Post.deleteOne();
    res.status(201).json("post has been deleted.....");
  } else {
    res.status(404).json("not correct user");
  }
});
//likes and dislike post...............

app.put("/post/:id/like", async (req, res) => {
  const newpost = await Post.findById({ _id: req.params.id });
  if (!newpost.likes.includes(req.body.userId)) {
    await Post.updateOne({ $set: { likes: req.body.userId } });
    res.status(201).json("post liked successfully");
  } else {
    await Post.updateOne({ $pull: { likes: req.body.userId } });
    res.status(404).json("post has ben dislike");
  }
});
app.get("/post/:id", async (req, res) => {
  try {
    const post = await Post.findById({ _id: req.params.id });
    console.log(post);
    res.status(201).json(post);
  } catch (e) {
    res.status(401).json(e);
  }
});
app.get("/post/timeline/:userId", async (req, res) => {
  let postarray = [];
  try {
    const currentuser = await Register.findById(req.params.userId);
    const userpost = await Post.find({ userId: currentuser._id });
    const friendpost = await Promise.all(
      currentuser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.json(userpost.concat(...friendpost));
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

app.get("/post/profile/:name", async (req, res) => {
  let postarray = [];
  try {
    const finduser = Register.findOne({ name: req.params.name });
    const postdata = await Post.find({ userId: finduser._id });

    res.status(201).json(postdata);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

app.listen(port, () => {
  console.log(`listrening on port ${port} `);
});
