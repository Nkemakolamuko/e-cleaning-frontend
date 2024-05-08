import React from "react";

const NotificationDetails = ({ title, desc, time, date, id, category }) => {
  return (
    <div className="border rounded p-4 h-fit flex flex-col text-slate-700 gap-2 bg-slate-100 shadow-lg transition-all duration-300">
      <p className="!tracking-widest font-semibold">{title}</p>
      {date && <p className="font-medium text-sm">Date: {date}</p>}
      <p>{desc}</p>
      <p className="text-sm pt-2">{time}</p>
    </div>
  );
};

export default NotificationDetails;
