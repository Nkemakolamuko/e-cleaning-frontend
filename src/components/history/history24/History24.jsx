import React, { useContext, useState } from "react";
import { BgContext } from "../../../App";
import January23 from "./January23";
import Feb23 from "./Feb23";
import March23 from "./March23";
import April23 from "./April23";
import May23 from "./May23";
import June23 from "./June23";
import August23 from "./August23";
import Sept23 from "./Sept23";
import Oct23 from "./Oct23";
import Nov23 from "./Nov23";
import Dec23 from "./Dec23";
import July23 from "./July23";

const History24 = () => {
  const { darkMode } = useContext(BgContext);
  const [month, setMonth] = useState("january");

  // I'd fetch the History in a Context and then use it everywhere - but I'd using a switch statement or condition to the exact dates for each month
  return (
    <div
      className={`${
        darkMode ? "dark-mode" : ""
      } flex flex-col text-xs mt-32 text-nowrap md:text-base md:mt-0`}
    >
      {month === "january" && (
        <January23
          handleNextMonthL={() => {
            setMonth("dec");
          }}
          handleNextMonthR={() => {
            setMonth("february");
          }}
        />
      )}

      {month === "february" && (
        <Feb23
          handleNextMonthL={() => {
            setMonth("january");
          }}
          handleNextMonthR={() => {
            setMonth("march");
          }}
        />
      )}

      {month === "march" && (
        <March23
          handleNextMonthL={() => {
            setMonth("february");
          }}
          handleNextMonthR={() => {
            setMonth("apr");
          }}
        />
      )}

      {month === "apr" && (
        <April23
          handleNextMonthL={() => {
            setMonth("march");
          }}
          handleNextMonthR={() => {
            setMonth("may");
          }}
        />
      )}
      {month === "may" && (
        <May23
          handleNextMonthL={() => {
            setMonth("apr");
          }}
          handleNextMonthR={() => {
            setMonth("june");
          }}
        />
      )}
      {month === "june" && (
        <June23
          handleNextMonthL={() => {
            setMonth("may");
          }}
          handleNextMonthR={() => {
            setMonth("july");
          }}
        />
      )}
      {month === "july" && (
        <July23
          handleNextMonthL={() => {
            setMonth("june");
          }}
          handleNextMonthR={() => {
            setMonth("aug");
          }}
        />
      )}
      {month === "aug" && (
        <August23
          handleNextMonthL={() => {
            setMonth("july");
          }}
          handleNextMonthR={() => {
            setMonth("sept");
          }}
        />
      )}
      {month === "sept" && (
        <Sept23
          handleNextMonthL={() => {
            setMonth("aug");
          }}
          handleNextMonthR={() => {
            setMonth("oct");
          }}
        />
      )}
      {month === "oct" && (
        <Oct23
          handleNextMonthL={() => {
            setMonth("sept");
          }}
          handleNextMonthR={() => {
            setMonth("nov");
          }}
        />
      )}
      {month === "nov" && (
        <Nov23
          handleNextMonthL={() => {
            setMonth("oct");
          }}
          handleNextMonthR={() => {
            setMonth("dec");
          }}
        />
      )}
      {month === "dec" && (
        <Dec23
          handleNextMonthL={() => {
            setMonth("nov");
          }}
          handleNextMonthR={() => {
            setMonth("january");
          }}
        />
      )}
    </div>
  );
};

export default History24;
