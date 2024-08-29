const express = require("express");
const isloggedin = require("../Middleware/isloggedin");
const User = require("../Model/UserSchema");
const Tasks = require("../Model/TaskSchema");
const router = express.Router();

// POST / route
router.get("/list", isloggedin, async (req, res) => {
  if (!req.user) {
    res.redirect("/users/login");
  } else {
    const { email } = req.user;
    const user = await User.findOne({ email }).populate("tasks");
    console.log(user.tasks);
    res.send(user.tasks).status(200);
  }
});

router.post("/create", isloggedin, async (req, res) => {
  if (!req.user) {
    res.redirect("/users/login");
  } else {
    const { email } = req.user;

    const user = await User.findOne({ email });
    const { task, endDate, type } = req.body;
    const endDated = new Date(endDate);
    const currentDate = new Date();
    const diffInMs = endDated - currentDate;
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    const tasks = await Tasks.create({
      task: task,
      period: diffInDays,
      userid: user._id,
    });
    user.tasks.push(tasks._id);
    await user.save();
    res.send("tasks");
  }
});
router.put("/delete", isloggedin, async (req, res) => {
  if (!req.user) {
    res.redirect("/users/login");
  } else {
    const { email } = req.user;
    const user = await User.findOne({ email });
    const task = req.body.task;
    const usertasks = user.tasks;
    if (usertasks.includes(task)) {
      user.tasks = user.tasks.filter((taskid) => taskid.toString() !== task);
      await user.save();
      await Tasks.deleteOne({ _id: task });
    }

    res.send(200);
  }
});
router.put("/completed", isloggedin, async (req, res) => {
  if (!req.user) {
    res.redirect("/users/login");
  } else {
    const { task } = req.body;
    const tasks = await Tasks.findOne({ _id: task });
    if (tasks) {
      tasks.completed = true;
      await tasks.save();
    }
    res.send("complete");
  }
});
module.exports = router;
