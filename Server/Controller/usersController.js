const express = require("express");
const router = express.Router();
const User = require("../Model/UserSchema");
const hashPassword = require("../Utils/passwordHash"); // Use User instead of UserSchema to denote the model
const gentoken = require("../Utils/generateTocken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  // if (!req.user) {
  //   const { email, password } = req.body;
  //   const user = await User.findOne({ email });
  //   if (user) {
  //     const verify = await bcrypt.compare(password, user.password);
  //     if (verify) {
  //       const userObj = user.toObject();
  //       const {
  //         password,
  //         phonenumber,
  //         tasks,
  //         username,
  //         ...userWithoutPassword
  //       } = userObj;
  //       const token = gentoken(userWithoutPassword);
  //       res.cookie("token", token).send("logedin");
  //     }
  //   }
  // } else {
  //   res.redirect("/");
  // }

  if (!req.user) {
    console.log(req.body);
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      console.log(user);
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
          res
            .cookie("token", token, {
              httpOnly: true, // Helps mitigate XSS attacks by not allowing JS to access the cookie
              secure: false, // Set to true in production (requires HTTPS)
              sameSite: "Lax", // Adjust according to your needs (e.g., 'Strict', 'None')
              maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
            })
            .json("Logged in successfully");
        } else {
          res.status(401).send("Incorrect password");
        }
      } else {
        res.json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).send("Server error");
    }
  } else {
    res.redirect("/");
  }
};

module.exports = { login };
