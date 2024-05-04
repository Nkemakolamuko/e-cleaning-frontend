import React, { useContext } from "react";
import logo from "../../assets/logo.jpg";
import {
  FaBook,
  FaBookBookmark,
  FaBookmark,
  FaEnvelope,
  FaPhone,
  FaRegBookmark,
  FaWhatsapp,
} from "react-icons/fa6";
import { BgContext } from "../../App";

const FavoriteCleaners = ({ fav, handleFav, name }) => {
  const { darkMode } = useContext(BgContext);
  return (
    <div
      className={`px-2 pt-2 pb-3 rounded h-fit flex flex-col md:shadow-lg shadow-lg hover:shadow-lg w-full items-center bg-white border border-green-100 to-white relative transition-all duration-300 ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      {/* <p
        className="absolute right-2 top-0 flex flex-col items-center cursor-pointer transition-all duration-300"
        //   onClick={handleFav}
      >
        <span className="text-green-500">
          <FaBookmark className="w-6 h-6" />
        </span>
        <span className="text-xs text-green-500">favorite</span>
      </p> */}

      <div className="h-[200px] w-full">
        <img
          src={logo}
          alt="Cleaner Image"
          // height={"80rem"}
          // width={"80rem"}
          className="rounded mx-auto w-full h-full"
        />
      </div>
      <div className="flex flex-col w-full text-slate-800 gap-2 mt-2">
        <div className="flex flex-col">
          <p
            className={`text-center text-base md:text-lg font-medium !tracking-widest text-green-700 ${
              darkMode ? "!text-green-500" : ""
            }`}
          >
            {name || "Tony Best"}
          </p>
          <div className="flex items-center gap-2 w-1/2 mx-auto">
            <p className="border rounded px-2 py-1 bg-green-500 text-white text-sm text-center w-fit mx-auto">
              Favorite
            </p>
            <p
              className="border rounded px-2 py-1 bg-rose-500 text-white text-sm text-center w-fit mx-auto cursor-pointer"
              onClick={handleFav}
            >
              Remove
            </p>
          </div>
        </div>

        <p
          className={`text-xs lg:text-sm text-slate-700 text-center mt-2 ${
            darkMode ? "!text-slate-200" : ""
          }`}
        >
          Details About them Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Sint, consequuntur!
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
          Contact Cleaner
        </h1>
        <div className="flex flex-wrap md:w-[70%] mx-auto w-full gap-2 items-center justify-center">
          <p className="rounded-full shadow-lg cursor-pointer bg-green-400 p-2 text-white">
            <FaWhatsapp className="w-7 h-7" />
          </p>
          <p
            className={`rounded-full shadow-lg cursor-pointer bg-white border p-2 text-slate-800 ${
              darkMode ? "dark-mode !text-slate-100" : ""
            }`}
          >
            <FaPhone className="w-7 h-7" />
          </p>
          <p
            className={`rounded-full shadow-lg cursor-pointer bg-white border p-2 text-slate-800 ${
              darkMode ? "dark-mode !text-slate-100" : ""
            }`}
          >
            <FaEnvelope className="w-7 h-7" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCleaners;
