const express = require("express");
const dotenv = require("dotenv").config();

const UserRoute = require("./Routes/UserRoutes");
const TasksRoute = require("./Routes/TaskRoutes");

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const DbConnection = require("./Config/Db_Connection");
// Check if PORT is defined
const PORT = process.env.PORT || 3000; // Default to port 3000 if not defined

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

//root Route
app.get("/", (req, res) => {
  console.log("Root");
  res.send("Root page");
});

app.use("/users", UserRoute);

app.use("/tasks", TasksRoute);
