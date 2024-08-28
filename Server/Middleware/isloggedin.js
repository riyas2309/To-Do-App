const jwt = require("jsonwebtoken");
const User = require("../Model/UserSchema");
const { isToday } = require("date-fns/isToday");

const isloggedin = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    next();
  } else {
    try {
      const decode = jwt.verify(token, process.env.JWT_HASH);
      req.user = decode;

      next();
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = isloggedin;
