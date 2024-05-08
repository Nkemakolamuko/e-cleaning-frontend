import React, { useContext, useEffect, useState } from "react";
import { BgContext } from "../../App";
import { FaMotorcycle } from "react-icons/fa";
import {
  FaClock,
  FaHourglass,
  FaHourglassHalf,
  FaHourglassStart,
} from "react-icons/fa6";
import ActionBTN from "../ActionBTN";

const OngoingOrder = () => {
  const { darkMode } = useContext(BgContext);
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(1);
  const [hour, setHour] = useState(0);

  // // For seconds
  // useEffect(() => {
  // const interval = setInterval(() => {
  //   if (seconds === 0) {
  //     setSeconds(59);
  //     setMinutes(minutes - 1);
  //     return;
  //   } else {
  //     setSeconds(seconds - 1);
  //   }
  //   if (minutes === 0) {
  //     setHour(hour - 1);
  //   }
  //   if (hour === 0) {
  //     setSeconds(59);
  //     setMinutes(42);
  //     setHour(3);
  //   }
  //   return () => clearInterval(interval);
  // }, 1000);
  // }, [seconds]);

  // How I did it - I wrote for the seconds first with the if and else -- btw, the above was my first, nearly crashed my memory
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds == 0) {
        setSeconds(seconds + 59);
        setMinutes(minutes - 1);
        if (minutes == 0) {
          setMinutes(minutes + 59);
          setHour(hour - 1);
          if (hour == 0) {
            setSeconds(0);
            setMinutes(0);
            setHour(0);
          }
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <div
      className={`h-fit w-full border rounded shadow-lg text-sm md:text-base ${
        darkMode ? "dark-mode rounded border" : ""
      }`}
    >
      <div
        className={`flex flex-col bg-slate-50 ${
          darkMode ? "dark-mode rounded" : ""
        }`}
      >
        <p
          className={`flex items-center gap-2 w-full border-b px-4 py-4 bg-cyan-50 order rounded-t ${
            darkMode ? "dark-mode" : ""
          }`}
        >
          <span className="font-semibold !tracking-widest w-[40%] text-sm md:text-base">
            Cleaners Detail :
          </span>{" "}
          <span className="w-[60%] flex flex-col md:flex-row md:items-center mx-auto text-start px-2 font-bold md:justify-between gap-2">
            <span className="w-[100%] md:w-[30%]">Ugo Best</span>
            <a
              href="tel:+2347049876440"
              className={`bg-cyan-500 text-white text-sm py-3 px-4 w-[100%] md:w-[70%] font-semibold rounded-[3px] hover:bg-cyan-600 cursor-pointer text-center transition-all duration-300 ${
                darkMode ? "!bg-green-500" : ""
              }`}
            >
              Contact
            </a>
          </span>
        </p>
        <p className="flex items-start gap-2 w-full border-b px-4 py-4">
          <span className="font-semibold !tracking-widest w-[40%]  h-full align-top">
            Items :
          </span>{" "}
          <ul className="w-[60%] mx-auto align-middle text-center px-2 font-semibold">
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
        <p
          className={`flex items-center gap-2 w-full border-b px-4 py-4 bg-cyan-50 order rounded-t ${
            darkMode ? "dark-mode" : ""
          }`}
        >
          <span className="font-semibold !tracking-widest w-[40%] text-sm md:text-base align-text-top">
            Arrived at :
          </span>{" "}
          <span className="px-2 font-semibold text-xl text-green-600 w-[60%] mx-auto flex flex-col text-start md:flex-row md:gap-4 md:items-center">
            <span className="flex items-center gap-2 text-sm md:text-base">
              {" "}
              <FaClock className="text-slate-600" /> 12 : 02 : 15 PM
            </span>
            <span className="text-sm text-slate-700">
              {new Date().toLocaleDateString()}
            </span>
          </span>{" "}
        </p>
        <p className="flex items-center gap-2 w-full border-b px-4 py-4 ">
          <span className="font-semibold !tracking-widest w-[40%] rounded-b text-base md:text-base truncate">
            Countdown to delivery :
          </span>{" "}
          {seconds === 0 && minutes === 0 && hour === 0 ? (
            <div className="flex items-start md:items-center flex-col  md:gap-2 text-lg text-wrap">
              <p className="w-full overflow-hidden border-b-4 flex flex-row items-center delivery-parent">
                <FaMotorcycle className="w-full h-6 delivery -skew-x-12 mr-2" />
                <FaMotorcycle className="w-full h-6 delivery -skew-x-12 ml-2" />
              </p>{" "}
              <span className="text-green-500 -skew-x-12 text-sm md:text-base">
                Sent out for delivery!!!
              </span>{" "}
            </div>
          ) : (
            <span className="px-2 font-semibold text-xl text-orange-500 w-[60%] mx-auto flex flex-col text-start md:flex-row md:gap-4 md:items-center">
              <span className="flex items-center gap-2 text-sm md:text-base">
                <FaHourglassHalf className="text-slate-600" />
                {hour.toString().length < 2
                  ? "0" + hour + " h"
                  : hour + " h"} :{" "}
                {minutes.toString().length < 2
                  ? "0" + minutes + " m"
                  : minutes + " m"}{" "}
                :{" "}
                {seconds.toString().length < 2
                  ? "0" + seconds + " s"
                  : seconds + " s"}
              </span>
              <span
                className={`text-sm text-slate-700 ${
                  darkMode ? "!text-white" : ""
                }`}
              >
                {new Date().toDateString()}
              </span>
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default OngoingOrder;
