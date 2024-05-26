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
    if (!email || !password) {
      toast.error("Fields can't be empty", { position: "top-left" });
      return;
    }

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
        }
      );

      setGlobalUser(response?.data);
      const accessToken = response?.data?.accessToken;
      localStorage.setItem("accessToken", JSON.stringify(accessToken));
      const id = response?.data?.id;
      setAuth({ accessToken, id });

      const { email: responseEmail, password: responsePassword } =
        response.data;
      if (
        responseEmail === "ultimateadminidan@gmail.com" &&
        password === "@AdminUltimate2521"
      ) {
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
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message, { position: "top-left" });
      }
      setLoading(false);
    }
  };

  return (
    <section className="w-full h-screen bg-white md:flex md:flex-row md:items-center">
      <ToastContainer />
      <div className="w-[50%] h-screen hidden md:flex overflow-hidden">
        <div ref={container} />
      </div>

      <div className="md:max-w-[50%] h-full flex flex-col items-center justify-center md:justify-center container mx-auto lg:px-20 md:py-8 md:px-6 p-2 overflow-auto scroll">
        <div className="w-[20%] h-[20%]">
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
                className="p-2 w-[10%] cursor-pointer flex justify-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </p>
            </div>
          </div>
          <button
            className={`p-3 md:p-4 bg-green-500 hover:bg-green-600 text-white font-medium tracking-widest rounded w-full mt-2 active:scale-95 transition-all duration-300 ${
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
            to={`/forgot-password/${email}`}
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

        <div className="flex items-center justify-between gap-1 mt-3 w-full text-nowrap">
          <p className="border-slate-300 border w-full"></p>
          <p className="text-sm">Or Login Using</p>
          <p className="border-slate-300 border w-full"></p>
        </div>

        {/* Other Methods */}
        <div className="flex flex-col w-full gap-1 transition-all duration-300">
          <p
            className="p-2 md:py-3 bg-white text-slate-600 border font-medium tracking-widest rounded w-full mt-2 flex items-center cursor-pointer gap-4 group transition-all duration-300"
            onClick={() =>
              toast("Coming soon...", { position: "bottom-right" })
            }
          >
            <FcGoogle className="w-6 h-6" />

            <span className="">Google</span>
          </p>
          <p
            className="p-2 md:py-3 bg-white text-slate-600 border font-medium tracking-widest rounded w-full mt-2 flex items-center cursor-pointer gap-4 transition-all duration-300"
            onClick={() =>
              toast("Coming soon...", { position: "bottom-right" })
            }
          >
            <FaFacebook className="w-6 h-6 text-blue-500" />

            <span className="">Facebook</span>
          </p>
          <p
            className="p-2 md:py-3 bg-white text-slate-600 border font-medium tracking-widest rounded w-full mt-2 flex items-center cursor-pointer gap-4 transition-all duration-300"
            onClick={() =>
              toast("Coming soon...", { position: "bottom-right" })
            }
          >
            <FaXTwitter className="w-6 h-6 text-neutral-950" />

            <span className="">Twitter ( X )</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
