const mongoose = require("mongoose");

// Define the Task schema
const TaskSchema = new mongoose.Schema({
  task: String,
  enddate: Date,
  period: String,
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Make sure this matches the name of your User model
  },
});

// Create and export the Task model

module.exports = mongoose.model("Task", TaskSchema);
