import React, { useContext, useState } from "react";
// import logo from "../../assets/logo.jpg";
import logo from "../../assets/ugo-best.jpg";
import {
  FaBook,
  FaBookBookmark,
  FaBookmark,
  FaEnvelope,
  FaLocationDot,
  FaMapLocationDot,
  FaPhone,
  FaRegBookmark,
  FaWhatsapp,
} from "react-icons/fa6";
import { BgContext } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LocateActions from "./LocateActions";

const FavoriteCleaners = ({ fav, handleFavRemove, name }) => {
  const { darkMode } = useContext(BgContext);
  const [direction, setDirection] = useState(false);
  return (
    <div
      className={`px-2 pt-2 pb-3 rounded h-fit flex flex-col md:shadow-lg shadow-lg hover:shadow-lg w-full items-center bg-white border border-green-100 to-white relative transition-all duration-300 ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      {/* <ToastContainer /> */}
      <p
        className="absolute left-4 bg-black/70 top-5 rounded-md p-2 shadow-lg active:scale-95 text-slate-200 flex items-center gap-2 group cursor-pointer transition-all duration-300"
        onClick={() =>
          // toast.success(
          //   "Working on it - call instead if description ain't good enough!"
          // )
          setDirection(!direction)
        }
      >
        {/* Click and it will show you google map address and direction of the shop */}
        <span className="flex items-center gap-2 transition-all duration-300">
          <FaLocationDot className="w-4 h-4" />
          <span className="text-xs group-hover:flex hidden transition-all duration-300 text-slate-100">
            Find Location
          </span>
        </span>
      </p>
      {direction && (
        <LocateActions
          setDirection={() => setDirection(false)}
          handleClose={() => setDirection(false)}
        />
      )}

      <div className="h-[230px] w-full">
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
            <p className="border-b px-2 py-1 border-b-green-500 text-green-500 text-sm text-center w-fit mx-auto">
              Favorite
            </p>
            <p
              className="border rounded px-2 py-1 bg-rose-500 text-white text-sm text-center w-fit mx-auto cursor-pointer shadow-md active:scale-95"
              onClick={handleFavRemove}
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
          Located at Shop 12 Sazodo Plaza, by NOWAS junction, Trans-Ekulu Enugu.
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
        <div className="flex flex-wrap md:w-[70%] mx-auto w-full gap-2 items-center justify-center">
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
  );
};

export default FavoriteCleaners;
