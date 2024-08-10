import React from "react";
import Navbar from "../Components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const navgate = useNavigate();
  const handleLoginRedirect = () => {
    navgate("/login");
  };
  return (
    <div className="bg-[#ede9e4] h-screen w-screen">
      <Navbar />
      <div className=" flex items-center justify-center ">
        <form
          action=""
          className="flex items-center justify-center w-full h-full"
        >
          <div className="flex flex-col w-[40%] bg-white px-10 py-10 rounded-3xl  justify-center items-center">
            <h1 className="text-center justify-center font-bold text-4xl p-3">
              Sign up
            </h1>
            <input
              type="text"
              name="name"
              placeholder="UserName"
              className="px-3 m-4 bg-[#e4e4e4] h-10 w-[80%] rounded placeholder-[#000000] font-semibold "
            />

            <input
              type="text"
              name="email"
              placeholder="Email Id"
              className="px-3 m-4 bg-[#e4e4e4] h-10 w-[80%] rounded placeholder-[#000000] font-semibold "
            />
            <input
              type="text"
              name="phonenumber"
              placeholder="Phone Number"
              className="px-3 m-4 bg-[#e4e4e4] h-10 w-[80%] rounded placeholder-[#000000] font-semibold "
            />

            <input
              type="text"
              name="password"
              placeholder="Password"
              className="px-3 m-4 bg-[#e4e4e4] h-10 w-[80%] rounded placeholder-[#000000] font-semibold "
            />
            <input
              type="submit"
              value="Sign up"
              className="px-5 m-4 bg-[#e4e4e4] h-10 w-[25%]  text-[#000000] font-semibold cursor-pointer rounded-3xl"
            />
            <h3>Or</h3>
            <p>
              Already have{" "}
              <span
                className="text-[#000000] font-semibold cursor-pointer"
                onClick={handleLoginRedirect}
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
