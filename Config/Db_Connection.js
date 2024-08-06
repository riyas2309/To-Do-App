const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI + "/todoapp";
console.log(mongoURI);

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
