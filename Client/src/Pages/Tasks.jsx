// TodoApp.js
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import TaskHeader from "../Components/TaskHeader";
import TaskList from "../Components/TasksList";
import AddIcon from "@mui/icons-material/Add";

const TodoApp = () => {
  const [selectedTab, setSelectedTab] = useState("Daily Tasks");

  const tasks = [
    { name: "wakeup", endTime: "10:00", completed: true },
    { name: "wakeup", endTime: "10:00", completed: false },
    { name: "wakeup", endTime: "10:00", completed: true },
    { name: "wakeup", endTime: "10:00", completed: true },
    { name: "wakeup", endTime: "10:00", completed: true },
  ];

  return (
    <div className="bg-[#ede9e4] min-h-screen w-full">
      <Navbar />
      <TaskHeader selectedTab={selectedTab} onSelectTab={setSelectedTab} />
      <div className="flex justify-center items-center flex-col">
        <TaskList tasks={tasks} />
        <div className="fixed bottom-10 right-10 bg-white p-4 rounded-full shadow-lg cursor-pointer">
          <AddIcon className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
