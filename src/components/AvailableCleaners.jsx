import React, { useContext } from "react";
import { BgContext } from "../App";
import logo from "../assets/logo.jpg";

const AvailableCleaners = ({ name, desc, handleNext, handlePrev }) => {
  const { darkMode } = useContext(BgContext);
  return (
    <div className={`${darkMode && "dark-mode"} h-[300px]`}>
      <div
        className={`px-2 pt-2 pb-3 rounded h-full flex flex-col md:shadow-lg shadow-lg hover:shadow-lg w-[250px] md:w-[300px] items-center bg-white border border-green-100 to-white transition-all duration-300 ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        <div className="h-[50%] flex justify-center">
          <img
            src={logo}
            alt="Cleaner Image"
            height={"80rem"}
            width={"80rem"}
            className="rounded-full mx-auto my-auto"
          />
        </div>
        <div className="flex flex-col justify-between h-[50%] w-full text-slate-800 gap-2 mt-2">
          <p
            className={`text-center text-base md:text-lg font-medium !tracking-widest text-green-700 ${
              darkMode ? "!text-green-500" : ""
            }`}
          >
            {name || "Name"}
          </p>

          <p
            className={`text-xs lg:text-sm text-slate-700 text-center ${
              darkMode ? "!text-slate-200" : ""
            }`}
          >
            {desc ||
              "Details About them Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, consequuntur!"}
          </p>

          <a
            href="tel:+2347040876440"
            target="_blank"
            className="md:w-[70%] mx-auto w-full"
          >
            <button className="p-3 md:p-3 !bg-cyan-500 text-white hover:bg-cyan-600 font-medium tracking-widest rounded text-xs md:text-sm active:scale-90 md:w-full w-full transition-all duration-300">
              Contact Now!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
{
  /*As the user is scrolling left or right, I'd use infinite scroll to get the Cleaners*/
}
export default AvailableCleaners;
