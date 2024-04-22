import React, { useContext, useState } from "react";
import { FaAngleDown, FaAngleUp, FaArrowDown } from "react-icons/fa6";
import { BgContext } from "../../App";

const FAQCards = () => {
  const { darkMode } = useContext(BgContext);
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <div
      className={`flex flex-col !bg-white rounded shadow-md transition-all duration-300 ${
        darkMode ? "shadow-md shadow-white" : ""
      }`}
    >
      <div
        className="flex items-center justify-between pb-2 !bg-slate-50 px-2 pt-2 group hover:bg-slate-100 cursor-pointer transition-all duration-300 rounded-b"
        onClick={() => setShowQuestion(!showQuestion)}
      >
        <p className="!tracking-widest font-medium text-slate-800">Question</p>
        <p className="rounded-full border p-2 text-slate-600 group-hover:text-slate-700 group-hover:!bg-slate-200 transition-all duration-300">
          {showQuestion ? <FaAngleUp /> : <FaAngleDown />}
        </p>
      </div>
      {showQuestion && (
        <p className="text-sm text-slate-600 p-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,
          voluptatibus.
        </p>
      )}
    </div>
  );
};

export default FAQCards;
