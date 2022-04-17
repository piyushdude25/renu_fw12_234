const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  classes_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "classes",
      required: true,
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
const Teacher = new mongoose.model("teacher", teacherSchema);
module.exports = Teacher;
