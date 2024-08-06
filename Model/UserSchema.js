const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  phonenumber: Number,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "task" }],
});

module.exports = mongoose.Schema("user", UserSchema);
