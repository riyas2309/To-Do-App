import React, { useEffect } from "react";
import Axios from "../Api/Axios";
import { toast } from "react-hot-toast";
const Logout = () => {
  useEffect(() => {
    const handleLogout = async () => {
      try {
        const response = await Axios.get("/users/logout");
        console.log(response);

        if (response.data.error) {
          toast.error(response.data.error);
        } else {
          toast.success("Successfully logged out");

          window.location.href = "/login";
        }
      } catch (err) {
        console.error("Logout failed", err);
        toast.error("Logout failed. Please try again.");
      }
    };

    handleLogout();
  }, []);

  return <div></div>;
};

export default Logout;
