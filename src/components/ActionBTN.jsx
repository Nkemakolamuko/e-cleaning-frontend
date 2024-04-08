import React from "react";

const ActionBTN = ({ text }) => {
  return (
    <>
      <button className="bg-green-400 text-white text-sm py-2 font-semibold rounded-[3px] hover:bg-green-600 transition-all duration-300">
        {text}
      </button>
    </>
  );
};

export default ActionBTN;
