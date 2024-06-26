import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "../api/axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef(null);
  const { userEmail } = useParams();

  useEffect(() => {
    emailRef.current.focus();
    setEmail(userEmail || "");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      return toast.error("Please provide email");
    }

    setLoading(true);
    try {
      const response = await axios.post("/api/users/forgot-password", {
        email,
      });
      if (response.data.message === "Email sent.") {
        toast.success("Email sent successfully.");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full h-screen bg-gradient-to-t from-green-50 to-transparent">
      <div className="max-w-[410px] flex flex-col items-center justify-center mx-auto p-2 h-full">
        <h2 className="font-medium mb-6 tracking-widest text-xl">
          Forgot Password?
        </h2>
        <form
          action="/"
          method="post"
          className="flex flex-col items-center justify-center w-full gap-4 mt-3 transition-all duration-300"
          onSubmit={handleSubmit}
        >
          <p className="flex flex-col w-full">
            <label htmlFor="email" className="tracking-wider font-medium">
              Email
            </label>
            <input
              type="text"
              id="email"
              ref={emailRef}
              placeholder="user@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 text-slate-700 outline-slate-500 border-2 rounded transition-all duration-300 w-full"
              disabled={loading}
            />
          </p>
          <button
            className={`p-3 font-medium tracking-widest rounded w-full mt-2 active:scale-95 transition-all duration-300 ${
              loading
                ? "bg-green-400 opacity-50 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Reset Password"}
          </button>
        </form>
        <ToastContainer />
        <div className="flex items-center justify-between text-sm mt-3 w-full">
          <p>Remembered password?</p>
          <Link
            to="/login"
            className="text-blue-500 underline underline-offset-1"
          >
            Login
          </Link>
        </div>
        <p className="text-slate-700 mt-4 text-sm w-full">
          Follow the link that will be sent to your email to reset the password.
        </p>
      </div>
    </section>
  );
};

export default ForgotPassword;
