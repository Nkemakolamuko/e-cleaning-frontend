import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BgContext } from "../../App";

const ActionButtons = ({ text, logo, bg, bgHover, handleClick, to }) => {
  const { darkMode } = useContext(BgContext);
  return (
    <a
      href={to}
      target="_blank"
      className={`border rounded ${darkMode ? "dark-mode" : ""}`}
    >
      <li
        className={`${bg} p-3 rounded ${bgHover}  w-full flex items-center cursor-pointer gap-2 truncate transition-all duration-300`}
        onClick={handleClick}
      >
        <span>{logo}</span>
        <span>{text}</span>
      </li>
    </a>
  );
};

export default ActionButtons;
