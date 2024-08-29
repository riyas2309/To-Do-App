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
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const gettasks = await Axios.get("/tasks/list");
        setTasks(gettasks.data);
      } catch (error) {}
    };
    fetchTask();
  }, [modalState]);

  const toggleTaskCompletion = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const changeModalState = () => {
    setModalState(!modalState);
    console.log(modalState);
  };

  return (
    <div className="bg-[#ede9e4] min-h-screen w-full">
      <Navbar />
      <TaskHeader selectedTab={selectedTab} onSelectTab={setSelectedTab} />
      <div className="flex justify-center items-center flex-col">
        <TaskList tasks={tasks} onToggleComplete={toggleTaskCompletion} />
        <div
          className="fixed bottom-10 right-10 bg-white p-4 rounded-full shadow-lg cursor-pointer"
          onClick={changeModalState}
        >
          <AddIcon className="text-3xl" />
        </div>
        {modalState && <Modal onClose={changeModalState} />}
      </div>
    </div>
  );
};

export default TodoApp;
