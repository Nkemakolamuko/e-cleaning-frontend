import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import CloseButton from "../CloseButton";
import NotificationModalCards from "./NotificationModalCards";
import notificationDb from "../../../db/notificationDb";
import { BgContext } from "../../App";

const NotificationModal = ({ handleCloseNotificationModal }) => {
  const { notification, setNotification, darkMode } = useContext(BgContext);
  const navigate = useNavigate();

  useEffect(() => {
    setNotification(notificationDb);
  }, []);

  const handleNavigation = () => {
    localStorage.setItem("active", "/notifications");
    navigate("/dashboard/notifications");
  };

  return (
    <div
      className={`max-w-[300px] h-fit bg-white flex items-center flex-col justify-center absolute top-14 right-16 z-[999] shadow-lg shadow-black/20 rounded transition-all duration-300 ${
        darkMode ? "dark-mode shadow-lg shadow-white/40 border" : ""
      }`}
    >
      <div
        className={`w-full flex items-center justify-between px-2 pt-2 ${
          darkMode ? "dark-mode border rounded-t" : ""
        }`}
      >
        <p
          className={`tracking-widest font-medium ${
            darkMode ? "dark-mode" : ""
          }`}
        >
          Notifications
        </p>
        <CloseButton handleModalClose={handleCloseNotificationModal} />
      </div>
      {notification?.length !== 0 ? (
        <div className="flex flex-col gap-2 max-w-[100%]">
          {notification?.map((value) => (
            <NotificationModalCards
              title={value.title}
              desc={value.desc}
              key={value.id}
              handleNavigation={handleNavigation}
            />
          ))}
        </div>
      ) : (
        <div className="px-4 py-6 flex flex-col w-full !bg-white my-[100px] text-center justify-center mx-[80px] text-slate-600">
          None Yet
        </div>
      )}
    </div>
  );
};

export default NotificationModal;
