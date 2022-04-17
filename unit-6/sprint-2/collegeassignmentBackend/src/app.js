const express = require("express");

const hbs = require("hbs");
const path = require("path");
const Teacher = require("./models/teacherregister");
const Classes = require("./models/classes");

require("./db/connect");
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.send("hello");
});
app.post("/teacherregister", async (req, res) => {
  console.log(req.body);
  const teacher = new Teacher(req.body);
  const registerteacher = await teacher.save();
  res.send(req.body);
});
app.get("/allteachers", async (req, res) => {
  const teacher = await Teacher.find();

  res.send(teacher);
});
app.post("/addclasses", async (req, res) => {
  console.log(req.body);
  const classes = new Classes(req.body);
  const classesresult = await classes.save();
  res.send(req.body);
});
app.listen(port, () => {
  console.log(`listening on port 3000 ${port}`);
});
