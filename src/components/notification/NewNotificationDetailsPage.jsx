import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import notificationDb from "../../../db/notificationDb";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { BgContext } from "../../App";

const NewNotificationDetailsPage = () => {
  const { notiId } = useParams();
  const { darkMode } = useContext(BgContext);
  const [notification, setNotification] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const foundNotification = notificationDb.find((value) => {
      return value.id == notiId;
    });
    setNotification([foundNotification]);
  }, []);

  return (
    <div className={`p-2 h-screen ${darkMode ? "dark-mode" : ""}`}>
      <p
        className={`flex items-center text-slate-700 gap-2 my-4 active:bg-slate-100 rounded w-fit pr-2 py-2 ${
          darkMode ? "!text-slate-200 active:bg-slate-800" : ""
        }`}
        onClick={() => navigate("/dashboard/notifications")}
      >
        <FaAngleLeft />
        <span>Go back</span>
      </p>
      {notification.map((noti) => (
        <div
          className={`border-2 w-fit mx-auto rounded p-4 h-fit flex flex-col text-slate-700 gap-2 shadow-lg transition-all duration-300 ${
            darkMode && "!text-slate-200"
          }`}
          key={noti.id}
        >
          <p className="!tracking-widest font-semibold">{noti.title}</p>
          {noti.date && (
            <p className="font-medium text-sm">Date: {noti.date}</p>
          )}
          <p>{noti.desc}</p>
          <p className="text-sm pt-2">{noti.time}</p>
        </div>
      ))}
    </div>
  );
};

export default NewNotificationDetailsPage;
