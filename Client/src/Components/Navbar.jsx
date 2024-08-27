// Navbar.js
import React from "react";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#ede9e4] p-4">
      <div className="text-3xl font-bold pl-4 pt-2 no-wrap">TODO APP</div>
      <PersonIcon className="text-3xl mr-4" />
    </div>
  );
};

export default Navbar;
