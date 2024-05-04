import React, { useContext } from "react";
import { BgContext } from "../../App";

const SettingsCard = ({ handleClick, title, desc, icon }) => {
  const { darkMode } = useContext(BgContext);
  return (
    <div
      className={`p-3 group bg-white hover:bg-slate-200 active:bg-slate-200 shadow hover:shadow-lg cursor-pointer flex justify-between items-center transition-all duration-300 ${
        darkMode
          ? "dark-mode border-2 hover:bg-white active:bg-white active:text-black hover:text-black rounded"
          : ""
      }`}
      onClick={handleClick}
    >
      <p className="flex flex-col">
        <span className="font-medium">{title}</span>
        <span className="text-xs">{desc}</span>
      </p>
      <p>{icon}</p>
    </div>
  );
};

export default SettingsCard;