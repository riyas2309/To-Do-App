// TaskHeader.js
import React, { useState } from "react";

const TaskHeader = ({ selectedTab, onSelectTab }) => {
  const tabs = ["Daily Tasks", "Weekly Tasks", "Monthly Tasks", "Yearly Goals"];

  return (
    <div className="flex justify-around bg-[#ede9e4] p-4 w-[80%] ml-[10%]">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`cursor-pointer text-lg font-semibold ${
            selectedTab === tab ? "border-b-2 border-gray-700" : ""
          }`}
          onClick={() => {
            onSelectTab(tab);
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default TaskHeader;
