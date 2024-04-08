import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Home = () => {
  return (
    <div className="mt-5 w-full flex flex-col h-screen">
      <h2 className="text-center tracking-widest font-semibold text-2xl">
        Welcome to 24/7 E-Laundry Service
      </h2>
      <div className="flex flex-col w-[400px] justify-center items-center mx-auto h-full my-auto">
        {/* <Link to="/dashboard">
          <p className="text-blue-500 underline underline-offset-1 hover:text-blue-700">
            dashboard
          </p>
        </Link> */}
        <Link to="/login" className="w-full text-center">
          <p className="hover:text-white p-2  bg-blue-500 border-2 border-blue-500 hover:border-blue-600 hover:bg-blue-600 font-medium text-white tracking-widest rounded w-full mt-2  cursor-pointer transition-all duration-300">
            Login
          </p>
        </Link>
        <Link to="/register" className="w-full text-center">
          <p className="hover:text-white p-2  bg-green-500 border-2 border-green-500 hover:border-green-600 hover:bg-green-600 font-medium text-white tracking-widest rounded w-full mt-2 cursor-pointer transition-all duration-300">
            Register
          </p>
        </Link>
        <img
          src={logo}
          alt="Our Logo"
          width="100rem"
          height="100rem"
          className="rounded-full mt-12"
        />
      </div>
    </div>
  );
};

export default Home;
