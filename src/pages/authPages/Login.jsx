import React, { useState } from "react";
import logo from "../../assets/logo.jpg";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaX,
  FaXTwitter,
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    const userDetails = JSON.parse(localStorage.getItem("user"));
    console.log(userDetails);

    if (
      user.email === userDetails.email &&
      user.password === userDetails.password
    ) {
      alert("Login Successful");
      setTimeout(() => {
        // window.location.href = "/dashboard";
        navigate("/dashboard/settings");
      }, 1000);
    } else {
      alert("Incorrect user details.");
    }
  };
  return (
    <section className="w-full h-full bg-gradient-to-t from-green-50 to-transparent">
      <div className="max-w-[410px] flex flex-col items-center justify-center mx-auto p-2">
        <img
          src={logo}
          alt="Our Logo"
          width="100rem"
          height="100rem"
          className="rounded-full"
        />

        <p className="tracking-widest font-semibold text-lg mt-2">
          Welcome, Login
        </p>

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
          <div className="flex flex-col w-full">
            <label htmlFor="password" className="tracking-wider font-medium">
              Password
            </label>
            <div className="flex items-center justify-between text-slate-700 hover:border-slate-500 border-2 w-full rounded bg-white transition-all duration-300">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 border-none bg-white outline-none w-[90%]"
              />
              <p
                className="p-2 w-[10%] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </p>
            </div>
          </div>
          <button
            className="p-2 bg-green-500 hover:bg-green-600 text-white font-medium tracking-widest rounded w-full mt-2  transition-all duration-300"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-between w-full mt-3">
          <Link
            to="/forgot-password"
            className="underline underline-offset-1 text-slate-700 hover:text-slate-800 text-sm"
          >
            Forgot Password?
          </Link>
          <div className="flex items-center text-sm gap-2">
            <p className="text-slate-700 ">Don't have an account?</p>
            <Link
              to="/register"
              className="text-blue-500 underline underline-offset-1 hover:text-blue-600"
            >
              Register
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between gap-1 mt-3 w-full">
          <p className="border-slate-500 border w-full"></p>
          <p>OR</p>
          <p className="border-slate-500 border w-full"></p>
        </div>

        {/* Other Methods */}
        <div className="flex flex-col w-full gap-1 transition-all duration-300">
          <p className="p-2 bg-white border-2 border-slate-400 hover:bg-slate-400 font-medium tracking-widest rounded w-full mt-2 flex items-center justify-center cursor-pointer gap-4 group transition-all duration-300">
            <FcGoogle className="w-6 h-6" />

            <span className=" text-slate-700 group-hover:text-white">
              Google
            </span>
          </p>
          <p className="p-2 bg-blue-500 border-2 border-blue-500 hover:border-blue-600 hover:bg-blue-600 font-medium text-white tracking-widest rounded w-full mt-2 flex items-center justify-center cursor-pointer gap-4 transition-all duration-300">
            <FaFacebook className="w-6 h-6" />

            <span className=" text-white">Facebook</span>
          </p>
          <p className="p-2 bg-neutral-900 border-2 border-neutral-900 hover:bg-neutral-950 hover:border-neutral-950text-white font-medium tracking-widest rounded w-full mt-2 flex items-center justify-center cursor-pointer text-white gap-4 transition-all duration-300">
            <FaXTwitter className="w-6 h-6" />

            <span className=" text-white">Twitter ( X )</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
