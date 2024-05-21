import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "../api/axios";
import { BgContext } from "../App";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const ResetPassword = () => {
  const { darkMode } = useContext(BgContext);
  const [showPasswords, setShowPasswords] = useState(false);
  const [pwd, setPwd] = useState("");

  const toggleShowPasswords = () => {
    setShowPasswords(!showPasswords);
  };

  const token = window.location.pathname.split("/").pop();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post(`/reset-password/${token}`, {
        password: pwd,
      });
      // response && toast.success(response.data.message)
      console.log(response);
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <section className="w-full h-screen bg-gradient-to-t from-green-50 to-transparent">
      <ToastContainer />
      <div className="flex flex-col items-center justify-center mx-auto p-2 h-full w-full">
        <h2 className="font-medium tracking-widest text-xl">Reset Password</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 px-2 md:px-4 py-3 md:py-6 w-full"
        >
          <p className="flex flex-col w-full md:w-1/2 mx-auto">
            <label htmlFor="newPassword" className="font-medium text-start">
              Enter New Password
            </label>
            <span className="flex items-center w-full justify-between border-slate-300 border-2 rounded !text-black">
              <input
                type={showPasswords ? "text" : "password"}
                id="newPassword"
                name="password"
                value={pwd}
                placeholder="New password"
                className="p-3 w-[90%] outline-none"
                onChange={(e) => setPwd(e.target.value)}
                required
              />
              <span
                className="w-[10%] cursor-pointer flex items-center justify-center"
                onClick={() => setShowPasswords(!showPasswords)}
              >
                {showPasswords ? <FaRegEyeSlash /> : <FaEye />}
              </span>
            </span>
          </p>

          <input
            type="submit"
            onClick={handleSubmit}
            value="Change Password"
            className="py-3 px-6 w-full md:w-1/2 font-semibold !tracking-widest bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-all duration-300 cursor-pointer mx-auto"
          />
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
