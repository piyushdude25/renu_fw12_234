const express = require("express");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const port = process.env.PORT || 8080;
require("./db/connect");

const Register = require("./models/user");
const SECRET_KEY = "HJHJXHJASJDSJKKJSJKSDKJDSKJVJKD";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/login", async (req, res) => {
  res.send("login");
});
app.post("/register", async (req, res) => {
  try {
    const user = await Register.create(req.body);
    console.log(user);
    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, SECRET_KEY);
    console.log("token", token);
    res.send({ token });
  } catch (e) {
    console.log(e);
  }
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Register.findOne({ email });
    if (!user) {
      return res.send("user does not exist");
    }
    const passcompare = bcrypt.compare(password, user.password);
    if (!passcompare) {
      return res.send("user does not exist");
    }
    const loginid = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(loginid, SECRET_KEY);
    console.log("logintoken", token);
    res.send({ token });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`listrening on port ${port} `);
});
