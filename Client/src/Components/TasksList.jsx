import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SortIcon from "@mui/icons-material/Sort";

const TaskList = ({
  tasks,
  onToggleComplete,
  deleteTask,
  editTask,
  selectedTab,
}) => {
  console.log(selectedTab);
  const filteredTasks = tasks.filter((task) => task.type === selectedTab);
  return (
    <div className="container w-[80%] bg-white rounded-2xl p-6 mt-5">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <div className="w-1/2 text-lg font-bold ml-[10rem]">Tasks</div>
        <div className="w-1/2 flex justify-end items-center text-lg font-bold">
          <span className="mr-[15rem]">End Date</span>
        </div>
      </div>
      {filteredTasks.map((task, index) => {
        // Convert end date to the desired format
        const date = new Date(task.enddate);
        const formattedDate = !isNaN(date.getTime())
          ? date.toISOString().slice(0, 10)
          : "Invalid Date";

        return (
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
              <span className="text-lg font-semibold mr-52">
                {formattedDate}
              </span>
              <DeleteIcon
                className="text-red-500 cursor-pointer mr-2"
                onClick={() => deleteTask(index)}
              />
              <EditIcon
                className="text-green-500 cursor-pointer"
                onClick={() => editTask(index)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
