// Package Imports
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
// Local Imports
const UserRoute = require("./Routes/UserRoutes");
const TasksRoute = require("./Routes/TaskRoutes");
const { logger } = require("./Middleware/logger"); // Destructure to get logger function
const DbConnection = require("./Config/Db_Connection");
const errorHandeller = require("./Middleware/errorHandeller");
const cookieparser = require("cookie-parser");

// Initialize Express
const app = express();

// Establish DB Connection
const allowedOrigins = process.env.FRONTEND_URL || "http://localhost:5173";
DbConnection();
app.use(
  cors({
    origin:  (origin, callback) => {
      if (origin && allowedOrigins.includes(origin.replace(/\/$/, ""))) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }, // Replace with your React app's URL
    credentials: true, // This allows cookies to be included in requests
  })
);

// Middleware to parse JSON and URL-encoded data
app.use(logger); // Use logger middleware correctly
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
// Check if PORT is defined
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Root Route
app.get("/", (req, res) => {
  res.send("Root page");
});

// User Route
app.use("/users", UserRoute);

// Task Route
app.use("/tasks", TasksRoute);

app.use(errorHandeller);
