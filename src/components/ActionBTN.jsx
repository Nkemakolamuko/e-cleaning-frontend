import React from "react";

const ActionBTN = ({ text }) => {
  return (
    <>
      <button className="bg-cyan-500 text-white text-sm py-2 font-semibold rounded-[3px] hover:bg-cyan-600 transition-all duration-300">
        {text}
      </button>
    </>
  );
};

export default ActionBTN;
