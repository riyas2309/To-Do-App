import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Axios from "../Api/Axios";
import toast from "react-hot-toast";
import { useAuth } from "../Contexts/AuthContext";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [data, setData] = useState({
    email: "",
    phonenumber: "",
  });
  const { login } = useAuth();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data); // Consider removing or reducing logs in production
  };

  // const PostData = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await Axios.post("/users/create", data);

  //     if (response.data.error) {
  //       toast.error(response.data.errorMessage); // Corrected the typo here
  //       setData({
  //         username: "",
  //         email: "",
  //         phonenumber: "",
  //         password: "",
  //       });
  //     } else {
  //       login();
  //       toast.success("Registration Successful");
  //       navigate("/tasks");
  //     }
  //   } catch (error) {
  //     console.error("Error signing up:", error.response.data.errorMessage);
  //     toast.error(error.response.data.errorMessage);
  //   }
  // };
  const sendOTP = (e) => {
    e.preventDefault();
    setOtpSent(!otpSent);
  };
  return (
    <div className="bg-[#ede9e4] h-screen w-screen">
      <Navbar />
      <div className="flex items-center justify-center">
        <form
          className="flex items-center justify-center w-full h-full"
          onSubmit={(e) => sendOTP(e)}
        >
          <div className="flex flex-col w-[40%] bg-white px-10 py-10 rounded-3xl justify-center items-center">
            <h1 className="text-center font-bold text-4xl p-3">
              Reset Password
            </h1>

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
            {otpSent && (
              <>
                <input
                  type="text"
                  name="verifyotp"
                  placeholder="OTP"
                  className="px-3 m-4 bg-[#e4e4e4] h-10 w-[80%] rounded placeholder-[#000000] font-semibold"
                  // value={(e) => setOtp(e.target.value)}
                  // onChange={handleChange}
                />
                <button>Verify OTP</button>
              </>
            )}
            <input
              type="submit"
              value="Send OTP"
              className="px-5 m-4 bg-[#e4e4e4] h-10 w-[25%] text-[#000000] font-semibold cursor-pointer rounded-3xl"
            />
            <h3>Or</h3>
            <p>
              <span
                className="text-[#000000] font-semibold cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
