import React, { useContext, useEffect, useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaBell,
  FaEnvelope,
  FaExclamation,
  FaEyeSlash,
} from "react-icons/fa6";
import { BgContext } from "../../App";

const NotificationPageCard = ({
  title,
  desc,
  id,
  handleDeleteNotification,
  // delMsg,
  // setDelMsg,
  // deleteNoti,
  // setDeleteNoti,
}) => {
  const { darkMode } = useContext(BgContext);
  const [actions, setActions] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [deleteNoti, setDeleteNoti] = useState(false);
  const [delMsg, setDelMsg] = useState(false);

  return (
    <>
      {!deleteNoti ? (
        <div
          className={`md:max:-w-[90%] w-full shadow-md rounded flex-flex-col h-fit gap-3 border-t !bg-white border-t-slate-100 transition-all duration-300 ${
            darkMode ? "shadow-white" : ""
          }`}
        >
          <div className="flex items-center justify-between px-4 py-2">
            <p className="tracking-wider font-medium text-slate-700">{title}</p>
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
                  <span
                    className="py-2 text-center bg-rose-50 hover:bg-rose-100 text-sm text-rose-500 transition-all duration-300"
                    onClick={() => {
                      const sure = confirm("Are You Sure?");
                      if (sure) {
                        setDeleteNoti(true);
                      }
                      setTimeout(() => {
                        setDelMsg(true);
                      }, 2000);
                      handleDeleteNotification(id);
                    }}
                  >
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
            <div className="flex px-2 pb-2 items-center transition-all duration-300">
              <div className="p-2 bg-cyan-50 text-cyan-500 rounded-full">
                <FaBell className="w-8 h-8" />
              </div>
              <div className="text-sm p-2 text-slate-700">{desc}</div>
            </div>
          ) : (
            <div className="flex items-center justify-start pl-4 pb-2 transition-all duration-300">
              <div className="p-2 bg-rose-50 text-slate-500 rounded-full">
                <FaEyeSlash className="w-4 h-4" />
              </div>
              <div className="text-sm p-2 text-slate-500">
                Content Hidden - use{" "}
                <code className="bg-green-50">Actions</code> to show
              </div>
            </div>
          )}
        </div>
      ) : (
        <p
          className={`${
            delMsg
              ? "hidden"
              : "bg-green-50 p-2 rounded-md text-green-600 text-center flex justify-center items-center"
          }`}
        >
          Deleted Successfully
        </p>
      )}
    </>
  );
};

export default NotificationPageCard;
