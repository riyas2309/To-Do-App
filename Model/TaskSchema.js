const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  task: String,
  enddate: Date,
  period: String,
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
s;

module.exports = mongoose.Schema("task", TaskSchema);
