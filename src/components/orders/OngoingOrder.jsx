import React, { useContext } from "react";
import { BgContext } from "../../App";

const OngoingOrder = () => {
  const { darkMode } = useContext(BgContext);

  return (
    <div
      className={`h-fit w-full rounded shadow-lg ${
        darkMode ? "dark-mode order-card rounded" : ""
      }`}
    >
      <div
        className={`flex flex-col bg-slate-50 ${
          darkMode ? "dark-mode rounded" : ""
        }`}
      >
        <p className="flex items-center gap-2 w-full border-b px-4 py-4 bg-cyan-50 order rounded-t">
          <span className="font-semibold !tracking-widest w-[40%] ">S/N :</span>{" "}
          <span className="w-[60%] mx-auto align-middle text-center">1</span>
        </p>
        <p className="flex items-start gap-2 w-full border-b px-4 py-4">
          <span className="font-semibold !tracking-widest w-[40%]  h-full align-top">
            Items :
          </span>{" "}
          <ul className="w-[60%] mx-auto align-middle text-center px-2">
            <li className="pb-2 flex items-center justify-between">
              <span>Jeans</span> - <span>2</span>
            </li>
            <li className="pb-2 flex items-center justify-between">
              <span>Trousers</span> - <span>4</span>
            </li>
            <li className="pb-2 flex items-center justify-between">
              <span>Bed Sheets</span> - <span>5</span>
            </li>
            <li className="pb-2 flex items-center justify-between">
              <span>Duvee</span> - <span>1</span>
            </li>
            <li className="pb-2 flex items-center justify-between">
              <span>Singlet</span> - <span>10</span>
            </li>
            <li className="pb-2 flex items-center justify-between">
              <span>Jackets</span> - <span>2</span>
            </li>
          </ul>
        </p>
        <p className="flex items-center gap-2 w-full border-b px-4 py-4 bg-cyan-50 order">
          <span className="font-semibold !tracking-widest w-[40%]  align-text-top">
            Arrived at :
          </span>{" "}
          <span className="text-center font-semibold text-xl text-green-600 w-[60%] mx-auto">
            12 : 02 : 15 PM
            <span className="text-sm ml-4 text-slate-700">June 12, 2024</span>
          </span>{" "}
        </p>
        <p className="flex items-center gap-2 w-full border-b px-4 py-4 ">
          <span className="font-semibold !tracking-widest w-[40%] rounded-b">
            Countdown to delivery :
          </span>{" "}
          <span className="text-center font-semibold text-xl text-orange-500 w-[60%] mx-auto">
            3 : 42 : 33
            <span
              className={`text-sm ml-4 text-slate-700 ${
                darkMode ? "!text-white" : ""
              }`}
            >
              June 13, 2024
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default OngoingOrder;
