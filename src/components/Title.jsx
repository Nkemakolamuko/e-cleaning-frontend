import React, { useContext } from "react";
import { BgContext } from "../App";

const Title = ({ title }) => {
  const { darkMode } = useContext(BgContext);
  return (
    <div
      className={`pb-4 pt-2 font-semibold tracking-widest text-gray-950 ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      {title}
    </div>
  );
};

export default Title;
