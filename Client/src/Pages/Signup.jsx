import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Axios from "../Api/Axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    phonenumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const PostData = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      const response = await Axios.post("/users/create", data);

      if (response.data.error) {
        // If there's an error from the server, show it and reset the form
        toast.error(response.data.error);
        setData({
          username: "",
          email: "",
          phonenumber: "",
          password: "",
        });
      } else {
        // If successful, show success message and navigate
        toast.success("Registration Successful");
        navigate("/login"); // Redirect to login page after successful signup
      }
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="bg-[#ede9e4] h-screen w-screen">
      <Navbar />
      <div className="flex items-center justify-center">
        <form
          className="flex items-center justify-center w-full h-full"
          onSubmit={PostData}
        >
          <div className="flex flex-col w-[40%] bg-white px-10 py-10 rounded-3xl justify-center items-center">
            <h1 className="text-center font-bold text-4xl p-3">Sign up</h1>
            <input
              type="text"
              name="username"
              placeholder="UserName"
              className="px-3 m-4 bg-[#e4e4e4] h-10 w-[80%] rounded placeholder-[#000000] font-semibold"
              value={data.username}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email Id"
              className="px-3 m-4 bg-[#e4e4e4] h-10 w-[80%] rounded placeholder-[#000000] font-semibold"
              value={data.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phonenumber"
              placeholder="Phone Number"
              className="px-3 m-4 bg-[#e4e4e4] h-10 w-[80%] rounded placeholder-[#000000] font-semibold"
              value={data.phonenumber}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="px-3 m-4 bg-[#e4e4e4] h-10 w-[80%] rounded placeholder-[#000000] font-semibold"
              value={data.password}
              onChange={handleChange}
            />
            <input
              type="submit"
              value="Sign up"
              className="px-5 m-4 bg-[#e4e4e4] h-10 w-[25%] text-[#000000] font-semibold cursor-pointer rounded-3xl"
            />
            <h3>Or</h3>
            <p>
              Already have{" "}
              <span
                className="text-[#000000] font-semibold cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Account?
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
