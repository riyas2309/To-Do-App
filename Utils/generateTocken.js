const jwt = require("jsonwebtoken");

const gentoken = (user) => {
  console.log(user);
  return jwt.sign({ email: user.email, id: user._id }, process.env.JWT_HASH);
};

module.exports = gentoken;
