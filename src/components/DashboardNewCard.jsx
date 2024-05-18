import React, { useContext } from "react";
import userImage from "../assets/download.jpg";
import { BgContext } from "../App";

const DashboardNewCard = ({ details, image, info, addHeight }) => {
  const { darkMode } = useContext(BgContext);
  return (
    <div
      className={`w-full h-[300px] flex items-center border rounded overflow-hidden group ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      <div className="h-full w-1/2 flex justify-center items-center px-2 relative transition-all duration-300">
        <img src={image} alt="User Image" className={`w-full ${addHeight}`} />
        <p className="absolute hidden bottom-0 left-0 bg-black/70 backdrop-blur-md text-white w-full py-3 px-2 group-hover:flex text-center transition-all duration-300">
          {info}
        </p>
      </div>
      <div className="flex flex-col w-1/2 p-2">{details}</div>
    </div>
  );
};

export default DashboardNewCard;
