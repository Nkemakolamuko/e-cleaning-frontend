import React, { useContext, useState } from "react";
import { BgContext } from "../App";
const DashboardHistory = () => {
  const { darkMode } = useContext(BgContext);
  const [date, setDate] = useState(new Date());
  return (
    <>
      <table
        className={`table-auto shadow-md mt-2 rounded bg-white border-separate border-spacing-y-1 text-nowrap text-xs md:text-sm overflow-auto ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        <thead className="text-left tracking-wider text-gray-700">
          <tr>
            <th className="p-4">Day</th>
            <th className="p-4">Dry Cleaner</th>
            <th className="p-4">Location</th>
            <th className="p-4">Cost</th>
            <th className="p-4">Review</th>
          </tr>
        </thead>
        <tbody>
          {/* There'd be an infinite scroll in the history maybe*/}
          <tr className="rounded text-gray-800 bg-slate-100">
            <td className="p-4">{date.toDateString()}</td>
            <td className="p-4">Ugo Best</td>
            <td className="p-4">Owerri</td>
            <td className="p-4">N 6,700</td>
            <td className="p-4">Good</td>
          </tr>
          <tr className="bg-card rounded text-gray-800 bg-slate-100">
            <td className="p-4">{date.toDateString()}</td>
            <td className="p-4">Ugo Best</td>
            <td className="p-4">Owerri</td>
            <td className="p-4">N 6,700</td>
            <td className="p-4">Good</td>
          </tr>
          <tr className="bg-card rounded text-gray-800 bg-slate-100">
            <td className="p-4">{date.toDateString()}</td>
            <td className="p-4">Ugo Best</td>
            <td className="p-4">Owerri</td>
            <td className="p-4">N 6,700</td>
            <td className="p-4">Good</td>
          </tr>
          <tr className="bg-card rounded text-gray-800 bg-slate-100">
            <td className="p-4">{date.toDateString()}</td>
            <td className="p-4">Ugo Best</td>
            <td className="p-4">Owerri</td>
            <td className="p-4">N 6,700</td>
            <td className="p-4">Good</td>
          </tr>
          <tr className="bg-card rounded text-gray-800 bg-slate-100">
            <td className="p-4">{date.toDateString()}</td>
            <td className="p-4">Ugo Best</td>
            <td className="p-4">Owerri</td>
            <td className="p-4">N 6,700</td>
            <td className="p-4">Good</td>
          </tr>
          <tr className="bg-card rounded text-gray-800 bg-slate-100">
            <td className="p-4">{date.toDateString()}</td>
            <td className="p-4">Ugo Best</td>
            <td className="p-4">Owerri</td>
            <td className="p-4">N 6,700</td>
            <td className="p-4">Good</td>
          </tr>
          <tr className="bg-card rounded text-gray-800 bg-slate-100">
            <td className="p-4">{date.toDateString()}</td>
            <td className="p-4">Ugo Best</td>
            <td className="p-4">Owerri</td>
            <td className="p-4">N 6,700</td>
            <td className="p-4">Good</td>
          </tr>
          <tr className="bg-card rounded text-gray-800 bg-slate-100">
            <td className="p-4">{date.toDateString()}</td>
            <td className="p-4">Ugo Best</td>
            <td className="p-4">Owerri</td>
            <td className="p-4">N 6,700</td>
            <td className="p-4">Good</td>
          </tr>
          <tr className="bg-card rounded text-gray-800 bg-slate-100">
            <td className="p-4">{date.toDateString()}</td>
            <td className="p-4">Ugo Best</td>
            <td className="p-4">Owerri</td>
            <td className="p-4">N 6,700</td>
            <td className="p-4">Good</td>
          </tr>
          <tr className="bg-card rounded text-gray-800 bg-slate-100">
            <td className="p-4">{date.toDateString()}</td>
            <td className="p-4">Ugo Best</td>
            <td className="p-4">Owerri</td>
            <td className="p-4">N 6,700</td>
            <td className="p-4">Good</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DashboardHistory;
