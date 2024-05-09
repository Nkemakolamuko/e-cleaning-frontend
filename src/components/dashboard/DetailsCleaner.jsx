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

const DetailsCleaner = () => {
  const { darkMode } = useContext(BgContext);
  return (
    <div
      className={`flex flex-col h-full gap-2 text-slate-600 ${
        darkMode ? "dark-mode !text-slate-100" : ""
      }`}
    >
      {" "}
      <p className={`text-green-500 font-medium flex items-center gap-2`}>
        <FaStore />
        Ugo Best Ventures
      </p>
      <p className={``}>
        {" "}
        <span className="flex items-center gap-2">
          <FaLocationDot />
          Location :
        </span>
        <span className="text-sm px-2">
          No 12 Sazodo Plaza off Nowas Junction, Trans-Ekulu Enugu State
        </span>
      </p>
      <p className={` flex items-center gap-2 text-sm`}>
        {" "}
        <FaStar className="text-yellow-300" />
        Rating - <span className="text-sm">4.5/5</span>
      </p>
      <div className="flex flex-col gap-1">
        <h2 className="font-medium text-sm">Contact Now:</h2>
        <p className="flex items-center gap-4 text-sm px-2 py-1 border rounded w-full cursor-pointer">
          <FaWhatsapp className="w-6 h-6" />
          <span>WhatsApp</span>
        </p>
        <p className="flex items-center gap-4 text-sm px-2 py-1 border rounded w-full cursor-pointer">
          <FaPhone className="w-6 h-6" />
          <span>Phone</span>
        </p>
        <p className="flex items-center gap-4 text-sm px-2 py-1 border rounded w-full cursor-pointer">
          <FaEnvelope className="w-6 h-6" />
          <span>Email</span>
        </p>
      </div>
    </div>
  );
};

export default DetailsCleaner;
