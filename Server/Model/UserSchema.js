const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  phonenumber: Number,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task", default: [] }],
});

module.exports = mongoose.model("User", UserSchema);
