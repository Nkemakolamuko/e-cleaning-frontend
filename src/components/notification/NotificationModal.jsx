import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import CloseButton from "../CloseButton";
import NotificationModalCards from "./NotificationModalCards";

const NotificationModal = ({ handleCloseNotificationModal }) => {
  const [noti, setNoti] = useState(true);
  return (
    <div className="max-w-[300px] h-fit bg-white flex items-center flex-col justify-center absolute top-2 right-16 z-[999] shadow-lg shadow-black/20 rounded transition-all duration-300">
      <div className="w-full flex items-center justify-between p-2">
        <p className="tracking-widest font-medium">Notifications</p>
        <CloseButton handleModalClose={handleCloseNotificationModal} />
      </div>
      {noti ? (
        <div className="flex flex-col gap-1 max-w-[100%]">
          {/* Max 5 for small screen 9 for md and up */}
          <NotificationModalCards />
          <NotificationModalCards />
          <NotificationModalCards />
          <NotificationModalCards />
          <NotificationModalCards />
          <NotificationModalCards />
          <NotificationModalCards />
          <NotificationModalCards />
          <NotificationModalCards />
        </div>
      ) : (
        <div className="px-4 py-6 flex flex-col w-full bg-white my-[100px] text-center justify-center mx-[80px] text-slate-600">
          None Yet
        </div>
      )}
    </div>
  );
};

export default NotificationModal;
