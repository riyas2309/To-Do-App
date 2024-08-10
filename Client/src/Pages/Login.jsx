import React from "react";
import Navbar from "../Components/Navbar"; // Make sure the path is correct
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignUpRedirect = () => {
    navigate("/signup"); // Change '/signup' to the route for the Sign-up page
  };

  return (
    <div className="bg-[#ede9e4] h-screen w-screen items-center justify-center">
      <Navbar />
      <div className="flex items-center justify-center mt-[7%]">
        <form className="flex items-center justify-center w-full">
          <div className="flex flex-col w-[40%] bg-white px-10 py-10 rounded-3xl shadow-lg items-center">
            <h1 className="text-center justify-center font-bold text-4xl mb-6">
              Log In
            </h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="px-3 mb-6 bg-[#e4e4e4] h-10 w-[80%] rounded placeholder-[#000000] font-semibold "
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="px-3 mb-2 bg-[#e4e4e4] h-10 w-[80%] rounded placeholder-[#000000] font-semibold "
            />
            <div className="mb-4 w-[80%] flex justify-start">
              <span
                className="text-blue-500 hover:text-blue-700 cursor-pointer"
                onClick={() => {
                  // Add logic here to handle the forgot password action, e.g., navigate to a reset password page
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
