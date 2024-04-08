import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      return alert("Provide Email");
    }
    alert("Coming soon!!");
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
              placeholder="user@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 text-slate-700 outline-slate-500  border-2 rounded transition-all duration-300 w-full"
            />
          </p>
          <button
            className="p-2 bg-green-500 hover:bg-green-600 text-white font-medium tracking-widest rounded w-full mt-2  transition-all duration-300"
            onClick={handleSubmit}
          >
            Reset Password
          </button>
        </form>
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
          Follow link that will be sent to your email to reset password.
        </p>
      </div>
    </section>
  );
};

export default ForgotPassword;
