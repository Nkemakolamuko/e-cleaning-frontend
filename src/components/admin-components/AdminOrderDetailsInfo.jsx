import React from "react";

const AdminOrderDetailsInfo = ({ icon, title, infoOne, infoTwo }) => {
  return (
    <div className="flex items-start gap-3">
      <p className="bg-green-100 text-green-600 rounded-full p-3">{icon}</p>
      <p className="flex flex-col gap-1">
        <span className="font-semibold">{title}</span>
        <span>{infoOne}</span>
        <span>{infoTwo}</span>
      </p>
    </div>
  );
};

export default AdminOrderDetailsInfo;
