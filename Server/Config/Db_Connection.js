const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/todoapp";
console.log(mongoURI);

const Db_Connection = async () => {
  try {
    await mongoose.connect(mongoURI || "mongodb://localhost:27017/todoapp");
    console.log("DB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }

  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to DB");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Mongoose connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
  });
};

module.exports = Db_Connection;
