import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import TaskHeader from "../Components/TaskHeader";
import TaskList from "../Components/TasksList";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../Components/Modal";
import Axios from "../Api/Axios";

const TodoApp = () => {
  const [selectedTab, setSelectedTab] = useState("Daily Tasks");
  const [modalState, setModalState] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null); // New state for the task to edit

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const gettasks = await Axios.get("/tasks/list");
        setTasks(gettasks.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTask();
  }, [modalState]);

  const toggleTaskCompletion = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      );
      const updatedTask = updatedTasks[index];
      console.log(updatedTask);
      const UpdateDBTask = async () => {
        try {
          const updateTask = await Axios.post("/tasks/update", updatedTask);
          console.log(updateTask);
        } catch (error) {
          console.log(error);
        }
      };
      UpdateDBTask();

      return updatedTasks;
    });
  };

  const changeModalState = () => {
    setModalState(!modalState);
    console.log(modalState);
  };

  const deleteTask = async (index) => {
    const taskToDelete = tasks[index];

    try {
      const deleteTaskResponse = await Axios.put("/tasks/delete", taskToDelete);
      console.log(deleteTaskResponse);

      // Remove the task from the local state
      setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    setTaskToEdit(taskToEdit); // Set the task to edit
    changeModalState(); // Open the modal
  };

  return (
    <div className="bg-[#ede9e4] min-h-screen w-full">
      <Navbar />
      <TaskHeader selectedTab={selectedTab} onSelectTab={setSelectedTab} />
      <div className="flex justify-center items-center flex-col">
        <TaskList
          tasks={tasks}
          onToggleComplete={toggleTaskCompletion}
          deleteTask={deleteTask}
          editTask={editTask}
          selectedTab={selectedTab}
        />
        <div
          className="fixed bottom-10 right-10 bg-white p-4 rounded-full shadow-lg cursor-pointer"
          onClick={() => {
            setTaskToEdit(null); // Reset taskToEdit for new task creation
            changeModalState();
          }}
        >
          <AddIcon className="text-3xl" />
        </div>
        {modalState && (
          <Modal onClose={changeModalState} taskToEdit={taskToEdit} />
        )}
      </div>
    </div>
  );
};

export default TodoApp;
