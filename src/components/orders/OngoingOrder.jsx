import React, { useContext, useEffect, useState } from "react";
import { BgContext } from "../../App";
import { FaMotorcycle } from "react-icons/fa";
import { FaClock, FaHourglass } from "react-icons/fa6";

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
          <span className="w-[60%] mx-auto text-start px-2 font-bold">1</span>
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
        <p className="flex items-center gap-2 w-full border-b px-4 py-4 bg-cyan-50 order">
          <span className="font-semibold !tracking-widest w-[40%]  align-text-top">
            Arrived at :
          </span>{" "}
          <span className="text-center font-semibold text-xl text-green-600 w-[60%] mx-auto flex flex-col md:flex-row md:gap-4 md:items-baseline">
            <FaClock />
            <span>12 : 02 : 15 PM</span>
            <span className="text-sm text-slate-700">
              {new Date().toLocaleDateString()}
            </span>
          </span>{" "}
        </p>
        <p className="flex items-center gap-2 w-full border-b px-4 py-4 ">
          <span className="font-semibold !tracking-widest w-[40%] rounded-b">
            Countdown to delivery :
          </span>{" "}
          {seconds === 0 && minutes === 0 && hour === 0 ? (
            <div className="flex items-start md:items-center flex-col  md:gap-2 text-lg text-wrap">
              <p className="w-full overflow-hidden border-b-4 flex flex-row items-center delivery-parent">
                <FaMotorcycle className="w-full h-6 delivery -skew-x-12 mr-2" />
                <FaMotorcycle className="w-full h-6 delivery -skew-x-12 ml-2" />
              </p>{" "}
              <span className="text-green-500 -skew-x-12">
                Sent out for delivery!!!
              </span>{" "}
            </div>
          ) : (
            <span className="text-center font-semibold text-xl text-orange-500 w-[60%] mx-auto flex flex-col md:flex-row md:gap-4 md:items-baseline">
              <FaHourglass />
              <span>
                {hour.toString().length < 2 ? "0" + hour + " h" : hour + " h"} :{" "}
                {minutes.toString().length < 2
                  ? "0" + minutes + " mins"
                  : minutes + " mins"}{" "}
                :{" "}
                {seconds.toString().length < 2
                  ? "0" + seconds + " secs"
                  : seconds + " secs"}
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
