import React from "react";

const ActionBTN = ({ text }) => {
  return (
    <>
      <a
        href="tel:+2347049876440"
        className="bg-cyan-500 text-white text-sm py-3 font-semibold rounded-[3px] hover:bg-cyan-600 cursor-pointer text-center transition-all duration-300"
      >
        {text}
      </a>
    </>
  );
};

export default ActionBTN;
