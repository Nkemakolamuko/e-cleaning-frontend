import React from "react";

const NotificationDetails = ({ title, desc, time, date, id, category }) => {
  return (
    <div className="border rounded p-4 h-fit flex flex-col text-slate-700 gap-2 z-10 bg-white shadow transition-all duration-300">
      <p className="!tracking-widest font-semibold">{title}</p>
      {date && <p className="font-medium text-sm">Date: {date}</p>}
      <p className="text-sm">{desc}</p>
      <p className="text-sm pt-2">{time}</p>
    </div>
  );
};

export default NotificationDetails;
