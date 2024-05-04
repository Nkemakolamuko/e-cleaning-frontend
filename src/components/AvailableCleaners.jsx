import React, { useContext } from "react";
import { BgContext } from "../App";
// import logo from "../assets/logo.jpg";
import logo from "../assets/ugo-best.jpg";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";

const AvailableCleaners = ({ name, desc, handleNext, handlePrev }) => {
  const { darkMode } = useContext(BgContext);
  return (
    <div className={`${darkMode && "dark-mode"} h-[450px]`}>
      <div
        className={`px-2 pt-2 pb-3 rounded h-full flex flex-col md:shadow-lg shadow-lg hover:shadow-lg w-[250px] md:w-[300px] items-center bg-white border border-green-100 to-white transition-all duration-300 ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        <div className="h-[200px] w-full">
          <img
            src={logo}
            alt="Cleaner Image"
            // height={"80rem"}
            // width={"80rem"}
            className="rounded-t mx-auto w-full h-[200px]"
          />
        </div>
        <div className="flex flex-col justify-between h-[50%] w-full text-slate-800 gap-2 mt-2">
          <p
            className={`text-center text-base md:text-lg font-medium !tracking-widest text-green-700 ${
              darkMode ? "!text-green-500" : ""
            }`}
          >
            {name || "Full Name"}
          </p>

          <p
            className={`text-xs lg:text-sm text-slate-700 text-center ${
              darkMode ? "!text-slate-200" : ""
            }`}
          >
            {desc ||
              "Details About them Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, consequuntur!"}
          </p>

          {/* <a
            href="tel:+2347040876440"
            target="_blank"
            className="md:w-[70%] mx-auto w-full"
          >
            <button className="p-3 md:p-3 !bg-cyan-500 text-white hover:bg-cyan-600 font-medium tracking-widest rounded text-xs md:text-sm active:scale-90 md:w-full w-full transition-all duration-300">
              Contact Now!
            </button>
          </a> */}
          <h1 className="w-full text-center tracking-widest font-medium mt-2">
            Contact Cleaner Using :
          </h1>
          <div className="flex flex-wrap md:w-[70%] mx-auto w-full gap-2 items-center justify-center z-10">
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              className={`rounded-full shadow-lg cursor-pointer border border-green-400 bg-green-400 p-2 text-white active:scale-95`}
            >
              <FaWhatsapp className="w-7 h-7" />
            </a>
            <a
              href="tel:+2347040876440" // I'd use user number
              className={`rounded-full shadow-lg cursor-pointer bg-white border p-2 text-slate-800 active:scale-95 ${
                darkMode ? "dark-mode !text-slate-100" : ""
              }`}
            >
              <FaPhone className="w-7 h-7" />
            </a>
            <a
              href="mailto:vintio234@gmail.com" // I'd use the user email
              className={`rounded-full shadow-lg cursor-pointer bg-white border p-2 text-slate-800 active:scale-95 ${
                darkMode ? "dark-mode !text-slate-100" : ""
              }`}
            >
              <FaEnvelope className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /*As the user is scrolling left or right, I'd use infinite scroll to get the Cleaners*/
}
export default AvailableCleaners;
