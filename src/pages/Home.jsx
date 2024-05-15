import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Home = () => {
  return (
    <div className="mt-5 w-full flex flex-col h-[80vh] md:h-[85vh] justify-center">
      <div className="flex flex-col w-[320px] md:w-[400px] justify-center items-center mx-auto h-full my-auto">
        <div className="p-2 rounded-full shadow w-fit mx-auto mb-4">
          <p className="text-8xl md:text-[130px] py-7 px-3 md:py-8">👋</p>
        </div>
        <h2 className="text-center tracking-widest font-semibold md:text-xl px-2">
          Welcome to 24/7 E-Laundry Service
        </h2>
        <p className="text-slate-600 text-sm">
          We appreciate your choice to use our service. Use links below to get
          started.
        </p>
        <Link
          to="/register"
          className="w-full text-center text-sm shadow-md hover:shadow-lg"
        >
          <p className="hover:text-white p-2  bg-green-500 border-2 border-green-500 hover:border-green-600 hover:bg-green-600 font-medium text-white tracking-widest rounded w-full mt-2 cursor-pointer transition-all duration-300">
            Register
          </p>
        </Link>
        <Link
          to="/login"
          className="w-full text-center text-sm shadow-md hover:shadow-lg"
        >
          <p className="p-2 border-2 border-blue-500 hover:border-blue-600 font-medium text-blue-700 tracking-widest rounded w-full mt-2 cursor-pointer transition-all duration-300">
            Login
          </p>
        </Link>
        {/* <img
          src={logo}
          alt="Our Logo"
          width="100rem"
          height="100rem"
          className="rounded-full mt-12"
        /> */}
      </div>
    </div>
  );
};

export default Home;
