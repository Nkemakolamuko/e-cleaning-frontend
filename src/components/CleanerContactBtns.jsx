import React, { useContext } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { BgContext } from "../App";

const CleanerContactBtns = () => {
  const { darkMode } = useContext(BgContext);
  return (
    <div className="">
      <h1 className="w-full text-center tracking-widest font-medium mt-2 mb-1">
        Contact Cleaner Using
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
  );
};

export default CleanerContactBtns;
