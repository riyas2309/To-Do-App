const express = require("express");
const isloggedin = require("../Middleware/isloggedin");
const User = require("../Model/UserSchema");
const Tasks = require("../Model/TaskSchema");
const router = express.Router();

// POST / route
router.get("/", isloggedin, async (req, res) => {
  if (!req.user) {
    res.redirect("/users/login");
  } else {
    const { email } = req.user;
    const user = await User.findOne({ email }).populate("tasks");
    console.log(user.tasks);
    res.sendStatus(200);
  }
});

router.post("/create", isloggedin, async (req, res) => {
  if (!req.user) {
    res.redirect("/users/login");
  } else {
    const { email } = req.user;

    const user = await User.findOne({ email });

    const tasks = await Tasks.create({
      task: "hello this is my first task",
      period: "5",
      userid: user._id,
    });
    user.tasks.push(tasks._id);
    await user.save();
    res.send("tasks");
  }
});

module.exports = router;
