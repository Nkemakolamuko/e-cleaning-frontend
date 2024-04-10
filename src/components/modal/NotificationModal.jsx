import React from "react";
import { FaTimes } from "react-icons/fa";
import CloseButton from "../CloseButton";

const NotificationModal = ({ handleCloseNotificationModal }) => {
  return (
    <div className="max-w-fit h-fit bg-white flex items-center flex-col justify-center absolute top-2 right-16 z-[999] shadow-lg shadow-black/20 rounded p-2 transition-all duration-300">
      <div className="w-full flex items-center justify-between">
        <p className="tracking-widest font-medium">Notifications</p>
        <CloseButton handleModalClose={handleCloseNotificationModal} />
      </div>
      <div className="px-4 py-6 flex flex-col w-full bg-white my-[100px] text-center justify-center mx-[80px] text-slate-600">
        None Yet
      </div>
    </div>
  );
};

export default NotificationModal;
