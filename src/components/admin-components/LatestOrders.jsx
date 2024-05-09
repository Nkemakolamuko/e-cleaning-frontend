import React from "react";

const LatestOrders = ({ userEmail, amountPaid, paymentDate }) => {
  return (
    <p className="flex items-center justify-between py-2 gap-4 text-sm scroll border-b overflow-auto">
      <span className="font-semibold">User</span>
      <span>{userEmail}</span>
      <span>₦ {amountPaid}</span>
      <span>{paymentDate}</span>
      <span className="rounded p-2 bg-green-400 text-white text-center cursor-pointer">
        view details
      </span>
    </p>
  );
};

export default LatestOrders;
