const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  phonenumber: Number,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "task" }],
});

module.exports = mongoose.model("user", UserSchema);
