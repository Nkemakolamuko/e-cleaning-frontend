import React, { useContext, useState } from "react";
// import logo from "../../assets/logo.jpg";
// import logo from "../../assets/ugo-best.jpg";
import logo from "../../assets/shop-button.png";
import {
  FaAngleRight,
  FaBook,
  FaBookBookmark,
  FaBookmark,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaPlus,
  FaRegBookmark,
  FaWhatsapp,
} from "react-icons/fa6";
import { BgContext } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LocateActions from "./LocateActions";

const CleanersCard = ({
  fav,
  handleFav,
  name,
  addedToFavorite,
  address,
  location,
}) => {
  const { darkMode } = useContext(BgContext);
  const [direction, setDirection] = useState(false);
  return (
    <div
      className={`pt-2 pb-3 rounded h-fit flex flex-col md:gap-2 md:shadow-lg shadow-lg hover:shadow-lg w-full items-center bg-white border border-green-100 to-white relative transition-all duration-300 ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      {/* <ToastContainer /> */}
      <p
        className={`absolute left-4 bg-black/70 backdrop-blur top-5 rounded-md p-2 shadow-lg active:scale-95 text-slate-200 flex items-center gap-2 group cursor-pointer border transition-all duration-300 ${
          darkMode && "!border-slate-200"
        }`}
        onClick={() => setDirection(!direction)}
      >
        {/* Click and it will show you google map address and direction of the shop */}
        <span className="flex items-center gap-2 transition-all duration-300">
          <FaLocationDot className="w-4 h-4" />
          <span className="text-xs group-hover:flex group-active:flex hidden transition-all duration-300 text-slate-100">
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
      <div className="h-[150px] w-[80%] border rounded">
        <img
          src={logo}
          alt="Cleaner Image"
          // height={"80rem"}
          // width={"80rem"}
          className="rounded mx-auto w-full h-full"
        />
      </div>
      <div className="flex flex-col w-full text-slate-800 gap-2 mt-2">
        <div className="flex gap-1 flex-col">
          <p
            className={`text-center text-base md:text-lg font-medium !tracking-widest text-green-700 ${
              darkMode ? "!text-green-500" : ""
            }`}
          >
            {name || "Name"}
          </p>

          <div
            className={`p-2 border-y flex items-center text-blue-700 gap-1 justify-center font-medium ${
              darkMode && "!text-blue-500"
            }`}
          >
            <FaLocationDot /> {location || "Location"}
          </div>

          <div>
            {addedToFavorite ? (
              <p className="px-2 py-1 text-sm border-b border-b-green-400 text-green-500 text-center w-fit mx-auto">
                Added to favorite
              </p>
            ) : (
              <p
                onClick={handleFav}
                className={`flex items-center text-sm gap-2 bg-green-500 text-white text-center border rounded px-2 py-1 active:scale-95 w-fit mx-auto shadow-md cursor-pointer transition-all duration-300 ${
                  darkMode
                    ? "dark-mode !bg-green-500 !text-white shadow-md shadow-white/20"
                    : ""
                }`}
              >
                <FaPlus /> Add to favorite
              </p>
            )}
          </div>
        </div>

        <p
          className={`text-xs lg:text-sm text-slate-700 text-center p-2 ${
            darkMode ? "!text-slate-200" : ""
          }`}
        >
          {address ||
            "Located at Shop 12 Sazodo Plaza, by NOWAS junction, Trans-Ekulu Enugu."}
        </p>

        <h1 className="w-full text-center tracking-widest font-medium text-sm mt-2">
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

export default CleanersCard;
