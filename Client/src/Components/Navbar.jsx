// Navbar.js
import React from "react";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  // Function to handle logout
  const handleLogout = () => {
    window.location.href = "/logout";
  };

  return (
    <div className="flex justify-between items-center bg-[#ede9e4] p-4">
      <div className="text-3xl font-bold pl-4 pt-2 no-wrap">TODO APP</div>
      <div className="flex cursor-pointer" onClick={handleLogout}>
        <PersonIcon
          className="text-3xl mr-4 "
          // Use onClick event handler
        />

        <h4 className="text-sm font-bold ">Logout</h4>
      </div>
    </div>
  );
};

export default Navbar;
