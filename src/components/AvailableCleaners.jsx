import React, { useContext, useState } from "react";
import { BgContext } from "../App";
// import logo from "../assets/logo.jpg";
import logo from "../assets/shop-button.png";
import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import LocateActions from "./cleanersNearby/LocateActions";

const AvailableCleaners = ({ name, desc, location }) => {
  const { darkMode } = useContext(BgContext);
  const [direction, setDirection] = useState(false);
  return (
    <div className={`${darkMode && "dark-mode"} h-[390px]`}>
      <div
        className={`relative pt-2 rounded h-full flex justify-between flex-col md:shadow-lg shadow-lg hover:shadow-lg w-[300px] md:w-[330px] items-center bg-white border border-green-100 to-white transition-all duration-300 ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        <p
          className={`absolute left-4 bg-black/70 top-5 rounded-md p-2 shadow-lg active:scale-95 text-slate-200 flex items-center border gap-2 group cursor-pointer transition-all duration-300 ${
            darkMode && "!border-slate-200"
          }`}
          onClick={() => setDirection(!direction)}
        >
          {/* Click and it will show you google map address and direction of the shop */}
          <span
            className={`flex items-center gap-2 transition-all duration-300`}
          >
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
        <div className="h-[150px] w-[80%]">
          <img
            src={logo}
            alt="Cleaner Image"
            className="mx-auto w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between h-fit w-full text-slate-800 pb-2">
          <p
            className={`text-center text-base font-medium !tracking-widest text-green-700 ${
              darkMode ? "!text-green-500" : ""
            }`}
          >
            {name || "Full Name"}
          </p>
          <p
            className={`text-center w-full justify-center border-y py-2 text-sm flex items-center gap-2 font-medium !tracking-widest text-blue-700 ${
              darkMode ? "!text-blue-500" : ""
            }`}
          >
            <FaLocationDot className="w-5 h-5" /> {location || "Location"}
          </p>

          <p
            className={`text-xs text-slate-700 text-center ${
              darkMode ? "!text-slate-200" : ""
            }`}
          >
            {desc ||
              "We prioritize our customers satisfaction more than anything else, try us out today, and you'd have an experience of a lifetime"}
          </p>

          <h1 className="w-full text-center text-sm tracking-widest font-medium mt-2">
            Contact Cleaner Using :
          </h1>
          <div className="flex flex-wrap md:w-[70%] mx-auto w-full gap-2 items-center justify-center z-10">
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              className={`rounded-full shadow-lg cursor-pointer tooltip border border-green-400 bg-green-400 p-2 text-white active:scale-95`}
            >
              <FaWhatsapp className="w-7 h-7" />
              <span className="text-xs tooltiptext rounded">WhatsApp</span>
            </a>

            <a
              href="tel:+2347040876440" // I'd use user number
              className={`rounded-full shadow-lg cursor-pointer bg-blue-400 tooltip border p-2 text-slate-100 active:scale-95 ${
                darkMode ? "dark-mode !text-slate-100" : ""
              }`}
            >
              <FaPhone className="w-7 h-7" />
              <span className="text-xs tooltiptext rounded">Phone Call</span>
            </a>

            <a
              href="mailto:vintio234@gmail.com" // I'd use the user email
              className={`rounded-full shadow-lg cursor-pointer bg-white tooltip border p-2 text-slate-700 active:scale-95 ${
                darkMode ? "dark-mode !text-slate-100" : ""
              }`}
            >
              <FaEnvelope className="w-7 h-7" />
              <span className="text-xs tooltiptext rounded">Email</span>
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
