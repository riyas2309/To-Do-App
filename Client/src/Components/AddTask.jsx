import React, { useState, useEffect } from "react";
import Axios from "../Api/Axios";

const AddTask = ({ closeModal, taskToEdit }) => {
  const [task, setTask] = useState(taskToEdit ? taskToEdit.task : "");
  const [endDate, setEndDate] = useState("");
  const [type, setType] = useState(taskToEdit ? taskToEdit.type : "");

  useEffect(() => {
    if (taskToEdit) {
      const date = new Date(taskToEdit.enddate);
      const formattedDate = !isNaN(date.getTime())
        ? date.toISOString().slice(0, 10)
        : "";
      setEndDate(formattedDate);
    }
  }, [taskToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(taskToEdit);
    if (taskToEdit) {
      const updateTask = await Axios.post("/tasks/update", {
        _id: taskToEdit._id,
        task,
        endDate,
        type,
      });
      console.log(updateTask);
      closeModal();
    } else {
      const postTask = await Axios.post("/tasks/create", {
        task,
        endDate,
        type,
      });
      console.log(postTask);
      closeModal();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {taskToEdit ? "Edit Task" : "Add New Task"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Task"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <input
              type="date"
              name="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <select
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="" disabled>
                Type
              </option>
              <option value="Daily Tasks">Daily</option>
              <option value="Weekly Tasks">Weekly</option>
              <option value="Monthly Tasks">Monthly</option>
              <option value="Yearly Goals">Yearly</option>
            </select>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {taskToEdit ? "Update Task" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
