import React from "react";
import { useNavigate } from "react-router-dom";

const LatestOrders = ({ userEmail, amountPaid, paymentDate, name }) => {
  const navigate = useNavigate();
  return (
    <p className="flex items-center justify-between py-2 gap-4 text-sm scroll border-b overflow-auto">
      <span className="font-semibold">{name}</span>
      <span>{userEmail}</span>
      <span>₦ {amountPaid}</span>
      <span>{paymentDate}</span>
      <span
        className="rounded p-2 bg-green-400 text-white text-center cursor-pointer"
        onClick={() => navigate("/admin-dashboard2521/order")}
      >
        view details
      </span>
    </p>
  );
};

export default LatestOrders;
