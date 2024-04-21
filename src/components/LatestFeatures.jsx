import React, { useContext } from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import { SideBarContext } from "../layout/MainNav";
import { BgContext } from "../App";

const LatestFeatures = () => {
  const { styleSidebar } = useContext(SideBarContext);
  const { darkMode } = useContext(BgContext);

  return (
    <div className={`${darkMode ? "dark-mode" : ""}`}>
      <h2
        className={`font-semibold tracking-widest text-gray-800 ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        Latest Features And Updates
      </h2>
      <div
        className={`h-fit w-full
        } py-2 mt-2 overflow-hidden flex items-center border-y bg-white transition-all duration-300`}
      >
        <div className="update flex item-center w-full gap-6">
          <div className="flex items-center gap-2 w-fit text-nowrap">
            <FaCircleExclamation className="text-[#FFC83D]" />
            <h2 className="font-semibold  ">We've Added Search Filter!!</h2>
          </div>
          <div className="flex items-center gap-2 w-fit text-nowrap">
            <FaCircleExclamation className="text-[#FFC83D]" />
            <h2 className="font-semibold  ">We've Partnered With Kuda</h2>
          </div>
          <div className="flex items-center gap-2 w-fit text-nowrap">
            <FaCircleExclamation className="text-[#FFC83D]" />
            <h2 className="font-semibold  ">
              Your Laundry Will Be Delivered Within 24hrs
            </h2>
          </div>
          <div className="flex items-center gap-2 w-fit text-nowrap">
            <FaCircleExclamation className="text-[#FFC83D]" />
            <h2 className="font-semibold my-1">
              {" "}
              We've Expanded To <span className="text-green-500">
                Lagos
              </span>{" "}
              and <span className="text-green-500">Abuja</span> !!
            </h2>
          </div>
        </div>

        <div className="mx-2"></div>

        <div className="update flex item-center w-full gap-6">
          <div className="flex items-center gap-2 w-fit text-nowrap">
            <FaCircleExclamation className="text-[#FFC83D]" />
            <h2 className="font-semibold  ">We've Added Search Filter!!</h2>
          </div>
          <div className="flex items-center gap-2 w-fit text-nowrap">
            <FaCircleExclamation className="text-[#FFC83D]" />
            <h2 className="font-semibold  ">We've Partnered With Kuda</h2>
          </div>
          <div className="flex items-center gap-2 w-fit text-nowrap">
            <FaCircleExclamation className="text-[#FFC83D]" />
            <h2 className="font-semibold  ">
              Your Laundry Will Be Delivered Within 24hrs
            </h2>
          </div>
          <div className="flex items-center gap-2 w-fit text-nowrap">
            <FaCircleExclamation className="text-[#FFC83D]" />
            <h2 className="font-semibold my-1">
              {" "}
              We've Expanded To <span className="text-green-500">
                Lagos
              </span>{" "}
              and <span className="text-green-500">Abuja</span> !!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestFeatures;
