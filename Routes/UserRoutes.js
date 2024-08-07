const express = require("express");
const router = express.Router();
const User = require("../Model/UserSchema");
const hashPassword = require("../Utils/passwordHash"); // Use User instead of UserSchema to denote the model
const gentoken = require("../Utils/generateTocken");
const isloggedin = require("../Middleware/isloggedin");
const UserSchema = require("../Model/UserSchema");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("user");
});
//create user
router.post("/create", async (req, res) => {
  const { username, password, email, phonenumber } = req.body;

  try {
    //check for the emply fields
    if (username && password && email && phonenumber) {
      //check for the duplicate user
      const userCheck = await User.findOne({ email });
      if (!userCheck) {
        //hashing password
        const passwordenc = await hashPassword(password);
        //creating user
        const user = await User.create({
          username,
          password: passwordenc,
          email,
          phonenumber,
        });
        //genarating the token
        const token = gentoken(user);
        //setting cokkie
        res.cookie("token", token).status(201).send(user);
      } else {
        res.status(400).send("User already exists");
      }
    } else {
      res.status(400).send("All fields are required");
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.post("/login", isloggedin, async (req, res) => {
  if (!req.user) {
    const { email, password } = req.body;
    const user = await UserSchema.findOne({ email });
    if (user) {
      const verify = await bcrypt.compare(password, user.password);
      if (verify) {
        gentoken(...User, (password = ""));
      }
    }
  } else {
    res.send("logdin");
  }
});

router.post("/logout", (req, res) => {
  res.cookie("token", "").send("logedout");
});

module.exports = router;
