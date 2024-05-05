import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import NotificationPageCard from "../components/notification/NotificationPageCard";
import { FaEyeSlash, FaTrashCan } from "react-icons/fa6";
import { BgContext } from "../App";
import notificationDb from "../../db/notificationDb";
import NewNotificationPageCard from "../components/notification/NewNotificationPageCard";
import NotificationDetails from "../components/notification/NotificationDetails";
import { ToastContainer, toast } from "react-toastify";
import NewNotificationPageCardSmall from "../components/notification/NewNotificationPageCardSmall";

const Notifications = () => {
  const { notification, setNotification, darkMode } = useContext(BgContext);
  const [notiId, setNotiId] = useState(null);
  const [notiDetails, setNotiDetails] = useState(null);

  // const [deleteNoti, setDeleteNoti] = useState(false);
  // const [delMsg, setDelMsg] = useState(false);

  useEffect(() => {
    setNotification(notificationDb);
  }, []);

  const handleDeleteNotification = (id) => {
    const youSure = window.confirm("Are you sure?");
    if (youSure) {
      setNotification(
        notification.filter((value) => {
          return value.id !== id;
        })
      );
      toast.success("Notification deleted", {
        autoClose: 2000,
        position: "top-left",
      });
    } else {
      return;
    }
  };

  const handleClick = (id) => {
    localStorage.setItem("noti-id", JSON.stringify(id));
    setNotiId(id);
  };

  useEffect(() => {
    const foundItem = notification.find((val) => {
      return val.id == notiId;
    });
    setNotiDetails([foundItem]);
  }, [notiId]);

  return (
    <div>
      <ToastContainer />
      <Title title="Notifications" />
      {notification?.length !== 0 ? (
        <div className="flex flex-col md:grid md:grid-cols-2 mt-2 w-full">
          {/* Small Screen Noti Card */}
          <div className="md:max-w-[90%] w-full flex flex-col mb-20 gap-4 md:gap-5 md:hidden">
            {notification?.map(({ title, desc, id, date, time }) => (
              <NewNotificationPageCardSmall
                date={date}
                title={title}
                desc={desc}
                key={id}
                time={time}
                id={id}
                handleDelete={() => handleDeleteNotification(id)}
              />
            ))}
          </div>
          {/* Big Screen Noti Card */}
          <div className="md:max-w-[90%] w-full md:flex md:flex-col mb-20 gap-4 md:gap-5 hidden">
            {notification?.map(({ title, desc, id, date, time }) => (
              // <NotificationPageCard
              //   title={title}
              //   desc={desc}
              //   key={id}
              //   id={id}
              //   handleDeleteNotification={handleDeleteNotification}
              //   // delMsg={delMsg}
              //   // setDelMsg={setDelMsg}
              //   // deleteNoti={deleteNoti}
              //   // setDeleteNoti={setDeleteNoti}
              // />
              <NewNotificationPageCard
                date={date}
                title={title}
                desc={desc}
                key={id}
                time={time}
                handleClick={() => handleClick(id)}
                handleDelete={() => handleDeleteNotification(id)}
              />
            ))}
          </div>
          <div className="fixed right-2 top-32 w-1/2 z-[12] hidden md:flex md:flex-col">
            <h2 className="text-base mb-4 px-1 font-semibold">Details</h2>
            {notiDetails?.map((notiFound) => (
              <NotificationDetails
                id={notiFound?.id}
                key={notiFound?.id}
                date={notiFound?.date}
                title={notiFound?.title}
                desc={notiFound?.desc}
                time={notiFound?.time}
                category={notiFound?.category}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="md:max-w-[90%] w-full flex justify-center items-center text-slate-500 h-[70vh]">
          No notification yet
        </div>
      )}

      <div className="bottom-0 fixed w-fit rounded-r">
        <p
          className={`flex flex-col items-center px-2 py-2 md:py-3 w-full bg-rose-400 hover:bg-rose-500 text-slate-200 active:scale-95 md:rounded-r cursor-pointer transition-all duration-300 z-[11] ${
            darkMode ? "bg-rose-800 active:bg-rose-900 hover:bg-rose-900" : ""
          }`}
          onClick={() => {
            const youSure = window.confirm("Are you sure? ");
            youSure && setNotification([]);
          }}
        >
          <FaTrashCan className="w-4 h-4 md:w-5 md:h-5" /> Delete all
        </p>
      </div>
    </div>
  );
};

export default Notifications;
