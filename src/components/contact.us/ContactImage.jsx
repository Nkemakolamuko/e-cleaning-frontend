import React, { useContext } from "react";
import { FaCamera, FaPhoneAlt } from "react-icons/fa";
import { BgContext } from "../../App";

const ContactImage = ({ means }) => {
  const { darkMode } = useContext(BgContext);
  return (
    <>
      <div
        className={`flex flex-col gap-2 items-center group w-fit transition-all duration-300 ease-in-out ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        <p className="relative rounded-full border-4 md:border-cyan-400 border-cyan-400 group-hover:border-cyan-500 w-fit overflow-hidden p-6 transition-all duration-300 ease-in-out">
          <FaPhoneAlt
            className={`w-20 md:w-24 h-20 md:h-24 text-neutral-800 md:text-neutral-800 group-hover:text-neutral-900 ${
              darkMode
                ? "dark-mode group-hover:!text-neutral-100 !text-neutral-400"
                : ""
            }`}
          />
        </p>

        <p className="text-base md:text-lg tracking-widest">
          Contact Us Using{" "}
          <span className="font-medium tracking-tighter">{means}</span>
        </p>
      </div>
    </>
  );
};

export default ContactImage;
