import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import NotificationPageCard from "../components/notification/NotificationPageCard";
import { FaEyeSlash, FaTrashCan } from "react-icons/fa6";
import { BgContext } from "../App";
import notificationDb from "../../db/notificationDb";

const Notifications = () => {
  const { notification, setNotification } = useContext(BgContext);

  // const [deleteNoti, setDeleteNoti] = useState(false);
  // const [delMsg, setDelMsg] = useState(false);

  useEffect(() => {
    setNotification(notificationDb);
  }, []);

  const handleDeleteNotification = (id) => {
    setNotification(
      notification.filter((value) => {
        return value.id !== id;
      })
    );
    // const sure = confirm("Are You Sure?");
    // if (sure) {
    //   setDeleteNoti(true);
    // }
    // setTimeout(() => {
    //   setDelMsg(true);
    // }, 2000);
  };

  return (
    <div>
      <Title title="Notifications" />
      {notification?.length !== 0 ? (
        <div className="md:max-w-[90%] w-full mt-5 flex flex-col md:grid md:grid-cols-2 mb-20 gap-2 md:gap-5">
          {notification?.map(({ title, desc, id }) => (
            <NotificationPageCard
              title={title}
              desc={desc}
              key={id}
              id={id}
              handleDeleteNotification={handleDeleteNotification}
              // delMsg={delMsg}
              // setDelMsg={setDelMsg}
              // deleteNoti={deleteNoti}
              // setDeleteNoti={setDeleteNoti}
            />
          ))}
        </div>
      ) : (
        <div className="md:max-w-[90%] w-full flex justify-center items-center text-slate-500 h-[70vh]">
          No notification yet
        </div>
      )}

      <div className="w-full flex items-center justify-center">
        <div className="flex items-center fixed justify-between text-slate-500 bottom-0 w-full md:w-[50%] !bg-white cursor-pointer md:rounded-md text-sm transition-all duration-300">
          <p
            className="flex flex-col items-center px-2 py-2 md:py-3 w-[50%] bg-rose-50 hover:bg-rose-100 hover:text-rose-600 md:rounded-l-md transition-all duration-300"
            onClick={() => {
              const youSure = confirm("Are you sure? ");
              youSure && setNotification([]);
            }}
          >
            <FaTrashCan className="w-4 h-4 md:w-5 md:h-5" /> Delete all
          </p>
          <p className="flex flex-col items-center px-2 py-2 md:py-3 w-[50%] bg-slate-100 hover:bg-slate-200 hover:text-slate-800 md:rounded-r-md transition-all duration-300">
            <FaEyeSlash className="w-4 h-4 md:w-5 md:h-5" /> Collapse all
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
