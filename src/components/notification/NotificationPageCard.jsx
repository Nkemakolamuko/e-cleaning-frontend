import React, { useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaEnvelope,
  FaExclamation,
} from "react-icons/fa6";

const NotificationPageCard = () => {
  const [actions, setActions] = useState(false);
  const [collapse, setCollapse] = useState(true);
  return (
    <div className="md:max:-w-[90%] w-full shadow-md rounded flex-flex-col h-fit gap-3 border-t border-t-slate-100 transition-all duration-300">
      <div className="flex items-center justify-between p-2">
        <p className="tracking-wider font-medium text-slate-700">
          Email Verification
        </p>
        <div className="flex flex-col cursor-pointer transition-all duration-300">
          <p
            className={`flex justify-between items-center bg-green-50 text-green-500 text-sm w-[85px] px-2 py-1 gap-2 hover:bg-green-100 hover:shadow ${
              actions && "shadow"
            } transition-all duration-300 relative`}
            onClick={() => setActions(!actions)}
          >
            <span>Actions</span>{" "}
            <span>
              {actions ? (
                <FaAngleUp className="w-4 h-4" />
              ) : (
                <FaAngleDown className="w-4 h-4" />
              )}
            </span>
          </p>
          {actions && (
            <p className="flex flex-col rounded-b cursor-pointer shadow z-50 mt-7 w-[85px] absolute transition-all duration-300">
              <span className="py-2 text-center bg-rose-50 hover:bg-rose-100 text-sm text-rose-500 transition-all duration-300">
                Delete
              </span>
              <span
                className="py-2 text-center bg-slate-50 hover:bg-slate-100 text-sm text-slate-500 transition-all duration-300"
                onClick={() => {
                  setCollapse(!collapse);
                  setActions(false);
                }}
              >
                {collapse ? "Collapse" : "Show"}
              </span>
            </p>
          )}
        </div>
      </div>

      {collapse ? (
        <div className="flex items-center transition-all duration-300">
          <div className="p-2 bg-cyan-50 text-cyan-500 rounded-full">
            <FaEnvelope className="w-8 h-8" />
          </div>
          <div className="text-sm p-2 text-slate-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis nulla quis saepe dolor
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center pb-2 transition-all duration-300">
          <div className="p-2 bg-rose-50 text-slate-500 rounded-full">
            <FaExclamation className="w-4 h-4" />
          </div>
          <div className="text-sm p-2 text-slate-500">
            Content Hidden - use Actions to show
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationPageCard;
