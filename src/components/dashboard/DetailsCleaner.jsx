import React, { useContext } from "react";
import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaStar,
  FaStore,
  FaWhatsapp,
} from "react-icons/fa6";
import { BgContext } from "../../App";
import CleanerContactBtns from "../CleanerContactBtns";

const DetailsCleaner = () => {
  const { darkMode } = useContext(BgContext);
  return (
    <div
      className={`flex flex-col h-full gap-2 text-slate-600 ${
        darkMode ? "dark-mode !text-slate-100" : ""
      }`}
    >
      {" "}
      <p className={`text-green-500 font-medium flex items-center gap-1`}>
        Ugo Best Ventures -
        <span className="text-sm flex items-center gap-1">
          5/5 <FaStar className="text-yellow-300 w-4 h-4" />
        </span>
      </p>
      <p className={`flex items-center gap-2`}>
        {" "}
        <span className="flex items-center gap-2">
          <FaLocationDot />
          Location :
        </span>
        <span
          className={`text-blue-600 font-medium ${
            darkMode && "!text-blue-700"
          }`}
        >
          Enugu
        </span>
      </p>
      <p className="text-sm">
        No 12 Sazodo Plaza off Nowas Junction, Trans-Ekulu Enugu State
      </p>
      {/* <p className={` flex items-center gap-2 text-sm`}>
        {" "}
        Rating -{" "}
        <span className="text-sm flex items-center gap-1">
          4.5/5 <FaStar className="text-yellow-300 w-4 h-4" />
        </span>
      </p> */}
      {/* <div className="flex flex-col gap-1"> */}
      <div className="border-t !text-sm">
        {/* <h2 className="font-medium text-sm">Contact Now:</h2> */}
        {/* <a
          href="https://www.whatsapp.com"
          target="_blank"
          className="flex items-center gap-3 text-sm px-2 py-1 border rounded w-full cursor-pointer active:scale-95"
        >
          <FaWhatsapp className="w-6 h-6" />
          <span>WhatsApp</span>
        </a>
        <a
          href="tel:+2347040876440"
          className="flex items-center gap-3 text-sm px-2 py-1 border rounded w-full cursor-pointer active:scale-95"
        >
          <FaPhone className="w-6 h-6" />
          <span>Phone</span>
        </a>
        <a
          href="mailto:vintio234@gmail.com"
          className="flex items-center gap-3 text-sm px-2 py-1 border rounded w-full cursor-pointer active:scale-95"
        >
          <FaEnvelope className="w-6 h-6" />
          <span>Email</span>
        </a> */}
        <CleanerContactBtns />
      </div>
      {/* </div> */}
    </div>
  );
};

export default DetailsCleaner;
