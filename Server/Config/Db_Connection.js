const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;

const Db_Connection = async () => {
  try {
    await mongoose.connect(mongoURI).then(console.log("MONGO DB connected"));
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

module.exports = Db_Connection;
