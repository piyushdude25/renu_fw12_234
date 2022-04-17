const mongoose = require("mongoose");
const classSchema = new mongoose.Schema({
  grade: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  teacher_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher",
    required: true,
  },

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
const Class = new mongoose.model("classes", classSchema);
module.exports = Class;
