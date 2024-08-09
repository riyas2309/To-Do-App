const express = require("express");
const router = express.Router();
const User = require("../Model/UserSchema");
const hashPassword = require("../Utils/passwordHash"); // Use User instead of UserSchema to denote the model
const gentoken = require("../Utils/generateTocken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  if (!req.user) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const verify = await bcrypt.compare(password, user.password);
      if (verify) {
        const userObj = user.toObject();
        const {
          password,
          phonenumber,
          tasks,
          username,
          ...userWithoutPassword
        } = userObj;
        const token = gentoken(userWithoutPassword);
        res.cookie("token", token).send("logedin");
      }
    }
  } else {
    res.redirect("/");
  }
};

module.exports = { login };
