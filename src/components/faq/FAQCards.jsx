import React, { useContext, useState } from "react";
import { FaAngleDown, FaAngleUp, FaArrowDown } from "react-icons/fa6";
import { BgContext } from "../../App";

const FAQCards = () => {
  const { darkMode } = useContext(BgContext);
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <div
      className={`flex flex-col bg-white rounded border-2 transition-all duration-300 ${
        darkMode ? "dark-mode border-2" : ""
      }`}
    >
      <div
        className={`flex items-center justify-between px-2 py-4 ${
          showQuestion && "bg-slate-50"
        } group hover:bg-slate-50 text-base cursor-pointer transition-all duration-300 ${
          darkMode
            ? `dark-mode hover:bg-slate-400 group-hover:!text-slate-200`
            : ""
        } ${darkMode && showQuestion ? "!bg-slate-400" : ""}`}
        onClick={() => setShowQuestion(!showQuestion)}
      >
        <p
          className={`!tracking-widest font-medium text-slate-800 ${
            darkMode ? "!text-slate-200" : ""
          }`}
        >
          Question
        </p>
        <p
          className={`rounded-full p-2 text-slate-600 transition-all duration-300 ${
            darkMode ? "!text-slate-200" : ""
          }`}
        >
          {showQuestion ? <FaAngleUp /> : <FaAngleDown />}
        </p>
      </div>
      {showQuestion && (
        <p
          className={`text-sm text-slate-600 p-2 ${
            darkMode ? "!text-slate-200" : ""
          }`}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
          corrupti sunt. Iusto, labore? Suscipit animi incidunt corporis omnis,
          nesciunt assumenda. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repellendus, veniam.
        </p>
      )}
    </div>
  );
};

export default FAQCards;
