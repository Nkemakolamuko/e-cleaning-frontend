import React from "react";
import { FaTimes } from "react-icons/fa";

const CloseButton = ({ handleModalClose }) => {
  return (
    <p
      className="text-rose-600 hover:text-white hover:bg-rose-600 p-2 md:p-2 font-semibold ml-auto cursor-pointer active:scale-90 transition-all duration-300"
      onClick={handleModalClose}
    >
      <FaTimes className="w-6 md:w-8 h-6 md:h-8" />
    </p>
  );
};

export default CloseButton;
