import React from "react";
import Title from "../components/Title";
import NotificationPageCard from "../components/notification/NotificationPageCard";

const Notifications = () => {
  return (
    <div>
      <Title title="Notifications" />
      <div className="md:max-w-[90%] w-full mt-5 flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-5">
        <NotificationPageCard />
        <NotificationPageCard />
        <NotificationPageCard />
        <NotificationPageCard />
        <NotificationPageCard />
        <NotificationPageCard />
        <NotificationPageCard />
        <NotificationPageCard />
      </div>
    </div>
  );
};

export default Notifications;
