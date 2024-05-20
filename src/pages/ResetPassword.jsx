import React from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "../api/axios";

const ResetPassword = () => {
  const [showPasswords, setShowPasswords] = useState(false);
  const [pwd, setPwd] = useState("");

  const toggleShowPasswords = () => {
    setShowPasswords(!showPasswords);
  };

  const token = window.location.pathname.split("/").pop();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post(`/reset-password/${token}`);
      response && toast.success(response.data.message);
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
      <div className="max-w-[410px] flex flex-col items-center justify-center mx-auto p-2 h-full">
        <h2 className="font-medium mb-6 tracking-widest text-xl">
          Reset Password
        </h2>
        <p
          onClick={toggleShowPasswords}
          className={`bg-neutral-800 text-white p-3  hover:bg-neutral-900 cursor-pointer text-center transition-all duration-300 ${
            darkMode ? "!bg-cyan-400 !text-neutral-900 hover:!bg-cyan-500" : ""
          }`}
        >
          {showPasswords ? "Hide Passwords 🙈" : "Show Passwords 🙊"}
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 px-2 md:px-4 py-3 md:py-6 it"
        >
          <p className="flex flex-col">
            <label
              htmlFor="oldPassword"
              className="py-2 !tracking-widest font-medium text-start"
            >
              Enter Old Password
            </label>
            <input
              type={showPasswords ? "text" : "password"}
              id="oldPassword"
              name="password"
              value={pwd}
              placeholder="Old password"
              className="border-slate-300 border-2 outline-none rounded p-3 !text-black"
              onChange={(e) => setPwd(e.target.value)}
              required
            />
          </p>

          <input
            type="submit"
            onClick={handleSubmit}
            value="Change Password"
            className="py-3 px-6 w-fit font-semibold !tracking-widest bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-all duration-300 cursor-pointer"
          />
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
