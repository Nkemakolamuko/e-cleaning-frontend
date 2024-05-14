import React, { useEffect, useState, useRef, useContext } from "react";
import lottie from "lottie-web";
import loginAnimation from "../../animations/loginAnimation.json";
import loginLogo from "../../animations/loginLogo.json";
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
import { ToastContainer, toast } from "react-toastify";
import axios from "../../api/axios";
import AuthContext from "../../context-API/AuthProvider.jsx";
import { BgContext } from "../../App.jsx";

const Login = () => {
  const { setAuth } = useContext(AuthContext); // the nigga used 'authContext' - why small 'a'
  const { setGlobalUser } = useContext(BgContext);
  const container = useRef(null);
  const loginLogoContainer = useRef(null);
  const userRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState([]);
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

  useEffect(() => {
    // const userDetails = JSON.parse(localStorage.getItem("user"));
    // console.log(userDetails);
    // setUserDetail([...userDetail, userDetails]);
    // userDetails.map((user) => setUserDetail(user));

    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    setLoading(true);
    try {
      const response = await axios.post(
        "/api/users/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        }
      );
      // console.log(response.data);
      setGlobalUser(response?.data);
      const accessToken = response?.data?.accessToken;
      setAuth({ user, accessToken });
      // console.log(accessToken);
      if (response.data.email === "ultimateadminidan@gmail.com") {
        toast.success("Admin login successful");
        setTimeout(() => {
          navigate("/admin-dashboard2521");
        }, 2000);
      } else {
        toast.success("User login successful.");
        setTimeout(() => {
          navigate("/dashboard/settings");
        }, 2000);
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.message, { position: "bottom-left" });
      console.log(error.message);
      setLoading(false);
    }
    // const userDetails = JSON.parse(localStorage.getItem("user"));
    // // setUserDetail([...userDetail, userDetails]);
    // userDetails.map((user) => setUserDetail(user));

    // if (
    //   user.email.trim() === "ultimateadminidan@gmail.com" &&
    //   user.password.trim() === "@OmolaDe2521"
    // ) {
    //   toast.success("Admin login successful");
    //   setTimeout(() => {
    //     window.location.href = "/admin-dashboard2521";
    //   }, 1000);
    // } else if (
    //   user.email.trim() === userDetail.email &&
    //   user.password.trim() === userDetail.password
    // ) {
    //   toast.success("User login successful.");
    //   setTimeout(() => {
    //     window.location.href = "/dashboard/settings";
    //   }, 1000);
    // } else {
    //   toast.error("Incorrect login details", { position: "bottom-left" });
    // }
  };
  return (
    <section className="w-full h-screen bg-white md:flex md:flex-row md:items-center">
      <ToastContainer />
      <div className="w-[50%] h-screen hidden md:flex overflow-hidden">
        {/* <img src={logo} alt="Login Image" className="h-full" /> */}
        <div ref={container} />
      </div>

      {/* max-w-[410px] */}
      <div className="md:max-w-[50%] h-full flex flex-col items-center justify-center md:justify-center container mx-auto lg:px-20 md:py-8 md:px-6 p-2 overflow-auto scroll">
        <div className="w-[20%] h-[20%]">
          {/* <img
            src={logo}
            alt="Our Logo"
            // width="100rem"
            // height="100rem"
            className="rounded-full w-full h-full"
          /> */}
          <div ref={loginLogoContainer} />
        </div>

        <p className="tracking-widest font-semibold text-lg mt-2">
          Welcome back, Login
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
              ref={userRef}
              placeholder="user@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            className={`p-3 md:p-4 bg-green-500 hover:bg-green-600 text-white font-medium tracking-widest rounded w-full mt-2  transition-all duration-300 ${
              loading
                ? "cursor-not-allowed bg-green-500/50 hover:bg-green-600/50 text-white/50"
                : "cursor-pointer"
            }`}
            disabled={loading ? true : false}
            onClick={handleSubmit}
          >
            {loading ? "Please wait..." : "Login"}
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
          <p className="p-2 md:py-3 bg-blue-500 border-2 border-blue-500 hover:border-blue-600 hover:bg-blue-600 font-medium text-white tracking-widest rounded w-full mt-2 flex items-center justify-center cursor-pointer gap-4 transition-all duration-300">
            <FaFacebook className="w-6 h-6" />

            <span className=" text-white">Facebook</span>
          </p>
          <p className="p-2 md:py-3 bg-neutral-900 border-2 border-neutral-900 hover:bg-neutral-950 hover:border-neutral-950text-white font-medium tracking-widest rounded w-full mt-2 flex items-center justify-center cursor-pointer text-white gap-4 transition-all duration-300">
            <FaXTwitter className="w-6 h-6" />

            <span className=" text-white">Twitter ( X )</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
