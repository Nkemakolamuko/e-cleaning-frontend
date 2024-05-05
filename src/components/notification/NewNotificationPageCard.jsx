import React, { useContext, useState } from "react";
import { BgContext } from "../../App";
import { FaBell, FaTrashCan } from "react-icons/fa6";

const NewNotificationPageCard = ({
  date,
  title,
  desc,
  time,
  handleClick,
  handleDelete,
}) => {
  const { darkMode } = useContext(BgContext);
  return (
    <div className="flex flex-col">
      <p className="text-base mb-2 px-1 font-semibold">{date}</p>
      <div
        className={`md:max:-w-[90%] w-full shadow-md rounded flex-flex-col h-fit gap-3 border-2 bg-white border-t-slate-100 px-2 active:bg-black/10 cursor-pointer transition-all duration-300 ${
          darkMode
            ? "dark-mode border-2 active:bg-white/20 transition-all duration-300"
            : ""
        }`}
        onClick={handleClick}
      >
        <p
          className={`tracking-wider font-medium text-slate-700 px-2 py-2 ${
            darkMode ? "!text-slate-200" : ""
          }`}
        >
          {title}
        </p>

        <div className="flex w-full pb-2 items-center truncate transition-all duration-300">
          <div className="p-2 bg-cyan-50 text-cyan-500 rounded-full">
            <FaBell className="w-6 h-6" />
          </div>
          <div
            className={`text-sm p-2 text-slate-700 ${
              darkMode ? "!text-slate-200" : ""
            }`}
          >
            {desc}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p
              className={`text-xs text-slate-600 px-2 ${
                darkMode ? "!text-slate-200" : ""
              }`}
            >
              Click to read more
            </p>
            <p
              className={`text-slate-600 text-[11px] px-2 py-3 ${
                darkMode ? "!text-slate-200" : ""
              }`}
            >
              {time}
            </p>
          </div>
          <FaTrashCan
            className="z-10 text-slate-600 hover:text-rose-500 active:scale-95 transition-all duration-300"
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NewNotificationPageCard;
