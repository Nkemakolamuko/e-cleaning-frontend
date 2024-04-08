import React, { useContext, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { BgContext } from "../../../App";

const April23 = ({ handleNextMonthR, handleNextMonthL }) => {
  const { darkMode } = useContext(BgContext);
  const [date] = useState(new Date());
  return (
    <div
      className={`${
        darkMode ? "dark-mode" : ""
      } border-2 w-fit mt-3 rounded-md`}
    >
      <div className="w-full flex items-center justify-between bg-white border-b">
        <p
          className="bg-slate-200 py-4 px-6 cursor-pointer hover:bg-slate-300 rounded-tl-md active:scale-90 transition-all duration-300"
          onClick={handleNextMonthL}
        >
          <FaArrowLeft />
        </p>

        <h2 className="tracking-widest font-medium text-xl p-2">APRIL</h2>
        <p
          className="bg-slate-200 py-4 px-6 cursor-pointer hover:bg-slate-300 rounded-tr-md active:scale-90 transition-all duration-300"
          onClick={handleNextMonthR}
        >
          <FaArrowRight />
        </p>
      </div>

      <table
        className={`table-auto w-full shadow-md rounded bg-white border-separate border-spacing-y-1`}
      >
        <thead className="text-left tracking-wider text-gray-700">
          <tr>
            <th className="p-4">Day</th>
            <th className="p-4">Dry Cleaner</th>
            <th className="p-4">Location</th>
            <th className="p-4">Cost</th>
          </tr>
        </thead>
        <tbody>
          {/* There'd be an infinite scroll in the history */}
          <tr className="bg-card rounded text-gray-800 bg-slate-100">
            <td className="p-4">{date.toDateString()}</td>
            <td className="p-4">Ugo Best</td>
            <td className="p-4">Owerri</td>
            <td className="p-4">N 6,700</td>
          </tr>
          <tr className="bg-card rounded text-gray-800 bg-slate-100">
            <td className="p-4">{date.toDateString()}</td>
            <td className="p-4">Ugo Best</td>
            <td className="p-4">Owerri</td>
            <td className="p-4">N 6,700</td>
          </tr>
          <tr className="bg-card rounded text-gray-800 bg-slate-100">
            <td className="p-4">{date.toDateString()}</td>
            <td className="p-4">Ugo Best</td>
            <td className="p-4">Owerri</td>
            <td className="p-4">N 6,700</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default April23;
