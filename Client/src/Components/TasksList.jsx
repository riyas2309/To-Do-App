import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SortIcon from "@mui/icons-material/Sort";

const TaskList = ({ tasks, onToggleComplete }) => {
  console.log(tasks);
  return (
    <div className="container w-[80%] bg-white rounded-2xl p-6 mt-5">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <div className="w-1/2 text-lg font-bold">Tasks</div>
        <div className="w-1/2 flex justify-end items-center text-lg font-bold">
          <span className="mr-2">End Date</span>
          <SortIcon className="cursor-pointer" />
        </div>
      </div>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-2 border-b last:border-none"
        >
          <div
            className="flex items-center w-1/2 cursor-pointer"
            onClick={() => onToggleComplete(index)}
          >
            {task.completed ? (
              <CheckBoxIcon className="text-blue-500 mr-2" />
            ) : (
              <CheckBoxOutlineBlankIcon className="text-blue-500 mr-2" />
            )}
            <span className="text-lg font-semibold">{task.task}</span>
          </div>
          <div className="flex items-center w-1/2 justify-end">
            <span className="text-lg font-semibold mr-2">{task.period}</span>
            <DeleteIcon className="text-red-500 cursor-pointer mr-2" />
            <EditIcon className="text-green-500 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
