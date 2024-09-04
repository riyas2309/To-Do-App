// Package Imports
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

// Local Imports
const UserRoute = require("./Routes/UserRoutes");
const TasksRoute = require("./Routes/TaskRoutes");
const { logger } = require("./Middleware/logger");
const DbConnection = require("./Config/Db_Connection");
const errorHandeller = require("./Middleware/errorHandeller");
const cookieparser = require("cookie-parser");

// Initialize Express
const app = express();

// Establish DB Connection
DbConnection();

// Allow multiple origins
const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:5173").split(",");

// CORS Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin.replace(/\/$/, ""))) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Middleware to parse JSON and URL-encoded data
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

// Define the PORT
const PORT = process.env.PORT || 3000;

// Root Route
app.get("/", (req, res) => {
  res.send("Root page");
});

// User Route
app.use("/users", UserRoute);

// Task Route
app.use("/tasks", TasksRoute);

// Error Handler Middleware
app.use(errorHandeller);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
