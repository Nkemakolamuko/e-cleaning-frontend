import React from "react";
import { Link } from "react-router-dom";

const ActionButtons = ({ text, logo, bg, bgHover, handleClick, to }) => {
  return (
    <a href={to} target="_blank">
      <li
        className={`${bg} text-white p-3 rounded ${bgHover}  w-full flex items-center cursor-pointer gap-2 truncate transition-all duration-300`}
        onClick={handleClick}
      >
        <span>{logo}</span>
        <span>{text}</span>
      </li>
    </a>
  );
};

export default ActionButtons;
