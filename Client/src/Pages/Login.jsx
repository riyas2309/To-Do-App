import React from "react";
import Navbar from "../Components/Navbar"; // Make sure the path is correct
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "../Api/Axios";
import { useAuth } from "../Contexts/AuthContext";

import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const PostData = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      const response = await Axios.post("/users/login", data);
      console.log(response);
      if (response.data.error) {
        // If there's an error from the server, show it and reset the form
        toast.error(response.data.error);
        setData({
          email: "",
          password: "",
        });
      } else {
        console.log(response);
        // If successful, show success message and navigate
        login();
        toast.success("login Successful");
        navigate("/tasks"); // Redirect to login page after successful signup
      }
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("An error occurred during signup. Please try again.");
    }
  };
  const handleSignUpRedirect = () => {
    navigate("/signup"); // Change '/signup' to the route for the Sign-up page
  };

  return (
    <div className="bg-[#ede9e4] h-screen w-screen items-center justify-center">
      <Navbar />
      <div className="flex items-center justify-center mt-[7%]">
        <form
          className="flex items-center justify-center w-full"
          onSubmit={PostData}
        >
          <div className="flex flex-col w-[40%] bg-white px-10 py-10 rounded-3xl shadow-lg items-center">
            <h1 className="text-center justify-center font-bold text-4xl mb-6">
              Log In
            </h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="px-3 mb-6 bg-[#e4e4e4] h-10 w-[80%] rounded placeholder-[#000000] font-semibold "
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="px-3 mb-2 bg-[#e4e4e4] h-10 w-[80%] rounded placeholder-[#000000] font-semibold "
              onChange={handleChange}
            />
            <div className="mb-4 w-[80%] flex justify-start">
              <span
                className="text-blue-500 hover:text-blue-700 cursor-pointer"
                onClick={() => {
                  window.location.href = "/forgotPassword";
                }}
              >
                Forgot Password?
              </span>
            </div>
            <input
              type="submit"
              value="Log In"
              className="px-5 mb-4 bg-[#e4e4e4] h-10 w-[30%] text-[#000000] font-semibold cursor-pointer rounded-3xl"
            />
            <h3>Or</h3>
            <p>
              Don't have an{" "}
              <span
                className="text-[#000000] font-semibold cursor-pointer"
                onClick={handleSignUpRedirect}
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

export default Login;
