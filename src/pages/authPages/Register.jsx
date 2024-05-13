import React, { useEffect, useState, useRef } from "react";
import lottie from "lottie-web";
import loginAnimation from "../../animations/loginAnimation.json";
import loginLogo from "../../animations/registerLogo.json";
import logo from "../../assets/logo.jpg";
import axios from "axios";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaX,
  FaXTwitter,
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const container = useRef(null);
  const loginLogoContainer = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData: loginAnimation,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
    lottie.loadAnimation({
      container: loginLogoContainer.current,
      animationData: loginLogo,
      renderer: "svg", // You can choose 'svg', 'canvas', or 'html' based on your preference
      loop: true,
      autoplay: true,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      toast.error("All fields are required!", { position: "top-left" });
      return;
    }
    // if (name.split(" ")[1] === undefined) {
    //   alert("Needs at least 2 names");
    //   return;
    // }
    const user = [
      {
        name,
        email,
        password,
        address,
      },
    ];

    try {
      const response = await axios.post(
        "https://cleaning-backend.vercel.app/api/users/register",
        {
          name,
          email,
          password,
          address,
        },
        {
          method: "POST",
        }
      );
      console.log(response);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }

    localStorage.setItem("user", JSON.stringify(user));

    // user && toast.success("Registration successful");
    // setTimeout(() => {
    //   if (user) window.location.href = "/dashboard/settings";
    // }, 1000);
    // setName("");
    // setEmail("");
    // setPassword("");
  };
  return (
    <section className="w-full h-screen bg-white md:flex md:flex-row md:items-center">
      <ToastContainer />
      <div className="w-[50%] h-screen hidden md:flex overflow-hidden">
        {/* <img src={logo} alt="Login Image" className="h-full" /> */}
        <div ref={container} />
      </div>

      {/* max-w-[410px] */}
      <div className="md:max-w-[50%] h-full flex flex-col items-center justify-center md:justify-normal  container mx-auto lg:px-20 md:py-8 md:px-6 px-2 pb-2 pt-24 overflow-auto scroll">
        <div className="w-[20%] h-[20%]">
          <div ref={loginLogoContainer} />
        </div>

        <p className="tracking-widest font-semibold text-lg mt-2">
          Create An Account
        </p>

        <form
          action="/"
          method="post"
          className="flex flex-col items-center justify-center w-full gap-4 mt-3 transition-all duration-300"
          onSubmit={handleSubmit}
        >
          <p className="flex flex-col w-full">
            <label htmlFor="name" className="tracking-wider font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 md:py-3 text-slate-700 outline-slate-500  border-2 rounded transition-all duration-300 w-full"
            />
          </p>
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
              className="p-2 md:py-3 text-slate-700 outline-slate-500  border-2 rounded transition-all duration-300 w-full"
            />
          </p>
          <p className="flex flex-col w-full">
            <label htmlFor="address" className="tracking-wider font-medium">
              Address <span className="text-slate-400">(Optional)</span>
            </label>
            <input
              type="text"
              id="address"
              placeholder="Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="p-2 md:py-3 text-slate-700 outline-slate-500  border-2 rounded transition-all duration-300 w-full"
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
                className="p-2 md:py-3 border-none bg-white outline-none w-[90%]"
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
            className="p-2 md:p-4 bg-green-500 hover:bg-green-600 text-white font-medium tracking-widest rounded w-full mt-2  transition-all duration-300"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>

        <div className="flex items-center  w-full text-sm mt-3 gap-2">
          <p className="text-slate-700 ml-auto">Already have an account?</p>
          <Link
            to="/login"
            className="text-blue-500 underline underline-offset-1 hover:text-blue-600"
          >
            Login
          </Link>
        </div>

        <div className="flex items-center justify-between gap-1 mt-3 w-full">
          <p className="border-slate-300 border w-full"></p>
          <p>or</p>
          <p className="border-slate-300 border w-full"></p>
        </div>

        {/* Other Methods */}
        <div className="flex flex-col w-full gap-1 transition-all duration-300">
          <p className="p-2 md:py-3 bg-black text-white border-2 border-black font-medium tracking-widest rounded w-full mt-2 flex items-center justify-center cursor-pointer gap-4 group transition-all duration-300">
            <FcGoogle className="w-6 h-6" />

            <span className="">Google</span>
          </p>
          <p className="p-2 md:py-3 bg-blue-500 border-2 border-blue-500 hover:border-blue-600 hover:bg-blue-600 font-medium text-white tracking-widest rounded w-full mt-2 flex justify-center items-center cursor-pointer gap-4 transition-all duration-300">
            <FaFacebook className="w-6 h-6" />

            <span className=" text-white">Facebook</span>
          </p>
          <p className="p-2 md:py-3 bg-neutral-900 border-2 border-neutral-900 hover:bg-neutral-950 hover:border-neutral-950text-white font-medium tracking-widest rounded w-full mt-2 flex justify-center items-center cursor-pointer text-white gap-4 transition-all duration-300">
            <FaXTwitter className="w-6 h-6" />

            <span className=" text-white">Twitter ( X )</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
